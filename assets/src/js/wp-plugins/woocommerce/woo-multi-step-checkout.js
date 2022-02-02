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
        /**
         * Because Woocommerce plugin uses jQuery custom event,
         * We also have to use jQuery to customize this event
         */
        jQuery(DOM.body).on("updated_checkout", this.#updateCheckout);

        DOM.woo.formActions
            ?.querySelector(".button.prev")
            ?.addEventListener("click", this.#onNavigationBtnClick);

        DOM.woo.formActions
            ?.querySelector(".button.next")
            ?.addEventListener("click", this.#onNavigationBtnClick);
    };

    #updateCheckout = event => {
        DOM.woo.orderCheckoutPayment
            ?.querySelectorAll("input[name=payment_method]")
            ?.forEach(paymentMethod => {
                paymentMethod.addEventListener(
                    "click",
                    this.#onPaymentMethodBtnClick
                );
            });
    };

    #onPaymentMethodBtnClick = event => {
        const paymentMethodBtn = event.target;
        const radioInputs = document.querySelectorAll(
            ".payment_methods input.input-radio"
        );

        if (radioInputs.length > 1) {
            const paymentBox = document.querySelector(
                `.payment_box.${paymentMethodBtn.getAttribute("id")}`
            );

            if (paymentMethodBtn.checked === true && !visible(paymentBox)) {
                document
                    .querySelectorAll(".payment_box")
                    .forEach(_paymentBox => {
                        if (visible(_paymentBox)) {
                            setTimeout(() => {
                                slideUp(_paymentBox, 250);
                            }, 250);
                        }
                    });

                slideDown(paymentBox, 250);
            } else {
                document
                    .querySelectorAll(".payment_box")
                    .forEach(_paymentBox => {
                        _paymentBox.style.display = "block";
                    });
            }

            if (paymentMethodBtn.getAttribute("data-order_button_text")) {
                DOM.woo.placeOrder.value = paymentMethodBtn.getAttribute(
                    "data-order_button_text"
                );
            } else {
                DOM.woo.placeOrder.value =
                    DOM.woo.placeOrder.getAttribute("data-value");
            }
        }
    };

    #onNavigationBtnClick = event => {
        event.preventDefault();

        const btn = event.currentTarget;
        const nextBtn = DOM.woo.formActions.querySelector(".button.next");
        const prevBtn = DOM.woo.formActions.querySelector(".button.prev");
        const action = btn.getAttribute("data-action");
        let currentStep = Number.parseInt(
            DOM.woo.formActions.getAttribute("data-step")
        );
        let nextStep = currentStep + 1;
        let prevStep = currentStep - 1;
        const isLoggedIn = options.is_logged_in;

        if (!this.#formValidate(this.#steps[currentStep])) return;

        DOM.woo.checkoutTimeline
            .querySelectorAll(".active")
            .forEach(activeItem => {
                activeItem.classList.remove("active");
            });

        if (action === "next") {
            DOM.woo.formActions.setAttribute("data-step", nextStep);

            fadeOut(this.#steps[currentStep], {
                display: "inline-block",
                callback: () => {
                    fadeIn(this.#steps[nextStep]);
                },
            });

            document
                .querySelector(`#timeline-${nextStep}`)
                .classList.toggle("active");
        } else if (action === "prev") {
            DOM.woo.formActions.setAttribute("data-step", prevStep);

            fadeOut(this.#steps[currentStep], {
                display: "inline-block",
                callback: () => {
                    fadeIn(this.#steps[prevStep]);
                },
            });

            document
                .querySelector(`#timeline-${prevStep}`)
                .classList.toggle("active");
        }

        currentStep = DOM.woo.formActions.getAttribute("data-step");

        if (
            (isLoggedIn == true && currentStep == 1) ||
            (isLoggedIn == false &&
                ((currentStep == 0 && options.login_reminder_enabled === 1) ||
                    (currentStep == 1 && options.login_reminder_enabled === 0)))
        ) {
            fadeOut(prevBtn, {
                display: "inline-block",
            });
        } else {
            fadeIn(prevBtn, {
                display: "inline-block",
            });
        }

        // Next title
        if (
            isLoggedIn == false &&
            ((currentStep == 0 && options.login_reminder_enabled === 1) ||
                (currentStep == 1 && options.login_reminder_enabled === 0))
        ) {
            nextBtn.value = options.no_account_btn;
        } else {
            nextBtn.value = options.next;
        }

        // Last step
        if (currentStep == 3) {
            DOM.woo.checkoutForm.classList.remove("processing");
            fadeIn(DOM.woo.checkoutCoupon);
            fadeOut(nextBtn, {
                display: "inline-block",
            });
        } else {
            DOM.woo.checkoutForm.classList.add("processing");
            fadeOut(DOM.woo.checkoutCoupon);
            fadeIn(nextBtn, {
                display: "inline-block",
            });
        }
    };

    #formValidate(section) {
        const invalidRows = Array.from(
            section.querySelectorAll(".validate-required")
        ).filter(row =>
            "input, select, textarea".split(", ").find(selector => {
                const input = row.querySelector(selector);
                if (input) return input.value.trim() === "";
            })
        );
        const isValid = invalidRows.length === 0;

        section.querySelectorAll(".ow-invalid").forEach(row => {
            row.classList.remove("ow-invalid");
        });

        if (!isValid) {
            invalidRows.forEach(invalidRow => {
                invalidRow.classList.add("ow-invalid");
            });
        }

        return isValid;
    }
}

new WooMultiStepCheckout();
