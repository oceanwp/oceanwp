import delegate from "delegate";
import { DOM, options } from "../../../constants";

class WooQuantityButtons {
    #changeEvent;
    #firstTimeRunning;

    constructor() {
        this.#firstTimeRunning = true;

        this.start();
        this.#setupEventListeners();
    }

    start = () => {
        const quantityInputs = document.querySelectorAll(
            ".quantity:not(.buttons_added) .qty"
        );

        if (!!quantityInputs) {
            quantityInputs.forEach(quantityInput => {
                const inputType = quantityInput.getAttribute("type");

                if (!(inputType === "date" || inputType === "hidden")) {
                    // Add minus icon
                    if (
                        !quantityInput.previousElementSibling?.classList.contains(
                            "minus"
                        )
                    ) {
                        quantityInput.insertAdjacentHTML(
                            "beforebegin",
                            '<a href="javascript:void(0)" class="minus">-</a>'
                        );
                    }

                    // Add plus icon
                    if (
                        !quantityInput.nextElementSibling?.classList.contains(
                            "plus"
                        )
                    ) {
                        quantityInput.insertAdjacentHTML(
                            "afterend",
                            '<a href="javascript:void(0)" class="plus">+</a>'
                        );
                    }
                }
            });

            // Check quantity bigger than min
            document
                .querySelectorAll("input.qty:not(.product-quantity input.qty)")
                .forEach(quantityInput => {
                    const min = parseFloat(quantityInput.getAttribute("min"));
                    const currentValue = parseFloat(quantityInput.value);

                    if (min && min > 0 && currentValue < min) {
                        quantityInput.value = min;
                    }
                });

            if (this.#firstTimeRunning) {
                // Create a new 'change' event
                this.#changeEvent = new Event("change", { bubbles: true });
            }
        }
    };

    #setupEventListeners = () => {
        const quantityInputs = document.querySelectorAll(
            ".quantity:not(.buttons_added) .qty"
        );

        // Update floating bar quantity
        if (!!quantityInputs) {
            if (
                DOM.body.classList.contains("single-product") &&
                options.floating_bar === "on" &&
                !Array.from(DOM.woo.productCarts).some(
                    ({ classList }) =>
                        classList.contains("grouped_form") ||
                        classList.contains("cart_group")
                )
            ) {
                quantityInputs.forEach(quantityInput => {
                    quantityInput.addEventListener(
                        "keyup",
                        this.#onQuantityInputKeyup
                    );
                    quantityInput.addEventListener(
                        "change",
                        this.#onQuantityInputKeyup
                    );
                });
            }
        }

        delegate(
            DOM.body,
            ".cart .minus, .cart .plus, .tinv-wishlist .minus, .tinv-wishlist .plus, .quantity .minus, .quantity .plus",
            "click",
            this.#onQuantityBtnClick
        );
    };

    #onQuantityInputKeyup = event => {
        const currentQuantityInput = event.target;

        const inputType = currentQuantityInput.getAttribute("type");
        const quantityInputs = document.querySelectorAll(
            ".quantity:not(.buttons_added) .qty"
        );

        if (!(inputType === "date" || inputType === "hidden")) {
            quantityInputs.forEach(quantityInput => {
                quantityInput.value = currentQuantityInput.value;
            });
        }
    };

    #onQuantityBtnClick = event => {
        event.preventDefault();
        event.stopPropagation();

        const quantityBtn = event.delegateTarget;
        const quantityInput = quantityBtn
            .closest(".quantity")
            .querySelector(".qty");

        let currentValue = parseFloat(quantityInput.value);
        let min = parseFloat(quantityInput.getAttribute("min"));
        let max = parseFloat(quantityInput.getAttribute("max"));
        let step = quantityInput.getAttribute("step");

        // Fallback default values
        if (
            !currentValue ||
            currentValue === "" ||
            Number.isNaN(currentValue)
        ) {
            currentValue = 0;
        }

        if (max === "" || Number.isNaN(max)) {
            max = "";
        }

        if (min === "" || Number.isNaN(min)) {
            min = 0;
        }

        if (
            step === undefined ||
            step === "" ||
            step === "any" ||
            Number.isNaN(parseFloat(step))
        ) {
            step = 1;
        }

        // Plus button
        if (quantityBtn.classList.contains("plus")) {
            if (max && (currentValue === max || currentValue > max)) {
                quantityInput.value = max;
            } else {
                quantityInput.value = currentValue + parseFloat(step);
            }

            // Minus button
        } else {
            if (min && (currentValue === min || currentValue < min)) {
                quantityInput.value = min;
            } else if (currentValue > 0) {
                quantityInput.value = currentValue - parseFloat(step);
            }
        }

        if (
            !!quantityBtn.closest("form")?.querySelector(".add_to_cart_button")
        ) {
            quantityBtn
                .closest("form")
                .querySelector(".add_to_cart_button").dataset.quantity =
                quantityInput.value;
        }

        if (
            !!quantityBtn.closest(".cart")?.querySelector(".add_to_cart_button")
        ) {
            quantityBtn
                .closest(".cart")
                .querySelector(".add_to_cart_button").dataset.quantity =
                quantityInput.value;
        }

        // Trigger change event
        quantityInput.dispatchEvent(this.#changeEvent);
    };
}

export default WooQuantityButtons;
