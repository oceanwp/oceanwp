import { fadeIn, fadeOut, visible } from "../../lib/utils";

class WooDisplayCart {
  #elements;

  constructor() {
    this.#setElements();
    this.#start();
    this.#setupEventListeners();
  }

  #setElements = () => {
    this.#elements = {
      overlayCart: document.querySelector(".owp-cart-overlay"),
      body: document.body,
      quickViewModal: document.querySelector("#owp-qv-wrap"),
      quickViewContent: document.querySelector("#owp-qv-content"),
      header: document.querySelector("#site-header"),
      html: document.querySelector("html"),
    };
  };

  #start = () => {};

  #setupEventListeners = () => {
    jQuery("body").on("added_to_cart", this.#onAddToCartBtn);

    this.#elements.overlayCart?.addEventListener("click", this.#closeOverlay);

    window.addEventListener("resize", this.#closeOverlay);
  };

  #onAddToCartBtn = (event) => {
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

    if (
      !!this.#elements.header &&
      !this.#elements.header.classList.contains("fixed-scroll")
    ) {
      this.#elements.html.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  #closeOverlay = (event) => {
    if (visible(this.#elements.overlayCart)) {
      fadeOut(this.#elements.overlayCart);
      this.#elements.body.classList.remove("show-cart");
    }
  };
}

new WooDisplayCart();
