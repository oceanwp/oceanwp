import { DOM } from "../../constants";
import { fadeIn, fadeOut } from "../../lib/utils";
import InfiniteScroll from "infinite-scroll";

class OWInfiniteScroll {
    #infiniteScroll;

    constructor() {
        if (!!DOM.scroll.infiniteScrollNav && !!DOM.scroll.infiniteScrollNav.querySelector(".older-posts a")) {
            this.#start();
            this.#setupEventListeners();
        }
    }

    #start = () => {
        this.#infiniteScroll = new InfiniteScroll(DOM.scroll.infiniteScrollWrapper, {
            path: ".older-posts a",
            append: ".item-entry",
            status: ".scroller-status",
            hideNav: ".infinite-scroll-nav",
            history: false,
            prefill: true,
            scrollThreshold: 500,
        });
    };

    #setupEventListeners = () => {
        this.#infiniteScroll.on("load", function (body, path, response) {
            const items = body.querySelectorAll(".item-entry");

            if (this.element.classList.contains("blog-masonry-grid")) {
                items.forEach((item) => {
                    fadeOut(item);
                });
            }

            imagesLoaded(items, () => {
                // Blog masonry isotope
                if (this.element.classList.contains("blog-masonry-grid")) {
                    oceanwp.theme.blogMasonry.isotop.appended(items);

                    // Fix Gallery posts
                    if (!!this.element.querySelector(".gallery-format")) {
                        setTimeout(() => {
                            oceanwp.theme.blogMasonry.isotop.layout();
                        }, 600 + 1);
                    }
                }

                // Equal height elements
                if (!DOM.body.classList.contains("no-matchheight")) {
                    oceanwp.theme.equalHeightElements.start();
                }

                // Gallery posts slider
                if (!DOM.body.classList.contains("no-carousel")) {
                    oceanwp.theme.owSlider.start(this.element.querySelectorAll(".gallery-format, .product-entry-slider"));
                }

                if (!document.body.classList.contains("no-lightbox")) {
                    oceanwp.theme.owLightbox.initSingleImageLightbox();
                    oceanwp.theme.owLightbox.initGalleryLightbox();
                }

                // Force the images to be parsed to fix Safari issue
                items.forEach((item) => {
                    item.querySelectorAll("img")?.forEach((img) => {
                        img.outerHTML = img.outerHTML;
                    });
                });
            });
        });

        this.#infiniteScroll.on("append", function (body, path, items, response) {
            if (this.element.classList.contains("blog-masonry-grid")) {
                items.forEach((item) => {
                    fadeIn(item);
                });
            }
        });
    };
}

export default OWInfiniteScroll;
