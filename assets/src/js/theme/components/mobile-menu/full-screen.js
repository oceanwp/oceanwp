import delegate from "delegate";
import { DOM } from "../../../constants";
import {
    slideUp,
    slideDown,
    fadeIn,
    fadeOut,
    visible,
} from "../../../lib/utils";

class FullScreenMobileMenu {
    constructor() {
        if (!DOM.body.classList.contains("fullscreen-mobile")) {
            return;
        }

        this.#start();
        this.#setupEventListeners();
    }

    #start = () => {
        DOM.mobileMenu.fullScreen
            ?.querySelectorAll(".menu-item-has-children > a")
            ?.forEach(menuItemLink => {
                menuItemLink.insertAdjacentHTML(
                    "beforeend",
                    '<span class="dropdown-toggle" tabindex=0></span>'
                );
            });
    };

    #setupEventListeners = () => {
        window.addEventListener("resize", this.#onWindowResize);

        delegate(
            document.body,
            ".mobile-menu",
            "click",
            this.#onMenuButtonClick
        );

        document
            .querySelectorAll(
                '#mobile-fullscreen nav ul > li.menu-item-has-children > a > span.dropdown-toggle, #mobile-fullscreen nav ul > li.menu-item-has-children > a[href="#"]'
            )
            .forEach(menuItemLink => {
                menuItemLink.addEventListener(
                    "click",
                    this.#onDropownToggleIcon
                );
                menuItemLink.addEventListener("tap", this.#onDropownToggleIcon);
            });

        document
            .querySelectorAll(
                '#mobile-fullscreen .fs-dropdown-menu li a[href*="#"]:not([href="#"]), #mobile-fullscreen #mobile-nav li a[href*="#"]:not([href="#"]), #mobile-fullscreen a.close'
            )
            .forEach(menuItemLink => {
                menuItemLink.addEventListener("click", this.#onCloseIconClick);
            });

        document.addEventListener("keydown", this.#onDocumentKeydown);
    };

    #onMenuButtonClick = event => {
        event.preventDefault();
        event.stopPropagation();

        DOM.mobileMenu.toggleMenuBtn.classList.add("exit");
        DOM.mobileMenu.fullScreen.classList.add("active");
        DOM.mobileMenu.hamburgerBtn?.classList.add("is-active");

        fadeIn(DOM.mobileMenu.fullScreen);

        const htmlWidthBeforeOverflowHidden = DOM.html.innerWidth;
        DOM.html.style.overflow = "hidden";
        const htmlWidthAfterOverflowHidden = DOM.html.innerWidth;
        DOM.html.style.marginRight =
            htmlWidthAfterOverflowHidden - htmlWidthBeforeOverflowHidden + "px";

        DOM.mobileMenu.fullScreen.querySelector("a.close").focus();
    };

    #onCloseIconClick = event => {
        if (event.currentTarget.getAttribute("href").substring(0, 1) === "#") {
            event.preventDefault();
        }

        this.#closeMenu();
    };

    #closeMenu = () => {
        if (visible(DOM.mobileMenu.fullScreen)) {
            DOM.mobileMenu.toggleMenuBtn.classList.remove("exit");
            DOM.mobileMenu.fullScreen.classList.remove("active");

            fadeOut(DOM.mobileMenu.fullScreen);

            DOM.html.style.overflow = "";
            DOM.html.style.marginRight = "";

            document
                .querySelectorAll("#mobile-fullscreen nav ul > li.dropdown")
                .forEach(menuItem => {
                    menuItem.classList.remove("open-sub");
                });

            document
                .querySelectorAll("#mobile-fullscreen nav ul.sub-menu")
                .forEach(subMenu => {
                    slideUp(subMenu, 250);
                });

            DOM.mobileMenu.hamburgerBtn?.classList.remove("is-active");
        }
    };

    #onWindowResize = event => {
        if (window.innerWidth >= 960) {
            this.#closeMenu();
        }
    };

    #onDropownToggleIcon = event => {
        event.preventDefault();
        event.stopPropagation();

        const menuItemLink = event.currentTarget;
        const menuItem = menuItemLink.closest("li.menu-item-has-children");
        const subMenu = menuItem.querySelector("ul.sub-menu");

        if (!(window.getComputedStyle(subMenu).display === "none")) {
            menuItem.classList.remove("open-sub");
            slideUp(subMenu, 250);
        } else {
            menuItem.classList.add("open-sub");
            slideDown(subMenu, 250);
        }
    };

    /**
     * Trap keyboard navigation in the menu modal.
     */
    #onDocumentKeydown = event => {
        if (!DOM.mobileMenu.fullScreen?.classList.contains("active")) {
            return;
        }

        const tabKey = event.keyCode === 9;
        const shiftKey = event.shiftKey;
        const escKey = event.keyCode === 27;
        const enterKey = event.keyCode === 13;

        const closeIcon = DOM.mobileMenu.fullScreen.querySelector("a.close");

        const navElements = DOM.mobileMenu.fullScreen
            .querySelector("nav")
            .querySelectorAll("a, span.dropdown-toggle, input, button");

        const navFirstElement = navElements[0];
        const navLastElement = navElements[navElements.length - 1];

        closeIcon.style.outline = "";

        if (escKey) {
            event.preventDefault();
            this.#closeMenu();
        }

        if (
            enterKey &&
            document.activeElement.classList.contains("dropdown-toggle")
        ) {
            event.preventDefault();
            document.activeElement.click();
        }

        if (!shiftKey && tabKey && navLastElement === document.activeElement) {
            event.preventDefault();
            closeIcon.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
            closeIcon.focus();
        }

        if (shiftKey && tabKey && navFirstElement === document.activeElement) {
            event.preventDefault();
            closeIcon.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
            closeIcon.focus();
        }

        // If there are no elements in the menu, don't move the focus
        if (tabKey && navFirstElement === navLastElement) {
            event.preventDefault();
        }
    };
}

export default FullScreenMobileMenu;
