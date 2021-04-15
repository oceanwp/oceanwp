import VerticalHeader from "./header/vertical";

class Header {
    constructor() {
        this.#start();
    }

    #start = () => {
        this.vertical = new VerticalHeader();
    };
}

export default Header;
