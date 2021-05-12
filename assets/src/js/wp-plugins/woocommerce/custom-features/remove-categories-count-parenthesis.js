class WooRemoveCategoriesCountParenthesis {
    constructor() {
        this.#start();
    }

    #start = () => {
        document
            .querySelectorAll(".widget_layered_nav span.count, .widget_product_categories span.count")
            .forEach((item) => {
                const count = item.innerHTML;
                item.innerHTML = count.substring(1, count.length - 1);
            });
    };
}

export default WooRemoveCategoriesCountParenthesis;
