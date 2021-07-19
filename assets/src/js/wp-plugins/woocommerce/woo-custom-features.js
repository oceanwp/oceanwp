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
    };
}

window.oceanwpWooCustomFeatures = new WooCustomFeatures();
oceanwpWooCustomFeatures.start();
