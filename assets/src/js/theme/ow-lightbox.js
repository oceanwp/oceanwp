class OWLightbox {
  constructor() {
    this.start();
  }

  start = () => {
    if (document.body.classList.contains("no-lightbox")) {
      return;
    }

    this.#addLightboxClass();
    this.initSingleImageLightbox();
    this.initGalleryLightbox();
  };

  initSingleImageLightbox = () => {
    document.querySelectorAll(".oceanwp-lightbox")?.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
      });
    });

    jQuery(".oceanwp-lightbox").magnificPopup({
      type: "image",
      mainClass: "mfp-with-zoom",

      zoom: {
        enabled: true,
        duration: 300,
        easing: "ease-in-out",
        opener: function (openerElement) {
          return openerElement.is("img")
            ? openerElement
            : openerElement.find("img");
        },
      },
    });
  };

  initGalleryLightbox = () => {
    jQuery(".wp-block-gallery, .gallery-format, .gallery").magnificPopup({
      delegate: ".gallery-lightbox:not(.slick-cloned)",
      type: "image",
      mainClass: "mfp-fade",
      gallery: {
        enabled: true,
      },
    });
  };

  #addLightboxClass = () => {
    document
      .querySelectorAll(
        "body .entry-content a, body .entry a, body article .gallery-format a"
      )
      ?.forEach((link) => {
        if (!!link.querySelector("img")) {
          const imageFormats = this.#imageFormats();
          let imageFormatsMask = 0;

          imageFormats.forEach((imageFormat) => {
            imageFormatsMask += String(link.getAttribute("href")).indexOf(
              "." + imageFormat
            );
          });

          if (imageFormatsMask === -13) {
            link.classList.add("no-lightbox");
          }

          if (
            !(
              link.classList.contains("no-lightbox") ||
              link.classList.contains("gallery-lightbox") ||
              link.parentNode.classList.contains("gallery-icon") ||
              link.classList.contains("woo-lightbox") ||
              link.classList.contains("woo-thumbnail") ||
              link.parentNode.classList.contains(
                "woocommerce-product-gallery__image"
              ) ||
              !!link.closest(".wp-block-gallery") ||
              !!link.getAttribute("data-elementor-open-lightbox") ||
              link.classList.contains("yith_magnifier_thumbnail") ||
              link.classList.contains("gg-link")
            )
          ) {
            link.classList.add("oceanwp-lightbox");
          }

          if (!link.classList.contains("no-lightbox")) {
            if (
              link.parentNode.classList.contains("gallery-icon") ||
              !!link.closest(".wp-block-gallery")
            ) {
              link.classList.add("gallery-lightbox");
            }
          }
        }
      });
  };

  #imageFormats = () => {
    return [
      "bmp",
      "gif",
      "jpeg",
      "jpg",
      "png",
      "tiff",
      "tif",
      "jfif",
      "jpe",
      "svg",
      "mp4",
      "ogg",
      "webm",
    ];
  };
}

("use script");
window.oceanwp = window.oceanwp || {};
oceanwp.owLightbox = new OWLightbox();
