import { DOM } from "../../constants";

export default class Footer {
    #lastWindowWidth;
    #lastWindowHeight;
    #footerPositionState = null;

    constructor() {
        if (!DOM.main) {
            return;
        }

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
        this.#fixFooterAtMiddlePage();
        this.#fixedFooter();
        this.#parallaxFooter();
    };

    #onWindowResize = (event) => {
        this.#fixFooterAtMiddlePage();
        if (this.#lastWindowWidth !== window.innerWidth || this.#lastWindowHeight !== window.innerHeight) {
            this.#fixedFooter();
        }
        this.#parallaxFooter();
    };

    #fixFooterAtMiddlePage = () => {
        const wpAdminbarHeight = DOM.WPAdminbar?.offsetHeight ?? 0;
        const footerBarHeight = DOM.footer.footerBar?.offsetHeight ?? 0;
        const htmlHeight = DOM.html.offsetHeight - wpAdminbarHeight;

        if (htmlHeight < window.innerHeight) {
            DOM.wrap.style.cssText = `
                display: flex;
                flex-direction: column;
                min-height: calc(100vh - ${wpAdminbarHeight}px - ${footerBarHeight}px);
            `;

            if (!!DOM.footer.calloutFooter) {
                DOM.footer.calloutFooter.style.marginTop = "auto";
            } else if (!!DOM.footer.siteFooter) {
                DOM.footer.siteFooter.style.marginTop = "auto";
            }

            this.#footerPositionState = "changed";
        } else if (this.#footerPositionState === "changed") {
            DOM.wrap.style.cssText = "";

            if (!!DOM.footer.calloutFooter) {
                DOM.footer.calloutFooter.style.marginTop = null;
            } else {
                DOM.footer.siteFooter.style.marginTop = null;
            }

            this.#footerPositionState = null;
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

        DOM.main.style.minHeight = DOM.main.offsetHeight + (window.innerHeight - DOM.html.offsetHeight - offset) + "px";
    };

    #parallaxFooter = () => {
        if (DOM.body.classList.contains("has-parallax-footer")) {
            setTimeout(() => {
                let mainSectionMarginBottom = 0;

                mainSectionMarginBottom += DOM.footer.parallax?.offsetHeight;

                if (!!DOM.footer.calloutFooter) {
                    DOM.footer.calloutFooter.style.bottom = `${mainSectionMarginBottom}px`;
                    mainSectionMarginBottom += DOM.footer.calloutFooter.offsetHeight;
                }

                DOM.main.style.marginBottom = `${mainSectionMarginBottom}px`;
            }, 10);
        }
    };
}
