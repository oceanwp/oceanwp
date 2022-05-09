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
      toggleSearchBtn: document.querySelector("a.search-dropdown-toggle"),
      form: document.querySelector("#searchform-dropdown"),
    };
  };

  #setupEventListeners = () => {
    this.#elements.toggleSearchBtn?.addEventListener(
      "click",
      this.#onToggleSearchBtnClick
    );
    document.addEventListener("click", this.#onDocumentClick);
  };

  #onToggleSearchBtnClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const { toggleSearchBtn, form } = this.#elements;

    toggleSearchBtn.parentNode.classList.toggle("active");
    form.classList.toggle("show");
    this.focus(form, "input.field");
  };

  #onDocumentClick = (event) => {
    // Collaps search form
    if (!event.target.closest("#searchform-dropdown.show")) {
      this.#elements.form?.classList.remove("show");
      this.#elements.toggleSearchBtn?.parentNode?.classList.remove("active");
    }
  };
}

("use script");
window.oceanwp = window.oceanwp || {};
oceanwp.dropDownSearch = new DropDownSearch();
