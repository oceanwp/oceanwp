import { DOM } from "../../constants";

class OWSlider {
    constructor() {
        this.start();
    }

    start = (elements = document.querySelectorAll(".gallery-format, .product-entry-slider")) => {
        elements?.forEach((element) => {
            new Flickity(element, {
                autoPlay: element.classList.contains("woo-entry-image") ? false : 6000,
                rightToLeft: DOM.body.classList.contains("rtl") ? true : false,
                imagesLoaded: true,
                contain: true,
                pageDots: false,
                on: {
                    ready: () => {
                        element.style.opacity = 1;
                        element.style.visibility = "visible";
                        element.style.height = "auto";
                    },
                },
            });
        });
    };
}

export default OWSlider;
