import { DOM, options } from "../../../constants";
import { offset } from "../../../lib/utils";

class MegaMenu {
    constructor() {
        this.#start();
        this.#setupEventListeners();
    }

    #start = () => {
        DOM.menu.mega.menuContents.forEach((menuContent) => {
            const menuItem = menuContent.parentNode;
            const menuItemLeftOffset = offset(menuItem).left;
            const menuContentWidth = parseInt(window.getComputedStyle(menuContent).width);
            let horizontalPosition;
            let horizontalMargin;

            if (menuItemLeftOffset - menuContentWidth / 2 < 0) {
                horizontalPosition = menuItemLeftOffset - 10;
                horizontalMargin = 0;
            } else {
                horizontalPosition = menuContentWidth / 2;
                horizontalMargin = menuItem.offsetWidth / 2;
            }

            if (!options.isRTL) {
                menuContent.style.left = `-${horizontalPosition}px`;
                menuContent.style.marginLeft = `${horizontalMargin}px`;
            } else {
                menuContent.style.right = `-${horizontalPosition}px`;
                menuContent.style.marginRight = `${horizontalMargin}px`;
            }

            if (
                window.innerWidth -
                    menuItemLeftOffset -
                    horizontalPosition +
                    horizontalMargin +
                    menuContentWidth <
                0
            ) {
                menuContent.style.left = "auto";
                menuContent.style.right = `-${
                    window.innerWidth - menuItemLeftOffset - menuItem.offsetWidth - 10
                }px`;
            }
        });
    };

    #setupEventListeners = () => {
        DOM.menu.mega.menuItems.forEach((menuItem) => {
            menuItem.addEventListener("mouseenter", this.#onMenuItemMouseEnter);
        });

        // Topbar menu items
        DOM.menu.mega.topbarMenuItems.forEach((menuItem) => {
            menuItem.addEventListener("mouseenter", this.#onTopbarMenuItemMouseEnter);
        });
    };

    #onMenuItemMouseEnter = (event) => {
        const wrapper = DOM.header.site.classList.contains("medium-header")
            ? document.querySelector("#site-navigation-wrap > .container")
            : document.querySelector("#site-header-inner");

        this.#menuItemMouseEnter(wrapper, event);
    };

    #onTopbarMenuItemMouseEnter = (event) => {
        const wrapper = DOM.header.topbar;

        this.#menuItemMouseEnter(wrapper, event);
    };

    #menuItemMouseEnter = (wrapper, event) => {
        const menuItem = event.currentTarget;
        const content = menuItem.querySelector(".megamenu");
        let leftPosition = parseInt(offset(menuItem).left - offset(wrapper).left + 1);

        if (!content) {
            return;
        }

        if (DOM.body.classList.contains("boxed-layout")) {
            leftPosition = leftPosition - 30;
        }

        content.style.left = `-${leftPosition}px`;
        content.style.width = `${wrapper.offsetWidth}px`;
    };
}

export default MegaMenu;
