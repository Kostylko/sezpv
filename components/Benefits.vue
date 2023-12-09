<template>
  <div class="bg">
    <div class="Benefits">
      <h2 class="heading">{{ $t("benefits") }}</h2>
      <div class="line"></div>
      <div class="blocks">
        <client-only>
          <swiper ref="swap" :options="swiperOptionsBen" class="swiper">
            <swiper-slide
              class="blocks--table"
              v-for="(item, idx) in benefits"
              :key="idx"
            >
              <h2>{{ item.counter }}</h2>
              <p v-html="item.title">
                {{ item.title }}
              </p></swiper-slide
            >
          </swiper>
        </client-only>
      </div>
      <p class="mt-10 description">
        {{ $t("under_text") }}
      </p>
      <img
        src="@/assets/images/Benefits/city-illustration.svg"
        class="background_img"
      />
      <img
        src="@/assets/images/Benefits/city-adaptive.png"
        class="adaptive_img"
      />
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "benefits": "Main benefits",
    "under_text": "SIMPLIFIED HIRING OF IRS: FOR FOREIGN WORKERS OUTSIDE QUOTAS AND WITHOUT PERMITS"
  },
  "kz": {
    "benefits": "Негізгі жеңілдіктер",
    "under_text": "ШЖК ЖЕҢІЛДЕТІЛГЕН ЖАЛДАУ: ШЕТЕЛДІК ЖҰМЫСШЫЛАР ҮШІН КВОТАДАН ТЫС ЖӘНЕ РҰҚСАТСЫЗ"
  },
  "ru": {
    "benefits": "Основные льготы",
    "under_text": "УПРОЩЁННЫЙ НАЙМ ИРС: ДЛЯ ИНОСТРАННЫХ РАБОЧИХ ВНЕ КВОТ И БЕЗ РАЗРЕШЕНИЙ"
  }
}
</i18n>

<script>
export default {
  props: {
    benefits: {
      type: Array,
      default: [],
    },
  },
  data: () => ({
    swiperOptionsBen: {
      slidesPerView: 1,
      loop: false,
      spaceBetween: 20,
      watchOverflow: true,
      speed: 500,
      transition: 5000,
      direction: "horizontal",
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
};
</script>

<style lang="scss" scoped>
.Benefits {
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  width: 100%;
  z-index: 0;
  padding: 120px 0;

  .swiper {
    max-width: 1280px;
    width: 100%;

    border-radius: 10px;
  }
  .background_img {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
  }
  .adaptive_img {
    display: none;
  }

  h2 {
    font-size: 36px;
    line-height: 50px;
    color: #224f9e;
  }

  .blocks {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    z-index: 5;

    width: 100%;

    &--table {
      max-width: 305px;
      width: 100%;
      height: 305px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0px 4px 20px rgba(34, 79, 158, 0.15);
      margin-right: 20px;

      display: flex;

      cursor: pointer;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p {
        max-width: 330px;
        margin-top: 20px;
        color: #233659 !important;
        text-align: center;
        margin-bottom: 0 !important;
      }

      &:last-of-type {
        margin-right: 0;
      }
    }
    .blocks--table:hover {
      box-shadow: 0px 4px 20px rgba(34, 79, 158, 0.15) !important;
    }
  }
  .description {
    font-family: "OpenSans-Medium";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #233659;

    width: 100%;
    max-width: 900px;
  }
}
@media screen and (max-width: 1600px) {
  .Benefits {
    margin-top: 0;
  }
}
@media screen and (max-width: 1264px) {
  .Benefits {
    .blocks {
      padding: 0 16px;
    }
    .swiper-slide {
      max-width: 380px;
      width: 100%;
    }
  }
}
@media screen and (max-width: 960px) {
  .Benefits {
    padding: 80px 16px 120px 16px;

    .description {
      font-size: 16px;
      line-height: 19px;
    }

    .blocks {
      padding: 0;
    }
    h2 {
      font-size: 24px !important;
      line-height: 29px !important;
      text-align: center;
    }
    .background_img {
      display: none;
    }
    .adaptive_img {
      display: block;
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 1;
    }
    .swiper {
      .swiper-slide {
        max-width: 400px;
        width: 100%;

        p {
          max-width: 304px;
          font-size: 16px !important;
          line-height: 19px !important;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .Benefits {
    .swiper {
      .swiper-slide {
        max-width: 100%;
        width: 100%;
        height: 184px;
      }
    }
  }
}
</style>