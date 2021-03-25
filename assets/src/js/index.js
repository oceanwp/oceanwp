import "./lib/element";
import Select from "./components/select";
import Menu from "./components/menu";
import MobileMenu from "./components/mobile-menu";
import Search from "./components/search";
import Footer from "./components/footer";
import ScrollTop from "./components/scroll-top";
import BlogMasonry from "./components/blog-masonry";

class OceanWP {
    constructor() {
        this.select = new Select();
        this.menu = new Menu();
        this.mobileMenu = new MobileMenu();
        this.search = new Search();
        this.footer = new Footer();
        this.scrollTop = new ScrollTop();
        this.blogMasonry = new BlogMasonry();
    }

    start = () => {};
}

("use script");

window.oceanwp = new OceanWP();
oceanwp.start();
