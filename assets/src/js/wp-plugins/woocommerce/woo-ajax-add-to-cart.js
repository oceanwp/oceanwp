import { options } from "../../constants";
import delegate from "delegate";

class WooAjaxAddToCart {
  #elements = {
    product: document.querySelector(".woocommerce div.product"),
  };

  constructor() {
    if (
      typeof options === "undefined" ||
      !this.#elements.product ||
      !this.#isSupportedProduct()
    ) {
      return;
    }

    this.#setElements();
    this.#setupEventListeners();
  }

  #setElements = () => {
    this.#elements = {
      ...this.#elements,
      body: document.body,
    };
  };

  #setupEventListeners = () => {
    delegate(
      this.#elements.body,
      ".single_add_to_cart_button:not(.disabled):not(.buy_now_button):not([data-oceanwp-ajax-add-to-cart='false'])",
      "click",
      this.#onAddToCartBtnClick
    );

    /**
     * Because WooCommerce uses jQuery custom events,
     * we also use jQuery for compatibility with WooCommerce and extensions.
     */
    jQuery("body").on("added_to_cart", this.#updateCart);
  };

  #onAddToCartBtnClick = (event) => {
    const addToCartBtn = event.delegateTarget;
    const form = addToCartBtn.closest("form.cart");

    if (!form || !this.#elements.product.contains(form)) {
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

    /**
     * Keep the standard WooCommerce adding_to_cart event so extensions
     * listening for it continue to receive the submitted form data.
     */
    jQuery("body").trigger("adding_to_cart", [
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
          this.#renderNotices(response.notices, form);

          jQuery("body").trigger("oceanwp_ajax_add_to_cart_error", [
            response,
            jQuery(addToCartBtn),
          ]);

          return;
        }

        if (!response || !response.fragments) {
          jQuery("body").trigger("oceanwp_ajax_add_to_cart_error", [
            response,
            jQuery(addToCartBtn),
          ]);

          return;
        }

        jQuery("body").trigger("added_to_cart", [
          response.fragments,
          response.cart_hash,
          jQuery(addToCartBtn),
        ]);

        if (options.cart_redirect_after_add === "yes") {
          window.location = options.cart_url;
        }
      },

      error: (xhr) => {
        jQuery("body").trigger("oceanwp_ajax_add_to_cart_error", [
          xhr,
          jQuery(addToCartBtn),
        ]);
      },

      complete: () => {
        addToCartBtn.disabled = false;
        addToCartBtn.classList.remove("loading");
      },
    });
  };

  #updateCart = (e, fragments, cartHash, $button) => {
    const cartBtn = typeof $button === "undefined" ? false : $button.get(0);

    if (cartBtn) {
      cartBtn.classList.remove("loading");
      cartBtn.classList.add("added");

      if (
        !options.is_cart &&
        !cartBtn.parentNode.querySelector(".added_to_cart")
      ) {
        cartBtn.insertAdjacentHTML(
          "afterend",
          `<a href="${options.cart_url}" class="added_to_cart wc-forward" title="${options.view_cart}">${options.view_cart}</a>`
        );
      }
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

    // Prevent WooCommerce's normal form handler from processing this request too.
    formData.delete("add-to-cart");
    formData.set("product_id", productId);
    formData.set("action", "oceanwp_add_cart_single_product");

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

  #renderNotices = (notices, form) => {
    if (!notices) {
      return;
    }

    let noticesWrapper = document.querySelector(".woocommerce-notices-wrapper");

    if (!noticesWrapper) {
      noticesWrapper = document.createElement("div");
      noticesWrapper.className = "woocommerce-notices-wrapper";

      const product = form.closest(".product");

      if (product && product.parentNode) {
        product.parentNode.insertBefore(noticesWrapper, product);
      } else {
        return;
      }
    }

    noticesWrapper.innerHTML = notices;
  };

  #isSupportedProduct = () => {
    const supportedProducts = Array.isArray(options.woo_ajax_supported_products)
      ? options.woo_ajax_supported_products
      : ["simple", "variable"];

    return supportedProducts.some((productType) =>
      this.#elements.product.classList.contains(`product-type-${productType}`)
    );
  };
}

jQuery(function () {
  new WooAjaxAddToCart();
});
