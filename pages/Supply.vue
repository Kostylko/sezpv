<template>
  <div class="bg">
    <div class="Faq">
      <supplyContent
        v-for="(item, idx) in data"
        :key="idx"
        class="Faq-content"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import supplyContent from "@/components/supplyContent";
export default {
  async asyncData({ $axios, i18n, params }) {
    params.lang = i18n.locale == "en" ? "en" : i18n.locale;
    const { data } = (await $axios.get(`supply`, { params })).data;

    return { data };
  },
  components: {
    supplyContent,
  },
};
</script>

<style lang="scss" scoped>
.Faq {
  padding: 60px 0 120px;

  max-width: 1280px;
  width: 100%;

  margin: 0 auto;

  .Faq-content {
    margin-bottom: 20px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
@media screen and (max-width: 1264px) {
  .Faq {
    padding: 40px 16px 80px;
  }
}
</style>