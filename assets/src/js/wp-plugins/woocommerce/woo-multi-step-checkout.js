import { options } from "../../constants";
import { fadeIn, fadeOut, slideDown, slideUp, visible } from "../../lib/utils";

class WooMultiStepCheckout {
  #elements;
  #steps;

  constructor() {
    this.#setElements();
    this.#start();
    this.#setupEventListeners();
  }

  #setElements = () => {
    this.#elements = {
      checkoutLogin: document.querySelector("#checkout_login"),
      customerBillingDetails: document.querySelector(
        "#customer_billing_details"
      ),
      customerShippingDetails: document.querySelector(
        "#customer_shipping_details"
      ),
      orderReview: document.querySelector("#order_review"),
      orderCheckoutPayment: document.querySelector("#order_checkout_payment"),
      body: document.body,
      formActions: document.querySelector("#form_actions"),
      placeOrder: document.querySelector("#place_order"),
      checkoutTimeline: document.querySelector("#owp-checkout-timeline"),
      checkoutForm: document.querySelector("form.woocommerce-checkout"),
      checkoutCoupon: document.querySelector("#checkout_coupon"),
    };
  };

  #start = () => {
    this.#steps = [
      this.#elements.checkoutLogin,
      this.#elements.customerBillingDetails,
      this.#elements.customerShippingDetails,
      this.#elements.orderReview,
      this.#elements.orderCheckoutPayment,
    ];
  };

  #setupEventListeners = () => {
    /**
     * Because Woocommerce plugin uses jQuery custom event,
     * We also have to use jQuery to customize this event
     */
    jQuery(this.#elements.body).on("updated_checkout", this.#updateCheckout);

    this.#elements.formActions
      ?.querySelector(".button.prev")
      ?.addEventListener("click", this.#onNavigationBtnClick);

    this.#elements.formActions
      ?.querySelector(".button.next")
      ?.addEventListener("click", this.#onNavigationBtnClick);
  };

  #updateCheckout = (event) => {
    this.#elements.orderCheckoutPayment
      ?.querySelectorAll("input[name=payment_method]")
      ?.forEach((paymentMethod) => {
        paymentMethod.addEventListener("click", this.#onPaymentMethodBtnClick);
      });
  };

  #onPaymentMethodBtnClick = (event) => {
    const paymentMethodBtn = event.target;
    const radioInputs = document.querySelectorAll(
      ".payment_methods input.input-radio"
    );

    if (radioInputs.length > 1) {
      const paymentBox = document.querySelector(
        `.payment_box.${paymentMethodBtn.getAttribute("id")}`
      );

      if (paymentMethodBtn.checked === true && !visible(paymentBox)) {
        document.querySelectorAll(".payment_box").forEach((_paymentBox) => {
          if (visible(_paymentBox)) {
            setTimeout(() => {
              slideUp(_paymentBox, 250);
            }, 250);
          }
        });

        slideDown(paymentBox, 250);
      } else {
        document.querySelectorAll(".payment_box").forEach((_paymentBox) => {
          _paymentBox.style.display = "block";
        });
      }

      if (paymentMethodBtn.getAttribute("data-order_button_text")) {
        this.#elements.placeOrder.value = paymentMethodBtn.getAttribute(
          "data-order_button_text"
        );
      } else {
        this.#elements.placeOrder.value =
          this.#elements.placeOrder.getAttribute("data-value");
      }
    }
  };

  #onNavigationBtnClick = (event) => {
    event.preventDefault();

    const btn = event.currentTarget;
    const nextBtn = this.#elements.formActions.querySelector(".button.next");
    const prevBtn = this.#elements.formActions.querySelector(".button.prev");
    const action = btn.getAttribute("data-action");
    let currentStep = Number.parseInt(
      this.#elements.formActions.getAttribute("data-step")
    );
    let nextStep = currentStep + 1;
    let prevStep = currentStep - 1;
    const isLoggedIn = options.is_logged_in;

    if (!this.#formValidate(this.#steps[currentStep])) return;

    this.#elements.checkoutTimeline
      .querySelectorAll(".active")
      .forEach((activeItem) => {
        activeItem.classList.remove("active");
      });

    if (action === "next") {
      this.#elements.formActions.setAttribute("data-step", nextStep);

      fadeOut(this.#steps[currentStep], {
        display: "inline-block",
        callback: () => {
          fadeIn(this.#steps[nextStep]);
        },
      });

      document
        .querySelector(`#timeline-${nextStep}`)
        .classList.toggle("active");
      document
        .querySelector(`#timeline-${nextStep}`)
        .scrollIntoView();
    } else if (action === "prev") {
      this.#elements.formActions.setAttribute("data-step", prevStep);

      fadeOut(this.#steps[currentStep], {
        display: "inline-block",
        callback: () => {
          fadeIn(this.#steps[prevStep]);
        },
      });

      document
        .querySelector(`#timeline-${prevStep}`)
        .classList.toggle("active");
      document
        .querySelector(`#timeline-${prevStep}`)
        .scrollIntoView();
    }

    currentStep = this.#elements.formActions.getAttribute("data-step");

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
      this.#elements.checkoutForm.classList.remove("processing");
      fadeIn(this.#elements.checkoutCoupon);
      fadeOut(nextBtn, {
        display: "inline-block",
      });
    } else {
      this.#elements.checkoutForm.classList.add("processing");
      fadeOut(this.#elements.checkoutCoupon);
      fadeIn(nextBtn, {
        display: "inline-block",
      });
    }
  };

  #formValidate(section) {
    const invalidRows = Array.from(
      section.querySelectorAll(".validate-required")
    ).filter(
      (row) =>
        this.#isVisible(row) &&
        "input, select, textarea".split(", ").find((selector) => {
          const input = row.querySelector(selector);
          if (input) return input.value.trim() === "";
        })
    );

    let billingEmailRow = '';
    let emailValue      = '';

    if ( section.querySelector(".validate-email") !== null ) {
      billingEmailRow = section.querySelector(".validate-email");
    }

    if ( billingEmailRow ) {
      emailValue = billingEmailRow.querySelector("#billing_email").value;
    }

    if ( emailValue && billingEmailRow ) {
      if ( this.#validateEmail( emailValue )) {
        billingEmailRow.classList.remove("ow-invalid");
      } else {
        invalidRows.push( billingEmailRow );
        billingEmailRow.classList.add("ow-invalid");
      }
    }

    const isValid = invalidRows.length === 0;

    section.querySelectorAll(".ow-invalid").forEach((row) => {
      row.classList.remove("ow-invalid");
    });

    if (!isValid) {
      invalidRows.forEach((invalidRow) => {
        invalidRow.classList.add("ow-invalid");
      });
    }

    return isValid;
  }

  #validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  #isVisible(element) {
    return !!(
      element.offsetWidth ||
      element.offsetHeight ||
      element.getClientRects().length
    );
  }
}

new WooMultiStepCheckout();
