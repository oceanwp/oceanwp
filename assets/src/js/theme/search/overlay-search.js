import { options } from "../../constants";
import { fadeIn, fadeOut } from "../../lib/utils";
import SearchBase from "./base";

class OverlaySearch extends SearchBase {
  #elements;

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
      toggleSearchBtn: document.querySelector("a.search-overlay-toggle"),
      closeBtn: document.querySelector(
        "#searchform-overlay a.search-overlay-close"
      ),
      form: document.querySelector("#searchform-overlay"),
      html: document.querySelector("html"),
    };
  };

  #setupEventListeners = () => {
    this.#elements.toggleSearchBtn?.addEventListener(
      "click",
      this.#onToggleSearchBtnClick
    );
    this.#elements.closeBtn?.addEventListener("click", this.#onCloseBtnClick);
  };

  #onToggleSearchBtnClick = (event) => {
    event.preventDefault();

    const { form } = this.#elements;

    form.classList.add("active");
    fadeIn(form);

    this.focus(form, 'input[type="search"]');

    setTimeout(() => {
      this.#elements.html.style.overflow = "hidden";
    }, 400);
  };

  #onCloseBtnClick = (event) => {
    event.preventDefault();

    const { form } = this.#elements;

    form.classList.remove("active");
    fadeOut(form);

    setTimeout(() => {
      this.#elements.html.style.overflow = "visible";
    }, 400);
  };
}

("use script");
window.oceanwp = window.oceanwp || {};
oceanwp.overlaySearch = new OverlaySearch();
