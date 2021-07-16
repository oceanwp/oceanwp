import { DOM } from "../../constants";
import { offset } from "../../lib/utils";

class ScrollEffect {
    constructor() {
        if (!DOM.body.classList.contains("single-product") && !DOM.body.classList.contains("no-local-scroll")) {
            this.#setupEventListeners();
        }
    }

    #setupEventListeners = () => {
        document
            .querySelectorAll(
                'a[href*="#"]:not([href="#"]), a.local[href*="#"]:not([href="#"]), .local a[href*="#"]:not([href="#"]), a.menu-link[href*="#"]:not([href="#"]), a.sidr-class-menu-link[href*="#"]:not([href="#"])'
            )
            .forEach((scrollItem) => {
                scrollItem.addEventListener("click", this.#onScrollItemClick);
            });
    };

    #onScrollItemClick = (event) => {
        const scrollItem = event.currentTarget;

        if (
            !scrollItem.classList.contains("omw-open-modal") &&
            !scrollItem.parentNode.classList.contains("omw-open-modal opl-link") &&
            !scrollItem.parentNode.parentNode.parentNode.classList.contains("omw-open-modal")
        ) {
            const href = scrollItem.getAttribute("href");
            const id = href.substring(href.indexOf("#")).slice(1);
            const target = document.querySelector(`#${id}`);

            if (id != "" && !!target) {
                event.preventDefault();
                event.stopPropagation();

                const scrollPosition =
                    offset(target).top - this.#getAdminBarHeight() - this.#getTopbarHeight() - this.#getStickyHeaderHeight();

                DOM.html.scrollTo({
                    top: scrollPosition,
                    behavior: "smooth",
                });

                DOM.body.scrollTo({
                    top: scrollPosition,
                    behavior: "smooth",
                });
            }
        }
    };

    #getAdminBarHeight = () => (!!DOM.WPAdminbar ? DOM.WPAdminbar.offsetHeight : 0);

    #getTopbarHeight = () =>
        !!DOM.header.topbarWrapper && DOM.header.topbarWrapper.classList.contains("top-bar-sticky")
            ? DOM.header.topbarWrapper.offsetHeight
            : 0;

    #getStickyHeaderHeight = () => {
        let height = 0;

        if (!DOM.header.site) {
            return;
        }

        if (DOM.header.site.classList.contains("fixed-scroll")) {
            height = DOM.header.site.getAttribute("data-height");
        }

        if (DOM.header.site.classList.contains("medium-header")) {
            const bottomHeaderWrapper = DOM.header.site.querySelector(".bottom-header-wrap");

            height = bottomHeaderWrapper.classList.contains("fixed-scroll")
                ? bottomHeaderWrapper.offsetHeight
                : !!document.querySelector(".is-sticky #site-header-inner")
                ? document.querySelector(".is-sticky #site-header-inner").offsetHeight
                : 0;
        }

        return height;
    };
}

export default ScrollEffect;
