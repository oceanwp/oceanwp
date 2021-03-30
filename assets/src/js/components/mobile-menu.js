import DropDownMobileMenu from "./mobile-menu/drop-down";
import FullScreenMobileMenu from "./mobile-menu/full-screen";

class MobileMenu {
    constructor() {
        this.#start();
    }

    #start = () => {
        this.dropDown = new DropDownMobileMenu();
        this.fullScreen = new FullScreenMobileMenu();
    };
}

export default MobileMenu;
