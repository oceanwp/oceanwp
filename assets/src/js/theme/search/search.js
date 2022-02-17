class Search {
  #elements;
  mobileOverlayInput;

  constructor() {
    this.#setElements();
    this.#start();
    this.#setupEventListeners();
  }

  #setElements = () => {
    this.#elements = {
      forms: document.querySelectorAll("form.header-searchform"),
    };
  };

  #start = () => {
    this.mobileOverlayInput = document.querySelector(
      ".mobile-search-overlay-input"
    );

    this.#elements.forms.forEach((form) => {
      if (form.querySelector("input")?.value) {
        form.classList.add("search-filled");
      }
    });

    if (!!this.mobileOverlayInput?.value) {
      this.mobileOverlayInput.closest("form").classList.add("search-filled");
    }
  };

  #setupEventListeners = () => {
    this.#elements.forms.forEach((form) => {
      form
        .querySelector("input")
        ?.addEventListener("keyup", this.#onInputKeyup);
      form.querySelector("input")?.addEventListener("blur", this.#onInputKeyup);
    });

    this.mobileOverlayInput?.addEventListener("keyup", this.#onInputKeyup);
    this.mobileOverlayInput?.addEventListener("blur", this.#onInputKeyup);
  };

  #onInputKeyup = (event) => {
    const input = event.currentTarget;
    const form = input.closest("form");

    if (input.value) {
      form.classList.add("search-filled");
    } else {
      form.classList.remove("search-filled");
    }
  };
}

export default Search;
