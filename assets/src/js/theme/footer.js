export default class Footer {
  #elements = {
    mainSection: document.querySelector("#main"),
  };
  #footerPositionState = null;

  constructor() {
    if (!this.#elements.mainSection) {
      return;
    }

    this.#setElements();
    this.#setupEventListeners();
  }

  #setElements = () => {
    this.#elements = {
      ...this.#elements,
      WPAdminbar: document.querySelector("#wpadminbar"),
      siteFooter: document.querySelector("#footer"),
      calloutFooter: document.querySelector("#footer-callout-wrap"),
      footerBar: document.querySelector("#footer-bar"),
      parallax: document.querySelector(".parallax-footer"),
      html: document.querySelector("html"),
      body: document.body,
      wrapSection: document.querySelector("#wrap"),
    };
  };

  #setupEventListeners = () => {
    window.addEventListener("load", this.#onWindowLoad);
    window.addEventListener("resize", this.#onWindowResize);
  };

  #onWindowLoad = (event) => {
    this.#fixedFooter();
    this.#parallaxFooter();
  };

  #onWindowResize = (event) => {
    this.#fixedFooter();
    this.#parallaxFooter();
  };

  #fixedFooter = () => {
    if (!document.body.classList.contains("has-fixed-footer")) {
      return;
    }

    const wpAdminbarHeight = this.#elements.WPAdminbar?.offsetHeight ?? 0;
    const footerBarHeight = this.#elements.footerBar?.offsetHeight ?? 0;
    const htmlHeight = this.#elements.html.offsetHeight - wpAdminbarHeight;

    if (htmlHeight < window.innerHeight) {
      this.#elements.wrapSection.style.cssText = `
                display: flex;
                flex-direction: column;
                min-height: calc(100vh - ${wpAdminbarHeight}px - ${footerBarHeight}px);
            `;

      if (!!this.#elements.calloutFooter) {
        this.#elements.calloutFooter.style.marginTop = "auto";
      } else if (!!this.#elements.siteFooter) {
        this.#elements.siteFooter.style.marginTop = "auto";
      }

      this.#footerPositionState = "changed";
    } else if (this.#footerPositionState === "changed") {
      this.#elements.wrapSection.style.cssText = "";

      if (!!this.#elements.calloutFooter) {
        this.#elements.calloutFooter.style.marginTop = null;
      } else {
        this.#elements.siteFooter.style.marginTop = null;
      }

      this.#footerPositionState = null;
    }
  };

  #parallaxFooter = () => {
    if (this.#elements.body.classList.contains("has-parallax-footer")) {
      setTimeout(() => {
        let mainSectionMarginBottom = 0;

        mainSectionMarginBottom += this.#elements.parallax?.offsetHeight;

        if (!!this.#elements.calloutFooter) {
          this.#elements.calloutFooter.style.bottom = `${mainSectionMarginBottom}px`;
          mainSectionMarginBottom += this.#elements.calloutFooter.offsetHeight;
        }

        this.#elements.mainSection.style.marginBottom = `${mainSectionMarginBottom}px`;
      }, 10);
    }
  };
}
