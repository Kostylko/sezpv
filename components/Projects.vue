<template>
  <div class="bg">
    <div class="Projects">
      <h1>{{ $t("projects") }}</h1>
      <div class="line"></div>
      <client-only>
        <swiper ref="swip" :options="projectOptions" class="swiper">
          <swiper-slide
            data-swiper-autoplay="2000"
            v-for="(item, index) in projects"
            :key="index"
          >
            <a @click="goToInner(item.id)">
              <img
                :src="item.images.length ? item.images[0].url : defaultImage"
                class="photo"
              />
              <p class="hover_p">{{ item.title }}</p>
            </a>
          </swiper-slide>
        </swiper>
        <div class="navigation-pagination">
          <div class="navigation">
            <div class="swiper-button-prev swiper1-prev"></div>
            <div class="swiper-button-next swiper1-next"></div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </client-only>
      <nuxt-link :to="localePath('/Projects')">
        <button class="red-btn">{{ $t("all") }}</button>
      </nuxt-link>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "projects": "our major projects",
    "all": "All projects"
  },
  "kz": {
    "projects": "біздің ірі жобаларымыз",
    "all": "Барлық жобалар"
  },
  "ru": {
    "projects": "наши крупные проекты",
    "all": "Все проекты"
  }
}
</i18n>

<script>
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
Swiper.use([, Navigation, Pagination, Autoplay]);
export default {
  props: {
    projects: {
      type: Array,
      default: [],
    },
  },
  data: () => ({
    defaultImage: require("@/assets/images/qwe.png"),
    projectOptions: {
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 500,
      transition: 5000,
      loop: true,
      direction: "horizontal",
      navigation: {
        nextEl: ".swiper1-next",
        prevEl: ".swiper1-prev",
      },
      pagination: {
        el: ".swiper-pagination",
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
          path: `/Projects/${id}`,
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
.Projects {
  max-width: 1280px;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 120px 0;

  margin: 0 auto;

  h1 {
    font-style: normal;
    font-weight: bold;
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
    height: 60px;
    width: 100%;
    justify-content: space-between;
    .swiper-pagination {
      display: none;
    }
    .swiper-button-prev.swiper-button-disabled,
    .swiper-button-prev,
    .swiper-button-next {
      position: static;
      color: #b53a57;
      opacity: 1;
    }
  }

  .swiper {
    max-width: 1280px;
    width: 100%;
    position: relative;

    .swiper-slide {
      max-width: 305px;
      height: 210px;
      background: #fff;
      border-radius: 10px;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      a {
        width: 100%;
        height: 100%;
      }
      .hover_p {
        display: none;
      }
      img {
        width: 100%;
        height: 100%;

        object-fit: cover;
        border-radius: 10px;
      }
    }
    .swiper-slide:hover {
      background: #b53a57;
      animation: proj 0.5s linear;
      @keyframes proj {
        from {
          opacity: 0.7;
        }
        to {
          opacity: 1;
        }
      }
    }
    .swiper-slide:hover img {
      display: none;
    }
    .swiper-slide .hover_p {
      display: block;
      font-family: "OpenSans-Semibold";
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 25px;
      color: white;
      margin: 30px 0 0 30px;

      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
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
    transition: 0.22s;

    &:hover {
      opacity: 0.8;
    }
  }
}
.navigation-pagination {
  width: 100%;
  margin: 30px 0 80px auto;

  .swiper-pagination {
    display: none;
  }
}
@media screen and (max-width: 1264px) {
  .Projects {
    max-width: 100%;
    padding: 120px 80px;

    .swiper {
      width: 100%;
      .swiper-slide {
        max-width: 380px;
      }
    }
    .navigation-pagination {
      margin-top: 24px;
      .navigation {
        align-items: flex-end;
      }
    }
  }
}
@media screen and (max-width: 960px) {
  .Projects {
    padding: 80px 16px;
    .swiper {
      height: auto;
      .swiper-slide {
        max-width: 400px;
        width: 100%;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .navigation-pagination {
    display: flex;
    flex-direction: column-reverse;
    margin: 44px auto 60px auto !important;

    width: 100%;

    .swiper-pagination {
      display: flex;
      justify-content: center;
      position: static;

      display: flex;
      justify-content: center;

      width: 100%;
    }
    .navigation {
      margin-left: auto;
      margin-top: 48px;

      .swiper-button-next,
      .swiper-button-next {
        width: 50px;
        height: 50px;
      }
    }
  }
  h1 {
    font-size: 24px !important;
    line-height: 29px !important;
  }
  .swiper {
    .swiper-slide {
      max-width: 100% !important;
    }
  }
  button {
    font-size: 16px !important;
    line-height: 19px !important;
  }
}
</style>