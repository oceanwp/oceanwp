import delegate from "delegate";
import { slideUp, slideDown, fadeIn, fadeOut, visible } from "../../lib/utils";

class FullScreenMobileMenu {
  #elements = {
    body: document.body,
  };

  constructor() {
    if (!this.#elements.body.classList.contains("fullscreen-mobile")) {
      return;
    }

    this.#setElements();
    this.#start();
    this.#setupEventListeners();
  }

  #setElements = () => {
    this.#elements = {
      ...this.#elements,
      menu: document.querySelector("#mobile-fullscreen"),
      toggleMenuBtn: document.querySelector(".mobile-menu"),
      hamburgerBtn: document.querySelector(".mobile-menu > .hamburger"),
      html: document.querySelector("html"),
    };
  };

  #start = () => {
    this.#elements.menu
      ?.querySelectorAll(".menu-item-has-children > a")
      ?.forEach((menuItemLink) => {
        menuItemLink.insertAdjacentHTML(
          "beforeend",
          '<span class="dropdown-toggle" tabindex=0></span>'
        );
      });
  };

  #setupEventListeners = () => {
    window.addEventListener("resize", this.#onWindowResize);

    delegate(document.body, ".mobile-menu", "click", this.#onMenuButtonClick);

    document
      .querySelectorAll(
        '#mobile-fullscreen nav ul > li.menu-item-has-children > a > span.dropdown-toggle, #mobile-fullscreen nav ul > li.menu-item-has-children > a[href="#"]'
      )
      .forEach((menuItemLink) => {
        menuItemLink.addEventListener("click", this.#onDropownToggleIcon);
        menuItemLink.addEventListener("tap", this.#onDropownToggleIcon);
      });

    document
      .querySelectorAll(
        '#mobile-fullscreen .fs-dropdown-menu li a[href*="#"]:not([href="#"]), #mobile-fullscreen #mobile-nav li a[href*="#"]:not([href="#"]), #mobile-fullscreen a.close'
      )
      .forEach((menuItemLink) => {
        menuItemLink.addEventListener("click", this.#onCloseIconClick);
      });

    document.addEventListener("keydown", this.#onDocumentKeydown);
  };

  #onMenuButtonClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.#elements.toggleMenuBtn.classList.add("exit");
    this.#elements.menu.classList.add("active");
    this.#elements.hamburgerBtn?.classList.add("is-active");

    fadeIn(this.#elements.menu);

    const htmlWidthBeforeOverflowHidden = this.#elements.html.innerWidth;
    this.#elements.html.style.overflow = "hidden";
    const htmlWidthAfterOverflowHidden = this.#elements.html.innerWidth;
    this.#elements.html.style.marginRight =
      htmlWidthAfterOverflowHidden - htmlWidthBeforeOverflowHidden + "px";

    this.#elements.menu.querySelector("a.close").focus();
  };

  #onCloseIconClick = (event) => {
    if (event.currentTarget.getAttribute("href").substring(0, 1) === "#") {
      event.preventDefault();
    }

    this.#closeMenu();
  };

  #closeMenu = () => {
    if (visible(this.#elements.menu)) {
      this.#elements.toggleMenuBtn.classList.remove("exit");
      this.#elements.menu.classList.remove("active");

      fadeOut(this.#elements.menu);

      this.#elements.html.style.overflow = "";
      this.#elements.html.style.marginRight = "";

      document
        .querySelectorAll("#mobile-fullscreen nav ul > li.dropdown")
        .forEach((menuItem) => {
          menuItem.classList.remove("open-sub");
        });

      document
        .querySelectorAll("#mobile-fullscreen nav ul.sub-menu")
        .forEach((subMenu) => {
          slideUp(subMenu, 250);
        });

      this.#elements.hamburgerBtn?.classList.remove("is-active");
    }
  };

  #onWindowResize = (event) => {
    if (window.innerWidth >= 960) {
      this.#closeMenu();
    }
  };

  #onDropownToggleIcon = (event) => {
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
  #onDocumentKeydown = (event) => {
    if (!this.#elements.menu?.classList.contains("active")) {
      return;
    }

    const tabKey = event.keyCode === 9;
    const shiftKey = event.shiftKey;
    const escKey = event.keyCode === 27;
    const enterKey = event.keyCode === 13;

    const closeIcon = this.#elements.menu.querySelector("a.close");

    const navElements = this.#elements.menu
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

("use script");
window.oceanwp = window.oceanwp || {};
oceanwp.fullScreenMobileMenu = new FullScreenMobileMenu();
