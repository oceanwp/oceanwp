import delegate from "delegate";
import { DOM } from "../../constants";
import { getSiblings } from "../../lib/utils";

class WooHoverStyle {
    constructor() {
        this.#start();
        this.#setupEventListeners();
    }

    #start = () => {};

    #setupEventListeners = () => {
        if (
            !!document.querySelector(
                ".woocommerce ul.products li.product .woo-entry-buttons li.woo-wishlist-btn"
            )
        ) {
            delegate(DOM.body, ".tinvwl_add_to_wishlist_button", "click", this.#onAddToWishlistBtnClick);
        }

        delegate(
            DOM.body,
            ".woo-product-gallery a.woo-product-gallery-link",
            "click",
            this.#onProductGalleryImageClick
        );
    };

    #onAddToWishlistBtnClick = (event) => {
        const addToWishlistBtn = event.delegateTarget;

        addToWishlistBtn.parentNode.parentNode.classList.add("loading");

        setTimeout(() => {
            addToWishlistBtn.parentNode.parentNode.classList.remove("loading");
        }, 500);
    };

    #onProductGalleryImageClick = (event) => {
        event.preventDefault();

        const galleryImage = event.delegateTarget;
        const mainImage = galleryImage.closest(".product-inner").querySelector(".woo-entry-image-main");

        if (mainImage) {
            const mainImageURL = galleryImage.getAttribute("href");
            const galleryImageSiblings = getSiblings(galleryImage.parentNode);

            mainImage.parentNode.classList.add("loading");

            mainImage.setAttribute("src", mainImageURL);
            mainImage.setAttribute("srcset", mainImageURL);

            mainImage.style.cssText = `
                opacity: 0;
                -webkit-transform: scale(0.5);
                -moz-transform: scale(0.5);
                -ms-transform: scale(0.5);
                -o-transform: scale(0.5);
                transform: scale(0.5);
                -webkit-transition: all 0.3s ease;
                -moz-transition: all 0.3s ease;
                -ms-transition: all 0.3s ease;
                -o-transition: all 0.3s ease;
                transition: all 0.3s ease;`;

            const imageLoaded = () => {
                setTimeout(() => {
                    mainImage.style.cssText = `
                        opacity: 1;
                        -webkit-transform: scale(1);
                        -moz-transform: scale(1);
                        -ms-transform: scale(1);
                        -o-transform: scale(1);
                        transform: scale(1);
                        -webkit-transition: all 0.3s ease;
                        -moz-transition: all 0.3s ease;
                        -ms-transition: all 0.3s ease;
                        -o-transition: all 0.3s ease;
                        transition: all 0.3s ease;`;

                    mainImage.parentNode.classList.remove("loading");
                }, 300);
            };

            if (mainImage.complete) {
                imageLoaded();
            } else {
                mainImage.addEventListener("load", imageLoaded);
            }

            galleryImage.parentNode.classList.add("active");

            galleryImageSiblings?.forEach((_galleryImage) => {
                _galleryImage.classList.remove("active");
            });
        }
    };
}

new WooHoverStyle();
