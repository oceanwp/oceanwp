import { offset } from "../../../lib/utils";

class WooScrollToReviewTab {
  #elements = {
    productCustomerReviewLink: document.querySelector(
      ".woocommerce div.product .woocommerce-review-link"
    ),
  };

  constructor() {
    if (!!this.#elements.productCustomerReviewLink) {
      this.#setElements();
      this.#setupEventListeners();
    }
  }

  #setElements = () => {
    this.#elements = {
      ...this.#elements,
      productTabs: document.querySelector(
        ".woocommerce div.product .woocommerce-tabs"
      ),
      html: document.querySelector("html"),
    };
  };

  #setupEventListeners = () => {
    this.#elements.productCustomerReviewLink.addEventListener(
      "click",
      this.#onCustomerReviewLinkClick
    );
  };

  #onCustomerReviewLinkClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!!this.#elements.productTabs.querySelector(".description_tab")) {
      this.#elements.productTabs
        .querySelector(".description_tab")
        .classList.remove("active");
      this.#elements.productTabs.querySelector(
        "#tab-description"
      ).style.display = "none";
    }

    if (
      this.#elements.productTabs.querySelector(".additional_information_tab")
    ) {
      this.#elements.productTabs
        .querySelector(".additional_information_tab")
        .classList.remove("active");
      this.#elements.productTabs.querySelector(
        "#tab-additional_information"
      ).style.display = "none";
    }

    this.#elements.productTabs
      .querySelector(".reviews_tab")
      .classList.add("active");
    this.#elements.productTabs.querySelector("#tab-reviews").style.display =
      "block";

    const reviewTabPositionTop = offset(
      document.querySelector(event.currentTarget.hash)
    ).top;

    this.#elements.html.scrollTo({
      top: reviewTabPositionTop - 120,
      behavior: "smooth",
    });
  };
}

export default WooScrollToReviewTab;
