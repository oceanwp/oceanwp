import WooGuestAccountPage from "./custom-features/woo-guest-account-page";
import WooGridList from "./custom-features/woo-grid-list";
import WooQuantityButtons from "./custom-features/woo-quantity-buttons";
import WooReviewScroll from "./custom-features/woo-review-scroll";
import WooWidgets from "./custom-features/woo-widgets";

class WooCustomFeatures {
    start = () => {
        this.guestAccountPage = new WooGuestAccountPage();
        this.quantityButtons = new WooQuantityButtons();
        // this.gridList = new WooGridList();
        // this.reviewScroll = new WooReviewScroll();
        // this.widgets = new WooWidgets();
    };
}

const wooCustomFeatures = new WooCustomFeatures();
wooCustomFeatures.start();
