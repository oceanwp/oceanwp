import delegate from "delegate";
import { fadeInNav, fadeOutNav } from "../../lib/utils";

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

    let isMiniCart = document.querySelector( '.wcmenucart-toggle-drop_down' );
    if ( isMiniCart ) {
      isMiniCart.addEventListener(
        "keydown",
        this.#miniCartKeydown
      );
    }
  };

  #miniCartKeydown = (event) => {
    const cartItem  = document.querySelector( '.wcmenucart-toggle-drop_down' ),
          itemLink  = cartItem.querySelector( '.wcmenucart' ),
          cartInner = document.querySelector( '.owp-mini-cart' ),
          cartElem  = cartInner.querySelectorAll("a"),
          firstEl   = cartElem[0],
          lastEl    = cartElem[ cartElem.length - 1 ],
          activeEl  = document.activeElement,
          tabKey    = event.keyCode === 9,
			    shiftKey  = event.shiftKey;

  if ( ! shiftKey && tabKey && itemLink ===  activeEl ) {
    if ( cartElem.length ) {
        event.preventDefault();
      }
      fadeInNav(cartInner, {
        callback: () => {},
      });
      if (firstEl) {
        firstEl.focus();
      }
    }

    if ( shiftKey && tabKey && firstEl === activeEl ) {
      if (itemLink) {
        event.preventDefault();
        itemLink.focus();
      }
      fadeOutNav(cartInner, {
        callback: () => {},
      });
    }

    if ( ! shiftKey && tabKey && lastEl ===  activeEl ) {
      fadeOutNav(cartInner, {
        callback: () => {},
      });
    }
  }

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
