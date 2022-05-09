class EddAjaxCart {
  #elements;

  constructor() {
    this.#setElements();
    this.#start();
    this.#setupEventListeners();
  }

  #setElements = () => {
    this.#elements = {
      carts: document.querySelectorAll(".edd-menu-icon"),
      totalPrices: document.querySelectorAll(".eddmenucart-details.total"),
    };
  };

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
    this.#elements.carts?.forEach((cart) => {
      cart.classList.remove("edd-cart-empty");
    });

    this.#elements.totalPrices?.forEach((totalPrice) => {
      totalPrice.innerHTML = response.total;
    });
  };

  #onCartItemRemoved = (event, response) => {
    this.#elements.totalPrices?.forEach((totalPrice) => {
      totalPrice.innerHTML = response.total;
    });
  };
}

new EddAjaxCart();
