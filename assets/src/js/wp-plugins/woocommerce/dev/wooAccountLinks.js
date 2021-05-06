import { DOM } from "../../../constants";

class WooAccountLinks {
    #loginBtn;
    #registerBtn;

    constructor() {
        // Return if registration disabled
        if (DOM.woo.accountLinks.classList.contains("registration-disabled")) {
            return;
        }

        this.#start();
        this.#setupEventListeners();
    }

    #start = () => {
        this.#loginBtn = DOM.woo.accountLinks.querySelector(".login a");
        this.#registerBtn = DOM.woo.accountLinks.querySelector(".register a");
    };

    #setupEventListeners = () => {
        this.#loginBtn.addEventLisntener("click", this.#onLoginBtnClick);
        this.#registerBtn.addEventLisntener("click", this.#onRegisterBtnClick);
    };

    #onLoginBtnClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const loginColOne = DOM.woo.customerLogin.querySelector(".col-1");
        const loginColOneSiblings = getSiblings(loginColOne);

        this.#loginBtn.classList.add("current");
        this.#registerBtn.classList.remove("current");

        fadeOut(loginColOneSiblings, null, () => {
            fadeIn(loginColOne);
        });
    };

    #onRegisterBtnClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const loginColTwo = DOM.woo.customerLogin.querySelector(".col-2");
        const loginColTwoSiblings = getSiblings(loginColTwo);

        this.#registerBtn.classList.add("current");
        this.#loginBtn.classList.remove("current");

        fadeOut(loginColTwoSiblings, null, () => {
            fadeIn(loginColTwo);
        });
    };
}

new WooAccountLinks();
