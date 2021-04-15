import { DOM } from "../../constants";
import { fadeIn, fadeOut } from "../../lib/utils";

class EDDAjax {
    constructor() {
        this.#start();
        this.#setupEventListeners();
    }

    #start = () => {
        jQuery("body").on("edd_cart_item_added", this.#onCartItemAdded);
    };

    #setupEventListeners = () => {
        window.addEventListener("resize", this.#onWindowResize);
    };

    #onCartItemAdded = (event, response) => {
        // Simple cart
        DOM.edd.carts?.forEach((cart) => {
            cart.classList.remove("edd-cart-empty");
        });

        DOM.edd.totalPrices?.forEach((totalPrice) => {
            totalPrice.innerHTML = response.total;
        });

        // Overlay cart
        DOM.edd.overlayCarts?.forEach((overlayCart) => {
            fadeIn(overlayCart);

            DOM.global.body.classList.add("show-cart");

            if (!!DOM.edd.quickViewModal) {
                DOM.global.html.style.overflow = "";
                DOM.global.html.style.marginRight = "";
                DOM.global.html.classList.remove("owp-qv-open");

                fadeOut(DOM.edd.quickViewModal);

                DOM.edd.quickViewModal.classList.remove("is-visible");

                setTimeout(() => {
                    DOM.edd.quickViewContent.innerHTML = "";
                }, 600);
            }

            // Events
            overlayCart.addEventListener("click", this.#onOverlayCartClick);
        });
    };

    #onOverlayCartClick = (event) => {
        overlayCart = event.currentTarget;

        fadeOut(overlayCart);
        DOM.global.body.classList.remove("show-cart");
    };

    #onWindowResize = (event) => {
        if (!!DOM.edd.overlayCarts) {
            DOM.edd.overlayCarts.forEach((overlayCart) => {
                fadeOut(overlayCart);
            });

            DOM.global.body.classList.remove("show-cart");
        }
    };
}

new EDDAjax();
