import { DOM } from "../../constants";

class WooThumbnails {
    constructor() {
        this.#setupEventListeners();
    }

    #setupEventListeners = () => {
        window.addEventListener("load", this.#start);
        window.addEventListener("resize", this.#start);
    };

    #start = () => {
        if (!!DOM.woo.navs) {
            if (window.innerWidth > 768) {
                DOM.woo.navs.forEach((nav) => {
                    const imageHeight = nav.querySelector(".flex-viewport").offsetHeight;
                    const navHeight = nav.querySelector(".flex-control-nav").offsetHeight;

                    if (navHeight > imageHeight + 50) {
                        nav.style.maxHeight = `${imageHeight}px`;
                    }
                });
            } else {
                DOM.woo.navs.forEach((nav) => {
                    nav.style.maxHeight = "";
                });
            }
        }
    };
}

export default WooThumbnails;
