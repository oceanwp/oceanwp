import { options } from "../../constants";
import { offset } from "../../lib/utils";
import delegate from "delegate";

class WooFloatingBar {
  #elements = {
    floatingBar: document.querySelector(".owp-floating-bar"),
  };
  #offset;
  #tabsTopOffset;

  constructor() {
    if (this.#elements.floatingBar) {
      this.#setElements();
      this.#start();
      this.#setupEventListeners();
    }
  }

  #setElements = () => {
    this.#elements = {
      ...this.#elements,
      header: document.querySelector("#site-header"),
      product: document.querySelector(".woocommerce div.product"),
      productTabs: document.querySelector(
        ".woocommerce div.product .woocommerce-tabs"
      ),
      WPAdminbar: document.querySelector("#wpadminbar"),
      productCarts: document.querySelectorAll(".woocommerce div.product .cart"),
      html: document.querySelector("html"),
    };
  };

  #start = () => {
    this.#onDocumentScroll();
    this.#onWindowScroll();
  };

  #setupEventListeners = () => {
    document.addEventListener("scroll", this.#onDocumentScroll);
    window.addEventListener("scroll", this.#onWindowScroll);

    this.#elements.floatingBar
      ?.querySelector("button.button.top")
      ?.addEventListener("click", this.#onTopBtnClick);

    delegate(
      document.body,
      ".owp-floating-bar .floating_add_to_cart_button:not(.disabled)",
      "click",
      this.#onAddToCartBtnClick
    );

    /**
     * Because WooCommerce uses jQuery custom events,
     * we also use jQuery for compatibility with WooCommerce and extensions.
     */
    jQuery(document.body).on("added_to_cart", this.#updateCart);
  };

  #onDocumentScroll = () => {
    const header = this.#elements.header;
    const stickyTopbarWrapper = document.querySelector(
      "#top-bar-sticky-wrapper"
    );

    this.#offset = 0;
    this.#tabsTopOffset = this.#elements.productTabs
      ? offset(this.#elements.productTabs).top
      : 0;

    if (this.#elements.WPAdminbar && window.innerWidth > 600) {
      this.#offset += this.#elements.WPAdminbar.offsetHeight;
    }

    if (stickyTopbarWrapper) {
      this.#offset += stickyTopbarWrapper.offsetHeight;
    }

    if (header) {
      if (header.classList.contains("top-header")) {
        this.#offset += header.querySelector(".header-top")?.offsetHeight || 0;
      } else if (header.classList.contains("medium-header")) {
        if (
          header
            .querySelector(".bottom-header-wrap")
            ?.classList.contains("fixed-scroll")
        ) {
          this.#offset +=
            header.querySelector(".bottom-header-wrap")?.offsetHeight || 0;
        } else {
          this.#offset +=
            document.querySelector(".is-sticky #site-header-inner")
              ?.offsetHeight || 0;
        }
      } else if (
        header.classList.contains("center-header") ||
        header.classList.contains("custom-header")
      ) {
        this.#offset += header.offsetHeight;
      } else if (header.classList.contains("fixed-scroll")) {
        this.#offset += parseInt(header.getAttribute("data-height"), 10) || 0;
      }
    }

    this.#tabsTopOffset =
      this.#tabsTopOffset !== 0 ? this.#tabsTopOffset - this.#offset : 0;

    this.#elements.floatingBar.style.top = `${this.#offset}px`;
  };

  #onWindowScroll = () => {
    if (this.#tabsTopOffset !== 0) {
      if (window.pageYOffset > this.#tabsTopOffset) {
        this.#elements.floatingBar.classList.add("show");
      } else {
        this.#elements.floatingBar.classList.remove("show");
      }
    } else if (window.pageYOffset > this.#offset) {
      this.#elements.floatingBar.classList.add("show");
    } else {
      this.#elements.floatingBar.classList.remove("show");
    }
  };

  #onTopBtnClick = (event) => {
    event.preventDefault();

    if (this.#elements.productCarts.length) {
      const scrollPosition =
        offset(this.#elements.productCarts[0]).top - this.#offset;

      this.#elements.html.scrollTo({
        top: Math.round(scrollPosition),
        behavior: "smooth",
      });
    }
  };

  #onAddToCartBtnClick = (event) => {
    const addToCartBtn = event.delegateTarget;
    const form = addToCartBtn.closest("form.cart");

    if (!form) {
      return;
    }

    const formData = this.#getFormData(form, addToCartBtn);

    if (!formData) {
      return;
    }

    event.preventDefault();

    this.#clearNotices();

    addToCartBtn.disabled = true;
    addToCartBtn.classList.remove("added");
    addToCartBtn.classList.add("loading");

    jQuery(document.body).trigger("adding_to_cart", [
      jQuery(addToCartBtn),
      this.#formDataToArray(formData),
    ]);

    jQuery.ajax({
      type: "POST",
      url: options.ajax_url,
      data: formData,
      processData: false,
      contentType: false,

      success: (response) => {
        if (response && response.error) {
          this.#renderNotices(response.notices);

          jQuery(document.body).trigger("oceanwp_ajax_add_to_cart_error", [
            response,
            jQuery(addToCartBtn),
            "floating_bar",
          ]);

          return;
        }

        if (!response || !response.fragments) {
          jQuery(document.body).trigger("oceanwp_ajax_add_to_cart_error", [
            response,
            jQuery(addToCartBtn),
            "floating_bar",
          ]);

          return;
        }

        jQuery(document.body).trigger("added_to_cart", [
          response.fragments,
          response.cart_hash,
          jQuery(addToCartBtn),
        ]);

        if (options.cart_redirect_after_add === "yes") {
          window.location = options.cart_url;
        }
      },

      error: (xhr) => {
        jQuery(document.body).trigger("oceanwp_ajax_add_to_cart_error", [
          xhr,
          jQuery(addToCartBtn),
          "floating_bar",
        ]);
      },

      complete: () => {
        addToCartBtn.disabled = false;
        addToCartBtn.classList.remove("loading");
      },
    });
  };

  #updateCart = (event, fragments, cartHash, $button) => {
    const cartBtn = typeof $button === "undefined" ? false : $button.get(0);

    if (!cartBtn || !this.#elements.floatingBar.contains(cartBtn)) {
      return;
    }

    cartBtn.classList.remove("loading");
    cartBtn.classList.add("added");

    if (!options.is_cart && !cartBtn.parentNode.querySelector(".added_to_cart")) {
      cartBtn.insertAdjacentHTML(
        "afterend",
        `<a href="${options.cart_url}" class="added_to_cart wc-forward" title="${options.view_cart}">${options.view_cart}</a>`
      );
    }
  };

  #getFormData = (form, addToCartBtn) => {
    const formData = new FormData(form);
    const productId = formData.get("product_id") || addToCartBtn.value;

    if (!productId) {
      return false;
    }

    formData.delete("add-to-cart");
    formData.set("product_id", productId);
    formData.set("action", "oceanwp_add_cart_floating_bar");
    formData.set("nonce", options.nonce);

    return formData;
  };

  #formDataToArray = (formData) => {
    const data = [];

    formData.forEach((value, name) => {
      data.push({ name, value });
    });

    return data;
  };

  #clearNotices = () => {
    const noticesWrapper = document.querySelector(".woocommerce-notices-wrapper");

    if (noticesWrapper) {
      noticesWrapper.innerHTML = "";
    }
  };

  #renderNotices = (notices) => {
    if (!notices) {
      return;
    }

    let noticesWrapper = document.querySelector(".woocommerce-notices-wrapper");

    if (!noticesWrapper && this.#elements.product?.parentNode) {
      noticesWrapper = document.createElement("div");
      noticesWrapper.className = "woocommerce-notices-wrapper";
      this.#elements.product.parentNode.insertBefore(
        noticesWrapper,
        this.#elements.product
      );
    }

    if (noticesWrapper) {
      noticesWrapper.innerHTML = notices;
    }
  };
}

document.addEventListener("DOMContentLoaded", () => {
  new WooFloatingBar();
});
