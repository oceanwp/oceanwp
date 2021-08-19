import { DOM } from "../../../constants";
import { fadeIn, fadeOut, slideDown, slideUp } from "../../../lib/utils";

class FullScreenMenu {
    constructor() {
        if (!DOM.menu.fullScreen.toggleMenuBtn) {
            return;
        }

        this.#start();
        this.#setupEventListeners();
    }

    #start = () => {
        DOM.menu.fullScreen.menu.querySelectorAll(".nav-arrow").forEach((plusBtn) => {
            plusBtn.setAttribute("tabindex", 0);
        });
    };

    #setupEventListeners = () => {
        DOM.menu.fullScreen.toggleMenuBtn.addEventListener("click", this.#onToggleMenuBtnClick);

        document
            .querySelectorAll(
                '#full-screen-menu #site-navigation ul > li.dropdown > a > .text-wrap > span.nav-arrow, #full-screen-menu #site-navigation ul > li.dropdown > a[href="#"]'
            )
            ?.forEach((menuItemLink) => {
                menuItemLink.addEventListener("click", this.#onMenuLinkClick);
                menuItemLink.addEventListener("tap", this.#onMenuLinkClick);
            });

        document
            .querySelectorAll('#full-screen-menu #site-navigation a.menu-link[href*="#"]:not([href="#"])')
            .forEach((menuItemLink) => {
                menuItemLink.addEventListener("click", this.#onMenuHashtagLinkClick);
            });

        document.addEventListener("keydown", this.#onDocumentKeydown);
    };

    #onToggleMenuBtnClick = (event) => {
        event.preventDefault();

        const toggleMenuBtn = event.currentTarget;

        if (!toggleMenuBtn.classList.contains("exit")) {
            this.#openMenu();
        } else {
            this.#closeMenu();
        }
    };

    #onMenuLinkClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const menuItemLink = event.currentTarget;
        const menuItem = menuItemLink.closest("li.dropdown");
        const subMenu = menuItem.querySelector("ul.sub-menu");

        if (!(window.getComputedStyle(subMenu).display === "none")) {
            menuItem.classList.remove("open-sub");
            slideUp(subMenu, 250);
        } else {
            menuItem.classList.add("open-sub");
            slideDown(subMenu, 250);
        }
    };

    #onMenuHashtagLinkClick = (event) => {
        this.#closeMenu();
    };

    #openMenu = () => {
        DOM.header.fullScreen.classList.add("nav-open");
        DOM.menu.fullScreen.toggleMenuBtn.classList.add("exit");
        DOM.menu.fullScreen.logo?.classList.add("opened");
        DOM.menu.fullScreen.menu.classList.add("active");

        fadeIn(DOM.menu.fullScreen.menu);

        const htmlWidthBeforeOverflowHidden = DOM.html.innerWidth;
        DOM.html.style.overflow = "hidden";
        const htmlWidthAfterOverflowHidden = DOM.html.innerWidth;
        DOM.html.style.marginRight = htmlWidthBeforeOverflowHidden - htmlWidthAfterOverflowHidden + "px";
    };

    #closeMenu = () => {
        DOM.header.fullScreen.classList.remove("nav-open");
        DOM.menu.fullScreen.toggleMenuBtn.classList.remove("exit");
        DOM.menu.fullScreen.logo?.classList.remove("opened");
        DOM.menu.fullScreen.menu.classList.remove("active");

        fadeOut(DOM.menu.fullScreen.menu);

        DOM.html.style.overflow = "";
        DOM.html.style.marginRight = "";

        document.querySelectorAll("#full-screen-menu #site-navigation ul > li.dropdown").forEach((menuItem) => {
            menuItem.classList.remove("open-sub");
        });

        document.querySelectorAll("#full-screen-menu #site-navigation ul.sub-menu").forEach((subMenu) => {
            slideUp(subMenu, 250);
        });
    };

    /**
     * Trap keyboard navigation in the menu modal.
     */
    #onDocumentKeydown = (event) => {
        if (!DOM.menu.fullScreen.menu?.classList.contains("active")) {
            return;
        }

        const tabKey = event.keyCode === 9;
        const shiftKey = event.shiftKey;
        const escKey = event.keyCode === 27;
        const enterKey = event.keyCode === 13;

        const closeIcon = DOM.menu.fullScreen.toggleMenuBtn;

        const navElements = DOM.menu.fullScreen.menu
            .querySelector("nav")
            .querySelectorAll("a, span.nav-arrow, input, button");

        const navFirstElement = navElements[0];
        const navLastElement = navElements[navElements.length - 1];

        closeIcon.style.outline = "";

        if (escKey) {
            event.preventDefault();
            this.#closeMenu();
        }

        if (enterKey && document.activeElement.classList.contains("nav-arrow")) {
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

export default FullScreenMenu;
