exports.ids = [19];
exports.modules = {

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/**
 * This mixin provides `attrs$` and `listeners$` to work around
 * vue bug https://github.com/vuejs/vue/issues/10115
 */

function makeWatcher(property) {
  return function (val, oldVal) {
    for (const attr in oldVal) {
      if (!Object.prototype.hasOwnProperty.call(val, attr)) {
        this.$delete(this.$data[property], attr);
      }
    }

    for (const attr in val) {
      this.$set(this.$data[property], attr, val[attr]);
    }
  };
}

/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  data: () => ({
    attrs$: {},
    listeners$: {}
  }),

  created() {
    // Work around unwanted re-renders: https://github.com/vuejs/vue/issues/10115
    // Make sure to use `attrs$` instead of `$attrs` (confusing right?)
    this.$watch('$attrs', makeWatcher('attrs$'), {
      immediate: true
    });
    this.$watch('$listeners', makeWatcher('listeners$'), {
      immediate: true
    });
  }

}));

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(220);


/* harmony default export */ __webpack_exports__["a"] = (_VIcon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

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

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VIcon_VIcon_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(236);
/* harmony import */ var _src_components_VIcon_VIcon_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VIcon_VIcon_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(216);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _mixins_sizeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(224);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
 // Mixins




 // Util

 // Types



var SIZE_MAP;

(function (SIZE_MAP) {
  SIZE_MAP["xSmall"] = "12px";
  SIZE_MAP["small"] = "16px";
  SIZE_MAP["default"] = "24px";
  SIZE_MAP["medium"] = "28px";
  SIZE_MAP["large"] = "36px";
  SIZE_MAP["xLarge"] = "40px";
})(SIZE_MAP || (SIZE_MAP = {}));

function isFontAwesome5(iconType) {
  return ['fas', 'far', 'fal', 'fab', 'fad', 'fak'].some(val => iconType.includes(val));
}

function isSvgPath(icon) {
  return /^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(icon) && /[\dz]$/i.test(icon) && icon.length > 4;
}

const VIcon = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_sizeable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]
/* @vue/component */
).extend({
  name: 'v-icon',
  props: {
    dense: Boolean,
    disabled: Boolean,
    left: Boolean,
    right: Boolean,
    size: [Number, String],
    tag: {
      type: String,
      required: false,
      default: 'i'
    }
  },
  computed: {
    medium() {
      return false;
    },

    hasClickListener() {
      return Boolean(this.listeners$.click || this.listeners$['!click']);
    }

  },
  methods: {
    getIcon() {
      let iconName = '';
      if (this.$slots.default) iconName = this.$slots.default[0].text.trim();
      return Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__[/* remapInternalIcon */ "w"])(this, iconName);
    },

    getSize() {
      const sizes = {
        xSmall: this.xSmall,
        small: this.small,
        medium: this.medium,
        large: this.large,
        xLarge: this.xLarge
      };
      const explicitSize = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__[/* keys */ "t"])(sizes).find(key => sizes[key]);
      return explicitSize && SIZE_MAP[explicitSize] || Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__[/* convertToUnit */ "g"])(this.size);
    },

    // Component data for both font icon and SVG wrapper span
    getDefaultData() {
      return {
        staticClass: 'v-icon notranslate',
        class: {
          'v-icon--disabled': this.disabled,
          'v-icon--left': this.left,
          'v-icon--link': this.hasClickListener,
          'v-icon--right': this.right,
          'v-icon--dense': this.dense
        },
        attrs: {
          'aria-hidden': !this.hasClickListener,
          disabled: this.hasClickListener && this.disabled,
          type: this.hasClickListener ? 'button' : undefined,
          ...this.attrs$
        },
        on: this.listeners$
      };
    },

    getSvgWrapperData() {
      const fontSize = this.getSize();
      const wrapperData = { ...this.getDefaultData(),
        style: fontSize ? {
          fontSize,
          height: fontSize,
          width: fontSize
        } : undefined
      };
      this.applyColors(wrapperData);
      return wrapperData;
    },

    applyColors(data) {
      data.class = { ...data.class,
        ...this.themeClasses
      };
      this.setTextColor(this.color, data);
    },

    renderFontIcon(icon, h) {
      const newChildren = [];
      const data = this.getDefaultData();
      let iconType = 'material-icons'; // Material Icon delimiter is _
      // https://material.io/icons/

      const delimiterIndex = icon.indexOf('-');
      const isMaterialIcon = delimiterIndex <= -1;

      if (isMaterialIcon) {
        // Material icon uses ligatures.
        newChildren.push(icon);
      } else {
        iconType = icon.slice(0, delimiterIndex);
        if (isFontAwesome5(iconType)) iconType = '';
      }

      data.class[iconType] = true;
      data.class[icon] = !isMaterialIcon;
      const fontSize = this.getSize();
      if (fontSize) data.style = {
        fontSize
      };
      this.applyColors(data);
      return h(this.hasClickListener ? 'button' : this.tag, data, newChildren);
    },

    renderSvgIcon(icon, h) {
      const svgData = {
        class: 'v-icon__svg',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 24 24',
          role: 'img',
          'aria-hidden': true
        }
      };
      const size = this.getSize();

      if (size) {
        svgData.style = {
          fontSize: size,
          height: size,
          width: size
        };
      }

      return h(this.hasClickListener ? 'button' : 'span', this.getSvgWrapperData(), [h('svg', svgData, [h('path', {
        attrs: {
          d: icon
        }
      })])]);
    },

    renderSvgIconComponent(icon, h) {
      const data = {
        class: {
          'v-icon__component': true
        }
      };
      const size = this.getSize();

      if (size) {
        data.style = {
          fontSize: size,
          height: size,
          width: size
        };
      }

      this.applyColors(data);
      const component = icon.component;
      data.props = icon.props;
      data.nativeOn = data.on;
      return h(this.hasClickListener ? 'button' : 'span', this.getSvgWrapperData(), [h(component, data)]);
    }

  },

  render(h) {
    const icon = this.getIcon();

    if (typeof icon === 'string') {
      if (isSvgPath(icon)) {
        return this.renderSvgIcon(icon, h);
      }

      return this.renderFontIcon(icon, h);
    }

    return this.renderSvgIconComponent(icon, h);
  }

});
/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_6___default.a.extend({
  name: 'v-icon',
  $_wrapperFor: VIcon,
  functional: true,

  render(h, {
    data,
    children
  }) {
    let iconName = ''; // Support usage of v-text and v-html

    if (data.domProps) {
      iconName = data.domProps.textContent || data.domProps.innerHTML || iconName; // Remove nodes so it doesn't
      // overwrite our changes

      delete data.domProps.textContent;
      delete data.domProps.innerHTML;
    }

    return h(VIcon, data, iconName ? [iconName] : children);
  }

}));

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'sizeable',
  props: {
    large: Boolean,
    small: Boolean,
    xLarge: Boolean,
    xSmall: Boolean
  },
  computed: {
    medium() {
      return Boolean(!this.xSmall && !this.small && !this.large && !this.xLarge);
    },

    sizeableClasses() {
      return {
        'v-size--x-small': this.xSmall,
        'v-size--small': this.small,
        'v-size--default': this.medium,
        'v-size--large': this.large,
        'v-size--x-large': this.xLarge
      };
    }

  }
}));

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Resize */
function inserted(el, binding, vnode) {
  const callback = binding.value;
  const options = binding.options || {
    passive: true
  };
  window.addEventListener('resize', callback, options);
  el._onResize = Object(el._onResize);
  el._onResize[vnode.context._uid] = {
    callback,
    options
  };

  if (!binding.modifiers || !binding.modifiers.quiet) {
    callback();
  }
}

function unbind(el, binding, vnode) {
  var _el$_onResize;

  if (!((_el$_onResize = el._onResize) != null && _el$_onResize[vnode.context._uid])) return;
  const {
    callback,
    options
  } = el._onResize[vnode.context._uid];
  window.removeEventListener('resize', callback, options);
  delete el._onResize[vnode.context._uid];
}

const Resize = {
  inserted,
  unbind
};
/* harmony default export */ __webpack_exports__["a"] = (Resize);

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(237);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("6b715e77", content, true)

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon:focus:after{opacity:.12}.theme--light.v-icon.v-icon.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon:focus:after{opacity:.24}.theme--dark.v-icon.v-icon.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon.v-icon{align-items:center;display:inline-flex;font-feature-settings:\"liga\";font-size:24px;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-icon.v-icon:after{background-color:currentColor;border-radius:50%;content:\"\";display:inline-block;height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transform:scale(1.3);width:100%;transition:opacity .2s cubic-bezier(.4,0,.6,1)}.v-icon.v-icon--dense{font-size:20px}.v-icon--right{margin-left:8px}.v-icon--left{margin-right:8px}.v-icon.v-icon.v-icon--link{cursor:pointer;outline:none}.v-icon--disabled{pointer-events:none}.v-icon--dense .v-icon__component,.v-icon--dense .v-icon__svg{height:20px}.v-icon__component,.v-icon__svg{height:24px;width:24px}.v-icon__svg{fill:currentColor}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return intersectable; });
/* harmony import */ var _directives_intersect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(219);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);
// Directives
 // Utilities

 // Types


function intersectable(options) {
  return vue__WEBPACK_IMPORTED_MODULE_2___default.a.extend({
    name: 'intersectable',
    data: () => ({
      isIntersecting: false
    }),

    mounted() {
      _directives_intersect__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].inserted(this.$el, {
        name: 'intersect',
        value: this.onObserve
      }, this.$vnode);
    },

    destroyed() {
      _directives_intersect__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].unbind(this.$el, {
        name: 'intersect',
        value: this.onObserve
      }, this.$vnode);
    },

    methods: {
      onObserve(entries, observer, isIntersecting) {
        this.isIntersecting = isIntersecting;
        if (!isIntersecting) return;

        for (let i = 0, length = options.onVisible.length; i < length; i++) {
          const callback = this[options.onVisible[i]];

          if (typeof callback === 'function') {
            callback();
            continue;
          }

          Object(_util_console__WEBPACK_IMPORTED_MODULE_1__[/* consoleWarn */ "c"])(options.onVisible[i] + ' method is not available on the instance but referenced in intersectable mixin options');
        }
      }

    }
  });
}

/***/ }),

/***/ 329:
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"more":"Read more"},"kz":{"more":"Толығырақ"},"ru":{"more":"Читать больше"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(385);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("b8753d7c", content, true, context)
};

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_76a6f532_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(350);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_76a6f532_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_76a6f532_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_76a6f532_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_76a6f532_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".News[data-v-76a6f532]{max-width:1400px;width:100%;margin:0 auto;padding:80px 0 120px;display:flex;flex-direction:column;align-items:center}.News h2[data-v-76a6f532]{font-size:36px;line-height:50px;text-align:center;text-transform:uppercase;color:#224f9e}.News--table[data-v-76a6f532]{display:grid;grid-template-columns:repeat(auto-fit,305px);grid-gap:58px 20px;width:100%}.News--table--items[data-v-76a6f532]{display:flex;flex-direction:column;align-items:flex-start;border-radius:10px;cursor:pointer;width:100%;max-width:100%}.News--table--items img[data-v-76a6f532]{min-height:305px;width:305px!important;height:305px!important;-o-object-fit:cover;object-fit:cover;border-radius:10px}.News--table--items p[data-v-76a6f532]:first-of-type{font-style:normal;font-weight:400;font-size:14px;line-height:16px;color:#b5bac1;margin:10px 0 19px}.News--table--items p[data-v-76a6f532]:nth-of-type(2){font-weight:700;font-size:18px;line-height:22px;color:#224f9e;-webkit-line-clamp:4}.News--table--items .test_div[data-v-76a6f532],.News--table--items p[data-v-76a6f532]:nth-of-type(2){font-style:normal;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.News--table--items .test_div[data-v-76a6f532]{font-weight:400;font-size:14px;line-height:16px;color:#233659;margin:14px 0 36px;-webkit-line-clamp:3;max-height:48px}.News--table--items .test_div p[data-v-76a6f532]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}.News--table--items div[data-v-76a6f532]{display:flex;align-items:center}.News--table--items div a[data-v-76a6f532]{font-family:\"OpenSans-Medium\";font-style:normal;font-weight:700;font-size:18px;line-height:22px;color:#b53a57;cursor:pointer;margin-right:16px}.News .pagination--items[data-v-76a6f532]{display:flex;justify-content:center;align-items:center;margin-top:60px}.News .pagination--items .pagination[data-v-76a6f532]{margin:0 35px}.News .pagination--items svg[data-v-76a6f532]{cursor:pointer;fill:#b53a57}.News .pagination--items .previous-button[data-v-76a6f532]{transform:rotate(180deg)}.News .red-btn[data-v-76a6f532]{background:#b53a57;box-shadow:0 4px 20px rgba(181,58,87,.15);border-radius:6px;padding:15px 0;width:260px;height:50px;font-family:\"OpenSans-Medium\";font-style:normal;font-weight:700;font-size:18px;line-height:22px;text-align:center;color:#fcfcfc}.disabled path[data-v-76a6f532]{fill:#b5bac1!important}.disabled-btn[data-v-76a6f532]{transform:rotate(180deg)}.disabled-btn path[data-v-76a6f532]{fill:#b5bac1!important}@media screen and (max-width:1440px){.News[data-v-76a6f532]{max-width:1280px}}@media screen and (max-width:1264px){.News[data-v-76a6f532]{padding:40px 16px}.News--table[data-v-76a6f532]{justify-content:center}.News--table--items img[data-v-76a6f532]{max-width:343px;width:100%;height:auto}}@media screen and (max-width:600px){.News--table[data-v-76a6f532]{grid-gap:40px 0}.News--table--items p[data-v-76a6f532]:first-of-type{margin:10px 0}.News--table--items p[data-v-76a6f532]:nth-of-type(2){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}.News--table--items p[data-v-76a6f532]:nth-of-type(3){margin:8px 0 20px}.News .pagination--items svg[data-v-76a6f532]{width:24px;height:24px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(329);
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(388);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("7f6d4ad6", content, true)

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-pagination .v-pagination__item{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--dark.v-pagination .v-pagination__item{background:#1e1e1e;color:#fff}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#1e1e1e}.v-pagination{align-items:center;display:inline-flex;list-style-type:none;justify-content:center;margin:0;max-width:100%;width:100%}.v-pagination.v-pagination{padding-left:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{pointer-events:none;opacity:.6}.v-pagination__item{background:transparent;border-radius:4px;font-size:1rem;height:34px;margin:.3rem;min-width:34px;padding:0 5px;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1);width:auto;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:4px;display:inline-flex;justify-content:center;align-items:center;text-decoration:none;height:32px;width:32px;margin:.3rem 10px}.v-pagination__navigation .v-icon{transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{margin:.3rem;display:inline-flex;align-items:flex-end;justify-content:center;height:32px;width:32px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/News/index.vue?vue&type=template&id=76a6f532&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg"},[_vm._ssrNode("<div class=\"News\" data-v-76a6f532>","</div>",[_vm._ssrNode("<div class=\"News--table\" data-v-76a6f532>"+(_vm._ssrList((_vm.data),function(item,idx){return ("<div class=\"News--table--items\" data-v-76a6f532><a data-v-76a6f532><img"+(_vm._ssrAttr("src",item.images.length ? item.images[0].url : _vm.defaultImage))+" class=\"photo\" data-v-76a6f532> <p data-v-76a6f532>"+_vm._ssrEscape(_vm._s(item.created_at))+"</p> <p data-v-76a6f532>"+_vm._ssrEscape("\n            "+_vm._s(item.title)+"\n          ")+"</p> <p class=\"test_div\" data-v-76a6f532>"+(_vm._s(item.content))+"</p></a> <div data-v-76a6f532><a data-v-76a6f532>"+_vm._ssrEscape(_vm._s(_vm.$t("more")))+"</a> <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-76a6f532><g clip-path=\"url(#clip0_1022_1025)\" data-v-76a6f532><path d=\"M15.8167 7.55771C15.8165 7.55752 15.8163 7.5573 15.8161 7.55711L12.5504 4.30712C12.3057 4.06365 11.91 4.06456 11.6665 4.30924C11.423 4.5539 11.4239 4.94962 11.6686 5.19312L13.8612 7.37511H0.625C0.279813 7.37511 0 7.65493 0 8.00011C0 8.3453 0.279813 8.62511 0.625 8.62511H13.8612L11.6686 10.8071C11.4239 11.0506 11.423 11.4463 11.6665 11.691C11.91 11.9357 12.3058 11.9365 12.5504 11.6931L15.8162 8.44311C15.8163 8.44292 15.8165 8.44271 15.8167 8.44252C16.0615 8.19821 16.0607 7.80121 15.8167 7.55771Z\" fill=\"#B53A57\" data-v-76a6f532></path></g> <defs data-v-76a6f532><clipPath id=\"clip0_1022_1025\" data-v-76a6f532><rect width=\"16\" height=\"16\" fill=\"white\" data-v-76a6f532></rect></clipPath></defs></svg></div></div>")}))+"</div> "),_vm._ssrNode("<div class=\"pagination--items\" data-v-76a6f532>","</div>",[_vm._ssrNode(((_vm.page != 1)?("<svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\""+(_vm._ssrClass("previous-button",{ disabled: _vm.page == 1 }))+" data-v-76a6f532><path d=\"M9.96209 24.4129C9.62925 24.0801 9.599 23.5592 9.87131 23.1922L9.96209 23.0871L18.0487 15L9.96209 6.9129C9.62925 6.58007 9.599 6.05924 9.87131 5.69223L9.96209 5.58708C10.2949 5.25425 10.8158 5.22399 11.1828 5.49631L11.2879 5.58708L20.0379 14.3371C20.3707 14.6699 20.401 15.1907 20.1287 15.5578L20.0379 15.6629L11.2879 24.4129C10.9218 24.779 10.3282 24.779 9.96209 24.4129Z\" fill=\"#B53A57\" data-v-76a6f532></path></svg>"):("<svg disabled=\"disabled\" width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"disabled-btn\" data-v-76a6f532><path d=\"M9.96209 24.4129C9.62925 24.0801 9.599 23.5592 9.87131 23.1922L9.96209 23.0871L18.0487 15L9.96209 6.9129C9.62925 6.58007 9.599 6.05924 9.87131 5.69223L9.96209 5.58708C10.2949 5.25425 10.8158 5.22399 11.1828 5.49631L11.2879 5.58708L20.0379 14.3371C20.3707 14.6699 20.401 15.1907 20.1287 15.5578L20.0379 15.6629L11.2879 24.4129C10.9218 24.779 10.3282 24.779 9.96209 24.4129Z\" fill=\"#B53A57\" data-v-76a6f532></path></svg>"))+" "),_c('v-pagination',{staticClass:"pagination",attrs:{"total-visible":7,"length":_vm.last_page},on:{"input":_vm.getterNews},model:{value:(_vm.page),callback:function ($$v) {_vm.page=$$v},expression:"page"}}),_vm._ssrNode(" "+((_vm.page != _vm.last_page)?("<svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\""+(_vm._ssrClass("next-button",{ disabled: _vm.page == _vm.last_page }))+" data-v-76a6f532><path d=\"M9.96209 24.4129C9.62925 24.0801 9.599 23.5592 9.87131 23.1922L9.96209 23.0871L18.0487 15L9.96209 6.9129C9.62925 6.58007 9.599 6.05924 9.87131 5.69223L9.96209 5.58708C10.2949 5.25425 10.8158 5.22399 11.1828 5.49631L11.2879 5.58708L20.0379 14.3371C20.3707 14.6699 20.401 15.1907 20.1287 15.5578L20.0379 15.6629L11.2879 24.4129C10.9218 24.779 10.3282 24.779 9.96209 24.4129Z\" fill=\"#B53A57\" data-v-76a6f532></path></svg>"):("<svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\""+(_vm._ssrClass("next-button",{ disabled: _vm.page == _vm.last_page }))+" data-v-76a6f532><path d=\"M9.96209 24.4129C9.62925 24.0801 9.599 23.5592 9.87131 23.1922L9.96209 23.0871L18.0487 15L9.96209 6.9129C9.62925 6.58007 9.599 6.05924 9.87131 5.69223L9.96209 5.58708C10.2949 5.25425 10.8158 5.22399 11.1828 5.49631L11.2879 5.58708L20.0379 14.3371C20.3707 14.6699 20.401 15.1907 20.1287 15.5578L20.0379 15.6629L11.2879 24.4129C10.9218 24.779 10.3282 24.779 9.96209 24.4129Z\" fill=\"#B53A57\" data-v-76a6f532></path></svg>")))],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/News/index.vue?vue&type=template&id=76a6f532&scoped=true&

// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__(20);
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/News/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ var Newsvue_type_script_lang_js_ = ({
  async asyncData({
    $axios,
    i18n
  }) {
    let page = 1;
    let pagination = 8;
    let params = {
      page,
      pagination
    };
    params.lang = i18n.locale == "en" ? "en" : i18n.locale;
    const {
      data,
      meta
    } = (await $axios.get(`news`, {
      params
    })).data;
    const {
      last_page
    } = meta;
    return {
      data,
      page,
      pagination,
      last_page
    };
  },

  data: () => ({
    defaultImage: __webpack_require__(112),
    attrs: {
      class: "mb-6",
      boilerplate: true,
      elevation: 2
    }
  }),
  methods: {
    goToInner(id) {
      this.$router.push(this.localePath({
        path: `/News/${id}`,
        query: {
          id: id
        }
      }));
    },

    nextPage() {
      this.page++;
      this.getterNews();
    },

    prevPage() {
      this.page--;
      this.getterNews();
    },

    async getterNews() {
      let params = {
        page: this.page,
        pagination: this.pagination
      };
      await this.$axios.get(`news`, {
        params
      }).then(res => {
        this.data = res.data.data;
      }).catch(e => {
        console.log(e);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/News/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Newsvue_type_script_lang_js_ = (Newsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// EXTERNAL MODULE: ./pages/News/index.vue?vue&type=custom&index=0&blockType=i18n
var Newsvue_type_custom_index_0_blockType_i18n = __webpack_require__(386);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(12);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VPagination/VPagination.sass
var VPagination = __webpack_require__(387);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(217);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/resize/index.js
var resize = __webpack_require__(225);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/intersectable/index.js
var intersectable = __webpack_require__(238);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VPagination/VPagination.js

 // Directives

 // Mixins



 // Utilities


/* @vue/component */

/* harmony default export */ var VPagination_VPagination = (Object(mixins["a" /* default */])(colorable["a" /* default */], Object(intersectable["a" /* default */])({
  onVisible: ['init']
}), themeable["a" /* default */]).extend({
  name: 'v-pagination',
  directives: {
    Resize: resize["a" /* default */]
  },
  props: {
    circle: Boolean,
    disabled: Boolean,
    length: {
      type: Number,
      default: 0,
      validator: val => val % 1 === 0
    },
    nextIcon: {
      type: String,
      default: '$next'
    },
    prevIcon: {
      type: String,
      default: '$prev'
    },
    totalVisible: [Number, String],
    value: {
      type: Number,
      default: 0
    },
    pageAriaLabel: {
      type: String,
      default: '$vuetify.pagination.ariaLabel.page'
    },
    currentPageAriaLabel: {
      type: String,
      default: '$vuetify.pagination.ariaLabel.currentPage'
    },
    previousAriaLabel: {
      type: String,
      default: '$vuetify.pagination.ariaLabel.previous'
    },
    nextAriaLabel: {
      type: String,
      default: '$vuetify.pagination.ariaLabel.next'
    },
    wrapperAriaLabel: {
      type: String,
      default: '$vuetify.pagination.ariaLabel.wrapper'
    }
  },

  data() {
    return {
      maxButtons: 0,
      selected: null
    };
  },

  computed: {
    classes() {
      return {
        'v-pagination': true,
        'v-pagination--circle': this.circle,
        'v-pagination--disabled': this.disabled,
        ...this.themeClasses
      };
    },

    items() {
      const totalVisible = parseInt(this.totalVisible, 10);

      if (totalVisible === 0) {
        return [];
      }

      const maxLength = Math.min(Math.max(0, totalVisible) || this.length, Math.max(0, this.maxButtons) || this.length, this.length);

      if (this.length <= maxLength) {
        return this.range(1, this.length);
      }

      const even = maxLength % 2 === 0 ? 1 : 0;
      const left = Math.floor(maxLength / 2);
      const right = this.length - left + 1 + even;

      if (this.value > left && this.value < right) {
        const firstItem = 1;
        const lastItem = this.length;
        const start = this.value - left + 2;
        const end = this.value + left - 2 - even;
        const secondItem = start - 1 === firstItem + 1 ? 2 : '...';
        const beforeLastItem = end + 1 === lastItem - 1 ? end + 1 : '...';
        return [1, secondItem, ...this.range(start, end), beforeLastItem, this.length];
      } else if (this.value === left) {
        const end = this.value + left - 1 - even;
        return [...this.range(1, end), '...', this.length];
      } else if (this.value === right) {
        const start = this.value - left + 1;
        return [1, '...', ...this.range(start, this.length)];
      } else {
        return [...this.range(1, left), '...', ...this.range(right, this.length)];
      }
    }

  },
  watch: {
    value() {
      this.init();
    }

  },

  beforeMount() {
    this.init();
  },

  methods: {
    init() {
      this.selected = null;
      this.onResize();
      this.$nextTick(this.onResize); // TODO: Change this (f75dee3a, cbdf7caa)

      setTimeout(() => this.selected = this.value, 100);
    },

    onResize() {
      const width = this.$el && this.$el.parentElement ? this.$el.parentElement.clientWidth : window.innerWidth;
      this.maxButtons = Math.floor((width - 96) / 42);
    },

    next(e) {
      e.preventDefault();
      this.$emit('input', this.value + 1);
      this.$emit('next');
    },

    previous(e) {
      e.preventDefault();
      this.$emit('input', this.value - 1);
      this.$emit('previous');
    },

    range(from, to) {
      const range = [];
      from = from > 0 ? from : 1;

      for (let i = from; i <= to; i++) {
        range.push(i);
      }

      return range;
    },

    genIcon(h, icon, disabled, fn, label) {
      return h('li', [h('button', {
        staticClass: 'v-pagination__navigation',
        class: {
          'v-pagination__navigation--disabled': disabled
        },
        attrs: {
          disabled,
          type: 'button',
          'aria-label': label
        },
        on: disabled ? {} : {
          click: fn
        }
      }, [h(VIcon["a" /* default */], [icon])])]);
    },

    genItem(h, i) {
      const color = i === this.value && (this.color || 'primary');
      const isCurrentPage = i === this.value;
      const ariaLabel = isCurrentPage ? this.currentPageAriaLabel : this.pageAriaLabel;
      return h('button', this.setBackgroundColor(color, {
        staticClass: 'v-pagination__item',
        class: {
          'v-pagination__item--active': i === this.value
        },
        attrs: {
          type: 'button',
          'aria-current': isCurrentPage,
          'aria-label': this.$vuetify.lang.t(ariaLabel, i)
        },
        on: {
          click: () => this.$emit('input', i)
        }
      }), [i.toString()]);
    },

    genItems(h) {
      return this.items.map((i, index) => {
        return h('li', {
          key: index
        }, [isNaN(Number(i)) ? h('span', {
          class: 'v-pagination__more'
        }, [i.toString()]) : this.genItem(h, i)]);
      });
    },

    genList(h, children) {
      return h('ul', {
        directives: [{
          modifiers: {
            quiet: true
          },
          name: 'resize',
          value: this.onResize
        }],
        class: this.classes
      }, children);
    }

  },

  render(h) {
    const children = [this.genIcon(h, this.$vuetify.rtl ? this.nextIcon : this.prevIcon, this.value <= 1, this.previous, this.$vuetify.lang.t(this.previousAriaLabel)), this.genItems(h), this.genIcon(h, this.$vuetify.rtl ? this.prevIcon : this.nextIcon, this.value >= this.length, this.next, this.$vuetify.lang.t(this.nextAriaLabel))];
    return h('nav', {
      attrs: {
        role: 'navigation',
        'aria-label': this.$vuetify.lang.t(this.wrapperAriaLabel)
      }
    }, [this.genList(h, children)]);
  }

}));
// CONCATENATED MODULE: ./pages/News/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(384)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Newsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "76a6f532",
  "a4653b62"
  
)

/* custom blocks */

if (typeof Newsvue_type_custom_index_0_blockType_i18n["default"] === 'function') Object(Newsvue_type_custom_index_0_blockType_i18n["default"])(component)

/* harmony default export */ var News = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VPagination: VPagination_VPagination})


/***/ })

};;
//# sourceMappingURL=index.js.map