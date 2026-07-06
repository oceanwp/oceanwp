import Menu from "./menu/menu";
import MegaMenu from "./menu/mega-menu";
import Search from "./search/search";
import Footer from "./footer";

class Theme {
  constructor() {
    this.#start();
    this.#setupEventListeners();
  }

  #start = () => {
    this.menu = new Menu();
    this.megaMenu = new MegaMenu();
    this.search = new Search();
    this.footer = new Footer();
  };

  #setupEventListeners = () => {
      const skipLink = document.querySelector(".skip-link");

      skipLink?.addEventListener("click", this.#onSkipLinkClick);
  };

  #onSkipLinkClick = () => {
      const target = document.getElementById("main");

      if (!target) {
          return;
      }

      // Wait until the browser has navigated to #main.
      requestAnimationFrame(() => {
          target.tabIndex = -1;
          target.focus({ preventScroll: true });
      });
  };

}

("use script");
window.oceanwp = window.oceanwp || {};
oceanwp.theme = new Theme();
