import ResponsiveAutoHeight from "responsive-auto-height";

class OWLoadMore {
  #elements = {
    loadMoreButton: document.querySelector(".load-more-button"),
    loadMorePostsNav: document.querySelector(".load-more-nav"),
    loadMorePostsStatus: document.querySelector(".load-more-status__message"),
  };

  #loading = false;
  #btnText = '';

  constructor() {
    if (
      !!this.#elements.loadMorePostsNav &&
      !!this.#elements.loadMorePostsNav.querySelector(".older-posts a")
    ) {
      this.#setupEventListeners();
      this.#setElements();
    }
  }

  #setElements = () => {
    this.#elements = {
      ...this.#elements,
      loadMoreWrapper: document.querySelector(".load-more-wrap"),
    };
  };

  #setupEventListeners = () => {
    this.#elements.loadMoreButton.addEventListener("click", () => {
      if (this.#loading) {
        return;
      }

      this.#loading = true;
      this.#btnText = this.#elements.loadMoreButton.textContent;
      this.#elements.loadMoreButton.textContent = oceanwpLocalize.loadMoreLoadingText;

      this.#loadMoreContent();
    });
  };

  #loadMoreContent = () => {
    const loadMoreText = this.#btnText;

    const path = document.querySelector(".older-posts a")?.href;

    if (!path) {
      this.#elements.loadMorePostsStatus.classList.add('show');
      this.#elements.loadMoreButton?.remove();
      this.#elements.loadMorePostsNav?.remove();
      return;
    }

    fetch(path)
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const newContent = doc.querySelectorAll(".item-entry");

        if (newContent.length === 0) {
          this.#elements.loadMorePostsStatus.classList.add('show');
          this.#elements.loadMoreButton?.remove();
          this.#elements.loadMorePostsNav?.remove();
          return;
        }

        newContent.forEach(item => this.#elements.loadMoreWrapper.appendChild(item));

        this.#adjustLayout(newContent);

        const nextOlderPostsLink = new DOMParser().parseFromString(html, "text/html").querySelector(".older-posts a");
        if (nextOlderPostsLink) {
          document.querySelector(".older-posts a").href = nextOlderPostsLink.href;
          setTimeout(() => {
            this.#loading = false;
            this.#elements.loadMoreButton.textContent = loadMoreText;
          }, 10);
        } else {
          this.#elements.loadMorePostsStatus.classList.add('show');
          this.#elements.loadMoreButton?.remove();
          this.#elements.loadMorePostsNav?.remove();
        }
      })
      .catch(error => {
        console.error("Error loading more content:", error);
        this.#loading = false;
        this.#elements.loadMoreButton.textContent = loadMoreText;
      });
  };

  #adjustLayout = (newContent) => {
    const items = Array.from(newContent);

    const masonryGrid = document.querySelector(".blog-masonry-grid");

    if (masonryGrid) {
      oceanwp?.blogMasonry?.isotop.appended(items);

      if (items.some((item) => item.classList.contains("gallery-format"))) {
        setTimeout(() => {
          oceanwp?.blogMasonry?.isotop.layout();
        }, 600 + 1);
      }
    }

    if (!document.body.classList.contains("no-carousel")) {
      const targetElements = items
        .flatMap((item) => Array.from(item.querySelectorAll(".gallery-format, .product-entry-slider")))
        .filter((element) => element !== null);

      oceanwp?.owSlider?.start(targetElements);
    }

    // Handle lightbox
    if (!document.body.classList.contains("no-lightbox")) {
      oceanwp?.owLightbox?.initSingleImageLightbox();
      oceanwp?.owLightbox?.initGalleryLightbox();
    }

    // Handle responsive auto-height
    if (!document.body.classList.contains("no-matchheight")) {
      let entryItemsSelectors = Array.from(items)
        .map((item) => (item.id ? `#${item.id} .blog-entry-inner` : undefined))
        .filter((element) => element !== undefined);

      if (entryItemsSelectors.length > 0) {
        new ResponsiveAutoHeight(entryItemsSelectors.join(","));
      }
    }

    document.dispatchEvent( new CustomEvent('cfvswVariationLoad', { detail: {} }) );
    jQuery(document).trigger('oec_product_swatches_shop_init');
    jQuery(document).trigger('maybe-init-oec-wishlist');

    // Force re-parsing of images for Safari issue
    items.forEach((item) => {
      item.querySelectorAll("img")?.forEach((img) => {
        img.outerHTML = img.outerHTML;
      });
    });
  };
}

("use script");
window.oceanwp = window.oceanwp || {};
document.addEventListener("DOMContentLoaded", () => {
  oceanwp.owLoadMore = new OWLoadMore();
});
