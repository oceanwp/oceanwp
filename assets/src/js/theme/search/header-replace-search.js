import { options } from "../../constants";
import SearchBase from "./base";

class HeaderReplaceSearch extends SearchBase {
  #elements;
  #activeTrigger = null;

  constructor() {
    super();

    if (options.menuSearchStyle !== "header_replace") {
      return;
    }

    this.#setElements();
    this.#setupEventListeners();
  }

  #setElements = () => {
    this.#elements = {
      toggleSearchBtn: document.querySelector(".search-header-replace-toggle"),
      closeBtn: document.querySelector("#searchform-header-replace-close"),
      form: document.querySelector("#searchform-header-replace"),
      topLeftSide: document.querySelector(
        "#site-header.top-header .header-top .left"
      ),
      topRightSide: document.querySelector(
        "#site-header.top-header .header-top .right"
      ),
      nav: document.querySelector(
        "#site-header.header-replace #site-navigation"
      ),
      menu: document.querySelector(".main-menu"),
      header: document.querySelector("#site-header"),
      input: document.querySelector(
        '#searchform-header-replace input[type="search"]'
      ),
    };
  };

  #setupEventListeners = () => {
    this.#elements.toggleSearchBtn?.addEventListener(
      "click",
      this.#onToggleSearchBtnClick
    );
    this.#elements.closeBtn?.addEventListener("click", this.#onCloseBtnClick);

    document.addEventListener("click", this.#onDocumentClick);

    document.addEventListener(
      "keydown",
      this.#onDocumentKeydown
    );

    this.#elements.form?.addEventListener(
      "keydown",
      this.#onFormKeydown
    );
  };

  #onToggleSearchBtnClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.#activeTrigger = event.currentTarget;

    const {
      form,
      input,
      toggleSearchBtn,
    } = this.#elements;

    form.classList.toggle("show");

    const isOpen = form.classList.contains("show");

    toggleSearchBtn?.setAttribute(
      "aria-expanded",
      isOpen  ? "true" : "false"
    );

    if (this.#hasTopHeader()) {
      this.#elements.topLeftSide.classList.toggle("hide");
      this.#elements.topRightSide.classList.toggle("hide");
    } else {
      if (!this.#elements.nav.classList.contains("hide")) {
        this.#elements.menu.style.minWidth = "370px";
      }
      this.#elements.nav.classList.toggle("hide");
      form.style.maxWidth =
        document.querySelector("#site-navigation > ul.dropdown-menu")
          ?.offsetWidth +
        60 +
        "px";
    }

    if (isOpen) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          input?.focus();
        });
      });
    }

  };

  #onCloseBtnClick = (event) => {
    event.preventDefault();

    const {
      form,
      toggleSearchBtn,
    } = this.#elements;

    form.classList.remove("show");

    toggleSearchBtn?.setAttribute(
      "aria-expanded",
      "false"
    );

    if (this.#activeTrigger) {
      setTimeout(() => {
        this.#activeTrigger.focus();
      }, 50);
    }

    if (this.#hasTopHeader()) {
      this.#elements.topLeftSide.classList.remove("hide");
      this.#elements.topRightSide.classList.remove("hide");
    } else {
      this.#elements.nav.classList.remove("hide");
      setTimeout(() => {
        this.#elements.menu.style.minWidth = "";
      }, 250);
    }
  };

  #onDocumentClick = (event) => {
    // Collaps search form
    if (!event.target.closest("#searchform-header-replace.show")) {
      if (
        this.#elements.form?.classList.contains(
          "show"
        )
      ) {
        this.#elements.closeBtn?.click();
      }

      if (this.#hasTopHeader()) {
        this.#elements.topLeftSide?.classList.remove("hide");
        this.#elements.topRightSide?.classList.remove("hide");
      } else {
        this.#elements.nav?.classList.remove("hide");
      }
    }
  };

  #onDocumentKeydown = (event) => {

    if (
      event.key === "Escape" &&
      this.#elements.form?.classList.contains(
        "show"
      )
    ) {
      event.preventDefault();

      this.#elements.closeBtn?.click();
    }
  };

  #onFormKeydown = (event) => {

    if (
      event.key !== "Tab" ||
      !this.#elements.form?.classList.contains(
        "show"
      )
    ) {
      return;
    }

    const focusable = Array.from(
      this.#elements.form.querySelectorAll(
        'input[type="search"], button, a[href]'
      )
    );

    if (!focusable.length) {
      return;
    }

    const first = focusable[0];

    const last =
      focusable[
        focusable.length - 1
      ];

    if (
      event.shiftKey &&
      document.activeElement === first
    ) {
      event.preventDefault();

      last.focus();
    }

    if (
      !event.shiftKey &&
      document.activeElement === last
    ) {
      event.preventDefault();

      first.focus();
    }
  };

  #hasTopHeader = () => this.#elements.header?.classList.contains("top-header");
}

("use script");
window.oceanwp = window.oceanwp || {};
oceanwp.headerReplaceSearch = new HeaderReplaceSearch();
