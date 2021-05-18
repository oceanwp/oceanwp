import { DOM, options } from "../../constants";

export default class BlogMasonry {
    isotop;

    constructor() {
        this.start();
    }

    start = () => {
        DOM.blog.masonryGrids?.forEach((blogMasonryGrid) => {
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
