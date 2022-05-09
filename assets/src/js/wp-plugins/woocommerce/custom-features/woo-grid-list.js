import Cookies from "js-cookie";
import { fadeIn, fadeOut } from "../../../lib/utils";

class WooGridList {
  #elements = {
    body: document.body,
  };

  constructor() {
    if (this.#elements.body.classList.contains("has-grid-list")) {
      this.#setElements();
      this.#start();
      this.#setupEventListeners();
    } else {
      Cookies.remove("gridcookie", { path: "" });
    }
  }

  #setElements = () => {
    this.#elements = {
      ...this.#elements,
      grid: document.querySelector(".oceanwp-grid-list #oceanwp-grid"),
      list: document.querySelector(".oceanwp-grid-list #oceanwp-list"),
      allProducts: document.querySelectorAll(".woocommerce ul.products"),
    };
  };

  #start = () => {
    if (!(this.#elements.grid || this.#elements.list)) {
      return;
    }

    if (Cookies.get("gridcookie") === "grid") {
      this.#elements.grid?.classList.add("active");
      this.#elements.list?.classList.remove("active");

      this.#elements.allProducts?.forEach((products) => {
        products.classList.add("grid");
        products.classList.remove("list");
      });
    }

    if (Cookies.get("gridcookie") === "list") {
      this.#elements.grid?.classList.remove("active");
      this.#elements.list?.classList.add("active");

      this.#elements.allProducts?.forEach((products) => {
        products.classList.add("list");
        products.classList.remove("grid");
      });

      this.#productCarousel();
    }
  };

  #setupEventListeners = () => {
    this.#elements.grid?.addEventListener("click", this.#onGridClick);
    this.#elements.list?.addEventListener("click", this.#onListClick);
  };

  #onGridClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.#elements.grid.classList.add("active");
    this.#elements.list.classList.remove("active");

    Cookies.set("gridcookie", "grid", { path: "" });

    this.#elements.allProducts.forEach((products) => {
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

    this.#elements.grid.classList.remove("active");
    this.#elements.list.classList.add("active");

    Cookies.set("gridcookie", "list", { path: "" });

    this.#elements.allProducts.forEach((products) => {
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
      !this.#elements.body.classList.contains("no-carousel") &&
      !!document.querySelector(".woo-entry-image.product-entry-slider")
    ) {
      oceanwp.owSlider.flickity?.forEach((flickity) => {
        flickity.destroy();
      });
    }

    oceanwp.owSlider.start();
  };
}

export default WooGridList;
