import delegate from "delegate";
import { options } from "../../constants";
import { slideUp, slideDown, slideToggle } from "../../lib/utils";

class DropDownMobileMenu {
  #elements = {
    body: document.body,
  };
  #isMenuOpen;
  #menuItemsToggleIcon;

  constructor() {
    if (!this.#elements.body.classList.contains("dropdown-mobile")) {
      return;
    }

    this.#setElements();
    this.#start();
    this.#setupEventListeners();
  }

  #setElements = () => {
    this.#elements = {
      ...this.#elements,
      parentMenuItems: document.querySelectorAll(
        "#mobile-dropdown .menu-item-has-children"
      ),
      navWrapper: document.querySelector("#mobile-dropdown"),
      hamburgerBtn: document.querySelector(".mobile-menu > .hamburger"),
      toggleMenuBtn: document.querySelector(".mobile-menu"),
      nav: document.querySelector("#mobile-dropdown > nav"),
    };
  };

  #start = () => {
    this.#isMenuOpen = false;

    this.#elements.parentMenuItems?.forEach((menuItem) => {
      let span = document.createElement("span");
      span.className = "dropdown-toggle";
      span.setAttribute("tabindex", 0);

      menuItem.getElementsByTagName("a")[0].appendChild(span);
    });

    this.#menuItemsToggleIcon =
      options.sidrDropdownTarget == "link"
        ? this.#elements.navWrapper?.querySelectorAll(
            "li.menu-item-has-children > a"
          )
        : this.#elements.navWrapper?.querySelectorAll(".dropdown-toggle");
  };

  #setupEventListeners = () => {
    delegate(
      document.body,
      ".mobile-menu",
      "click",
      this.#onToggleMenuButtonClick
    );

    this.#elements.navWrapper
      ?.querySelectorAll('li a[href*="#"]:not([href="#"])')
      .forEach((menuItemLink) => {
        menuItemLink.addEventListener("click", this.#onMenuCloseClick);
      });

    document.addEventListener("click", this.#onMenuCloseClick);

    this.#elements.navWrapper?.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    window.addEventListener("resize", this.#onWindowResize);

    this.#elements.hamburgerBtn?.addEventListener(
      "click",
      this.#onHamburgerClick
    );

    this.#menuItemsToggleIcon?.forEach((menuItemPlusIcon) => {
      menuItemPlusIcon.addEventListener("click", this.#onMenuItemPlusIconClick);
    });

    document.addEventListener("keydown", this.#onDocumentKeydown);
  };

  #onToggleMenuButtonClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    !!this.#elements.navWrapper && slideToggle(this.#elements.navWrapper, 400);
    this.#elements.toggleMenuBtn?.classList.toggle("opened");
    this.#elements.hamburgerBtn?.classList.toggle("is-active");
    this.#elements.toggleMenuBtn?.focus();
  };

  #onMenuCloseClick = (event) => {
    !!this.#elements.navWrapper && slideUp(this.#elements.navWrapper, 250);
    this.#elements.toggleMenuBtn?.classList.remove("opened");
    this.#elements.hamburgerBtn?.classList.remove("is-active");
  };

  #onWindowResize = (event) => {
    if (window.innerWidth >= 960) {
      this.#onMenuCloseClick();
    }
  };

  #onHamburgerClick = (event) => {
    this.#isMenuOpen = !this.#isMenuOpen;
    event.currentTarget.setAttribute("aria-expanded", this.#isMenuOpen);
  };

  #onMenuItemPlusIconClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const menuItemPlusIcon = event.currentTarget;
    const menuItem =
      options.sidrDropdownTarget == "link"
        ? menuItemPlusIcon.parentNode
        : menuItemPlusIcon.parentNode.parentNode;
    const subMenu = menuItem.lastElementChild;

    if (!menuItem?.classList.contains("active")) {
      menuItem.classList.add("active");
      slideDown(subMenu, 250);
    } else {
      menuItem.classList.remove("active");
      slideUp(subMenu, 250);

      menuItem
        .querySelectorAll(".menu-item-has-children.active")
        ?.forEach((openMenuItem) => {
          openMenuItem.classList.remove("active");
          slideUp(openMenuItem.querySelector("ul"));
        });
    }
  };

  /**
   * Trap keyboard navigation
   */
  #onDocumentKeydown = (event) => {
    if (!this.#elements.toggleMenuBtn?.classList.contains("opened")) {
      return;
    }

    const tabKey = event.keyCode === 9;
    const shiftKey = event.shiftKey;
    const escKey = event.keyCode === 27;
    const enterKey = event.keyCode === 13;

    const closeIcon = this.#elements.toggleMenuBtn;

    const navElements = this.#elements.nav?.querySelectorAll(
      "a, span.dropdown-toggle, input, button"
    );

    const navFirstElement = navElements[0];
    const navLastElement = navElements[navElements.length - 1];

    if (!!closeIcon) {
      closeIcon.style.outline = "";
    }

    if (escKey) {
      event.preventDefault();
      this.#onMenuCloseClick();
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
oceanwp.dropDownMobileMenu = new DropDownMobileMenu();
