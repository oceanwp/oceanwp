import { DOM } from "../../constants";

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
        this.#parallaxFooter();
    };

    #onWindowResize = (event) => {
        if (this.#lastWindowWidth !== window.innerWidth || this.#lastWindowHeight !== window.innerHeight) {
            this.#fixedFooter();
        }
        this.#parallaxFooter();
    };

    #fixedFooter = () => {
        if (!document.body.classList.contains("has-fixed-footer")) {
            return;
        }

        let offset = 0;

        if (!!DOM.global.WPAdminbar) {
            offset = DOM.global.WPAdminbar.offsetHeight;
        }

        DOM.global.main.style.minHeight =
            DOM.global.main.offsetHeight +
            (window.innerHeight - DOM.global.html.offsetHeight - offset) +
            "px";
    };

    #parallaxFooter = () => {
        if (DOM.global.body.classList.contains("has-parallax-footer")) {
            setTimeout(() => {
                DOM.global.main.style.marginBottom = DOM.footer.parallax.offsetHeight + "px";
            }, 1);
        }
    };
}
