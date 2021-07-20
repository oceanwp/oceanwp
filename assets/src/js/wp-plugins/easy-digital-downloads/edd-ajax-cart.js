import { DOM } from "../../constants";

class EddAjaxCart {
    constructor() {
        this.#start();
        this.#setupEventListeners();
    }

    #start = () => {};

    #setupEventListeners = () => {
        /**
         * Because Easy Digital Downloads plugin uses jQuery custom event,
         * We also have to use jQuery to customize this event
         */
        jQuery("body").on("edd_cart_item_added", this.#onCartItemAdded);
        jQuery("body").on("edd_cart_item_removed", this.#onCartItemRemoved);
    };

    #onCartItemAdded = (event, response) => {
        // Simple cart
        DOM.edd.carts?.forEach((cart) => {
            cart.classList.remove("edd-cart-empty");
        });

        DOM.edd.totalPrices?.forEach((totalPrice) => {
            totalPrice.innerHTML = response.total;
        });
    };

    #onCartItemRemoved = (event, response) => {
        DOM.edd.totalPrices?.forEach((totalPrice) => {
            totalPrice.innerHTML = response.total;
        });
    };
}

new EddAjaxCart();
