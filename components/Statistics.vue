<template>
  <div
    class="Statistics"
    id="statisitcs"
    data-aos="zoom-in-up"
    data-aos-once="true"
    data-aos-duration="1000"
  >
    <div class="text">
      <p>{{ $t("text") }}</p>
    </div>
    <div
      class="desktop_v"
      data-aos="zoom-in-up"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <div class="circle">
        <div class="circle__content">
          <div class="d-flex flex-row align-center">
            <p class="counters counter1" id="test"></p>
          </div>
          <p class="titles">{{ statistics.values[0].title }}</p>
        </div>
        <div class="circle__content">
          <div class="d-flex flex-row align-center">
            <p class="counters counter2"></p>
            <span v-if="statistics.values[1].counter > 1000000000">млрд</span>
          </div>
          <p class="titles">
            {{ statistics.values[1].title }}
          </p>
        </div>
        <div class="circle__content">
          <div class="d-flex flex-row align-center">
            <p class="counters counter3"></p>
            <span v-if="statistics.values[2].counter > 1000000000">млрд</span>
          </div>
          <p class="titles">{{ statistics.values[2].title }}</p>
        </div>
        <div class="circle__content">
          <p class="counters counter4"></p>
          <span v-if="statistics.values[3].counter > 1000000000">млрд</span>
          <p class="titles">{{ statistics.values[3].title }}</p>
        </div>
        <div class="circle__content">
          <p class="counters counter5"></p>
          <span v-if="statistics.values[4].counter > 1000000000">млрд</span>
          <p class="titles">{{ statistics.values[4].title }}</p>
        </div>
        <div class="inside__image">
          <img
            src="@/assets/images/Circle/circle 123.png"
            class="background_image"
          />
          <img :src="statistics.images[0].image" class="back_image" />
        </div>
        <img src="@/assets/images/Circle/new_crug.png" class="circles" />
      </div>
    </div>
    <div class="adaptive_v">
      <div class="adaptive_circle">
        <img
          src="@/assets/images/Circle/adaptive_v.png"
          class="adaptive_background"
        />
        <img :src="statistics.images[0].image" class="adaptive_back_image" />
      </div>
      <div class="adaptive_content">
        <div class="adaptive_content__text">
          <div class="blocks">
            <p class="adaptive_couter counter6"></p>
            <span v-if="statistics.values[1].counter > 1000000000">млрд</span>
            <p>{{ statistics.values[0].title }}</p>
          </div>
          <div class="blocks">
            <p class="adaptive_couter counter7"></p>
            <p>{{ statistics.values[1].title }}</p>
          </div>
          <div class="blocks">
            <p class="adaptive_couter counter8"></p>
            <p>{{ statistics.values[2].title }}</p>
          </div>
          <div class="blocks">
            <p class="adaptive_couter counter9"></p>
            <p>{{ statistics.values[3].title }}</p>
          </div>
          <div class="blocks">
            <p class="adaptive_couter counter10"></p>
            <p>{{ statistics.values[4].title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "text": "Pavlodar region is the industrial center of Kazakhstan"
  },
  "kz": {
    "text": "Павлодар облысы-Қазақстанның индустриялық орталығы"
  },
  "ru": {
    "text": "Павлодарская область — Индустриальный центр казахстана"
  }
}
</i18n>

<script>
import Aos from "~/mixins/aos.js";
import { CountUp } from "countup.js";
export default {
  mixins: [Aos],
  props: {
    statistics: {
      type: Object,
      default: {},
    },
  },
  components: {},
  data: () => ({
    zxc: 0,
    project1: null,
    project2_cases: null,
    firstnum: null,
    secondNum: null,
    thirdNum: null,
    fourthNum: null,
    fifthNum: null,
    sixthNum: null,
    seventhNum: null,
    eightNum: null,
    ninethNum: null,
    tenthNum: null,
  }),
  beforeDestroy() {
    this.newFunc();
    this.countUp;
    this.countUp2;
    this.countUp3;
    this.countUp4;
    this.countUp5;
    this.countUp6;
    this.countUp7;
    this.countUp8;
    this.countUp9;
    this.countUp10;
  },
  created() {
    if (process.client) {
      window.addEventListener("scroll", (e) => {
        let time = document.getElementById("statisitcs");
        let time_pos = time.getBoundingClientRect();
        let time_top = time_pos.top;

        if (time_top < 250 && time_top > -1500 && this.zxc < 1) {
          this.newFunc();
          this.zxc++;
        }
      });
    }
  },
  methods: {
    numbers() {
      this.firstnum = this.statistics.values[0].counter;
      this.secondNum = this.statistics.values[1].counter;
      this.thirdNum = this.statistics.values[2].counter;
      this.fourthNum = this.statistics.values[3].counter;
      this.fifthNum = this.statistics.values[4].counter;
      this.sixthNum = this.statistics.values[0].counter;
      this.seventhNum = this.statistics.values[0].counter;
      this.seventhNum = this.statistics.values[1].counter;
      this.eightNum = this.statistics.values[2].counter;
      this.ninethNum = this.statistics.values[3].counter;
      this.tenthNum = this.statistics.values[4].counter;
    },
    newFunc() {
      if (process.client) {
        this.numbers();
        const options = {
          duration: 3,
          useGrouping: false,
          useEasing: false,
          decimalPlaces: 2,
        };
        const optionsSpaces = {
          duration: 3,
          useGrouping: false,
          useEasing: false,
          decimalPlaces: 0,
        };
        let count = document.querySelector(".counter1");
        let count2 = document.querySelector(".counter2");
        let count3 = document.querySelector(".counter3");
        let count4 = document.querySelector(".counter4");
        let count5 = document.querySelector(".counter5");
        let count6 = document.querySelector(".counter6");
        let count7 = document.querySelector(".counter7");
        let count8 = document.querySelector(".counter8");
        let count9 = document.querySelector(".counter9");
        let count10 = document.querySelector(".counter10");

        let number = this.firstnum;
        let number2 = this.secondNum;
        let number3 = this.thirdNum;
        let number4 = this.fourthNum;
        let number5 = this.fifthNum;
        let number6 = this.sixthNum;
        let number7 = this.seventhNum;
        let number8 = this.eightNum;
        let number9 = this.ninethNum;
        let number10 = this.tenthNum;
        const countUp = new CountUp(count, number, options);
        const countUp2 = new CountUp(count2, number2, options);
        const countUp3 = new CountUp(count3, number3, optionsSpaces);
        const countUp4 = new CountUp(count4, number4, options);
        const countUp5 = new CountUp(count5, number5, options);
        const countUp6 = new CountUp(count6, number6, options);
        const countUp7 = new CountUp(count7, number7, options);
        const countUp8 = new CountUp(count8, number8, options);
        const countUp9 = new CountUp(count9, number9, options);
        const countUp10 = new CountUp(count10, number10, options);

        if (!countUp.error) {
          countUp.start();
          countUp2.start();
          countUp3.start();
          countUp4.start();
          countUp5.start();
          countUp6.start();
          countUp7.start();
          countUp8.start();
          countUp9.start();
          countUp10.start();
        } else {
          console.error(countUp.error);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.Statistics {
  padding: 120px 0 125px;

  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  .text {
    border-left: 3px solid #b53a57;
    max-width: 773px;
    width: 100%;

    padding-left: 20px;

    p {
      font-family: "OpenSans-Bold";
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 50px;
      text-transform: uppercase;
      color: #224f9e;
    }
  }
  .circle {
    position: relative;

    max-height: 700px;
    height: auto;

    margin: 86px auto 0 auto;

    max-width: 1250px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .circle__content {
      position: absolute;

      display: flex;
      flex-direction: column;
      max-width: 250px;

      p {
        margin-bottom: 0 !important;
      }
      div {
        span {
          font-family: "OpenSans-Regular";
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 25px;
          color: #224f9e;
          margin-top: 50px;
        }
      }
      &:first-of-type {
        top: 96px;
        left: 47px;
        align-items: flex-start;

        p {
          text-align: left;
        }
      }
      &:nth-of-type(2) {
        bottom: 136px;
        left: 30px;
        align-items: flex-start;
        text-align: left;
      }
      &:nth-of-type(3) {
        top: 0;
        right: 100px;
        align-items: flex-end;
      }
      &:nth-of-type(4) {
        top: 266px;
        right: 0;
        align-items: flex-end;
      }
      &:nth-of-type(5) {
        right: 90px;
        bottom: 0;
        align-items: flex-start;
      }

      .counters {
        font-family: "OpenSans-Semibold";
        font-style: normal;
        font-weight: normal;
        font-size: 80px;
        line-height: 94px;
        text-align: right;
        color: #224f9e;
      }
      .titles {
        font-family: "OpenSans-Regular";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 25px;
        color: #233659;
      }
    }
    .inside__image {
      margin: 0 auto;
      max-width: 658px;
      width: 100%;
      max-height: 658px;
      height: auto;

      position: relative;
      .background_image {
        width: 100%;
        height: auto;

        animation: circle 15s linear infinite;

        @keyframes circle {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(90deg);
          }
        }
      }
      .back_image {
        position: absolute;
        top: 22%;
        left: 22%;

        width: 365px;
        height: 365px;

        border-radius: 50%;
        object-fit: cover;
      }
    }
    .circles {
      position: absolute;
      top: 13%;
      right: 22.5%;
    }
  }
  .adaptive_v {
    display: none;
  }
}
@media screen and (max-width: 1220px) {
  .Statistics {
    .circle {
      .circles {
        right: 20.5%;
      }
      .circle__content {
        &:nth-of-type(3) {
          right: 80px;
        }
      }
    }
  }
}
@media screen and (max-width: 1120px) {
  .Statistics {
    .circle {
      .circles {
        right: 19%;
      }
      .circle__content {
        &:nth-of-type(2) {
          left: 20px;
        }
        &:nth-of-type(3) {
          right: 40px;
        }
        &:nth-of-type(4) {
          right: 20px;
        }
      }
    }
  }
}
@media screen and (max-width: 1080px) {
  .Statistics {
    .circle {
      .circles {
        right: 16.5%;
      }
      .circle__content {
        .counters {
          font-size: 65px;
          line-height: 80px;
        }
        &:first-of-type {
          top: 75px;
          left: 25px;
        }
        &:nth-of-type(2) {
          align-items: flex-start;
          bottom: 120px;
          left: 40px;
        }
        &:nth-of-type(3) {
          right: 15px;
        }
      }
    }
  }
}
@media screen and (max-width: 960px) {
  .Statistics {
    padding: 80px 16px;
    .adaptive_v {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;

      margin-top: 40px;

      .adaptive_circle {
        position: relative;

        width: 330px;
        height: 330px;
        margin-bottom: 20px;

        display: flex;
        align-items: center;
        justify-content: center;
        .adaptive_background {
          position: absolute;
          top: 0;
          left: 0;

          animation: circle2 15s linear infinite;

          @keyframes circle2 {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(90deg);
            }
          }
        }
        .adaptive_back_image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
        }
      }
      .adaptive_content {
        display: flex;
        flex-direction: column;
        align-items: center;

        .adaptive_content__text {
          display: flex;
          flex-direction: column;
        }

        .blocks {
          display: flex;
          align-items: center;
          justify-content: flex-start;

          p {
            &:first-of-type {
              width: 44%;
              font-family: "OpenSans-Semibold";
              font-style: normal;
              font-weight: normal;
              font-size: 60px;
              line-height: 71px;
              color: #224f9e;
              margin-right: 16px;
              text-align: right;
            }
            &:last-of-type {
              font-family: "OpenSans-Regular";
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              line-height: 19px;
              color: #233659;
            }
          }
        }
      }
    }
    .desktop_v {
      display: none;
    }
    .text {
      margin: 0;
      padding-left: 10px;

      p {
        font-size: 24px;
        line-height: 29px;
      }
    }
  }
}
@media screen and (max-width: 395px) {
  .Statistics {
    .adaptive_v {
      .adaptive_content {
        .blocks {
          p {
            &:first-of-type {
              width: 60%;
              font-size: 50px;
              line-height: 60px;
            }
            &:last-of-type {
              margin-left: 20px;
            }
          }
        }
      }
    }
  }
}
</style>