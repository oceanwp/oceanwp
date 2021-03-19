export default class Menu {
    constructor() {
        this.#start();
        this.#setupEventListeners();
    }

    #start = () => {};

    #setupEventListeners = () => {
        document.querySelectorAll("li.nav-no-click > a").forEach((noClickMenuItem) => {
            noClickMenuItem.addEventListener("click", this.#onNoClickMenuItem);
        });
    };

    #onNoClickMenuItem = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };
}
