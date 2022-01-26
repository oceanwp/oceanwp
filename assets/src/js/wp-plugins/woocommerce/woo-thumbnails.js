import { DOM } from "../../constants";

class WooThumbnails {
    constructor() {
        if (!!DOM.woo.thumbsVerticalLayout) {
            this.#setupEventListeners();
        }
    }

    #setupEventListeners = () => {
        window.addEventListener("load", this.#start);
        window.addEventListener("resize", this.#start);
    };

    #start = () => {
        const thumbsNav = DOM.woo.thumbsVerticalLayout.querySelector(".flex-control-nav");

        if (!!thumbsNav) {
            if (window.innerWidth > 768) {
                const imageHeight =
                    DOM.woo.thumbsVerticalLayout.querySelector(".flex-viewport")?.offsetHeight;
                const navHeight =
                    DOM.woo.thumbsVerticalLayout.querySelector(".flex-control-nav")?.offsetHeight;

                if (navHeight > imageHeight + 50) {
                    thumbsNav.style.maxHeight = `${imageHeight}px`;
                }
            } else {
                thumbsNav.style.maxHeight = "";
            }
        }
    };
}

new WooThumbnails();
