import delegate from "delegate";
import { options } from "../../constants";
import { slideUp, slideDown, slideToggle } from "../../lib/utils";
import initAccessibleSubmenus from "../menu/accessible-submenus";

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

  #getMobileDropdownTarget = () => {
    return options.mobileDropdownTarget || options.sidrDropdownTarget || "link";
  };

  #getToggleMenuButtonFromEvent = (event) => {
    return (
      event.delegateTarget ||
      event.target?.closest?.(".mobile-menu") ||
      event.currentTarget?.closest?.(".mobile-menu") ||
      this.#elements.toggleMenuBtn
    );
  };

  #start = () => {
    this.#isMenuOpen = false;

    const hasPhpSubmenuControls =
      !!this.#elements.navWrapper?.querySelector(
        "[data-oceanwp-submenu-toggle]"
      );

    if (hasPhpSubmenuControls) {
      initAccessibleSubmenus({
        root: this.#elements.navWrapper,
        openClass: "active",
        toggleSelector: "[data-oceanwp-submenu-toggle]",
        duration: 250,
      });

      this.#menuItemsToggleIcon = [];
      return;
    }

    this.#elements.parentMenuItems?.forEach((menuItem) => {
      let span = document.createElement("span");
      span.className = "dropdown-toggle";
      span.setAttribute("tabindex", 0);

      menuItem.getElementsByTagName("a")[0].appendChild(span);
    });

    this.#menuItemsToggleIcon =
      this.#getMobileDropdownTarget() === "link"
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

    delegate(
      document.body,
      ".mobile-menu",
      "keydown",
      this.#onToggleMenuButtonKeydown
    );

    this.#elements.navWrapper
      ?.querySelectorAll('li a[href*="#"]:not([href="#"]):not([data-oceanwp-submenu-toggle])')
      .forEach((menuItemLink) => {
        menuItemLink.addEventListener("click", this.#onAnchorLinkClick);
      });

    document.addEventListener("click", this.onMenuCloseClick);

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

  // New method to handle anchor link clicks
  #onAnchorLinkClick = (event) => {
    const href = event.currentTarget.getAttribute('href');
    const anchor = href.substring(href.lastIndexOf('#'));
    const targetElement = document.querySelector(anchor);

    if (targetElement) {
        event.stopPropagation();
        this.onMenuCloseClick();
        setTimeout(() => {
          const stickyHeader = document.querySelector('.oceanwp-sticky-header-holder .has-sticky-mobile');
          const headerHeight = stickyHeader ? stickyHeader.offsetHeight : 0;

          // If top bar has the sticky class, consider its height as well
          const topBarStickyWrapper = document.querySelector('.oceanwp-sticky-top-bar-holder');
          const topBarStickyHeight = topBarStickyWrapper ? topBarStickyWrapper.offsetHeight : 0;

          const offset = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - topBarStickyHeight;

          window.scrollTo({
              top: offset,
              behavior: 'smooth'
          });
      }, 50);
    }
  };

  #onToggleMenuButtonKeydown = (event) => {
    const toggleMenuBtn = this.#getToggleMenuButtonFromEvent(event);

    if (!toggleMenuBtn || event.repeat || !this.#isActivationKey(event)) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    toggleMenuBtn.click();
  };

  #onToggleMenuButtonClick = (event) => {
    const toggleMenuBtn = this.#getToggleMenuButtonFromEvent(event);

    if (!toggleMenuBtn) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    !!this.#elements.navWrapper && slideToggle(this.#elements.navWrapper, 400);
    toggleMenuBtn.classList.toggle("opened");
    this.#elements.hamburgerBtn?.classList.toggle("is-active");

    const isOpen = toggleMenuBtn.classList.contains("opened");

    toggleMenuBtn.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    this.#elements.hamburgerBtn?.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    toggleMenuBtn.focus();
  };

  onMenuCloseClick = (event) => {
    !!this.#elements.navWrapper && slideUp(this.#elements.navWrapper, 250);
    this.#elements.toggleMenuBtn?.classList.remove("opened");
    this.#elements.hamburgerBtn?.classList.remove("is-active");

    this.#elements.toggleMenuBtn?.setAttribute("aria-expanded", "false");
    this.#elements.hamburgerBtn?.setAttribute("aria-expanded", "false");

    this.#isMenuOpen = false;
  };

  #onWindowResize = (event) => {
    if (window.innerWidth >= 960) {
      this.onMenuCloseClick();
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
      this.#getMobileDropdownTarget() == "link"
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
    const activationKey = this.#isActivationKey(event);

    const closeIcon = this.#elements.toggleMenuBtn;

    const navElements = this.#elements.nav?.querySelectorAll(
      "a, button, [role='button'], input"
    );

    const navFirstElement = navElements[0];
    const navLastElement = navElements[navElements.length - 1];

    if (!!closeIcon) {
      closeIcon.style.outline = "";
    }

    if (escKey) {
      event.preventDefault();
      this.onMenuCloseClick();
      return;
    }

    const activeElement = document.activeElement;

    const isLegacyDropdownToggle =
      activeElement?.classList.contains("dropdown-toggle") ||
      (
        this.#getMobileDropdownTarget() === "link" &&
        activeElement?.matches?.(
          "#mobile-dropdown li.menu-item-has-children > a:not([data-oceanwp-submenu-toggle])"
        )
      );

    if (activationKey && isLegacyDropdownToggle) {
      event.preventDefault();
      event.stopPropagation();
      activeElement.click();
      return;
    }

    if (!shiftKey && tabKey && navLastElement === document.activeElement) {
      event.preventDefault();
      closeIcon.focus();
      return;
    }

    if (
      !shiftKey &&
      tabKey &&
      document.activeElement === closeIcon
    ) {
      event.preventDefault();
      navFirstElement.focus();
      return;
    }

    if (shiftKey && tabKey && navFirstElement === document.activeElement) {
      event.preventDefault();
      closeIcon.focus();
      return;
    }

    if (
      shiftKey &&
      tabKey &&
      document.activeElement === closeIcon
    ) {
      event.preventDefault();
      navLastElement.focus();
      return;
    }

    // If there are no elements in the menu, don't move the focus
    if (tabKey && navFirstElement === navLastElement) {
      event.preventDefault();
    }
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
oceanwp.dropDownMobileMenu = new DropDownMobileMenu();
