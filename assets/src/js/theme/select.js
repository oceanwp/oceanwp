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

      const optionText = this.#select.options[this.#select.selectedIndex].text;
      const themeSelectInner = document.createElement('span');
      themeSelectInner.classList.add('theme-selectInner');
      themeSelectInner.textContent = optionText;

      const themeSelect = document.createElement('span');
      themeSelect.classList.add('theme-select');
      themeSelect.appendChild(themeSelectInner);

      this.#select.classList.forEach(clsCustomSelect => {
        if (clsCustomSelect !== "hasCustomSelect") {
            themeSelect.classList.add(clsCustomSelect);
        }
      });

      this.#select.insertAdjacentElement('afterend', themeSelect);

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

    //select.nextSibling.innerHTML = select.options[select.selectedIndex].text;

    if (select.nextSibling && select.nextSibling.firstElementChild) {
      select.nextSibling.firstElementChild.textContent = select.options[select.selectedIndex].text;
    }
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
