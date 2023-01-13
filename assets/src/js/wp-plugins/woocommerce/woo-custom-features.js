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

        jQuery("body").on("removed_from_cart", (e, fragments, cart_hash, $btn) => {
            const productId = $btn.data('product_id');
            if( productId ) {
                const selector = `.button.add_to_cart_button.ajax_add_to_cart.added[data-product_id="${productId}"]`;
                if( jQuery(selector).length ) {
                    jQuery(selector).each((index, element) => {
                        jQuery(element).removeClass('added');
                        if(jQuery(element).next('a.added_to_cart').length) {
                            jQuery(element).next('a.added_to_cart').remove();
                        }
                    });
                }
            }
        });
    };
}

window.oceanwpWooCustomFeatures = new WooCustomFeatures();
oceanwpWooCustomFeatures.start();
