import { DOM, options } from "../../../constants";
import { fadeIn, fadeOut } from "../../../lib/utils";
import SearchBase from "./base";

class OverlaySearch extends SearchBase {
    constructor() {
        super();

        if (options.menuSearchStyle !== "overlay") {
            return;
        }

        this.#setupEventListeners();
    }

    #setupEventListeners = () => {
        DOM.search.overlay.toggleSearchBtn?.addEventListener("click", this.#onToggleSearchBtnClick);
        DOM.search.overlay.closeBtn?.addEventListener("click", this.#onCloseBtnClick);
    };

    #onToggleSearchBtnClick = (event) => {
        event.preventDefault();

        const { form } = DOM.search.overlay;

        form.classList.add("active");
        fadeIn(form);

        this.focus(form, 'input[type="search"]');

        setTimeout(function () {
            DOM.html.style.overflow = "hidden";
        }, 400);
    };

    #onCloseBtnClick = (event) => {
        event.preventDefault();

        const { form } = DOM.search.overlay;

        form.classList.remove("active");
        fadeOut(form);

        setTimeout(function () {
            DOM.html.style.overflow = "visible";
        }, 400);
    };
}

export default OverlaySearch;
