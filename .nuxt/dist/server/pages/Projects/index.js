exports.ids = [21];
exports.modules = {

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Intersect */
function inserted(el, binding, vnode) {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
  const modifiers = binding.modifiers || {};
  const value = binding.value;
  const {
    handler,
    options
  } = typeof value === 'object' ? value : {
    handler: value,
    options: {}
  };
  const observer = new IntersectionObserver((entries = [], observer) => {
    var _el$_observe;

    const _observe = (_el$_observe = el._observe) == null ? void 0 : _el$_observe[vnode.context._uid];

    if (!_observe) return; // Just in case, should never fire

    const isIntersecting = entries.some(entry => entry.isIntersecting); // If is not quiet or has already been
    // initted, invoke the user callback

    if (handler && (!modifiers.quiet || _observe.init) && (!modifiers.once || isIntersecting || _observe.init)) {
      handler(entries, observer, isIntersecting);
    }

    if (isIntersecting && modifiers.once) unbind(el, binding, vnode);else _observe.init = true;
  }, options);
  el._observe = Object(el._observe);
  el._observe[vnode.context._uid] = {
    init: false,
    observer
  };
  observer.observe(el);
}

function unbind(el, binding, vnode) {
  var _el$_observe2;

  const observe = (_el$_observe2 = el._observe) == null ? void 0 : _el$_observe2[vnode.context._uid];
  if (!observe) return;
  observe.observer.unobserve(el);
  delete el._observe[vnode.context._uid];
}

const Intersect = {
  inserted,
  unbind
};
/* harmony default export */ __webpack_exports__["a"] = (Intersect);

/***/ }),

/***/ 330:
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"read_more":"Read more","searching":"Search by project"},"kz":{"read_more":"Толығырақ","searching":"Жоба бойынша іздеу"},"ru":{"read_more":"Читать подробнее","searching":"Поиск по проекту"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(390);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5447f98b", content, true, context)
};

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_76b6301e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(351);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_76b6301e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_76b6301e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_76b6301e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_76b6301e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".opacity[data-v-76b6301e]{opacity:.6;background-position:50%;z-index:1;height:305px;border-radius:10px;background-size:cover;position:absolute;top:0;left:0;align-items:flex-end}.opacity[data-v-76b6301e],.Projects[data-v-76b6301e]{width:100%;display:flex}.Projects[data-v-76b6301e]{margin:0 auto;max-width:1400px;padding:60px 0 120px;flex-direction:column;align-items:center}.Projects .active_div[data-v-76b6301e]{background:#b53a57}.Projects .active_div p[data-v-76b6301e]{color:#fff;font-weight:700}.Projects .Search[data-v-76b6301e]{width:100%;height:50px;border-top-left-radius:10px;border-bottom-left-radius:10px;background:#fff;display:flex;justify-content:space-between;align-items:center;padding-left:20px}.Projects .Search input[data-v-76b6301e]{max-width:1180px;width:100%;height:50px;padding:14px 0 15px;outline:none;font-family:\"OpenSans-Regular\"}.Projects .Search[data-v-76b6301e] ::-moz-placeholder{font-family:\"OpenSans-Regular\";font-style:normal;font-weight:400;font-size:18px;line-height:21px;color:#b5bac1}.Projects .Search[data-v-76b6301e] :-ms-input-placeholder{font-family:\"OpenSans-Regular\";font-style:normal;font-weight:400;font-size:18px;line-height:21px;color:#b5bac1}.Projects .Search[data-v-76b6301e] ::placeholder{font-family:\"OpenSans-Regular\";font-style:normal;font-weight:400;font-size:18px;line-height:21px;color:#b5bac1}.Projects .Search .search-btn[data-v-76b6301e]{max-width:100px;width:100%;height:100%;border-top-right-radius:10px;border-bottom-right-radius:10px;background:#b53a57;display:flex;align-items:center;justify-content:center;cursor:pointer}.Projects--type[data-v-76b6301e]{margin:40px 0;padding:4px 6px;background:#fff;border-radius:10px}.Projects--type[data-v-76b6301e],.Projects--type div[data-v-76b6301e]{display:flex;align-items:center;width:100%}.Projects--type div[data-v-76b6301e]{height:42px;justify-content:center;cursor:pointer;transition:.33s;max-width:179px}.Projects--type div[data-v-76b6301e]:nth-of-type(3){max-width:170px}.Projects--type div[data-v-76b6301e]:last-of-type{max-width:220px;padding:0 5px}.Projects--type div p[data-v-76b6301e]{color:#233659;text-align:center;font-size:18px;line-height:24px}.Projects--type div[data-v-76b6301e]:hover{background:#b53a57;border-radius:10px}.Projects--type div:hover p[data-v-76b6301e]{color:#fcfcfc}.Projects--type .active_div[data-v-76b6301e]{background:#b53a57;border-radius:10px}.Projects--type .deactive_div[data-v-76b6301e]{background:none}.Projects--type .active[data-v-76b6301e]{color:#fcfcfc;font-weight:600}.Projects--type .deactive[data-v-76b6301e]{color:#233659}.Projects--list[data-v-76b6301e]{display:grid;grid-template-columns:repeat(auto-fit,305px);grid-gap:20px;width:100%}.Projects--list--adaptive[data-v-76b6301e]{display:none}.Projects--list--div[data-v-76b6301e]{background:#000;padding:0 30px 54px;max-width:305px;cursor:pointer;width:100%;height:305px;display:flex;align-items:flex-end;background-size:cover;border-radius:10px;position:relative}.Projects--list--div .title[data-v-76b6301e]{z-index:3;color:#fcfcfc;opacity:1;font-weight:600;text-transform:uppercase}.Projects--list--div .hover_div[data-v-76b6301e],.Projects--list--div:hover .title[data-v-76b6301e]{display:none}.Projects--list--div:hover .opacity[data-v-76b6301e]{background-image:unset!important}.Projects--list--div:hover .background[data-v-76b6301e]{display:none}.Projects--list--div:hover .hover_div[data-v-76b6301e]{display:flex;flex-direction:column;width:100%;height:100%}.Projects--list--div:hover .hover_div h2[data-v-76b6301e]{font-style:normal;text-transform:uppercase}.Projects--list--div:hover .hover_div h2[data-v-76b6301e],.Projects--list--div:hover .hover_div p[data-v-76b6301e]{font-weight:400;font-size:18px;line-height:21px;color:#fcfcfc;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.Projects--list--div:hover .hover_div p[data-v-76b6301e]{max-width:245px;width:100%;opacity:.5;margin:22px 0 120px!important;box-sizing:border-box}.Projects--list--div:hover .hover_div a[data-v-76b6301e]{z-index:3;font-family:\"OpenSans-Regular\";font-style:normal;font-weight:400;font-size:18px;line-height:21px;color:#fcfcfc;cursor:pointer;display:flex;align-items:center}.Projects--list--div:hover .hover_div a svg[data-v-76b6301e]{margin-left:16px}.Projects--list--div[data-v-76b6301e]:hover{padding:30px;background:#b53a57!important;border-radius:10px;z-index:2;-webkit-animation-name:hover-data-v-76b6301e;animation-name:hover-data-v-76b6301e;-webkit-animation-duration:1s;animation-duration:1s}@-webkit-keyframes hover-data-v-76b6301e{0%{opacity:.4;transition:.3s}to{opacity:1;transition:0}}@keyframes hover-data-v-76b6301e{0%{opacity:.4;transition:.3s}to{opacity:1;transition:0}}@media screen and (max-width:1440px){.Projects[data-v-76b6301e]{max-width:1280px}}@media screen and (max-width:1264px){.Projects[data-v-76b6301e]{padding:40px 16px 80px}.Projects--list[data-v-76b6301e]{justify-content:center}}@media screen and (max-width:960px){.Projects .Search[data-v-76b6301e] ::-moz-placeholder{font-size:16px;line-height:18px}.Projects .Search[data-v-76b6301e] :-ms-input-placeholder{font-size:16px;line-height:18px}.Projects .Search[data-v-76b6301e] ::placeholder{font-size:16px;line-height:18px}.Projects .Search .search-btn[data-v-76b6301e]{max-width:unset;width:80px}.Projects--type[data-v-76b6301e]{flex-wrap:wrap}.Projects--list--div[data-v-76b6301e]{display:none}.Projects--list--adaptive[data-v-76b6301e]{background:#000;display:grid;background-position:50%;max-width:305px;width:100%;height:305px;padding:0 30px 54px;display:flex;align-items:flex-end;background-size:cover;border-radius:10px;position:relative}.Projects--list--adaptive a[data-v-76b6301e]{width:100%;height:100%;margin-top:auto;display:flex;flex-direction:column;justify-content:flex-end}.Projects--list--adaptive p[data-v-76b6301e]{z-index:2;width:100%;color:#fcfcfc;font-weight:600;text-transform:uppercase;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.Projects--list--adaptive .title[data-v-76b6301e]{z-index:2;margin-bottom:16px!important}}@media screen and (max-width:514px){.Projects--type[data-v-76b6301e]{display:grid;grid-template-columns:1fr 1fr}.Projects--type div[data-v-76b6301e]{max-width:unset!important;width:100%;margin-right:0!important}.Projects--type div .active[data-v-76b6301e],.Projects--type div p[data-v-76b6301e]{font-size:15px;line-height:19px;white-space:nowrap}.Projects--list--div .title[data-v-76b6301e],.Projects--list .hover_div a[data-v-76b6301e],.Projects--list .hover_div h2[data-v-76b6301e],.Projects--list .hover_div p[data-v-76b6301e]{font-size:16px;line-height:19px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(330);
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(393);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("e003f1f8", content, true)

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-progress-circular{position:relative;display:inline-flex;vertical-align:middle;justify-content:center;align-items:center}.v-progress-circular>svg{width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.v-progress-circular--indeterminate>svg{-webkit-animation:progress-circular-rotate 1.4s linear infinite;animation:progress-circular-rotate 1.4s linear infinite;transform-origin:center center;transition:all .2s ease-in-out}.v-progress-circular--indeterminate .v-progress-circular__overlay{-webkit-animation:progress-circular-dash 1.4s ease-in-out infinite;animation:progress-circular-dash 1.4s ease-in-out infinite;stroke-linecap:round;stroke-dasharray:80,200;stroke-dashoffset:0px}.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay,.v-progress-circular--indeterminate:not(.v-progress-circular--visible)>svg{-webkit-animation-play-state:paused!important;animation-play-state:paused!important}.v-progress-circular__info{align-items:center;display:flex;justify-content:center}.v-progress-circular__underlay{stroke:hsla(0,0%,62%,.4);z-index:1}.v-progress-circular__overlay{stroke:currentColor;z-index:2;transition:all .6s ease-in-out}@-webkit-keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@-webkit-keyframes progress-circular-rotate{to{transform:rotate(1turn)}}@keyframes progress-circular-rotate{to{transform:rotate(1turn)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Projects/index.vue?vue&type=template&id=76b6301e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg"},[_vm._ssrNode("<div class=\"Projects\" data-v-76b6301e><div class=\"Search\" data-v-76b6301e><input type=\"search\""+(_vm._ssrAttr("placeholder",_vm.$t('searching')))+(_vm._ssrAttr("value",(_vm.search)))+" data-v-76b6301e> <div class=\"search-btn\" data-v-76b6301e><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-76b6301e><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.739 2C17.109 2 21.477 6.368 21.477 11.738C21.477 14.2715 20.5047 16.5823 18.9136 18.3165L22.0444 21.4407C22.3374 21.7337 22.3384 22.2077 22.0454 22.5007C21.8994 22.6487 21.7064 22.7217 21.5144 22.7217C21.3234 22.7217 21.1314 22.6487 20.9844 22.5027L17.8159 19.343C16.1491 20.6778 14.0357 21.477 11.739 21.477C6.369 21.477 2 17.108 2 11.738C2 6.368 6.369 2 11.739 2ZM11.739 3.5C7.196 3.5 3.5 7.195 3.5 11.738C3.5 16.281 7.196 19.977 11.739 19.977C16.281 19.977 19.977 16.281 19.977 11.738C19.977 7.195 16.281 3.5 11.739 3.5Z\" fill=\"#FCFCFC\" data-v-76b6301e></path></svg></div></div> <div class=\"Projects--type\" data-v-76b6301e>"+(_vm._ssrList((_vm.type),function(category,idx){return ("<div"+(_vm._ssrClass(null,{ active_div: _vm.selectedCategory == category.id }))+" data-v-76b6301e><p class=\"mb-0\" data-v-76b6301e>"+_vm._ssrEscape("\n          "+_vm._s(category.title)+"\n        ")+"</p></div>")}))+"</div> <div class=\"Projects--list\" data-v-76b6301e>"+(_vm._ssrList((_vm.filtered),function(project,idx){return ("<div class=\"Projects--list--div\" data-v-76b6301e><div class=\"opacity\""+(_vm._ssrStyle(null,{
            backgroundImage: ("url(" + (project.images.length ? project.images[0].url : _vm.defaultImage) + ")"),
          }, null))+" data-v-76b6301e></div> <p class=\"title\" data-v-76b6301e>"+_vm._ssrEscape("\n          "+_vm._s(project.title)+"\n        ")+"</p> <div class=\"hover_div\" data-v-76b6301e><h2 data-v-76b6301e>"+_vm._ssrEscape(_vm._s(project.title))+"</h2> <p data-v-76b6301e>"+_vm._ssrEscape(_vm._s(project.product))+"</p> <a data-v-76b6301e>"+_vm._ssrEscape(_vm._s(_vm.$t("read_more"))+"\n            ")+"<svg width=\"8\" height=\"14\" viewBox=\"0 0 8 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-76b6301e><path d=\"M0.641066 13.2754C0.419177 13.0535 0.399006 12.7063 0.580551 12.4617L0.641066 12.3916L6.03217 7.00016L0.641066 1.60877C0.419177 1.38688 0.399006 1.03966 0.580551 0.794984L0.641066 0.724886C0.862955 0.502996 1.21017 0.482824 1.45485 0.664371L1.52495 0.724886L7.35828 6.55822C7.58017 6.78011 7.60034 7.12733 7.4188 7.372L7.35828 7.4421L1.52495 13.2754C1.28087 13.5195 0.885144 13.5195 0.641066 13.2754Z\" fill=\"#FCFCFC\" data-v-76b6301e></path></svg></a></div></div>")}))+" "+(_vm._ssrList((_vm.filtered),function(sub_project,index){return ("<div class=\"Projects--list--adaptive\" data-v-76b6301e><div class=\"opacity\""+(_vm._ssrStyle(null,{
            backgroundImage: ("url(" + (sub_project.images.length
                ? sub_project.images[0].url
                : _vm.defaultImage) + ")"),
          }, null))+" data-v-76b6301e></div> <a data-v-76b6301e><p class=\"title\" data-v-76b6301e>"+_vm._ssrEscape("\n            "+_vm._s(sub_project.title)+"\n          ")+"</p> <p data-v-76b6301e>"+_vm._ssrEscape(_vm._s(sub_project.product))+"</p></a></div>")}))+"</div></div> "),_c('v-overlay',{attrs:{"value":_vm.loading,"z-index":"999999"}},[_c('v-progress-circular',{attrs:{"size":70,"width":7,"color":"#ff575f","indeterminate":""}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Projects/index.vue?vue&type=template&id=76b6301e&scoped=true&

// EXTERNAL MODULE: ./components/ui/BreadCrumbs.vue + 4 modules
var BreadCrumbs = __webpack_require__(96);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Projects/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Projectsvue_type_script_lang_js_ = ({
  components: {
    BreadCrumbs: BreadCrumbs["default"]
  },

  async asyncData({
    $axios,
    i18n
  }) {
    let total = (await $axios.get(`projects`)).data.meta.total;
    let page = 1;
    let pagination = total;
    let params = {
      page,
      pagination
    };
    params.lang = i18n.locale == "en" ? "en" : i18n.locale;
    const {
      data
    } = (await $axios.get(`projects`, {
      params
    })).data;
    const type = (await $axios.get(`projects/statuses`, {
      params
    })).data.data;
    return {
      data,
      type,
      params
    };
  },

  data: () => ({
    defaultImage: __webpack_require__(112),
    selectedCategory: 1,
    loading: false,
    filtered: [],
    search: "",
    test: []
  }),

  created() {
    this.selectCat(this.selectedCategory);
  },

  watch: {
    search() {
      if (this.search == "") {
        this.selectCat(this.selectedCategory);
      } else {
        this.searchBtn();
      }
    }

  },
  methods: {
    selectCat(type) {
      this.selectedCategory = type;
      this.filtered = this.data.filter(x => x.status_id == type);
    },

    goToInner(id) {
      this.$router.push(this.localePath({
        path: `/Projects/${id}`,
        query: {
          id: id
        }
      }));
    },

    searchBtn() {
      this.selectCat(this.selectedCategory);
      this.filtered = this.filtered.filter(x => {
        if (x["title"].includes(this.search) == true || x["title"].toUpperCase().includes(this.search) == true || x["title"].toLowerCase().includes(this.search) == true) {
          return x;
        }
      });
    },

    goToPage(id) {
      this.$router.push(this.localePath({
        path: `/Projects/${id}`,
        query: {
          id: id
        }
      }));
    }

  }
});
// CONCATENATED MODULE: ./pages/Projects/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Projectsvue_type_script_lang_js_ = (Projectsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// EXTERNAL MODULE: ./pages/Projects/index.vue?vue&type=custom&index=0&blockType=i18n
var Projectsvue_type_custom_index_0_blockType_i18n = __webpack_require__(391);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(12);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VOverlay/VOverlay.js
var VOverlay = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VProgressCircular/VProgressCircular.sass
var VProgressCircular = __webpack_require__(392);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/intersect/index.js
var intersect = __webpack_require__(219);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
// Styles
 // Directives

 // Mixins

 // Utils


/* @vue/component */

/* harmony default export */ var VProgressCircular_VProgressCircular = (colorable["a" /* default */].extend({
  name: 'v-progress-circular',
  directives: {
    intersect: intersect["a" /* default */]
  },
  props: {
    button: Boolean,
    indeterminate: Boolean,
    rotate: {
      type: [Number, String],
      default: 0
    },
    size: {
      type: [Number, String],
      default: 32
    },
    width: {
      type: [Number, String],
      default: 4
    },
    value: {
      type: [Number, String],
      default: 0
    }
  },
  data: () => ({
    radius: 20,
    isVisible: true
  }),
  computed: {
    calculatedSize() {
      return Number(this.size) + (this.button ? 8 : 0);
    },

    circumference() {
      return 2 * Math.PI * this.radius;
    },

    classes() {
      return {
        'v-progress-circular--visible': this.isVisible,
        'v-progress-circular--indeterminate': this.indeterminate,
        'v-progress-circular--button': this.button
      };
    },

    normalizedValue() {
      if (this.value < 0) {
        return 0;
      }

      if (this.value > 100) {
        return 100;
      }

      return parseFloat(this.value);
    },

    strokeDashArray() {
      return Math.round(this.circumference * 1000) / 1000;
    },

    strokeDashOffset() {
      return (100 - this.normalizedValue) / 100 * this.circumference + 'px';
    },

    strokeWidth() {
      return Number(this.width) / +this.size * this.viewBoxSize * 2;
    },

    styles() {
      return {
        height: Object(helpers["g" /* convertToUnit */])(this.calculatedSize),
        width: Object(helpers["g" /* convertToUnit */])(this.calculatedSize)
      };
    },

    svgStyles() {
      return {
        transform: `rotate(${Number(this.rotate)}deg)`
      };
    },

    viewBoxSize() {
      return this.radius / (1 - Number(this.width) / +this.size);
    }

  },
  methods: {
    genCircle(name, offset) {
      return this.$createElement('circle', {
        class: `v-progress-circular__${name}`,
        attrs: {
          fill: 'transparent',
          cx: 2 * this.viewBoxSize,
          cy: 2 * this.viewBoxSize,
          r: this.radius,
          'stroke-width': this.strokeWidth,
          'stroke-dasharray': this.strokeDashArray,
          'stroke-dashoffset': offset
        }
      });
    },

    genSvg() {
      const children = [this.indeterminate || this.genCircle('underlay', 0), this.genCircle('overlay', this.strokeDashOffset)];
      return this.$createElement('svg', {
        style: this.svgStyles,
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: `${this.viewBoxSize} ${this.viewBoxSize} ${2 * this.viewBoxSize} ${2 * this.viewBoxSize}`
        }
      }, children);
    },

    genInfo() {
      return this.$createElement('div', {
        staticClass: 'v-progress-circular__info'
      }, this.$slots.default);
    },

    onObserve(entries, observer, isIntersecting) {
      this.isVisible = isIntersecting;
    }

  },

  render(h) {
    return h('div', this.setTextColor(this.color, {
      staticClass: 'v-progress-circular',
      attrs: {
        role: 'progressbar',
        'aria-valuemin': 0,
        'aria-valuemax': 100,
        'aria-valuenow': this.indeterminate ? undefined : this.normalizedValue
      },
      class: this.classes,
      directives: [{
        name: 'intersect',
        value: this.onObserve
      }],
      style: this.styles,
      on: this.$listeners
    }), [this.genSvg(), this.genInfo()]);
  }

}));
// CONCATENATED MODULE: ./pages/Projects/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(389)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Projectsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "76b6301e",
  "8e4b5a94"
  
)

/* custom blocks */

if (typeof Projectsvue_type_custom_index_0_blockType_i18n["default"] === 'function') Object(Projectsvue_type_custom_index_0_blockType_i18n["default"])(component)

/* harmony default export */ var Projects = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VOverlay: VOverlay["a" /* default */],VProgressCircular: VProgressCircular_VProgressCircular})


/***/ })

};;
//# sourceMappingURL=index.js.map