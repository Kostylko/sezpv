exports.ids = [18,9];
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

/***/ 336:
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"news":"News","home":"Home"},"kz":{"news":"Жаңалықтар","home":"Басты бет"},"ru":{"news":"Новости","home":"Главная"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(402);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("f74f57a8", content, true, context)
};

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_19f9e688_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(355);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_19f9e688_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_19f9e688_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_19f9e688_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_19f9e688_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".News_list[data-v-19f9e688]{max-width:1400px;width:100%;margin:0 auto;padding-top:50px}.no-image[data-v-19f9e688]{width:845px;max-height:350px;height:auto}.dialog_class[data-v-19f9e688]{width:100vw;background:rgba(0,0,0,.38);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.opened[data-v-19f9e688]{display:flex!important}.closed[data-v-19f9e688]{display:none!important}.News[data-v-19f9e688]{justify-content:space-between;position:relative;padding:0 0 120px;width:100%;height:auto}.News[data-v-19f9e688],.News--content[data-v-19f9e688]{display:flex;flex-direction:column}.News--content[data-v-19f9e688]{align-items:center}.News--content h1[data-v-19f9e688]{font-family:\"OpenSans-Bold\";font-style:normal;font-weight:600;font-size:36px;line-height:43px;color:#224f9e;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4;overflow:hidden;max-width:845px;width:100%;margin-bottom:54px}.News--content .swiper-block[data-v-19f9e688]{position:relative;display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;height:auto;margin-bottom:20px}.News--content .swiper-button-next[data-v-19f9e688],.News--content .swiper-button-prev[data-v-19f9e688]{position:static!important;z-index:1}.News--content .swiper-button-prev[data-v-19f9e688]{margin-right:auto}.News--content .swiper-button-next[data-v-19f9e688]{margin-left:auto}.News--content .swiper[data-v-19f9e688]{max-width:845px;width:100%;height:100%}.News--content .swiper .swiper-slide[data-v-19f9e688]{border-radius:10px;width:100%;height:auto;display:flex;align-items:center}.News--content .swiper .swiper-slide img[data-v-19f9e688]{cursor:pointer;max-width:100%;width:100%;height:auto;max-height:350px;-o-object-fit:cover;object-fit:cover;border-radius:10px}.News--content .swiper .swiper-slide .swiper-slide-active[data-v-19f9e688]{width:100%}.News--content .swiper-button-next[data-v-19f9e688],.News--content .swiper-button-prev[data-v-19f9e688]{top:40%!important;position:fixed}.News--content .swiper-pagination[data-v-19f9e688]{display:flex;margin-top:20px;margin-bottom:60px}.News--content .swiper-pagination .swiper-pagination-clickable .swiper-pagination-bullet[data-v-19f9e688]{margin-right:10px}.News--content .swiper-button-next[data-v-19f9e688],.News--content .swiper-button-prev[data-v-19f9e688]{color:#b53a57}.News--content .swiper-button-next.swiper-button-disabled[data-v-19f9e688],.News--content .swiper-button-prev.swiper-button-disabled[data-v-19f9e688]{opacity:1}.News--content p[data-v-19f9e688]{font-style:normal;font-weight:400;font-size:18px;line-height:21px;color:#233659;max-width:845px;width:100%}@media screen and (max-width:1024px){.News_list[data-v-19f9e688]{padding:24px 16px 80px}}@media screen and (max-width:960px){.bread[data-v-19f9e688]{margin-bottom:39px!important}.News--content .swiper-block .swiper-button-next[data-v-19f9e688],.News--content .swiper-block .swiper-button-prev[data-v-19f9e688]{position:absolute!important;bottom:-130px;top:unset!important;width:50px;height:50px}.News--content .swiper-block .swiper-button-prev[data-v-19f9e688]{right:80px;left:unset}.News--content .swiper-block .swiper-button-next[data-v-19f9e688]{right:0;left:unset}.News--content .swiper-block .swiper .swiper-slide[data-v-19f9e688]{height:unset}.News--content .swiper-pagination[data-v-19f9e688]{margin-bottom:0}.News--content p[data-v-19f9e688]{margin-top:134px}}@media screen and (max-width:600px){.News--content h1[data-v-19f9e688]{font-size:24px;line-height:29px;margin-bottom:40px}.News--content p[data-v-19f9e688]{font-size:16px;line-height:19px}.News--content .swiper-block .swiper-button-next[data-v-19f9e688],.News--content .swiper-block .swiper-button-prev[data-v-19f9e688]{width:30px!important;height:30px!important}}@media screen and (max-width:320px){.no-image[data-v-19f9e688]{width:100%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(336);
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/News/_id.vue?vue&type=template&id=19f9e688&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"News_list"},[_c('inside-bread-crumbs',{staticClass:"bread",attrs:{"links":_vm.links}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"news_main\" data-v-19f9e688>","</div>",[_vm._ssrNode("<div class=\"News\" data-v-19f9e688>","</div>",[_vm._ssrNode("<div class=\"News--content\" data-v-19f9e688>","</div>",[_vm._ssrNode("<h1 data-v-19f9e688>"+_vm._ssrEscape("\n          "+_vm._s(_vm.data.title)+"\n        ")+"</h1> "),_c('client-only',[_c('div',{staticClass:"swiper-block"},[_c('div',{staticClass:"swiper-button-prev"}),_vm._v(" "),(_vm.data.images.length)?_c('swiper',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.CloseImg),expression:"CloseImg"}],ref:"mySwiper",staticClass:"swiper",attrs:{"options":_vm.swiperOptions}},_vm._l((_vm.data.images),function(item,index){return _c('swiper-slide',{key:index},[_c('img',{attrs:{"src":item.url,"id":"swiper_img"},on:{"click":function($event){$event.stopPropagation();return _vm.OpenImg(item.id)}}})])}),1):_c('img',{staticClass:"no-image",attrs:{"src":__webpack_require__(112)}}),_vm._v(" "),_c('div',{staticClass:"swiper-button-next"})],1),_vm._v(" "),_c('div',{staticClass:"swiper-pagination"})]),_vm._ssrNode(" <p data-v-19f9e688>"+(_vm._s(_vm.data.content))+"</p>")],2)])]),_vm._ssrNode(" "),(_vm.current_img)?_vm._ssrNode("<div class=\"dialog_class\" data-v-19f9e688>","</div>",[_c('v-dialog',{model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('img',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.OutsideClick),expression:"OutsideClick"}],attrs:{"src":_vm.data.images.filter(function (x) { return x.id === _vm.current_img; })[0].url}})])],1):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/News/_id.vue?vue&type=template&id=19f9e688&scoped=true&

// EXTERNAL MODULE: ./components/ui/InsideBreadCrumbs.vue + 4 modules
var InsideBreadCrumbs = __webpack_require__(230);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/News/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    } = (await $axios.get(`/news/${params.id}`, {
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
  data: () => ({
    defaultImage: __webpack_require__(112),
    dialog: true,
    opened_img: false,
    current_img: null,
    swiperOptions: {
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 500,
      transition: 5000,
      direction: "horizontal",
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
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

  },
  computed: {
    links() {
      return [{
        title: this.$t("home"),
        url: "/"
      }, {
        title: this.$t("news"),
        url: "/News"
      }, {
        title: this.data.title,
        url: ""
      }];
    }

  }
});
// CONCATENATED MODULE: ./pages/News/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var News_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// EXTERNAL MODULE: ./pages/News/_id.vue?vue&type=custom&index=0&blockType=i18n
var _idvue_type_custom_index_0_blockType_i18n = __webpack_require__(403);

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

// CONCATENATED MODULE: ./pages/News/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(401)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  News_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "19f9e688",
  "a2c4a712"
  
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