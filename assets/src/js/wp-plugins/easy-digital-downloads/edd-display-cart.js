import { DOM } from "../../constants";
import { fadeIn, fadeOut } from "../../lib/utils";

class EddDisplayCart {
    constructor() {
        if (!!DOM.edd.overlayCart) {
            this.#start();
            this.#setupEventListeners();
        }
    }

    #start = () => {};

    #setupEventListeners = () => {
        /**
         * Because Easy Digital Downloads plugin uses jQuery custom event,
         * We also have to use jQuery to customize this event
         */
        jQuery("body").on("edd_cart_item_added", this.#onCartItemAdded);

        DOM.edd.overlayCart.addEventListener("click", this.#onOverlayCartClick);

        window.addEventListener("resize", this.#onWindowResize);
    };

    #onCartItemAdded = (event, response) => {
        fadeIn(DOM.edd.overlayCart);

        DOM.body.classList.add("show-cart");

        if (!!DOM.edd.quickViewModal) {
            DOM.html.style.overflow = "";
            DOM.html.style.marginRight = "";
            DOM.html.classList.remove("owp-qv-open");

            fadeOut(DOM.edd.quickViewModal);

            DOM.edd.quickViewModal.classList.remove("is-visible");

            setTimeout(() => {
                DOM.edd.quickViewContent.innerHTML = "";
            }, 600);
        }
    };

    #onOverlayCartClick = (event) => {
        overlayCart = event.currentTarget;

        fadeOut(overlayCart);
        DOM.body.classList.remove("show-cart");
    };

    #onWindowResize = (event) => {
        if (!!DOM.edd.overlayCart) {
            fadeOut(overlayCart);
            DOM.body.classList.remove("show-cart");
        }
    };
}

new EddDisplayCart();
