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
    document.addEventListener(
      "keydown",
      this.#actionActive
    );
  };

  #actionActive = (event) => {
    const enterKey = event.keyCode === 13;
    if ( enterKey ) {
      document.querySelector('.skip-link').addEventListener('keydown', function(e) {
          var target = document.getElementById('main');
          target.tabIndex = -1;
          target.focus();
      });
    }
  };

}

("use script");
window.oceanwp = window.oceanwp || {};
oceanwp.theme = new Theme();
