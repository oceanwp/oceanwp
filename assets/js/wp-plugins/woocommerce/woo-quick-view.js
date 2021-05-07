import axios from "axios";
import delegate from "delegate";
import { DOM, options } from "../../constants";
import { fadeIn, fadeOut } from "../../lib/utils";
import Qs from "qs";

class WooQuickView {
    constructor() {
        this.#start();
        this.#setupEventListeners();
    }

    #start = () => {};

    #setupEventListeners = () => {
        delegate(".owp-quick-view", "click", this.#onQuickViewBtnClick);

        document.querySelectorAll(".owp-qv-overlay, .owp-qv-close").forEach((closeBtn) => {
            closeBtn.addEventListener("click", this.#onCloseBtnClick);
        });

        document.addEventListener("keyup", this.#onDocumentKeyup);

        delegate(
            document.body,
            "#owp-qv-content .product:not(.product-type-external) .single_add_to_cart_button",
            "click",
            this.#onAddToCartBtnClick
        );

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
        event.preventDefault();

        this.#close();
    };

    #onDocumentKeyup = (event) => {
        // Escape button
        if (event.keyCode == 27) {
            this.#onCloseBtnClick();
        }
    };

    #onAddToCartBtnClick = (event) => {
        event.preventDefault();

        const addToCartBtn = event.delegateTarget;
        const $addToCartBtn = jQuery(addToCartBtn);
        const form = addToCartBtn.closest("form.cart");
        const formData = this.#getFormData(form);
        const $body = jQuery("body");

        if (formData.some((data) => data.name === "add-to-cart")) {
            event.preventDefault();
        }

        $body.trigger("adding_to_cart", [$addToCartBtn, formData]);

        addToCartBtn.classList.remove("added");
        addToCartBtn.classList.add("loading");

        // Ajax action.
        jQuery.ajax({
            url: options.wc_ajax_url,
            type: "POST",
            data: formData,

            success: function (results) {
                jQuery(document.body).trigger("wc_fragment_refresh");
                jQuery(document.body).trigger("added_to_cart", [
                    results.fragments,
                    results.cart_hash,
                    $addToCartBtn,
                ]);

                // Redirect to cart option
                if (options.cart_redirect_after_add === "yes") {
                    window.location = options.cart_url;
                    return;
                }
            },
        });
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

    #open = (quickViewBtn, productId) => {
        const data = new FormData();

        data.append("nonce", options.nonce);
        data.append("action", "oceanwp_product_quick_view");
        data.append("product_id", productId);

        axios
            .post(options.ajax_url, data)
            .then((response) => {
                const initialHTMLInnerWidth = DOM.html.innerWidth;
                DOM.html.style.overflow = "hidden";
                const afterInitialHTMLInnerWidth = DOM.html.innerWidth;
                DOM.html.style.marginRight = afterInitialHTMLInnerWidth - initialHTMLInnerWidth + "px";

                DOM.body.classList.add("owp-qv-open");
                DOM.woo.quickView.content.innerHTML = response.data.output;

                fadeIn(DOM.woo.quickView.modal);

                DOM.woo.quickView.modal.classList.add("is-visible");

                const variations_form = DOM.woo.quickView.content.querySelector(".variations_form");
                const $variationsForm = jQuery(variations_form);

                $variationsForm.trigger("check_variations");
                $variationsForm.trigger("reset_image");

                if ($variationsForm.length > 0) {
                    $variationsForm.wc_variation_form();
                    $variationsForm.find("select").change();
                }

                const galleryImagesWrapper = DOM.woo.quickView.content.querySelector(".owp-qv-image");
                const $galleryImagesWrapper = jQuery(galleryImagesWrapper);

                if (!!galleryImagesWrapper.querySelectorAll("li")) {
                    $galleryImagesWrapper.flexslider();
                }

                const groupedForm = DOM.woo.quickView.content.querySelector("form.grouped_form");

                if (!!groupedForm) {
                    const groupedFormURL = groupedForm.attr("action");

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

                quickViewBtn.parentNode.classList.remove("loading");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    #close = () => {
        DOM.html.style.overflow = "";
        DOM.html.style.marginRight = "";
        DOM.html.classList.remove("owp-qv-open");

        fadeOut(DOM.woo.quickView.modal);
        DOM.woo.quickView.modal.classList.remove("is-visible");

        setTimeout(() => {
            DOM.woo.quickView.content.innerHTML = "";
        }, 600);
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

new WooQuickView();
