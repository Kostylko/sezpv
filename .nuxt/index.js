import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_7d675e20 from 'nuxt_plugin_plugin_7d675e20' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_plugin_42e618fe from 'nuxt_plugin_plugin_42e618fe' // Source: ./vuetify/plugin.js (mode: 'all')
import nuxt_plugin_pluginutils_4dd9d6f5 from 'nuxt_plugin_pluginutils_4dd9d6f5' // Source: ./nuxt-i18n/plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_167f0a00 from 'nuxt_plugin_pluginrouting_167f0a00' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_1edb5f22 from 'nuxt_plugin_pluginmain_1edb5f22' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_vuescrollto_acf5a17a from 'nuxt_plugin_vuescrollto_acf5a17a' // Source: ./vue-scrollto.js (mode: 'client')
import nuxt_plugin_axios_89a737f4 from 'nuxt_plugin_axios_89a737f4' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_swiper_076f49ea from 'nuxt_plugin_swiper_076f49ea' // Source: ../plugins/swiper.js (mode: 'client')
import nuxt_plugin_vmask_3c04b27e from 'nuxt_plugin_vmask_3c04b27e' // Source: ../plugins/v-mask.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"СПЕЦИАЛЬНАЯ ЭКОНОМИЧЕСКАЯ ЗОНА “ПАВЛОДАР”","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""},{"name":"format-detection","content":"telephone=no"},{"name":"msapplication-TileColor","content":"#da532c"},{"name":"theme-color","content":"#ffffff"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"apple-touch-icon","sizes":"180x180","href":"\u002Fapple-touch-icon.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"32x32","href":"\u002Ffavicon-32x32.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"16x16","href":"\u002Ffavicon-16x16.png"},{"rel":"manifest","href":"\u002Fsite.webmanifest"},{"rel":"mask-icon","href":"\u002Fsafari-pinned-tab.svg","color":"#5bbad5"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"}],"noscript":[{"src":"https:\u002F\u002Fmc.yandex.ru\u002Fwatch\u002F87386425","style":"position: absolute; left: -9999px"}],"script":[{"async":true,"src":"https:\u002F\u002Fmc.yandex.ru\u002Fwatch\u002F87386425"},{"async":true,"src":"\u002F\u002Fcode-ya.jivosite.com\u002Fwidget\u002FQKjnGlmmT4"},{"type":"text\u002Fjavascript","innerHTML":"(function(m, e, t, r, i, k, a) {m[i] =m[i] ||function () {(m[i].a = m[i].a || []).push(arguments);};m[i].l = 1 * new Date();(k = e.createElement(t)),(a = e.getElementsByTagName(t)[0]),(k.async = 1),(k.src = r),a.parentNode.insertBefore(k, a);})(window,document,`script`,`https:\u002F\u002Fmc.yandex.ru\u002Fmetrika\u002Ftag.js`,`ym`);ym(87386425, `init`, {clickmap: true,trackLinks: true,accurateTrackBounce: true,webvisor: true,});"}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_7d675e20 === 'function') {
    await nuxt_plugin_plugin_7d675e20(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_42e618fe === 'function') {
    await nuxt_plugin_plugin_42e618fe(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_4dd9d6f5 === 'function') {
    await nuxt_plugin_pluginutils_4dd9d6f5(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_167f0a00 === 'function') {
    await nuxt_plugin_pluginrouting_167f0a00(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_1edb5f22 === 'function') {
    await nuxt_plugin_pluginmain_1edb5f22(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuescrollto_acf5a17a === 'function') {
    await nuxt_plugin_vuescrollto_acf5a17a(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_89a737f4 === 'function') {
    await nuxt_plugin_axios_89a737f4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_swiper_076f49ea === 'function') {
    await nuxt_plugin_swiper_076f49ea(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vmask_3c04b27e === 'function') {
    await nuxt_plugin_vmask_3c04b27e(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
