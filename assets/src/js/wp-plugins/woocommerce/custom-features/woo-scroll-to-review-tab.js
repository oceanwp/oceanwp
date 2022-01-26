import { DOM } from "../../../constants";
import { offset } from "../../../lib/utils";

class WooScrollToReviewTab {
    constructor() {
        if (!!DOM.woo.productCustomerReviewLink) {
            this.#setupEventListeners();
        }
    }

    #setupEventListeners = () => {
        DOM.woo.productCustomerReviewLink.addEventListener("click", this.#onCustomerReviewLinkClick);
    };

    #onCustomerReviewLinkClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (!!DOM.woo.productTabs.querySelector(".description_tab")) {
            DOM.woo.productTabs.querySelector(".description_tab").classList.remove("active");
            DOM.woo.productTabs.querySelector("#tab-description").style.display = "none";
        }

        if (DOM.woo.productTabs.querySelector(".additional_information_tab")) {
            DOM.woo.productTabs.querySelector(".additional_information_tab").classList.remove("active");
            DOM.woo.productTabs.querySelector("#tab-additional_information").style.display = "none";
        }

        DOM.woo.productTabs.querySelector(".reviews_tab").classList.add("active");
        DOM.woo.productTabs.querySelector("#tab-reviews").style.display = "block";

        const reviewTabPositionTop = offset(document.querySelector(event.currentTarget.hash)).top;

        DOM.html.scrollTo({
            top: reviewTabPositionTop - 120,
            behavior: "smooth",
        });
    };
}

export default WooScrollToReviewTab;
