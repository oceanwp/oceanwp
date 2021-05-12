import { DOM } from "../../constants";
import { offset } from "../../lib/utils";
import delegate from "delegate";

class WooFloatingBar {
    #offset;
    #tabsTopOffset;

    constructor() {
        this.#start();
        this.#setupEventListeners();
    }

    #start = () => {};

    #setupEventListeners = () => {
        if (!!DOM.woo.productTabs) {
            document.addEventListener("scroll", this.#onDocumentScroll);
            window.addEventListener("scroll", this.#onWindowScroll);
            DOM.floatingBar.querySelector("button.button.top").addEventListener("click", this.#onTopBtnClick);
        }

        delegate(
            document.body,
            ".owp-floating-bar .floating_add_to_cart_button",
            "click",
            this.#onAddToCartBtnClick
        );

        jQuery(document.body).on("added_to_cart", this.#updateCart);
    };

    #onDocumentScroll = (event) => {
        const header = DOM.header.site;

        this.#offset = 0;
        this.#tabsTopOffset = offset(DOM.woo.productTabs).top;

        // Adminbar offset
        if (!!DOM.WPAdminbar && window.innerWidth > 600) {
            this.#offset = this.#offset + DOM.WPAdminbar.offsetHeight;
        }

        // Sticky topbar offset
        if (!!DOM.header.stickyTopbarWrapper) {
            this.#offset = this.#offset + $stickyTopBar.offsetHeight;
        }

        // Sticky header
        if (!!header) {
            if (header.classList.contains("top-header")) {
                this.#offset = this.#offset + header.querySelector(".header-top").offsetHeight;
            } else if (header.classList.contains("medium-header")) {
                if (header.querySelector(".bottom-header-wrap").classList.contains("fixed-scroll")) {
                    this.#offset = this.#offset + header.querySelector(".bottom-header-wrap").offsetHeight;
                } else {
                    this.#offset =
                        this.#offset + document.querySelector(".is-sticky #site-header-inner").offsetHeight;
                }
            } else if (
                header.classList.contains("center-header") ||
                header.classList.contains("custom-header")
            ) {
                this.#offset = this.#offset + header.offsetHeight;
            } else if (header.classList.contains("fixed-scroll")) {
                this.#offset = this.#offset + header.data("height");
            }
        }

        this.#tabsTopOffset = this.#tabsTopOffset - this.#offset;

        DOM.floatingBar.style.top = `${this.#offset}px`;
    };

    #onWindowScroll = (event) => {
        if (window.scrollTop > this.#tabsTopOffset) {
            DOM.floatingBar.classList.add("show");
        } else {
            DOM.floatingBar.classList.remove("show");
        }
    };

    #onTopBtnClick = (event) => {
        event.preventDefault();

        if (!!DOM.woo.productCarts) {
            const scrollPosition = offset(DOM.woo.productCarts).top - this.#offset;

            DOM.html.scrollTo({
                top: Math.round(scrollPosition),
                behavior: "smooth",
            });

            DOM.body.scrollTo({
                top: Math.round(scrollPosition),
                behavior: "smooth",
            });
        }
    };

    #onAddToCartBtnClick = (event) => {
        event.preventDefault();

        const addToCartBtn = event.delegateTarget;
        const $addToCartBtn = jQuery(addToCartBtn);
        const product_id = addToCartBtn.value;
        const quentity = DOM.woo.quentity.value;

        addToCartBtn.classList.remove("added");
        addToCartBtn.classList.add("loading");

        // Ajax action.
        jQuery.ajax({
            url: options.ajax_url,
            type: "POST",
            data: {
                action: oceanwp_add_cart_floating_bar,
                product_id: product_id,
                quantity: quantity,
            },

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

        if (!!cartBtn) {
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
}

new WooFloatingBar();
