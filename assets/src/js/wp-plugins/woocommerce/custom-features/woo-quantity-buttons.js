import delegate from "delegate";
import { DOM, options } from "../../../constants";

class WooQuantityButtons {
    #changeEvent;

    constructor() {
        if (!!DOM.woo.quantityInputs) {
            this.#start();
            this.#setupEventListeners();
        }
    }

    #start = () => {
        DOM.woo.quantityInputs.forEach((quantityInput) => {
            const inputType = quantityInput.getAttribute("type");

            if (!(inputType === "date" || inputType === "hidden")) {
                // Add minus icon
                quantityInput.insertAdjacentHTML(
                    "beforebegin",
                    '<a href="javascript:void(0)" class="minus">-</a>'
                );

                // Add plus icon
                quantityInput.insertAdjacentHTML(
                    "afterend",
                    '<a href="javascript:void(0)" class="plus">+</a>'
                );
            }
        });

        // Check quantity bigger than min
        document.querySelectorAll("input.qty:not(.product-quantity input.qty)").forEach((quantityInput) => {
            const min = parseFloat(quantityInput.getAttribute("min"));
            const currentValue = parseFloat(quantityInput.value);

            if (min && min > 0 && currentValue < min) {
                quantityInput.value = min;
            }
        });

        // Create a new 'change' event
        this.#changeEvent = new Event("change");
    };

    #setupEventListeners = () => {
        // Update floating bar quantity
        if (
            DOM.body.classList.contains("single-product") &&
            options.floating_bar === "on" &&
            !Array.from(DOM.woo.productCarts).some(({ classList }) =>
                classList.contains("grouped_form cart_group")
            )
        ) {
            DOM.woo.quantityInputs.forEach((quantityInput) => {
                quantityInput.addEventListener("keyup", this.#onQuantityInputKeyup);
            });
        }

        delegate(DOM.body, ".cart .minus, .cart .plus", "click", this.#onQuantityBtnClick);
    };

    #onQuantityInputKeyup = (event) => {
        const currentQuantityInput = event.target;
        const inputType = currentQuantityInput.getAttribute("type");

        if (!(inputType === "date" || inputType === "hidden")) {
            DOM.woo.quantityInputs.forEach((quantityInput) => {
                quantityInput.value = currentQuantityInput.value;
            });
        }
    };

    #onQuantityBtnClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const quantityBtn = event.delegateTarget;
        const quantityInput = quantityBtn.closest(".quantity").querySelector(".qty");

        const currentValue = parseFloat(quantityInput.value);
        const min = parseFloat(quantityInput.getAttribute("min"));
        const max = parseFloat(quantityInput.getAttribute("max"));
        const step = quantityInput.getAttribute("step");

        // Fallback default values
        if (!currentValue || currentValue === "" || Number.isNaN(currentValue)) {
            currentValue = 0;
        }

        if (max === "" || Number.isNaN(max)) {
            max = "";
        }

        if (min === "" || Number.isNaN(min)) {
            min = 0;
        }

        if (step === undefined || step === "" || step === "any" || Number.isNaN(parseFloat(step))) {
            step = 1;
        }

        // Plus button
        if (quantityBtn.classList.contains("plus")) {
            if (max && (currentValue === max || currentValue > max)) {
                DOM.woo.quantityInputs.forEach((_quantityInput) => {
                    _quantityInput.value = max;
                });
            } else {
                DOM.woo.quantityInputs.forEach((_quantityInput) => {
                    _quantityInput.value = currentValue + parseFloat(step);
                });
            }

            // Minus button
        } else {
            if (min && (currentValue === min || currentValue < min)) {
                DOM.woo.quantityInputs.forEach((_quantityInput) => {
                    _quantityInput.value = min;
                });
            } else if (currentValue > 0) {
                DOM.woo.quantityInputs.forEach((_quantityInput) => {
                    _quantityInput.value = currentValue - parseFloat(step);
                });
            }
        }

        // Trigger change event
        DOM.woo.quantityInputs.forEach((_quantityInput) => {
            _quantityInput.dispatchEvent(this.#changeEvent);
        });
    };
}

export default WooQuantityButtons;
