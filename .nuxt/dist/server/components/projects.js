exports.ids = [5];
exports.modules = {

/***/ 226:
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"projects":"our major projects","all":"All projects"},"kz":{"projects":"біздің ірі жобаларымыз","all":"Барлық жобалар"},"ru":{"projects":"наши крупные проекты","all":"Все проекты"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(316);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6131a8e5", content, true, context)
};

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_id_0a7e5b47_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(239);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_id_0a7e5b47_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_id_0a7e5b47_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_id_0a7e5b47_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_id_0a7e5b47_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Projects[data-v-0a7e5b47]{max-width:1280px;width:100%;height:auto;display:flex;flex-direction:column;align-items:center;padding:120px 0;margin:0 auto}.Projects h1[data-v-0a7e5b47]{font-style:normal;font-weight:700;font-size:36px;line-height:50px;text-align:center;text-transform:uppercase;color:#224f9e}.Projects .navigation[data-v-0a7e5b47]{display:flex;align-items:flex-end;margin-left:auto;max-width:120px;height:60px;width:100%;justify-content:space-between}.Projects .navigation .swiper-pagination[data-v-0a7e5b47]{display:none}.Projects .navigation .swiper-button-next[data-v-0a7e5b47],.Projects .navigation .swiper-button-prev[data-v-0a7e5b47],.Projects .navigation .swiper-button-prev.swiper-button-disabled[data-v-0a7e5b47]{position:static;color:#b53a57;opacity:1}.Projects .swiper[data-v-0a7e5b47]{max-width:1280px;width:100%;position:relative}.Projects .swiper .swiper-slide[data-v-0a7e5b47]{max-width:305px;height:210px;background:#fff;border-radius:10px;cursor:pointer;display:flex;align-items:center;justify-content:center}.Projects .swiper .swiper-slide a[data-v-0a7e5b47]{width:100%;height:100%}.Projects .swiper .swiper-slide .hover_p[data-v-0a7e5b47]{display:none}.Projects .swiper .swiper-slide img[data-v-0a7e5b47]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;border-radius:10px}.Projects .swiper .swiper-slide[data-v-0a7e5b47]:hover{background:#b53a57;-webkit-animation:proj-data-v-0a7e5b47 .5s linear;animation:proj-data-v-0a7e5b47 .5s linear}@-webkit-keyframes proj-data-v-0a7e5b47{0%{opacity:.7}to{opacity:1}}@keyframes proj-data-v-0a7e5b47{0%{opacity:.7}to{opacity:1}}.Projects .swiper .swiper-slide:hover img[data-v-0a7e5b47]{display:none}.Projects .swiper .swiper-slide .hover_p[data-v-0a7e5b47]{display:block;font-family:\"OpenSans-Semibold\";font-style:normal;font-weight:400;font-size:18px;line-height:25px;color:#fff;margin:30px 0 0 30px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.Projects .red-btn[data-v-0a7e5b47]{background:#b53a57;box-shadow:0 4px 20px rgba(181,58,87,.15);border-radius:6px;padding:15px 0;width:260px;height:50px;font-family:\"OpenSans-Medium\";font-style:normal;font-weight:700;font-size:18px;line-height:22px;text-align:center;color:#fcfcfc;transition:.22s}.Projects .red-btn[data-v-0a7e5b47]:hover{opacity:.8}.navigation-pagination[data-v-0a7e5b47]{width:100%;margin:30px 0 80px auto}.navigation-pagination .swiper-pagination[data-v-0a7e5b47]{display:none}@media screen and (max-width:1264px){.Projects[data-v-0a7e5b47]{max-width:100%;padding:120px 80px}.Projects .swiper[data-v-0a7e5b47]{width:100%}.Projects .swiper .swiper-slide[data-v-0a7e5b47]{max-width:380px}.Projects .navigation-pagination[data-v-0a7e5b47]{margin-top:24px}.Projects .navigation-pagination .navigation[data-v-0a7e5b47]{align-items:flex-end}}@media screen and (max-width:960px){.Projects[data-v-0a7e5b47]{padding:80px 16px}.Projects .swiper[data-v-0a7e5b47]{height:auto}.Projects .swiper .swiper-slide[data-v-0a7e5b47]{max-width:400px;width:100%}}@media screen and (max-width:768px){.navigation-pagination[data-v-0a7e5b47]{display:flex;flex-direction:column-reverse;margin:44px auto 60px!important;width:100%}.navigation-pagination .swiper-pagination[data-v-0a7e5b47]{position:static;display:flex;justify-content:center;width:100%}.navigation-pagination .navigation[data-v-0a7e5b47]{margin-left:auto;margin-top:48px}.navigation-pagination .navigation .swiper-button-next[data-v-0a7e5b47]{width:50px;height:50px}h1[data-v-0a7e5b47]{font-size:24px!important;line-height:29px!important}.swiper .swiper-slide[data-v-0a7e5b47]{max-width:100%!important}button[data-v-0a7e5b47]{font-size:16px!important;line-height:19px!important}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(226);
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Projects.vue?vue&type=template&id=0a7e5b47&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg"},[_vm._ssrNode("<div class=\"Projects\" data-v-0a7e5b47>","</div>",[_vm._ssrNode("<h1 data-v-0a7e5b47>"+_vm._ssrEscape(_vm._s(_vm.$t("projects")))+"</h1> <div class=\"line\" data-v-0a7e5b47></div> "),_c('client-only',[_c('swiper',{ref:"swip",staticClass:"swiper",attrs:{"options":_vm.projectOptions}},_vm._l((_vm.projects),function(item,index){return _c('swiper-slide',{key:index,attrs:{"data-swiper-autoplay":"2000"}},[_c('a',{on:{"click":function($event){return _vm.goToInner(item.id)}}},[_c('img',{staticClass:"photo",attrs:{"src":item.images.length ? item.images[0].url : _vm.defaultImage}}),_vm._v(" "),_c('p',{staticClass:"hover_p"},[_vm._v(_vm._s(item.title))])])])}),1),_vm._v(" "),_c('div',{staticClass:"navigation-pagination"},[_c('div',{staticClass:"navigation"},[_c('div',{staticClass:"swiper-button-prev swiper1-prev"}),_vm._v(" "),_c('div',{staticClass:"swiper-button-next swiper1-next"})]),_vm._v(" "),_c('div',{staticClass:"swiper-pagination"})])],1),_vm._ssrNode(" "),_c('nuxt-link',{attrs:{"to":_vm.localePath('/Projects')}},[_c('button',{staticClass:"red-btn"},[_vm._v(_vm._s(_vm.$t("all")))])])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Projects.vue?vue&type=template&id=0a7e5b47&scoped=true&

// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__(20);
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Projects.vue?vue&type=script&lang=js&
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

external_swiper_default.a.use([, external_swiper_["Navigation"], external_swiper_["Pagination"], external_swiper_["Autoplay"]]);
/* harmony default export */ var Projectsvue_type_script_lang_js_ = ({
  props: {
    projects: {
      type: Array,
      default: []
    }
  },
  data: () => ({
    defaultImage: __webpack_require__(112),
    projectOptions: {
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 500,
      transition: 5000,
      loop: true,
      direction: "horizontal",
      navigation: {
        nextEl: ".swiper1-next",
        prevEl: ".swiper1-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      autoplay: {
        delay: 5000
      },
      breakpoints: {
        1264: {
          slidesPerView: 4
        },
        960: {
          slidesPerView: 3
        },
        600: {
          slidesPerView: 2
        }
      }
    }
  }),
  methods: {
    goToInner(id) {
      this.$router.push(this.localePath({
        path: `/Projects/${id}`,
        query: {
          id: id
        }
      }));
    }

  }
});
// CONCATENATED MODULE: ./components/Projects.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Projectsvue_type_script_lang_js_ = (Projectsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// EXTERNAL MODULE: ./components/Projects.vue?vue&type=custom&index=0&blockType=i18n
var Projectsvue_type_custom_index_0_blockType_i18n = __webpack_require__(317);

// CONCATENATED MODULE: ./components/Projects.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(315)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Projectsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0a7e5b47",
  "3d946316"
  
)

/* custom blocks */

if (typeof Projectsvue_type_custom_index_0_blockType_i18n["default"] === 'function') Object(Projectsvue_type_custom_index_0_blockType_i18n["default"])(component)

/* harmony default export */ var Projects = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=projects.js.map