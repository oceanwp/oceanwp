import { DOM, options } from "../constants";
import { slideUp, slideDown, slideToggle, getParents } from "../lib/utils";

export default class MobileMenu {
    #isMenuOpen;
    #menuItemsToggleIcon;

    constructor() {
        if (DOM.body.classList.contains("dropdown-mobile")) {
            this.#start();
            this.#setupEventListeners();
        }
    }

    #start = () => {
        this.#isMenuOpen = false;

        DOM.mobileMenu.menuItemsHasChildren.forEach((item) => {
            let span = document.createElement("span");
            span.className = "dropdown-toggle";

            item.getElementsByTagName("a")[0].appendChild(span);
        });

        this.#menuItemsToggleIcon =
            options.sidrDropdownTarget == "link"
                ? document.querySelectorAll("#mobile-dropdown li.menu-item-has-children > a")
                : document.querySelectorAll(".dropdown-toggle");
    };

    #setupEventListeners = () => {
        DOM.mobileMenu.icon.addEventListener("click", this.#onMenuIconClick);

        document.addEventListener("click", this.#onMenuClose);

        DOM.mobileMenu.navWrapper
            .querySelectorAll('li a[href*="#"]:not([href="#"])')
            .forEach((menuItemLink) => {
                menuItemLink.addEventListener("click", this.#onMenuClose);
            });

        DOM.mobileMenu.navWrapper.addEventListener("click", (event) => {
            event.stopPropagation();
        });

        window.addEventListener("resize", this.#onWindowResize);

        DOM.mobileMenu.hamburger?.addEventListener("click", this.#onHamburgerClick);

        this.#menuItemsToggleIcon.forEach((menuItemToggleIcon) => {
            menuItemToggleIcon.addEventListener("click", this.#onMenuItemToggleIcon);
            menuItemToggleIcon.addEventListener("tap", this.#onMenuItemToggleIcon);
        });

        if (!!DOM.header && !!DOM.mobileMenu.nav) {
            document.addEventListener("keydown", this.#onDocumentKeydown);
        }
    };

    #onMenuIconClick = (event) => {
        event.stopPropagation();

        slideToggle(DOM.mobileMenu.navWrapper, 500);
        DOM.mobileMenu.icon.classList.toggle("opened");
        DOM.mobileMenu.hamburger?.classList.toggle("is-active");
    };

    #onMenuClose = (event) => {
        slideUp(DOM.mobileMenu.navWrapper, 200);
        DOM.mobileMenu.icon.classList.remove("opened");
        DOM.mobileMenu.hamburger?.classList.remove("is-active");
    };

    #onWindowResize = (event) => {
        if (window.innerWidth >= 960) {
            this.#onMenuClose();
        }
    };

    #onHamburgerClick = (event) => {
        this.#isMenuOpen = !this.#isMenuOpen;
        event.currentTarget.setAttribute("aria-expanded", this.#isMenuOpen);
    };

    #onMenuItemToggleIcon = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const menuItemToggleIcon = event.currentTarget;
        const menuItem =
            options.sidrDropdownTarget == "link"
                ? menuItemToggleIcon.parentNode
                : menuItemToggleIcon.parentNode.parentNode;

        if (!menuItem.classList.contains("active")) {
            DOM.mobileMenu.menuItemsHasChildren.forEach((menuItemHasChildren) => {
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

    #onDocumentKeydown = (event) => {
        const tabKey = event.keyCode === 9;
        const shiftKey = event.shiftKey;
        const mobileMenuCloseIcon = document.querySelector(".mobile-menu.opened");
        const mobileMenuElements = DOM.mobileMenu.nav.querySelectorAll("input, a, button");
        const mobileMenuFirstElement = mobileMenuElements[0];
        const mobileMenuLastElement = mobileMenuElements[mobileMenuElements.length - 1];

        if (!shiftKey && tabKey && mobileMenuLastElement === document.activeElement) {
            event.preventDefault();
            mobileMenuCloseIcon.focus();
        }

        if (shiftKey && tabKey && mobileMenuFirstElement === document.activeElement) {
            event.preventDefault();
            mobileMenuCloseIcon.focus();
        }

        if (shiftKey && tabKey && mobileMenuCloseIcon === document.activeElement) {
            event.preventDefault();
            mobileMenuLastElement.focus();
        }
    };
}
