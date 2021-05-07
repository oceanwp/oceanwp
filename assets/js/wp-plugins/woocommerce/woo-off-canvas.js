import delegate from "delegate";
import { DOM } from "../../constants";

class WOOOffCanvas {
    constructor() {
        this.#start();
        this.#setupEventListeners();
    }

    #start = () => {};

    #setupEventListeners = () => {
        delegate(".oceanwp-off-canvas-filter", "click", this.#onCanvasFilterClick);
        delegate(".oceanwp-off-canvas-overlay, .oceanwp-off-canvas-close", "click", this.#onCanvasCloseClick);
    };

    #onCanvasFilterClick = (event) => {
        const initialHTMLInnerWidth = DOM.html.innerWidth;

        DOM.html.style.overflow = "hidden";

        const afterInitialHTMLInnerWidth = DOM.html.innerWidth;

        DOM.html.style.marginRight = afterInitialHTMLInnerWidth - initialHTMLInnerWidth + "px";

        DOM.body.classList.add("off-canvas-enabled");
    };

    #onCanvasCloseClick = (event) => {
        DOM.html.style.overflow = "";
        DOM.html.style.marginRight = "";

        DOM.body.classList.remove("off-canvas-enabled");
    };
}

export default WOOOffCanvas;
