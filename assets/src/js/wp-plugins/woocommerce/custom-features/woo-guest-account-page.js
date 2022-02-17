import { fadeIn, fadeOut, getSiblings } from "../../../lib/utils";

class WooGuestAccountPage {
  #elements = {
    guestAccountPageNav: document.querySelector(".owp-account-links"),
  };
  #loginBtn;
  #registerBtn;
  #loginBox;
  #registerBox;

  constructor() {
    // Return if registration disabled
    if (
      this.#elements.guestAccountPageNav?.classList.contains(
        "registration-disabled"
      )
    ) {
      return;
    }

    this.#setElements();
    this.#start();
    this.#setupEventListeners();
  }

  #setElements = () => {
    this.#elements = {
      ...this.#elements,
      guestAccountPageBox: document.querySelector("#customer_login"),
    };
  };

  #start = () => {
    this.#loginBtn =
      this.#elements.guestAccountPageNav?.querySelector(".login a");
    this.#registerBtn =
      this.#elements.guestAccountPageNav?.querySelector(".register a");
    this.#loginBox =
      this.#elements.guestAccountPageBox?.querySelector(".col-1");
    this.#registerBox =
      this.#elements.guestAccountPageBox?.querySelector(".col-2");
  };

  #setupEventListeners = () => {
    this.#loginBtn?.addEventListener("click", this.#onLoginBtnClick);
    this.#registerBtn?.addEventListener("click", this.#onRegisterBtnClick);
  };

  #onLoginBtnClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.#loginBtn.classList.add("current");
    this.#registerBtn.classList.remove("current");

    fadeOut(this.#registerBox, {
      callback: () => {
        fadeIn(this.#loginBox);
      },
    });
  };

  #onRegisterBtnClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.#registerBtn.classList.add("current");
    this.#loginBtn.classList.remove("current");

    fadeOut(this.#loginBox, {
      callback: () => {
        fadeIn(this.#registerBox);
      },
    });
  };
}

export default WooGuestAccountPage;
