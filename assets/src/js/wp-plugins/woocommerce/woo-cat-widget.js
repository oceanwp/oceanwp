import { slideDown, slideUp } from "../../lib/utils";

class WooCatWidget {
  #elements;

  constructor() {
    this.#setElements();
    this.#start();
  }

  #setElements = () => {
    this.#elements = {
      categories: document.querySelectorAll(
        ".woo-dropdown-cat .product-categories"
      ),
    };
  };

  #start = () => {
    this.#elements.categories.forEach((category) => {
      const angleDownIcon = '<i class="fa fa-angle-down"></i>';
      const angleUpIcon = '<i class="fa fa-angle-up"></i>';

      category.querySelectorAll("li").forEach((li) => {
        const hasChildrenElem =
          Array.from(li.querySelectorAll(".children")).length !== 0;
        const hasListElem = Array.from(li.querySelectorAll("li")).length !== 0;

        if (hasChildrenElem && hasListElem) {
          li.insertAdjacentHTML(
            "afterbegin",
            `<div class="open-this">${angleDownIcon}</div>`
          );
        }
      });

      category.querySelectorAll(".open-this")?.forEach((item) => {
        item.addEventListener("click", (event) => {
          const parentItem = item.parentNode;
          const parentItemChildren = parentItem.children;

          if (parentItem.classList.contains("opened")) {
            item.innerHTML = angleDownIcon;
            parentItem.classList.remove("opened");

            for (let i = 0; i < parentItemChildren.length; i++) {
              const element = parentItemChildren[i];

              if (element.nodeName.toLowerCase() === "ul") {
                slideUp(element, 250);
              }
            }
          } else {
            item.innerHTML = angleUpIcon;
            parentItem.classList.add("opened");

            for (let i = 0; i < parentItemChildren.length; i++) {
              const element = parentItemChildren[i];

              if (element.nodeName.toLowerCase() === "ul") {
                slideDown(element, 250);
              }
            }
          }
        });
      });
    });
  };
}

new WooCatWidget();
