<template>
  <div class="bg">
    <div class="Managment">
      <div class="Managment--content">
        <div v-for="(item, idx) in data" :key="idx">
          <img :src="item.image" />
          <h2>{{ item.full_name }}</h2>
          <p>{{ item.position }}</p>
          <a @click="goToInner(item.id)">
            {{ $t("more") }}
            <svg
              width="16"
              height="8"
              viewBox="0 0 16 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8167 3.55759C15.8165 3.5574 15.8163 3.55718 15.8161 3.55699L12.5504 0.306998C12.3057 0.0635293 11.91 0.0644354 11.6665 0.309122C11.423 0.553778 11.4239 0.949496 11.6686 1.193L13.8612 3.37499H0.625C0.279813 3.37499 0 3.6548 0 3.99999C0 4.34518 0.279813 4.62499 0.625 4.62499H13.8612L11.6686 6.80698C11.4239 7.05048 11.423 7.4462 11.6665 7.69086C11.91 7.93558 12.3058 7.93642 12.5504 7.69298L15.8162 4.44299C15.8163 4.4428 15.8165 4.44258 15.8167 4.4424C16.0615 4.19808 16.0607 3.80108 15.8167 3.55759Z"
                fill="#B53A57"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "more": "More"
  },
  "kz": {
    "more": "Толығырақ"
  },
  "ru": {
    "more": "Подробнее"
  }
}
</i18n>

<script>
export default {
  async asyncData({ $axios, i18n }) {
    let total = (await $axios.get(`employees`)).data.meta.total;
    let page = 1;
    let pagination = total;
    let params = {
      page,
      pagination,
    };
    params.lang = i18n.locale == "en" ? "en" : i18n.locale;
    const { data } = (await $axios.get(`employees`, { params })).data;
    return { data, params, page, pagination };
  },
  data: () => ({}),
  methods: {
    goToInner(id) {
      this.$router.push(
        this.localePath({
          path: `/Managment/${id}`,
          query: {
            id: id,
          },
        })
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.Managment {
  margin: 0 auto;
  padding: 60px 0 120px;

  max-width: 1440px;
  width: 100%;
  height: auto;

  &--content {
    display: grid;
    grid-template-columns: repeat(auto-fit, 305px);
    grid-gap: 20px;
    align-items: flex-start;

    div {
      margin-right: 20px;

      max-width: 305px;
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;

      img {
        border-radius: 16px;
        margin-bottom: 20px;

        width: 305px;
        height: 305px;

        object-fit: cover;
      }

      h2 {
        font-family: "OpenSans-Bold";
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        text-transform: uppercase;
        color: #224f9e;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;

        margin-bottom: 18px;

        max-width: 293px;
        width: 100%;
      }

      p {
        font-family: "OpenSans-Regular";
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #233659;

        max-width: 293px;
        width: 100%;

        margin-bottom: 24px !important;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 6;
        overflow: hidden;
      }

      a {
        font-family: "OpenSans-Bold";
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        color: #b53a57;

        cursor: pointer;

        svg {
          margin-left: 15px;
        }
      }

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
}
@media screen and (max-width: 1440px) {
  .Managment {
    max-width: 1280px;
  }
}
@media screen and (max-width: 1264px) {
  .Managment {
    padding: 40px 16px 80px;
  }
}
@media screen and (max-width: 600px) {
  .Managment {
    h2 {
      font-size: 24px;
      line-height: 29px;
    }
    p {
      font-size: 16px;
      line-height: 19px;
    }
  }
}
@media screen and (max-width: 330px) {
  .Managment {
    &--content {
      grid-template-columns: minmax(200px, 300px) !important;
    }
  }
}
</style>