import { DOM } from "../../constants";
import { isSelectorValid, offset } from "../../lib/utils";

class ScrollEffect {
  constructor() {
    if (
      !DOM.body.classList.contains("single-product") &&
      !DOM.body.classList.contains("no-local-scroll")
    ) {
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
      scrollItem.classList.contains("elementor-item-anchor") &&
      scrollItem.classList.contains("has-submenu")
    ) {
      return;
    }

    if (
      !scrollItem.classList.contains("omw-open-modal") &&
      !scrollItem.closest(".omw-open-modal") &&
      !scrollItem.classList.contains("oew-modal-button") &&
      !scrollItem.closest(".oew-modal-button") &&
      !scrollItem.classList.contains("opl-link") &&
      !scrollItem.parentNode.classList.contains("opl-link") &&
      !scrollItem.classList.contains("sidr-class-opl-link") &&
      !scrollItem.parentNode.classList.contains("sidr-class-opl-link") &&
      !scrollItem.classList.contains("acomment-reply") &&
      !scrollItem.classList.contains("htb-nav-link") &&
      !scrollItem.classList.contains("upload-file")
    ) {
      const href = scrollItem.getAttribute("href");
      const id = href.substring(href.indexOf("#")).slice(1);
      let targetElem = null;

      if (isSelectorValid(`#${id}`)) {
        targetElem = document.querySelector(`#${id}`);
      }

      if (id != "" && !!targetElem) {
        event.preventDefault();
        event.stopPropagation();

        let scrollPosition =
          offset(targetElem).top -
          this.#getAdminBarHeight() -
          this.#getTopbarHeight() -
          this.#getStickyHeaderHeight();

        DOM.html.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  };

  #getAdminBarHeight = () =>
    !!DOM.WPAdminbar ? DOM.WPAdminbar.offsetHeight : 0;

  #getTopbarHeight = () =>
    !!DOM.header.topbarWrapper &&
    DOM.header.topbarWrapper.classList.contains("top-bar-sticky")
      ? DOM.header.topbarWrapper.offsetHeight
      : 0;

  #getStickyHeaderHeight = (startPosition = false) => {
    const stickyHeader = document.querySelector("#site-header-sticky-wrapper");

    if (!!stickyHeader) {
      if (stickyHeader.classList.contains("is-sticky") && !startPosition) {
        return DOM.header.site.offsetHeight;
      }

      if (DOM.header.site?.classList.contains("top-header")) {
        return Number.parseInt(getComputedStyle(stickyHeader).height);
      }

      if (DOM.header.site?.classList.contains("medium-header")) {
        let height = 0;
        const menu = DOM.header.site.querySelector(".bottom-header-wrap");

        if (menu.classList.contains("fixed-scroll")) {
          height = menu.offsetHeight;
        } else if (DOM.header.site.classList.contains("hidden-menu")) {
          height = DOM.header.site.dataset.height;
        } else {
          height = DOM.header.site.offsetHeight;
        }

        return height;
      }

      if (DOM.header.site?.classList.contains("fixed-header")) {
        return DOM.header.site.offsetHeight;
      }

      if (DOM.header.site?.classList.contains("up-effect")) {
        return 0;
      }

      return DOM.header.site?.dataset.height ?? 54;
    }

    if (!!document.querySelector("#stick-anything-header")) {
      return document.querySelector("#stick-anything-header").offsetHeight;
    }

    if (
      !!document
        .querySelector(".elementor-section-wrap")
        ?.firstElementChild.classList.contains("elementor-sticky")
    ) {
      return document.querySelector(".elementor-section-wrap")
        ?.firstElementChild.offsetHeight;
    }

    return 0;
  };
}

export default ScrollEffect;
