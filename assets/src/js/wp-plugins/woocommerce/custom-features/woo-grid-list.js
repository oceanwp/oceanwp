import Cookies from "js-cookie";
import { DOM } from "../../../constants";
import { fadeIn, fadeOut } from "../../../lib/utils";

class WooGridList {
    constructor() {
        if (DOM.body.classList.contains("has-grid-list")) {
            this.#start();
            this.#setupEventListeners();
        } else {
            Cookies.remove("gridcookie", { path: "" });
        }
    }

    #start = () => {
        if (!(DOM.woo.grid || DOM.woo.list)) {
            return;
        }

        if (Cookies.get("gridcookie") === "grid") {
            DOM.woo.grid?.classList.add("active");
            DOM.woo.list?.classList.remove("active");

            DOM.woo.allProducts?.forEach((products) => {
                products.classList.add("grid");
                products.classList.remove("list");
            });
        }

        if (Cookies.get("gridcookie") === "list") {
            DOM.woo.grid?.classList.remove("active");
            DOM.woo.list?.classList.add("active");

            DOM.woo.allProducts?.forEach((products) => {
                products.classList.add("list");
                products.classList.remove("grid");
            });

            this.#productCarousel();
        }
    };

    #setupEventListeners = () => {
        DOM.woo.grid?.addEventListener("click", this.#onGridClick);
        DOM.woo.list?.addEventListener("click", this.#onListClick);
    };

    #onGridClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        DOM.woo.grid.classList.add("active");
        DOM.woo.list.classList.remove("active");

        Cookies.set("gridcookie", "grid", { path: "" });

        DOM.woo.allProducts.forEach((products) => {
            fadeOut(products, {
                callback: () => {
                    products.classList.add("grid");
                    products.classList.remove("list");

                    fadeIn(products);
                },
            });
        });

        setTimeout(() => {
            this.#productCarousel();
        }, 301);
    };

    #onListClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        DOM.woo.grid.classList.remove("active");
        DOM.woo.list.classList.add("active");

        Cookies.set("gridcookie", "list", { path: "" });

        DOM.woo.allProducts.forEach((products) => {
            fadeOut(products, {
                callback: () => {
                    products.classList.add("list");
                    products.classList.remove("grid");

                    fadeIn(products);
                },
            });
        });

        setTimeout(() => {
            this.#productCarousel();
        }, 301);
    };

    #productCarousel = () => {
        if (
            !DOM.body.classList.contains("no-carousel") &&
            !!document.querySelector(".woo-entry-image.product-entry-slider")
        ) {
            oceanwp.theme.owSlider.flickity?.forEach((flickity) => {
                flickity.destroy();
            });
        }

        oceanwp.theme.owSlider.start();
    };
}

export default WooGridList;
