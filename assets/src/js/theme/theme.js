import Menu from "./menu/menu";
import MegaMenu from "./menu/mega-menu";
import Search from "./search/search";
import Footer from "./footer";

class Theme {
  constructor() {
    this.#start();
  }

  #start = () => {
    this.menu = new Menu();
    this.megaMenu = new MegaMenu();
    this.search = new Search();
    this.footer = new Footer();
  };
}

("use script");
window.oceanwp = window.oceanwp || {};
oceanwp.theme = new Theme();
