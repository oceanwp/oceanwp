import { DOM } from "../constants";

export default class Footer {
    #lastWindowWidth;
    #lastWindowHeight;

    constructor() {
        this.#start();
        this.#setupEventListeners();
    }

    #start = () => {
        this.#lastWindowWidth = window.innerWidth;
        this.#lastWindowHeight = window.innerHeight;
    };

    #setupEventListeners = () => {
        window.addEventListener("load", this.#onWindowLoad);
        window.addEventListener("resize", this.#onWindowResize);
    };

    #onWindowLoad = (event) => {
        this.#fixedFooter();
    };

    #onWindowResize = (event) => {
        if (this.#lastWindowWidth !== window.innerWidth || this.#lastWindowHeight !== window.innerHeight) {
            this.#fixedFooter();
        }
    };

    #fixedFooter = () => {
        if (!document.body.classList.contains("has-fixed-footer")) {
            return;
        }

        let offset = 0;

        if (!!DOM.WPAdminbar) {
            offset = DOM.WPAdminbar.offsetHeight;
        }

        DOM.main.style.minHeight =
            DOM.main.offsetHeight + (window.innerHeight - DOM.html.offsetHeight - offset) + "px";
    };
}
