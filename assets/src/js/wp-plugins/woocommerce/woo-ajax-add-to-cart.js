import { DOM, options } from "../../constants";
import delegate from "delegate";

class WooAjaxAddToCart {
    constructor() {
        if (
            typeof options === "undefined" ||
            DOM.woo.product.classList.contains("product-type-grouped")
        ) {
            return;
        }

        this.#setupEventListeners();
    }

    #setupEventListeners = () => {
        delegate(
            DOM.body,
            ".product:not(.product-type-external) .single_add_to_cart_button:not(.disabled)",
            "click",
            this.#onAddToCartBtnClick
        );

        delegate(
            DOM.body,
            ".product:not(.product-type-external) .single_add_to_cart_button:not(.disabled)",
            "touchend",
            this.#onAddToCartBtnClick
        );

        /**
         * Because Woocommerce plugin uses jQuery custom event,
         * We also have to use jQuery to customize this event.
         */
        jQuery("body").on("added_to_cart", this.#updateCart);
    };

    #onAddToCartBtnClick = event => {
        event.preventDefault();

        const addToCartBtn = event.delegateTarget;
        const form = addToCartBtn.closest("form.cart");
        const formData = this.#getFormData(form);

        if (formData.some(({ name }) => name === "add-to-cart")) {
            event.preventDefault();

            addToCartBtn.classList.remove("added");
            addToCartBtn.classList.add("loading");

            /**
             * Because Woocommerce plugin uses jQuery custom event,
             * We also have to use jQuery to customize this event.
             */
            jQuery("body").trigger("adding_to_cart", [
                jQuery(addToCartBtn),
                formData,
            ]);

            /**
             * Because Woocommerce plugin uses jQuery dynamic nonce,
             * We also have to use jQuery to customize.
             */
            jQuery.ajax({
                type: "POST",
                url: oceanwpLocalize.wc_ajax_url,
                data: formData,

                success: function (response) {
                    /**
                     * Because Woocommerce plugin uses jQuery custom event,
                     * We also have to use jQuery to customize this event.
                     */
                    jQuery("body").trigger("wc_fragment_refresh");
                    jQuery("body").trigger("added_to_cart", [
                        response.fragments,
                        response.cart_hash,
                        jQuery(addToCartBtn),
                    ]);

                    if (options.cart_redirect_after_add === "yes") {
                        window.location = options.cart_url;
                        return;
                    }
                },
            });
        }
    };

    #updateCart = (e, fragments, cart_hash, $button) => {
        const cartBtn = typeof $button === "undefined" ? false : $button.get(0);

        if (cartBtn) {
            cartBtn.classList.remove("loading");
            cartBtn.classList.add("added");

            // Add view cart text.
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

    #getFormData = form => {
        form = form instanceof Element ? form : document.querySelector(form);
        const rCRLF = /\r?\n/g;

        return Array.from(form.elements).map((element, index) => {
            const elementValue = element.value;
            const elementName = element.name;

            if (elementValue == null) {
                return { name: elementName, value: "" };
            } else if (element.type.toLowerCase() === "checkbox") {
                return {
                    name: elementName,
                    value: element.checked ? elementValue : "",
                };
            } else if (element.type.toLowerCase() === "radio") {
                return {
                    name: elementName,
                    value: element.checked ? elementValue : "",
                };
            }

            return Array.isArray(elementValue)
                ? Array.from(elementValue).map((val, index) => {
                      return {
                          name: elementName,
                          value: val.replace(rCRLF, "\r\n"),
                      };
                  })
                : {
                      name: elementName,
                      value: elementValue.replace(rCRLF, "\r\n"),
                  };
        });
    };
}

jQuery(function () {
    new WooAjaxAddToCart();
});
