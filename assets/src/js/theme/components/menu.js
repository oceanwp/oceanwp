import { fadeIn, fadeOut } from "../../lib/utils";
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

        document.querySelectorAll("ul.sf-menu").forEach((menu) => {
            const parentMenuItems = menu.querySelectorAll(".menu-item-has-children");
            parentMenuItems.forEach((parentMenuItem) => {
                parentMenuItem.addEventListener("mouseenter", this.#onParentMenuItemMouseenter);
                parentMenuItem.addEventListener("mouseleave", this.#onParentMenuItemMouseleave);
            });
        });
    };

    #onNoClickMenuItemClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    #onParentMenuItemMouseenter = (event) => {
        const parentMenuItem = event.currentTarget;
        const subMenu = parentMenuItem.querySelector("ul.sub-menu");

        parentMenuItem.classList.add("sfHover");

        fadeIn(subMenu);
    };

    #onParentMenuItemMouseleave = (event) => {
        const parentMenuItem = event.currentTarget;
        const subMenu = parentMenuItem.querySelector("ul.sub-menu");

        parentMenuItem.classList.remove("sfHover");
        subMenu.style.pointerEvents = "none";

        fadeOut(subMenu, {
            callback: () => {
                subMenu.style.pointerEvents = null;
            },
        });
    };
}

export default Menu;
