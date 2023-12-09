<template>
  <div class="News_list">
    <inside-bread-crumbs :links="links" class="bread" />
    <div class="news_main">
      <div class="News">
        <div class="News--content">
          <h1>
            {{ data.title }}
          </h1>
          <client-only>
            <div class="swiper-block">
              <div class="swiper-button-prev"></div>
              <swiper
                v-if="data.images.length"
                ref="mySwiper"
                :options="swiperOptions"
                class="swiper"
                v-click-outside="CloseImg"
              >
                <swiper-slide v-for="(item, index) in data.images" :key="index">
                  <img
                    :src="item.url"
                    @click.stop="OpenImg(item.id)"
                    id="swiper_img"
                  />
                </swiper-slide>
              </swiper>
              <img src="@/assets/images/qwe.png" v-else class="no-image" />
              <div class="swiper-button-next"></div>
            </div>
            <div class="swiper-pagination"></div>
          </client-only>
          <p v-html="data.content">
            {{ data.content }}
          </p>
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
    "news": "News",
    "home": "Home"
 },
 "kz": {
   "news": "Жаңалықтар",
    "home": "Басты бет"

 },
 "ru": {
    "news": "Новости",
    "home": "Главная"

 }
}
</i18n>

<script>
import InsideBreadCrumbs from "../../components/ui/InsideBreadCrumbs.vue";
export default {
  async asyncData({ $axios, params, i18n }) {
    params.lang = i18n.locale == "en" ? "en" : i18n.locale;
    const { data } = (await $axios.get(`/news/${params.id}`, { params })).data;
    return { data, params };
  },
  components: { InsideBreadCrumbs },
  data: () => ({
    defaultImage: require("@/assets/images/qwe.png"),
    dialog: true,
    opened_img: false,
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
      },
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
    },
  }),
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
  computed: {
    links() {
      return [
        {
          title: this.$t("home"),
          url: "/",
        },
        {
          title: this.$t("news"),
          url: "/News",
        },
        {
          title: this.data.title,
          url: "",
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.News_list {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding-top: 50px;
}
.no-image {
  width: 845px;
  max-height: 350px;
  height: auto;
}
.dialog_class {
  width: 100vw;

  background: rgba(0, 0, 0, 0.38);
  backdrop-filter: blur(4px);
}
.opened {
  display: flex !important;
}
.closed {
  display: none !important;
}

.News {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;

  padding: 0 0 120px;

  width: 100%;
  height: auto;

  &--content {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-family: "OpenSans-Bold";
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 43px;
      color: #224f9e;

      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;

      max-width: 845px;
      width: 100%;
      margin-bottom: 54px;
    }
    // .navigation {
    //   position: absolute;

    //   top: 35%;
    //   left: 0;
    //   right: 0;

    //   width: 100%;

    //   display: flex;
    //   align-items: flex-end;
    //   height: 60px;

    //   .swiper-button-next,
    //   .swiper-button-prev {
    //     position: static;
    //   }
    //   .swiper-button-next {
    //     margin-left: auto;
    //   }
    //   .swiper-button-prev {
    //     margin-right: auto;
    //   }
    // }
    .swiper-block {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: auto;
      margin-bottom: 20px;
    }
    .swiper-button-next,
    .swiper-button-prev {
      position: static !important;
      z-index: 1;
    }
    .swiper-button-prev {
      margin-right: auto;
    }
    .swiper-button-next {
      margin-left: auto;
    }
    .swiper {
      max-width: 845px;
      width: 100%;
      height: 100%;
      .swiper-slide {
        border-radius: 10px;
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        img {
          cursor: pointer;
          max-width: 100%;
          width: 100%;
          height: auto;
          max-height: 350px;
          object-fit: cover;
          border-radius: 10px;
        }
      }
      .swiper-slide .swiper-slide-active {
        width: 100%;
      }
    }
    .swiper-button-prev,
    .swiper-button-next {
      top: 40% !important;
      position: fixed;
    }
    .swiper-pagination {
      display: flex;
      margin-top: 20px;
      margin-bottom: 60px;

      .swiper-pagination-clickable .swiper-pagination-bullet {
        margin-right: 10px;
      }
    }
    .swiper-button-next,
    .swiper-button-prev {
      color: #b53a57;
    }
    .swiper-button-prev.swiper-button-disabled,
    .swiper-button-next.swiper-button-disabled {
      opacity: 1;
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      color: #233659;

      max-width: 845px;
      width: 100%;
    }
  }
}
@media screen and (max-width: 1024px) {
  .News_list {
    padding: 24px 16px 80px;
  }
}
@media screen and (max-width: 960px) {
  .bread {
    margin-bottom: 39px !important;
  }
  .News {
    &--content {
      .swiper-block {
        .swiper-button-next,
        .swiper-button-prev {
          position: absolute !important;
          bottom: -130px;
          top: unset !important;

          width: 50px;
          height: 50px;
        }
        .swiper-button-prev {
          right: 80px;
          left: unset;
        }
        .swiper-button-next {
          right: 0;
          left: unset;
        }
        .swiper {
          .swiper-slide {
            height: unset;
          }
        }
      }
      .swiper-pagination {
        margin-bottom: 0;
      }
      p {
        margin-top: 134px;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .News {
    &--content {
      h1 {
        font-size: 24px;
        line-height: 29px;

        margin-bottom: 40px;
      }
      p {
        font-size: 16px;
        line-height: 19px;
      }
      .swiper-block {
        .swiper-button-next,
        .swiper-button-prev {
          width: 30px !important;
          height: 30px !important;
        }
      }
    }
  }
}
@media screen and (max-width: 320px) {
  .no-image {
    width: 100%;
  }
}
</style>