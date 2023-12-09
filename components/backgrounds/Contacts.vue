<template>
  <div
    class="contacts_bg"
    v-if="ready"
    :style="{
      backgroundImage: `url(${text.image ? text.image : ''})`,
    }"
  >
    <h1>{{ $t("contacts") }}</h1>
    <div class="line"></div>
  </div>
</template>


<i18n>
    {
        "en": {
            "contacts": "Contacts"
        },
        "kz": {
            "contacts": "Байланыстар"
        },
        "ru": {
            "contacts": "Контакты"
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
    this.contactsBg();
  },
  methods: {
    async contactsBg() {
      this.ready = false;
      const { data } = (await this.$axios.get(`parts`)).data;
      this.text = data.backgrounds.find((el) => el.key == "contacts");
      this.ready = true;
      this.text;
    },
  },
};
</script>

<style lang="scss" scoped>
.contacts_bg {
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
  .contacts_bg {
    h1 {
      font-size: 40px;
      line-height: 48px;
    }
  }
}
</style>