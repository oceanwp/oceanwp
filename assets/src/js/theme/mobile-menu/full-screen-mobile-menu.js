import delegate from "delegate";
import { slideUp, slideDown, fadeIn, fadeOut, visible } from "../../lib/utils";
import { options } from "../../constants";
import initAccessibleSubmenus from "../menu/accessible-submenus";


class FullScreenMobileMenu {
  #elements = {
    body: document.body,
  };
  #activeTrigger = null;

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

    const hasPhpSubmenuControls =
      !!this.#elements.menu?.querySelector(
        "[data-oceanwp-submenu-toggle]"
      );

    if (hasPhpSubmenuControls) {
      initAccessibleSubmenus({
        root: this.#elements.menu,
        openClass: "open-sub",
        toggleSelector: "[data-oceanwp-submenu-toggle]",
        duration: 250,
      });

      return;
    }

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
    delegate(document.body, ".mobile-menu", "keydown", this.#onMenuButtonKeydown);

    document
      .querySelectorAll(
        '#mobile-fullscreen ul > li:not(.menu-item-has-children) > a[href^="#"]:not([href="#"]):not([data-oceanwp-submenu-toggle]), #mobile-fullscreen ul > li:not(.menu-item-has-children) > a[href*="/#"]:not([href="#"]):not([data-oceanwp-submenu-toggle])')
      .forEach((anchorLink) => {
        anchorLink.addEventListener("click", this.#handleAnchorLinks);
      });

    if (!options.semanticMobileHeader) {
      document
        .querySelectorAll(
          '#mobile-fullscreen nav ul > li.menu-item-has-children > a:not([data-oceanwp-submenu-toggle]), #mobile-fullscreen nav ul > li.menu-item-has-children > a > span.dropdown-toggle'
        )
        .forEach((menuItemLink) => {
          menuItemLink.addEventListener("click", this.#onDropownToggleIcon);
          menuItemLink.addEventListener("tap", this.#onDropownToggleIcon);
        });
    }

    document
      .querySelectorAll(
        '#mobile-fullscreen .fs-dropdown-menu li a[href*="#"]:not([href="#"]):not([data-oceanwp-submenu-toggle]), #mobile-fullscreen #mobile-nav li a[href*="#"]:not([href="#"]):not([data-oceanwp-submenu-toggle]), #mobile-fullscreen .close'
      )
      .forEach((menuItemLink) => {
        menuItemLink.addEventListener("click", this.#onCloseIconClick);
      });

    document.addEventListener("keydown", this.#onDocumentKeydown);
  };


  #handleAnchorLinks = (event) => {
    const href = event.currentTarget.getAttribute('href');
    const anchor = href.substring(href.lastIndexOf('#'));
    const targetElement = document.querySelector(anchor);

    if (targetElement) {
        event.stopPropagation();
        this.closeMainMenu();
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



  #onMenuButtonKeydown = (event) => {
    const toggleMenuBtn = this.#getToggleMenuButtonFromEvent(event);

    if (!toggleMenuBtn || event.repeat || !this.#isActivationKey(event)) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    toggleMenuBtn.click();
  };

  #onMenuButtonClick = (event) => {
    const toggleMenuBtn = this.#getToggleMenuButtonFromEvent(event);

    if (!toggleMenuBtn) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    this.#activeTrigger = toggleMenuBtn;

    toggleMenuBtn.classList.add("exit");
    this.#elements.menu.classList.add("active");
    this.#elements.hamburgerBtn?.classList.add("is-active");

    toggleMenuBtn.setAttribute("aria-expanded", "true");
    this.#elements.hamburgerBtn?.setAttribute("aria-expanded", "true");

    fadeIn(this.#elements.menu);

    const htmlWidthBeforeOverflowHidden = this.#elements.html.innerWidth;
    this.#elements.html.style.overflow = "hidden";
    const htmlWidthAfterOverflowHidden = this.#elements.html.innerWidth;
    this.#elements.html.style.marginRight =
      htmlWidthAfterOverflowHidden - htmlWidthBeforeOverflowHidden + "px";

    // this.#elements.menu.querySelector(".close")?.focus();
    setTimeout(() => {
      const firstFocusable = this.#elements.menu.querySelector(
        'a, button:not(.close), input, [tabindex="0"]'
      );

      firstFocusable?.focus();
    }, 100);
  };

  #onCloseIconClick = (event) => {
    if (event.currentTarget.classList.contains('close')) {
      event.preventDefault();
      // this.#closeMenu();

      this.closeMainMenu();
    }
 }

 closeMainMenu = () => {
  if (visible(this.#elements.menu)) {
      this.#elements.toggleMenuBtn.classList.remove("exit");
      this.#elements.menu.classList.remove("active");

      this.#elements.toggleMenuBtn?.setAttribute("aria-expanded", "false");

      fadeOut(this.#elements.menu);

      this.#elements.html.style.overflow = "";
      this.#elements.html.style.marginRight = "";

      this.#elements.hamburgerBtn?.classList.remove("is-active");
      this.#elements.hamburgerBtn?.setAttribute("aria-expanded", "false");

      if (this.#activeTrigger) {
        setTimeout(() => {
          this.#activeTrigger.focus();
        }, 50);
      }
  }
};

  #closeMenu = () => {
	// console.log("Inside closeMenu");
    if (visible(this.#elements.menu)) {
		// console.log("Menu is visible");
      this.#elements.toggleMenuBtn.classList.remove("exit");
      this.#elements.menu.classList.remove("active");

      this.#elements.toggleMenuBtn?.setAttribute("aria-expanded", "false");

      fadeOut(this.#elements.menu);

      this.#elements.html.style.overflow = "";
      this.#elements.html.style.marginRight = "";

      document
        .querySelectorAll("#mobile-fullscreen nav ul > li.open-sub")
        .forEach((menuItem) => {
          menuItem.classList.remove("open-sub");
        });

      document
        .querySelectorAll("#mobile-fullscreen nav ul.sub-menu")
        .forEach((subMenu) => {
          slideUp(subMenu, 250);
        });

      this.#elements.hamburgerBtn?.classList.remove("is-active");
      this.#elements.hamburgerBtn?.setAttribute("aria-expanded", "false");
	}
  };

  #onWindowResize = (event) => {
    if (window.innerWidth >= 960) {
      this.closeMainMenu();
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
    const activationKey = this.#isActivationKey(event);

    const closeIcon = this.#elements.menu.querySelector(".close");

    const navElements = [
      ...this.#elements.menu.querySelectorAll(
        "nav a, nav button, nav input, nav [tabindex='0']"
      ),
    ].filter(
      (element) =>
        element.offsetWidth > 0 ||
        element.offsetHeight > 0 ||
        element.getClientRects().length
    );

    const navFirstElement = navElements[0];
    const navLastElement = navElements[navElements.length - 1];

    closeIcon?.style && (closeIcon.style.outline = "");

    if (escKey) {
      event.preventDefault();
      //this.#closeMenu();

      this.closeMainMenu();
    }

    const activeElement = document.activeElement;

    const isLegacyFullscreenDropdownToggle =
      activeElement?.classList?.contains("dropdown-toggle") ||
      activeElement?.matches?.(
        '#mobile-fullscreen nav ul > li.menu-item-has-children > a:not([data-oceanwp-submenu-toggle])'
      );

    if (activationKey && isLegacyFullscreenDropdownToggle) {
      event.preventDefault();
      event.stopPropagation();
      activeElement.click();
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

    if (shiftKey && tabKey && navFirstElement === document.activeElement) {
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

    if (
      !shiftKey &&
      tabKey &&
      document.activeElement === navLastElement
    ) {
      event.preventDefault();

      closeIcon.focus();
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
oceanwp.fullScreenMobileMenu = new FullScreenMobileMenu();
