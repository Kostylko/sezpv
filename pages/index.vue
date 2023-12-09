<template>
  <div>
    <Benefits id="Benefits" :benefits="benefits" />
    <Statistics :statistics="statistics" />
    <Projects :projects="projects" />
    <News :news="news" />
    <Partners />
    <Request />
  </div>
</template>

<script>
import Benefits from "@/components/Benefits";
import Partners from "@/components/Partners";
import News from "@/components/News";
import Request from "@/components/Request";
import Projects from "@/components/Projects";
import Statistics from "@/components/Statistics";
export default {
  async asyncData({ $axios, params, i18n }) {
    params.lang = i18n.locale == "en" ? "en" : i18n.locale;
    const { data } = (await $axios.get(`home`, { params })).data;
    const news = (await $axios.get(`news`, { params })).data.data;
    let benefits = data.benefits;
    let projects = data.projects;
    let statistics = data.statistics;
    return { data, benefits, news, projects, params, statistics };
  },
  components: {
    Benefits,
    News,
    Request,
    Statistics,
    Projects,
    Partners,
  },
  data: () => ({
    currentPage: 1,
  }),
};
</script>

<style lang="scss" scoped>
</style>
