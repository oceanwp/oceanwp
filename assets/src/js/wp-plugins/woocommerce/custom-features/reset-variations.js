import { DOM } from "../../../constants";

class WooResetVariations {
    constructor() {
        if (!!DOM.woo.resetVariations) {
            this.#setupEventListeners();
        }
    }

    #setupEventListeners = () => {
        DOM.woo.resetVariations.addEventListener("click", (event) => {
            const resetVariations = event.currentTarget;

            resetVariations
                .closest(".variations")
                .querySelectorAll("select")
                .forEach((select) => {
                    setTimeout(() => {
                        select.nextSibling.innerHTML = select.options[select.selectedIndex].text;
                    }, 100);
                });
        });
    };
}

export default WooResetVariations;
