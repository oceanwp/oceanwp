import { options } from "../../constants";
import { fadeIn, fadeOut, slideDown, slideUp } from "../../lib/utils";

class SidebarMobileMenu {
  #elements = {
    body: document.body,
  };
  #menuItemsPlusIcon;
  #sidebarToggleMenuBtn;

  constructor() {
    if (
      typeof options.sidrSource !== "undefined" &&
      this.#elements.body.classList.contains("sidebar-mobile")
    ) {
      this.#setElements();
      this.#start();
      this.#setupEventListeners();
    }
  }

  #setElements = () => {
    this.#elements = {
      ...this.#elements,
      hamburgerBtn: document.querySelector(".mobile-menu > .hamburger"),
      toggleMenuBtn: document.querySelector(".mobile-menu"),
      header: document.querySelector("#site-header"),
    };
  };

  #start = () => {
    this.#startSidrPlugin();

    if (!document.querySelector(".sidr-class-dropdown-toggle")) {
      document
        .querySelectorAll(".sidr-class-menu-item-has-children > a")
        .forEach((menuItemLink) => {
          menuItemLink.insertAdjacentHTML(
            "beforeend",
            '<span class="sidr-class-dropdown-toggle" tabindex=0></span>'
          );
        });
    }

    this.#menuItemsPlusIcon =
      options.sidrDropdownTarget == "link"
        ? document.querySelectorAll("li.sidr-class-menu-item-has-children > a")
        : document.querySelectorAll(".sidr-class-dropdown-toggle");
  };

  #startSidrPlugin = () => {
    const self = this;

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
        const closeBtn = document.querySelector(
          "#sidr .sidr-class-toggle-sidr-close"
        );

        closeBtn?.focus();

        closeBtn
          ?.querySelector("svg")
          ?.classList.remove(
            "sidr-class-owp-icon",
            "sidr-class-owp-icon--close"
          );

        closeBtn
          ?.querySelector("svg")
          ?.classList.add(
            "owp-icon",
            "owp-icon--close"
          );

        self.#elements.hamburgerBtn?.classList.add("is-active");
        self.#elements.toggleMenuBtn?.setAttribute("aria-expanded", "true");

        // A previous overlay may still be fading when the menu is reopened.
        document.querySelectorAll(".oceanwp-sidr-overlay").forEach((overlay) => {
          overlay.remove();
        });

        self.#elements.header.insertAdjacentHTML(
          "afterend",
          '<div class="oceanwp-sidr-overlay" tabindex=0></div>'
        );

        const overlay = document.querySelector(".oceanwp-sidr-overlay");

        fadeIn(overlay);

        const sidrLinks = document.querySelectorAll(
          '#sidr a[href*="#"]:not([href="#"])'
        );

        sidrLinks.forEach((link) => {
          if (link.matches(".opl-login-li a.opl-link, .sidr-class-toggle-sidr-close")) {
            return;
          }

          // Prevent duplicate listeners.
          if (link.dataset.anchorListenerAttached) {
            return;
          }

          link.dataset.anchorListenerAttached = "true";

          link.addEventListener("click", (event) => {
            self.#onAnchorLinkClick(event, link);
          });

        });

        overlay.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();

          sidr.close("sidr");
        });
      },
      onClose() {
        self.#elements.hamburgerBtn?.classList.remove("is-active");
        self.#elements.toggleMenuBtn?.setAttribute("aria-expanded", "false");

        document
          .querySelectorAll(".sidr-class-menu-item-has-children.active > ul")
          .forEach((subMenuActive) => {
            subMenuActive.style.display = "none";
          });

        document
          .querySelectorAll(".sidr-class-menu-item-has-children.active")
          .forEach((menuItemActive) => {
            menuItemActive.classList.remove("active");
          });

        const overlay = document.querySelector(".oceanwp-sidr-overlay");

        if (overlay) {
          fadeOut(overlay, { duration: 150, callback: () => overlay.remove() });
        }
      },
    });

    document
      .querySelectorAll('#sidr [class*="opl-logout-link"], #sidr [class*="opl-login-li"], #sidr [class*="opl-link"]')
      .forEach((icon) => {
        icon.className = icon.className.replace(
          /\bsidr-class-.*?\b/g,
          ""
        );
    });

    document
      .querySelectorAll('#sidr [class*="sidr-class-fa"]')
      .forEach((icon) => {
        icon.className = icon.className.replace(/\bsidr-class-fa.*?\b/g, "fa");
      });

    document
      .querySelectorAll('#sidr [class*="sidr-class-icon"]')
      .forEach((icon) => {
        icon.className = icon.className.replace(
          /\bsidr-class-icon-.*?\b/g,
          "icon-"
        );
      });

    document
      .querySelectorAll('#sidr [class*="sidr-class-dashicons"]')
      .forEach((icon) => {
        icon.className = icon.className.replace(/\bsidr-class-dashicons.*?\b/g, "dashicons");
      });

    document
      .querySelectorAll('#sidr [class*="sidr-class-elusive"]')
      .forEach((icon) => {
        icon.className = icon.className.replace(/\bsidr-class-el-icon.*?\b/g, "el-icon");
      });

    document
      .querySelectorAll('#sidr [class*="sidr-class-genericon"]')
      .forEach((icon) => {
        icon.className = icon.className.replace(/\bsidr-class-genericon.*?\b/g, "genericon");
      });

    document
      .querySelectorAll('#sidr [class*="sidr-class-foundation-icons"]')
      .forEach((icon) => {
        icon.className = icon.className.replace(/\bsidr-class-fi.*?\b/g, "fi");
      });

    this.#sidebarToggleMenuBtn = document.querySelector(
      "#sidr .sidr-class-toggle-sidr-close"
    );
  };

  #setupEventListeners = () => {
    this.#elements.toggleMenuBtn?.addEventListener(
      "keydown",
      this.#onToggleMenuBtnKeydown
    );
    this.#sidebarToggleMenuBtn?.addEventListener(
      "click",
      this.#onSidebarCloseMenuBtnClick
    );

    this.#menuItemsPlusIcon?.forEach((menuItemPlusIcon) => {
      menuItemPlusIcon.addEventListener("click", this.#onMenuItemPlusIconClick);
      menuItemPlusIcon.addEventListener(
        "touchend",
        this.#onMenuItemPlusIconClick
      );
    });

    document
      .querySelectorAll("li.sidr-class-nav-no-click > a")
      ?.forEach((menuItemLink) => {
        menuItemLink.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
        });
      });

    document.addEventListener("keydown", this.#onDocumentKeydown);
    window.addEventListener("resize", this.#onWindowResize);

    // Add event listener for popup login link
    document
     .querySelectorAll(".opl-login-li a.opl-link")
     .forEach((loginLink) => {
       loginLink.addEventListener("click", this.#onLoginLinkClick);
       loginLink.addEventListener("touchend", this.#onLoginLinkClick);
     });

  };

  #onToggleMenuBtnKeydown = (event) => {
    if (!this.#isActivationKey(event) || event.currentTarget.tagName === "BUTTON") {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.click();
  };

  #onSidebarCloseMenuBtnClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.closeSidr();
    this.#sidebarToggleMenuBtn.classList.remove("opened");
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
        .querySelectorAll(".sidr-class-menu-item-has-children.active")
        ?.forEach((openMenuItem) => {
          openMenuItem.classList.remove("active");
          slideUp(openMenuItem.querySelector("ul"));
        });
    }
  };

  #onWindowResize = (event) => {
    if (window.innerWidth >= 960) {
      this.closeSidr();
    }
  };

  /**
   * Trap keyboard navigation
   */
  #onDocumentKeydown = (event) => {
    if (!this.#elements.body.classList.contains("sidr-open")) {
      return;
    }

    event.stopPropagation();

    const tabKey = event.keyCode === 9;
    const shiftKey = event.shiftKey;
    const escKey = event.keyCode === 27;
    const activationKey = this.#isActivationKey(event);

    const closeIcon = this.#sidebarToggleMenuBtn;

    const navElements = document
      .querySelector("#sidr")
      .querySelectorAll("a, span.sidr-class-dropdown-toggle, input, button");

    const navFirstElement = navElements[0];
    const navLastElement = navElements[navElements.length - 1];

    if (closeIcon) {
      closeIcon.style.outline = "";

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
    }

    if (escKey) {
      event.preventDefault();
      this.closeSidr();
    }

    if (
      activationKey &&
      document.activeElement.classList.contains("sidr-class-dropdown-toggle")
    ) {
      event.preventDefault();
      document.activeElement.click();
      return;
    }

    // If there are no elements in the menu, don't move the focus
    if (tabKey && navFirstElement === navLastElement) {
      event.preventDefault();
    }
  };

  #onLoginLinkClick = (event) => {
    this.closeSidr();
  };

  // Intercept only in-page anchors; allow ordinary links and cross-page
  // fragment URLs to follow the browser's native navigation behavior.
  #onAnchorLinkClick = (event, link) => {
    const href = link.getAttribute("href");

    if (!href || href === "#") {
      return;
    }

    let url;
    try {
      url = new URL(href, window.location.href);
    } catch (e) {
      return;
    }

    if (
      !url.hash ||
      url.origin !== window.location.origin ||
      url.pathname !== window.location.pathname ||
      url.search !== window.location.search
    ) {
      return;
    }

    let id;
    try {
      id = decodeURIComponent(url.hash.substring(1));
    } catch (e) {
      return;
    }

    const targetElement = document.getElementById(id);
    if (!targetElement) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    this.closeSidr();

    setTimeout(() => {
      const stickyHeader = document.querySelector(
        ".oceanwp-sticky-header-holder .has-sticky-mobile"
      );
      const headerHeight = stickyHeader ? stickyHeader.offsetHeight : 0;

      const topBarStickyWrapper = document.querySelector(
        ".oceanwp-sticky-top-bar-holder"
      );
      const topBarStickyHeight = topBarStickyWrapper
        ? topBarStickyWrapper.offsetHeight
        : 0;

      const offset =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        topBarStickyHeight;

      const reduceMotion = window.matchMedia?.(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      window.scrollTo({
        top: offset,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    }, 50);
  };

  closeSidr = () => {
    sidr.close("sidr");
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
oceanwp.sidebarMobileMenu = new SidebarMobileMenu();
