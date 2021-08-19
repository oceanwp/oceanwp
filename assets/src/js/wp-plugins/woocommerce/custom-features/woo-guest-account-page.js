import { DOM } from "../../../constants";
import { fadeIn, fadeOut, getSiblings } from "../../../lib/utils";

class WooGuestAccountPage {
    #loginBtn;
    #registerBtn;
    #loginBox;
    #registerBox;

    constructor() {
        // Return if registration disabled
        if (DOM.woo.guestAccountPageNav?.classList.contains("registration-disabled")) {
            return;
        }

        this.#start();
        this.#setupEventListeners();
    }

    #start = () => {
        this.#loginBtn = DOM.woo.guestAccountPageNav?.querySelector(".login a");
        this.#registerBtn = DOM.woo.guestAccountPageNav?.querySelector(".register a");
        this.#loginBox = DOM.woo.guestAccountPageBox?.querySelector(".col-1");
        this.#registerBox = DOM.woo.guestAccountPageBox?.querySelector(".col-2");
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
