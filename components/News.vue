<template>
  <div class="News">
    <h2>{{ $t("news") }}</h2>
    <div class="line"></div>
    <client-only>
      <swiper ref="swiper2" :options="newsOptions" class="swiper2">
        <swiper-slide v-for="(item, idx) in news" :key="idx">
          <a @click="goToInner(item.id)">
            <img
              :src="item.images.length ? item.images[0].url : defaultImage"
              class="photo"
            />
            <p class="data">{{ item.created_at }}</p>
            <p class="title">{{ item.title }}</p>
            <p v-html="item.content" class="test_div2">{{ item.content }}</p>
          </a>
          <div class="link">
            <a @click="goToInner(item.id)" class="link--type"
              >{{ $t("more") }}
            </a>
            <img src="@/assets/images/Vector (9).svg" />
          </div>
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
    <nuxt-link :to="localePath('/News')">
      <button class="red-btn">{{ $t("all") }}</button>
    </nuxt-link>
  </div>
</template>

<i18n>
{
  "en": {
    "news": "Our news",
    "all": "All news",
    "more": "Read more"
  },
  "kz": {
    "news": "Біздің жаңалықтар",
    "all": "Барлық жаңалықтар",
    "more": "Толығырақ"
  },
  "ru": {
    "news": "Наши новости",
    "all": "Все новости",
    "more": "Читать больше"
  }
}
</i18n>

<script>
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
Swiper.use([, Navigation, Pagination, Autoplay]);
export default {
  props: {
    news: {
      type: Array,
      default: [],
    },
  },
  data: () => ({
    defaultImage: require("@/assets/images/qwe.png"),
    newsOptions: {
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 500,
      transition: 5000,
      direction: "horizontal",
      navigation: {
        nextEl: ".swiper2-next",
        prevEl: ".swiper2-prev",
      },
      pagination: {
        el: ".pagination1",
        clickable: true,
      },
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        1264: {
          slidesPerView: 4,
        },
        960: {
          slidesPerView: 3,
        },
        600: {
          slidesPerView: 2,
        },
      },
    },
  }),
  methods: {
    goToInner(id) {
      this.$router.push(
        this.localePath({
          path: `/News/${id}`,
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
.News {
  padding: 120px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1280px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  h2 {
    font-size: 36px;
    line-height: 50px;
    text-align: center;
    text-transform: uppercase;
    color: #224f9e;
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
  .swiper2 {
    max-width: 1280px;
    width: 100%;
    position: relative;

    .swiper-slide {
      max-width: 380px;
      cursor: pointer;
      .photo {
        width: 100%;
        height: 220px;
        border-radius: 10px;
        object-fit: cover;
      }
      .data {
        font-family: "OpenSans-Regular";
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #b5bac1;

        max-width: 305px;
        width: 100%;

        margin: 10px 0 20px;
      }
      .title {
        width: 100%;

        font-family: "OpenSans-Semibold" !important;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        color: #224f9e;

        max-width: 305px;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
        width: 100%;
      }
      .test_div2 {
        font-style: normal;
        font-weight: normal;
        font-size: 14px !important;
        line-height: 16px !important;
        color: #233659;
        margin: 14px 0 36px;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        max-height: 48px;

        p {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
      }
      .link {
        display: flex;
        width: 100%;

        &--type {
          font-family: "OpenSans-Semibold";
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 22px;
          color: #b53a57;
          text-decoration: none;
          margin-right: 16px;
        }
      }
    }
  }
  .red-btn {
    background: #b53a57;
    box-shadow: 0px 4px 20px rgba(181, 58, 87, 0.15);
    border-radius: 6px;

    padding: 15px 0;
    width: 260px;
    height: 50px;
    font-family: "OpenSans-Medium";
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #fcfcfc;
    text-decoration: none;
    transition: 0.22s;

    &:hover {
      opacity: 0.8;
    }
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
@media screen and (max-width: 1264px) {
  .News {
    max-width: 100%;
    padding: 120px 80px;

    .swiper {
      width: 100%;
      .swiper-slide {
        max-width: 380px;
      }
    }
  }
}
@media screen and (max-width: 960px) {
  .News {
    padding: 80px 16px;

    .swiper {
      .swiper-slide {
        max-width: 400px;
        width: 100%;

        p {
          max-width: 100%;
          width: 100%;
        }
        .photo {
          width: 100%;
          height: 100%;

          object-fit: cover;
        }
      }
    }
    .navigation-pagination {
      display: flex;

      margin: 36px 0 40px;
    }
  }
}
@media screen and (max-width: 768px) {
  .News {
    .swiper2 {
      height: auto;

      .swiper-slide {
        max-width: 100%;

        .text {
          max-width: unset;
        }
      }
    }
    h2 {
      font-size: 24px;
      line-height: 29px;
    }
    p {
      font-size: 16px;
      line-height: 19px;
    }
    button {
      font-size: 16px;
      line-height: 19px;
    }
    .navigation-pagination {
      display: flex;
      flex-direction: column-reverse;

      width: 100%;
      .swiper-pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        position: static;
        width: 100%;
        justify-content: center;
        margin-bottom: 24px;
      }
      .navigation {
        margin-left: auto;

        .swiper-button-next,
        .swiper-button-prev {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
}
</style>