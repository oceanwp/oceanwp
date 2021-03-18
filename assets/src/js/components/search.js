import { DOM, options } from "../constants";

export default class Search {
    constructor() {
        this.#setupEventListeners();
    }

    #setupEventListeners = () => {
        if (options.menuSearchStyle == "drop_down") {
            DOM.search.dropdownToggleIcon.addEventListener("click", this.#onDropdownToggleIcon);
        }

        if (options.menuSearchStyle == "header_replace") {
            DOM.search.headerReplaceToggleIcon.addEventListener("click", this.#onHeaderReplaceToggleIcon);
            DOM.search.headerReplaceCloseIcon.addEventListener("click", this.#onHeaderReplaceCloseIcon);
        }

        window.addEventListener("click", this.#onWindowClick);
    };

    #onDropdownToggleIcon = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const { dropdownToggleIcon: toggleIcon, dropdownForm: form } = DOM.search;

        form.classList.toggle("show");
        toggleIcon.parentNode.classList.toggle("active");

        this.#focusForm(form, "input.field");
    };

    #onHeaderReplaceToggleIcon = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const { headerReplaceForm: form } = DOM.search;

        form.classList.toggle("show");

        if (this.#hasTopHeader()) {
            DOM.headerTopLeftSide.classList.toggle("hide");
            DOM.headerTopRighttSide.classList.toggle("hide");
        } else {
            DOM.nav.classList.toggle("hide");
            form.style.maxWidth =
                document.querySelector("#site-navigation > ul.dropdown-menu")?.offsetWidth + 60;
        }

        this.#focusForm(form, 'input[type="search"]');
    };

    #onHeaderReplaceCloseIcon = (event) => {
        event.preventDefault();

        const { headerReplaceForm: form } = DOM.search;

        form.classList.remove("show");

        if (this.#hasTopHeader()) {
            DOM.headerTopLeftSide.classList.remove("hide");
            DOM.headerTopRighttSide.classList.remove("hide");
        } else {
            DOM.nav.classList.remove("hide");
        }
    };

    #onWindowClick = (event) => {
        // Dropdonw Search Style Collaps
        if (!event.target.closest("#searchform-dropdown.show")) {
            DOM.search.dropdownForm?.classList.remove("show");
            DOM.search.dropdownToggleIcon?.parentNode.classList.remove("active");
        }

        // Header Replace Search Style Collaps
        if (!event.target.closest("#searchform-header-replace.show")) {
            DOM.search.headerReplaceForm.classList.remove("show");

            if (this.#hasTopHeader()) {
                DOM.headerTopLeftSide.classList.remove("hide");
                DOM.headerTopRighttSide.classList.remove("hide");
            } else {
                DOM.nav.classList.remove("hide");
            }
        }
    };

    #focusForm = (form, inputClass) => {
        const formTransitionDuration =
            parseFloat(getComputedStyle(form).transitionDuration.replace("s", "")) * 1000;

        if (formTransitionDuration) {
            setTimeout(function () {
                form.querySelector(inputClass).focus();
            }, formTransitionDuration);
        }
    };

    #hasTopHeader = () => DOM.header.classList.contains("top-header");
}
