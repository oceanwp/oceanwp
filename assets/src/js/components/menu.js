import FullScreenMenu from "./menu/full-screen";

class Menu {
    constructor() {
        this.#start();
        this.#setupEventListeners();
    }

    #start = () => {
        this.fullScreen = new FullScreenMenu();
    };

    #setupEventListeners = () => {
        document.querySelectorAll("li.nav-no-click > a").forEach((noClickMenuItem) => {
            noClickMenuItem.addEventListener("click", this.#onNoClickMenuItemClick);
        });
    };

    #onNoClickMenuItemClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };
}

export default Menu;
