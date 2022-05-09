import { options } from "../constants";

class BlogMasonry {
  #elements;
  isotop;

  constructor() {
    this.#setElements();
    this.start();
  }

  #setElements = () => {
    this.#elements = {
      masonryGrids: document.querySelectorAll(".blog-masonry-grid"),
    };
  };

  start = () => {
    this.#elements.masonryGrids?.forEach((blogMasonryGrid) => {
      imagesLoaded(blogMasonryGrid, (instance) => {
        this.isotop = new Isotope(blogMasonryGrid, {
          itemSelector: ".isotope-entry",
          transformsEnabled: true,
          isOriginLeft: options.isRTL ? false : true,
          transitionDuration: 0,
        });
      });
    });
  };
}

("use script");
window.oceanwp = window.oceanwp || {};
oceanwp.blogMasonry = new BlogMasonry();
