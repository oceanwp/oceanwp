export const options = oceanwpLocalize;

export const DOM = {
    body: document.body,
    selects: document.querySelectorAll(options.customSelects),
    mobileMenu: {
        nav: document.querySelector("#mobile-dropdown"),
        icon: document.querySelector(".mobile-menu"),
        hamburger: document.querySelector(".mobile-menu > .hamburger"),
        menuItemsHasChildren: document.querySelectorAll("#mobile-dropdown .menu-item-has-children"),
    },
    search: {
        dropdownToggleIcon: document.querySelector("a.search-dropdown-toggle"),
        dropdownForm: document.querySelector("#searchform-dropdown"),
    },
};

export const DOMString = {};
