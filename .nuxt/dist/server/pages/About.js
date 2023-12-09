exports.ids = [11];
exports.modules = {

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(365);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("72379780", content, true, context)
};

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_580dda5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(343);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_580dda5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_580dda5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_580dda5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_580dda5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dialog_class[data-v-580dda5e]{width:100vw;height:100vh;background:rgba(0,0,0,.38);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.About[data-v-580dda5e]{padding:60px 0 120px;max-width:1025px;margin:0 auto}.About[data-v-580dda5e],.About .swiper[data-v-580dda5e]{width:100%;height:auto}.About .swiper[data-v-580dda5e]{max-width:845px}.About .swiper .swiper-slide[data-v-580dda5e]{display:flex;align-items:center;justify-content:center}.About .swiper .swiper-slide img[data-v-580dda5e]{cursor:pointer;max-width:845px;height:350px;width:100%;-o-object-fit:cover;object-fit:cover;border-radius:10px}.About .navigation[data-v-580dda5e]{width:100%;display:flex;justify-content:space-between;align-items:center}.About .navigation .swiper-button-next.swiper-button-disabled[data-v-580dda5e],.About .navigation .swiper-button-prev.swiper-button-disabled[data-v-580dda5e]{opacity:1!important}.About .navigation .swiper-button-next[data-v-580dda5e],.About .navigation .swiper-button-prev[data-v-580dda5e]{position:static;z-index:3;color:#b53a57}.About .swiper-pagination[data-v-580dda5e]{width:100%;margin:20px 0 60px;position:static;display:flex;justify-content:center}.About .swiper-pagination .swiper-pagination-bullet[data-v-580dda5e]{margin-right:10px!important}.About p[data-v-580dda5e]{font-style:normal;font-weight:400;font-size:18px;line-height:21px;color:#233659;max-width:845px;width:100%;margin:0 auto 10px}@media screen and (max-width:1264px){.About[data-v-580dda5e]{padding:40px 16px 80px}}@media screen and (max-width:960px){.About .navigation[data-v-580dda5e]{position:relative}.About .navigation .swiper-button-next[data-v-580dda5e],.About .navigation .swiper-button-prev[data-v-580dda5e]{position:absolute;bottom:-130px;top:unset!important}.About .navigation .swiper-button-prev[data-v-580dda5e]{right:80px;left:unset}.About .navigation .swiper-button-next[data-v-580dda5e]{right:0;left:unset}.About .navigation .swiper[data-v-580dda5e]{max-width:unset}.About .navigation .swiper .swiper-slide[data-v-580dda5e]{width:100%}.About .navigation .swiper .swiper-slide img[data-v-580dda5e]{max-width:unset}.About p[data-v-580dda5e]:first-of-type{display:none}.About p[data-v-580dda5e]:last-of-type{margin-top:150px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/About.vue?vue&type=template&id=580dda5e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg"},[_vm._ssrNode("<div class=\"About\" data-v-580dda5e>","</div>",[_vm._ssrNode("<div class=\"navigation\" data-v-580dda5e>","</div>",[_vm._ssrNode("<div class=\"swiper-button-prev\" data-v-580dda5e></div> "),_c('client-only',[_c('swiper',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.CloseImg),expression:"CloseImg"}],ref:"mySwiper",staticClass:"swiper",attrs:{"options":_vm.swiperOptions}},_vm._l((_vm.data.images),function(item,index){return _c('swiper-slide',{key:index},[_c('img',{attrs:{"src":item.url},on:{"click":function($event){$event.stopPropagation();return _vm.OpenImg(item.id)}}})])}),1)],1),_vm._ssrNode(" <div class=\"swiper-button-next\" data-v-580dda5e></div>")],2),_vm._ssrNode(" <div class=\"swiper-pagination\" data-v-580dda5e></div> <p data-v-580dda5e>"+_vm._ssrEscape(_vm._s(_vm.data.title))+"</p> <p data-v-580dda5e>"+(_vm._s(_vm.data.content))+"</p>")],2),_vm._ssrNode(" "),(_vm.current_img)?_vm._ssrNode("<div class=\"dialog_class\" data-v-580dda5e>","</div>",[_c('v-dialog',{model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('img',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.OutsideClick),expression:"OutsideClick"}],attrs:{"src":_vm.data.images.filter(function (x) { return x.id === _vm.current_img; })[0].url}})])],1):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/About.vue?vue&type=template&id=580dda5e&scoped=true&

// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__(20);
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/About.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

external_swiper_default.a.use([, external_swiper_["Navigation"], external_swiper_["Pagination"]]);
/* harmony default export */ var Aboutvue_type_script_lang_js_ = ({
  async asyncData({
    $axios,
    i18n
  }) {
    let params = {};
    params.lang = i18n.locale == "en" ? "en" : i18n.locale;
    const {
      data
    } = (await $axios.get(`about`, {
      params
    })).data;
    return {
      data,
      params
    };
  },

  data: () => ({
    current_img: null,
    swiperOptions: {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 500,
      transition: 5000,
      direction: "horizontal",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets"
      }
    }
  }),
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
// CONCATENATED MODULE: ./pages/About.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Aboutvue_type_script_lang_js_ = (Aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

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

// CONCATENATED MODULE: ./pages/About.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(364)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "580dda5e",
  "1fd45ae4"
  
)

/* harmony default export */ var About = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VDialog: VDialog["a" /* default */]})


/* vuetify-loader */


installDirectives_default()(component, {ClickOutside: click_outside["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=About.js.map