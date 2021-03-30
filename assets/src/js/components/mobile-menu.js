import { DOM, options } from "../constants";
import { slideUp, slideDown, slideToggle, fadeIn, fadeOut } from "../lib/utils";

export default class MobileMenu {
    #isMenuOpen;
    #menuItemsToggleIcon;

    constructor() {
        this.#start();

        if (DOM.body.classList.contains("dropdown-mobile")) {
            this.#dropdownMenuStart();
            this.#dropdownMenuSetupEventListeners();
        }

        if (DOM.body.classList.contains("fullscreen-mobile")) {
            this.#fullScreenMenuStart();
            this.#fullScreenMenuSetupEventListeners();
        }
    }

    #start = () => {};

    #dropdownMenuStart = () => {
        this.#isMenuOpen = false;

        DOM.mobileMenu.menuItemsHasChildren.forEach((menuItem) => {
            let span = document.createElement("span");
            span.className = "dropdown-toggle";

            menuItem.getElementsByTagName("a")[0].appendChild(span);
        });

        this.#menuItemsToggleIcon =
            options.sidrDropdownTarget == "link"
                ? document.querySelectorAll("#mobile-dropdown li.menu-item-has-children > a")
                : document.querySelectorAll(".dropdown-toggle");
    };

    #dropdownMenuSetupEventListeners = () => {
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

    #fullScreenMenuStart = () => {
        DOM.mobileMenu.fullScreen.querySelectorAll(".menu-item-has-children > a").forEach((menuItemLink) => {
            menuItemLink.insertAdjacentHTML("beforeend", '<span class="dropdown-toggle" tabindex=0></span>');
        });
    };

    #fullScreenMenuSetupEventListeners = () => {
        window.addEventListener("resize", this.#onFullScreenWindowResize);

        DOM.mobileMenu.icon.addEventListener("click", this.#onFullScreenMenuItemClick);

        document
            .querySelectorAll(
                '#mobile-fullscreen nav ul > li.menu-item-has-children > a > span.dropdown-toggle, #mobile-fullscreen nav ul > li.menu-item-has-children > a[href="#"]'
            )
            .forEach((menuItemLink) => {
                menuItemLink.addEventListener("click", this.#onFullScreenDropownToggleIcon);
                menuItemLink.addEventListener("tap", this.#onFullScreenDropownToggleIcon);
            });

        document
            .querySelectorAll(
                '#mobile-fullscreen .fs-dropdown-menu li a[href*="#"]:not([href="#"]), #mobile-fullscreen #mobile-nav li a[href*="#"]:not([href="#"]), #mobile-fullscreen a.close'
            )
            .forEach((menuItemLink) => {
                menuItemLink.addEventListener("click", this.#onFullScreenCloseIconClick);
            });

        document.addEventListener("keydown", this.#onDocumentKeydown);
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

    #onFullScreenMenuItemClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        DOM.mobileMenu.icon.classList.add("exit");
        DOM.mobileMenu.fullScreen.classList.add("active");
        DOM.mobileMenu.hamburger?.classList.add("is-active");

        fadeIn(DOM.mobileMenu.fullScreen);

        const htmlWidthBeforeOverflowHidden = DOM.html.innerWidth;
        DOM.html.style.overflow = "hidden";
        const htmlWidthAfterOverflowHidden = DOM.html.innerWidth;
        DOM.html.style.marginRight = htmlWidthAfterOverflowHidden - htmlWidthBeforeOverflowHidden + "px";

        DOM.mobileMenu.fullScreen.querySelector("a.close").focus();
    };

    #onFullScreenCloseIconClick = (event) => {
        event.preventDefault();

        this.#closeFullScreenMenu();
    };

    #closeFullScreenMenu = () => {
        DOM.mobileMenu.icon.classList.remove("exit");
        DOM.mobileMenu.fullScreen.classList.remove("active");

        fadeOut(DOM.mobileMenu.fullScreen);

        DOM.html.style.overflow = "";
        DOM.html.style.marginRight = "";

        document.querySelectorAll("#mobile-fullscreen nav ul > li.dropdown").forEach((menuItem) => {
            menuItem.classList.remove("open-sub");
        });

        document.querySelectorAll("#mobile-fullscreen nav ul.sub-menu").forEach((subMenu) => {
            slideUp(subMenu, 200);
        });

        DOM.mobileMenu.hamburger?.classList.remove("is-active");
    };

    #onFullScreenDropownToggleIcon = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const menuItemLink = event.currentTarget;
        const menuItem = menuItemLink.closest("li.menu-item-has-children");
        const subMenu = menuItem.querySelector("ul.sub-menu");

        if (!(window.getComputedStyle(subMenu).display === "none")) {
            menuItem.classList.remove("open-sub");
            slideUp(subMenu, 200);
        } else {
            menuItem.classList.add("open-sub");
            slideDown(subMenu, 200);
        }
    };

    #onFullScreenWindowResize = (event) => {
        if (window.innerWidth >= 960) {
            this.#closeFullScreenMenu();
        }
    };

    /**
     * Trap keyboard navigation in the menu modal.
     */
    #onDocumentKeydown = (event) => {
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
            this.#closeFullScreenMenu();
        }

        if (enterKey && document.activeElement.classList.contains("dropdown-toggle")) {
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
