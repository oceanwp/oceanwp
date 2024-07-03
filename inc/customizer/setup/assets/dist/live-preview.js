/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/live-preview/colors.js":
/*!************************************!*\
  !*** ./src/live-preview/colors.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GenerateTypographyCSSRule; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _get_settings_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-settings-object */ "./src/live-preview/get-settings-object.js");


function GenerateTypographyCSSRule() {
  const optionData = oceanCustomizePreview.options;
  let colorInstances = (0,_get_settings_object__WEBPACK_IMPORTED_MODULE_1__["default"])(optionData, 'ocean-color');
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // const settingsKey = {
    //     color: '',
    //     colorHover: '',
    //     colorActive: '',
    // };

    colorInstances.forEach(element => {
      for (const property in element.setting_args) {
        if (element.setting_args[property].hasOwnProperty('selector')) {
          wp.customize(element.setting_args[property].id, value => {
            value.bind(newVal => {
              // if ('normal' === property) {
              // 	settingsKey.color = newVal;
              // } else if ('hover' === property) {
              // 	settingsKey.colorHover = newVal;
              // } else if ('active' === property) {
              // 	settingsKey.colorActive = newVal;
              // }

              updateCSSRule(element.setting_args[property].selector, newVal, element.setting_args[property].id);
            });
          });
        }
      }
    });
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      colorInstances.forEach(element => {
        const existingStyleElement = document.getElementById(`ocean-preview-color-${element.id}`);
        if (existingStyleElement) {
          document.head.removeChild(existingStyleElement);
        }
      });
    };
  }, [colorInstances]);
  return null;
}

// Function to update the CSS rule for an instance
function updateCSSRule(selectors, value, settingId) {
  const styleElement = document.createElement('style');
  styleElement.id = `ocean-preview-color-${settingId}`;
  if (selectors && value) {
    for (const key in selectors) {
      if (selectors.hasOwnProperty(key)) {
        const property = selectors[key];
        styleElement.textContent += `${key} { ${property}: ${value}; }`;
      }
    }
  }
  const existingStyleElement = document.getElementById(styleElement.id);
  if (existingStyleElement) {
    document.head.replaceChild(styleElement, existingStyleElement);
  } else {
    document.head.appendChild(styleElement);
  }
}

/***/ }),

/***/ "./src/live-preview/common.js":
/*!************************************!*\
  !*** ./src/live-preview/common.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GenerateCommonCSSRule; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/live-preview/utils.js");


function GenerateCommonCSSRule() {
  const optionData = oceanCustomizePreview.options;
  let settingInstances = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.findSettingsWithQuery)(optionData, 'preview', 'queryWithAttr');
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    settingInstances.forEach(element => {
      if (element.hasOwnProperty('css')) {
        wp.customize(element.id, value => {
          value.bind(newVal => {
            updateCSSRule(element.css, newVal, element.id);
          });
        });
      }
    });
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      settingInstances.forEach(element => {
        const existingStyleElement = document.getElementById(`ocean-preview-css-${element.id}`);
        if (existingStyleElement) {
          document.head.removeChild(existingStyleElement);
        }
      });
    };
  }, [settingInstances]);
  return null;
}
function updateCSSRule(cssAttrs, value, settingId) {
  const styleElement = document.createElement('style');
  styleElement.id = `ocean-preview-css-${settingId}`;
  let cssRule = [];
  if (cssAttrs.selector && cssAttrs.property) {
    const liveCSSRule = `${cssAttrs.selector} { ${cssAttrs.property}: ${value} }`;
    cssRule.push(liveCSSRule);
  }
  styleElement.textContent = cssRule.join('\n');
  const existingStyleElement = document.getElementById(styleElement.id);
  if (existingStyleElement) {
    document.head.replaceChild(styleElement, existingStyleElement);
  } else {
    document.head.appendChild(styleElement);
  }
}

/***/ }),

/***/ "./src/live-preview/custom.js":
/*!************************************!*\
  !*** ./src/live-preview/custom.js ***!
  \************************************/
/***/ (function() {

let api = wp.customize,
  body = document.body,
  siteHeader = document.querySelector('#site-header'),
  visibility = ['all-devices', 'hide-tablet', 'hide-mobile', 'hide-tablet-mobile', 'hide-all-devices'],
  menuPosition = ['left-menu', 'right-menu', 'center-menu'],
  centerMenusPosition = ['wider', 'centered', 'closer'],
  mediumMenuPosition = ['left-menu', 'right-menu', 'center-menu'],
  verticalHeaderPosition = ['left-header', 'right-header'],
  verticalHeaderLogoPosition = ['left-logo', 'center-logo', 'right-logo'],
  tabletCol = ['tablet-1-col', 'tablet-2-col', 'tablet-3-col', 'tablet-4-col'],
  mobileCol = ['mobile-1-col', 'mobile-2-col', 'mobile-3-col', 'mobile-4-col'],
  blogThumbnailPosition = ['top', 'center', 'bottom'];
api('ocean_boxed_dropdshadow', function (value) {
  value.bind(function (newVal) {
    if (true === newVal) {
      body.classList.add('wrap-boxshadow');
    } else {
      body.classList.remove('wrap-boxshadow');
    }
  });
});
api('ocean_scroll_top_position', function (value) {
  value.bind(function (newval) {
    let scrollTopElement = document.getElementById('scroll-top');
    if (scrollTopElement) {
      scrollTopElement.className = '';
      scrollTopElement.classList.add('scroll-top-' + newval);
    }
  });
});
api('ocean_scroll_top_side_position', function (value) {
  value.bind(function (newval) {
    let scrollTopElement = document.querySelector('#scroll-top');
    let position = api('ocean_scroll_top_position').get();
    let unit = api('ocean_scroll_top_side_position_unit').get();
    if (scrollTopElement) {
      scrollTopElement.style.right = '';
      scrollTopElement.style.left = '';
      if (position === 'right') {
        scrollTopElement.style.right = newval + unit;
      } else if (position === 'left') {
        scrollTopElement.style.left = newval + unit;
      }
    }
  });
});
api('ocean_pagination_align', function (value) {
  value.bind(function (newval) {
    body.classList.remove('pagination-center', 'pagination-left', 'pagination-right');
    body.classList.add('pagination-' + newval);
  });
});
api('ocean_page_single_both_sidebars_content_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_page_single_both_sidebars_content_width');
    if (newval) {
      var style = '<style class="customizer-ocean_page_single_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.page.content-both-sidebars .content-area { width: ' + newval + api('ocean_page_single_both_sidebars_content_unit').get() + '; } body.page.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.page.content-both-sidebars.ssc-style .widget-area {left: -' + newval + api('ocean_page_single_both_sidebars_content_unit').get() + ';} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_page_single_both_sidebars_sidebars_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_page_single_both_sidebars_sidebars_width');
    if (newval) {
      var style = '<style class="customizer-ocean_page_single_both_sidebars_sidebars_width">@media only screen and (min-width: 960px){ body.page.content-both-sidebars .widget-area{width:' + newval + api('ocean_page_single_both_sidebars_sidebars_width_unit').get() + ';} body.page.content-both-sidebars.scs-style .content-area{left:' + newval + api('ocean_page_single_both_sidebars_sidebars_width_unit').get() + ';} body.page.content-both-sidebars.ssc-style .content-area{left:' + newval * 2 + api('ocean_page_single_both_sidebars_sidebars_width_unit').get() + ';} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_page_header_visibility', function (value) {
  value.bind(function (newval) {
    var pageHeader = document.querySelectorAll('.page-header');
    if (pageHeader.length) {
      pageHeader.forEach(function (header) {
        visibility.forEach(function (v) {
          header.classList.remove(v);
        });
        header.classList.add(newval);
      });
    }
  });
});
api('ocean_breadcrumb_separator', function (value) {
  value.bind(function (newval) {
    var breadcrumbSeparatorElements = document.querySelectorAll('.site-breadcrumbs ul li .breadcrumb-sep');
    breadcrumbSeparatorElements.forEach(function (element) {
      element.textContent = newval;
    });
  });
});
api('ocean_breadcrumb_home_item', function (value) {
  value.bind(function (newval) {
    var iconItems = document.querySelectorAll('.site-breadcrumbs ul li i, .site-breadcrumbs ol li i, .site-breadcrumbs ul li .owp-icon, .site-breadcrumbs ol li .owp-icon');
    var homeItems = document.querySelectorAll('.site-breadcrumbs ul li .breadcrumb-home, .site-breadcrumbs ol li .breadcrumb-home');
    if (newval === 'icon' && iconItems.length) {
      iconItems.forEach(function (item) {
        item.classList.remove('has-text');
      });
      homeItems.forEach(function (item) {
        item.classList.add('has-icon');
      });
    }
    if (newval === 'text') {
      iconItems.forEach(function (item) {
        item.classList.add('icon-home', 'has-text');
      });
      homeItems.forEach(function (item) {
        item.classList.remove('has-icon');
      });
    }
  });
});
api('ocean_breadcrumb_translation_home', function (value) {
  value.bind(function (newval) {
    var breadcrumbHomeEle = document.querySelectorAll('.site-breadcrumbs ul li .breadcrumb-home');
    breadcrumbHomeEle.forEach(function (element) {
      element.textContent = newval;
    });
  });
});
api('ocean_breadcrumb_translation_error', function (value) {
  value.bind(function (newval) {
    var breadcrumbHomeEle = document.querySelectorAll('.site-breadcrumbs ul li .breadcrumb-error');
    breadcrumbHomeEle.forEach(function (element) {
      element.textContent = newval;
    });
  });
});
api('ocean_breadcrumb_translation_search', function (value) {
  value.bind(function (newval) {
    var breadcrumbHomeEle = document.querySelectorAll('.site-breadcrumbs ul li .breadcrumb-search');
    breadcrumbHomeEle.forEach(function (element) {
      element.textContent = newval;
    });
  });
});

// Custom Header add container class
api('ocean_add_custom_header_container', function (value) {
  value.bind(function (newval) {
    var headerEle = document.querySelector('#site-header.custom-header #site-header-inner');
    if (true === newval) {
      headerEle.classList.add('container');
    } else {
      headerEle.classList.remove('container');
    }
  });
});

// Header full width
api('ocean_header_full_width', function (value) {
  value.bind(function (newval) {
    var inner = document.querySelector('#site-header-inner');
    if (true === newval && !siteHeader.classList.contains('custom-header')) {
      inner.classList.remove('container');
    } else {
      inner.classList.add('container');
    }
  });
});

// Header bottom border
api('ocean_has_header_border_bottom', function (value) {
  value.bind(function (newval) {
    if (true === newval) {
      body.classList.remove('no-header-border');
    } else {
      body.classList.add('no-header-border');
    }
  });
});
api('ocean_center_header_menu_position', function (value) {
  value.bind(function (newval) {
    var headerInner = document.querySelector('#site-header.center-header #site-header-inner');
    if (headerInner) {
      centerMenusPosition.forEach(function (v) {
        headerInner.classList.remove(v);
      });
      headerInner.classList.add(newval);
    }
  });
});
api('ocean_medium_header_menu_position', function (value) {
  value.bind(function (newval) {
    var siteNav = document.querySelector('#site-navigation-wrap');
    if (siteNav && siteHeader.classList.contains('medium-header')) {
      mediumMenuPosition.forEach(function (v) {
        siteNav.classList.remove(v);
      });
      siteNav.classList.add(newval);
    }
  });
});
api('ocean_vertical_header_shadow', function (value) {
  value.bind(function (newval) {
    var headerEle = document.querySelector('#site-header.vertical-header');
    if (true === newval) {
      headerEle.classList.add('has-shadow');
    } else {
      headerEle.classList.remove('has-shadow');
    }
  });
});
api('ocean_vertical_header_closed', function (value) {
  value.bind(function (newval) {
    if (newval) {
      body.classList.add('vh-closed');
    } else {
      body.classList.remove('vh-closed');
    }
  });
});
api('ocean_vertical_header_collapse_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_vertical_header_collapse_width');
    if (newval) {
      var style = '<style class="customizer-ocean_vertical_header_collapse_width">@media only screen and (max-width: ' + newval + 'px) {body.vertical-header-style.left-header #site-header.vertical-header { left: -266px; }body.vertical-header-style.left-header #outer-wrap {margin-left: 34px;}body.vertical-header-style.right-header #site-header.vertical-header {right: -266px;}body.vertical-header-style.right-header #outer-wrap {margin-right: 34px;}body.vertical-header-style.vh-opened.left-header #site-header.vertical-header {left: 0;}body.vertical-header-style.vh-opened.right-header #site-header.vertical-header {right: 0;}body.vertical-header-style.vh-opened #site-header.vertical-header #site-navigation-wrap {padding-right: 0;}#site-header.vertical-header .vertical-toggle { display: block; }#site-header.vertical-header #site-navigation-wrap { padding-right: 34px; }}</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_vertical_header_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_vertical_header_width');
    if (newval) {
      var minus = newval - 34;
      var style = '<style class="customizer-ocean_vertical_header_width">#site-header.vertical-header { width: ' + newval + 'px; }body.vertical-header-style.left-header #outer-wrap { margin-left: ' + newval + 'px; }body.vertical-header-style.right-header #outer-wrap { margin-right: ' + newval + 'px; }body.vertical-header-style.vh-closed.left-header #site-header.vertical-header {left: -' + minus + 'px;}body.vertical-header-style.vh-closed.left-header #outer-wrap {margin-left: 34px;}body.vertical-header-style.vh-closed.right-header #site-header.vertical-header {right: -' + minus + 'px;}body.vertical-header-style.vh-closed.right-header #outer-wrap {margin-right: 34px;}@media only screen and (max-width: 1280px) {body.vertical-header-style.left-header #site-header.vertical-header {left: -' + minus + 'px;}body.vertical-header-style.left-header #outer-wrap {margin-left: 34px;}body.vertical-header-style.right-header #site-header.vertical-header {right: -' + minus + 'px;}body.vertical-header-style.right-header #outer-wrap {margin-right: 34px;}}</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_vertical_header_inner_top_padding', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_vertical_header_inner_top_padding');
    if (newval) {
      var style = '<style class="customizer-ocean_vertical_header_inner_top_padding">#site-header.vertical-header #site-header-inner { padding-top: ' + newval + 'px; }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_vertical_header_inner_bottom_padding', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_vertical_header_inner_bottom_padding');
    if (newval) {
      var style = '<style class="customizer-ocean_vertical_header_inner_bottom_padding">#site-header.vertical-header #site-header-inner { padding-bottom: ' + newval + 'px; }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_vertical_header_inner_right_padding', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_vertical_header_inner_right_padding');
    if (newval) {
      var style = '<style class="customizer-ocean_vertical_header_inner_right_padding">#site-header.vertical-header #site-header-inner>*:not(#site-navigation-wrap), #site-header.vertical-header #site-navigation-wrap .dropdown-menu > li > a { padding-right: ' + newval + 'px; }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_vertical_header_inner_left_padding', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_vertical_header_inner_left_padding');
    if (newval) {
      var style = '<style class="customizer-ocean_vertical_header_inner_left_padding">#site-header.vertical-header #site-header-inner>*:not(#site-navigation-wrap), #site-header.vertical-header #site-navigation-wrap .dropdown-menu > li > a { padding-left: ' + newval + 'px; }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_vertical_header_inner_tablet_top_padding', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_vertical_header_inner_tablet_top_padding');
    if (newval) {
      var style = '<style class="customizer-ocean_vertical_header_inner_tablet_top_padding">@media (max-width: 768px){#site-header-inner { padding-top: ' + newval + 'px; }}</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_vertical_header_inner_tablet_bottom_padding', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_vertical_header_inner_tablet_bottom_padding');
    if (newval) {
      var style = '<style class="customizer-ocean_vertical_header_inner_tablet_bottom_padding">@media (max-width: 768px){#site-header.vertical-header #site-header-inner { padding-bottom: ' + newval + 'px; }}</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_vertical_header_inner_tablet_right_padding', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_vertical_header_inner_tablet_right_padding');
    if (newval) {
      var style = '<style class="customizer-ocean_vertical_header_inner_tablet_right_padding">@media (max-width: 768px){#site-header.vertical-header #site-header-inner>*:not(#site-navigation-wrap), #site-header.vertical-header #site-navigation-wrap .dropdown-menu > li > a { padding-right: ' + newval + 'px; }}</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_vertical_header_inner_tablet_left_padding', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_vertical_header_inner_tablet_left_padding');
    if (newval) {
      var style = '<style class="customizer-ocean_vertical_header_inner_tablet_left_padding">@media (max-width: 768px){#site-header.vertical-header #site-header-inner>*:not(#site-navigation-wrap), #site-header.vertical-header #site-navigation-wrap .dropdown-menu > li > a { padding-left: ' + newval + 'px; }}</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_vertical_header_inner_mobile_top_padding', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_vertical_header_inner_mobile_top_padding');
    if (newval) {
      var style = '<style class="customizer-ocean_vertical_header_inner_mobile_top_padding">@media (max-width: 480px){#site-header-inner { padding-top: ' + newval + 'px; }}</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_vertical_header_inner_mobile_bottom_padding', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_vertical_header_inner_mobile_bottom_padding');
    if (newval) {
      var style = '<style class="customizer-ocean_vertical_header_inner_mobile_bottom_padding">@media (max-width: 480px){#site-header.vertical-header #site-header-inner { padding-bottom: ' + newval + 'px; }}</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_vertical_header_inner_mobile_right_padding', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_vertical_header_inner_mobile_right_padding');
    if (newval) {
      var style = '<style class="customizer-ocean_vertical_header_inner_mobile_right_padding">@media (max-width: 480px){#site-header.vertical-header #site-header-inner>*:not(#site-navigation-wrap), #site-header.vertical-header #site-navigation-wrap .dropdown-menu > li > a { padding-right: ' + newval + 'px; }}</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_vertical_header_inner_mobile_left_padding', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_vertical_header_inner_mobile_left_padding');
    if (newval) {
      var style = '<style class="customizer-ocean_vertical_header_inner_mobile_left_padding">@media (max-width: 480px){#site-header.vertical-header #site-header-inner>*:not(#site-navigation-wrap), #site-header.vertical-header #site-navigation-wrap .dropdown-menu > li > a { padding-left: ' + newval + 'px; }}</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_vertical_header_logo_position', function (value) {
  value.bind(function (newval) {
    var headerEle = document.querySelector('#site-header.vertical-header');
    if (headerEle && siteHeader.classList.contains('vertical-header')) {
      verticalHeaderLogoPosition.forEach(function (v) {
        headerEle.classList.remove(v);
      });
      headerEle.classList.add(newval);
    }
  });
});
api('ocean_top_bar_full_width', function (value) {
  value.bind(function (newval) {
    var topbarEle = document.querySelector('#top-bar');
    if (true === newval) {
      topbarEle.classList.add('container');
    } else {
      topbarEle.classList.remove('container');
    }
  });
});
api('ocean_top_bar_visibility', function (value) {
  value.bind(function (newval) {
    var topbarWrap = document.querySelector('#top-bar-wrap');
    if (topbarWrap) {
      visibility.forEach(function (v) {
        topbarWrap.classList.remove(v);
      });
      topbarWrap.classList.add(newval);
    }
  });
});
api('ocean_top_bar_content', function (value) {
  value.bind(function (newval) {
    var topbarContent = document.querySelector('#top-bar-content .topbar-content');
    topbarContent.innerHTML = newval;
  });
});
api('ocean_vertical_header_position', function (value) {
  value.bind(function (newval) {
    var verticalHeaderBody = document.querySelector('body.vertical-header-style');
    if (verticalHeaderBody && siteHeader.classList.contains('vertical-header')) {
      verticalHeaderPosition.forEach(function (v) {
        verticalHeaderBody.classList.remove(v);
      });
      verticalHeaderBody.classList.add(newval);
    }
  });
});
api('ocean_after_header_content', function (value) {
  value.bind(function (newval) {
    var headerContent = document.querySelector('#site-header .after-header-content-inner');
    headerContent.innerHTML = newval;
  });
});
api('ocean_menu_position', function (value) {
  value.bind(function (newval) {
    if (siteHeader && !siteHeader.classList.contains('medium-header')) {
      menuPosition.forEach(function (v) {
        siteHeader.classList.remove(v);
      });
      siteHeader.classList.add(newval);
    }
  });
});
api('ocean_menu_links_effect_blue_color', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_menu_links_effect_blue_color');
    if (newval) {
      var style = '<style class="customizer-ocean_menu_links_effect_blue_color">.effect-seven #site-navigation-wrap .dropdown-menu > li > a.menu-link:hover > span:after, .effect-seven #site-navigation-wrap .dropdown-menu > li.sfHover > a.menu-link > span:after { text-shadow: 10px 0 ' + newval + ', -10px 0 ' + newval + '; }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_menu_links_effect_dark_color', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_menu_links_effect_dark_color');
    if (newval) {
      var style = '<style class="customizer-ocean_menu_links_effect_dark_color">.effect-ten #site-navigation-wrap .dropdown-menu > li > a.menu-link:hover > span, .effect-ten #site-navigation-wrap .dropdown-menu > li.sfHover > a.menu-link > span { -webkit-box-shadow: 0 0 10px 4px ' + newval + '; -moz-box-shadow: 0 0 10px 4px ' + newval + '; box-shadow: 0 0 10px 4px ' + newval + '; }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_menu_dropdown_top_border', function (value) {
  value.bind(function (newval) {
    var siteNav = document.querySelector('#site-navigation-wrap');
    if (true === newval) {
      siteNav.classList.remove('no-top-border');
    } else {
      siteNav.classList.add('no-top-border');
    }
  });
});
api('ocean_mobile_header_height', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_mobile_header_height');
    if (newval) {
      var style = '<style class="customizer-ocean_mobile_header_height">@media only screen and (max-width: 959px) {#site-logo #site-logo-inner{height: ' + newval + 'px;}.oceanwp-mobile-menu-icon a { line-height: ' + newval + 'px; }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_mobile_menu_text', function (value) {
  value.bind(function (newval) {
    var mobileMenutext = document.querySelector('.oceanwp-mobile-menu-icon a .oceanwp-text');
    mobileMenutext.innerHTML = newval;
  });
});
api('ocean_mobile_menu_open_icon', function (value) {
  value.bind(function (newval) {
    var mobileMenuIcon = document.querySelector('.oceanwp-mobile-menu-icon a i');
    if (mobileMenuIcon) {
      mobileMenuIcon.className = newval;
    }
  });
});
api('ocean_mobile_menu_close_btn_icon', function (value) {
  value.bind(function (newval) {
    var mobileMenuCloseIcon = document.querySelector('a.sidr-class-toggle-sidr-close i');
    if (mobileMenuCloseIcon) {
      mobileMenuCloseIcon.className = newval;
    }
  });
});
api('ocean_mobile_menu_close_btn_text', function (value) {
  value.bind(function (newval) {
    var mobileClosetext = document.querySelector('a.sidr-class-toggle-sidr-close .sidr-class-close-text');
    mobileClosetext.innerHTML = newval;
  });
});

/**
 * Blog
 */
api('ocean_blog_archives_both_sidebars_content_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_blog_archives_both_sidebars_content_width');
    if (newval) {
      var style = '<style class="customizer-ocean_blog_archives_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.blog.content-both-sidebars .content-area, body.archive.content-both-sidebars .content-area { width: ' + newval + '%; } body.blog.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.blog.content-both-sidebars.ssc-style .widget-area, body.archive.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.archive.content-both-sidebars.ssc-style .widget-area {left: -' + newval + '%;} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_blog_archives_both_sidebars_sidebars_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_blog_archives_both_sidebars_sidebars_width');
    if (newval) {
      var style = '<style class="customizer-ocean_blog_archives_both_sidebars_sidebars_width>@media only screen and (min-width: 960px){ body.blog.content-both-sidebars .widget-area, body.archive.content-both-sidebars .widget-area{width:' + newval + '%;} body.blog.content-both-sidebars.scs-style .content-area, body.archive.content-both-sidebars.scs-style .content-area{left:' + newval + '%;} body.blog.content-both-sidebars.ssc-style .content-area, body.archive.content-both-sidebars.ssc-style .content-area{left:' + newval * 2 + '%;} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});

// Blog thumbnail style vertical position
api('ocean_blog_thumbnail_vertical_position', function (value) {
  value.bind(function (newval) {
    var blogThumbnail = document.querySelector('.blog-entry.thumbnail-entry .blog-entry-inner');
    if (blogThumbnail) {
      blogThumbnailPosition.forEach(function (v) {
        blogThumbnail.classList.remove(v);
      });
      blogThumbnail.classList.add(newval);
    }
  });
});
api('ocean_blog_infinite_scroll_last_text', function (value) {
  value.bind(function (newval) {
    var infiniteScrollLasttext = document.querySelectorAll('.infinite-scroll-last');
    infiniteScrollLasttext.forEach(function (element) {
      element.textContent = newval;
    });
  });
});
api('ocean_blog_infinite_scroll_error_text', function (value) {
  value.bind(function (newval) {
    var infiniteScrollErrortext = document.querySelectorAll('.infinite-scroll-error');
    infiniteScrollErrortext.forEach(function (element) {
      element.textContent = newval;
    });
  });
});
api('ocean_blog_image_overlay', function (value) {
  value.bind(function (newval) {
    var overlay = document.querySelector('.blog-entry.post .thumbnail .thumbnail-link > span');
    if (newval) {
      overlay.classList.remove('no-overlay');
      overlay.classList.add('overlay');
    } else {
      overlay.classList.remove('overlay');
      overlay.classList.add('no-overlay');
    }
  });
});
api('ocean_blog_single_content_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_blog_single_content_width');
    if (newval) {
      var style = '<style class="customizer-ocean_blog_single_content_width">.single-post.content-max-width .thumbnail, .single-post.content-max-width .entry-header, .single-post.content-max-width ul.meta, .single-post.content-max-width .entry-content p, .single-post.content-max-width .entry-content h1, .single-post.content-max-width .entry-content h2, .single-post.content-max-width .entry-content h3, .single-post.content-max-width .entry-content h4, .single-post.content-max-width .entry-content h5, .single-post.content-max-width .entry-content h6, .single-post.content-max-width .wp-block-image, .single-post.content-max-width .wp-block-gallery, .single-post.content-max-width .wp-block-video, .single-post.content-max-width .wp-block-quote, .single-post.content-max-width .wp-block-text-columns, .single-post.content-max-width .entry-content ul, .single-post.content-max-width .entry-content ol, .single-post.content-max-width .wp-block-cover-text, .single-post.content-max-width .post-tags, .single-post.content-max-width .comments-are, .wp-block-separator.is-style-wide{max-width:' + newval + 'px;} .single-post.content-max-width .wp-block-image.alignleft, .single-post.content-max-width .wp-block-image.alignright{max-width:' + newval / 2 + 'px;} .single-post.content-max-width .wp-block-image.alignleft{margin-left: calc( 50% - ' + newval / 2 + 'px);} .single-post.content-max-width .wp-block-image.alignright{margin-right: calc( 50% - ' + newval / 2 + 'px);}</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_blog_single_both_sidebars_content_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_blog_single_both_sidebars_content_width');
    if (newval) {
      var style = '<style class="customizer-ocean_blog_single_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.single-post.content-both-sidebars .content-area { width: ' + newval + '%; } body.single-post.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.single-post.content-both-sidebars.ssc-style .widget-area {left: -' + newval + '%;} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_blog_single_both_sidebars_sidebars_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_blog_single_both_sidebars_sidebars_width');
    if (newval) {
      var style = '<style class="customizer-ocean_blog_single_both_sidebars_sidebars_width>@media only screen and (min-width: 960px){ body.single-post.content-both-sidebars .widget-area{width:' + newval + '%;} body.single-post.content-both-sidebars.scs-style .content-area{left:' + newval + '%;} body.single-post.content-both-sidebars.ssc-style .content-area{left:' + newval * 2 + '%;} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_footer_widgets_visibility', function (value) {
  value.bind(function (newval) {
    var footerWidgets = document.querySelector('#footer-widgets');
    if (footerWidgets) {
      visibility.forEach(function (v) {
        footerWidgets.classList.remove(v);
      });
      footerWidgets.classList.add(newval);
    }
  });
});
api('ocean_add_footer_container', function (value) {
  value.bind(function (newval) {
    var footerWidgetEle = document.querySelector('#footer-widgets .footer-widgets-inner');
    if (true === newval) {
      footerWidgetEle.classList.add('container');
    } else {
      footerWidgetEle.classList.remove('container');
    }
  });
});
api('ocean_bottom_footer_visibility', function (value) {
  value.bind(function (newval) {
    var footerCopyright = document.querySelector('#footer-bottom');
    if (footerCopyright) {
      visibility.forEach(function (v) {
        footerCopyright.classList.remove(v);
      });
      footerCopyright.classList.add(newval);
    }
  });
});
api('ocean_footer_copyright_text', function (value) {
  value.bind(function (newval) {
    var footerCopyright = document.querySelector('#copyright');
    footerCopyright.innerHTML = newval;
  });
});
api('ocean_scroll_top_visibility', function (value) {
  value.bind(function (newval) {
    var scrollTop = document.getElementById('scroll-top');
    if (scrollTop.length) {
      scrollTop.forEach(function (item) {
        visibility.forEach(function (v) {
          item.classList.remove(v);
        });
        item.classList.add(newval);
      });
    }
  });
});
api('ocean_left_container_width', function (value) {
  value.bind(function (to) {
    var child = document.querySelector('.customizer-ocean_left_container_width');
    if (to) {
      var style = '<style class="customizer-ocean_left_container_width">@media only screen and (min-width: 960px){ .content-area { width: ' + to + '%; } }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_sidebar_width', function (value) {
  value.bind(function (to) {
    var child = document.querySelector('.customizer-ocean_sidebar_width');
    if (to) {
      var style = '<style class="customizer-ocean_sidebar_width">@media only screen and (min-width: 960px){ .widget-area { width: ' + to + '%; } }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});

/***/ }),

/***/ "./src/live-preview/dimension.js":
/*!***************************************!*\
  !*** ./src/live-preview/dimension.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GenerateSpacingCSSRule; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/live-preview/utils.js");


function GenerateSpacingCSSRule() {
  const optionData = oceanCustomizePreview.options;
  const settingInstances = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.findSettingsWithTypeQuery)(optionData, 'preview', 'ocean-spacing', 'queryWithType');
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const settingsKey = {
      // top: '',
      // right: '',
      // bottom: '',
      // left: '',
      // topTablet: '',
      // rightTablet: '',
      // bottomTablet: '',
      // leftTablet: '',
      // topMobile: '',
      // rightMobile: '',
      // bottomMobile: '',
      // leftMobile: '',
    };
    settingInstances.forEach(element => {
      for (const property in element.setting_args) {
        if (element.hasOwnProperty('css')) {
          const settingId = element.setting_args[property].id;
          const currentValue = wp.customize(settingId).get();

          // Initialize settingsKey with the current values
          settingsKey[property] = currentValue;

          // Bind to setting changes
          wp.customize(settingId, value => {
            value.bind(newVal => handleSettingUpdate(element, property, newVal));
          });
        }
      }
    });

    // Function to handle setting updates
    const handleSettingUpdate = (element, property, newVal) => {
      settingsKey[property] = newVal;
      updateCSSRule(element.css, settingsKey, property, element.id);
    };
  }, [settingInstances]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      settingInstances.forEach(element => {
        const styleElement = document.getElementById(`ocean-preview-css-${element.id}`);
        if (styleElement) {
          document.head.removeChild(styleElement);
        }
      });
    };
  }, [settingInstances]);
  return null;
}
function updateCSSRule(cssAttrs, settings, property, settingId) {
  const styleElement = document.createElement('style');
  styleElement.id = `ocean-preview-css-${settingId}`;
  const cssRule = [];
  if (cssAttrs.selector && cssAttrs.property) {
    if (cssAttrs.property === 'border-radius') {
      const desktopRule = `${cssAttrs.selector} {
        border-top-left-radius: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingTop, settings.spacingTop, settings.spacingTop, settings.spacingTop, 'px')};
        border-top-right-radius: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingRight, settings.spacingRight, settings.spacingRight, settings.spacingRight, 'px')};
        border-bottom-right-radius: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingBottom, settings.spacingBottom, settings.spacingBottom, settings.spacingBottom, 'px')};
        border-bottom-left-radius: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingLeft, settings.spacingLeft, settings.spacingLeft, settings.spacingLeft, 'px')};
      }`;
      cssRule.push(desktopRule);
      if (property === 'spacingTopTablet' || property === 'spacingRightTablet' || property === 'spacingBottomTablet' || property === 'spacingLeftTablet') {
        const tabletRule = `@media (max-width: 768px) { ${cssAttrs.selector} {
          border-top-left-radius: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingTopTablet, settings.spacingTopTablet, settings.spacingTopTablet, settings.spacingTopTablet, 'px')};
          border-top-right-radius: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingRightTablet, settings.spacingRightTablet, settings.spacingRightTablet, settings.spacingRightTablet, 'px')};
          border-bottom-right-radius: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingBottomTablet, settings.spacingBottomTablet, settings.spacingBottomTablet, settings.spacingBottomTablet, 'px')};
          border-bottom-left-radius: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingLeftTablet, settings.spacingLeftTablet, settings.spacingLeftTablet, settings.spacingLeftTablet, 'px')};
        }}`;
        cssRule.push(tabletRule);
      }
      if (property === 'spacingTopMobile' || property === 'spacingRightMobile' || property === 'spacingBottomMobile' || property === 'spacingLeftMobile') {
        const mobileRule = `@media (max-width: 480px) { ${cssAttrs.selector} {
          border-top-left-radius: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingTopMobile, settings.spacingTopMobile, settings.spacingTopMobile, settings.spacingTopMobile, 'px')};
          border-top-right-radius: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingRightMobile, settings.spacingRightMobile, settings.spacingRightMobile, settings.spacingRightMobile, 'px')};
          border-bottom-right-radius: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingBottomMobile, settings.spacingBottomMobile, settings.spacingBottomMobile, settings.spacingBottomMobile, 'px')};
          border-bottom-left-radius: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingLeftMobile, settings.spacingLeftMobile, settings.spacingLeftMobile, settings.spacingLeftMobile, 'px')};
        }}`;
        cssRule.push(mobileRule);
      }
    } else if (cssAttrs.property === 'border-width') {
      const desktopRule = `${cssAttrs.selector} {
        border-top-width: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingTop, settings.spacingTop, settings.spacingTop, settings.spacingTop, 'px')};
        border-right-width: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingRight, settings.spacingRight, settings.spacingRight, settings.spacingRight, 'px')};
        border-bottom-width: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingBottom, settings.spacingBottom, settings.spacingBottom, settings.spacingBottom, 'px')};
        border-left-width: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingLeft, settings.spacingLeft, settings.spacingLeft, settings.spacingLeft, 'px')};
      }`;
      cssRule.push(desktopRule);
      if (property === 'spacingTopTablet' || property === 'spacingRightTablet' || property === 'spacingBottomTablet' || property === 'spacingLeftTablet') {
        const tabletRule = `@media (max-width: 768px) { ${cssAttrs.selector} {
          border-top-width: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingTopTablet, settings.spacingTopTablet, settings.spacingTopTablet, settings.spacingTopTablet, 'px')};
          border-right-width: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingRightTablet, settings.spacingRightTablet, settings.spacingRightTablet, settings.spacingRightTablet, 'px')};
          border-bottom-width: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingBottomTablet, settings.spacingBottomTablet, settings.spacingBottomTablet, settings.spacingBottomTablet, 'px')};
          border-left-width: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingLeftTablet, settings.spacingLeftTablet, settings.spacingLeftTablet, settings.spacingLeftTablet, 'px')};
        }}`;
        cssRule.push(tabletRule);
      }
      if (property === 'spacingTopMobile' || property === 'spacingRightMobile' || property === 'spacingBottomMobile' || property === 'spacingLeftMobile') {
        const mobileRule = `@media (max-width: 480px) { ${cssAttrs.selector} {
          border-top-width: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingTopMobile, settings.spacingTopMobile, settings.spacingTopMobile, settings.spacingTopMobile, 'px')};
          border-right-width: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingRightMobile, settings.spacingRightMobile, settings.spacingRightMobile, settings.spacingRightMobile, 'px')};
          border-bottom-width: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingBottomMobile, settings.spacingBottomMobile, settings.spacingBottomMobile, settings.spacingBottomMobile, 'px')};
          border-left-width: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingLeftMobile, settings.spacingLeftMobile, settings.spacingLeftMobile, settings.spacingLeftMobile, 'px')};
        }}`;
        cssRule.push(mobileRule);
      }
    } else {
      // For desktop
      // const liveCSSRule = `${cssAttrs.selector} { ${cssAttrs.property}: ${oceanSpacing(settings[property], settings[property], settings[property], settings[property], 'px')} }`;
      // cssRule.push(liveCSSRule);

      const desktopRule = `${cssAttrs.selector} {
        ${cssAttrs.property}-top: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingTop, settings.spacingTop, settings.spacingTop, settings.spacingTop, 'px')};
        ${cssAttrs.property}-right: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingRight, settings.spacingRight, settings.spacingRight, settings.spacingRight, 'px')};
        ${cssAttrs.property}-bottom: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingBottom, settings.spacingBottom, settings.spacingBottom, settings.spacingBottom, 'px')};
        ${cssAttrs.property}-left: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingLeft, settings.spacingLeft, settings.spacingLeft, settings.spacingLeft, 'px')};
      }`;
      cssRule.push(desktopRule);
      if (property === 'spacingTopTablet' || property === 'spacingRightTablet' || property === 'spacingBottomTablet' || property === 'spacingLeftTablet') {
        const tabletRule = `@media (max-width: 768px) { ${cssAttrs.selector} {
          ${cssAttrs.property}-top: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingTopTablet, settings.spacingTopTablet, settings.spacingTopTablet, settings.spacingTopTablet, 'px')};
          ${cssAttrs.property}-right: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingRightTablet, settings.spacingRightTablet, settings.spacingRightTablet, settings.spacingRightTablet, 'px')};
          ${cssAttrs.property}-bottom: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingBottomTablet, settings.spacingBottomTablet, settings.spacingBottomTablet, settings.spacingBottomTablet, 'px')};
          ${cssAttrs.property}-left: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingLeftTablet, settings.spacingLeftTablet, settings.spacingLeftTablet, settings.spacingLeftTablet, 'px')};
        }}`;
        cssRule.push(tabletRule);
      }

      // // For tablet
      // if (property === 'spacingTopTablet' || property === 'spacingRightTablet'  || property === 'spacingBottomTablet'  || property === 'spacingLeftTablet'  ) {
      //   const tabletRule = `@media (max-width: 768px) { ${cssAttrs.selector} { ${cssAttrs.property}: ${oceanSpacing(settings[property], settings[property], settings[property], settings[property], 'px')} }}`;
      //   cssRule.push(tabletRule);
      // }

      if (property === 'spacingTopMobile' || property === 'spacingRightMobile' || property === 'spacingBottomMobile' || property === 'spacingLeftMobile') {
        const mobileRule = `@media (max-width: 480px) { ${cssAttrs.selector} {
          ${cssAttrs.property}-top: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingTopMobile, settings.spacingTopMobile, settings.spacingTopMobile, settings.spacingTopMobile, 'px')};
          ${cssAttrs.property}-right: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingRightMobile, settings.spacingRightMobile, settings.spacingRightMobile, settings.spacingRightMobile, 'px')};
          ${cssAttrs.property}-bottom: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingBottomMobile, settings.spacingBottomMobile, settings.spacingBottomMobile, settings.spacingBottomMobile, 'px')};
          ${cssAttrs.property}-left: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oceanSpacing)(settings.spacingLeftMobile, settings.spacingLeftMobile, settings.spacingLeftMobile, settings.spacingLeftMobile, 'px')};
        }}`;
        cssRule.push(mobileRule);
      }

      // // For mobile
      // if ( property === 'spacingTopMobile' || property === 'spacingRightMobile' || property === 'spacingBottomMobile' || property === 'spacingLeftMobile' ) {
      //   const mobileRule = `@media (max-width: 480px) { ${cssAttrs.selector} { ${cssAttrs.property}: ${oceanSpacing(settings[property], settings[property], settings[property], settings[property], 'px')} }}`;
      //   cssRule.push(mobileRule);
      // }
    }
  }

  styleElement.textContent = cssRule.join('\n');
  const existingStyleElement = document.getElementById(styleElement.id);
  if (existingStyleElement) {
    document.head.replaceChild(styleElement, existingStyleElement);
  } else {
    document.head.appendChild(styleElement);
  }
}

/***/ }),

/***/ "./src/live-preview/edd.js":
/*!*********************************!*\
  !*** ./src/live-preview/edd.js ***!
  \*********************************/
/***/ (function() {

let api = wp.customize,
  body = document.body,
  siteHeader = document.querySelector('#site-header'),
  eddCatStyle = ['edd-default-cat', 'edd-dropdown-cat'],
  eddProductsCol = ['1', '2', '3', '4'],
  eddProductsTabletCol = ['tablet-1-col', 'tablet-2-col', 'tablet-3-col', 'tablet-4-col'],
  eddProductsMobileCol = ['mobile-1-col', 'mobile-2-col', 'mobile-3-col', 'mobile-4-col'];
api('ocean_edd_cart_dropdown_style', function (value) {
  value.bind(function (newval) {
    var cart = document.querySelector('.edd-menu-icon');
    if (cart.length) {
      eddCatStyle.forEach(function (v) {
        cart.classList.remove(v);
      });
      cart.classList.add(newval);
    }
  });
});
api('ocean_edd_menu_custom_icon', function (value) {
  value.bind(function (newval) {
    var cart = document.querySelector('#site-navigation-wrap .dropdown-menu > li > a.eddmenucart i');
    if (cart.length) {
      cart.classList.remove();
      cart.classList.add(newval);
    }
  });
});
api('ocean_edd_archive_columns', function (value) {
  value.bind(function (newval) {
    var archivesCol = document.querySelectorAll('.oceanwp-row .edd_downloads_list');
    if (archivesCol.length) {
      for (var i = 0; i < archivesCol.length; i++) {
        var v = archivesCol[i].classList[1].split('_')[3];
        archivesCol[i].parentNode.classList.remove('desktop-col-' + v);
        archivesCol[i].classList.remove('span_1_of_' + v);
      }
      for (var i = 0; i < archivesCol.length; i++) {
        archivesCol[i].parentNode.classList.add('custom-col desktop-col-' + newval);
        archivesCol[i].classList.add('span_1_of_' + newval);
      }
    }
  });
});
api('ocean_edd_tablet_archive_columns', function (value) {
  value.bind(function (newval) {
    var archivesCol = document.querySelector('.oceanwp-row .edd_downloads_list');
    if (archivesCol) {
      wooProductsTabletCol.forEach(function (v) {
        archivesCol.classList.remove(v);
      });
      archivesCol.classList.add('tablet-col');
      archivesCol.classList.add('tablet-' + newval + '-col');
    }
  });
});
api('ocean_edd_mobile_archive_columns', function (value) {
  value.bind(function (newval) {
    var archivesCol = document.querySelector('.oceanwp-row .edd_downloads_list');
    if (archivesCol) {
      wooProductsMobileCol.forEach(function (v) {
        archivesCol.classList.remove(v);
      });
      archivesCol.classList.add('mobile-col');
      archivesCol.classList.add('mobile-' + newval + '-col');
    }
  });
});
api('ocean_edd_archive_both_sidebars_content_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_edd_archive_both_sidebars_content_width');
    if (newval) {
      var style = '<style class="customizer-ocean_edd_archive_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.edd.archive.content-both-sidebars .content-area { width: ' + newval + api('ocean_edd_archive_both_sidebars_content_width_unit').get() + '; } body.edd.archive.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.edd.archive.content-both-sidebars.ssc-style .widget-area {left: -' + newval + api('ocean_edd_archive_both_sidebars_content_width_unit').get() + ';} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_edd_archive_both_sidebars_sidebars_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_edd_archive_both_sidebars_sidebars_width');
    if (newval) {
      var style = '<style class="customizer-ocean_edd_archive_both_sidebars_sidebars_width">@media only screen and (min-width: 960px){ body.edd.archive.content-both-sidebars .widget-area{width:' + newval + api('ocean_edd_archive_both_sidebars_sidebars_width_unit').get() + ';} body.edd.archive.content-both-sidebars.scs-style .content-area {left:' + newval + api('ocean_edd_archive_both_sidebars_sidebars_width_unit').get() + ';} body.edd.archive.content-both-sidebars.ssc-style .content-area {left:' + newval * 2 + api('ocean_edd_archive_both_sidebars_sidebars_width_unit').get() + ';} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_edd_download_both_sidebars_content_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_edd_download_both_sidebars_content_width');
    if (newval) {
      var style = '<style class="customizer-ocean_edd_download_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.single-edd.content-both-sidebars .content-area { width: ' + newval + api('ocean_edd_download_both_sidebars_content_width_unit').get() + '; } body.single-edd.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.single-edd.content-both-sidebars.ssc-style .widget-area {left: -' + newval + api('ocean_edd_download_both_sidebars_content_width_unit').get() + ';} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_edd_download_both_sidebars_sidebars_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_edd_download_both_sidebars_sidebars_width');
    if (newval) {
      var style = '<style class="customizer-ocean_edd_download_both_sidebars_sidebars_width">@media only screen and (min-width: 960px){ body.single-edd.content-both-sidebars .widget-area{width:' + newval + api('ocean_edd_download_both_sidebars_sidebars_width_unit').get() + ';} body.single-edd.content-both-sidebars.scs-style .content-area {left:' + newval + api('ocean_edd_download_both_sidebars_sidebars_width_unit').get() + ';} body.single-edd.content-both-sidebars.ssc-style .content-area {left:' + newval * 2 + api('ocean_edd_download_both_sidebars_sidebars_width_unit').get() + ';} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});

/***/ }),

/***/ "./src/live-preview/get-settings-object.js":
/*!*************************************************!*\
  !*** ./src/live-preview/get-settings-object.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ findSettingsInstances; }
/* harmony export */ });
function findSettingsInstances(obj, typeKey) {
  const getAllInstances = [];
  function recursiveFind(obj) {
    if (obj.type === typeKey) {
      getAllInstances.push(obj);
    }
    for (const key in obj) {
      if (obj[key] && typeof obj[key] === 'object') {
        recursiveFind(obj[key], typeKey);
      }
    }
  }
  recursiveFind(obj, typeKey);
  return getAllInstances;
}

/***/ }),

/***/ "./src/live-preview/ld.js":
/*!********************************!*\
  !*** ./src/live-preview/ld.js ***!
  \********************************/
/***/ (function() {

let api = wp.customize;
api('ocean_ld_global_both_sidebars_content_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_ld_global_both_sidebars_content_width');
    if (newval) {
      var style = '<style class="customizer-ocean_ld_global_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.ld-global-layout.content-both-sidebars .content-area { width: ' + newval + api('ocean_ld_global_both_sidebars_content_width_unit').get() + '; } body.ld-global-layout.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.ld-global-layout.content-both-sidebars.ssc-style .widget-area {left: -' + newval + api('ocean_ld_global_both_sidebars_content_width_unit').get() + ';} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_ld_global_both_sidebars_sidebars_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_ld_global_both_sidebars_sidebars_width');
    if (newval) {
      var style = '<style class="customizer-ocean_ld_global_both_sidebars_sidebars_width">@media only screen and (min-width: 960px){ body.ld-global-layout.content-both-sidebars .widget-area{width:' + newval + api('ocean_ld_global_both_sidebars_sidebars_width_unit').get() + ';} body.ld-global-layout.content-both-sidebars.scs-style .content-area {left:' + newval + api('ocean_ld_global_both_sidebars_sidebars_width_unit').get() + ';} body.ld-global-layout.content-both-sidebars.ssc-style .content-area {left:' + newval * 2 + api('ocean_ld_global_both_sidebars_sidebars_width_unit').get() + ';} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_ld_course_both_sidebars_content_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_ld_course_both_sidebars_content_width');
    if (newval) {
      var style = '<style class="customizer-ocean_ld_course_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.single-course.content-both-sidebars .content-area { width: ' + newval + api('ocean_ld_course_both_sidebars_sidebars_width_unit').get() + '; } body.single-course.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.single-course.content-both-sidebars.ssc-style .widget-area {left: -' + newval + api('ocean_ld_course_both_sidebars_sidebars_width_unit').get() + ';} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_ld_course_both_sidebars_sidebars_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_ld_course_both_sidebars_sidebars_width');
    if (newval) {
      var style = '<style class="customizer-ocean_ld_course_both_sidebars_sidebars_width">@media only screen and (min-width: 960px){ body.single-course.content-both-sidebars .widget-area{width:' + newval + api('ocean_ld_course_both_sidebars_sidebars_width_unit').get() + ';} body.single-course.content-both-sidebars.scs-style .content-area {left:' + newval + api('ocean_ld_course_both_sidebars_sidebars_width_unit').get() + ';} body.single-course.content-both-sidebars.ssc-style .content-area {left:' + newval * 2 + api('ocean_ld_course_both_sidebars_sidebars_width_unit').get() + ';} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_ld_lesson_both_sidebars_content_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_ld_lesson_both_sidebars_content_width');
    if (newval) {
      var style = '<style class="customizer-ocean_ld_lesson_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.single-lesson.content-both-sidebars .content-area { width: ' + newval + api('ocean_ld_lesson_both_sidebars_content_width_unit').get() + '; } body.single-lesson.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.single-lesson.content-both-sidebars.ssc-style .widget-area {left: -' + newval + api('ocean_ld_lesson_both_sidebars_content_width_unit').get() + ';} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_ld_lesson_both_sidebars_sidebars_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_ld_lesson_both_sidebars_sidebars_width');
    if (newval) {
      var style = '<style class="customizer-ocean_ld_lesson_both_sidebars_sidebars_width">@media only screen and (min-width: 960px){ body.single-lesson.content-both-sidebars .widget-area{width:' + newval + api('ocean_ld_lesson_both_sidebars_sidebars_width_unit').get() + ';} body.single-lesson.content-both-sidebars.scs-style .content-area {left:' + newval + api('ocean_ld_lesson_both_sidebars_sidebars_width_unit').get() + ';} body.single-lesson.content-both-sidebars.ssc-style .content-area {left:' + newval * 2 + api('ocean_ld_lesson_both_sidebars_sidebars_width_unit').get() + ';} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});

/***/ }),

/***/ "./src/live-preview/llms.js":
/*!**********************************!*\
  !*** ./src/live-preview/llms.js ***!
  \**********************************/
/***/ (function() {

let api = wp.customize,
  body = document.body,
  siteHeader = document.querySelector('#site-header'),
  llmsCol = ['1', '2', '3', '4', '5', '6'],
  llmsTabletCol = ['tablet-1-col', 'tablet-2-col', 'tablet-3-col', 'tablet-4-col', 'tablet-5-col', 'tablet-6-col'],
  llmsMobileCol = ['mobile-1-col', 'mobile-2-col', 'mobile-3-col', 'mobile-4-col', 'mobile-5-col', 'mobile-6-col'];
api('ocean_llms_courses_columns', function (value) {
  value.bind(function (newval) {
    var archivesCol = document.querySelector('.llms-loop-list.llms-course-list');
    if (archivesCol) {
      llmsCol.forEach(function (v) {
        archivesCol.classList.remove('cols-' + v);
      });
      archivesCol.classList.add('cols-' + newval);
    }
  });
});
api('ocean_llms_tablet_courses_columns', function (value) {
  value.bind(function (newval) {
    var archivesCol = document.querySelector('.llms-loop-list.llms-course-list');
    if (archivesCol) {
      llmsTabletCol.forEach(function (v) {
        archivesCol.classList.remove(v);
      });
      archivesCol.classList.add('tablet-col');
      archivesCol.classList.add('tablet-' + newval + '-col');
    }
  });
});
api('ocean_llms_mobile_courses_columns', function (value) {
  value.bind(function (newval) {
    var archivesCol = document.querySelector('.llms-loop-list.llms-course-list');
    if (archivesCol) {
      llmsMobileCol.forEach(function (v) {
        archivesCol.classList.remove(v);
      });
      archivesCol.classList.add('mobile-col');
      archivesCol.classList.add('mobile-' + newval + '-col');
    }
  });
});
api('ocean_llms_membership_columns', function (value) {
  value.bind(function (newval) {
    var archivesCol = document.querySelector('.llms-loop-list.llms-membership-list');
    if (archivesCol) {
      llmsCol.forEach(function (v) {
        archivesCol.classList.remove('cols-' + v);
      });
      archivesCol.classList.add('cols-' + newval);
    }
  });
});
api('ocean_llms_tablet_membership_columns', function (value) {
  value.bind(function (newval) {
    var archivesCol = document.querySelector('.llms-loop-list.llms-membership-list');
    if (archivesCol) {
      llmsTabletCol.forEach(function (v) {
        archivesCol.classList.remove(v);
      });
      archivesCol.classList.add('tablet-col');
      archivesCol.classList.add('tablet-' + newval + '-col');
    }
  });
});
api('ocean_llms_mobile_membership_columns', function (value) {
  value.bind(function (newval) {
    var archivesCol = document.querySelector('.llms-loop-list.llms-membership-list');
    if (archivesCol) {
      llmsMobileCol.forEach(function (v) {
        archivesCol.classList.remove(v);
      });
      archivesCol.classList.add('mobile-col');
      archivesCol.classList.add('mobile-' + newval + '-col');
    }
  });
});
api('ocean_llms_global_both_sidebars_content_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_llms_global_both_sidebars_content_width');
    if (newval) {
      var style = '<style class="customizer-ocean_llms_global_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.llms-global-layout.content-both-sidebars .content-area { width: ' + newval + api('ocean_llms_global_both_sidebars_content_width_unit').get() + '; } body.llms-global-layout.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.llms-global-layout.content-both-sidebars.ssc-style .widget-area {left: -' + newval + api('ocean_llms_global_both_sidebars_content_width_unit').get() + ';} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_llms_global_both_sidebars_sidebars_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_llms_global_both_sidebars_sidebars_width');
    if (newval) {
      var style = '<style class="customizer-ocean_llms_global_both_sidebars_sidebars_width">@media only screen and (min-width: 960px){ body.llms-global-layout.content-both-sidebars .widget-area{width:' + newval + api('ocean_llms_global_both_sidebars_sidebars_width_unit').get() + ';} body.llms-global-layout.content-both-sidebars.scs-style .content-area {left:' + newval + api('ocean_llms_global_both_sidebars_sidebars_width_unit').get() + ';} body.llms-global-layout.content-both-sidebars.ssc-style .content-area {left:' + newval * 2 + api('ocean_llms_global_both_sidebars_sidebars_width_unit').get() + ';} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_llms_course_both_sidebars_content_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_llms_course_both_sidebars_content_width');
    if (newval) {
      var style = '<style class="customizer-ocean_llms_course_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.single-course.content-both-sidebars .content-area { width: ' + newval + api('ocean_llms_course_both_sidebars_sidebars_width_unit').get() + '; } body.single-course.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.single-course.content-both-sidebars.ssc-style .widget-area {left: -' + newval + api('ocean_llms_course_both_sidebars_sidebars_width_unit').get() + ';} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_llms_course_both_sidebars_sidebars_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_llms_course_both_sidebars_sidebars_width');
    if (newval) {
      var style = '<style class="customizer-ocean_llms_course_both_sidebars_sidebars_width">@media only screen and (min-width: 960px){ body.single-course.content-both-sidebars .widget-area{width:' + newval + api('ocean_llms_course_both_sidebars_sidebars_width_unit').get() + ';} body.single-course.content-both-sidebars.scs-style .content-area {left:' + newval + api('ocean_llms_course_both_sidebars_sidebars_width_unit').get() + ';} body.single-course.content-both-sidebars.ssc-style .content-area {left:' + newval * 2 + api('ocean_llms_course_both_sidebars_sidebars_width_unit').get() + ';} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_llms_lesson_both_sidebars_content_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_llms_lesson_both_sidebars_content_width');
    if (newval) {
      var style = '<style class="customizer-ocean_llms_lesson_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.single-lesson.content-both-sidebars .content-area { width: ' + newval + api('ocean_llms_lesson_both_sidebars_content_width_unit').get() + '; } body.single-lesson.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.single-lesson.content-both-sidebars.ssc-style .widget-area {left: -' + newval + api('ocean_llms_lesson_both_sidebars_content_width_unit').get() + ';} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_llms_lesson_both_sidebars_sidebars_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_llms_lesson_both_sidebars_sidebars_width');
    if (newval) {
      var style = '<style class="customizer-ocean_llms_lesson_both_sidebars_sidebars_width">@media only screen and (min-width: 960px){ body.single-lesson.content-both-sidebars .widget-area{width:' + newval + api('ocean_llms_lesson_both_sidebars_sidebars_width_unit').get() + ';} body.single-lesson.content-both-sidebars.scs-style .content-area {left:' + newval + api('ocean_llms_lesson_both_sidebars_sidebars_width_unit').get() + ';} body.single-lesson.content-both-sidebars.ssc-style .content-area {left:' + newval * 2 + api('ocean_llms_lesson_both_sidebars_sidebars_width_unit').get() + ';} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});

/***/ }),

/***/ "./src/live-preview/range-slider.js":
/*!******************************************!*\
  !*** ./src/live-preview/range-slider.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GenerateRangeSliderCSSRule; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/live-preview/utils.js");


function GenerateRangeSliderCSSRule() {
  const optionData = oceanCustomizePreview.options;
  let settingInstances = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.findSettingsWithTypeQuery)(optionData, 'preview', 'ocean-range-slider', 'queryWithType');
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let settingsKey = {
      desktop: '',
      tablet: '',
      mobile: '',
      unit: ''
    };
    settingInstances.forEach(element => {
      for (const property in element.setting_args) {
        const settingId = element.setting_args[property].id;
        const settingValue = wp.customize(settingId).get();
        //console.log(settingId, settingValue);
        settingsKey[property] = settingValue;
      }
      for (const property in element.setting_args) {
        if (element.hasOwnProperty('css')) {
          //settingsKey.unit = '';
          wp.customize(element.setting_args[property].id, value => {
            if ('desktop' === property) {
              settingsKey.desktop = wp.customize(element.setting_args[property].id).get();
            } else if ('tablet' === property) {
              settingsKey.tablet = wp.customize(element.setting_args[property].id).get();
            } else if ('mobile' === property) {
              settingsKey.mobile = wp.customize(element.setting_args[property].id).get();
            } else if ('unit' === property) {
              settingsKey.unit = wp.customize(element.setting_args[property].id).get() || 'px';
            }
            value.bind(newVal => {
              if ('desktop' === property) {
                settingsKey.desktop = newVal;
              } else if ('tablet' === property) {
                settingsKey.tablet = newVal;
              } else if ('mobile' === property) {
                settingsKey.mobile = newVal;
              } else if ('unit' === property) {
                settingsKey.unit = newVal;
              }
              updateCSSRule(element.css, settingsKey, element.id);
            });
          });
        }
      }
    });
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      settingInstances.forEach(element => {
        const existingStyleElement = document.getElementById(`ocean-preview-css-${element.id}`);
        if (existingStyleElement) {
          document.head.removeChild(existingStyleElement);
        }
      });
    };
  }, [settingInstances]);
  return null;
}
function updateCSSRule(cssAttrs, settings, settingId) {
  const styleElement = document.createElement('style');
  styleElement.id = `ocean-preview-css-${settingId}`;
  const cssRule = [];

  // if (cssAttrs ) {
  //     for (const key in cssAttrs) {

  //         if (cssAttrs.hasOwnProperty(key)) {
  //             const property = cssAttrs[key];

  //             // For desktop
  //             const desktopRule = `${key} { ${property}: ${settings.desktop}${settings.unit || ''}; }`;
  //             cssRule.push(desktopRule);

  //             // For tablet
  //             if ( settings.tablet ) {
  //                 const tabletRule = `@media (max-width: 768px) { ${key} { ${property}: ${settings.tablet}${settings.unit || ''}; } }`;
  //                 cssRule.push(tabletRule);
  //             }

  //             // For mobile
  //             if ( settings.mobile ) {
  //                 const mobileRule = `@media (max-width: 480px) { ${key} { ${property}: ${settings.mobile}${settings.unit || ''}; } }`;
  //                 cssRule.push(mobileRule);
  //             }
  //         }

  //     }

  // }

  if (cssAttrs) {
    for (const selector in cssAttrs) {
      if (cssAttrs.hasOwnProperty(selector)) {
        const properties = cssAttrs[selector];
        let desktopRules = '';
        let tabletRules = '';
        let mobileRules = '';
        for (const propertyName in properties) {
          if (properties.hasOwnProperty(propertyName)) {
            const propertyValue = properties[propertyName];
            desktopRules += `${propertyValue}: ${settings.desktop}${settings.unit || ''}; `;
            if (settings.tablet) {
              tabletRules += `${propertyValue}: ${settings.tablet}${settings.unit || ''}; `;
            }
            if (settings.mobile) {
              mobileRules += `${propertyValue}: ${settings.mobile}${settings.unit || ''}; `;
            }
          }
        }

        // For desktop
        cssRule.push(`${selector} { ${desktopRules.trim()} }`);

        // For tablet
        if (tabletRules) {
          cssRule.push(`@media (max-width: 768px) { ${selector} { ${tabletRules.trim()} } }`);
        }

        // For mobile
        if (mobileRules) {
          cssRule.push(`@media (max-width: 480px) { ${selector} { ${mobileRules.trim()} } }`);
        }
      }
    }
  }
  styleElement.textContent = cssRule.join('\n');
  const existingStyleElement = document.getElementById(styleElement.id);
  if (existingStyleElement) {
    document.head.replaceChild(styleElement, existingStyleElement);
  } else {
    document.head.appendChild(styleElement);
  }
}

/***/ }),

/***/ "./src/live-preview/typography.js":
/*!****************************************!*\
  !*** ./src/live-preview/typography.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GenerateTypographyCSSRule; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _get_settings_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-settings-object */ "./src/live-preview/get-settings-object.js");


function GenerateTypographyCSSRule() {
  const optionData = oceanCustomizePreview.options;
  let typoInstances = (0,_get_settings_object__WEBPACK_IMPORTED_MODULE_1__["default"])(optionData, 'ocean-typography');
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    typoInstances.forEach(element => {
      const settingsKey = {
        fontFamily: '',
        fontSize: '',
        fontSizeTablet: '',
        fontSizeMobile: '',
        fontSizeUnit: 'px',
        fontWeight: '',
        fontWeightTablet: '',
        fontWeightMobile: '',
        lineHeight: '',
        lineHeightTablet: '',
        lineHeightMobile: '',
        lineHeightUnit: '',
        letterSpacing: '',
        letterSpacingTablet: '',
        letterSpacingMobile: '',
        letterSpacingUnit: '',
        textTransform: '',
        textTransformTablet: '',
        textTransformMobile: '',
        textDecoration: '',
        textColor: '',
        textColorHover: ''
      };
      for (const property in element.setting_args) {
        const settingId = element.setting_args[property].id;
        const settingValue = wp.customize(settingId).get();
        settingsKey[property] = settingValue;
      }
      for (const property in element.setting_args) {
        wp.customize(element.setting_args[property].id, value => {
          value.bind(newVal => {
            if ('fontFamily' === property) {
              settingsKey.fontFamily = newVal;
            } else if ('fontSize' === property) {
              settingsKey.fontSize = newVal;
            } else if ('fontSizeTablet' === property) {
              settingsKey.fontSizeTablet = newVal;
            } else if ('fontSizeMobile' === property) {
              settingsKey.fontSizeMobile = newVal;
            } else if ('fontSizeUnit' === property) {
              settingsKey.fontSizeUnit = newVal;
            } else if ('fontWeight' === property) {
              settingsKey.fontWeight = newVal;
            } else if ('fontWeightTablet' === property) {
              settingsKey.fontWeightTablet = newVal;
            } else if ('fontWeightMobile' === property) {
              settingsKey.fontWeightMobile = newVal;
            } else if ('lineHeight' === property) {
              settingsKey.lineHeight = newVal;
            } else if ('lineHeightTablet' === property) {
              settingsKey.lineHeightTablet = newVal;
            } else if ('lineHeightMobile' === property) {
              settingsKey.lineHeightMobile = newVal;
            } else if ('lineHeightUnit' === property) {
              settingsKey.lineHeightUnit = newVal;
            } else if ('letterSpacing' === property) {
              settingsKey.letterSpacing = newVal;
            } else if ('letterSpacingTablet' === property) {
              settingsKey.letterSpacingTablet = newVal;
            } else if ('letterSpacingMobile' === property) {
              settingsKey.letterSpacingMobile = newVal;
            } else if ('letterSpacingUnit' === property) {
              settingsKey.letterSpacingUnit = newVal;
            } else if ('textTransform' === property) {
              settingsKey.textTransform = newVal;
            } else if ('textTransformTablet' === property) {
              settingsKey.textTransformTablet = newVal;
            } else if ('textTransformMobile' === property) {
              settingsKey.textTransformMobile = newVal;
            } else if ('textDecoration' === property) {
              settingsKey.textDecoration = newVal;
            } else if ('textColor' === property) {
              settingsKey.textColor = newVal;
            } else if ('textColorHover' === property) {
              settingsKey.textColorHover = newVal;
            }
            updateCSSRule(element.selector, settingsKey, element.id);
          });
        });
      }
    });
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      typoInstances.forEach(element => {
        const existingStyleElement = document.getElementById(`ocean-preview-typography-${element.id}`);
        if (existingStyleElement) {
          document.head.removeChild(existingStyleElement);
        }
      });
    };
  }, [typoInstances]);
  return null;
}

// Function to update the CSS rule for an instance
function updateCSSRule(selector, settingsKey, settingId) {
  const cssRule = [];
  const cssRuleTablet = [];
  const cssRuleMobile = [];
  const isNumeric = value => {
    return !isNaN(value) && isFinite(value);
  };
  if (settingsKey.fontFamily) {
    cssRule.push(`font-family: ${settingsKey.fontFamily};`);
    const fontUrl = '//fonts.googleapis.com/css?family=';
    const googleFontArray = oceanCustomizePreview.googleFonts;
    //const fontWeight = '100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i';

    if (googleFontArray.indexOf(settingsKey.fontFamily) !== -1) {
      let linkElement = document.getElementById(`google-font-${settingsKey.fontFamily}`);
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.id = `google-font-${settingsKey.fontFamily}`;
        linkElement.rel = 'stylesheet';
        document.head.appendChild(linkElement);
      }
      linkElement.href = `${fontUrl}${settingsKey.fontFamily.replace(/ /g, '+')}:${settingsKey.fontWeight}`;

      // const linkElement = document.createElement('link');
      // linkElement.rel = 'stylesheet';
      // linkElement.href = `${fontUrl}${settingsKey.fontFamily.replace(/ /g, '+')}:${settingsKey.fontWeight}`;
      // document.head.appendChild(linkElement);
    } else {
      console.log('Google Font not found: ', settingsKey.fontFamily);
    }
  }
  if (settingsKey.fontSize || settingsKey.fontSizeUnit) {
    cssRule.push(`font-size: ${settingsKey.fontSize}${settingsKey.fontSizeUnit};`);
  }
  if (settingsKey.fontSizeTablet || settingsKey.fontSizeUnit) {
    cssRuleTablet.push(`font-size: ${settingsKey.fontSizeTablet}${settingsKey.fontSizeUnit};`);
  }
  if (settingsKey.fontSizeMobile || settingsKey.fontSizeUnit) {
    cssRuleMobile.push(`font-size: ${settingsKey.fontSizeMobile}${settingsKey.fontSizeUnit};`);
  }
  if (isNumeric(settingsKey.fontWeight)) {
    cssRule.push(`font-weight: ${settingsKey.fontWeight};`);
  }
  if (isNumeric(settingsKey.fontWeightTablet)) {
    cssRuleTablet.push(`font-weight: ${settingsKey.fontWeightTablet};`);
  }
  if (isNumeric(settingsKey.fontWeightMobile)) {
    cssRuleMobile.push(`font-weight: ${settingsKey.fontWeightMobile};`);
  }
  if (settingsKey.lineHeight || settingsKey.lineHeightUnit) {
    cssRule.push(`line-height: ${settingsKey.lineHeight}${settingsKey.lineHeightUnit};`);
  }
  if (settingsKey.lineHeightTablet || settingsKey.lineHeightUnit) {
    cssRuleTablet.push(`line-height: ${settingsKey.lineHeightTablet}${settingsKey.lineHeightUnit};`);
  }
  if (settingsKey.lineHeightMobile || settingsKey.lineHeightUnit) {
    cssRuleMobile.push(`line-height: ${settingsKey.lineHeightMobile}${settingsKey.lineHeightUnit};`);
  }
  if (settingsKey.letterSpacing || settingsKey.letterSpacingUnit) {
    cssRule.push(`letter-spacing: ${settingsKey.letterSpacing}${settingsKey.letterSpacingUnit};`);
  }
  if (settingsKey.letterSpacingTablet || settingsKey.letterSpacingUnit) {
    cssRuleTablet.push(`letter-spacing: ${settingsKey.letterSpacingTablet}${settingsKey.letterSpacingUnit};`);
  }
  if (settingsKey.letterSpacingMobile || settingsKey.letterSpacingUnit) {
    cssRuleMobile.push(`letter-spacing: ${settingsKey.letterSpacingMobile}${settingsKey.letterSpacingUnit};`);
  }
  if (settingsKey.textTransform) {
    cssRule.push(`text-transform: ${settingsKey.textTransform};`);
  }
  if (settingsKey.textTransformTablet) {
    cssRuleTablet.push(`text-transform: ${settingsKey.textTransformTablet};`);
  }
  if (settingsKey.textTransformMobile) {
    cssRuleMobile.push(`text-transform: ${settingsKey.textTransformMobile};`);
  }
  if (settingsKey.textDecoration) {
    cssRule.push(`text-decoration: ${settingsKey.textDecoration};`);
  }
  if (settingsKey.textColor) {
    cssRule.push(`color: ${settingsKey.textColor};`);
  }
  const combinedCSS = cssRule.join(' ');
  const combinedCSSTablet = cssRuleTablet.join(' ');
  const combinedCSSMobile = cssRuleMobile.join(' ');
  const styleElement = document.createElement('style');
  styleElement.id = `ocean-preview-typography-${settingId}`;
  styleElement.textContent = `${selector} { ${combinedCSS} }`;
  if (combinedCSSTablet) {
    styleElement.textContent += `@media (max-width: 768px) { ${selector} { ${combinedCSSTablet} }}`;
  }
  if (combinedCSSMobile) {
    styleElement.textContent += `@media (max-width: 480px) { ${selector} { ${combinedCSSMobile} }}`;
  }
  if (settingsKey.textColorHover) {
    styleElement.textContent += `${selector}:hover { color: ${settingsKey.textColorHover}; }`;
  }
  const existingStyleElement = document.getElementById(styleElement.id);
  if (existingStyleElement) {
    document.head.replaceChild(styleElement, existingStyleElement);
  } else {
    document.head.appendChild(styleElement);
  }
}

// import { useEffect } from '@wordpress/element';
// import findSettingsInstances from './get-settings-object';

// export default function GenerateTypographyCSSRule() {

// 	const optionData = oceanCustomizePreview.options;
// 	let typoInstances = findSettingsInstances(optionData, 'ocean-typography');

// 	useEffect(() => {

// 		typoInstances.forEach((element) => {

// 			const settingsKey = {
// 				fontFamily: '',
// 				fontSize: '',
// 				fontSizeTablet: '',
// 				fontSizeMobile: '',
// 				fontSizeUnit: 'px',
// 				fontWeight: '',
// 				fontWeightTablet: '',
// 				fontWeightMobile: '',
// 				lineHeight: '',
//                 lineHeightTablet: '',
//                 lineHeightMobile: '',
//                 lineHeightUnit: '',
//                 letterSpacing: '',
//                 letterSpacingTablet: '',
//                 letterSpacingMobile: '',
//                 letterSpacingUnit: '',
//                 textTransform: '',
//                 textTransformTablet: '',
//                 textTransformMobile: '',
// 				textDecoration: '',
// 				textColor: '',
//                 textColorHover: '',
// 			};

// 			for (const property in element.setting_args) {
//                 const settingId = element.setting_args[property].id;
//                 const settingValue = wp.customize(settingId).get();
//                 settingsKey[property] = settingValue;
//             }

// 			for (const property in element.setting_args) {
// 				wp.customize(element.setting_args[property].id, (value) => {
// 					value.bind((newVal) => {

// 						if ('fontFamily' === property) {
// 							settingsKey.fontFamily = newVal;
// 						} else if ('fontSize' === property) {
// 							settingsKey.fontSize = newVal;
// 						} else if ('fontSizeTablet' === property) {
// 							settingsKey.fontSizeTablet = newVal;
// 						} else if ('fontSizeMobile' === property) {
// 							settingsKey.fontSizeMobile = newVal;
// 						} else if ('fontSizeUnit' === property) {
// 							settingsKey.fontSizeUnit = newVal;
// 						} else if ('fontWeight' === property) {
// 							settingsKey.fontWeight = newVal;
// 						} else if ('fontWeightTablet' === property) {
// 							settingsKey.fontWeightTablet = newVal;
// 						} else if ('fontWeightMobile' === property) {
// 							settingsKey.fontWeightMobile = newVal;
// 						} else if ('lineHeight' === property) {
// 							settingsKey.lineHeight = newVal;
// 						} else if ('lineHeightTablet' === property) {
// 							settingsKey.lineHeightTablet = newVal;
// 						} else if ('lineHeightMobile' === property) {
// 							settingsKey.lineHeightMobile = newVal;
// 						} else if ('lineHeightUnit' === property) {
// 							settingsKey.lineHeightUnit = newVal;
// 						} else if ('letterSpacing' === property) {
// 							settingsKey.letterSpacing = newVal;
// 						} else if ('letterSpacingTablet' === property) {
// 							settingsKey.letterSpacingTablet = newVal;
// 						} else if ('letterSpacingMobile' === property) {
// 							settingsKey.letterSpacingMobile = newVal;
// 						} else if ('letterSpacingUnit' === property) {
// 							settingsKey.letterSpacingUnit = newVal;
// 						} else if ('textTransform' === property) {
// 							settingsKey.textTransform = newVal;
// 						} else if ('textTransformTablet' === property) {
// 							settingsKey.textTransformTablet = newVal;
// 						} else if ('textTransformMobile' === property) {
// 							settingsKey.textTransformMobile = newVal;
// 						} else if ('textDecoration' === property) {
// 								settingsKey.textDecoration = newVal;
// 						} else if ('textColor' === property) {
// 							settingsKey.textColor = newVal;
// 						} else if ('textColorHover' === property) {
// 							settingsKey.textColorHover = newVal;
// 						}

// 						updateCSSRule(element.selector, settingsKey, element.id);

// 					});
// 				});
// 			}
// 		});
// 	}, []);

// 	useEffect(() => {
// 		return () => {
// 			typoInstances.forEach((element) => {
// 				const existingStyleElement = document.getElementById(`ocean-preview-typography-${element.id}`);
// 				if (existingStyleElement) {
// 					document.head.removeChild(existingStyleElement);
// 				}
// 			});
// 		};
// 	}, [typoInstances]);

//   return null;
// }

// // Function to update the CSS rule for an instance
// function updateCSSRule(selector, settingsKey, settingId) {

// 	const cssRule = [];
// 	const cssRuleTablet = [];
// 	const cssRuleMobile = [];

// 	if (settingsKey.fontFamily) {
// 		cssRule.push(`font-family: ${settingsKey.fontFamily};`);

// 		const fontUrl = '//fonts.googleapis.com/css?family=';
// 		const googleFontArray = oceanCustomizePreview.googleFonts;
// 		const fontWeights = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
// 		const fontStyles = ['normal', 'italic'];

// 		if (googleFontArray.indexOf(settingsKey.fontFamily) !== -1) {
// 			const fontVariants = fontWeights.map(weight => fontStyles.map(style => `${weight}${style === 'italic' ? 'i' : ''}`)).flat().join(',');
// 			const linkElement = document.createElement('link');
// 			linkElement.rel = 'stylesheet';
// 			linkElement.href = `${fontUrl}${settingsKey.fontFamily.replace(/ /g, '+')}:${fontVariants}`;
// 			document.head.appendChild(linkElement);
// 		} else {
// 			console.log('Google Font not found: ', settingsKey.fontFamily);
// 		}
// 	}

// 	if ( settingsKey.fontSize || settingsKey.fontSizeUnit) {
// 		cssRule.push(`font-size: ${settingsKey.fontSize}${settingsKey.fontSizeUnit};`);
// 	}

// 	if ( settingsKey.fontSizeTablet || settingsKey.fontSizeUnit) {
// 		cssRuleTablet.push(`font-size: ${settingsKey.fontSizeTablet}${settingsKey.fontSizeUnit};`);
// 	}

// 	if ( settingsKey.fontSizeMobile || settingsKey.fontSizeUnit) {
// 		cssRuleMobile.push(`font-size: ${settingsKey.fontSizeMobile}${settingsKey.fontSizeUnit};`);
// 	}

// 	if ( settingsKey.fontWeight ) {
// 		cssRule.push(`font-weight: ${settingsKey.fontWeight};`);
// 	}

// 	if ( settingsKey.fontWeightTablet ) {
// 		cssRuleTablet.push(`font-weight: ${settingsKey.fontWeightTablet};`);
// 	}

// 	if ( settingsKey.fontWeightMobile ) {
// 		cssRuleMobile.push(`font-weight: ${settingsKey.fontWeightMobile};`);
// 	}

// 	if ( settingsKey.lineHeight || settingsKey.lineHeightUnit ) {
// 		cssRule.push(`line-height: ${settingsKey.lineHeight}${settingsKey.lineHeightUnit};`);
// 	}

// 	if ( settingsKey.lineHeightTablet || settingsKey.lineHeightUnit ) {
// 		cssRuleTablet.push(`line-height: ${settingsKey.lineHeightTablet}${settingsKey.lineHeightUnit};`);
// 	}

// 	if ( settingsKey.lineHeightMobile || settingsKey.lineHeightUnit ) {
// 		cssRuleMobile.push(`line-height: ${settingsKey.lineHeightMobile}${settingsKey.lineHeightUnit};`);
// 	}

// 	if ( settingsKey.letterSpacing || settingsKey.letterSpacingUnit ) {
// 		cssRule.push(`letter-spacing: ${settingsKey.letterSpacing}${settingsKey.letterSpacingUnit};`);
// 	}

// 	if ( settingsKey.letterSpacingTablet || settingsKey.letterSpacingUnit ) {
// 		cssRuleTablet.push(`letter-spacing: ${settingsKey.letterSpacingTablet}${settingsKey.letterSpacingUnit};`);
// 	}

// 	if ( settingsKey.letterSpacingMobile || settingsKey.letterSpacingUnit) {
// 		cssRuleMobile.push(`letter-spacing: ${settingsKey.letterSpacingMobile}${settingsKey.letterSpacingUnit};`);
// 	}

// 	if ( settingsKey.textTransform ) {
// 		cssRule.push(`text-transform: ${settingsKey.textTransform};`);
// 	}

// 	if ( settingsKey.textTransformTablet ) {
// 		cssRuleTablet.push(`text-transform: ${settingsKey.textTransformTablet};`);
// 	}

// 	if ( settingsKey.textTransformMobile ) {
// 		cssRuleMobile.push(`text-transform: ${settingsKey.textTransformMobile};`);
// 	}

// 	if ( settingsKey.textDecoration ) {
// 		cssRule.push(`text-decoration: ${settingsKey.textDecoration};`);
// 	}

// 	if ( settingsKey.textColor ) {
// 		cssRule.push(`color: ${settingsKey.textColor};`);
// 	}

// 	const combinedCSS = cssRule.join(' ');
// 	const combinedCSSTablet = cssRuleTablet.join(' ');
// 	const combinedCSSMobile = cssRuleMobile.join(' ');
// 	const styleElement = document.createElement('style');

// 	styleElement.id = `ocean-preview-typography-${settingId}`;
// 	styleElement.textContent = `${selector} { ${combinedCSS} }`;

// 	if ( combinedCSSTablet ) {
// 		styleElement.textContent += `@media (max-width: 768px) { ${selector} { ${combinedCSSTablet} }}`;
// 	}

// 	if ( combinedCSSMobile ) {
// 		styleElement.textContent += `@media (max-width: 480px) { ${selector} { ${combinedCSSMobile} }}`;
// 	}

// 	if ( settingsKey.textColorHover ) {
// 		styleElement.textContent += `${selector}:hover { color: ${settingsKey.textColorHover}; }`;
// 	}

// 	const existingStyleElement = document.getElementById(styleElement.id);

// 	if (existingStyleElement) {
// 		document.head.replaceChild(styleElement, existingStyleElement);
// 	} else {
// 		document.head.appendChild(styleElement);
// 	}
// }

/***/ }),

/***/ "./src/live-preview/utils.js":
/*!***********************************!*\
  !*** ./src/live-preview/utils.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findSettingsWithQuery: function() { return /* binding */ findSettingsWithQuery; },
/* harmony export */   findSettingsWithTypeQuery: function() { return /* binding */ findSettingsWithTypeQuery; },
/* harmony export */   oceanSpacing: function() { return /* binding */ oceanSpacing; }
/* harmony export */ });
// export default function findSettingsWithCSSRule(obj, attr, value) {
//     const getAllInstances = [];

//     function recursiveFind(obj) {
//         if (obj[attr] === value) {
//             getAllInstances.push(obj);
//         }

//         for (const key in obj) {
//             if (obj[key] && typeof obj[key] === 'object') {
//             recursiveFind(obj[key], attr);
//             }
//         }
//     }

//     recursiveFind(obj, attr);

//     return getAllInstances;
// }

function findSettingsWithTypeQuery(obj, attr, typeKey, value) {
  const getAllInstances = [];
  function recursiveFind(obj) {
    if (obj[attr] === value && obj.type === typeKey) {
      getAllInstances.push(obj);
    }
    for (const key in obj) {
      if (obj[key] && typeof obj[key] === 'object') {
        recursiveFind(obj[key], attr, typeKey);
      }
    }
  }
  recursiveFind(obj, attr, typeKey);
  return getAllInstances;
}
function findSettingsWithQuery(obj, attr, value) {
  const getAllInstances = [];
  function recursiveFind(obj) {
    if (obj[attr] === value) {
      getAllInstances.push(obj);
    }
    for (const key in obj) {
      if (obj[key] && typeof obj[key] === 'object') {
        recursiveFind(obj[key], attr);
      }
    }
  }
  recursiveFind(obj, attr);
  return getAllInstances;
}

/**
* It helps to output responsive spacing value.
*/

function oceanSpacing(top, right, bottom, left, unit) {
  let spacingTop = '',
    spacingRight = '',
    spacingBottom = '',
    spacingLeft = '';
  spacingTop = top ? top : '';
  spacingRight = right ? right : '';
  spacingBottom = bottom ? bottom : '';
  spacingLeft = left ? left : '';
  return oceanSpacingData(spacingTop, spacingRight, spacingBottom, spacingLeft, unit);
}
function oceanSpacingData(top, right, bottom, left, unit) {
  if ('' === top && '' === right && '' === bottom && '' === left) {
    return;
  }

  // Spacing unit
  unit = unit ? unit : 'px';

  // CSS spacing value: top, right, bottom, left
  top = parseInt(top) && '' !== top ? parseInt(top) + unit : '0' + unit;
  right = parseInt(right) && '' !== right ? parseInt(right) + unit : '0' + unit;
  bottom = parseInt(bottom) && '' !== bottom ? parseInt(bottom) + unit : '0' + unit;
  left = parseInt(left) && '' !== left ? parseInt(left) + unit : '0' + unit;

  // Get spacing value
  if (parseInt(top) === parseInt(right) && parseInt(right) === parseInt(bottom) && parseInt(bottom) === parseInt(left)) {
    return left;
  }
  return top + ' ' + right + ' ' + bottom + ' ' + left;
}

/***/ }),

/***/ "./src/live-preview/woocommerce.js":
/*!*****************************************!*\
  !*** ./src/live-preview/woocommerce.js ***!
  \*****************************************/
/***/ (function() {

let api = wp.customize,
  body = document.body,
  siteHeader = document.querySelector('#site-header'),
  wooCatStyle = ['woo-default-cat', 'woo-dropdown-cat'],
  wooAccountStyle = ['account-side-style', 'account-original-style'],
  wooSaleStyle = ['square-sale', 'circle-sale'],
  wooCartStyle = ['compact', 'spacious'],
  wooProductsCol = ['1', '2', '3', '4', '5', '6', '7'],
  wooProductsTabletCol = ['tablet-1-col', 'tablet-2-col', 'tablet-3-col', 'tablet-4-col', 'tablet-5-col', 'tablet-6-col', 'tablet-7-col'],
  wooProductsMobileCol = ['mobile-1-col', 'mobile-2-col', 'mobile-3-col', 'mobile-4-col', 'mobile-5-col', 'mobile-6-col', 'mobile-7-col'],
  wooContentAlignment = ['owp-content-left', 'owp-content-right', 'owp-content-center'],
  wooThumbsPosition = ['owp-thumbs-layout-horizontal', 'owp-thumbs-layout-vertical'],
  wooAddToCartStyle = ['owp-btn-normal', 'owp-btn-big', 'owp-btn-very-big'],
  wooTabsLayout = ['owp-tabs-layout-horizontal', 'owp-tabs-layout-vertical', 'owp-tabs-layout-section'],
  wooTabsPosition = ['woo-left-tabs', 'woo-right-tabs', 'woo-center-tabs'],
  wooCheckoutTimeline = ['arrow', 'square'];
api('ocean_woo_cat_widget_style', function (value) {
  value.bind(function (newval) {
    if (body.length) {
      wooCatStyle.forEach(function (v) {
        body.classList.remove(v);
      });
      body.classList.add('woo-' + newval + '-cat');
    }
  });
});
api('ocean_woo_sale_badge_style', function (value) {
  value.bind(function (newval) {
    var sale_style = document.querySelector('.woocommerce div.product');
    if (sale_style.length) {
      wooCatStyle.forEach(function (v) {
        sale_style.classList.remove(v);
      });
      sale_style.classList.add(newval + '-sale');
    }
  });
});
api('ocean_woo_off_canvas_filter_text', function (value) {
  value.bind(function (newval) {
    var filterText = document.querySelector('.oceanwp-off-canvas-filter .off-canvas-filter-text');
    filterText.innerHTML = newval;
  });
});
api('ocean_woo_cart_dropdown_style', function (value) {
  value.bind(function (newval) {
    var cart = document.querySelector('.woo-menu-icon');
    if (cart.length) {
      wooCatStyle.forEach(function (v) {
        cart.classList.remove(v);
      });
      cart.classList.add(newval);
    }
  });
});
api('ocean_woo_menu_custom_icon', function (value) {
  value.bind(function (newval) {
    var cart = document.querySelector('#site-navigation-wrap .dropdown-menu > li > a.wcmenucart i');
    if (cart.length) {
      cart.classList.remove();
      cart.classList.add(newval);
    }
  });
});
api('ocean_woocommerce_shop_columns', function (value) {
  value.bind(function (newval) {
    var archivesCol = document.querySelectorAll('.woocommerce .products .product');
    if (archivesCol.length) {
      for (var i = 0; i < archivesCol.length; i++) {
        var v = archivesCol[i].classList[1].split('_')[3];
        archivesCol[i].parentNode.classList.remove('archives-col-' + v);
        archivesCol[i].classList.remove('span_1_of_' + v);
      }
      for (var i = 0; i < archivesCol.length; i++) {
        archivesCol[i].parentNode.classList.add('custom-col', 'archives-col-' + newval);
        archivesCol[i].classList.add('span_1_of_' + newval);
      }
    }
  });
});
api('ocean_woocommerce_tablet_shop_columns', function (value) {
  value.bind(function (newval) {
    var archivesCol = document.querySelector('.woocommerce .products');
    if (archivesCol) {
      wooProductsTabletCol.forEach(function (v) {
        archivesCol.classList.remove(v);
      });
      archivesCol.classList.add('tablet-col');
      archivesCol.classList.add('tablet-' + newval + '-col');
    }
  });
});
api('ocean_woocommerce_mobile_shop_columns', function (value) {
  value.bind(function (newval) {
    var archivesCol = document.querySelector('.woocommerce .products');
    if (archivesCol) {
      wooProductsMobileCol.forEach(function (v) {
        archivesCol.classList.remove(v);
      });
      archivesCol.classList.add('mobile-col');
      archivesCol.classList.add('mobile-' + newval + '-col');
    }
  });
});
api('ocean_woo_product_entry_content_alignment', function (value) {
  value.bind(function (newval) {
    var contentAlignment = document.querySelectorAll('.woocommerce .products .product');
    if (contentAlignment.length) {
      wooContentAlignment.forEach(function (v) {
        contentAlignment.forEach(function (elem) {
          elem.classList.remove(v);
        });
      });
      contentAlignment.forEach(function (elem) {
        elem.classList.add('owp-content-' + newval);
      });
    }
  });
});
api('ocean_woo_infinite_scroll_last_text', function (value) {
  value.bind(function (newval) {
    var customText = document.querySelector('.woocommerce .infinite-scroll-last');
    customText.innerHTML = newval;
  });
});
api('ocean_woo_infinite_scroll_error_text', function (value) {
  value.bind(function (newval) {
    var customText = document.querySelector('.woocommerce .infinite-scroll-error');
    customText.innerHTML = newval;
  });
});
api('ocean_woo_product_thumbs_layout', function (value) {
  value.bind(function (newval) {
    var thumbsLayout = document.querySelectorAll('.woocommerce div.product');
    if (thumbsLayout.length) {
      wooThumbsPosition.forEach(function (v) {
        thumbsLayout.forEach(function (elem) {
          elem.classList.remove(v);
        });
      });
      thumbsLayout.forEach(function (elem) {
        elem.classList.add('owp-thumbs-layout-' + newval);
      });
    }
  });
});
api('ocean_woo_product_addtocart_style', function (value) {
  value.bind(function (newval) {
    var addToCartStyle = document.querySelectorAll('.woocommerce div.product');
    if (addToCartStyle.length) {
      wooAddToCartStyle.forEach(function (v) {
        addToCartStyle.forEach(function (elem) {
          elem.classList.remove(v);
        });
      });
      addToCartStyle.forEach(function (elem) {
        elem.classList.add('owp-btn-' + newval);
      });
    }
  });
});
api('ocean_woo_product_tabs_layout', function (value) {
  value.bind(function (newval) {
    var tabsLayout = document.querySelectorAll('.woocommerce div.product');
    if (tabsLayout.length) {
      wooTabsLayout.forEach(function (v) {
        tabsLayout.forEach(function (elem) {
          elem.classList.remove(v);
        });
      });
      tabsLayout.forEach(function (elem) {
        elem.classList.add('owp-tabs-layout-' + newval);
      });
    }
  });
});
api('ocean_woo_product_meta_tabs_position', function (value) {
  value.bind(function (newval) {
    if (document.body) {
      wooTabsPosition.forEach(function (v) {
        document.body.classList.remove(v);
      });
      document.body.classList.add('woo-' + newval + '-tabs');
    }
  });
});
api('ocean_woo_multi_step_checkout_timeline_style', function (value) {
  value.bind(function (newval) {
    var timeline = document.getElementById('owp-checkout-timeline');
    if (timeline) {
      wooCheckoutTimeline.forEach(function (v) {
        timeline.classList.remove(v);
      });
      timeline.classList.add(newval);
    }
  });
});
api('ocean_woo_shop_both_sidebars_content_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_page_single_both_sidebars_content_width');
    if (newval) {
      var style = '<style class="customizer-ocean_woo_shop_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.woocommerce.archive.content-both-sidebars .content-area { width: ' + newval + api('ocean_woo_shop_both_sidebars_content_width_unit').get() + '; } body.woocommerce.archive.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.woocommerce.archive.content-both-sidebars.ssc-style .widget-area {left: -' + newval + api('ocean_woo_shop_both_sidebars_content_width_unit').get() + ';} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_woo_shop_both_sidebars_sidebars_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_woo_shop_both_sidebars_sidebars_width');
    if (newval) {
      var style = '<style class="customizer-ocean_woo_shop_both_sidebars_sidebars_width">@media only screen and (min-width: 960px){ body.woocommerce.archive.content-both-sidebars .widget-area{width:' + newval + api('ocean_woo_shop_both_sidebars_sidebars_width_unit').get() + ';} body.woocommerce.archive.content-both-sidebars.scs-style .content-area{left:' + newval + api('ocean_woo_shop_both_sidebars_sidebars_width_unit').get() + ';} body.woocommerce.archive.content-both-sidebars.ssc-style .content-area{left:' + newval * 2 + api('ocean_woo_shop_both_sidebars_sidebars_width_unit').get() + ';} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_woo_product_both_sidebars_content_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_woo_product_both_sidebars_content_width');
    if (newval) {
      var style = '<style class="customizer-ocean_woo_product_both_sidebars_content_width">@media only screen and (min-width: 960px){ body.single-product.content-both-sidebars .content-area { width: ' + newval + api('ocean_woo_product_both_sidebars_content_width_unit').get() + '; } body.single-product.content-both-sidebars.scs-style .widget-area.sidebar-secondary, body.single-product.content-both-sidebars.ssc-style .widget-area {left: -' + newval + api('ocean_woo_product_both_sidebars_content_width_unit').get() + ';} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_woo_product_both_sidebars_sidebars_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_woo_product_both_sidebars_sidebars_width');
    if (newval) {
      var style = '<style class="customizer-ocean_woo_product_both_sidebars_sidebars_width">@media only screen and (min-width: 960px){ body.single-product.content-both-sidebars .widget-area{width:' + newval + api('ocean_woo_product_both_sidebars_sidebars_width_unit').get() + ';} body.single-product.content-both-sidebars.scs-style .content-area {left:' + newval + api('ocean_woo_product_both_sidebars_sidebars_width_unit').get() + ';} body.single-product.content-both-sidebars.ssc-style .content-area{left:' + newval * 2 + api('ocean_woo_product_both_sidebars_sidebars_width_unit').get() + ';} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_woo_product_image_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_woo_product_image_width');
    if (newval) {
      var style = '<style class="customizer-ocean_woo_product_image_width">.woocommerce div.product div.images, .woocommerce.content-full-width div.product div.images{width:' + newval + api('ocean_woo_product_image_width_unit').get() + ';} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});
api('ocean_woo_product_summary_width', function (value) {
  value.bind(function (newval) {
    var child = document.querySelector('.customizer-ocean_woo_product_summary_width');
    if (newval) {
      var style = '<style class="customizer-ocean_woo_product_summary_width">.woocommerce div.product div.summary, .woocommerce.content-full-width div.product div.summary{width:' + newval + api('ocean_woo_product_summary_width_unit').get() + ';} }</style>';
      if (child) {
        child.outerHTML = style;
      } else {
        var head = document.querySelector('head');
        head.insertAdjacentHTML('beforeend', style);
      }
    } else {
      if (child) {
        child.remove();
      }
    }
  });
});

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***********************************!*\
  !*** ./src/live-preview/index.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typography */ "./src/live-preview/typography.js");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colors */ "./src/live-preview/colors.js");
/* harmony import */ var _range_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./range-slider */ "./src/live-preview/range-slider.js");
/* harmony import */ var _dimension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dimension */ "./src/live-preview/dimension.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common */ "./src/live-preview/common.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom */ "./src/live-preview/custom.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_custom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./woocommerce */ "./src/live-preview/woocommerce.js");
/* harmony import */ var _woocommerce__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _edd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edd */ "./src/live-preview/edd.js");
/* harmony import */ var _edd__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_edd__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _llms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./llms */ "./src/live-preview/llms.js");
/* harmony import */ var _llms__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_llms__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ld__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ld */ "./src/live-preview/ld.js");
/* harmony import */ var _ld__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ld__WEBPACK_IMPORTED_MODULE_11__);






//import GenerateCommonWithTypeCSSRule from './common-with-type';

 // Make sure to import React






window.addEventListener('DOMContentLoaded', () => {
  const styleTag = document.createElement('style');
  if (typeof _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot === 'function') {
    const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(styleTag);
    root.render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_typography__WEBPACK_IMPORTED_MODULE_1__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_colors__WEBPACK_IMPORTED_MODULE_2__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_range_slider__WEBPACK_IMPORTED_MODULE_3__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dimension__WEBPACK_IMPORTED_MODULE_4__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
  } else {
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_typography__WEBPACK_IMPORTED_MODULE_1__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_colors__WEBPACK_IMPORTED_MODULE_2__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_range_slider__WEBPACK_IMPORTED_MODULE_3__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dimension__WEBPACK_IMPORTED_MODULE_4__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common__WEBPACK_IMPORTED_MODULE_5__["default"], null)), styleTag);
  }

  // Append the styleTag to the document's head or wherever you want it
  document.head.appendChild(styleTag);
});
}();
/******/ })()
;
//# sourceMappingURL=live-preview.js.map