import { options } from "../constants";

export default class Select {
  #elements;
  #select;

  constructor() {
    this.#setElements();
    this.#render();
    this.#setupEventListeners();
  }

  #setElements = () => {
    this.#elements = {
      selectTags: document.querySelectorAll(options.customSelects),
    };
  };

  #render = () => {
    this.#elements.selectTags.forEach((select) => {
      this.#select = select;

      this.#select.insertAdjacentHTML(
        "afterend",
        `<span class="theme-select ${this.#select.classList}">
            <span class="theme-selectInner">
                ${this.#select.options[this.#select.selectedIndex].text}
            </span>
        </span>`
      );

      this.#select.classList.add("hasCustomSelect");

      this.#style();
      this.#setupEventListenersItem();
    });
  };

  #style = () => {
    this.#select.style.opacity = 0;
    this.#select.style.position = "absolute";
    this.#select.style.height = "34px";
    this.#select.style.fontSize = "13px";
    this.#select.style.appearance = "menulist-button";
    this.#select.nextSibling.style.display = "inline-block";
    this.#select.nextSibling.firstElementChild.style.display = "inline-block";
  };

  #setupEventListenersItem = () => {
    this.#select.addEventListener("mouseenter", this.#onMouseenter);
    this.#select.addEventListener("mouseleave", this.#onMouseleave);
    this.#select.addEventListener("change", this.onChange);
  };

  #onMouseenter = (event) => {
    const select = event.currentTarget;

    select.classList.add("theme-selectHover");
  };

  #onMouseleave = (event) => {
    const select = event.currentTarget;

    select.classList.remove("theme-selectHover");
  };

  onChange = (event) => {
    const select = event.currentTarget;

    select.nextSibling.innerHTML = select.options[select.selectedIndex].text;
  };

  #setupEventListeners = () => {
    document.addEventListener("DOMContentLoaded", this.#onDocumentReady);
    window.addEventListener("resize", this.#onDocumentReady);
  };

  #onDocumentReady = (event) => {
    this.#elements.selectTags.forEach((select) => {
      select.style.width = select.nextSibling.offsetWidth + "px";
    });
  };
}

("use script");
window.oceanwp = window.oceanwp || {};
oceanwp.select = new Select();
