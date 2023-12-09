exports.ids = [17];
exports.modules = {

/***/ 328:
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"more":"More"},"kz":{"more":"Толығырақ"},"ru":{"more":"Подробнее"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(382);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1f665b80", content, true, context)
};

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_414e9e9f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(349);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_414e9e9f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_414e9e9f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_414e9e9f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_414e9e9f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Managment[data-v-414e9e9f]{margin:0 auto;padding:60px 0 120px;max-width:1440px;width:100%;height:auto}.Managment--content[data-v-414e9e9f]{display:grid;grid-template-columns:repeat(auto-fit,305px);grid-gap:20px;align-items:flex-start}.Managment--content div[data-v-414e9e9f]{margin-right:20px;max-width:305px;width:100%;height:auto;display:flex;flex-direction:column}.Managment--content div img[data-v-414e9e9f]{border-radius:16px;margin-bottom:20px;width:305px;height:305px;-o-object-fit:cover;object-fit:cover}.Managment--content div h2[data-v-414e9e9f]{font-family:\"OpenSans-Bold\";font-weight:700;font-size:24px;line-height:29px;text-transform:uppercase;color:#224f9e;-webkit-line-clamp:2;margin-bottom:18px}.Managment--content div h2[data-v-414e9e9f],.Managment--content div p[data-v-414e9e9f]{font-style:normal;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;max-width:293px;width:100%}.Managment--content div p[data-v-414e9e9f]{font-family:\"OpenSans-Regular\";font-weight:400;font-size:18px;line-height:21px;color:#233659;margin-bottom:24px!important;-webkit-line-clamp:6}.Managment--content div a[data-v-414e9e9f]{font-family:\"OpenSans-Bold\";font-style:normal;font-weight:700;font-size:18px;line-height:22px;color:#b53a57;cursor:pointer}.Managment--content div a svg[data-v-414e9e9f]{margin-left:15px}.Managment--content div[data-v-414e9e9f]:last-of-type{margin-right:0}@media screen and (max-width:1440px){.Managment[data-v-414e9e9f]{max-width:1280px}}@media screen and (max-width:1264px){.Managment[data-v-414e9e9f]{padding:40px 16px 80px}}@media screen and (max-width:600px){.Managment h2[data-v-414e9e9f]{font-size:24px;line-height:29px}.Managment p[data-v-414e9e9f]{font-size:16px;line-height:19px}}@media screen and (max-width:330px){.Managment--content[data-v-414e9e9f]{grid-template-columns:minmax(200px,300px)!important}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(328);
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Managment/index.vue?vue&type=template&id=414e9e9f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg"},[_vm._ssrNode("<div class=\"Managment\" data-v-414e9e9f><div class=\"Managment--content\" data-v-414e9e9f>"+(_vm._ssrList((_vm.data),function(item,idx){return ("<div data-v-414e9e9f><img"+(_vm._ssrAttr("src",item.image))+" data-v-414e9e9f> <h2 data-v-414e9e9f>"+_vm._ssrEscape(_vm._s(item.full_name))+"</h2> <p data-v-414e9e9f>"+_vm._ssrEscape(_vm._s(item.position))+"</p> <a data-v-414e9e9f>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t("more"))+"\n          ")+"<svg width=\"16\" height=\"8\" viewBox=\"0 0 16 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-414e9e9f><path d=\"M15.8167 3.55759C15.8165 3.5574 15.8163 3.55718 15.8161 3.55699L12.5504 0.306998C12.3057 0.0635293 11.91 0.0644354 11.6665 0.309122C11.423 0.553778 11.4239 0.949496 11.6686 1.193L13.8612 3.37499H0.625C0.279813 3.37499 0 3.6548 0 3.99999C0 4.34518 0.279813 4.62499 0.625 4.62499H13.8612L11.6686 6.80698C11.4239 7.05048 11.423 7.4462 11.6665 7.69086C11.91 7.93558 12.3058 7.93642 12.5504 7.69298L15.8162 4.44299C15.8163 4.4428 15.8165 4.44258 15.8167 4.4424C16.0615 4.19808 16.0607 3.80108 15.8167 3.55759Z\" fill=\"#B53A57\" data-v-414e9e9f></path></svg></a></div>")}))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Managment/index.vue?vue&type=template&id=414e9e9f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Managment/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Managmentvue_type_script_lang_js_ = ({
  async asyncData({
    $axios,
    i18n
  }) {
    let total = (await $axios.get(`employees`)).data.meta.total;
    let page = 1;
    let pagination = total;
    let params = {
      page,
      pagination
    };
    params.lang = i18n.locale == "en" ? "en" : i18n.locale;
    const {
      data
    } = (await $axios.get(`employees`, {
      params
    })).data;
    return {
      data,
      params,
      page,
      pagination
    };
  },

  data: () => ({}),
  methods: {
    goToInner(id) {
      this.$router.push(this.localePath({
        path: `/Managment/${id}`,
        query: {
          id: id
        }
      }));
    }

  }
});
// CONCATENATED MODULE: ./pages/Managment/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Managmentvue_type_script_lang_js_ = (Managmentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// EXTERNAL MODULE: ./pages/Managment/index.vue?vue&type=custom&index=0&blockType=i18n
var Managmentvue_type_custom_index_0_blockType_i18n = __webpack_require__(383);

// CONCATENATED MODULE: ./pages/Managment/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(381)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Managmentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "414e9e9f",
  "97719b10"
  
)

/* custom blocks */

if (typeof Managmentvue_type_custom_index_0_blockType_i18n["default"] === 'function') Object(Managmentvue_type_custom_index_0_blockType_i18n["default"])(component)

/* harmony default export */ var Managment = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map