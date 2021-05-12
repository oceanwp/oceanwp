class WooReviewScroll {
    constructor() {
        this.#setupEventListeners();
    }

    #setupEventListeners = () => {
        document
            .querySelectorAll(".woocommerce div.product .woocommerce-review-link")
            .forEach((reviewLink) => {
                reviewLink.addEventListener("click", this.#onReviewLinkClick);
            });
    };

    #onReviewLinkClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        document.querySelectorAll(".woocommerce-tabs .description_tab").forEach((item) => {
            item.classList.remove("active");
        });

        document.querySelectorAll(".woocommerce-tabs .reviews_tab").forEach((item) => {
            item.classList.add("active");
        });

        document.querySelector(".woocommerce-tabs #tab-description").style.display = "none";
        document.querySelector(".woocommerce-tabs #tab-reviews").style.display = "block";

        DOM.html.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
        });

        DOM.body.scrollTo({
            top: jQuery(this.hash).offset().top - 120,
            behavior: "smooth",
        });
    };
}

export default WooReviewScroll;
