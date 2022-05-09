class WooThumbnails {
  #elements = {
    thumbsVerticalLayout: document.querySelector(".owp-thumbs-layout-vertical"),
  };

  constructor() {
    if (!!this.#elements.thumbsVerticalLayout) {
      this.#setupEventListeners();
    }
  }

  #setupEventListeners = () => {
    window.addEventListener("load", this.#start);
    window.addEventListener("resize", this.#start);
  };

  #start = () => {
    const thumbsNav =
      this.#elements.thumbsVerticalLayout.querySelector(".flex-control-nav");

    if (!!thumbsNav) {
      if (window.innerWidth > 768) {
        const imageHeight =
          this.#elements.thumbsVerticalLayout.querySelector(
            ".flex-viewport"
          )?.offsetHeight;
        const navHeight =
          this.#elements.thumbsVerticalLayout.querySelector(
            ".flex-control-nav"
          )?.offsetHeight;

        if (navHeight > imageHeight + 50) {
          thumbsNav.style.maxHeight = `${imageHeight}px`;
        }
      } else {
        thumbsNav.style.maxHeight = "";
      }
    }
  };
}

new WooThumbnails();
