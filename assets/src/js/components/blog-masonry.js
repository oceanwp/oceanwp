import { DOM, options } from "../constants";

export default class BlogMasonry {
    constructor() {
        this.#start();
        this.#setupEventListeners();
    }

    #start = () => {
        DOM.blogMasonryGrids.forEach((blogMasonryGrid) => {
            imagesLoaded(blogMasonryGrid, (instance) => {
                new Isotope(blogMasonryGrid, {
                    itemSelector: ".isotope-entry",
                    transformsEnabled: true,
                    isOriginLeft: options.isRTL ? false : true,
                    transitionDuration: "0.0s",
                });
            });
        });
    };

    #setupEventListeners = () => {
        window.addEventListener("orientationchange", this.#start());
    };
}
