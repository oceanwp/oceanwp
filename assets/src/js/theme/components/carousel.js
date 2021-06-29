import { DOM } from "../../constants";

class Carousel {
    constructor(context) {
        this.#start(context);
    }

    #start = (context) => {
        const elementsString = `.gallery-format, .product-entry-slider${context ? `, ${context}` : ""}`;
        const elements = document.querySelectorAll(elementsString);

        elements.forEach((element) => {
            const flickity = new Flickity(element, {
                autoPlay: element.classList.contains("woo-entry-image") ? false : 7000,
                imagesLoaded: true,
                contain: true,
                rightToLeft: DOM.body.classList.contains("rtl") ? true : false,
            });

            const imgs = element.querySelectorAll(".carousel-cell img");
            // get transform property
            const docStyle = document.documentElement.style;
            const transformProp = typeof docStyle.transform == "string" ? "transform" : "WebkitTransform";

            flickity.on("scroll", function () {
                flickity.slides.forEach(function (slide, i) {
                    const img = imgs[i];
                    let x = ((slide.target + flickity.x) * -1) / 3;
                    img.style[transformProp] = "translateX(" + x + "px)";
                });
            });
        });
    };
}

new Carousel();
