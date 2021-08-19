import delegate from "delegate";
import { DOM, options } from "../../../constants";
import { fadeIn, fadeOut, slideDown, slideUp } from "../../../lib/utils";

class SidebarMobileMenu {
    #isMenuOpen;
    #menuItemsPlusIcon;
    #sidebarToggleMenuBtn;

    constructor() {
        if (typeof options.sidrSource !== "undefined" && DOM.body.classList.contains("sidebar-mobile")) {
            this.#start();
            this.#setupEventListeners();
        }
    }

    #start = () => {
        this.#isMenuOpen = false;

        this.#startSidrPlugin();

        if (!document.querySelector(".sidr-class-dropdown-toggle")) {
            document.querySelectorAll(".sidr-class-menu-item-has-children > a").forEach((menuItemLink) => {
                menuItemLink.insertAdjacentHTML("beforeend", '<span class="sidr-class-dropdown-toggle" tabindex=0></span>');
            });
        }

        this.#menuItemsPlusIcon =
            options.sidrDropdownTarget == "link"
                ? document.querySelectorAll("li.sidr-class-menu-item-has-children > a")
                : document.querySelectorAll(".sidr-class-dropdown-toggle");
    };

    #startSidrPlugin = () => {
        sidr.new(".mobile-menu", {
            name: "sidr",
            source: options.sidrSource,
            side: options.sidrSide,
            displace: options.sidrDisplace,
            speed: 300,
            renaming: true,
            timing: "ease",
            bind: "click",
            onOpen() {
                document.querySelector("a.sidr-class-toggle-sidr-close").focus();

                DOM.mobileMenu.hamburgerBtn?.classList.add("is-active");

                DOM.header.site.insertAdjacentHTML("afterend", '<div class="oceanwp-sidr-overlay" tabindex=0></div>');

                const overlay = document.querySelector(".oceanwp-sidr-overlay");

                fadeIn(overlay);

                overlay.addEventListener("click", (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    sidr.close("sidr");
                });
            },
            onClose() {
                DOM.mobileMenu.hamburgerBtn?.classList.remove("is-active");

                document.querySelectorAll(".sidr-class-menu-item-has-children.active > ul").forEach((subMenuActive) => {
                    subMenuActive.style.display = "none";
                });

                document.querySelectorAll(".sidr-class-menu-item-has-children.active").forEach((menuItemActive) => {
                    menuItemActive.classList.remove("active");
                });

                const overlay = document.querySelector(".oceanwp-sidr-overlay");

                fadeOut(overlay);

                setTimeout(() => {
                    overlay.remove();
                });
            },
        });

        document.querySelectorAll('#sidr [class*="sidr-class-fa"]').forEach((icon) => {
            icon.className = icon.className.replace(/\bsidr-class-fa.*?\b/g, "fa");
        });

        document.querySelectorAll('#sidr [class*="sidr-class-icon"]').forEach((icon) => {
            icon.className = icon.className.replace(/\bsidr-class-icon-.*?\b/g, "icon-");
        });

        this.#sidebarToggleMenuBtn = document.querySelector("a.sidr-class-toggle-sidr-close");
    };

    #setupEventListeners = () => {
        DOM.mobileMenu.hamburgerBtn?.addEventListener("click", this.#onHamburgerBtnClick);
        this.#sidebarToggleMenuBtn?.addEventListener("click", this.#onSidebarCloseMenuBtnClick);

        this.#menuItemsPlusIcon?.forEach((menuItemPlusIcon) => {
            menuItemPlusIcon.addEventListener("click", this.#onMenuItemPlusIconClick);
            menuItemPlusIcon.addEventListener("touchend", this.#onMenuItemPlusIconClick);
        });

        delegate(
            document.body,
            '.sidr-class-dropdown-menu a[href*="#"]:not([href="#"]), .sidr-class-menu-item > a[href*="#"]:not([href="#"])',
            "click",
            this.#closeSidr
        );

        delegate(
            document.body,
            '.sidr-class-dropdown-menu a[href*="#"]:not([href="#"]), .sidr-class-menu-item > a[href*="#"]:not([href="#"])',
            "touchend",
            this.#closeSidr
        );

        document.querySelectorAll("li.sidr-class-nav-no-click > a")?.forEach((menuItemLink) => {
            menuItemLink.addEventListener("click", (event) => {
                event.preventDefault();
                event.stopPropagation();
            });
        });

        document.addEventListener("keydown", this.#onDocumentKeydown);
        window.addEventListener("resize", this.#onWindowResize);
    };

    #onHamburgerBtnClick = (event) => {
        this.#isMenuOpen = !this.#isMenuOpen;
        event.currentTarget.setAttribute("aria-expanded", this.#isMenuOpen);
    };

    #onSidebarCloseMenuBtnClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        this.#closeSidr();
        this.#sidebarToggleMenuBtn.classList.remove("opened");
    };

    #onMenuItemPlusIconClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const menuItemPlusIcon = event.currentTarget;
        const menuItem =
            options.sidrDropdownTarget == "link" ? menuItemPlusIcon.parentNode : menuItemPlusIcon.parentNode.parentNode;
        const subMenu = menuItem.lastElementChild;

        if (!menuItem?.classList.contains("active")) {
            menuItem.classList.add("active");
            slideDown(subMenu, 250);
        } else {
            menuItem.classList.remove("active");
            slideUp(subMenu, 250);

            menuItem.querySelectorAll(".sidr-class-menu-item-has-children.active")?.forEach((openMenuItem) => {
                openMenuItem.classList.remove("active");
                slideUp(openMenuItem.querySelector("ul"));
            });
        }
    };

    #onWindowResize = (event) => {
        if (window.innerWidth >= 960) {
            this.#closeSidr();
        }
    };

    /**
     * Trap keyboard navigation
     */
    #onDocumentKeydown = (event) => {
        if (!DOM.body.classList.contains("sidr-open")) {
            return;
        }

        event.stopPropagation();

        const tabKey = event.keyCode === 9;
        const shiftKey = event.shiftKey;
        const escKey = event.keyCode === 27;
        const enterKey = event.keyCode === 13;

        const closeIcon = this.#sidebarToggleMenuBtn;

        const navElements = document
            .querySelector("#sidr")
            .querySelectorAll("a, span.sidr-class-dropdown-toggle, input, button");

        const navFirstElement = navElements[0];
        const navLastElement = navElements[navElements.length - 1];

        closeIcon.style.outline = "";

        if (escKey) {
            event.preventDefault();
            this.#closeSidr();
        }

        if (enterKey && document.activeElement.classList.contains("sidr-class-dropdown-toggle")) {
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

    #closeSidr = () => {
        sidr.close("sidr");
        DOM.mobileMenu.hamburgerBtn?.classList.remove("is-active");
    };
}

export default SidebarMobileMenu;
