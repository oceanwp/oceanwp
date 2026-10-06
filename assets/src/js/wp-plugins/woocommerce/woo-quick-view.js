import delegate from "delegate";
import { options } from "../../constants";
import { fadeIn, fadeOut, visible } from "../../lib/utils";

class WooQuickView {
  #elements;

  constructor() {
    this.#setElements();
    this.#start();
    this.#setupEventListeners();
  }

  #setElements = () => {
    this.#elements = {
      html: document.querySelector("html"),
      body: document.body,
      modal: document.querySelector("#owp-qv-wrap"),
      content: document.querySelector("#owp-qv-content"),
    };
  };

  #start = () => {};

  #setupEventListeners = () => {
    delegate(".owp-quick-view", "click", this.#onQuickViewBtnClick);

    document
      .querySelectorAll(".owp-qv-overlay, .owp-qv-close")
      .forEach((closeBtn) => {
        closeBtn.addEventListener("click", this.#onCloseBtnClick);
      });

    document.addEventListener("keyup", this.#onDocumentKeyup);

    delegate(
      document.body,
      "#owp-qv-content .single_add_to_cart_button:not(.disabled):not(.buy_now_button):not([data-oceanwp-ajax-add-to-cart='false'])",
      "click",
      this.#onAddToCartBtnClick
    );

    /**
     * Because WooCommerce uses jQuery custom events,
     * we also use jQuery for compatibility with WooCommerce and extensions.
     */
    jQuery(document.body).on("added_to_cart", this.#updateCart);
  };

  #onQuickViewBtnClick = (event) => {
    event.preventDefault();

    const quickViewBtn = event.delegateTarget;
    const productId = quickViewBtn.getAttribute("data-product_id");

    quickViewBtn.parentNode.classList.add("loading");

    this.#open(quickViewBtn, productId);
  };

  #onCloseBtnClick = (event) => {
    if (event) {
      event.preventDefault();
    }

    this.#close();
  };

  #onDocumentKeyup = (event) => {
    if (event.keyCode === 27) {
      this.#onCloseBtnClick();
    }
  };

  #onAddToCartBtnClick = (event) => {
    const addToCartBtn = event.delegateTarget;
    const form = addToCartBtn.closest("form.cart");
    const product = addToCartBtn.closest(".product");

    if (!form || !product || !this.#isSupportedProduct(product)) {
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
          this.#renderNotices(response.notices, product);

          jQuery(document.body).trigger("oceanwp_ajax_add_to_cart_error", [
            response,
            jQuery(addToCartBtn),
            "quick_view",
          ]);

          return;
        }

        if (!response || !response.fragments) {
          jQuery(document.body).trigger("oceanwp_ajax_add_to_cart_error", [
            response,
            jQuery(addToCartBtn),
            "quick_view",
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
          "quick_view",
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

    if (!cartBtn || !this.#elements.content.contains(cartBtn)) {
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

  #open = (quickViewBtn, productId) => {
    jQuery.ajax({
      type: "POST",
      url: options.ajax_url,
      dataType: "json",
      data: {
        action: "oceanwp_product_quick_view",
        nonce: options.nonce,
        product_id: productId,
      },
    })
      .done((data) => {
        const scrollbarWidth =
          window.innerWidth - this.#elements.html.clientWidth;
        this.#elements.html.style.overflow = "hidden";
        this.#elements.html.style.marginRight =
          scrollbarWidth > 0 ? `${scrollbarWidth}px` : "";

        this.#elements.body.classList.add("owp-qv-open");
        this.#elements.content.innerHTML = data.output;

        oceanwpWooCustomFeatures.quantityButtons.start();

        fadeIn(this.#elements.modal);
        this.#elements.modal.classList.add("is-visible");

        const variationsForm =
          this.#elements.content.querySelector(".variations_form");
        const $variationsForm = jQuery(variationsForm);

        $variationsForm.trigger("check_variations");
        $variationsForm.trigger("reset_image");

        if ($variationsForm.length > 0) {
          $variationsForm.wc_variation_form();
          $variationsForm.find("select").change();
        }

        const galleryImagesWrapper =
          this.#elements.content.querySelector(".owp-qv-image");

        if (galleryImagesWrapper) {
          const $galleryImagesWrapper = jQuery(galleryImagesWrapper);

          if (galleryImagesWrapper.querySelectorAll("li").length) {
            $galleryImagesWrapper.flexslider();
          }
        }

        const groupedForm =
          this.#elements.content.querySelector("form.grouped_form");

        if (groupedForm) {
          const groupedFormURL = groupedForm.getAttribute("action");

          groupedForm
            .querySelectorAll(".group_table, button.single_add_to_cart_button")
            .forEach((item) => {
              item.style.display = "none";
            });

          groupedForm.insertAdjacentHTML(
            "beforeend",
            `<a class="button" href="${groupedFormURL}">${options.grouped_text}</a>`
          );
        }
      })
      .fail(() => {
        this.#close();
      })
      .always(() => {
        quickViewBtn.parentNode.classList.remove("loading");
      });
  };

  #close = () => {
    if (visible(this.#elements.modal)) {
      this.#elements.html.style.overflow = "";
      this.#elements.html.style.marginRight = "";
      this.#elements.body.classList.remove("owp-qv-open");

      fadeOut(this.#elements.modal);
      this.#elements.modal.classList.remove("is-visible");

      setTimeout(() => {
        this.#elements.content.innerHTML = "";
      }, 600);
    }
  };

  #getFormData = (form, addToCartBtn) => {
    const formData = new FormData(form);
    const existingProductId = formData.get("product_id");
    const buttonProductId = addToCartBtn.value;
    const productId = existingProductId || buttonProductId;

    if (!productId) {
      return false;
    }

    formData.delete("add-to-cart");
    formData.set("product_id", productId);
    formData.set("action", "oceanwp_add_cart_quick_view");

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
    const noticesWrapper = this.#elements.content.querySelector(
      ".woocommerce-notices-wrapper"
    );

    if (noticesWrapper) {
      noticesWrapper.innerHTML = "";
    }
  };

  #renderNotices = (notices, product) => {
    if (!notices) {
      return;
    }

    let noticesWrapper = this.#elements.content.querySelector(
      ".woocommerce-notices-wrapper"
    );

    if (!noticesWrapper) {
      noticesWrapper = document.createElement("div");
      noticesWrapper.className = "woocommerce-notices-wrapper";
      product.parentNode.insertBefore(noticesWrapper, product);
    }

    noticesWrapper.innerHTML = notices;
  };

  #isSupportedProduct = (product) => {
    const supportedProducts = Array.isArray(options.woo_ajax_supported_products)
      ? options.woo_ajax_supported_products
      : ["simple", "variable"];

    return supportedProducts.some((productType) =>
      product.classList.contains(`product-type-${productType}`)
    );
  };
}

new WooQuickView();
