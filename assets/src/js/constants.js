export const options = oceanwpLocalize;

export const DOM = {
    WPAdminbar: document.querySelector("#wpadminbar"),
    html: document.querySelector("html"),
    body: document.body,
    main: document.querySelector("#main"),
    header: document.querySelector("#site-header"),
    headerTopLeftSide: document.querySelector("#site-header.top-header .header-top .left"),
    headerTopRightSide: document.querySelector("#site-header.top-header .header-top .right"),
    nav: document.querySelector("#site-header.header-replace #site-navigation"),
    fullScreenHeader: document.querySelector("#site-header.full_screen-header"),
    fullScreenMenu: document.querySelector("#site-header.full_screen-header #full-screen-menu"),
    fullScreenMenuBar: document.querySelector("#site-header.full_screen-header .menu-bar"),
    fullScreenLogo: document.querySelector("#site-logo.has-full-screen-logo"),
    selects: document.querySelectorAll(options.customSelects),
    mobileMenu: {
        nav: document.querySelector("#mobile-dropdown > nav"),
        navWrapper: document.querySelector("#mobile-dropdown"),
        icon: document.querySelector(".mobile-menu"),
        hamburger: document.querySelector(".mobile-menu > .hamburger"),
        menuItemsHasChildren: document.querySelectorAll("#mobile-dropdown .menu-item-has-children"),
        fullScreen: document.querySelector("#mobile-fullscreen"),
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
    scrollTop: document.querySelector("#scroll-top"),
    goTop: document.querySelector('a[href="#go-top"]'),
    goTopSlash: document.querySelector('body.home a[href="/#go-top"]'),
    blogMasonryGrids: document.querySelectorAll(".blog-masonry-grid"),
    parallaxFooter: document.querySelector(".parallax-footer"),
};

export const DOMString = {};
