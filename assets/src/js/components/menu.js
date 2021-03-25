import { DOM } from "../constants";
import { fadeIn, fadeOut, slideDown, slideUp } from "../lib/utils";

export default class Menu {
    constructor() {
        this.#start();
        this.#setupEventListeners();
    }

    #start = () => {};

    #setupEventListeners = () => {
        document.querySelectorAll("li.nav-no-click > a").forEach((noClickMenuItem) => {
            noClickMenuItem.addEventListener("click", this.#onNoClickMenuItemClick);
        });

        if (!!DOM.fullScreenMenuBar) {
            DOM.fullScreenMenuBar.addEventListener("click", this.#onFullScreenMenuBarClick);

            document
                .querySelectorAll(
                    '#full-screen-menu #site-navigation ul > li.dropdown > a > .text-wrap > span.nav-arrow, #full-screen-menu #site-navigation ul > li.dropdown > a[href="#"]'
                )
                .forEach((menuItemLink) => {
                    menuItemLink.addEventListener("click", this.#onFullScreenMenuItemLinkClick);
                    menuItemLink.addEventListener("tap", this.#onFullScreenMenuItemLinkClick);
                });

            document
                .querySelectorAll('#full-screen-menu #site-navigation a.menu-link[href*="#"]:not([href="#"])')
                .forEach((menuItemLink) => {
                    menuItemLink.addEventListener("click", this.#onFullScreenMenuItemHashtagLinkClick);
                });
        }
    };

    #onNoClickMenuItemClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    #onFullScreenMenuBarClick = (event) => {
        event.preventDefault();

        const menuBar = event.currentTarget;

        if (!menuBar.classList.contains("exit")) {
            this.#openFullScreenMenu();
        } else {
            this.#closeFullScreenMenu();
        }
    };

    #onFullScreenMenuItemLinkClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const menuItemLink = event.currentTarget;
        const menuItem = menuItemLink.closest("li.dropdown");
        const subMenu = menuItem.querySelector("ul.sub-menu");

        if (!(window.getComputedStyle(subMenu).display === "none")) {
            menuItem.classList.remove("open-sub");
            slideUp(subMenu, 200);
        } else {
            menuItem.classList.add("open-sub");
            slideDown(subMenu, 200);
        }
    };

    #onFullScreenMenuItemHashtagLinkClick = (event) => {
        this.#closeFullScreenMenu();
    };

    #openFullScreenMenu = () => {
        DOM.fullScreenHeader.classList.add("nav-open");
        DOM.fullScreenMenuBar.classList.add("exit");
        DOM.fullScreenLogo?.classList.add("opened");
        DOM.fullScreenMenu.classList.add("active");

        fadeIn(DOM.fullScreenMenu);

        const htmlWidthBeforeOverflowHidden = DOM.html.innerWidth;
        DOM.html.style.overflow = "hidden";
        const htmlWidthAfterOverflowHidden = DOM.html.innerWidth;
        DOM.html.style.marginRight = htmlWidthAfterOverflowHidden - htmlWidthAfterOverflowHidden + "px";
    };

    #closeFullScreenMenu = () => {
        DOM.fullScreenHeader.classList.remove("nav-open");
        DOM.fullScreenMenuBar.classList.remove("exit");
        DOM.fullScreenLogo?.classList.remove("opened");
        DOM.fullScreenMenu.classList.remove("active");

        fadeOut(DOM.fullScreenMenu);

        DOM.html.style.overflow = "";
        DOM.html.style.marginRight = "";

        document
            .querySelectorAll("#full-screen-menu #site-navigation ul > li.dropdown")
            .forEach((menuItem) => {
                menuItem.classList.remove("open-sub");
            });

        document.querySelectorAll("#full-screen-menu #site-navigation ul.sub-menu").forEach((subMenu) => {
            slideUp(subMenu, 200);
        });
    };
}
