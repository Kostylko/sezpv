<template>
  <div class="Error">
    <div v-if="error.statusCode === 404" class="Error--content">
      <div>
        <h2>{{ $t("not_found") }}</h2>
        <div class="link">
          <nuxt-link :to="localePath('/')">{{ $t("home") }}</nuxt-link>
        </div>
      </div>
      <img src="@/assets/images/Error/404-illustration.svg" />
    </div>
    <div v-else>
      {{ otherError }}
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "home": "Back to home page",
    "not_found": "Page not found"
  },
  "kz": {
    "home": "Басты бетке оралу",
    "not_found": "Бет табылмады"
  },
  "ru": {
    "home": "Вернуться на главную",
    "not_found": "Страница не найдена"
  }
}
</i18n>

<script>
export default {
  name: "EmptyLayout",
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style lang="scss" scoped>
.Error {
  max-width: 1280px;
  width: 100%;

  margin: 0 auto;

  &--content {
    display: grid;
    grid-template-columns: 490px 1fr;

    padding: 120px 0 130px;

    div {
      padding-top: 122px;
      display: flex;
      flex-direction: column;

      width: 490px;

      h2 {
        font-family: "OpenSans-Bold";
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 50px;
        text-transform: uppercase;
        color: #224f9e;
        margin-bottom: 60px;
      }
      p {
        font-family: "OpenSans-Regular";
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #233659;

        margin: 30px 0 60px;
      }
      .link {
        background: #b53a57;
        box-shadow: 0px 4px 20px rgba(181, 58, 87, 0.15);
        border-radius: 6px;

        display: flex;
        align-items: center;
        justify-content: center;

        max-width: 260px;
        width: 100%;
        height: 50px;

        padding: 14px 25px;

        a {
          font-style: normal;
          font-family: "OpenSans-Semibold";
          font-weight: bold;
          font-size: 18px;
          line-height: 22px;
          text-align: center;
          color: #fcfcfc;
        }
      }
    }
  }
}
@media screen and (max-width: 1299px) {
  .Error {
    padding: 0 16px;
  }
}
@media screen and (max-width: 960px) {
  .Error {
    height: auto;
    &--content {
      flex-direction: column;
      align-items: center;

      div {
        align-items: center;

        p {
          text-align: center;
        }
      }
      img {
        margin-top: 80px;
      }
    }
  }
}
@media screen and (max-width: 436px) {
  .Error {
    &--content {
      div {
        align-items: flex-start !important;

        h2 {
          font-size: 24px;
          line-height: 29px;
        }

        p {
          font-size: 16px;
          line-height: 19px;
          text-align: left !important;
        }
      }
    }
  }
}
</style>
