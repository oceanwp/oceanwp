import { options } from "../../constants";
import { slideDown, slideUp } from "../../lib/utils";

class VerticalHeader {
  #elements = {
    header: document.querySelector(
      "#site-header.vertical-header #site-header-inner"
    ),
  };
  #menuItemsPlusIcon;

  constructor() {
    if (!this.#elements.header) {
      return;
    }

    this.#setElements();
    this.#start();
    this.#setupEventListeners();
  }

  #setElements = () => {
    this.#elements = {
      ...this.#elements,
      toggleMenuBtn: document.querySelector("a.vertical-toggle"),
      body: document.body,
    };
  };

  #start = () => {
    this.#elements.header
      .querySelectorAll("li.menu-item-has-children:not(.btn) > a")
      .forEach((menuLink) => {
        menuLink.insertAdjacentHTML(
          "beforeend",
          '<span class="dropdown-toggle" tabindex="0"></span>'
        );
      });

    this.#menuItemsPlusIcon =
      options.verticalHeaderTarget == "link"
        ? this.#elements.header.querySelectorAll(
            "li.menu-item-has-children > a"
          )
        : this.#elements.header.querySelectorAll(".dropdown-toggle");

    new PerfectScrollbar(this.#elements.header, {
      wheelSpeed: 0.5,
      suppressScrollX: false,
      suppressScrollY: false,
    });
  };

  #setupEventListeners = () => {
    this.#menuItemsPlusIcon.forEach((menuItemPlusIcon) => {
      menuItemPlusIcon.addEventListener("click", this.#onMenuItemPlusIconClick);
      menuItemPlusIcon.addEventListener("tap", this.#onMenuItemPlusIconClick);
    });

    this.#elements.toggleMenuBtn.addEventListener(
      "click",
      this.#onToggleMenuBtnClick
    );

    document.addEventListener("keydown", this.#onDocumentKeydown);
  };

  #onMenuItemPlusIconClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const menuItemPlusIcon = event.currentTarget;
    const menuItem =
      options.verticalHeaderTarget == "link"
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
          slideUp(openMenuItem.querySelector("ul"), 250);
        });
    }
  };

  #onToggleMenuBtnClick = (event) => {
    event.preventDefault();

    if (!this.#elements.body.classList.contains("vh-opened")) {
      this.#elements.body.classList.add("vh-opened");
      this.#elements.toggleMenuBtn
        .querySelector(".hamburger")
        .classList.add("is-active");
    } else {
      this.#elements.body.classList.remove("vh-opened");
      this.#elements.toggleMenuBtn
        .querySelector(".hamburger")
        .classList.remove("is-active");
    }

    this.#elements.toggleMenuBtn.focus();
  };

  /**
   * Trap keyboard navigation
   */
  #onDocumentKeydown = (event) => {
    const tabKey = event.keyCode === 9;
    const shiftKey = event.shiftKey;
    const escKey = event.keyCode === 27;
    const enterKey = event.keyCode === 13;

    const navElements = this.#elements.header?.querySelectorAll(
      "a, span.dropdown-toggle, input, button"
    );
    const navFirstElement = navElements ? navElements[0] : "";
    const navLastElement = navElements
      ? navElements[navElements.length - 1]
      : "";

    navLastElement.style.outline = "";

    if (this.#elements.body.classList.contains("vertical-header-style")) {
      if (!this.#elements.body.classList.contains("vh-closed")) {
        if (
          enterKey &&
          document.activeElement.classList.contains("dropdown-toggle")
        ) {
          document.activeElement.click();
        }
      }

      if (!this.#elements.body.classList.contains("vh-opened")) {
        return;
      }
    }

    if (escKey) {
      event.preventDefault();
      this.#onToggleMenuBtnClick(event);
    }

    if (
      enterKey &&
      document.activeElement.classList.contains("dropdown-toggle") &&
      this.#elements.body.classList.contains("vh-closed")
    ) {
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

("use script");
window.oceanwp = window.oceanwp || {};
oceanwp.verticalHeader = new VerticalHeader();
