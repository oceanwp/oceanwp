import { DOM } from "../../../constants";
import { fadeIn, fadeOut } from "../../../lib/utils";
import Cookies from "js-cookie";

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
        }
    };

    #setupEventListeners = () => {
        DOM.woo.grid?.addEventListener("click", this.#onGridClick);
        DOM.woo.list?.addEventListener("click", this.#onListClick);
    };

    #onGridClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        this.#productCarousel();

        DOM.woo.grid.classList.add("active");
        DOM.woo.list.classList.remove("active");

        Cookies.set("gridcookie", "grid", { path: "" });

        DOM.woo.allProducts.forEach((products) => {
            fadeOut(products);

            setTimeout(() => {
                products.classList.add("grid");
                products.classList.remove("list");
                fadeIn(products);
            }, 300);
        });
    };

    #onListClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        this.#productCarousel();

        DOM.woo.grid.classList.remove("active");
        DOM.woo.list.classList.add("active");

        Cookies.set("gridcookie", "list", { path: "" });

        DOM.woo.allProducts.forEach((products) => {
            fadeOut(products);

            setTimeout(() => {
                products.classList.add("list");
                products.classList.remove("grid");
                fadeIn(products);
            }, 300);
        });
    };

    #productCarousel = () => {
        if (!DOM.body.classList.contains("no-carousel")) {
        }
    };
}

export default WooGridList;
