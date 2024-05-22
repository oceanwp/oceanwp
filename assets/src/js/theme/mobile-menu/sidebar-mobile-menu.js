import { options } from "../../constants";
import { fadeIn, fadeOut, slideDown, slideUp } from "../../lib/utils";

class SidebarMobileMenu {
  #elements = {
    body: document.body,
  };
  #isMenuOpen;
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
      header: document.querySelector("#site-header"),
    };
  };

  #start = () => {
    this.#isMenuOpen = false;
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
        document.querySelector("a.sidr-class-toggle-sidr-close")?.focus();
        document.querySelector("a.sidr-class-toggle-sidr-close svg")?.classList.remove("sidr-class-owp-icon", "sidr-class-owp-icon--close");
        document.querySelector("a.sidr-class-toggle-sidr-close svg")?.classList.add("owp-icon", "owp-icon--close");

        self.#elements.hamburgerBtn?.classList.add("is-active");

        self.#elements.header.insertAdjacentHTML(
          "afterend",
          '<div class="oceanwp-sidr-overlay" tabindex=0></div>'
        );

        const overlay = document.querySelector(".oceanwp-sidr-overlay");

        fadeIn(overlay);

        overlay.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();

          sidr.close("sidr");
        });
      },
      onClose() {
        self.#elements.hamburgerBtn?.classList.remove("is-active");

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

        fadeOut(overlay);

        setTimeout(() => {
          overlay.remove();
        });
      },
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
      "a.sidr-class-toggle-sidr-close"
    );
  };

  #setupEventListeners = () => {
    this.#elements.hamburgerBtn?.addEventListener(
      "click",
      this.#onHamburgerBtnClick
    );
    this.#sidebarToggleMenuBtn?.addEventListener(
      "click",
      this.#onSidebarCloseMenuBtnClick
    );

    // document.body.addEventListener("click", (event) => {
    //   const target = event.target;

    //   if (target.matches('.sidr-class-dropdown-menu a[href*="#"]:not([href="#"]), .sidr-class-menu-item > a[href*="#"]:not([href="#"])')) {
    //     this.#onAnchorLinkClick(event);
    //   }
    // });

    // document.body.addEventListener("touchend", (event) => {
    //   const target = event.target;

    //   if (target.matches('.sidr-class-dropdown-menu a[href*="#"]:not([href="#"]), .sidr-class-menu-item > a[href*="#"]:not([href="#"])')) {
    //     this.#onAnchorLinkClick(event);
    //   }
    // });

    document
    .querySelectorAll('.sidr-class-dropdown-menu a[href*="#"]:not([href="#"]), .sidr-class-menu-item > a[href*="#"]:not([href="#"])')
    .forEach((anchorLink) => {
      anchorLink.addEventListener("click", this.#onAnchorLinkClick);
    });

    document
    .querySelectorAll('.sidr-class-dropdown-menu a[href*="#"]:not([href="#"]), .sidr-class-menu-item > a[href*="#"]:not([href="#"])')
    .forEach((anchorLink) => {
      anchorLink.addEventListener("touchend", this.#onAnchorLinkClick);
    });

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
  };

  #onHamburgerBtnClick = (event) => {
    this.#isMenuOpen = !this.#isMenuOpen;
    event.currentTarget.setAttribute("aria-expanded", this.#isMenuOpen);
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
    const enterKey = event.keyCode === 13;

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
      enterKey &&
      document.activeElement.classList.contains("sidr-class-dropdown-toggle")
    ) {
      event.preventDefault();
      document.activeElement.click();
    }

    // If there are no elements in the menu, don't move the focus
    if (tabKey && navFirstElement === navLastElement) {
      event.preventDefault();
    }
  };

  // New method to handle anchor link clicks
  #onAnchorLinkClick = (event) => {
    const href = event.currentTarget.getAttribute('href');
    const anchor = href.substring(href.lastIndexOf('#'));
    const targetElement = document.querySelector(anchor);

    if (targetElement) {
        event.stopPropagation();
        this.closeSidr();
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

  closeSidr = () => {
    setTimeout(() => {
      sidr.close("sidr");
      this.#elements.hamburgerBtn?.classList.remove("is-active");
    }, 50);
  };
}

("use script");
window.oceanwp = window.oceanwp || {};
oceanwp.sidebarMobileMenu = new SidebarMobileMenu();
