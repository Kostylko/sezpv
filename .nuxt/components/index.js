export const Benefits = () => import('../../components/Benefits.vue' /* webpackChunkName: "components/benefits" */).then(c => wrapFunctional(c.default || c))
export const News = () => import('../../components/News.vue' /* webpackChunkName: "components/news" */).then(c => wrapFunctional(c.default || c))
export const Partners = () => import('../../components/Partners.vue' /* webpackChunkName: "components/partners" */).then(c => wrapFunctional(c.default || c))
export const Projects = () => import('../../components/Projects.vue' /* webpackChunkName: "components/projects" */).then(c => wrapFunctional(c.default || c))
export const Request = () => import('../../components/Request.vue' /* webpackChunkName: "components/request" */).then(c => wrapFunctional(c.default || c))
export const Statistics = () => import('../../components/Statistics.vue' /* webpackChunkName: "components/statistics" */).then(c => wrapFunctional(c.default || c))
export const ComplianceContent = () => import('../../components/complianceContent.vue' /* webpackChunkName: "components/compliance-content" */).then(c => wrapFunctional(c.default || c))
export const FaqContent = () => import('../../components/faqContent.vue' /* webpackChunkName: "components/faq-content" */).then(c => wrapFunctional(c.default || c))
export const SupplyContent = () => import('../../components/supplyContent.vue' /* webpackChunkName: "components/supply-content" */).then(c => wrapFunctional(c.default || c))
export const VacancyContent = () => import('../../components/vacancyContent.vue' /* webpackChunkName: "components/vacancy-content" */).then(c => wrapFunctional(c.default || c))
export const VueFooter = () => import('../../components/vueFooter.vue' /* webpackChunkName: "components/vue-footer" */).then(c => wrapFunctional(c.default || c))
export const VueHeader = () => import('../../components/vueHeader.vue' /* webpackChunkName: "components/vue-header" */).then(c => wrapFunctional(c.default || c))
export const BackgroundsAboutPage = () => import('../../components/backgrounds/AboutPage.vue' /* webpackChunkName: "components/backgrounds-about-page" */).then(c => wrapFunctional(c.default || c))
export const BackgroundsCompliance = () => import('../../components/backgrounds/Compliance.vue' /* webpackChunkName: "components/backgrounds-compliance" */).then(c => wrapFunctional(c.default || c))
export const BackgroundsContacts = () => import('../../components/backgrounds/Contacts.vue' /* webpackChunkName: "components/backgrounds-contacts" */).then(c => wrapFunctional(c.default || c))
export const BackgroundsFaq = () => import('../../components/backgrounds/Faq.vue' /* webpackChunkName: "components/backgrounds-faq" */).then(c => wrapFunctional(c.default || c))
export const BackgroundsInteractive = () => import('../../components/backgrounds/Interactive.vue' /* webpackChunkName: "components/backgrounds-interactive" */).then(c => wrapFunctional(c.default || c))
export const BackgroundsManagment = () => import('../../components/backgrounds/Managment.vue' /* webpackChunkName: "components/backgrounds-managment" */).then(c => wrapFunctional(c.default || c))
export const BackgroundsNews = () => import('../../components/backgrounds/News.vue' /* webpackChunkName: "components/backgrounds-news" */).then(c => wrapFunctional(c.default || c))
export const BackgroundsProject = () => import('../../components/backgrounds/Project.vue' /* webpackChunkName: "components/backgrounds-project" */).then(c => wrapFunctional(c.default || c))
export const BackgroundsSupply = () => import('../../components/backgrounds/Supply.vue' /* webpackChunkName: "components/backgrounds-supply" */).then(c => wrapFunctional(c.default || c))
export const BackgroundsVacancy = () => import('../../components/backgrounds/Vacancy.vue' /* webpackChunkName: "components/backgrounds-vacancy" */).then(c => wrapFunctional(c.default || c))
export const UiBreadCrumbs = () => import('../../components/ui/BreadCrumbs.vue' /* webpackChunkName: "components/ui-bread-crumbs" */).then(c => wrapFunctional(c.default || c))
export const UiInsideBreadCrumbs = () => import('../../components/ui/InsideBreadCrumbs.vue' /* webpackChunkName: "components/ui-inside-bread-crumbs" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
