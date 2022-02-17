import { fadeIn, fadeOut } from "../../lib/utils";

class Menu {
  #currentElem;

  constructor() {
    this.#setupEventListeners();
  }

  #setupEventListeners = () => {
    document
      .querySelectorAll("li.nav-no-click > a")
      .forEach((noClickMenuItem) => {
        noClickMenuItem.addEventListener("click", this.#onNoClickMenuItemClick);
      });

    document.querySelectorAll("ul.sf-menu").forEach((menu) => {
      const parentMenuItems = menu.querySelectorAll(".menu-item-has-children");
      parentMenuItems.forEach((parentMenuItem) => {
        parentMenuItem.addEventListener(
          "mouseover",
          this.#onParentMenuItemMouseover
        );
        parentMenuItem.addEventListener(
          "mouseout",
          this.#onParentMenuItemMouseout
        );
      });
    });
  };

  #onNoClickMenuItemClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  #onParentMenuItemMouseover = (event) => {
    if (this.#currentElem && this.#currentElem.contains(event.relatedTarget)) {
      return;
    }

    this.#currentElem = event.currentTarget;
    this.#onEnter(this.#currentElem);
  };

  #onParentMenuItemMouseout = (event) => {
    if (!this.#currentElem || this.#currentElem.contains(event.relatedTarget)) {
      return;
    }

    // we left the <a>. really.
    this.#onLeave(this.#currentElem);
    this.#currentElem = null;
  };

  #onEnter = (parentMenuItem) => {
    const subMenu = parentMenuItem.querySelector("ul.sub-menu");

    parentMenuItem.classList.add("sfHover");

    fadeIn(subMenu, {
      callback: () => {},
    });
  };

  #onLeave = (parentMenuItem) => {
    const subMenu = parentMenuItem.querySelector("ul.sub-menu");

    parentMenuItem.classList.remove("sfHover");
    subMenu.style.pointerEvents = "none";

    fadeOut(subMenu, {
      callback: () => {
        subMenu.style.pointerEvents = null;
        parentMenuItem.classList.contains("sfHover") &&
          this.#onEnter(parentMenuItem);
      },
    });
  };
}

export default Menu;
