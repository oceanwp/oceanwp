export const options = oceanwpLocalize;

export const DOM = {
    global: {
        WPAdminbar: document.querySelector("#wpadminbar"),
        html: document.querySelector("html"),
        body: document.body,
        main: document.querySelector("#main"),
        selects: document.querySelectorAll(options.customSelects),
    },
    header: {
        site: document.querySelector("#site-header"),
        vertical: document.querySelector("#site-header.vertical-header #site-header-inner"),
        fullScreen: document.querySelector("#site-header.full_screen-header"),
        topbar: document.querySelector("#top-bar"),
        topbarWrapper: document.querySelector("#top-bar-wrap"),
        topLeftSide: document.querySelector("#site-header.top-header .header-top .left"),
        topRightSide: document.querySelector("#site-header.top-header .header-top .right"),
    },
    menu: {
        nav: document.querySelector("#site-header.header-replace #site-navigation"),
        main: document.querySelector(".main-menu"),
        fullScreen: {
            menu: document.querySelector("#site-header.full_screen-header #full-screen-menu"),
            toggleMenuBtn: document.querySelector("#site-header.full_screen-header .menu-bar"),
            logo: document.querySelector("#site-logo.has-full-screen-logo"),
        },
        mega: {
            menuItems: document.querySelectorAll("#site-navigation .megamenu-li.full-mega"),
            topbarMenuItems: document.querySelectorAll("#top-bar-nav .megamenu-li.full-mega"),
            menuContents: document.querySelectorAll(".navigation .megamenu-li.auto-mega .megamenu"),
        },
        vertical: {
            toggleMenuBtn: document.querySelector("a.vertical-toggle"),
        },
    },
    mobileMenu: {
        nav: document.querySelector("#mobile-dropdown > nav"),
        navWrapper: document.querySelector("#mobile-dropdown"),
        toggleMenuBtn: document.querySelector(".mobile-menu"),
        hamburgerBtn: document.querySelector(".mobile-menu > .hamburger"),
        menuItemsHasChildren: document.querySelectorAll("#mobile-dropdown .menu-item-has-children"),
        fullScreen: document.querySelector("#mobile-fullscreen"),
    },
    search: {
        forms: document.querySelectorAll("form.header-searchform"),
        dropDown: {
            toggleSearchBtn: document.querySelector("a.search-dropdown-toggle"),
            form: document.querySelector("#searchform-dropdown"),
        },
        headerReplace: {
            toggleSearchBtn: document.querySelector("a.search-header-replace-toggle"),
            closeBtn: document.querySelector("#searchform-header-replace-close"),
            form: document.querySelector("#searchform-header-replace"),
        },
        overlay: {
            toggleSearchBtn: document.querySelector("a.search-overlay-toggle"),
            closeBtn: document.querySelector("a.search-overlay-close"),
            form: document.querySelector("#searchform-overlay"),
        },
    },
    footer: {
        parallax: document.querySelector(".parallax-footer"),
    },
    scroll: {
        scrollTop: document.querySelector("#scroll-top"),
        goTop: document.querySelector('a[href="#go-top"]'),
        goTopSlash: document.querySelector('body.home a[href="/#go-top"]'),
    },
    blog: {
        masonryGrids: document.querySelectorAll(".blog-masonry-grid"),
    },
};

export const DOMString = {};
