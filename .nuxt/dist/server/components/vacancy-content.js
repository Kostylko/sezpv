exports.ids = [10];
exports.modules = {

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(334);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("673f6131", content, true, context)
};

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vacancyContent_vue_vue_type_style_index_0_id_7e5979a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(243);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vacancyContent_vue_vue_type_style_index_0_id_7e5979a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vacancyContent_vue_vue_type_style_index_0_id_7e5979a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vacancyContent_vue_vue_type_style_index_0_id_7e5979a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vacancyContent_vue_vue_type_style_index_0_id_7e5979a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hidden[data-v-7e5979a8]{display:none!important}.show[data-v-7e5979a8]{display:block!important}.reveal[data-v-7e5979a8]{transform:rotate(-180deg);-webkit-animation-name:reveal-data-v-7e5979a8;animation-name:reveal-data-v-7e5979a8;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes reveal-data-v-7e5979a8{0%{transform:rotate(0deg)}to{transform:rotate(-180deg)}}@keyframes reveal-data-v-7e5979a8{0%{transform:rotate(0deg)}to{transform:rotate(-180deg)}}.reveal path[data-v-7e5979a8]{fill:grey}.closed[data-v-7e5979a8]{-webkit-animation-name:closed-data-v-7e5979a8;animation-name:closed-data-v-7e5979a8;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes closed-data-v-7e5979a8{0%{transform:rotate(180deg)}to{transform:rotate(0deg)}}@keyframes closed-data-v-7e5979a8{0%{transform:rotate(180deg)}to{transform:rotate(0deg)}}.Faq-blocks[data-v-7e5979a8]{display:flex;flex-direction:column;position:relative;background:#fff;border-radius:10px;padding:30px;cursor:pointer}.Faq-blocks h1[data-v-7e5979a8]{font-style:normal;font-weight:700;font-size:24px;line-height:29px;text-transform:uppercase;color:#b53a57;transition:.22s}.Faq-blocks p[data-v-7e5979a8]{font-style:normal;font-weight:400;font-size:16px;line-height:19px;-webkit-text-decoration-line:underline;text-decoration-line:underline;color:#233659;margin-bottom:0!important}.Faq-blocks svg[data-v-7e5979a8]{position:absolute;top:30px;right:30px;cursor:pointer}.Faq-blocks .answers[data-v-7e5979a8]{margin-top:32px}.Faq-blocks .answers a[data-v-7e5979a8]{margin-bottom:34px!important;font-family:\"OpenSans-Regular\";font-style:normal;font-weight:400;font-size:16px;line-height:19px;color:#233659;text-decoration:underline!important;transition:.22s}.Faq-blocks .answers a[data-v-7e5979a8]:last-of-type{margin-bottom:0}.Faq-blocks[data-v-7e5979a8]:hover{box-shadow:0 4px 20px rgba(34,79,158,.15)}@media screen and (max-width:500px){.Faq-blocks[data-v-7e5979a8]{padding:20px}.Faq-blocks h1[data-v-7e5979a8]{max-width:265px;font-size:18px;line-height:21px}.Faq-blocks svg[data-v-7e5979a8]{top:20px;right:20px}}@media screen and (max-width:340px){.Faq-blocks h1[data-v-7e5979a8]{max-width:210px;font-size:16px;line-height:21px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/vacancyContent.vue?vue&type=template&id=7e5979a8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Faq-blocks",on:{"click":function($event){_vm.opened = !_vm.opened}}},[_vm._ssrNode("<h1 data-v-7e5979a8>"+_vm._ssrEscape(_vm._s(_vm.item.title))+"</h1> "+(_vm._ssrList((_vm.item.detail),function(detail,index){return ("<div"+(_vm._ssrClass("answers",{ hidden: _vm.opened == false, show: _vm.opened == true }))+" data-v-7e5979a8><small data-v-7e5979a8>"+_vm._ssrEscape(_vm._s(detail.created))+"</small><br data-v-7e5979a8> <a"+(_vm._ssrAttr("href",detail.file))+" target=\"_blank\" data-v-7e5979a8>"+_vm._ssrEscape("\n      "+_vm._s(detail.title)+"\n    ")+"</a></div>")}))+" <svg width=\"26\" height=\"26\" viewBox=\"0 0 26 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\""+(_vm._ssrClass(null,{ reveal: _vm.opened == true, closed: _vm.opened == false }))+" data-v-7e5979a8><path d=\"M4.84344 8.63373C5.1319 8.34527 5.58329 8.31905 5.90136 8.55506L5.99249 8.63373L13.0013 15.6422L20.0101 8.63373C20.2986 8.34527 20.75 8.31905 21.068 8.55506L21.1592 8.63373C21.4476 8.92218 21.4738 9.37357 21.2378 9.69165L21.1592 9.78278L13.5758 17.3661C13.2874 17.6546 12.836 17.6808 12.5179 17.4448L12.4268 17.3661L4.84344 9.78278C4.52614 9.46548 4.52614 8.95103 4.84344 8.63373Z\" fill=\"#B53A57\" data-v-7e5979a8></path></svg>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/vacancyContent.vue?vue&type=template&id=7e5979a8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/vacancyContent.vue?vue&type=script&lang=js&
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
/* harmony default export */ var vacancyContentvue_type_script_lang_js_ = ({
  props: {
    item: {
      type: Object,
      default: []
    }
  },
  data: () => ({
    opened: false
  })
});
// CONCATENATED MODULE: ./components/vacancyContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_vacancyContentvue_type_script_lang_js_ = (vacancyContentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/vacancyContent.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(333)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_vacancyContentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7e5979a8",
  "4f3d3dce"
  
)

/* harmony default export */ var vacancyContent = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=vacancy-content.js.map