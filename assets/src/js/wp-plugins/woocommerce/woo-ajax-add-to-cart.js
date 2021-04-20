const { DOM, options } = require("../../constants");
import Delegate from "ftdomdelegate";
import axios from "axios";

class WooAjaxAddToCart {
    constructor() {
        if (DOM.woo.product.classList.contains("product-type-grouped")) {
            return;
        }

        this.#setupEventListeners();
    }

    #setupEventListeners = () => {
        const delegate = new Delegate(document.body);

        delegate.on(
            "click",
            ".product:not(.product-type-external) .single_add_to_cart_button:not(.disabled)",
            this.#onAddToCartBtnClick
        );

        jQuery("body").on("added_to_cart", this.#updateCart);
    };

    #onAddToCartBtnClick = (event) => {
        const addToCartBtn = event.target;
        const $addToCartBtn = jQuery(addToCartBtn);
        const form = addToCartBtn.closest("form.cart");
        const formData = this.#getFormData(form);
        const $body = jQuery("body");

        if (formData.some((data) => data.name === "add-to-cart")) {
            event.preventDefault();

            $body.trigger("adding_to_cart", [$addToCartBtn, formData]);

            addToCartBtn.classList.remove("added");
            addToCartBtn.classList.add("loading");

            jQuery.ajax({
                url: options.wc_ajax_url,
                type: "POST",
                data: formData,

                success: function (results) {
                    $body.trigger("wc_fragment_refresh");
                    $body.trigger("added_to_cart", [null, null, $addToCartBtn]);

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

            // View cart text.
            if (!options.is_cart && !cartBtn.parentNode.querySelector(".added_to_cart")) {
                cartBtn.insertAdjacentHTML(
                    "afterend",
                    `<a href="${options.cart_url}" class="added_to_cart wc-forward" title="${options.view_cart}">${options.view_cart}</a>`
                );
            }
        }
    };

    #getFormData = (form) => {
        form = form instanceof Element ? form : document.querySelector(form);
        const rCRLF = /\r?\n/g;

        return Array.from(form.elements).map((element, index) => {
            const value = element.value;

            if (value === null) {
                return true;
            } else if (element.nodeName === "checkbox" && element.checked === false) {
                return { name: element.name, value: "" };
            } else if (element.nodeName === "radio" && element.checked === false) {
                return { name: element.name, value: "" };
            }

            return Array.isArray(value)
                ? Array.from(value).map((val, index) => {
                      return { name: element.name, value: val.replace(rCRLF, "\r\n") };
                  })
                : { name: element.name, value: value.replace(rCRLF, "\r\n") };
        });
    };
}

new WooAjaxAddToCart();
