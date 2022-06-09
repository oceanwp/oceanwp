import { isSelectorValid, offset } from "../lib/utils";

class ScrollEffect {
  #elements = {
    body: document.body,
  };

  constructor() {
    if (
      !this.#elements.body.classList.contains("single-product") &&
      !this.#elements.body.classList.contains("no-local-scroll")
    ) {
      this.#setElements();
      this.#setupEventListeners();
    }
  }

  #setElements = () => {
    this.#elements = {
      ...this.#elements,
      html: document.querySelector("html"),
      WPAdminbar: document.querySelector("#wpadminbar"),
      topbarWrapper: document.querySelector("#top-bar-wrap"),
      header: document.querySelector("#site-header"),
    };
  };

  #setupEventListeners = () => {
    document
      .querySelectorAll(
        'a[href*="#"]:not([href="#"]):not(.comment-navigation .nav-links a), a.local[href*="#"]:not([href="#"]), .local a[href*="#"]:not([href="#"]), a.menu-link[href*="#"]:not([href="#"]), a.sidr-class-menu-link[href*="#"]:not([href="#"])'
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
      !scrollItem.classList.contains("comment-reply") &&
      !scrollItem.classList.contains("htb-nav-link") &&
      !scrollItem.classList.contains("upload-file") &&
      !scrollItem.parentNode.classList.contains("vc_tta-panel-title") &&
      !scrollItem.classList.contains("vce-tabs-with-slide-tab-title") &&
      !scrollItem.classList.contains("vce-tabs-with-slide-panel-title") &&
      !scrollItem.classList.contains("vce-classic-tabs-tab-title") &&
      !scrollItem.classList.contains("vce-classic-accordion-panel-title")
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

        this.#elements.html.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  };

  #getAdminBarHeight = () =>
    !!this.#elements.WPAdminbar ? this.#elements.WPAdminbar.offsetHeight : 0;

  #getTopbarHeight = () =>
    !!this.#elements.topbarWrapper &&
    this.#elements.topbarWrapper.classList.contains("top-bar-sticky")
      ? this.#elements.topbarWrapper.offsetHeight
      : 0;

  #getStickyHeaderHeight = (startPosition = false) => {
    const stickyHeader = document.querySelector("#site-header-sticky-wrapper");

    if (!!stickyHeader) {
      if (stickyHeader.classList.contains("is-sticky") && !startPosition) {
        return this.#elements.header.offsetHeight;
      }

      if (this.#elements.header?.classList.contains("top-header")) {
        return Number.parseInt(getComputedStyle(stickyHeader).height);
      }

      if (this.#elements.header?.classList.contains("medium-header")) {
        let height = 0;
        const menu = this.#elements.header.querySelector(".bottom-header-wrap");

        if (menu.classList.contains("fixed-scroll")) {
          height = menu.offsetHeight;
        } else if (this.#elements.header.classList.contains("hidden-menu")) {
          height = this.#elements.header.dataset.height;
        } else {
          height = this.#elements.header.offsetHeight;
        }

        return height;
      }

      if (this.#elements.header?.classList.contains("fixed-header")) {
        return this.#elements.header.offsetHeight;
      }

      if (this.#elements.header?.classList.contains("up-effect")) {
        return 0;
      }

      return this.#elements.header?.dataset.height ?? 54;
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

("use script");
window.oceanwp = window.oceanwp || {};
oceanwp.scrollEffect = new ScrollEffect();
