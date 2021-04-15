import Select from "./components/select";
import Header from "./components/header";
import Menu from "./components/menu";
import MobileMenu from "./components/mobile-menu";
import Search from "./components/search";
import Footer from "./components/footer";
import BlogMasonry from "./components/blog-masonry";
import ScrollTop from "./components/scroll-top";
import ScrollEffect from "./components/scroll-effect";
import EqualHeightElements from "./components/equal-height-elements";

class Theme {
    constructor() {
        this.#start();
    }

    #start = () => {
        this.select = new Select();
        this.header = new Header();
        this.menu = new Menu();
        this.mobileMenu = new MobileMenu();
        this.search = new Search();
        this.footer = new Footer();
        this.blogMasonry = new BlogMasonry();
        this.scrollTop = new ScrollTop();
        this.scrollEffect = new ScrollEffect();
        this.equalHeightElements = new EqualHeightElements();
    };
}

export default Theme;
