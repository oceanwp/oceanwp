import { DOM, options } from "../../../constants";
import { slideDown, slideUp } from "../../../lib/utils";

class VerticalHeader {
    #menuItemsPlusIcon;

    constructor() {
        if (!DOM.header.vertical) {
            return;
        }

        this.#start();
        this.#setupEventListeners();
    }

    #start = () => {
        DOM.header.vertical.querySelectorAll("li.menu-item-has-children > a").forEach((menuLink) => {
            menuLink.insertAdjacentHTML("beforeend", '<span class="dropdown-toggle" tabindex="0"></span>');
        });

        this.#menuItemsPlusIcon =
            options.verticalHeaderTarget == "link"
                ? DOM.header.vertical.querySelectorAll("li.menu-item-has-children > a")
                : DOM.header.vertical.querySelectorAll(".dropdown-toggle");

        new PerfectScrollbar(DOM.header.vertical, {
            wheelSpeed: 0.5,
        });
    };

    #setupEventListeners = () => {
        this.#menuItemsPlusIcon.forEach((menuItemPlusIcon) => {
            menuItemPlusIcon.addEventListener("click", this.#onMenuItemPlusIconClick);
            menuItemPlusIcon.addEventListener("tap", this.#onMenuItemPlusIconClick);
        });

        DOM.menu.vertical.toggleMenuBtn.addEventListener("click", this.#onToggleMenuBtnClick);

        document.addEventListener("keydown", this.#onDocumentKeydown);
    };

    #onMenuItemPlusIconClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const plusIcon = event.currentTarget;
        const menuItem =
            options.verticalHeaderTarget == "link" ? plusIcon.parentNode : plusIcon.parentNode.parentNode;

        if (!menuItem.classList.contains("active")) {
            DOM.header.vertical
                .querySelectorAll("li.menu-item-has-children")
                .forEach((menuItemHasChildren) => {
                    if (
                        menuItem != menuItemHasChildren &&
                        menuItem
                            .oceanParents(".menu-item-has-children")
                            .findIndex((parentMenuItem) => parentMenuItem == menuItemHasChildren)
                    ) {
                        menuItemHasChildren.classList.remove("active");
                        slideUp(menuItemHasChildren.lastElementChild, 200);
                    }
                });

            menuItem.classList.add("active");
            slideDown(menuItem.lastElementChild, 200);
        } else {
            menuItem.classList.remove("active");
            slideUp(menuItem.lastElementChild, 200);
        }
    };

    #onToggleMenuBtnClick = (event) => {
        event.preventDefault();

        if (!DOM.global.body.classList.contains("vh-opened")) {
            DOM.global.body.classList.add("vh-opened");
            DOM.menu.vertical.toggleMenuBtn.querySelector(".hamburger").classList.add("is-active");
        } else {
            DOM.global.body.classList.remove("vh-opened");
            DOM.menu.vertical.toggleMenuBtn.querySelector(".hamburger").classList.remove("is-active");
        }

        DOM.menu.vertical.toggleMenuBtn.focus();
    };

    /**
     * Trap keyboard navigation
     */
    #onDocumentKeydown = (event) => {
        if (!DOM.global.body.classList.contains("vh-opened")) {
            return;
        }

        const tabKey = event.keyCode === 9;
        const shiftKey = event.shiftKey;
        const escKey = event.keyCode === 27;
        const enterKey = event.keyCode === 13;

        const navElements = DOM.header.vertical.querySelectorAll("a, span.dropdown-toggle, input, button");
        const navFirstElement = navElements[0];
        const navLastElement = navElements[navElements.length - 1];

        navLastElement.style.outline = "";

        if (escKey) {
            event.preventDefault();
            this.#onToggleMenuBtnClick(event);
        }

        if (enterKey && document.activeElement.classList.contains("dropdown-toggle")) {
            event.preventDefault();
            document.activeElement.click();
        }

        if (!shiftKey && tabKey && navLastElement === document.activeElement) {
            event.preventDefault();
            navFirstElement.focus();
        }

        // If there are no elements in the menu, don't move the focus
        if (tabKey && navFirstElement === navLastElement) {
            event.preventDefault();
        }
    };
}

export default VerticalHeader;
