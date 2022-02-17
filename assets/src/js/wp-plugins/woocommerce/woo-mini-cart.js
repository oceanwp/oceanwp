import delegate from "delegate";

class WooMiniCart {
  #elements = {
    body: document.body,
  };

  constructor() {
    if (
      this.#elements.body.classList.contains("woocommerce-cart") ||
      this.#elements.body.classList.contains("woocommerce-checkout")
    ) {
      return;
    }

    this.#setElements();
    this.#start();
    this.#setupEventListeners();
  }

  #setElements = () => {
    this.#elements = {
      ...this.#elements,
      html: document.querySelector("html"),
    };
  };

  #start = () => {};

  #setupEventListeners = () => {
    delegate(
      this.#elements.body,
      ".oceanwp-mobile-menu-icon a.wcmenucart",
      "click",
      this.#onMenuCartClick
    );

    document
      .querySelectorAll(".oceanwp-cart-sidebar-overlay, .oceanwp-cart-close")
      .forEach((closeCartBtn) => {
        closeCartBtn.addEventListener("click", this.#onCloseCartBtn);
      });

    window.addEventListener("resize", this.#onWindowResize);
  };

  #onMenuCartClick = (event) => {
    event.preventDefault();

    const initialHTMLInnerWidth = this.#elements.html.innerWidth;
    this.#elements.html.style.overflow = "hidden";
    const afterInitialHTMLInnerWidth = this.#elements.html.innerWidth;
    this.#elements.html.style.marginRight =
      afterInitialHTMLInnerWidth - initialHTMLInnerWidth + "px";

    this.#elements.body.classList.add("show-cart-sidebar");
  };

  #onCloseCartBtn = (event) => {
    event.preventDefault();

    this.#closeCartFilter();
    this.#elements.body.classList.remove("show-cart");
  };

  #onWindowResize = (event) => {
    this.#closeCartFilter();
  };

  #closeCartFilter = () => {
    this.#elements.html.style.overflow = "";
    this.#elements.html.style.marginRight = "";

    this.#elements.body.classList.remove("show-cart-sidebar");
  };
}

new WooMiniCart();
