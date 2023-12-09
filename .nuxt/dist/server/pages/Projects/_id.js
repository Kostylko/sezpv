exports.ids = [20,9];
exports.modules = {

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(229);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("57b678e1", content, true, context)
};

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsideBreadCrumbs_vue_vue_type_style_index_0_id_4ca0a54f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(218);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsideBreadCrumbs_vue_vue_type_style_index_0_id_4ca0a54f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsideBreadCrumbs_vue_vue_type_style_index_0_id_4ca0a54f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsideBreadCrumbs_vue_vue_type_style_index_0_id_4ca0a54f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsideBreadCrumbs_vue_vue_type_style_index_0_id_4ca0a54f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".inside_breadcrumbs[data-v-4ca0a54f]{max-width:100%;width:100%;margin-bottom:59px}.inside_breadcrumbs__links[data-v-4ca0a54f]{display:flex;justify-content:flex-start;align-items:flex-start}.items[data-v-4ca0a54f]{display:flex;align-items:center}p[data-v-4ca0a54f]{font-family:\"OpenSans-Regular\";font-style:normal;font-weight:400;font-size:12px;line-height:16px;white-space:nowrap;width:100%}p[data-v-4ca0a54f],span[data-v-4ca0a54f]{color:#bbc2d0}span[data-v-4ca0a54f]{margin-top:-15px}.textChange[data-v-4ca0a54f]{color:#224f9e;margin-bottom:0!important;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden;white-space:unset}@media screen and (max-width:1440px){.inside_breadcrumbs[data-v-4ca0a54f]{margin-left:60px}}@media screen and (max-width:960px){.inside_breadcrumbs[data-v-4ca0a54f]{margin-left:0;max-width:600px;width:100%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/InsideBreadCrumbs.vue?vue&type=template&id=4ca0a54f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inside_breadcrumbs"},[_vm._ssrNode("<div class=\"inside_breadcrumbs__links\" data-v-4ca0a54f>","</div>",_vm._l((_vm.links),function(item,index){return _c('nuxt-link',{key:index,staticClass:"d-flex align-center",attrs:{"to":_vm.localePath(item.url),"tag":"a"}},[_c('div',{staticClass:"items"},[_c('p',{staticClass:"my-clamp",class:{ textChange: _vm.links.length == index + 1 }},[_vm._v("\n          "+_vm._s(item.title)+"\n        ")]),_vm._v(" "),(_vm.links.length - 1 != index)?_c('span',{staticClass:"mx-1"},[_vm._v("/")]):_vm._e()])])}),1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ui/InsideBreadCrumbs.vue?vue&type=template&id=4ca0a54f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/InsideBreadCrumbs.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var InsideBreadCrumbsvue_type_script_lang_js_ = ({
  props: {
    links: {
      type: Array,
      default: []
    }
  }
});
// CONCATENATED MODULE: ./components/ui/InsideBreadCrumbs.vue?vue&type=script&lang=js&
 /* harmony default export */ var ui_InsideBreadCrumbsvue_type_script_lang_js_ = (InsideBreadCrumbsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ui/InsideBreadCrumbs.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(228)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_InsideBreadCrumbsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4ca0a54f",
  "57405b58"
  
)

/* harmony default export */ var InsideBreadCrumbs = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"home":"Home","projects":"Projects","production":"Production","manager":"Project Manager","area":"Square","investments":"Investment volume","power":"Power","start_date":"Launch date","contacts":"Contacts","type":"Project type","project_cost":"Project cost","foreign_participation":"Foreign participation","mlrd":"BILLION TENGE"},"kz":{"home":"Басты бет","projects":"Жобалар","production":"Өнім","manager":"Жоба жетекшісі","area":"Алаңы","investments":"Инвестиция көлемі","power":"Қуат","start_date":"Іске қосу күні","contacts":"Байланыстар","type":"Жоба түрі","project_cost":"Жобаның құны","foreign_participation":"Шетелдік қатысу","mlrd":"МЛРД ТЕНГЕ"},"ru":{"home":"Главная","projects":"Проекты","production":"Продукция","manager":"Руководитель проекта","area":"Площадь","investments":"Объем инвестиций","power":"Мощность","start_date":"Дата запуска","contacts":"Контакты","type":"Тип проекта","investments_dollar":"Инвестиции в $","project_cost":"Стоимость проекта","foreign_participation":"Иностранное участие","mlrd":"МЛРД ТЕНГЕ"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(410);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("72a31ab9", content, true, context)
};

/***/ }),

/***/ 404:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIdSURBVHgB1VRBchJREO2eSSyL1XgCv1CuwybEnXiCsISUVZATJJ4AcgLhBMrCxCU5QXBn4UKytiRzBFapVJmZ5/sDMzAOgsmUlnmb+f9393/d81+3yEOHbnIwL+rGDfQdPaspA2QYuDj0P3/018VvyQY4oV4wD08UPUCni9TQdCObPFsXr9mMX1fdIDSRUUMD0TZXA2Z8vuwHxQ6Dj2k/UYhvzwI3HP5aUYqgWGm8tUGSAxCnOxl9eJMhKFbqbRXt8KQXKLpyR2wHjgcNa7ZiW9VkdNpJOTD7q9JefSA5UdprXJR4V7x34gVLMYAzlpygED7xYzIEfwv/lkCBl7ax5J6wsfaO5bNFo0F6fIgjNs8VH4m61/NVul516datW6OC9iW03a5TVWRlmjiH0gpFmxo/VNS9GNNzys5LOhlAWaGGZXuz/MR3BP3bwk3XHw6mGQKze1CWH9e+P54Zn3PPS6pwI6IdQDw6ly0hu5hZ2u5VXwNcqurw25fTSIGmWvPk5rEXV578IlfxFY8KJ1x27H4ekJKt1ThTl8no7JX8Bs514VgFR1w+ifZJySyRWT2VnIDA8JP8oo3TdBkcIYfb4njrfPgOHhs2S8CyLhFqeV3wJkVZcA5xysJfEC4sA8qrXKwctOWemA1MKwr047OUTEu7jfc8adpkZT7j/xRQMXNp97+PzlorCWYk9Zaosx/r+w4Mtl/s5bkn8v+Fn7b02xOQrgHLAAAAAElFTkSuQmCC"

/***/ }),

/***/ 405:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJKSURBVHgB1ZXNThNRFIDPuTMSxRgnmLhQE8cWd2oGDVN24hNYFiZtJaF9AupKd22fQHwCuqJN3NQnaN3VuqmRnQXGhBhXOiYGjeHe47lDB4ZkwCl1AV8yfzlzz7n3/AKcdTD6Yc9nLbEzuQxARRbYkBRCH5A6gnZrn96/7scasOdytlDYDhQTdAjxLSQEgWwCeKjXEmB1s7dWC2Vm+DJUDijo0aDb7MAJmHZzVX5UU5n8j813jZV9QXq2UEy7eeIrC2OSzuTbrOd7+C327rSk3bLRa7RgTBBJu8eanlucPzBA6JCAD+FPOtgwAjp+4fvu7/NBkBVJ58AAkBVkwhBz54I+5lZ04VGkMoVlQ+FW+sFi4F6vX/eHm7YiBg7DGVHjC3hhOzxqrHI3/xKJOJjYkpd+duL+iTWgY6E4m7QRUrKdcguVqFyfLOXm+px1ZQSsbfTWFrxOy4/TZcIReN2mZzvFGWPizyrneTXlPrWUkK94CdeLXEXtAkOVBt1GHY7BPE449OfCXn6rCrusDCADkTTUjN4E/AMBCRj0mlUp6BYqeMbBK8nJX4mUa0xIyFDhCoxIohOMQ2CAs8VDhJvwH7g9+yQoMJTU3zfAFt4AUdZ2RqvgOCQaj4PnuYgBYZDuQZaYuFiBMdD1gSTK3JDqYRIY+vZte927cv2O7tYvpm7csy9fu/vZ//Lxa2LF3Lumrt5/zi2/zoPH54wr+dvrQeEdmmg63xXg0kjTLAp3ZGlQKZrCCDHH5IJyeDI5kBChyAeT+icdVKebvxDZ47QO9n3BAAAAAElFTkSuQmCC"

/***/ }),

/***/ 406:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGySURBVHgB3ZVPTsJAFMbfawkKK45Q4QA2MYI74QSWHXUDN1BOAEeAEwgr2IknoO4QF3IAiPUGbCQabJ+vFhFrnWkJG/2SZjp/f/NmvpkB+OvCsMJs/rwBQDWu1AR9bUehkj3q2xAHkM1XJgh4CAQWId6Gd6PqCi6FYGDwBg/eRIT69K7X+q1TrmAOeQIad88wbC6CKN8zaADSjWjwryDAVghKHkR1caidVDQpgAB0ImUCErkETxy7vlwu1hDFxWtNNzJCQFSpCnU4yajJ1IODYPC/xWutK8nUcCeA6ahvcVLmiOcI5DnOg3gbqgfbJmBLzca9ASeDzzxbu+nDYgKCmyfzfVDCJcodmQY75HHzyxbMS4ghYQSOs2ep6msZCNfucNOLAewKYE86c9hY520kBGhFI6M+p42wOkd1rSj7IQQkXvZ1QroKrXvDOifSEy8EeH5nFx2E1dnjaG6S2jSuLYMK3kU2Ep3CFkJwvVNsCwEKum1uWfQfnOjyrnlGnBFC+yc4oNyx2eLSi4/ZIFogERHpqzuoy9dHTQrwIZUah1MlEj6Z/gDkLQt1Z/f9DvxLvQOrX6Rp50stCQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 407:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJDSURBVHgB1VW9btRAEJ7ZzY9CGkPKgGS4pEIiTnEk5d0TkBRIxwmJ4w2OJ0geAZ7AoQEkCpyS6kIHSnEWpIuQXARKYppAILvDzIHDnrk/OxVfs97Zsb+Zb3bGAP87MG/w1xu+NhjySY0AYqtoM3n7IoGSUO5mudoMtFFd5g2Y4AmbPG2xu1y9G0BJKDdyC9ABpNRou/rx3fM2R1/nLFKLU52yJOcEmkQW/jh/NJNEVofklR9seFAQfyUi1hxhN6+37DWdbUqSevrSBhSEUwNMx3pbGu8zlAApRgsrg5wMTLV66zTFUJaAdd6Vq7m0fr+Wd2LpRPukzHU9J7CnszsiExmzlXdCApHGu1CRk3gnBbKPJIsba/farpPV9FgI9MxcCAWh3c3x54P4yuKtgNu7vXAtePPl6H0i9vToIF24evMr59K+vLjiHX/68BomxL+jImh5aua0KwduTwiWbje2CVAkTNAq6XSuj73DNfJZxsRoepivEw5ila5WFjuDSCrVRosQt/jM7xEIGeIeEdXY5ik6qx/uv4xHEghkLlnk0QH93e0GIWtmd4LqIxlKMAnJiMw98+Pb9SSOUjXqhcP9Z7EiqHMcMlU7WdTDkM0ukCxm51piG0mQkRhlV1lrkNFdqTZbMAHwz1gZS+BGJgXlrgsra81wUDaZRPKKmf8e9YigINyrytczshafJpylzyNGWRMioSf/k6xehQmySFmubX580HdAmJqfJ73iZqZSBH1ERv4j6nejzZ9EyV5UeKRfCL8AxJElLXo6nPsAAAAASUVORK5CYII="

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/no-image.4d7e901.png";

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_69a8ba70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(356);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_69a8ba70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_69a8ba70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_69a8ba70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_69a8ba70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".projects_page[data-v-69a8ba70]{padding-top:50px}.projects_page .bread[data-v-69a8ba70]{margin-left:0!important;max-width:600px;width:100%}.phone_contacts path[data-v-69a8ba70]{fill:unset!important}.phone_contacts rect[data-v-69a8ba70]{color:#233659}.no-image[data-v-69a8ba70]{width:630px;height:auto;max-height:350px}.dialog_class[data-v-69a8ba70]{width:100vw;background:rgba(0,0,0,.38);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.Projects[data-v-69a8ba70]{display:flex;flex-direction:column;max-width:1400px;width:100%;margin:0 auto;padding:0 0 120px}.Projects h1[data-v-69a8ba70]{font-style:normal;font-weight:700;font-size:36px;line-height:50px;text-align:center;text-transform:uppercase;color:#224f9e;margin-bottom:40px}.Projects .content[data-v-69a8ba70]{display:flex;width:100%;justify-content:space-between}.Projects .content--text[data-v-69a8ba70]{max-width:630px;width:100%}.Projects .content--text .single_line[data-v-69a8ba70]{display:grid;grid-template-columns:minmax(auto,193px) 1fr;align-items:start;grid-column-gap:29px;margin-right:20px;margin-bottom:32px}.Projects .content--text .single_line .contacts div[data-v-69a8ba70]{display:flex;align-items:flex-start;margin-bottom:22px}.Projects .content--text .single_line .contacts div[data-v-69a8ba70]:last-of-type{margin-bottom:0}.Projects .content--text .single_line .contacts div img[data-v-69a8ba70]{margin-right:10px}.Projects .content--text .single_line .contacts div p[data-v-69a8ba70]{display:unset;color:#233659;font-size:18px;line-height:25px}.Projects .content--text .single_line .contacts div p[data-v-69a8ba70]:last-of-type{margin-bottom:30px}.Projects .content--text .single_line .contacts div a[data-v-69a8ba70]{font-size:18px;line-height:25px}.Projects .content--text .single_line[data-v-69a8ba70]:last-of-type{margin-bottom:0}.Projects .content--text .single_line__title[data-v-69a8ba70]{font-family:\"OpenSans-Medium\"!important;font-style:normal;font-weight:400;font-size:18px;line-height:21px;color:#b53a57}.Projects .content--text .single_line__text[data-v-69a8ba70],.Projects .content--text .single_line a[data-v-69a8ba70]{font-family:\"OpenSans-Regular\";font-style:normal;font-weight:400;font-size:18px;line-height:21px;color:#233659}.Projects .content--text .single_line p[data-v-69a8ba70]{margin-bottom:0!important}.Projects .content--text .paramaters[data-v-69a8ba70]{max-width:193px;width:100%;display:flex;flex-direction:column;margin-right:30px}.Projects .content--text .paramaters p[data-v-69a8ba70]{font-family:\"OpenSans-Medium\"!important;margin-bottom:32px!important;font-style:normal;font-weight:400;font-size:18px;line-height:21px;color:#b53a57}.Projects .content--text .paramaters p[data-v-69a8ba70]:last-of-type{margin-bottom:0!important}.Projects .content--text .paramaters p[data-v-69a8ba70]:nth-of-type(6){margin-bottom:53px!important}.Projects .content--text .description[data-v-69a8ba70]{display:flex;flex-direction:column;max-width:404px;width:100%}.Projects .content--text .description p[data-v-69a8ba70]{font-family:\"OpenSans-Regular\";font-style:normal;font-weight:400;font-size:18px;line-height:21px;color:#233659;margin-bottom:32px!important}.Projects .content--text .description p[data-v-69a8ba70]:first-of-type{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden}.Projects .content .right_side[data-v-69a8ba70]{max-width:526px;width:100%}.Projects .content .swiper[data-v-69a8ba70]{max-width:630px;width:100%;height:auto}.Projects .content .swiper .swiper-slide[data-v-69a8ba70]{width:100%}.Projects .content .swiper .swiper-slide img[data-v-69a8ba70]{border-radius:10px;cursor:pointer;width:100%;height:350px}.Projects .content .swiper-pagination[data-v-69a8ba70]{margin-top:20px!important;position:static}@media screen and (max-width:1440px){.Projects[data-v-69a8ba70]{max-width:1280px}}@media screen and (max-width:1264px){.projects_page .bread[data-v-69a8ba70]{margin-left:25px!important}.Projects[data-v-69a8ba70]{padding:0 16px 80px}}@media screen and (max-width:960px){.projects_page[data-v-69a8ba70]{padding-top:25px}.projects_page .bread[data-v-69a8ba70]{margin-left:16px!important;margin-bottom:39px!important}.no-image[data-v-69a8ba70]{max-width:630px;width:100%}.adaptive_bread[data-v-69a8ba70]{margin:25px 0 0 16px;display:flex}.Projects h1[data-v-69a8ba70]{font-size:24px;line-height:29px}.Projects .content[data-v-69a8ba70]{flex-direction:column;justify-content:unset;align-items:center}.Projects .content--text[data-v-69a8ba70]{max-width:unset;margin-bottom:43px}.Projects .content--text a[data-v-69a8ba70],.Projects .content--text p[data-v-69a8ba70]{font-size:16px!important;line-height:19px!important}.Projects .content--text .single_line .contacts[data-v-69a8ba70]{max-width:205px;display:flex;flex-direction:column;padding-right:16px}.Projects .content--text .single_line[data-v-69a8ba70]:last-of-type{padding-right:16px}.Projects .content div[data-v-69a8ba70]{width:100%}.Projects .content div .swiper[data-v-69a8ba70]{max-width:unset}.Projects .content div .swiper img[data-v-69a8ba70]{width:100%}.Projects .content .swiper-pagination[data-v-69a8ba70]{margin-top:28px}}@media screen and (max-width:400px){.Projects .content div .swiper img[data-v-69a8ba70]{max-height:250px}.single_line[data-v-69a8ba70]{grid-template-columns:minmax(auto,109px) 1fr!important}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(337);
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Projects/_id.vue?vue&type=template&id=69a8ba70&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"projects_page"},[_vm._ssrNode("<div class=\"pages_main\" data-v-69a8ba70>","</div>",[_c('inside-bread-crumbs',{staticClass:"bread",attrs:{"links":_vm.links}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"Projects\" data-v-69a8ba70>","</div>",[_vm._ssrNode("<div class=\"Projects--text\" data-v-69a8ba70>","</div>",[_vm._ssrNode("<h1 data-v-69a8ba70>"+_vm._ssrEscape(_vm._s(_vm.data.title))+"</h1> "),_vm._ssrNode("<div class=\"content\" data-v-69a8ba70>","</div>",[_vm._ssrNode("<div class=\"content--text\" data-v-69a8ba70>"+(_vm._ssrList((_vm.paramaters),function(paramater,idx){return ("<div class=\"single_line\" data-v-69a8ba70><p class=\"single_line__title\" data-v-69a8ba70>"+_vm._ssrEscape(_vm._s(paramater.text))+"</p> <p class=\"single_line__text\" data-v-69a8ba70>"+_vm._ssrEscape("\n                "+_vm._s(_vm.data[paramater.data])+"\n              ")+"</p></div>")}))+" <div class=\"single_line\" data-v-69a8ba70><p class=\"single_line__title\" data-v-69a8ba70>"+_vm._ssrEscape(_vm._s(_vm.$t("project_cost")))+"</p> <p class=\"single_line__text\" data-v-69a8ba70>"+_vm._ssrEscape(_vm._s(_vm.cost)+" "+_vm._s(_vm.$t("mlrd")))+"</p></div> <div class=\"single_line\" data-v-69a8ba70><p class=\"single_line__title\" data-v-69a8ba70>"+_vm._ssrEscape(_vm._s(_vm.$t("type")))+"</p> <p class=\"single_line__text\" data-v-69a8ba70>"+_vm._ssrEscape(_vm._s(_vm.data.status.title))+"</p></div> <div class=\"single_line\" data-v-69a8ba70><p class=\"single_line__title\" data-v-69a8ba70>"+_vm._ssrEscape(_vm._s(_vm.$t("contacts")))+"</p> <div class=\"contacts\" data-v-69a8ba70><div data-v-69a8ba70><img"+(_vm._ssrAttr("src",__webpack_require__(404)))+" data-v-69a8ba70> <p data-v-69a8ba70>"+_vm._ssrEscape("\n                    "+_vm._s(_vm.data.address)+"\n                  ")+"</p></div> <div data-v-69a8ba70><img"+(_vm._ssrAttr("src",__webpack_require__(405)))+" data-v-69a8ba70> "+((_vm.data.email == 'Нет')?("<p data-v-69a8ba70>"+_vm._ssrEscape(_vm._s(_vm.data.email))+"</p>"):("<a"+(_vm._ssrAttr("href",'mailto:' + _vm.data.email))+" data-v-69a8ba70>"+_vm._ssrEscape(_vm._s(_vm.data.email))+"</a>"))+"</div> <div data-v-69a8ba70>"+((_vm.data.fax)?("<img"+(_vm._ssrAttr("src",__webpack_require__(406)))+" data-v-69a8ba70>"):"<!---->")+" <p data-v-69a8ba70>"+_vm._ssrEscape("\n                    "+_vm._s(_vm.data.fax)+"\n                  ")+"</p></div> <div data-v-69a8ba70>"+((_vm.data.phone)?("<img"+(_vm._ssrAttr("src",__webpack_require__(407)))+" data-v-69a8ba70>"):"<!---->")+" "+((_vm.data.phone == 'Нет')?("<p data-v-69a8ba70>"+_vm._ssrEscape(_vm._s(_vm.data.phone))+"</p>"):("<a"+(_vm._ssrAttr("href",("tel:" + (_vm.data.phone))))+" data-v-69a8ba70>"+_vm._ssrEscape(_vm._s(_vm.data.phone))+"</a>"))+"</div></div></div></div> "),_c('client-only',[_c('div',{staticClass:"right_side"},[(_vm.data.images.length)?_c('swiper',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.CloseImg),expression:"CloseImg"}],ref:"mySwiper",staticClass:"swiper",attrs:{"options":_vm.swiperOptions}},_vm._l((_vm.data.images),function(image,idx){return _c('swiper-slide',{key:idx},[_c('img',{attrs:{"src":image.url},on:{"click":function($event){$event.stopPropagation();return _vm.OpenImg(image.id)}}})])}),1):_c('img',{staticClass:"no-image",attrs:{"src":__webpack_require__(408)}}),_vm._v(" "),_c('div',{staticClass:"swiper-pagination"})],1)])],2)],2)])],2),_vm._ssrNode(" "),(_vm.current_img)?_vm._ssrNode("<div class=\"dialog_class\" data-v-69a8ba70>","</div>",[_c('v-dialog',{model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('img',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.OutsideClick),expression:"OutsideClick"}],attrs:{"src":_vm.data.images.filter(function (x) { return x.id === _vm.current_img; })[0].url}})])],1):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Projects/_id.vue?vue&type=template&id=69a8ba70&scoped=true&

// EXTERNAL MODULE: ./components/ui/InsideBreadCrumbs.vue + 4 modules
var InsideBreadCrumbs = __webpack_require__(230);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Projects/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  async asyncData({
    $axios,
    params,
    i18n
  }) {
    params.lang = i18n.locale == "en" ? "en" : i18n.locale;
    const {
      data
    } = (await $axios.get(`/projects/${params.id}`, {
      params
    })).data;
    const cost = data.project_cost;
    return {
      data,
      params,
      cost
    };
  },

  components: {
    InsideBreadCrumbs: InsideBreadCrumbs["default"]
  },
  data: () => ({
    current_img: null,
    swiperOptions: {
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 500,
      transition: 5000,
      direction: "horizontal",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets"
      }
    }
  }),
  computed: {
    paramaters() {
      return [{
        text: this.$t("production"),
        data: "product"
      }, {
        text: this.$t("manager"),
        data: "project_manager"
      }, {
        text: this.$t("area"),
        data: "area"
      }, {
        text: this.$t("foreign_participation"),
        data: "foreign_participation"
      }, {
        text: this.$t("power"),
        data: "power"
      }, {
        text: this.$t("start_date"),
        data: "start_date"
      }];
    },

    links() {
      return [{
        title: this.$t("home"),
        url: "/"
      }, {
        title: this.$t("projects"),
        url: "/Projects"
      }, {
        title: this.data.title,
        url: ""
      }];
    }

  },
  methods: {
    CloseImg() {
      this.opened_img = false;
      this.$store.commit("setVisibility", false);
    },

    OpenImg(id) {
      this.dialog = true;
      this.current_img = id;
    },

    OutsideClick() {
      this.current_img = null;
    }

  }
});
// CONCATENATED MODULE: ./pages/Projects/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var Projects_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// EXTERNAL MODULE: ./pages/Projects/_id.vue?vue&type=custom&index=0&blockType=i18n
var _idvue_type_custom_index_0_blockType_i18n = __webpack_require__(411);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(12);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js + 1 modules
var VDialog = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installDirectives.js
var installDirectives = __webpack_require__(26);
var installDirectives_default = /*#__PURE__*/__webpack_require__.n(installDirectives);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/click-outside/index.js
var click_outside = __webpack_require__(17);

// CONCATENATED MODULE: ./pages/Projects/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(409)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Projects_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "69a8ba70",
  "2d298a9e"
  
)

/* custom blocks */

if (typeof _idvue_type_custom_index_0_blockType_i18n["default"] === 'function') Object(_idvue_type_custom_index_0_blockType_i18n["default"])(component)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VDialog: VDialog["a" /* default */]})


/* vuetify-loader */


installDirectives_default()(component, {ClickOutside: click_outside["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=_id.js.map