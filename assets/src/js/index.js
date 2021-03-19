import "./lib/element";
import Select from "./components/select";
import Menu from "./components/menu";
import MobileMenu from "./components/mobile-menu";
import Search from "./components/search";
import Footer from "./components/footer";

class OceanWP {
    constructor() {
        this.select = new Select();
        this.menu = new Menu();
        this.mobileMenu = new MobileMenu();
        this.search = new Search();
        this.footer = new Footer();
    }

    start = () => {};
}

("use script");

window.oceanwp = new OceanWP();
oceanwp.start();
