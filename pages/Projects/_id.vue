<template>
  <div class="projects_page">
    <div class="pages_main">
      <inside-bread-crumbs class="bread" :links="links" />
      <div class="Projects">
        <div class="Projects--text">
          <h1>{{ data.title }}</h1>
          <div class="content">
            <div class="content--text">
              <div
                class="single_line"
                v-for="(paramater, idx) in paramaters"
                :key="idx"
              >
                <p class="single_line__title">{{ paramater.text }}</p>
                <p class="single_line__text">
                  {{ data[paramater.data] }}
                </p>
              </div>
              <div class="single_line">
                <p class="single_line__title">{{ $t("project_cost") }}</p>
                <p class="single_line__text">{{ cost }} {{ $t("mlrd") }}</p>
              </div>
              <div class="single_line">
                <p class="single_line__title">{{ $t("type") }}</p>
                <p class="single_line__text">{{ data.status.title }}</p>
              </div>
              <div class="single_line">
                <p class="single_line__title">{{ $t("contacts") }}</p>
                <div class="contacts">
                  <div>
                    <img src="@/assets/images/Projects/work.png" />
                    <p>
                      {{ data.address }}
                    </p>
                  </div>
                  <div>
                    <img src="@/assets/images/Projects/message.png" />
                    <p v-if="data.email == 'Нет'">{{ data.email }}</p>
                    <a v-else :href="'mailto:' + data.email">{{
                      data.email
                    }}</a>
                  </div>
                  <div>
                    <img
                      src="@/assets/images/Projects/fax.png"
                      v-if="data.fax"
                    />
                    <p>
                      {{ data.fax }}
                    </p>
                  </div>
                  <div>
                    <img
                      src="@/assets/images/Projects/telephone.png"
                      v-if="data.phone"
                    />
                    <p v-if="data.phone == 'Нет'">{{ data.phone }}</p>
                    <a v-else :href="`tel:${data.phone}`">{{ data.phone }}</a>
                  </div>
                </div>
              </div>
            </div>
            <client-only>
              <div class="right_side">
                <swiper
                  ref="mySwiper"
                  :options="swiperOptions"
                  v-click-outside="CloseImg"
                  class="swiper"
                  v-if="data.images.length"
                >
                  <swiper-slide v-for="(image, idx) in data.images" :key="idx">
                    <img :src="image.url" @click.stop="OpenImg(image.id)" />
                  </swiper-slide>
                </swiper>
                <img
                  src="@/assets/images/no-image.png"
                  v-else
                  class="no-image"
                />
                <div class="swiper-pagination"></div>
              </div>
            </client-only>
          </div>
        </div>
      </div>
    </div>
    <div class="dialog_class" v-if="current_img">
      <v-dialog v-model="dialog">
        <img
          :src="data.images.filter((x) => x.id === current_img)[0].url"
          v-click-outside="OutsideClick"
        />
      </v-dialog>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "home": "Home",
    "projects": "Projects",
    "production": "Production",
    "manager": "Project Manager",
    "area": "Square",
    "investments": "Investment volume",
    "power": "Power",
    "start_date": "Launch date",
    "contacts": "Contacts",
    "type": "Project type",
    "project_cost": "Project cost",
    "foreign_participation": "Foreign participation",
    "mlrd": "BILLION TENGE"

  },
  "kz": {
    "home": "Басты бет",
    "projects": "Жобалар",
    "production": "Өнім",
    "manager": "Жоба жетекшісі",
    "area": "Алаңы",
    "investments": "Инвестиция көлемі",
    "power": "Қуат",
    "start_date": "Іске қосу күні",
    "contacts": "Байланыстар",
    "type": "Жоба түрі",
    "project_cost": "Жобаның құны",
    "foreign_participation": "Шетелдік қатысу",
    "mlrd": "МЛРД ТЕНГЕ"
  },
  "ru": {
    "home": "Главная",
    "projects": "Проекты",
    "production": "Продукция",
    "manager": "Руководитель проекта",
    "area": "Площадь",
    "investments": "Объем инвестиций",
    "power": "Мощность",
    "start_date": "Дата запуска",
    "contacts": "Контакты",
    "type": "Тип проекта",
    "investments_dollar": "Инвестиции в $",
    "project_cost": "Стоимость проекта",
    "foreign_participation": "Иностранное участие",
    "mlrd": "МЛРД ТЕНГЕ"
    }
}
</i18n>

<script>
import InsideBreadCrumbs from "../../components/ui/InsideBreadCrumbs.vue";
export default {
  async asyncData({ $axios, params, i18n }) {
    params.lang = i18n.locale == "en" ? "en" : i18n.locale;
    const { data } = (await $axios.get(`/projects/${params.id}`, { params }))
      .data;
    const cost = data.project_cost;
    return { data, params, cost };
  },
  components: {
    InsideBreadCrumbs,
  },
  data: () => ({
    current_img: null,
    swiperOptions: {
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 500,
      transition: 5000,
      direction: "horizontal",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
      },
    },
  }),
  computed: {
    paramaters() {
      return [
        {
          text: this.$t("production"),
          data: "product",
        },
        {
          text: this.$t("manager"),
          data: "project_manager",
        },
        {
          text: this.$t("area"),
          data: "area",
        },
        {
          text: this.$t("foreign_participation"),
          data: "foreign_participation",
        },
        {
          text: this.$t("power"),
          data: "power",
        },
        {
          text: this.$t("start_date"),
          data: "start_date",
        },
      ];
    },
    links() {
      return [
        {
          title: this.$t("home"),
          url: "/",
        },
        {
          title: this.$t("projects"),
          url: "/Projects",
        },
        {
          title: this.data.title,
          url: "",
        },
      ];
    },
  },
  methods: {
    CloseImg() {
      this.opened_img = false;
      this.$store.commit("setVisibility", false);
    },
    OpenImg(id) {
      this.dialog = true;
      this.current_img = id;
    },
    OutsideClick() {
      this.current_img = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.projects_page {
  padding-top: 50px;

  .bread {
    margin-left: 0 !important;
    max-width: 600px;
    width: 100%;
  }
}
.phone_contacts {
  path {
    fill: unset !important;
  }
  rect {
    color: #233659;
  }
}
.no-image {
  width: 630px;
  height: auto;
  max-height: 350px;
}
.dialog_class {
  width: 100vw;
  background: rgba(0, 0, 0, 0.38);
  backdrop-filter: blur(4px);
}
.Projects {
  display: flex;
  flex-direction: column;

  max-width: 1400px;
  width: 100%;

  margin: 0 auto;
  padding: 0 0 120px;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 50px;
    text-align: center;
    text-transform: uppercase;
    color: #224f9e;
    margin-bottom: 40px;
  }
  .content {
    display: flex;

    width: 100%;
    justify-content: space-between;

    &--text {
      max-width: 630px;
      width: 100%;

      .single_line {
        display: grid;
        grid-template-columns: minmax(auto, 193px) 1fr;
        align-items: start;
        grid-column-gap: 29px;
        margin-right: 20px;
        margin-bottom: 32px;
        .contacts {
          div {
            display: flex;
            align-items: flex-start;
            margin-bottom: 22px;

            &:last-of-type {
              margin-bottom: 0;
            }

            img {
              margin-right: 10px;
            }

            p {
              display: unset;
              color: #233659;
              font-size: 18px;
              line-height: 25px;
              &:last-of-type {
                margin-bottom: 30px;
              }
            }
            a {
              font-size: 18px;
              line-height: 25px;
            }
          }
        }
        &:last-of-type {
          margin-bottom: 0;
        }
        &__title {
          font-family: "OpenSans-Medium" !important;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 21px;
          color: #b53a57;
        }
        &__text,
        a {
          font-family: "OpenSans-Regular";
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 21px;
          color: #233659;
        }
        p {
          margin-bottom: 0 !important;
        }
      }

      .paramaters {
        max-width: 193px;
        width: 100%;

        display: flex;
        flex-direction: column;

        margin-right: 30px;

        p {
          font-family: "OpenSans-Medium" !important;
          margin-bottom: 32px !important;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 21px;
          color: #b53a57;
          &:last-of-type {
            margin-bottom: 0 !important;
          }
          &:nth-of-type(6) {
            margin-bottom: 53px !important;
          }
        }
      }
      .description {
        display: flex;
        flex-direction: column;

        max-width: 404px;
        width: 100%;

        p {
          font-family: "OpenSans-Regular";
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 21px;
          color: #233659;
          margin-bottom: 32px !important;
          &:first-of-type {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
          }
        }
      }
    }
    .right_side {
      max-width: 526px;
      width: 100%;
    }
    .swiper {
      max-width: 630px;
      width: 100%;
      height: auto;

      .swiper-slide {
        width: 100%;
        img {
          border-radius: 10px;
          cursor: pointer;
          width: 100%;
          height: 350px;
        }
      }
    }
    .swiper-pagination {
      margin-top: 20px !important;
      position: static;
    }
  }
}
@media screen and (max-width: 1440px) {
  .Projects {
    max-width: 1280px;
  }
}
@media screen and (max-width: 1264px) {
  .projects_page {
    .bread {
      margin-left: 25px !important;
    }
  }
  .Projects {
    padding: 0 16px 80px;
  }
}
@media screen and (max-width: 960px) {
  .projects_page {
    padding-top: 25px;
    .bread {
      margin-left: 16px !important;
      margin-bottom: 39px !important;
    }
  }
  .no-image {
    max-width: 630px;
    width: 100%;
  }
  .adaptive_bread {
    margin: 25px 0 0 16px;
    display: flex;
  }
  .Projects {
    h1 {
      font-size: 24px;
      line-height: 29px;
    }
    .content {
      flex-direction: column;
      justify-content: unset;
      align-items: center;

      &--text {
        max-width: unset;
        margin-bottom: 43px;

        p,
        a {
          font-size: 16px !important;
          line-height: 19px !important;
        }
        .single_line {
          .contacts {
            max-width: 205px;
            display: flex;
            flex-direction: column;
            padding-right: 16px;
          }
          &:last-of-type {
            padding-right: 16px;
          }
        }
      }
      div {
        width: 100%;
        .swiper {
          max-width: unset;
          img {
            width: 100%;
          }
        }
      }
      .swiper-pagination {
        margin-top: 28px;
      }
    }
  }
}
@media screen and (max-width: 400px) {
  .Projects {
    .content {
      div {
        .swiper {
          img {
            max-height: 250px;
          }
        }
      }
    }
  }
  .single_line {
    grid-template-columns: minmax(auto, 109px) 1fr !important;
  }
}
</style>