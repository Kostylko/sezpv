<template>
  <div class="bg">
    <div class="Partners">
      <h1>{{ $t("title") }}</h1>
      <div class="line"></div>
      <client-only>
        <swiper ref="swiper" :options="swiperOptions" class="swiper">
          <swiper-slide v-for="(item, idx) in images" :key="idx">
            <a :href="item.url" target="_blank">
              <img :src="item.image" class="swiper_image" alt="" />
            </a>
          </swiper-slide>
        </swiper>
        <div class="navigation-pagination">
          <div class="navigation">
            <div class="swiper-button-prev swiper2-prev"></div>
            <div class="swiper-button-next swiper2-next"></div>
          </div>
          <div class="swiper-pagination pagination1"></div>
        </div>
      </client-only>
    </div>
  </div>
</template>

<i18n>
{
    "en": {
        "title": "Our partners"
    },
    "kz": {
        "title": "Біздің серіктестер"
    },
    "ru": {
        "title": "Наши партнеры"
    }
}
</i18n>

<script>
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
Swiper.use([, Navigation, Pagination, Autoplay]);
export default {
  data: () => ({
    swiperOptions: {
      slidesPerView: 2,
      spaceBetween: 30,
      speed: 500,
      transition: 5000,
      loop: true,
      direction: "horizontal",
      navigation: {
        nextEl: ".swiper2-next",
        prevEl: ".swiper2-prev",
      },
      breakpoints: {
        1264: {
          slidesPerView: 6,
        },
        960: {
          slidesPerView: 4,
        },
        600: {
          slidesPerView: 3,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
      },
    },
    images: [
      {
        image: require("@/assets/images/partners/akimat.png"),
        url: "https://www.gov.kz/",
      },
      {
        image: require("@/assets/images/partners/atameken.png"),
        url: "https://atameken.kz/",
      },
      {
        image: require("@/assets/images/partners/bi.png"),
        url: "https://bi.group/ru/",
      },
      {
        image: require("@/assets/images/partners/egov.png"),
        url: "https://egov.kz/",
      },
      {
        image: require("@/assets/images/partners/forwall.png"),
        url: "https://sezpv.com/",
      },
      {
        image: require("@/assets/images/partners/g9.png"),
        url: "https://g9invest.com/",
      },
      {
        image: require("@/assets/images/partners/history.png"),
        url: "https://tou.edu.kz/",
      },
      {
        image: require("@/assets/images/partners/idi.png"),
        url: "https://www.idi.ie/",
      },
      {
        image: require("@/assets/images/partners/marlott.png"),
        url: "https://www.marriott.com/",
      },
      {
        image: require("@/assets/images/partners/pvl.png"),
        url: "http://spkpavlodar.kz/",
      },
      {
        image: require("@/assets/images/partners/rbk.png"),
        url: "https://www.bankrbk.kz",
      },
      {
        image: require("@/assets/images/partners/rk.png"),
        url: "https://egov.kz/",
      },
      {
        image: require("@/assets/images/partners/soltustik.png"),
        url: "http://soltustikkaz.kz/",
      },
      {
        image: require("@/assets/images/partners/wins.png"),
        url: "http://kasachstan-invest.com/",
      },
      {
        image: require("@/assets/images/partners/z.png"),
        url: "https://femoza.org/",
      },
      {
        image: require("@/assets/images/partners/ztb.png"),
        url: "https://ztb.kz/",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.Partners {
  padding: 120px 0;
  margin: 0 auto;

  max-width: 1280px;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: "OpenSans-Bold";
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 50px;
    text-align: center;
    text-transform: uppercase;
    color: #224f9e;
  }
  .swiper {
    width: 100%;
    max-width: 100%;

    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      max-width: 305px;
      height: 210px;
      cursor: pointer;
      background: #d1d8e3;
      border-radius: 10px;
      img {
        object-fit: cover;
      }
    }
  }
  .navigation {
    display: flex;
    align-items: flex-end;
    margin-left: auto;
    max-width: 120px;
    width: 100%;
    height: 60px;
    justify-content: space-between;

    .swiper-button-prev.swiper-button-disabled,
    .swiper-button-next.swiper-button-disabled {
      opacity: 1 !important;
    }
    .swiper-button-next,
    .swiper-button-prev {
      position: static;
      z-index: 7;
      color: #b53a57;
    }
  }
  .navigation-pagination {
    width: 100%;
    margin: 0 0 30px;

    .navigation {
      align-items: flex-end;
      div {
        cursor: pointer;
      }
    }
    .swiper-pagination {
      display: none;
    }
  }
}
@media screen and (max-width: 960px) {
  .Partners {
    padding: 80px 16px;
  }
}
</style>