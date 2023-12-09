exports.ids = [16,9];
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

/***/ 335:
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"main":"Home","managment":"Managment"},"kz":{"main":"Басты бет","managment":"Басшылық"},"ru":{"main":"Главная","managment":"Руководство"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(399);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6eb9764b", content, true, context)
};

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_24ebece4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_24ebece4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_24ebece4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_24ebece4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_24ebece4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".pages_main[data-v-24ebece4]{padding-top:50px}.pages_main .bread[data-v-24ebece4]{margin-left:0!important}.Person[data-v-24ebece4]{padding:0 0 120px;width:100%;display:flex;flex-direction:column}.Person h2[data-v-24ebece4]{font-style:normal;font-weight:700;font-size:36px;line-height:50px;text-transform:uppercase;color:#224f9e;margin-bottom:40px}.Person .content[data-v-24ebece4]{display:flex;align-items:flex-start;width:100%}.Person .content img[data-v-24ebece4]{border-radius:10px;margin-right:20px;max-width:413px;width:100%;max-height:413px;height:auto;-o-object-fit:cover;object-fit:cover}.Person .content .text[data-v-24ebece4]{max-width:847px;width:100%}.Person .content .text h3[data-v-24ebece4]{font-family:\"OpenSans-Bold\";font-style:normal;font-weight:700;font-size:18px;line-height:22px;text-transform:uppercase;color:#b53a57;margin-bottom:18px}.Person .content .text p[data-v-24ebece4]{width:100%;text-align:left;color:#233659}@media screen and (max-width:1264px){.pages_main .bread[data-v-24ebece4]{margin-left:16px!important;margin-bottom:39px!important}.Person[data-v-24ebece4]{padding:0 16px 80px}}@media screen and (max-width:960px){.pages_main[data-v-24ebece4]{padding-top:25px}.Person h2[data-v-24ebece4]{font-size:24px;line-height:29px}}@media screen and (max-width:690px){.Person .content[data-v-24ebece4]{flex-direction:column}.Person .content img[data-v-24ebece4]{margin-bottom:40px;margin-right:0}.Person .content .text h3[data-v-24ebece4]{margin-bottom:24px}.Person .content .text h3[data-v-24ebece4],.Person .content .text p[data-v-24ebece4]{font-size:16px;line-height:19px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(335);
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Managment/_id.vue?vue&type=template&id=24ebece4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pages_main"},[_c('inside-bread-crumbs',{staticClass:"bread",attrs:{"links":_vm.about_id}}),_vm._ssrNode(" <div class=\"Person\" data-v-24ebece4><h2 data-v-24ebece4>"+_vm._ssrEscape(_vm._s(_vm.data.full_name))+"</h2> <div class=\"content\" data-v-24ebece4><img"+(_vm._ssrAttr("src",_vm.data.image))+" data-v-24ebece4> <div class=\"text\" data-v-24ebece4><h3 data-v-24ebece4>"+_vm._ssrEscape(_vm._s(_vm.data.position))+"</h3> <p data-v-24ebece4>"+(_vm._s(_vm.data.content))+"</p></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Managment/_id.vue?vue&type=template&id=24ebece4&scoped=true&

// EXTERNAL MODULE: ./components/ui/InsideBreadCrumbs.vue + 4 modules
var InsideBreadCrumbs = __webpack_require__(230);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Managment/_id.vue?vue&type=script&lang=js&
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
    } = (await $axios.get(`/employees/${params.id}`, {
      params
    })).data;
    return {
      data,
      params
    };
  },

  components: {
    InsideBreadCrumbs: InsideBreadCrumbs["default"]
  },
  data: () => ({}),
  computed: {
    about_id() {
      return [{
        title: this.$t("main"),
        url: "/"
      }, {
        title: this.$t("managment"),
        url: "/Managment"
      }];
    }

  },

  created() {
    let bread = {
      title: this.data.full_name,
      url: ""
    };
    this.about_id.push(bread);
  }

});
// CONCATENATED MODULE: ./pages/Managment/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var Managment_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// EXTERNAL MODULE: ./pages/Managment/_id.vue?vue&type=custom&index=0&blockType=i18n
var _idvue_type_custom_index_0_blockType_i18n = __webpack_require__(400);

// CONCATENATED MODULE: ./pages/Managment/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(398)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Managment_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "24ebece4",
  "626f72e0"
  
)

/* custom blocks */

if (typeof _idvue_type_custom_index_0_blockType_i18n["default"] === 'function') Object(_idvue_type_custom_index_0_blockType_i18n["default"])(component)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map