import { DOM, options } from "../../constants";
import { fadeIn, fadeOut, slideDown, slideUp, visible } from "../../lib/utils";

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

        DOM.woo.formActions
            .querySelector(".button.prev")
            .addEventListener("click", this.#onNavigationBtnClick);

        DOM.woo.formActions
            .querySelector(".button.next")
            .addEventListener("click", this.#onNavigationBtnClick);
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

    #onNavigationBtnClick = (event) => {
        const btn = event.currentTarget;
        const nextBtn = DOM.woo.formActions.querySelector(".button.next");
        const prevBtn = DOM.woo.formActions.querySelector(".button.prev");
        const action = btn.getAttribute("data-action");
        let currentStep = DOM.woo.formActions.getAttribute("data-step");
        let nextStep = ++currentStep;
        let prevStep = --currentStep;
        const isLoggedIn = options.is_logged_in;

        DOM.woo.checkoutTimeline.querySelectorAll(".active").forEach((activeItem) => {
            activeItem.classList.remove("active");
        });

        if (action === "next") {
            DOM.formActions.setAttribute("data-step", nextStep);

            fadeOut(this.#setps[currentStep], null, () => {
                fadeIn(this.#steps[nextStep]);
            });

            document.querySelector(`#timeline-${nextStep}`).classList.toggle("active");
        } else if (action === "prev") {
            DOM.formActions.setAttribute("data-step", prevStep);

            fadeOut(this.#setps[currentStep], null, () => {
                fadeIn(this.#steps[prevStep]);
            });
        }

        currentStep = DOM.woo.formActions.getAttribute("data-step");

        if (
            (isLoggedIn === true && currentStep === 1) ||
            (isLoggedIn === false &&
                ((currentStep === 0 && options.login_reminder_enabled === 1) ||
                    (currentStep === 1 && options.login_reminder_enabled === 0)))
        ) {
            fadeOut(prevBtn);
        } else {
            fadeIn(prevBtn);
        }

        // Next title
        if (
            isLoggedIn === false &&
            ((currentStep === 0 && options.login_reminder_enabled === 1) ||
                (currentStep === 1 && options.login_reminder_enabled === 0))
        ) {
            nextBtn.value = options.no_account_btn;
        } else {
            nextBtn.value = options.next;
        }

        // Last step
        if (currentStep === 3) {
            DOM.woo.checkoutForm.classList.remove("processing");
            fadeIn(DOM.woo.checkoutCoupon);
            fadeOut(nextBtn);
        } else {
            DOM.woo.checkoutForm.classList.add("processing");
            fadeOut(DOM.woo.checkoutCoupon);
            fadeIn(nextBtn);
        }
    };
}

new WooMultiStepCheckout();
