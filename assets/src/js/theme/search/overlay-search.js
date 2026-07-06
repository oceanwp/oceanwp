import { options } from "../../constants";
import { fadeIn, fadeOut } from "../../lib/utils";
import SearchBase from "./base";

class OverlaySearch extends SearchBase {
  #elements;
  #activeTrigger = null;

  constructor() {
    super();

    if (options.menuSearchStyle !== "overlay") {
      return;
    }

    this.#setElements();
    this.#setupEventListeners();
  }

  #setElements = () => {
    this.#elements = {
      toggleSearchBtn: document.querySelector(".search-overlay-toggle"),
      closeBtn: document.querySelector(
        "#searchform-overlay .search-overlay-close"
      ),
      form: document.querySelector("#searchform-overlay"),
      html: document.querySelector("html"),
      input: document.querySelector(
        "#searchform-overlay .searchform-overlay-input"
      ),
    };
  };

  #setupEventListeners = () => {
    this.#elements.toggleSearchBtn?.addEventListener(
      "click",
      this.#onToggleSearchBtnClick
    );
    this.#elements.closeBtn?.addEventListener("click", this.#onCloseBtnClick);

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

    this.#activeTrigger = event.currentTarget;

    const {
      form,
      input,
      toggleSearchBtn,
    } = this.#elements;

    form.classList.add("active");
    fadeIn(form);

    toggleSearchBtn?.setAttribute(
      "aria-expanded",
      "true"
    );

    input?.focus();

    setTimeout(() => {
      this.#elements.html.style.overflow = "hidden";
    }, 400);
  };

  #onCloseBtnClick = (event) => {
    event.preventDefault();

    const {
      form,
      toggleSearchBtn,
    } = this.#elements;

    form.classList.remove("active");
    fadeOut(form);

    toggleSearchBtn?.setAttribute(
      "aria-expanded",
      "false"
    );

    if (this.#activeTrigger) {
      setTimeout(() => {
        this.#activeTrigger.focus();
      }, 50);
    }

    setTimeout(() => {
      this.#elements.html.style.overflow = "visible";
    }, 400);
  };

  #onDocumentKeydown = (event) => {

    if (
      event.key === "Escape" &&
      this.#elements.form?.classList.contains(
        "active"
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
        "active"
      )
    ) {
      return;
    }

    const focusable = Array.from(
      this.#elements.form.querySelectorAll(
        'input, button, a[href]'
      )
    );

    if (!focusable.length) {
      return;
    }

    const first = focusable[0];
    const last =
      focusable[focusable.length - 1];

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

}

("use script");
window.oceanwp = window.oceanwp || {};
oceanwp.overlaySearch = new OverlaySearch();
