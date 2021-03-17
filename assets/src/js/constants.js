export const options = oceanwpLocalize;

export const DOM = {
    body: document.body,
    selects: document.querySelectorAll(options.customSelects),
    mobileMenu: {
        nav: document.querySelector("#mobile-dropdown"),
        icon: document.querySelector(".mobile-menu"),
        hamburger: document.querySelector(".mobile-menu > .hamburger"),
        itemsHasChildren: document.querySelectorAll("#mobile-dropdown .menu-item-has-children"),
    },
};

export const DOMString = {};
