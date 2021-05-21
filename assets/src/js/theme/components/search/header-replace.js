import { DOM, options } from "../../../constants";
import SearchBase from "./base";

class HeaderReplaceSearch extends SearchBase {
    constructor() {
        super();

        if (options.menuSearchStyle !== "header_replace") {
            return;
        }

        this.#setupEventListeners();
    }

    #setupEventListeners = () => {
        DOM.search.headerReplace.toggleSearchBtn?.addEventListener("click", this.#onToggleSearchBtnClick);
        DOM.search.headerReplace.closeBtn?.addEventListener("click", this.#onCloseBtnClick);

        document.addEventListener("click", this.#onDocumentClick);
    };

    #onToggleSearchBtnClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const { form } = DOM.search.headerReplace;

        form.classList.toggle("show");

        if (this.#hasTopHeader()) {
            DOM.header.topLeftSide.classList.toggle("hide");
            DOM.header.topRightSide.classList.toggle("hide");
        } else {
            if (!DOM.menu.nav.classList.contains("hide")) {
                DOM.menu.main.style.minWidth = "370px";
            }
            DOM.menu.nav.classList.toggle("hide");
            form.style.maxWidth =
                document.querySelector("#site-navigation > ul.dropdown-menu")?.offsetWidth + 60 + "px";
        }

        this.focus(form, 'input[type="search"]');
    };

    #onCloseBtnClick = (event) => {
        event.preventDefault();

        const { form } = DOM.search.headerReplace;

        form.classList.remove("show");

        if (this.#hasTopHeader()) {
            DOM.header.topLeftSide.classList.remove("hide");
            DOM.header.topRightSide.classList.remove("hide");
        } else {
            DOM.menu.nav.classList.remove("hide");
            setTimeout(() => {
                DOM.menu.main.style.minWidth = "";
            }, 250);
        }
    };

    #onDocumentClick = (event) => {
        // Collaps search form
        if (!event.target.closest("#searchform-header-replace.show")) {
            DOM.search.headerReplace?.form?.classList.remove("show");

            if (this.#hasTopHeader()) {
                DOM.header.topLeftSide?.classList.remove("hide");
                DOM.header.topRightSide?.classList.remove("hide");
            } else {
                DOM.menu.nav?.classList.remove("hide");
            }
        }
    };

    #hasTopHeader = () => DOM.header.site?.classList.contains("top-header");
}

export default HeaderReplaceSearch;
