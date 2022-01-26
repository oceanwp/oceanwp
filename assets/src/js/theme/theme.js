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
import OWInfiniteScroll from "./components/ow-infinite-scroll";
import OWSlider from "./components/ow-slider";
import OWLightbox from "./components/ow-lightbox";

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
        this.owLightbox = new OWLightbox();
        this.owSlider = new OWSlider();

        document.addEventListener("DOMContentLoaded", () => {
            this.owInfiniteScroll = new OWInfiniteScroll();
        });
    };
}

export default Theme;
