import { DOM, options } from "../../../constants";
import SearchBase from "./base";

class DropDownSearch extends SearchBase {
    constructor() {
        super();

        if (options.menuSearchStyle !== "drop_down") {
            return;
        }

        this.#setupEventListeners();
    }

    #setupEventListeners = () => {
        DOM.search.dropDown.toggleSearchBtn?.addEventListener("click", this.#onToggleSearchBtnClick);
        document.addEventListener("click", this.#onDocumentClick);
    };

    #onToggleSearchBtnClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const { toggleSearchBtn, form } = DOM.search.dropDown;

        toggleSearchBtn.parentNode.classList.toggle("active");
        form.classList.toggle("show");
        this.focus(form, "input.field");
    };

    #onDocumentClick = (event) => {
        // Collaps search form
        if (!event.target.closest("#searchform-dropdown.show")) {
            DOM.search.dropDown.form?.classList.remove("show");
            DOM.search.dropDown.toggleSearchBtn?.parentNode?.classList.remove("active");
        }
    };
}

export default DropDownSearch;
