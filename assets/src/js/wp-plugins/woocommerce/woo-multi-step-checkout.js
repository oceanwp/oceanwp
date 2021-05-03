import { DOM } from "../../constants";
import { slideDown, slideUp, visible } from "../../lib/utils";

class WooMultiStepCheckout {
    #steps;

    constructor() {
        this.#start();
        this.#setupEventListeners();
    }

    #start = () => {
        this.#steps = [
            DOM.woo.checkoutLogin,
            DOM.woo.customerBillingDetails,
            DOM.woo.customerShippingDetails,
            DOM.woo.orderReview,
            DOM.woo.orderCheckoutPayment,
        ];
    };

    #setupEventListeners = () => {
        jQuery(DOM.body).on("updated_checkout", this.#updateCheckout);
    };

    #updateCheckout = (event) => {
        DOM.woo.orderCheckoutPayment
            .querySelector("input[name=payment_method]")
            .addEventListener("click", this.#onPaymentMethodBtnClick);
    };

    #onPaymentMethodBtnClick = (event) => {
        const paymentMethodBtn = event.currentTarget;
        const radioInputs = document.querySelectorAll(".payment_methods input.input-radio");

        if (radioInputs.length > 1) {
            const paymentBox = document.querySelector(`.payment_box.${paymentMethodBtn.getAttribute("id")}`);

            if (paymentMethodBtn.checked === true && visible(paymentBox)) {
                document.querySelectorAll(".payment_box").forEach((_paymentBox) => {
                    if (visible(_paymentBox)) {
                        slideUp(_paymentBox, 250);
                    }
                });

                slideDown(document.querySelector(paymentBox), 250);
            } else {
                document.querySelectorAll(".payment_box").forEach((_paymentBox) => {
                    _paymentBox.style.display = "block";
                });
            }

            if (paymentMethodBtn.getAttribute("data-order_button_text")) {
                DOM.woo.placeOrder.value = paymentMethodBtn.getAttribute("data-order_button_text");
            } else {
                DOM.woo.placeOrder.value = DOM.woo.placeOrder.getAttribute("data-value");
            }
        }
    };
}

new WooMultiStepCheckout();
