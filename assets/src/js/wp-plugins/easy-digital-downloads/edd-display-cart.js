import { fadeIn, fadeOut } from "../../lib/utils";

class EddDisplayCart {
  #elements = {
    overlayCart: document.querySelector(".owp-cart-overlay"),
  };

  constructor() {
    if (!!this.#elements.overlayCart) {
      this.#setElements();
      this.#start();
      this.#setupEventListeners();
    }
  }

  #setElements = () => {
    this.#elements = {
      ...this.#elements,
      overlayCart: document.querySelector(".owp-cart-overlay"),
      quickViewModal: document.querySelector("#owp-qv-wrap"),
      quickViewContent: document.querySelector("#owp-qv-content"),
      body: document.body,
      html: document.querySelector("html"),
    };
  };

  #start = () => {};

  #setupEventListeners = () => {
    /**
     * Because Easy Digital Downloads plugin uses jQuery custom event,
     * We also have to use jQuery to customize this event
     */
    jQuery("body").on("edd_cart_item_added", this.#onCartItemAdded);

    this.#elements.overlayCart.addEventListener(
      "click",
      this.#onOverlayCartClick
    );

    window.addEventListener("resize", this.#onWindowResize);
  };

  #onCartItemAdded = (event, response) => {
    fadeIn(this.#elements.overlayCart);

    this.#elements.body.classList.add("show-cart");

    if (!!this.#elements.quickViewModal) {
      this.#elements.html.style.overflow = "";
      this.#elements.html.style.marginRight = "";
      this.#elements.html.classList.remove("owp-qv-open");

      fadeOut(this.#elements.quickViewModal);

      this.#elements.quickViewModal.classList.remove("is-visible");

      setTimeout(() => {
        this.#elements.quickViewContent.innerHTML = "";
      }, 600);
    }
  };

  #onOverlayCartClick = (event) => {
    overlayCart = event.currentTarget;

    fadeOut(overlayCart);
    this.#elements.body.classList.remove("show-cart");
  };

  #onWindowResize = (event) => {
    if (!!this.#elements.overlayCart) {
      fadeOut(overlayCart);
      this.#elements.body.classList.remove("show-cart");
    }
  };
}

new EddDisplayCart();
