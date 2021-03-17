import Select from "./components/select";
import MobileMenu from "./components/mobile-menu";

class OceanWP {
    constructor() {
        this.select = new Select();
        this.mobileMenu = new MobileMenu();
    }

    start = () => {};
}

("use script");

window.oceanwp = new OceanWP();
oceanwp.start();
