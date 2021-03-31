import FullScreenMenu from "./menu/full-screen";
import MegaMenu from "./menu/mega";

class Menu {
    constructor() {
        this.#start();
        this.#setupEventListeners();
    }

    #start = () => {
        this.fullScreen = new FullScreenMenu();
        this.mega = new MegaMenu();
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
