import { DOM } from "../../constants";
import delegate from "delegate";

class WooMiniCart {
    constructor() {
        if (
            DOM.body.classList.contains("woocommerce-cart") ||
            DOM.body.classList.contains("woocommerce-checkout")
        ) {
            return;
        }

        this.#start();
        this.#setupEventListeners();
    }

    #start = () => {};

    #setupEventListeners = () => {
        delegate(DOM.body, ".oceanwp-mobile-menu-icon a.wcmenucart", "click", this.#onMenuCartClick);

        document
            .querySelectorAll(".oceanwp-cart-sidebar-overlay, .oceanwp-cart-close")
            .forEach((closeCartBtn) => {
                closeCartBtn.addEventListener("click", this.#onCloseCartBtn);
            });

        window.addEventListener("resize", this.#onWindowResize);
    };

    #onMenuCartClick = (event) => {
        event.preventDefault();

        const initialHTMLInnerWidth = DOM.html.innerWidth;
        DOM.html.style.overflow = "hidden";
        const afterInitialHTMLInnerWidth = DOM.html.innerWidth;
        DOM.html.style.marginRight = afterInitialHTMLInnerWidth - initialHTMLInnerWidth + "px";

        DOM.body.classList.add("show-cart-sidebar");
    };

    #onCloseCartBtn = (event) => {
        event.preventDefault();

        this.#closeCartFilter();
        DOM.body.classList.remove("show-cart");
    };

    #onWindowResize = (event) => {
        this.#closeCartFilter();
    };

    #closeCartFilter = () => {
        DOM.html.style.overflow = "";
        DOM.html.style.marginRight = "";

        DOM.body.classList.remove("show-cart-sidebar");
    };
}

new WooMiniCart();
