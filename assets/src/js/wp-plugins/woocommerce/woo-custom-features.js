import WooResetVariations from "./custom-features/reset-variations";
import WooGridList from "./custom-features/woo-grid-list";
import WooGuestAccountPage from "./custom-features/woo-guest-account-page";
import WooQuantityButtons from "./custom-features/woo-quantity-buttons";
import WooScrollToReviewTab from "./custom-features/woo-scroll-to-review-tab";
import WooRemoveCategoriesCountParenthesis from "./custom-features/remove-categories-count-parenthesis";

class WooCustomFeatures {
    start = () => {
        this.resetVariations = new WooResetVariations();
        this.gridList = new WooGridList();
        this.guestAccountPage = new WooGuestAccountPage();
        this.quantityButtons = new WooQuantityButtons();
        this.reviewScroll = new WooScrollToReviewTab();
        this.widgets = new WooRemoveCategoriesCountParenthesis();

        /**
         * Because Woocommerce plugin uses jQuery custom event,
         * We also have to use jQuery to customize this event.
         */
        jQuery("body").on("updated_cart_totals", () => {
            this.quantityButtons.start();
        });

        jQuery( document ).on("append.infiniteScroll", () => {
            this.quantityButtons.start();
        });
    };
}

window.oceanwpWooCustomFeatures = new WooCustomFeatures();
oceanwpWooCustomFeatures.start();
