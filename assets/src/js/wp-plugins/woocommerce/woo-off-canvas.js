import delegate from "delegate";

class WooOffCanvas {
  #elements;

  constructor() {
    this.#setElements();
    this.#start();
    this.#setupEventListeners();
  }

  #setElements = () => {
    this.#elements = {
      html: document.querySelector("html"),
      body: document.body,
    };
  };

  #start = () => {};

  #setupEventListeners = () => {
    delegate(
      this.#elements.body,
      ".oceanwp-off-canvas-filter",
      "click",
      this.#onCanvasFilterClick
    );
    delegate(
      this.#elements.body,
      ".oceanwp-off-canvas-overlay, .oceanwp-off-canvas-close",
      "click",
      this.#onCanvasCloseClick
    );
  };

  #onCanvasFilterClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const initialHTMLInnerWidth = this.#elements.html.innerWidth;
    this.#elements.html.style.overflow = "hidden";
    const afterInitialHTMLInnerWidth = this.#elements.html.innerWidth;
    this.#elements.html.style.marginRight =
      afterInitialHTMLInnerWidth - initialHTMLInnerWidth + "px";

    this.#elements.body.classList.add("off-canvas-enabled");
  };

  #onCanvasCloseClick = (event) => {
    this.#elements.html.style.overflow = "";
    this.#elements.html.style.marginRight = "";

    this.#elements.body.classList.remove("off-canvas-enabled");
  };
}

new WooOffCanvas();
