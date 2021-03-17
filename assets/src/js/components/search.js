import { DOM, options } from "../constants";

export default class Search {
    constructor() {
        this.#setupEventListeners();
    }

    #setupEventListeners = () => {
        if (options.menuSearchStyle == "drop_down") {
            DOM.search.dropdownToggleIcon.addEventListener("click", this.#onDropdownToggleIcon);
        }

        window.addEventListener("click", this.#onWindowClick);
    };

    #onDropdownToggleIcon = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const { dropdownToggleIcon: toggleIcon, dropdownForm: form } = DOM.search;

        form.classList.toggle("show");
        toggleIcon.parentNode.classList.toggle("active");

        // Focus
        let formTransitionDuration =
            parseFloat(getComputedStyle(form).transitionDuration.replace("s", "")) * 1000;

        if (formTransitionDuration) {
            setTimeout(function () {
                form.querySelector("input.field").focus();
            }, formTransitionDuration);
        }
    };

    #onWindowClick = (event) => {
        // Dropdonw Search Style Collaps
        if (!event.target.closest("#searchform-dropdown.show")) {
            DOM.search.dropdownForm.classList.remove("show");
            DOM.search.dropdownToggleIcon.parentNode.classList.remove("active");
        }
    };
}
