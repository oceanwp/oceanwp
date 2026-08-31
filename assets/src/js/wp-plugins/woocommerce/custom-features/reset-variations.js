class WooResetVariations {
  #elements = {
    resetVariations: document.querySelector(".reset_variations"),
  };

  constructor() {
    if (!!this.#elements.resetVariations) {
      this.#setupEventListeners();
    }
  }

  #setupEventListeners = () => {
    this.#elements.resetVariations.addEventListener("click", (event) => {
      const resetVariations = event.currentTarget;

      resetVariations
        .closest(".variations")
        .querySelectorAll("select")
        .forEach((select) => {
          setTimeout(() => {
            const customSelectLabel = select.nextElementSibling?.querySelector(
              ".theme-selectInner"
            );

            if (customSelectLabel) {
              customSelectLabel.textContent =
                select.options[select.selectedIndex]?.text || "";
            }
          }, 100);
        });
    });
  };
}

export default WooResetVariations;
