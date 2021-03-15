import { DOM } from "../constants";

export default class Select {
    #select;

    constructor() {
        this.#render();
    }

    #render = () => {
        DOM.selects.forEach((select) => {
            this.#select = select;

            this.#select.insertAdjacentHTML(
                "afterend",
                `<span class="theme-select ${this.#select.classList}">
                    <span class="theme-selectInner">
                        ${this.#select.options[this.#select.selectedIndex].text}
                    </span>
                </span>`
            );

            this.#select.classList.add("hasCustomSelect");

            this.#style();
            this.#setupEventListeners();
        });
    };

    #style = () => {
        this.#select.style.opacity = 0;
        this.#select.style.position = "absolute";
        this.#select.style.width = "228px";
        this.#select.style.height = "34px";
        this.#select.style.fontSize = "13px";
        this.#select.style.appearance = "menulist-button";

        this.#select.nextSibling.style.display = "inline-block";
        this.#select.nextSibling.firstElementChild.style.display = "inline-block";
    };

    #setupEventListeners = () => {
        this.#select.addEventListener("mouseenter", this.#onMouseenter);
        this.#select.addEventListener("mouseleave", this.#onMouseleave);
    };

    #onMouseenter = () => {
        this.#select.classList.add("theme-selectHover");
    };

    #onMouseleave = () => {
        this.#select.classList.remove("theme-selectHover");
    };
}
