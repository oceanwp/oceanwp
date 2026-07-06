import { options } from "../../constants";
import SearchBase from "./base";

class DropDownSearch extends SearchBase {
  #elements;

  constructor() {
    super();

    if (options.menuSearchStyle !== "drop_down") {
      return;
    }

    this.#setElements();
    this.#setupEventListeners();
  }

  #setElements = () => {
    this.#elements = {
      toggleSearchBtn: document.querySelector(".search-dropdown-toggle"),
      form: document.querySelector("#searchform-dropdown"),
    };
  };

  #setupEventListeners = () => {
    this.#elements.toggleSearchBtn?.addEventListener(
      "click",
      this.#onToggleSearchBtnClick
    );

    document.addEventListener(
      "click",
      this.#onDocumentClick
    );

    document.addEventListener(
      "keydown",
      this.#onDocumentKeydown
    );

    this.#elements.form?.addEventListener(
      "keydown",
      this.#onFormKeydown
    );
  };

  #isOpen = () => {
    return this.#elements.form?.classList.contains(
      "show"
    );
  };

  #onToggleSearchBtnClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const { toggleSearchBtn, form } = this.#elements;

    const isOpening =
      !form.classList.contains("show");

    toggleSearchBtn.parentNode.classList.toggle(
      "active"
    );

    form.classList.toggle("show");

    toggleSearchBtn.setAttribute(
      "aria-expanded",
      isOpening ? "true" : "false"
    );

    this.focus(form, "input.field");
  };

  #onDocumentClick = (event) => {
    // Collaps search form
    if (!event.target.closest("#searchform-dropdown.show")) {
      this.#elements.form?.classList.remove("show");
      this.#elements.toggleSearchBtn?.parentNode?.classList.remove("active");

      this.#elements.toggleSearchBtn?.setAttribute(
        "aria-expanded",
        "false"
      );
    }
  };

  #onDocumentKeydown = (event) => {

    if (
      event.key === "Escape" &&
      this.#isOpen()
    ) {
      event.preventDefault();

      this.#elements.form?.classList.remove(
        "show"
      );

      this.#elements.toggleSearchBtn?.parentNode?.classList.remove(
        "active"
      );

      this.#elements.toggleSearchBtn?.setAttribute(
        "aria-expanded",
        "false"
      );

      this.#elements.toggleSearchBtn?.focus();
    }
  };

  #onFormKeydown = (event) => {

    if (
      event.key !== "Tab" ||
      !this.#isOpen()
    ) {
      return;
    }

    const focusable = Array.from(
      this.#elements.form.querySelectorAll(
        'input:not([type="hidden"]), button, a[href]'
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
}

("use script");
window.oceanwp = window.oceanwp || {};
oceanwp.dropDownSearch = new DropDownSearch();
