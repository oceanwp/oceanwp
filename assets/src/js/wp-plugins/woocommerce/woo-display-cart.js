import { DOM } from "../../constants";
import { fadeIn, fadeOut, visible } from "../../lib/utils";

class WooDisplayCart {
    constructor() {
        this.#start();
        this.#setupEventListeners();
    }

    #start = () => {};

    #setupEventListeners = () => {
        jQuery("body").on("added_to_cart", this.#onAddToCartBtn);

        DOM.woo.overlayCart?.addEventListener("click", this.#closeOverlay);

        window.addEventListener("resize", this.#closeOverlay);
    };

    #onAddToCartBtn = (event) => {
        fadeIn(DOM.woo.overlayCart);

        DOM.body.classList.add("show-cart");

        if (!!DOM.woo.quickView.modal) {
            DOM.html.style.overflow = "";
            DOM.html.style.marginRight = "";
            DOM.html.classList.remove("owp-qv-open");

            fadeOut(DOM.woo.quickView.modal);
            DOM.woo.quickView.modal.classList.remove("is-visible");

            setTimeout(() => {
                DOM.woo.quickView.content.innerHTML = "";
            }, 600);
        }

        if (!!DOM.header.site && !DOM.header.site.classList.contains("fixed-scroll")) {
            DOM.html.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    #closeOverlay = (event) => {
        if (visible(DOM.woo.overlayCart)) {
            fadeOut(DOM.woo.overlayCart);
            DOM.body.classList.remove("show-cart");
        }
    };
}

new WooDisplayCart();
