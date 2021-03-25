import { DOM } from "../constants";
import { fadeIn, fadeOut } from "../lib/utils";

export default class ScrollTop {
    constructor() {
        this.#start();
        this.#setupEventListeners();
    }

    #start = () => {};

    #setupEventListeners = () => {
        window.addEventListener("scroll", this.#onWindowScroll);
        DOM.scrollTop?.addEventListener("click", this.#onScrollTopClick);
        DOM.goTop?.addEventListener("click", this.#onScrollTopClick);
        DOM.goTopSlash?.addEventListener("click", this.#onScrollTopClick);
    };

    #onWindowScroll = (event) => {
        if (!DOM.scrollTop) {
            return;
        }

        if (window.pageYOffset > 100) {
            if (window.getComputedStyle(DOM.scrollTop).display === "none") {
                fadeIn(DOM.scrollTop);
            }
        } else {
            if (window.getComputedStyle(DOM.scrollTop).display !== "none") {
                fadeOut(DOM.scrollTop);
            }
        }
    };

    #onScrollTopClick = (event) => {
        event.preventDefault();

        const scrollTop = event.currentTarget;

        DOM.html.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        DOM.body.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        scrollTop.parentNode?.classList.remove("sfHover");
    };
}
