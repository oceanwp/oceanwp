import { options } from "../../constants";
import SearchBase from "./base";

class HeaderReplaceSearch extends SearchBase {
  #elements;

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
      toggleSearchBtn: document.querySelector("a.search-header-replace-toggle"),
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
    };
  };

  #setupEventListeners = () => {
    this.#elements.toggleSearchBtn?.addEventListener(
      "click",
      this.#onToggleSearchBtnClick
    );
    this.#elements.closeBtn?.addEventListener("click", this.#onCloseBtnClick);

    document.addEventListener("click", this.#onDocumentClick);
  };

  #onToggleSearchBtnClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const { form } = this.#elements;

    form.classList.toggle("show");

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

    this.focus(form, 'input[type="search"]');
  };

  #onCloseBtnClick = (event) => {
    event.preventDefault();

    const { form } = this.#elements;

    form.classList.remove("show");

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
      this.#elements.form?.classList.remove("show");

      if (this.#hasTopHeader()) {
        this.#elements.topLeftSide?.classList.remove("hide");
        this.#elements.topRightSide?.classList.remove("hide");
      } else {
        this.#elements.nav?.classList.remove("hide");
      }
    }
  };

  #hasTopHeader = () => this.#elements.header?.classList.contains("top-header");
}

("use script");
window.oceanwp = window.oceanwp || {};
oceanwp.headerReplaceSearch = new HeaderReplaceSearch();
