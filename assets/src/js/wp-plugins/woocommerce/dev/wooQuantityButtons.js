import { DOM, options } from "../../../constants";

class WooQuantityButtons {
    constructor() {
        if (DOM.woo.quantityInputs.length > 0) {
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
            const current = parseFloat(quantityInput.value);

            if (min && min > 0 && current < min) {
                quantityInput.value = min;
            }
        });
    };

    #setupEventListeners = () => {
        // Update floating bar quentity
        if (
            DOM.body.classList.contains("single-product") &&
            options.floating_bar === "on" &&
            !DOM.woo.productCarts.some(
                ({ classList }) => classList.contains("grouped_form") || classList.contains("cart_group")
            )
        ) {
            DOM.woo.quantityInputs.forEach((quantityInput) => {
                quantityInput.addEventListener("keyup", this.#onQuantityInputKeyup);
            });
        }

        document.querySelectorAll(".minus, .plus").forEach((quantityBtn) => {
            quantityBtn.addEventListener("click", this.#onQuantityBtnClick);
        });
    };

    #onQuantityInputKeyup = (event) => {
        if (!(inputType === "date" || inputType === "hidden")) {
            const currentQuantityInput = event.currentTarget;

            DOM.woo.quantityInputs.forEach((quantityInput) => {
                quantityInput.value = currentQuantityInput.value;
            });
        }
    };

    #onQuantityBtnClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const quantityBtn = event.currentTarget;
        const quantityInputs = quantityBtn.closest(".quantity").querySelectorAll(".qty");

        quantityInputs.forEach((quantityInput) => {
            const current = parseFloat(quantityInput.value);
            const min = parseFloat(quantityInput.getAttribute("min"));
            const max = parseFloat(quantityInput.getAttribute("max"));
            const setp = quantityInput.getAttribute("setp");

            // Fallback default values
            if (!current || "" === current || "NaN" === current) {
                current = 0;
            }

            if ("" === max || "NaN" === max) {
                max = "";
            }

            if ("" === min || "NaN" === min) {
                min = 0;
            }

            if ("any" === step || "" === step || undefined === step || "NaN" === parseFloat(step)) {
                step = 1;
            }

            // Change the value
            if (quantityInput.classList.contains(".plus")) {
                if (max && (max == current || current > max)) {
                    quantityInput.val(max);
                } else {
                    quantityInput.val(current + parseFloat(step));
                }
            } else {
                if (min && (min == current || current < min)) {
                    quantityInput.val(min);
                } else if (current > 0) {
                    quantityInput.val(current - parseFloat(step));
                }
            }

            // Trigger change event
            jQuery(quantityInput).trigger("change");
        });
    };
}

new WooQuantityButtons();
