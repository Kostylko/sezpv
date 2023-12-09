import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _078e1c9a = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _56b96836 = () => interopDefault(import('../pages/Compliance.vue' /* webpackChunkName: "pages/Compliance" */))
const _911fb6c6 = () => interopDefault(import('../pages/Contacts.vue' /* webpackChunkName: "pages/Contacts" */))
const _b702a6d0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _6113983c = () => interopDefault(import('../pages/Faq.vue' /* webpackChunkName: "pages/Faq" */))
const _99f1934a = () => interopDefault(import('../pages/InteractiveDiagram.vue' /* webpackChunkName: "pages/InteractiveDiagram" */))
const _6d565af2 = () => interopDefault(import('../pages/Managment/index.vue' /* webpackChunkName: "pages/Managment/index" */))
const _4811b4e0 = () => interopDefault(import('../pages/News/index.vue' /* webpackChunkName: "pages/News/index" */))
const _1ca0f4c7 = () => interopDefault(import('../pages/Projects/index.vue' /* webpackChunkName: "pages/Projects/index" */))
const _0edee3b9 = () => interopDefault(import('../pages/Supply.vue' /* webpackChunkName: "pages/Supply" */))
const _20859821 = () => interopDefault(import('../pages/Vacancy.vue' /* webpackChunkName: "pages/Vacancy" */))
const _c8f488be = () => interopDefault(import('../pages/Video.vue' /* webpackChunkName: "pages/Video" */))
const _d1986aa2 = () => interopDefault(import('../pages/Managment/_id.vue' /* webpackChunkName: "pages/Managment/_id" */))
const _0c476f48 = () => interopDefault(import('../pages/News/_id.vue' /* webpackChunkName: "pages/News/_id" */))
const _47a37cef = () => interopDefault(import('../pages/Projects/_id.vue' /* webpackChunkName: "pages/Projects/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _078e1c9a,
    name: "About___ru"
  }, {
    path: "/Compliance",
    component: _56b96836,
    name: "Compliance___ru"
  }, {
    path: "/Contacts",
    component: _911fb6c6,
    name: "Contacts___ru"
  }, {
    path: "/en",
    component: _b702a6d0,
    name: "index___en"
  }, {
    path: "/Faq",
    component: _6113983c,
    name: "Faq___ru"
  }, {
    path: "/InteractiveDiagram",
    component: _99f1934a,
    name: "InteractiveDiagram___ru"
  }, {
    path: "/kz",
    component: _b702a6d0,
    name: "index___kz"
  }, {
    path: "/Managment",
    component: _6d565af2,
    name: "Managment___ru"
  }, {
    path: "/News",
    component: _4811b4e0,
    name: "News___ru"
  }, {
    path: "/Projects",
    component: _1ca0f4c7,
    name: "Projects___ru"
  }, {
    path: "/Supply",
    component: _0edee3b9,
    name: "Supply___ru"
  }, {
    path: "/Vacancy",
    component: _20859821,
    name: "Vacancy___ru"
  }, {
    path: "/Video",
    component: _c8f488be,
    name: "Video___ru"
  }, {
    path: "/en/About",
    component: _078e1c9a,
    name: "About___en"
  }, {
    path: "/en/Compliance",
    component: _56b96836,
    name: "Compliance___en"
  }, {
    path: "/en/Contacts",
    component: _911fb6c6,
    name: "Contacts___en"
  }, {
    path: "/en/Faq",
    component: _6113983c,
    name: "Faq___en"
  }, {
    path: "/en/InteractiveDiagram",
    component: _99f1934a,
    name: "InteractiveDiagram___en"
  }, {
    path: "/en/Managment",
    component: _6d565af2,
    name: "Managment___en"
  }, {
    path: "/en/News",
    component: _4811b4e0,
    name: "News___en"
  }, {
    path: "/en/Projects",
    component: _1ca0f4c7,
    name: "Projects___en"
  }, {
    path: "/en/Supply",
    component: _0edee3b9,
    name: "Supply___en"
  }, {
    path: "/en/Vacancy",
    component: _20859821,
    name: "Vacancy___en"
  }, {
    path: "/en/Video",
    component: _c8f488be,
    name: "Video___en"
  }, {
    path: "/kz/About",
    component: _078e1c9a,
    name: "About___kz"
  }, {
    path: "/kz/Compliance",
    component: _56b96836,
    name: "Compliance___kz"
  }, {
    path: "/kz/Contacts",
    component: _911fb6c6,
    name: "Contacts___kz"
  }, {
    path: "/kz/Faq",
    component: _6113983c,
    name: "Faq___kz"
  }, {
    path: "/kz/InteractiveDiagram",
    component: _99f1934a,
    name: "InteractiveDiagram___kz"
  }, {
    path: "/kz/Managment",
    component: _6d565af2,
    name: "Managment___kz"
  }, {
    path: "/kz/News",
    component: _4811b4e0,
    name: "News___kz"
  }, {
    path: "/kz/Projects",
    component: _1ca0f4c7,
    name: "Projects___kz"
  }, {
    path: "/kz/Supply",
    component: _0edee3b9,
    name: "Supply___kz"
  }, {
    path: "/kz/Vacancy",
    component: _20859821,
    name: "Vacancy___kz"
  }, {
    path: "/kz/Video",
    component: _c8f488be,
    name: "Video___kz"
  }, {
    path: "/en/Managment/:id",
    component: _d1986aa2,
    name: "Managment-id___en"
  }, {
    path: "/en/News/:id",
    component: _0c476f48,
    name: "News-id___en"
  }, {
    path: "/en/Projects/:id",
    component: _47a37cef,
    name: "Projects-id___en"
  }, {
    path: "/kz/Managment/:id",
    component: _d1986aa2,
    name: "Managment-id___kz"
  }, {
    path: "/kz/News/:id",
    component: _0c476f48,
    name: "News-id___kz"
  }, {
    path: "/kz/Projects/:id",
    component: _47a37cef,
    name: "Projects-id___kz"
  }, {
    path: "/Managment/:id",
    component: _d1986aa2,
    name: "Managment-id___ru"
  }, {
    path: "/News/:id",
    component: _0c476f48,
    name: "News-id___ru"
  }, {
    path: "/Projects/:id",
    component: _47a37cef,
    name: "Projects-id___ru"
  }, {
    path: "/",
    component: _b702a6d0,
    name: "index___ru"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
