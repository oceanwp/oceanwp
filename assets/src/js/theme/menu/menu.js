import { fadeInNav, fadeOutNav } from "../../lib/utils";

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
        parentMenuItem.addEventListener(
          "keydown",
          this.#onParentMenuItemKeyDown
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

  #onParentMenuItemKeyDown = (event) => {
    if (this.#currentElem && this.#currentElem.contains(event.relatedTarget)) {
      return;
    }

    const tabKey    = event.keyCode === 9,
          shiftKey  = event.shiftKey;

    if ( ! shiftKey && tabKey ) {
      this.#onParentMenuItemMouseover( event );
    }

    if ( this.#currentElem ) {
      const subMenu  = this.#currentElem.querySelectorAll("ul.sub-menu a"),
      firstEl  = subMenu[0],
      lastEl   = subMenu[ subMenu.length - 1 ],
      activeEl = document.activeElement;

      if ( ! shiftKey && tabKey && lastEl === activeEl ) {
        this.#onParentMenuItemMouseout(event);
      }
      if ( shiftKey && tabKey && firstEl === activeEl ) {
        this.#onParentMenuItemMouseout(event);
      }
    }
  };

  #onEnter = (parentMenuItem) => {
    const subMenu = parentMenuItem.querySelector("ul.sub-menu:not( ul.sub-menu.megamenu ul.sub-menu )");

    parentMenuItem.classList.add("sfHover");

    if ( subMenu ) {
      fadeInNav(subMenu, {
        callback: () => {},
      });
    }
  };

  #onLeave = (parentMenuItem) => {
    const subMenu = parentMenuItem.querySelector("ul.sub-menu:not( ul.sub-menu.megamenu ul.sub-menu )");

    parentMenuItem.classList.remove("sfHover");

    if ( subMenu ) {
      subMenu.style.pointerEvents = "none";

      fadeOutNav(subMenu, {
        callback: () => {
          subMenu.style.pointerEvents = null;
          parentMenuItem.classList.contains("sfHover") &&
            this.#onEnter(parentMenuItem);
        },
      });
    }
  };
}

export default Menu;
