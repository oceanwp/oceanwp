import { DOM } from "../../constants";
import { fadeIn, fadeOut } from "../../lib/utils";

export default class ScrollTop {
    constructor() {
        this.#start();
        this.#setupEventListeners();
    }

    #start = () => {};

    #setupEventListeners = () => {
        window.addEventListener("scroll", this.#onWindowScroll);
        DOM.scroll.scrollTop?.addEventListener("click", this.#onScrollTopClick);
        DOM.scroll.goTop?.addEventListener("click", this.#onScrollTopClick);
        DOM.scroll.goTopSlash?.addEventListener("click", this.#onScrollTopClick);
    };

    #onWindowScroll = (event) => {
        if (!DOM.scroll.scrollTop) {
            return;
        }

        if (window.pageYOffset > 100) {
            if (window.getComputedStyle(DOM.scroll.scrollTop).display === "none") {
                fadeIn(DOM.scroll.scrollTop);
            }
        } else if (window.getComputedStyle(DOM.scroll.scrollTop).display !== "none") {
            fadeOut(DOM.scroll.scrollTop);
        }
    };

    #onScrollTopClick = (event) => {
        event.preventDefault();

        const scrollTop = event.currentTarget;

        DOM.html.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        scrollTop.parentNode?.classList.remove("sfHover");
    };
}
