import axios from "axios";
import delegate from "delegate";
import { options } from "../../constants";
import { fadeIn, fadeOut, visible } from "../../lib/utils";
import qs from "qs";

class WooQuickView {
  #elements;

  constructor() {
    this.#setElements();
    this.#start();
    this.#setupEventListeners();
  }

  #setElements = () => {
    this.#elements = {
      html: document.querySelector("html"),
      body: document.body,
      modal: document.querySelector("#owp-qv-wrap"),
      content: document.querySelector("#owp-qv-content"),
    };
  };

  #start = () => {};

  #setupEventListeners = () => {
    delegate(".owp-quick-view", "click", this.#onQuickViewBtnClick);

    document
      .querySelectorAll(".owp-qv-overlay, .owp-qv-close")
      .forEach((closeBtn) => {
        closeBtn.addEventListener("click", this.#onCloseBtnClick);
      });

    document.addEventListener("keyup", this.#onDocumentKeyup);

    delegate(
      document.body,
      "#owp-qv-content .product:not(.product-type-external) .single_add_to_cart_button",
      "click",
      this.#onAddToCartBtnClick
    );

    delegate(
      document.body,
      "#owp-qv-content .product:not(.product-type-external) .single_add_to_cart_button",
      "touchend",
      this.#onAddToCartBtnClick
    );

    jQuery(document.body).on("added_to_cart", this.#updateCart);
  };

  #onQuickViewBtnClick = (event) => {
    event.preventDefault();

    const quickViewBtn = event.delegateTarget;
    const productId = quickViewBtn.getAttribute("data-product_id");

    quickViewBtn.parentNode.classList.add("loading");

    this.#open(quickViewBtn, productId);
  };

  #onCloseBtnClick = (event) => {
    if (!!event) {
      event.preventDefault();
    }

    this.#close();
  };

  #onDocumentKeyup = (event) => {
    // Escape button
    if (event.keyCode == 27) {
      this.#onCloseBtnClick();
    }
  };

  #onAddToCartBtnClick = (event) => {
    event.preventDefault();

    const addToCartBtn = event.delegateTarget;
    const form = addToCartBtn.closest("form.cart");
    const formData = this.#getFormData(form);

    if (formData.some(({ name }) => name === "add-to-cart")) {
      event.preventDefault();

      addToCartBtn.classList.remove("added");
      addToCartBtn.classList.add("loading");

      /**
       * Because Woocommerce plugin uses jQuery custom event,
       * We also have to use jQuery to customize this event.
       */
      jQuery("body").trigger("adding_to_cart", [
        jQuery(addToCartBtn),
        formData,
      ]);

      /**
       * Because Woocommerce plugin uses jQuery dynamic nonce,
       * We also have to use jQuery to customize.
       */
      jQuery.ajax({
        type: "POST",
        url: oceanwpLocalize.wc_ajax_url,
        data: formData,

        success: function (response) {
          /**
           * Because Woocommerce plugin uses jQuery custom event,
           * We also have to use jQuery to customize this event.
           */
          jQuery("body").trigger("wc_fragment_refresh");
          jQuery("body").trigger("added_to_cart", [
            response.fragments,
            response.cart_hash,
            jQuery(addToCartBtn),
            'wc_fragments_refreshed',
          ]);

          if (options.cart_redirect_after_add === "yes") {
            window.location = options.cart_url;
            return;
          }
        },
      });
    }
  };

  #updateCart = (e, fragments, cart_hash, $button) => {
    const cartBtn = typeof $button === "undefined" ? false : $button.get(0);

    if (cartBtn) {
      cartBtn.classList.remove("loading");
      cartBtn.classList.add("added");

      // View cart text.
      if (
        !options.is_cart &&
        !cartBtn.parentNode.querySelector(".added_to_cart")
      ) {
        cartBtn.insertAdjacentHTML(
          "afterend",
          `<a href="${options.cart_url}" class="added_to_cart wc-forward" title="${options.view_cart}">${options.view_cart}</a>`
        );
      }
    }
  };

  #open = (quickViewBtn, productId) => {
    axios
      .post(
        options.ajax_url,
        qs.stringify({
          action: "oceanwp_product_quick_view",
          nonce: options.nonce,
          product_id: productId,
        })
      )
      .then(({ data }) => {
        const initialHTMLInnerWidth = this.#elements.html.innerWidth;
        this.#elements.html.style.overflow = "hidden";
        const afterInitialHTMLInnerWidth = this.#elements.html.innerWidth;
        this.#elements.html.style.marginRight =
          afterInitialHTMLInnerWidth - initialHTMLInnerWidth + "px";

        this.#elements.body.classList.add("owp-qv-open");
        this.#elements.content.innerHTML = data.output;

        // Run quantity button
        oceanwpWooCustomFeatures.quantityButtons.start();

        fadeIn(this.#elements.modal);

        this.#elements.modal.classList.add("is-visible");

        const variations_form =
          this.#elements.content.querySelector(".variations_form");

        /**
         * Because Woocommerce plugin uses jQuery custom event,
         * We also have to use jQuery to customize this event
         */
        const $variationsForm = jQuery(variations_form);

        $variationsForm.trigger("check_variations");
        $variationsForm.trigger("reset_image");

        if ($variationsForm.length > 0) {
          $variationsForm.wc_variation_form();
          $variationsForm.find("select").change();
        }

        const galleryImagesWrapper =
          this.#elements.content.querySelector(".owp-qv-image");

        /**
         * Because Woocommerce plugin uses jQuery flexslider,
         * We also have to use jQuery
         */
        const $galleryImagesWrapper = jQuery(galleryImagesWrapper);

        if (!!galleryImagesWrapper.querySelectorAll("li")) {
          $galleryImagesWrapper.flexslider();
        }

        const groupedForm =
          this.#elements.content.querySelector("form.grouped_form");

        if (!!groupedForm) {
          const groupedFormURL = groupedForm.getAttribute("action");

          groupedForm
            .querySelectorAll(".group_table, button.single_add_to_cart_button")
            .forEach((item) => {
              item.style.display = "none";
            });

          groupedForm.insertAdjacentHTML(
            "beforeend",
            `<a class="button" href="${groupedFormURL}">${options.grouped_text}</a>`
          );
        }

        quickViewBtn.parentNode.classList.remove("loading");
      });
  };

  #close = () => {
    if (visible(this.#elements.modal)) {
      this.#elements.html.style.overflow = "";
      this.#elements.html.style.marginRight = "";
      this.#elements.html.classList.remove("owp-qv-open");

      fadeOut(this.#elements.modal);
      this.#elements.modal.classList.remove("is-visible");

      setTimeout(() => {
        this.#elements.content.innerHTML = "";
      }, 600);
    }
  };

  #getFormData = (form) => {
    form = form instanceof Element ? form : document.querySelector(form);
    const rCRLF = /\r?\n/g;

    return Array.from(form.elements).map((element, index) => {
      const elementValue = element.value;
      const elementName = element.name;

      if (elementValue == null) {
        return { name: elementName, value: "" };
      } else if (element.type.toLowerCase() === "checkbox") {
        return {
          name: elementName,
          value: element.checked ? elementValue : "",
        };
      } else if (element.type.toLowerCase() === "radio") {
        return {
          name: elementName,
          value: element.checked ? elementValue : "",
        };
      }

      return Array.isArray(elementValue)
        ? Array.from(elementValue).map((val, index) => {
            return { name: elementName, value: val.replace(rCRLF, "\r\n") };
          })
        : { name: elementName, value: elementValue.replace(rCRLF, "\r\n") };
    });
  };
}

new WooQuickView();
