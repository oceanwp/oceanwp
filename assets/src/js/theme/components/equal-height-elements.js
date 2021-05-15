import ResponsiveAutoHeight from "responsive-auto-height";

class EqualHeightElements {
    constructor() {
        this.start();
    }

    start = () => {
        if (!!document.querySelector(".blog-equal-heights .blog-entry-inner")) {
            new ResponsiveAutoHeight(".blog-equal-heights .blog-entry-inner");
        }

        if (!!document.querySelector(".match-height-grid .match-height-content")) {
            new ResponsiveAutoHeight(".match-height-grid .match-height-content");
        }
    };
}

export default EqualHeightElements;
