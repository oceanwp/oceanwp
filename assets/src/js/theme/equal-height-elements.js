import ResponsiveAutoHeight from "responsive-auto-height";

class EqualHeightElements {
  #executed = false;

  constructor() {
    if (window.innerWidth > 768) {
      this.start();
    }

    window.addEventListener("resize", (event) => {
      if (window.innerWidth > 768 && !this.#executed) {
        this.start();
      }
    });
  }

  start = () => {
    if (!!document.querySelector(".blog-equal-heights .blog-entry-inner")) {
      new ResponsiveAutoHeight(".blog-equal-heights .blog-entry-inner");
    }

    if (!!document.querySelector(".match-height-grid .match-height-content")) {
      new ResponsiveAutoHeight(".match-height-grid .match-height-content");
    }

    this.#executed = true;
  };
}

("use script");
window.oceanwp = window.oceanwp || {};
oceanwp.equalHeightElements = new EqualHeightElements();
