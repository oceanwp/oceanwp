import "./lib/element";
import Select from "./components/select";
import MobileMenu from "./components/mobile-menu";
import Search from "./components/search";

class OceanWP {
    constructor() {
        this.select = new Select();
        this.mobileMenu = new MobileMenu();
        this.search = new Search();
    }

    start = () => {};
}

("use script");

window.oceanwp = new OceanWP();
oceanwp.start();
