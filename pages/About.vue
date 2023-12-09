<template>
  <div class="bg">
    <div class="About">
      <div class="navigation">
        <div class="swiper-button-prev"></div>
        <client-only>
          <swiper
            ref="mySwiper"
            :options="swiperOptions"
            class="swiper"
            v-click-outside="CloseImg"
          >
            <swiper-slide v-for="(item, index) in data.images" :key="index">
              <img :src="item.url" @click.stop="OpenImg(item.id)" />
            </swiper-slide>
          </swiper>
        </client-only>
        <div class="swiper-button-next"></div>
      </div>
      <div class="swiper-pagination"></div>
      <p>{{ data.title }}</p>
      <p v-html="data.content"></p>
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

<script>
import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([, Navigation, Pagination]);
export default {
  async asyncData({ $axios, i18n }) {
    let params = {};
    params.lang = i18n.locale == "en" ? "en" : i18n.locale;
    const { data } = (await $axios.get(`about`, { params })).data;
    return { data, params };
  },
  data: () => ({
    current_img: null,
    swiperOptions: {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 500,
      transition: 5000,
      direction: "horizontal",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
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
};
</script>

<style lang="scss" scoped>
.dialog_class {
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.38);
  backdrop-filter: blur(4px);
}
.About {
  padding: 60px 0 120px;

  max-width: 1025px;
  width: 100%;
  height: auto;

  margin: 0 auto;

  .swiper {
    max-width: 845px;
    width: 100%;
    height: auto;
    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        cursor: pointer;
        max-width: 845px;
        height: 350px;
        width: 100%;
        object-fit: cover;
        border-radius: 10px;
      }
    }
  }
  .navigation {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .swiper-button-next,
    .swiper-button-prev {
      position: static;
    }
    .swiper-button-prev.swiper-button-disabled,
    .swiper-button-next.swiper-button-disabled {
      opacity: 1 !important;
    }
    .swiper-button-next,
    .swiper-button-prev {
      position: static;
      z-index: 3;
      color: #b53a57;
    }
  }
  .swiper-pagination {
    width: 100%;
    margin: 20px 0 60px;

    position: static;

    display: flex;
    justify-content: center;
    .swiper-pagination-bullet {
      margin-right: 10px !important;
    }
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #233659;

    max-width: 845px;
    width: 100%;
    margin: 0 auto 10px auto;
  }
}
@media screen and (max-width: 1264px) {
  .About {
    padding: 40px 16px 80px;
  }
}
@media screen and (max-width: 960px) {
  .About {
    .navigation {
      position: relative;
      .swiper-button-next,
      .swiper-button-prev {
        position: absolute;
        bottom: -130px;
        top: unset !important;
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
        max-width: unset;
        .swiper-slide {
          width: 100%;
          img {
            max-width: unset;
          }
        }
      }
    }
    p {
      &:first-of-type {
        display: none;
      }
      &:last-of-type {
        margin-top: 150px;
      }
    }
  }
}
</style>