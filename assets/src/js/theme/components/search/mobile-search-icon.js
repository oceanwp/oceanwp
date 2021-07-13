import { options } from "../../../constants";
import { fadeIn, fadeOut } from "../../../lib/utils";
import SearchBase from "./base";

class MobileSearchIcon extends SearchBase {
    #elements;

    constructor() {
        super();

        if (options.mobileMenuSearchStyle !== "disabled") {
            return;
        }

        this.#setElements();
        this.#setupEventListeners();
    }

    #setElements = () => {
        this.#elements = {
            dropdownSearchIcon: document.querySelector(".search-icon-dropdown"),
            dropdownSearchForm: document.querySelector(".search-style-dropdown"),
            overlaySearch: document.querySelector(".search-style-overlay"),
            overlaySearchIcon: document.querySelector(".search-icon-overlay"),
            overlaySearchCloseIcon: document.querySelector(".search-overlay-close"),
            html: document.querySelector("html"),
        };
    };

    #setupEventListeners = () => {
        if (options.mobileMenuSearchStyle === "drop_down") {
            this.#elements.dropdownSearchIcon?.addEventListener("click", this.#toggleDropdownSearch);
            document.addEventListener("click", this.#onClickDocument);
        } else if (options.mobileMenuSearchStyle === "overlay") {
            this.#elements.overlaySearchIcon?.addEventListener("click", this.#openOverlaySearch);
            this.#elements.overlaySearchCloseIcon?.addEventListener("click", this.#closeOverlaySearch);
            this.#elements.overlaySearch?.addEventListener("click", this.#onClickOverlaySearch);
        }
    };

    #toggleDropdownSearch = (event) => {
        event.preventDefault();
        event.stopPropagation();

        this.#elements.dropdownSearchForm.classList.toggle("show");
        this.#elements.dropdownSearchIcon.toggle("active");

        let formTransitionDuration = window.getComputedStyle("transition-duration").replace("s", "") * 1000;
        if (!!formTransitionDuration) {
            setTimeout(function () {
                this.#elements.dropdownSearchForm.querySelector("input.field").focus();
            }, formTransitionDuration);
        }
    };

    #openOverlaySearch = (event) => {
        event.preventDefault();

        this.#elements.overlaySearch.classList.add("active");
        fadeIn(this.#elements.overlaySearch);

        this.#elements.overlaySearch.querySelector("input").focus();

        setTimeout(() => {
            this.#elements.html.style.overflow = "hidden";
        }, 400);
    };

    #closeOverlaySearch = (event) => {
        event.preventDefault();

        this.#elements.overlaySearch.classList.remove("active");
        fadeOut(this.#elements.overlaySearch);

        setTimeout(() => {
            this.#elements.html.style.overflow = "visible";
        }, 400);
    };

    #onClickOverlaySearch = (event) => {
        this.#elements.overlaySearch.querySelector("input").focus();
    };

    #onClickDocument = (event) => {
        if (!event.target.closest("#searchform-dropdown.show")) {
            this.#elements.dropdownSearchIcon.classList.remove("active");
            this.#elements.dropdownSearchForm.classList.remove("show");
        }
    };
}

export default MobileSearchIcon;
