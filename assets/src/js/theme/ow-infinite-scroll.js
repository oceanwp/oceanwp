import InfiniteScroll from "infinite-scroll";
import ResponsiveAutoHeight from "responsive-auto-height";

class OWInfiniteScroll {
  #elements = {
    infiniteScrollNav: document.querySelector(".infinite-scroll-nav"),
  };
  #infiniteScroll;

  constructor() {
    if (
      !!this.#elements.infiniteScrollNav &&
      !!this.#elements.infiniteScrollNav.querySelector(".older-posts a")
    ) {
      this.#setElements();
      this.#start();
      this.#setupEventListeners();
    }
  }

  #setElements = () => {
    this.#elements = {
      ...this.#elements,
      infiniteScrollWrapper: document.querySelector(".infinite-scroll-wrap"),
    };
  };

  #start = () => {
    this.#infiniteScroll = new InfiniteScroll(
      this.#elements.infiniteScrollWrapper,
      {
        path: ".older-posts a",
        append: ".item-entry",
        status: ".scroller-status",
        hideNav: ".infinite-scroll-nav",
        history: false,
        prefill: true,
        scrollThreshold: 500,
      }
    );
  };

  #setupEventListeners = () => {
    this.#infiniteScroll.on("load", function (body, path, response) {
      const items = body.querySelectorAll(".item-entry");

      var firstElem = document.querySelector('.site-content .products .product');

      var columns = 0;


      if (firstElem) {
        var nextElements = firstElem.nextElementSibling;
        while (nextElements && !nextElements.classList.contains('first')) {
            columns++;
            nextElements = nextElements.nextElementSibling;
        }

        columns++;
      }

      var lastElem = document.querySelector('.site-content .products .product:last-child');

      if ( lastElem && !lastElem.classList.contains('last') ) {
        let offset = 0;
        let sibling = lastElem.previousElementSibling;

        while (sibling) {
          offset++;
          if (sibling.classList.contains('last')) {
            break;
          }
          sibling = sibling.previousElementSibling;
        }

        let loop = 0;

        items.forEach(item => {

          loop++;

          item.classList.remove('first');
          item.classList.remove('last');

          if ((loop + offset) % columns === 0) {
            item.classList.add('last');
          } else if (( ( loop - ( 1 - offset ) ) % columns ) === 0 ) {
            item.classList.add('first');
          }
        });
       }

      imagesLoaded(items, () => {
        // Blog masonry isotope
        if (this.element.classList.contains("blog-masonry-grid")) {
          oceanwp?.blogMasonry?.isotop.appended(items);

          // Fix Gallery posts
          if (!!this.element.querySelector(".gallery-format")) {
            setTimeout(() => {
              oceanwp?.blogMasonry?.isotop.layout();
            }, 600 + 1);
          }
        }

        // Gallery posts slider
        if (!document.body.classList.contains("no-carousel")) {
          oceanwp?.owSlider?.start(
            this.element.querySelectorAll(
              ".gallery-format, .product-entry-slider"
            )
          );
        }

        if (!document.body.classList.contains("no-lightbox")) {
          oceanwp?.owLightbox?.initSingleImageLightbox();
          oceanwp?.owLightbox?.initGalleryLightbox();
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
      imagesLoaded(items, () => {
        // Equal height elements
        if (!document.body.classList.contains("no-matchheight")) {
          let entryItemsSelectors = Array.from(items).map((item) => {
            if ( item.id ) {
              return `#${item.id} .blog-entry-inner`;
            } else {
              return;
            }
          });

          entryItemsSelectors = entryItemsSelectors.filter(function( element ) {
            return element !== undefined;
         });

          if ( entryItemsSelectors.length > 0 ) {
            new ResponsiveAutoHeight(entryItemsSelectors.join(","));
          }
        }

        // Added support for Variation Swatches by CartFlow.
        document.dispatchEvent( new CustomEvent('cfvswVariationLoad', { detail: {} }) );
      });
      jQuery(document).trigger('maybe-init-oec-wishlist');
    });
  };
}

("use script");
window.oceanwp = window.oceanwp || {};
document.addEventListener("DOMContentLoaded", () => {
  oceanwp.owInfiniteScroll = new OWInfiniteScroll();
});
