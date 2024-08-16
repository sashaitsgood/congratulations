/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/reset.css */ \"./css/reset.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.css */ \"./css/main.css\");\n/* harmony import */ var _css_icomoon_icomoon_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/icomoon/icomoon.css */ \"./css/icomoon/icomoon.css\");\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script.js */ \"./js/script.js\");\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_script_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack://congratulations-ready/./js/index.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ (() => {

eval("// Slider img\nconst sliderArrow = document.querySelector('.slider-arrow');\nslidesArrow = document.querySelectorAll('.slider-arrow__item');\nprev = sliderArrow.querySelector('.slider-arrow--left');\nnext = sliderArrow.querySelector('.slider-arrow--right');\nlet slideIndex = 0;\nprev.addEventListener('click', () => showSlideArrow(-1));\nnext.addEventListener('click', () => showSlideArrow(1));\nfunction showSlideArrow(n) {\n  slideIndex += n;\n  if (slideIndex < 0) slideIndex = slidesArrow.length - 1;\n  if (slideIndex >= slidesArrow.length) slideIndex = 0;\n  slidesArrow.forEach(item => item.style.display = 'none');\n  slidesArrow[slideIndex].style.display = 'block';\n}\nshowSlideArrow(0);\n\n// Burger\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  document.getElementById(\"burger\").addEventListener(\"click\", function () {\n    document.querySelector(\"header\").classList.toggle(\"open\");\n  });\n});\n\n// Modal\n!function (e) {\n  \"function\" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function (e) {\n    for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;) ++n;\n    return Boolean(o[n]);\n  }), \"function\" != typeof e.closest && (e.closest = function (e) {\n    for (var t = this; t && 1 === t.nodeType;) {\n      if (t.matches(e)) return t;\n      t = t.parentNode;\n    }\n    return null;\n  });\n}(window.Element.prototype);\ndocument.addEventListener('DOMContentLoaded', function () {\n  var modalButtons = document.querySelectorAll('.js-open-modal'),\n    overlay = document.querySelector('.js-overlay-modal'),\n    closeButtons = document.querySelectorAll('.js-close-modal');\n  modalButtons.forEach(function (item) {\n    item.addEventListener('click', function (e) {\n      e.preventDefault();\n      var modalId = this.getAttribute('data-modal'),\n        modalElem = document.querySelector('.modal[data-modal=\"' + modalId + '\"]');\n      modalElem.classList.add('active');\n      overlay.classList.add('active');\n    });\n  });\n  closeButtons.forEach(function (item) {\n    item.addEventListener('click', function (e) {\n      var parentModal = this.closest('.modal');\n      parentModal.classList.remove('active');\n      overlay.classList.remove('active');\n    });\n  });\n  document.body.addEventListener('keyup', function (e) {\n    var key = e.keyCode;\n    if (key == 27) {\n      document.querySelector('.modal.active').classList.remove('active');\n      document.querySelector('.overlay').classList.remove('active');\n    }\n    ;\n  }, false);\n  overlay.addEventListener('click', function () {\n    document.querySelector('.modal.active').classList.remove('active');\n    this.classList.remove('active');\n  });\n});\ndocument.getElementById('form-modal-feadback').reset();\ndocument.getElementById('form-modal-entrance').reset();\n\n// Mobile search\ndocument.getElementById(\"open-mobile-search\").addEventListener(\"click\", function () {\n  document.getElementById(\"mobile-search\").classList.add(\"open\");\n});\nwindow.addEventListener('keydown', e => {\n  if (e.key === \"Escape\") {\n    document.getElementById(\"mobile-search\").classList.remove(\"open\");\n  }\n});\ndocument.querySelector(\"#mobile-search .mobile-search__content\").addEventListener('click', event => {\n  event._isClickWithInModal = true;\n});\ndocument.getElementById(\"mobile-search\").addEventListener('click', event => {\n  if (event._isClickWithInModal) return;\n  event.currentTarget.classList.remove('open');\n});\n\n//# sourceURL=webpack://congratulations-ready/./js/script.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://congratulations-ready/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://congratulations-ready/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://congratulations-ready/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/icomoon/icomoon.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/icomoon/icomoon.css ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/icomoon.eot?wfnreg */ \"./css/icomoon/fonts/icomoon.eot?wfnreg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/icomoon.ttf?wfnreg */ \"./css/icomoon/fonts/icomoon.ttf?wfnreg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! fonts/icomoon.woff?wfnreg */ \"./css/icomoon/fonts/icomoon.woff?wfnreg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! fonts/icomoon.svg?wfnreg */ \"./css/icomoon/fonts/icomoon.svg?wfnreg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___, { hash: \"#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___, { hash: \"#icomoon\" });\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: \"icomoon\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(\"embedded-opentype\"), url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format(\"truetype\"), url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format(\"woff\"), url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: block;\n}\n[class^=icon-], [class*=\" icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"icomoon\" !important;\n  speak: never;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-search:before {\n  content: \"\\\\f002\";\n}\n\n.icon-heart:before {\n  content: \"\\\\f004\";\n}\n\n.icon-user:before {\n  content: \"\\\\f007\";\n}\n\n.icon-dedent:before {\n  content: \"\\\\f03b\";\n}\n\n.icon-outdent:before {\n  content: \"\\\\f03b\";\n}\n\n.icon-leaf:before {\n  content: \"\\\\f06c\";\n}\n\n.icon-comment:before {\n  content: \"\\\\f075\";\n}\n\n.icon-phone:before {\n  content: \"\\\\f095\";\n}\n\n.icon-long-arrow-down:before {\n  content: \"\\\\f175\";\n}\n\n.icon-plug:before {\n  content: \"\\\\f1e6\";\n}\n\n.icon-cart-plus:before {\n  content: \"\\\\f217\";\n}\n\n.icon-battery:before {\n  content: \"\\\\f240\";\n}\n\n.icon-battery-4:before {\n  content: \"\\\\f240\";\n}\n\n.icon-battery-full:before {\n  content: \"\\\\f240\";\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://congratulations-ready/./css/icomoon/icomoon.css?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/main.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/main.css ***!
  \***************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Proxima Nova/proximanova_regular.ttf */ \"./fonts/Proxima Nova/proximanova_regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Proxima Nova/proximanova_semibold.ttf */ \"./fonts/Proxima Nova/proximanova_semibold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Proxima Nova/proximanova_bold.otf */ \"./fonts/Proxima Nova/proximanova_bold.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Proxima Nova/proximanova_extrabold.otf */ \"./fonts/Proxima Nova/proximanova_extrabold.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Proxima Nova/proximanova_black.ttf */ \"./fonts/Proxima Nova/proximanova_black.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Proxima Nova/proximanova_black.otf */ \"./fonts/Proxima Nova/proximanova_black.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@charset \"UTF-8\";\n/* Fonts */\n@font-face {\n  font-family: \"Proxima Nova Regular\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(\"truetype\");\n  font-weight: regular;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Proxima Nova SemiBold\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(\"truetype\");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Proxima Nova Bold\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format(\"opentype\");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Proxima Nova ExtraBold\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format(\"opentype\");\n  font-weight: 800;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Proxima Nova Black\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format(\"truetype\"), url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format(\"opentype\");\n  font-weight: 900;\n  font-style: normal;\n}\nbody, html {\n  font-family: \"Proxima Nova\", sans-serif;\n  font-size: var(--text-base-size);\n  font-weight: 400;\n  color: var(--color-black);\n  text-align: center;\n  width: 100%;\n  overflow-x: hidden;\n}\n\n:root {\n  --color-blue: #1594ef;\n  --color-turquoise: #03eeff;\n  --color-gray: #acacac;\n  --color-light-gray: rgb(216, 216, 216);\n  --color-dark-gray: #434859;\n  --color-light: rgb(238, 245, 252);\n  --color-white: #fff;\n  --color-black: #181818;\n  --color-green: #17df49;\n  --color-sky:#d2e4f8;\n  --color-sky-dark: #6460a0;\n  --text-base-size: 1rem;\n  --text-small-size: 1.2rem;\n  --text-big-size: 2rem;\n}\n\n.color-gray {\n  color: var(--color-gray);\n}\n\n.color-pink {\n  color: var(--color-turquoise);\n}\n\n.container {\n  max-width: 1400px;\n  padding: 0 30px;\n  margin: 0 auto;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-box {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.gap {\n  gap: 20px;\n}\n\ni {\n  margin: 0 5px 0 5px;\n}\n\n.common-section {\n  padding: 80px 0;\n}\n\n.common-section-text {\n  padding: 80px 120px;\n}\n\n.padding {\n  padding: 20px;\n}\n\n.header-mobile {\n  display: none;\n}\n\n.icon {\n  max-width: 3%;\n  margin-right: 5px;\n}\n\n.title {\n  font-size: 24px;\n}\n\n.main-title {\n  font-size: 36px;\n  font-weight: 600;\n}\n\na.a-link {\n  padding: 2% 6%;\n  border-radius: 8px;\n  background-color: var(--color-turquoise);\n  color: var(--color-white);\n  font-size: var(--text-small-size);\n}\n\n.a-link:hover {\n  background-color: var(--color-blue);\n}\n\n.modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  max-width: 420px;\n  transform: translate(-50%, -50%);\n  box-shadow: 0 3px 10px -0.5px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  border-radius: 3px;\n  background-color: #fff;\n  transition: 0.3s all;\n  opacity: 0;\n  visibility: hidden;\n  z-index: 30;\n}\n\n.modal__overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  transition: 0.3s all;\n  z-index: 20;\n  opacity: 0;\n  visibility: hidden;\n}\n\n.modal__content {\n  padding: 40px 60px 30px 60px;\n}\n\n.modal .form-label {\n  margin-bottom: 20px;\n}\n\n.modal .title {\n  margin-bottom: 30px;\n}\n\n.modal__close {\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  fill: #444;\n  cursor: pointer;\n}\n\n.modal__close:hover {\n  fill: var(--color-turquoise);\n}\n\n.modal__bottom {\n  padding: 0 10px 0 15px;\n  margin-bottom: 10px;\n}\n\n.modal__bottom a {\n  color: var(--color-turquoise);\n}\n\n.modal .btn-modal {\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  width: 270px;\n  padding: 5%;\n  border-radius: 8px;\n  color: var(--color-white);\n  font-size: var(--text-small-size);\n}\n\n.modal__btn-entrance {\n  background-color: var(--color-blue);\n}\n\n.modal__a-reg {\n  background-color: var(--color-turquoise);\n}\n\n.modal__btn-entrance:hover, .modal__a-reg:hover {\n  background-color: var(--color-dark-gray);\n  outline: 2px solid var(--color-black);\n}\n\n.modal .form-input {\n  width: 270px;\n  padding: 15px;\n  outline: 1px solid var(--color-turquoise);\n}\n\n.modal .form-item {\n  margin-bottom: 20px;\n}\n\n.modal__close:hover {\n  color: var(--color-turquoise);\n}\n\n.modal.active,\n.modal__overlay.active {\n  opacity: 1;\n  visibility: visible;\n}\n\n.header {\n  position: relative;\n}\n\n.header-top {\n  background-color: var(--color-light-gray);\n  border: 1px solid var(--color-gray);\n}\n\n.header-top__nav {\n  color: var(--color-dark-gray);\n  text-decoration: underline;\n}\n\n.header-top__nav ul li:hover {\n  color: var(--color-black);\n}\n\n.feadback-btn {\n  background-color: var(--color-light);\n}\n\n.feadback-btn:hover {\n  color: var(--color-white);\n  background-color: var(--color-blue);\n}\n\n.reg-btn {\n  background-color: var(--color-gray);\n}\n\n.reg-btn:hover {\n  color: var(--color-white);\n  background-color: var(--color-sky-dark);\n}\n\n.header-modal {\n  font-weight: 700;\n  font-size: 17px;\n}\n\nimg {\n  border-radius: 12px;\n}\n\n.header-middle {\n  font-weight: 700;\n  font-size: 17px;\n}\n\n.header-middle__span-left {\n  margin-left: 15px;\n}\n\n.header-middle__span-right {\n  margin-left: 45px;\n}\n\n.header-middle a:hover {\n  color: var(--color-dark-gray);\n}\n\n.header-middle__telephone {\n  font-size: 20px;\n}\n\n.search-form {\n  padding: 5px;\n  border: 1px solid var(--color-black);\n  border-radius: 50px;\n}\n\n.search-input {\n  width: 200px;\n  padding-left: 24px;\n  height: 24px;\n  padding: 5px;\n}\n\n.search-btn:hover {\n  color: var(--color-turquoise);\n}\n\n.header-bottom {\n  white-space: nowrap;\n  text-decoration: underline;\n  color: var(--color-white);\n}\n\n.header-bottom__catalog {\n  background-color: var(--color-dark-gray);\n}\n\n.header-bottom__catalog:hover {\n  background-color: var(--color-gray);\n}\n\n.header-bottom__sale {\n  background-color: var(--color-turquoise);\n}\n\n.header-bottom__sale:hover {\n  background-color: var(--color-gray);\n}\n\n.header-bottom__new {\n  background-color: var(--color-blue);\n}\n\n.header-bottom__new:hover {\n  background-color: var(--color-dark-gray);\n}\n\n.header-bottom__social {\n  background-color: var(--color-light);\n  color: var(--color-black);\n}\n\n.header-bottom__social:hover {\n  background-color: var(--color-sky);\n}\n\n.header-bottom__nav {\n  padding: 20px;\n}\n\n.main-page {\n  gap: 10px;\n  padding: 20px;\n  color: var(--color-white);\n}\n\n.main-page img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n\n.slider-arrow {\n  width: 50%;\n  position: relative;\n}\n\n.slider-arrow__nav {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  transform: translateY(-50%);\n}\n\n.slider-arrow__arrow {\n  color: var(--color-white);\n  border: 1px solid var(--color-white);\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n}\n\n.banners-block {\n  width: 50%;\n}\n\n.banners-block__top {\n  height: 50%;\n}\n\n.banners-block__down {\n  padding-top: 10px;\n  height: 50%;\n  gap: 10px;\n}\n\n.items-page__categories-page {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  color: var(--color-gray);\n  font-size: var(--text-big-size);\n}\n\n.items-page__categories {\n  padding: 40px;\n}\n\n.items-page__categories.active {\n  color: var(--color-black);\n}\n\n.items-page__categories:hover {\n  color: var(--color-black);\n}\n\n.items {\n  width: 100%;\n  flex-wrap: wrap;\n}\n\n.item {\n  padding: 10px 10px 70px 10px;\n  max-width: 280px;\n  max-height: 400px;\n  outline: 1px solid var(--color-gray);\n  border-radius: 4px;\n  margin: 0 auto;\n}\n\n.item img {\n  display: block;\n  width: 176px;\n  height: 176px;\n  margin: 0 auto;\n}\n\n.item a:hover {\n  color: var(--color-blue);\n}\n\n.item:hover {\n  background-color: var(--color-light);\n}\n\n.link-block {\n  position: relative;\n  max-width: 350px;\n  max-height: 400px;\n  color: var(--color-white);\n}\n\n.link-block__title {\n  position: absolute;\n  top: 10%;\n  left: 10%;\n  font-size: 40px;\n}\n\n.link-block__descr {\n  position: absolute;\n  top: 20%;\n  left: 10%;\n}\n\n.link-block__a-link {\n  position: absolute;\n  right: 20%;\n  bottom: 10%;\n  padding: 10px 25px;\n}\n\n.link-block img {\n  width: 350px;\n  height: 400px;\n}\n\n.new {\n  display: inline-block;\n  color: var(--color-white);\n  padding: 5px 10px;\n  background-color: var(--color-blue);\n  border-radius: 12px;\n  margin-bottom: 10px;\n}\n\n.assortment {\n  color: var(--color-green);\n}\n\n.price {\n  font-size: 24px;\n  font-weight: 500;\n}\n\n.information {\n  background-color: var(--color-light-gray);\n}\n\n.information__item {\n  padding: 20px;\n  outline: 1px solid var(--color-gray);\n  border-radius: 8px;\n}\n\n.information__item img {\n  width: 47px;\n  height: 47px;\n}\n\n.information__wrapper {\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.company-description {\n  background-color: var(--color-light);\n  text-align: left;\n  margin: 0 auto;\n}\n\n.company-description .main-title {\n  margin-bottom: 20px;\n  font-weight: 700;\n}\n\n.company-description .subtitle {\n  margin-top: 18px;\n  font-size: 30px;\n  font-weight: 700;\n}\n\n.company-description ul {\n  margin-left: 40px;\n}\n\n.company-description li {\n  position: relative;\n  margin: 20px 20px;\n  font-size: 18px;\n}\n\n.company-description li::before {\n  position: absolute;\n  bottom: -10px;\n  left: -20px;\n  content: \"•\";\n  color: var(--color-blue);\n  font-size: 200%;\n  padding-right: 15px;\n}\n\n.company-description p {\n  font-size: 16px;\n}\n\n.footer-content {\n  justify-content: space-around;\n  align-items: center;\n  padding-bottom: 40px;\n  background-color: var(--color-dark-gray);\n  color: var(--color-white);\n}\n\n.footer-content li {\n  margin: 10px 10px;\n}\n\n.footer-content__information img {\n  margin-right: 10px;\n  width: 50px;\n  height: 50px;\n  flex-shrink: 0;\n}\n\n.footer-content__information p {\n  flex: 1;\n  margin: 0;\n}\n\n.footer-content__time {\n  color: var(--color-gray);\n  text-align: left;\n  margin-top: 15px;\n}\n\n.footer-content__location {\n  margin-top: 15px;\n  color: var(--color-gray);\n  text-align: left;\n}\n\n.footer-content .footer-blocks {\n  gap: 60px;\n}\n\n.footer-content a:hover {\n  color: var(--color-gray);\n}\n\n.burger-btn {\n  display: none;\n  position: relative;\n  width: 40px;\n  height: 40px;\n  z-index: 2;\n}\n\n.burger-btn span {\n  position: absolute;\n  width: 30px;\n  height: 3px;\n  background-color: var(--color-turquoise);\n  right: 5px;\n  transition: transform 0.5s, opacity 0.5s, background-color 0.5s;\n}\n\n.burger-btn span:nth-child(1) {\n  transform: translateY(-10px);\n}\n\n.burger-btn span:nth-child(3) {\n  transform: translateY(10px);\n}\n\n.header.open .burger-btn span:nth-child(1) {\n  transform: translateY(0) rotate(45deg);\n}\n\n.header.open .burger-btn span:nth-child(2) {\n  opacity: 0;\n}\n\n.header.open .burger-btn span:nth-child(3) {\n  transform: translateY(0) rotate(-45deg);\n}\n\n.nav-full-burger {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: calc(100vw - 6rem);\n  z-index: 15;\n  will-change: transform;\n  display: none;\n}\n\n.header-bottom ul li:hover > ul {\n  display: initial;\n}\n\n.header-bottom li {\n  text-decoration: underline;\n  margin-bottom: 15px;\n}\n\n.header-bottom ul li ul {\n  display: none;\n  position: absolute;\n  width: 305px;\n  height: 120px;\n  left: 0;\n  top: 35px;\n  padding: 20px;\n  border: 1px solid var(--color-blue);\n  z-index: 1;\n}\n\n.header-bottom ul li {\n  position: relative;\n}\n\n.dropdown-content-color-dark {\n  background-color: var(--color-sky-dark);\n  -moz-column-count: 4;\n  column-count: 4;\n  color: var(--color-white);\n}\n\n.dropdown-content-color-light {\n  background-color: var(--color-sky);\n  color: var(--color-dark-gray);\n  -moz-column-count: 4;\n  column-count: 4;\n}\n\n.dropdown-item {\n  padding: 5px;\n  display: inline-block;\n}\n\n.header-bottom ul li ul li ul {\n  left: 0;\n  top: 40px;\n}\n\n.mobile-search {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  overflow-y: auto;\n  visibility: hidden;\n  opacity: 0;\n  z-index: 9999;\n  transition: opacity 0.4s, visibility 0.4s;\n  background-color: rgba(37, 36, 36, 0.5);\n}\n\n.mobile-search__content {\n  position: fixed;\n  left: 0;\n  top: 0;\n  left: 0;\n  padding: 15px;\n  width: 100%;\n  background-color: var(--color-white);\n  border: 2px solid var(--color-blue);\n}\n\n.mobile-search__search-btn {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n}\n\n.mobile-search__search-input {\n  width: 100%;\n}\n\n.mobile-search.open {\n  visibility: visible;\n  opacity: 1;\n}\n\n@media (max-width: 1231px) {\n  .none-first {\n    display: none;\n  }\n}\n@media (max-width: 924px) {\n  .none {\n    display: none;\n  }\n  .header-mobile {\n    justify-content: space-between;\n  }\n  .burger-btn {\n    display: block;\n    z-index: 5;\n  }\n  .nav-full-burger {\n    position: absolute;\n    left: -250px;\n    top: 0;\n    width: 250px;\n    height: 550px;\n    background-color: var(--color-white);\n    padding: 70px 20px 20px 20px;\n    transition: transform 0.5s;\n    z-index: 2;\n    display: block;\n  }\n  .nav-full-burger ul {\n    display: block;\n  }\n  .nav-full-burger a {\n    display: block;\n    color: var(--color-black);\n    padding: 10px 0;\n  }\n  .header.open .nav-full-burger {\n    transform: translateX(100%);\n  }\n  .header-top, .header-bottom {\n    display: none;\n  }\n  .header-mobile {\n    display: flex;\n    position: fixed;\n    padding-right: 50px;\n    width: 100%;\n    top: -20px;\n    z-index: 1;\n    background-color: var(--color-white);\n  }\n  .header-mobile img {\n    margin-left: 50px;\n  }\n  .header-mobile .open-mobile-search {\n    position: absolute;\n    top: 43px;\n    right: 15px;\n  }\n  .main-page {\n    padding-top: 50px;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n  }\n  .common-section-text {\n    padding: 20px;\n  }\n  .banners-block__down div {\n    min-width: 50%;\n  }\n  .banners-block {\n    min-width: 100%;\n  }\n  .slider-arrow {\n    min-width: 100%;\n  }\n  .link-block {\n    display: none;\n  }\n  .header-middle {\n    display: none;\n  }\n  .information__item {\n    width: 100%;\n  }\n  .information__wrap {\n    margin: 0 auto;\n  }\n  .btn-tabs {\n    display: block;\n  }\n  .footer-content {\n    flex-wrap: wrap;\n  }\n  .footer-content__information {\n    margin: 50px 0 20px 0;\n    width: 100%;\n    margin: 0 auto;\n  }\n  .footer-content__block {\n    margin-bottom: 50px;\n  }\n  .footer-blocks {\n    flex-wrap: wrap;\n    justify-content: center;\n    width: 100%;\n  }\n  .footer-block {\n    gap: 10px;\n  }\n}\n@media (max-width: 470px) {\n  .modal {\n    max-width: 350px;\n  }\n  .modal .form-input {\n    width: 200px;\n    padding: 10px;\n  }\n  .modal .btn-modal {\n    width: 200px;\n  }\n} `, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://congratulations-ready/./css/main.css?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/reset.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/reset.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*, *::before, *::after {\n  padding: 0;\n  margin: 0;\n  border: none;\n  box-sizing: border-box;\n}\n\na, a:visited, a:hover {\n  color: inherit;\n  text-decoration: none;\n}\n\na:focus, a:active {\n  outline: none;\n}\n\nli {\n  list-style-type: none;\n}\n\np, h1, h2, h3, h4, h5, h6 {\n  font-size: inherit;\n  font-weight: inherit;\n  line-height: inherit;\n}\n\np + p {\n  margin-top: 1em;\n}\n\nimg, svg, video {\n  display: inline-block;\n  vertical-align: top;\n  max-width: 100%;\n  height: auto;\n  object-fit: cover;\n}\n\n/* Form */\ninput, textarea, button, select {\n  font-family: inherit;\n  font-size: inherit;\n}\n\ninput::-ms-clear {\n  display: none;\n}\n\nbutton {\n  display: inline-block;\n  box-shadow: none;\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n}\n\ninput {\n  display: inline-block;\n  box-shadow: none;\n  background-color: transparent;\n  outline: none;\n}\n\nlabel {\n  display: inline-block;\n}\n\ninput[type=search]::-webkit-search-cancel-button {\n  display: none;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://congratulations-ready/./css/reset.css?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./css/icomoon/icomoon.css":
/*!*********************************!*\
  !*** ./css/icomoon/icomoon.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_icomoon_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./icomoon.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/icomoon/icomoon.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_icomoon_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_icomoon_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_icomoon_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_icomoon_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://congratulations-ready/./css/icomoon/icomoon.css?");

/***/ }),

/***/ "./css/main.css":
/*!**********************!*\
  !*** ./css/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://congratulations-ready/./css/main.css?");

/***/ }),

/***/ "./css/reset.css":
/*!***********************!*\
  !*** ./css/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://congratulations-ready/./css/reset.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://congratulations-ready/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://congratulations-ready/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://congratulations-ready/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://congratulations-ready/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://congratulations-ready/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://congratulations-ready/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./css/icomoon/fonts/icomoon.eot?wfnreg":
/*!**********************************************!*\
  !*** ./css/icomoon/fonts/icomoon.eot?wfnreg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/icomoon.eot\";\n\n//# sourceURL=webpack://congratulations-ready/./css/icomoon/fonts/icomoon.eot?");

/***/ }),

/***/ "./css/icomoon/fonts/icomoon.svg?wfnreg":
/*!**********************************************!*\
  !*** ./css/icomoon/fonts/icomoon.svg?wfnreg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8bf5099082c231fbf638.svg?wfnreg\";\n\n//# sourceURL=webpack://congratulations-ready/./css/icomoon/fonts/icomoon.svg?");

/***/ }),

/***/ "./css/icomoon/fonts/icomoon.ttf?wfnreg":
/*!**********************************************!*\
  !*** ./css/icomoon/fonts/icomoon.ttf?wfnreg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/icomoon.ttf\";\n\n//# sourceURL=webpack://congratulations-ready/./css/icomoon/fonts/icomoon.ttf?");

/***/ }),

/***/ "./css/icomoon/fonts/icomoon.woff?wfnreg":
/*!***********************************************!*\
  !*** ./css/icomoon/fonts/icomoon.woff?wfnreg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/icomoon.woff\";\n\n//# sourceURL=webpack://congratulations-ready/./css/icomoon/fonts/icomoon.woff?");

/***/ }),

/***/ "./fonts/Proxima Nova/proximanova_black.otf":
/*!**************************************************!*\
  !*** ./fonts/Proxima Nova/proximanova_black.otf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/proximanova_black.otf\";\n\n//# sourceURL=webpack://congratulations-ready/./fonts/Proxima_Nova/proximanova_black.otf?");

/***/ }),

/***/ "./fonts/Proxima Nova/proximanova_black.ttf":
/*!**************************************************!*\
  !*** ./fonts/Proxima Nova/proximanova_black.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/proximanova_black.ttf\";\n\n//# sourceURL=webpack://congratulations-ready/./fonts/Proxima_Nova/proximanova_black.ttf?");

/***/ }),

/***/ "./fonts/Proxima Nova/proximanova_bold.otf":
/*!*************************************************!*\
  !*** ./fonts/Proxima Nova/proximanova_bold.otf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/proximanova_bold.otf\";\n\n//# sourceURL=webpack://congratulations-ready/./fonts/Proxima_Nova/proximanova_bold.otf?");

/***/ }),

/***/ "./fonts/Proxima Nova/proximanova_extrabold.otf":
/*!******************************************************!*\
  !*** ./fonts/Proxima Nova/proximanova_extrabold.otf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/proximanova_extrabold.otf\";\n\n//# sourceURL=webpack://congratulations-ready/./fonts/Proxima_Nova/proximanova_extrabold.otf?");

/***/ }),

/***/ "./fonts/Proxima Nova/proximanova_regular.ttf":
/*!****************************************************!*\
  !*** ./fonts/Proxima Nova/proximanova_regular.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/proximanova_regular.ttf\";\n\n//# sourceURL=webpack://congratulations-ready/./fonts/Proxima_Nova/proximanova_regular.ttf?");

/***/ }),

/***/ "./fonts/Proxima Nova/proximanova_semibold.ttf":
/*!*****************************************************!*\
  !*** ./fonts/Proxima Nova/proximanova_semibold.ttf ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/proximanova_semibold.ttf\";\n\n//# sourceURL=webpack://congratulations-ready/./fonts/Proxima_Nova/proximanova_semibold.ttf?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;