import { fadeIn, fadeOut } from "../lib/utils";

class ScrollTop {
  #elements;

  constructor() {
    this.#setElements();
    this.#start();
    this.#setupEventListeners();
  }

  #setElements = () => {
    this.#elements = {
      scrollTop: document.querySelector("#scroll-top"),
      goTop: document.querySelector('a[href="#go-top"]'),
      goTopSlash: document.querySelector('body.home a[href="/#go-top"]'),
      html: document.querySelector("html"),
    };
  };

  #start = () => {};

  #setupEventListeners = () => {
    window.addEventListener("scroll", this.#onWindowScroll);
    this.#elements.scrollTop?.addEventListener("click", this.#onScrollTopClick);
    this.#elements.goTop?.addEventListener("click", this.#onScrollTopClick);
    this.#elements.goTopSlash?.addEventListener(
      "click",
      this.#onScrollTopClick
    );
  };

  #onWindowScroll = (event) => {
    if (!this.#elements.scrollTop) {
      return;
    }

    if (window.pageYOffset > 100) {
      if (
        window.getComputedStyle(this.#elements.scrollTop).display === "none"
      ) {
        fadeIn(this.#elements.scrollTop);
      }
    } else if (
      window.getComputedStyle(this.#elements.scrollTop).display !== "none"
    ) {
      fadeOut(this.#elements.scrollTop);
    }
  };

  #onScrollTopClick = (event) => {
    event.preventDefault();

    const scrollTop = event.currentTarget;

    this.#elements.html.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    scrollTop.parentNode?.classList.remove("sfHover");
  };
}

("use script");
window.oceanwp = window.oceanwp || {};
oceanwp.scrollTop = new ScrollTop();
