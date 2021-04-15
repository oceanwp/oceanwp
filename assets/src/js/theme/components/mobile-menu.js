import DropDownMobileMenu from "./mobile-menu/drop-down";
import FullScreenMobileMenu from "./mobile-menu/full-screen";
import SidebarMobileMenu from "./mobile-menu/sidebar";

class MobileMenu {
    constructor() {
        this.#start();
    }

    #start = () => {
        this.dropDown = new DropDownMobileMenu();
        this.fullScreen = new FullScreenMobileMenu();
        this.sidebar = new SidebarMobileMenu();
    };
}

export default MobileMenu;
