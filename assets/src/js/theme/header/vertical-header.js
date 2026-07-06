import { options } from "../../constants";
import { slideDown, slideUp } from "../../lib/utils";
import initAccessibleSubmenus from "../menu/accessible-submenus";

class VerticalHeader {
  #elements = {
    header: document.querySelector(
      "#site-header.vertical-header #site-header-inner"
    ),
  };
  #menuItemsPlusIcon;
  #disabledHeaderFocusables = new Map();
  #resizeAnimationFrame = null;
  #focusableSelector = [
    "a[href]",
    "area[href]",
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "iframe",
    "object",
    "embed",
    "[contenteditable]",
    "[tabindex]:not([tabindex='-1'])",
  ].join(",");

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
      toggleMenuBtn: document.querySelector(".vertical-toggle"),
      body: document.body,
    };
  };

  #start = () => {
    const hasPhpSubmenuControls =
      !!this.#elements.header?.querySelector(
        "[data-oceanwp-submenu-toggle]"
      );

    if (hasPhpSubmenuControls) {
      initAccessibleSubmenus({
        root: this.#elements.header,
        itemSelector: "li.menu-item-has-children:not(.btn)",
        openClass: "active",
        toggleSelector: "[data-oceanwp-submenu-toggle]",
        duration: 250,
      });

      this.#menuItemsPlusIcon = [];
    } else {
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
    }

    new PerfectScrollbar(this.#elements.header, {
      wheelSpeed: 0.5,
      suppressScrollX: false,
      suppressScrollY: false,
    });

    this.#syncCollapsedState();
  };

  #setupEventListeners = () => {
    if (!options.semanticDesktopHeader) {
      this.#menuItemsPlusIcon.forEach((menuItemPlusIcon) => {
        menuItemPlusIcon.addEventListener("click", this.#onMenuItemPlusIconClick);
        menuItemPlusIcon.addEventListener("tap", this.#onMenuItemPlusIconClick);
      });
    }

    if (this.#elements.toggleMenuBtn) {
      this.#elements.toggleMenuBtn.addEventListener(
        "click",
        this.#onToggleMenuBtnClick
      );

      this.#elements.toggleMenuBtn.addEventListener(
        "keydown",
        this.#onToggleMenuBtnKeydown
      );
    }

    document.addEventListener("keydown", this.#onDocumentKeydown);
    window.addEventListener("resize", this.#onWindowResize);
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

  #onToggleMenuBtnKeydown = (event) => {
    if (
      !this.#isActivationKey(event) ||
      event.repeat ||
      event.currentTarget.tagName === "BUTTON"
    ) {
      return;
    }

    event.preventDefault();
    event.currentTarget.click();
  };

  #onToggleMenuBtnClick = (event) => {
    event.preventDefault();

    const isOpening =
      !this.#elements.body.classList.contains("vh-opened");

    if (isOpening) {
      this.#elements.body.classList.add("vh-opened");

      this.#elements.toggleMenuBtn
        ?.querySelector(".hamburger")
        ?.classList.add("is-active");

      this.#elements.toggleMenuBtn?.setAttribute(
        "aria-expanded",
        "true"
      );

      this.#syncCollapsedState();

      setTimeout(() => {
        const firstFocusable = this.#getTrapFocusableElements()[0];

        firstFocusable?.focus();
      }, 50);
    } else {
      this.#elements.body.classList.remove("vh-opened");

      this.#elements.toggleMenuBtn
        ?.querySelector(".hamburger")
        ?.classList.remove("is-active");

      this.#elements.toggleMenuBtn?.setAttribute(
        "aria-expanded",
        "false"
      );

      this.#syncCollapsedState();
      this.#elements.toggleMenuBtn?.focus();
    }
  };

  /**
   * Trap keyboard navigation while the vertical header drawer is open.
   */
  #onDocumentKeydown = (event) => {
    const tabKey =
      event.key === "Tab" || event.keyCode === 9;

    const shiftKey = event.shiftKey;

    const escKey =
      event.key === "Escape" || event.keyCode === 27;

    const activationKey = this.#isActivationKey(event);

    const toggleButton = this.#elements.toggleMenuBtn;

    if (!toggleButton) {
      return;
    }

    if (
      activationKey &&
      !event.repeat &&
      document.activeElement?.classList.contains(
        "dropdown-toggle"
      ) &&
      document.activeElement?.tagName !== "BUTTON"
    ) {
      event.preventDefault();
      document.activeElement.click();
      return;
    }

    if (
      !this.#elements.body.classList.contains("vh-opened")
    ) {
      return;
    }

    if (escKey) {
      event.preventDefault();
      this.#onToggleMenuBtnClick(event);
      return;
    }

    if (!tabKey) {
      return;
    }

    const focusableInside = this.#getTrapFocusableElements();

    if (!focusableInside.length) {
      event.preventDefault();
      toggleButton.focus();
      return;
    }

    const firstMenuElement = focusableInside[0];
    const lastMenuElement =
      focusableInside[focusableInside.length - 1];

    // Shift+Tab from toggle button -> last menu/header item.
    if (
      shiftKey &&
      document.activeElement === toggleButton
    ) {
      event.preventDefault();
      lastMenuElement.focus();
      return;
    }

    // Tab from toggle button -> first menu/header item.
    if (
      !shiftKey &&
      document.activeElement === toggleButton
    ) {
      event.preventDefault();
      firstMenuElement.focus();
      return;
    }

    // Tab from last menu/header item -> toggle button.
    if (
      !shiftKey &&
      document.activeElement === lastMenuElement
    ) {
      event.preventDefault();
      toggleButton.focus();
      return;
    }

    // Shift+Tab from first menu/header item -> toggle button.
    if (
      shiftKey &&
      document.activeElement === firstMenuElement
    ) {
      event.preventDefault();
      toggleButton.focus();
    }
  };

  #onWindowResize = () => {
    if (this.#resizeAnimationFrame) {
      window.cancelAnimationFrame(this.#resizeAnimationFrame);
    }

    this.#resizeAnimationFrame = window.requestAnimationFrame(() => {
      this.#syncCollapsedState();
    });
  };

  #syncCollapsedState = () => {
    if (!this.#elements.toggleMenuBtn) {
      return;
    }

    const isOpen = this.#elements.body.classList.contains("vh-opened");
    const isCollapsed = this.#isHeaderCollapsed();

    this.#elements.toggleMenuBtn.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    if (isCollapsed) {
      this.#disableHeaderFocusables();
      return;
    }

    this.#restoreHeaderFocusables();
  };

  #isHeaderCollapsed = () => {
    return this.#isToggleVisible() &&
      !this.#elements.body.classList.contains("vh-opened");
  };

  #disableHeaderFocusables = () => {
    const toggleButton = this.#elements.toggleMenuBtn;

    this.#getManagedFocusableElements().forEach((element) => {
      if (element === toggleButton || toggleButton?.contains(element)) {
        return;
      }

      if (!this.#disabledHeaderFocusables.has(element)) {
        this.#disabledHeaderFocusables.set(element, {
          tabindex: element.getAttribute("tabindex"),
          ariaHidden: element.getAttribute("aria-hidden"),
        });
      }

      if (document.activeElement === element) {
        toggleButton?.focus();
      }

      element.setAttribute("tabindex", "-1");
      element.setAttribute("aria-hidden", "true");
    });
  };

  #restoreHeaderFocusables = () => {
    this.#disabledHeaderFocusables.forEach((attributes, element) => {
      if (attributes.tabindex === null) {
        element.removeAttribute("tabindex");
      } else {
        element.setAttribute("tabindex", attributes.tabindex);
      }

      if (attributes.ariaHidden === null) {
        element.removeAttribute("aria-hidden");
      } else {
        element.setAttribute("aria-hidden", attributes.ariaHidden);
      }
    });

    this.#disabledHeaderFocusables.clear();
  };

  #getManagedFocusableElements = () => {
    return Array.from(
      this.#elements.header.querySelectorAll(this.#focusableSelector)
    );
  };

  #getTrapFocusableElements = () => {
    const toggleButton = this.#elements.toggleMenuBtn;

    return this.#getManagedFocusableElements().filter((element) => {
      if (element === toggleButton || toggleButton?.contains(element)) {
        return false;
      }

      return this.#isElementVisible(element);
    });
  };

  #isToggleVisible = () => {
    const toggleButton = this.#elements.toggleMenuBtn;

    if (!toggleButton) {
      return false;
    }

    const style = window.getComputedStyle(toggleButton);

    return style.display !== "none" &&
      style.visibility !== "hidden" &&
      !!(
        toggleButton.offsetWidth ||
        toggleButton.offsetHeight ||
        toggleButton.getClientRects().length
      );
  };

  #isElementVisible = (element) => {
    const style = window.getComputedStyle(element);

    return style.display !== "none" &&
      style.visibility !== "hidden" &&
      !!(
        element.offsetWidth ||
        element.offsetHeight ||
        element.getClientRects().length
      );
  };

  #isActivationKey = (event) => {
    return (
      event.key === "Enter" ||
      event.key === " " ||
      event.key === "Spacebar" ||
      event.keyCode === 13 ||
      event.keyCode === 32
    );
  };
}

("use script");
window.oceanwp = window.oceanwp || {};
oceanwp.verticalHeader = new VerticalHeader();
