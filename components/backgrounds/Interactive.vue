<template>
  <div
    class="interactive_bg"
    v-if="ready"
    :style="{
      backgroundImage: `url(${text.image ? text.image : ''})`,
    }"
  >
    <h1>{{ $t("scheme") }}</h1>
    <div class="line"></div>
  </div>
</template>


<i18n>
    {
        "en": {
            "scheme": "INTERACTIVE DIAGRAM"
        },
        "kz": {
            "scheme": "ИНТЕРАКТИВТІ СХЕМА"
        },
        "ru": {
            "scheme": "Интерактивная схема"
        }
    }
</i18n>

<script>
export default {
  data: () => ({
    text: null,
    ready: false,
  }),
  created() {
    this.interactiveBg();
  },
  methods: {
    async interactiveBg() {
      this.ready = false;
      const { data } = (await this.$axios.get(`parts`)).data;
      this.text = data.backgrounds.find(
        (el) => el.key == "interactive-diagram"
      );
      this.ready = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.interactive_bg {
  background-position: 100% 100%;
  background-repeat: no-repeat;
  opacity: 1;
  background-size: cover;

  height: 350px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 182px;

  h1 {
    font-family: "OpenSans-Bold" !important;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    line-height: 73px;
    text-transform: uppercase;
    color: #224f9e;
    text-align: center;
    margin-bottom: 0 !important;

    width: 100%;
    z-index: 5;
  }
}
@media screen and (max-width: 960px) {
  .interactive_bg {
    h1 {
      font-size: 40px;
      line-height: 48px;
    }
  }
}
</style>