<template>
  <div class="pages_main">
    <inside-bread-crumbs :links="about_id" class="bread" />
    <div class="Person">
      <h2>{{ data.full_name }}</h2>
      <div class="content">
        <img :src="data.image" />
        <div class="text">
          <h3>{{ data.position }}</h3>
          <p v-html="data.content">
            {{ data.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "main": "Home",
    "managment": "Managment"
  },
  "kz": {
    "main": "Басты бет",
    "managment": "Басшылық"
  },
  "ru": {
    "main": "Главная",
    "managment": "Руководство"
  }
}
</i18n>

<script>
import InsideBreadCrumbs from "../../components/ui/InsideBreadCrumbs.vue";
export default {
  async asyncData({ $axios, params, i18n }) {
    params.lang = i18n.locale == "en" ? "en" : i18n.locale;
    const { data } = (await $axios.get(`/employees/${params.id}`, { params }))
      .data;
    return { data, params };
  },
  components: {
    InsideBreadCrumbs,
  },
  data: () => ({}),
  computed: {
    about_id() {
      return [
        {
          title: this.$t("main"),
          url: "/",
        },
        {
          title: this.$t("managment"),
          url: "/Managment",
        },
      ];
    },
  },
  created() {
    let bread = {
      title: this.data.full_name,
      url: "",
    };
    this.about_id.push(bread);
  },
};
</script>

<style lang="scss" scoped>
.pages_main {
  padding-top: 50px;
  .bread {
    margin-left: 0 !important;
  }
}
.Person {
  padding: 0 0 120px;
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 50px;
    text-transform: uppercase;
    color: #224f9e;

    margin-bottom: 40px;
  }

  .content {
    display: flex;
    align-items: flex-start;
    width: 100%;

    img {
      border-radius: 10px;
      margin-right: 20px;

      max-width: 413px;
      width: 100%;
      max-height: 413px;
      height: auto;
      object-fit: cover;
    }
    .text {
      max-width: 847px;
      width: 100%;
      h3 {
        font-family: "OpenSans-Bold";
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        text-transform: uppercase;
        color: #b53a57;

        margin-bottom: 18px;
      }
      p {
        width: 100%;
        text-align: left;
        color: #233659;
      }
    }
  }
}
@media screen and (max-width: 1264px) {
  .pages_main {
    .bread {
      margin-left: 16px !important;
      margin-bottom: 39px !important;
    }
  }
  .Person {
    padding: 0 16px 80px;
  }
}
@media screen and (max-width: 960px) {
  .pages_main {
    padding-top: 25px;
  }
  .Person {
    h2 {
      font-size: 24px;
      line-height: 29px;
    }
  }
}
@media screen and (max-width: 690px) {
  .Person {
    h2 {
    }
    .content {
      flex-direction: column;

      img {
        margin-bottom: 40px;
        margin-right: 0;
      }
      .text {
        h3 {
          margin-bottom: 24px;
        }
        p,
        h3 {
          font-size: 16px;
          line-height: 19px;
        }
      }
    }
  }
}
</style>