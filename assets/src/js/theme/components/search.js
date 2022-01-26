import { DOM } from "../../constants";
import DropDownSearch from "./search/drop-down";
import HeaderReplaceSearch from "./search/header-replace";
import MobileSearchIcon from "./search/mobile-search-icon";
import OverlaySearch from "./search/overlay";

class Search {
    mobileOverlayInput;

    constructor() {
        this.#start();
        this.#setupEventListeners();
    }

    #start = () => {
        this.dropDown = new DropDownSearch();
        this.headerReplace = new HeaderReplaceSearch();
        this.overlay = new OverlaySearch();
        this.mobileSearchIcon = new MobileSearchIcon();

        this.mobileOverlayInput = document.querySelector(".mobile-search-overlay-input");

        DOM.search.forms.forEach((form) => {
            if (form.querySelector("input")?.value) {
                form.classList.add("search-filled");
            }
        });

        if (!!this.mobileOverlayInput?.value) {
            this.mobileOverlayInput.closest("form").classList.add("search-filled");
        }
    };

    #setupEventListeners = () => {
        DOM.search.forms.forEach((form) => {
            form.querySelector("input")?.addEventListener("keyup", this.#onInputKeyup);
            form.querySelector("input")?.addEventListener("blur", this.#onInputKeyup);
        });

        this.mobileOverlayInput?.addEventListener("keyup", this.#onInputKeyup);
        this.mobileOverlayInput?.addEventListener("blur", this.#onInputKeyup);
    };

    #onInputKeyup = (event) => {
        const input = event.currentTarget;
        const form = input.closest("form");

        if (input.value) {
            form.classList.add("search-filled");
        } else {
            form.classList.remove("search-filled");
        }
    };
}

export default Search;
