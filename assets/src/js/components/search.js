import { DOM, options } from "../constants";
import { fadeIn, fadeOut } from "../lib/utils";

export default class Search {
    constructor() {
        this.#start();
        this.#setupEventListeners();
    }

    #start = () => {
        if (DOM.search.input?.value) {
            DOM.search.form?.classList.add("search-filled");
        }
    };

    #setupEventListeners = () => {
        DOM.search.input?.addEventListener("keyup", this.#onInputKeyup);
        DOM.search.input?.addEventListener("blur", this.#onInputBlur);

        // Drop-Down style
        if (options.menuSearchStyle == "drop_down") {
            DOM.search.dropdownToggleIcon.addEventListener("click", this.#onDropdownToggleIcon);
        }

        // Header Replace style
        if (options.menuSearchStyle == "header_replace") {
            DOM.search.headerReplaceToggleIcon.addEventListener("click", this.#onHeaderReplaceToggleIcon);
            DOM.search.headerReplaceCloseIcon.addEventListener("click", this.#onHeaderReplaceCloseIcon);
        }

        // Overlay style
        if (options.menuSearchStyle == "overlay") {
            if (!!DOM.search.overlayToggleIcon) {
                DOM.search.overlayToggleIcon.addEventListener("click", this.#onOverlayToggleIcon);
            }

            DOM.search.overlayCloseIcon.addEventListener("click", this.#onOverlayCloseIcon);
        }

        document.addEventListener("click", this.#onDocumentClick);
    };

    #onInputKeyup = (event) => {
        if (DOM.search.input.value) {
            DOM.search.form.classList.add("search-filled");
        } else {
            DOM.search.form.classList.remove("search-filled");
        }
    };

    #onInputBlur = (event) => {
        this.#onInputKeyup();
    };

    #onDropdownToggleIcon = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const { dropdownToggleIcon: toggleIcon, dropdownForm: form } = DOM.search;

        form.classList.toggle("show");
        toggleIcon.parentNode.classList.toggle("active");

        this.#focus(form, "input.field");
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

        this.#focus(form, 'input[type="search"]');
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

    #onOverlayToggleIcon = (event) => {
        event.preventDefault();

        const { overlayForm: form } = DOM.search;

        form.classList.add("active");
        fadeIn(form);
        form.getElementsByTagName("input")[0].focus();

        setTimeout(function () {
            DOM.html.style.overflow = "hidden";
        }, 400);
    };

    #onOverlayCloseIcon = (event) => {
        event.preventDefault();

        const { overlayForm: form } = DOM.search;

        form.classList.remove("active");
        fadeOut(form);

        setTimeout(function () {
            DOM.html.style.overflow = "visible";
        }, 400);
    };

    #onDocumentClick = (event) => {
        // Dropdonw Search Style Collaps
        if (!event.target.closest("#searchform-dropdown.show")) {
            DOM.search.dropdownForm?.classList.remove("show");
            DOM.search.dropdownToggleIcon?.parentNode.classList.remove("active");
        }

        // Header Replace Search Style Collaps
        if (!event.target.closest("#searchform-header-replace.show")) {
            DOM.search.headerReplaceForm?.classList.remove("show");

            if (this.#hasTopHeader()) {
                DOM.headerTopLeftSide?.classList.remove("hide");
                DOM.headerTopRighttSide?.classList.remove("hide");
            } else {
                DOM.nav?.classList.remove("hide");
            }
        }
    };

    #focus = (form, inputClass) => {
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
