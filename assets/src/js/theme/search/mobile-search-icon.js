import { options } from "../../constants";
import { fadeIn, fadeOut } from "../../lib/utils";
import SearchBase from "./base";

class MobileSearchIcon extends SearchBase {
	#elements;
	#activeTrigger = null;

	constructor() {
		super();

		if (options.mobileMenuSearchStyle === "disabled") {
			return;
		}

		this.#setElements();
		this.#setupEventListeners();
	}

	#setElements = () => {
		this.#elements = {
			dropdownSearchIcon: document.querySelector(".search-icon-dropdown"),
			dropdownSearchForm: document.querySelector(".search-style-dropdown"),
			overlaySearch: document.querySelector(".search-style-overlay"),
			overlaySearchIcon: document.querySelector(".search-icon-overlay"),
			overlaySearchCloseIcon: document.querySelector(
				".search-style-overlay .search-overlay-close"
			),
			html: document.querySelector("html"),
		};
	};

	#setupEventListeners = () => {

		if ( ! this.#elements ) {
			return;
		}

		if (options.mobileMenuSearchStyle === "drop_down") {
			this.#elements.dropdownSearchIcon?.addEventListener(
				"click",
				this.#toggleDropdownSearch
			);
			document.addEventListener("click", this.#onClickDocument);
			this.#elements.dropdownSearchForm?.addEventListener(
				"keydown",
				this.#onDropdownFormKeydown
			);
		} else if (options.mobileMenuSearchStyle === "overlay") {
			this.#elements.overlaySearchIcon?.addEventListener(
				"click",
				this.#openOverlaySearch
			);
			this.#elements.overlaySearchCloseIcon?.addEventListener(
				"click",
				this.#closeOverlaySearch
			);
			this.#elements.overlaySearch?.addEventListener(
				"click",
				this.#onClickOverlaySearch
			);
			this.#elements.overlaySearch?.addEventListener(
				"keydown",
				this.#onOverlayKeydown
			);
		}

		document.addEventListener(
			"keydown",
			this.#onDocumentKeydown
		);
	};

	#toggleDropdownSearch = (event) => {

		event.preventDefault();
		event.stopPropagation();

		this.#activeTrigger =
			event.currentTarget;

		const isOpening =
			!this.#elements.dropdownSearchForm?.classList.contains(
				"show"
			);

		this.#elements.dropdownSearchForm?.classList.toggle(
			"show"
		);

		this.#elements.dropdownSearchIcon?.classList.toggle(
			"active"
		);

		this.#elements.dropdownSearchIcon?.setAttribute(
			"aria-expanded",
			isOpening ? "true" : "false"
		);

		if (isOpening) {
			this.focus(
				this.#elements.dropdownSearchForm.querySelector(
					"form"
				),
				"input.field"
			);
		}
	};

	#onDocumentKeydown = (event) => {

		if (
			event.key !== "Escape"
		) {
			return;
		}

		// Mobile Dropdown

		if (
			this.#elements.dropdownSearchForm?.classList.contains(
				"show"
			)
		) {

			this.#elements.dropdownSearchForm?.classList.remove(
				"show"
			);

			this.#elements.dropdownSearchIcon?.classList.remove(
				"active"
			);

			this.#elements.dropdownSearchIcon?.setAttribute(
				"aria-expanded",
				"false"
			);

			this.#activeTrigger?.focus();
		}

		// Mobile Overlay

		if (
			this.#elements.overlaySearch?.classList.contains(
				"active"
			)
		) {
			this.#elements.overlaySearchCloseIcon?.click();
		}
	};

	#onDropdownFormKeydown = (
		event
	) => {

		if (
			event.key !== "Tab" ||
			!this.#elements.dropdownSearchForm?.classList.contains(
				"show"
			)
		) {
			return;
		}

		const focusable = Array.from(
			this.#elements.dropdownSearchForm.querySelectorAll(
				'input:not([type="hidden"]), button'
			)
		);

		if (!focusable.length) {
			return;
		}

		const first = focusable[0];

		const last =
			focusable[
				focusable.length - 1
			];

		if (
			event.shiftKey &&
			document.activeElement === first
		) {
			event.preventDefault();
			last.focus();
		}

		if (
			!event.shiftKey &&
			document.activeElement === last
		) {
			event.preventDefault();
			first.focus();
		}
	};

	#openOverlaySearch = (event) => {

		event.preventDefault();

		this.#activeTrigger =
			event.currentTarget;

		this.#elements.overlaySearch.classList.add(
			"active"
		);

		fadeIn(
			this.#elements.overlaySearch
		);

		this.#elements.overlaySearchIcon?.setAttribute(
			"aria-expanded",
			"true"
		);

		this.focus(
			this.#elements.overlaySearch.querySelector(
				"form"
			),
			"input.mobile-search-overlay-input"
		);

		setTimeout(() => {
			this.#elements.html.style.overflow =
				"hidden";
		}, 400);
	};

	#closeOverlaySearch = (event) => {

		event.preventDefault();

		this.#elements.overlaySearch?.classList.remove(
			"active"
		);

		fadeOut(
			this.#elements.overlaySearch
		);

		this.#elements.overlaySearchIcon?.setAttribute(
			"aria-expanded",
			"false"
		);

		if (this.#activeTrigger) {

			setTimeout(() => {

				this.#activeTrigger.focus();

			}, 50);
		}

		setTimeout(() => {
			this.#elements.html.style.overflow =
				"visible";
		}, 400);
	};

	#onClickOverlaySearch = (event) => {
		this.#elements.overlaySearch.querySelector("input").focus();
	};

	#onClickDocument = (event) => {
		if (!event.target.closest("#icon-searchform-dropdown.show")) {
			this.#elements.dropdownSearchIcon?.classList.remove("active");
			this.#elements.dropdownSearchForm?.classList.remove("show");
			this.#elements.dropdownSearchIcon?.setAttribute(
				"aria-expanded",
				"false"
			);
		}
	};

	#onOverlayKeydown = (
		event
	) => {

		if (
			event.key !== "Tab" ||
			!this.#elements.overlaySearch?.classList.contains(
				"active"
			)
		) {
			return;
		}

		const focusable = Array.from(
			this.#elements.overlaySearch.querySelectorAll(
				'input[type="search"], button, a[href]'
			)
		);

		if (!focusable.length) {
			return;
		}

		const first = focusable[0];

		const last =
			focusable[
				focusable.length - 1
			];

		if (
			event.shiftKey &&
			document.activeElement === first
		) {
			event.preventDefault();
			last.focus();
		}

		if (
			!event.shiftKey &&
			document.activeElement === last
		) {
			event.preventDefault();
			first.focus();
		}
	};
}

("use script");
window.oceanwp = window.oceanwp || {};
oceanwp.mobileSearchIcon = new MobileSearchIcon();
