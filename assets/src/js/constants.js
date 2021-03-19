export const options = oceanwpLocalize;

export const DOM = {
    WPAdminbar: document.querySelector("#wpadminbar"),
    html: document.querySelector("html"),
    body: document.body,
    header: document.querySelector("#site-header"),
    main: document.querySelector("#main"),
    headerTopLeftSide: document.querySelector("#site-header.top-header .header-top .left"),
    headerTopRightSide: document.querySelector("#site-header.top-header .header-top .right"),
    nav: document.querySelector("#site-header.header-replace #site-navigation"),
    selects: document.querySelectorAll(options.customSelects),
    mobileMenu: {
        nav: document.querySelector("#mobile-dropdown > nav"),
        navWrapper: document.querySelector("#mobile-dropdown"),
        icon: document.querySelector(".mobile-menu"),
        hamburger: document.querySelector(".mobile-menu > .hamburger"),
        menuItemsHasChildren: document.querySelectorAll("#mobile-dropdown .menu-item-has-children"),
    },
    search: {
        form: document.querySelector("form.header-searchform"),
        input: document.querySelector("form.header-searchform input"),
        dropdownToggleIcon: document.querySelector("a.search-dropdown-toggle"),
        dropdownForm: document.querySelector("#searchform-dropdown"),
        headerReplaceToggleIcon: document.querySelector("a.search-header-replace-toggle"),
        headerReplaceCloseIcon: document.querySelector("#searchform-header-replace-close"),
        headerReplaceForm: document.querySelector("#searchform-header-replace"),
        overlayToggleIcon: document.querySelector("a.search-overlay-toggle"),
        overlayCloseIcon: document.querySelector("a.search-overlay-close"),
        overlayForm: document.querySelector("#searchform-overlay"),
    },
};

export const DOMString = {};
