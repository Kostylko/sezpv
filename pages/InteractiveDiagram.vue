<template>
  <div class="map__wrap">
<!--    <ul class="map__pointers">-->
<!--      <li class="pointer-1">-->
<!--        <em data-name="factory" id="startBtn">-->
<!--          <svg id="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">-->
<!--            &lt;!&ndash; Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) &ndash;&gt;-->
<!--            <path-->
<!--              d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"-->
<!--              fill="#2f4162"/>-->
<!--          </svg>-->
<!--        </em>-->
<!--        <span>Start</span>-->
<!--      </li>-->
<!--    </ul>-->
    <div class="scheme zoom-block">
      <div class="bg__map">
        <img src="../assets/images/map-gp.png" alt="" class="map__image">
      </div>
<!--      <div class="without-color"></div>-->
      <svg id="map__path" class="scheme__layout" viewBox="0 0 3072 2048"></svg>

      <ul class="map__pointers-detail">
        <li
          v-for="item of data"
          :key="item.id"
          class="section-0"
          :data-xAxis="item.left"
          :data-yAxis="item.top"
        >
          <em @click.self="togglePoints($event)" data-name="object-1">+</em>
          <span>{{ item.title }}</span>
          <div class="point__popup"
               :class="{'point__popup--insideBottom' : item.id === 204, 'point__popup--insideRight' : item.id === 36}">
            <div
              class="point__popup-close"
              @click.stop="togglePopup($event)"
            ></div>
            <h1 class="point__popup-title">
              <a href="#" class="point__popup-link">{{ item.title }}</a>
            </h1>
            {{ item.product }}
            <br/>
            {{ item.power }}
            <i v-if="item.email">
              <br/>
              <div class="point__popup-mail">{{ item.email }}</div>
              <br/>
              <div class="point__popup-phone">{{ item.phone }}</div>
            </i>
          </div>
        </li>
      </ul>
      <!-- <div class="scheme__card"></div> -->
    </div>
    <div class="hand-helper">
      <div class="hand-helper__wrap"></div>
      <span v-if="$i18n.locale === 'ru'">Перетащите для навигации</span>
      <span v-if="$i18n.locale === 'kz'">Шарлау үшін сүйреңіз</span>
      <span v-if="$i18n.locale === 'en'">Drag to navigate</span>
    </div>
    <nuxt-link tag="div" :to="localePath({ path: '/' })" class="zoom-out-ico">
      <span v-if="$i18n.locale === 'ru'">Закрыть</span>
      <span v-if="$i18n.locale === 'kz'">Жабу</span>
      <span v-if="$i18n.locale === 'en'">Close</span>
      <img src="../assets/images/icon-exit.svg" alt="">
    </nuxt-link>
  </div>
</template>

<script>
import {positionatePoints} from "~/utils/positionatePoints";
import {Map} from "~/utils/composables";

export default {
  async asyncData({$axios, params, i18n}) {
    params.lang = i18n.locale === 'en' ? 'en' : i18n.locale;
    const {data} = (await $axios.get(`projects?pagination=${41}`, {params})).data;
    return {
      data,
    };
  },
  data: () => ({data: null}),

  layout: "scheme",

  mounted() {
    this.onDocLoaded();

    this.data.map((item) => {
      console.log(item.id, "id");
      console.log(item.title, "title");
    });

    const header__wrap = document.querySelector(".header__wrapper");

    // const mapPointers = this.$el.querySelector(".map__pointers");
    // const withoutTexture = this.$el.querySelector(".without-color");
    // const pointDetails = this.$el.querySelector(".map__pointers-detail");

    const zoomBlock = this.$el.querySelector(".zoom-block");
    // const mapWrap = document.querySelector(".map__wrap");

    const mapSVG = this.$el.querySelector("#map__path");
    // const navigationBar = this.$el.querySelector(".hand-helper");
    // const zoomIcon = this.$el.querySelector(".zoom-out-ico");

    const initial = new Map(zoomBlock, mapSVG);

    // Decorating Map
    //Zoom In
    const mouseDownRef = Map.onMouseDown.bind(initial.getInstanceMap());
    const mouseUpRef = Map.onMouseUp.bind(initial.getInstanceMap());

    zoomBlock.addEventListener("mousedown", mouseDownRef);
    zoomBlock.addEventListener("touchstart", mouseDownRef);
    addEventListener("mouseup", mouseUpRef);
    addEventListener("touchend", mouseUpRef);

    const mapImg = document.querySelector('.map__image');
    const mapCenter = (mapImg.offsetWidth / 2) - (mapImg.offsetWidth / 4);

    zoomBlock.style.transform = `translate(-${mapCenter}px, -536px) scale(1.7) translateZ(0px)`;
    mapSVG.style.cursor = "grab";
    header__wrap.classList.add("hide__header");
    document.body.style.touchAction = 'none';

    // mapPointers.addEventListener("click", function (ev) {
    //   if (ev.target.dataset.name == "factory") {
    //     // zoomBlock.style.transform = "translate(-642px, -233px) scale(1.7) translateZ(0px)";
    //     const mapImg = document.querySelector('.map__image');
    //     const mapCenter = (mapImg.offsetWidth / 2) - (mapImg.offsetWidth / 4);
    //     zoomBlock.style.transform = `translate(-${mapCenter}px, -536px) scale(1.7) translateZ(0px)`;
    //     mapSVG.style.cursor = "grab";
    //
    //     zoomBlock.addEventListener("mousedown", mouseDownRef);
    //     zoomBlock.addEventListener("touchstart", mouseDownRef);
    //     addEventListener("mouseup", mouseUpRef);
    //     addEventListener("touchend", mouseUpRef);
    //
    //
    //     pointDetails.classList.add("show-up");
    //     withoutTexture.style.opacity = 0;
    //     this.style.opacity = 0;
    //     navigationBar.classList.add("show-navigate");
    //     this.style.display = "none";
    //     mapWrap.classList.add("zoomed");
    //     header__wrap.classList.add("hide__header");
    //     // ev.preventDefault();
    //     document.body.style.touchAction = 'none';
    //   }
    // });
    //
    // // Zoom Out
    //
    // zoomIcon.addEventListener("click", function () {
    //   zoomBlock.style.transitionDuration = "800ms";
    //   // zoomBlock.style.transform = "translate(-343px, -40px) scale(1.5) translateZ(0px)";
    //   zoomBlock.style.transform = "scale(1.5)";
    //   zoomBlock.removeEventListener("mousedown", mouseDownRef);
    //   zoomBlock.removeEventListener("touchstart", mouseDownRef);
    //   removeEventListener("mouseup", mouseUpRef);
    //   removeEventListener("touchend", mouseUpRef);
    //   pointDetails.classList.remove("show-up");
    //   withoutTexture.style.opacity = 1;
    //   mapSVG.style.cursor = "auto";
    //   navigationBar.classList.remove("show-navigate");
    //   mapPointers.style.display = "block";
    //   mapPointers.style.opacity = 1;
    //   mapWrap.classList.remove("zoomed");
    //   header__wrap.classList.remove("hide__header");
    // });

    // Over effect points

    // pointDetails.addEventListener("mouseover", function (ev) {
    //   if (ev.toElement?.nodeName === "EM") {
    //     // enter twice
    //     ev.toElement.nextElementSibling.classList.add("shrink");
    //     ev.toElement.style.transform = "scale(1.3) translateZ(0)";
    //   }
    //   if (ev.fromElement?.nodeName === "EM") {
    //     ev.fromElement.nextElementSibling.tagName === "SPAN" &&
    //       ev.fromElement.nextElementSibling.classList.remove("shrink");
    //     ev.fromElement.tagName === "EM"
    //       ? (ev.fromElement.style.transform = "scale(1) translateZ(0)")
    //       : "";
    //   }
    // });

  },

  updated() {
    const pointers = this.$el.querySelectorAll(".section-0");
    pointers &&
    pointers.forEach((point) => {
      point.style.top = point.dataset.yaxis;
      point.style.left = point.dataset.xaxis;
    });
  },

  methods: {
    async onDocLoaded() {
      if (this.data) {
        for (let i = 201; i <= 206; i++) {
          this.data.push({id: i});
        }
      }
      await positionatePoints(this.data);
      // const additionalPoint = Object.assign(
      //   {},
      //   this.data && this.data.find((i) => i.id == 73)
      // );
      // additionalPoint["top"] = "310px";
      // additionalPoint["left"] = "776px";
      // additionalPoint["id"] = Math.random() * (additionalPoint.id - 1) + 1;
      // this.data && this.data.push(additionalPoint);

      // setTimeout(this.clickStart, 2000);
    },
    // clickStart() {
    //   document.querySelector('#startBtn').click()
    // },
    togglePopup(ev) {
      console.log(ev);
      ev.target.classList.contains("point__popup-close") &&
      ev.target.parentElement.parentNode.classList.remove("opened");
    },
    togglePoints(ev) {
      const pointDetails = this.$el.querySelector(".map__pointers-detail");
      pointDetails.childNodes.forEach((el) => {
        if (el.nodeName === "LI")
          el.classList.contains("opened")
            ? el.classList.remove("opened")
            : null;
      });
      ev.target.nodeName === "EM" &&
      ev.target.parentNode.classList.add("opened");
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");

.map__wrap {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  //backface-visibility: hidden;
  //-webkit-backface-visibility: hidden;
  //transform-style: preserve-3d;
  //-webkit-transform-style: preserve-3d;
  //transform: translateZ(0);
  //-webkit-transform: translateZ(0);
  .show-navigate {
    transform: translateY(0);
    visibility: visible;
  }

  .zoom-out-ico {
    opacity: 1;
    transition: all 0.4s ease-in-out, visibility 0s ease-in-out 0s;
    visibility: visible;
    transform: translateY(-30px);
  }
}

.map__pointers {
  position: absolute;
  list-style: none;
  left: 50%;
  top: 50%;
  z-index: 10;
  transform: translate(-50%, -50%, 0);
  -webkit-transform: translate(-50%, -50%, 0);
  opacity: 1;
  transition-duration: 800ms;
  //backface-visibility: hidden;
  //-webkit-backface-visibility: hidden;
  //transform-style: preserve-3d;
  //-webkit-transform-style: preserve-3d;
  li {
    position: absolute;
    color: #233659;
    text-transform: uppercase;
    font-size: 18px;
    cursor: pointer;
    //padding: 22px;
    //margin: 0 -10px;
    transition: all 0.4s ease-in-out;
    transform-origin: left center;
    display: flex;
    align-items: center;
    z-index: 10;
    //backface-visibility: hidden;
    //-webkit-backface-visibility: hidden;
    //transform: translateZ(0);
    //-webkit-transform: translateZ(0);
    //transform-style: preserve-3d;
    //-webkit-transform-style: preserve-3d;
  }

  & > li em {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: -webkit-linear-gradient(top, #b53a57, #eb2a84);
    filter: none;
    box-shadow: 0 0 0 13px rgb(0 0 0 / 10%);
    //position: absolute;
    //left: 15px;
    //top: 16px;
    border-radius: 100%;
    transition: all 0.4s cubic-bezier(0.16, 0.28, 0.38, 1.8);
    float: left;
    margin: 13px;
    line-height: 38px;
    text-align: center;
    color: #fff;
    z-index: 5;
    font-size: 27px;
    font-style: normal;
    box-shadow: 0 0 0 7px rgb(0, 0, 0, 10%);
    //backface-visibility: hidden;
    //-webkit-backface-visibility: hidden;
    //transform: translateZ(0);
    //-webkit-transform: translateZ(0);
    //transform-style: preserve-3d;
    //-webkit-transform-style: preserve-3d;
  }

  & > li span {
    left: -9;
    padding: 0;
    //position: absolute;
    overflow: hidden;
    border-radius: 40px;
    height: 52px;
    line-height: 52px;
    vertical-align: middle;
    white-space: nowrap;
    transition: all 0.3s ease-in-out, opacity 0.4s ease-in-out;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    background: transparent;
    font-size: 20px;
    //backface-visibility: hidden;
    //-webkit-backface-visibility: hidden;
    //transform: translateZ(0);
    //-webkit-transform: translateZ(0);
    //transform-style: preserve-3d;
    //-webkit-transform-style: preserve-3d;
  }

  .pointer-1 {
    //top: 377px;
    //left: 660px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    //backdrop-filter: blur(6px);
    //border-radius: 10px;
    //backface-visibility: hidden;
    //-webkit-backface-visibility: hidden;
    //transform-style: preserve-3d;
    //-webkit-transform-style: preserve-3d;
  }

  .pointer-2 {
    top: 300px;
    left: 688px;
    //backface-visibility: hidden;
    //-webkit-backface-visibility: hidden;
    //transform: translateZ(0);
    //-webkit-transform: translateZ(0);
    //transform-style: preserve-3d;
    //-webkit-transform-style: preserve-3d;
  }
}

.map__pointers-detail {
  position: absolute;
  left: 0;
  top: 0;
  //opacity: 0;
  list-style: none;
  transition: opacity ease-in 0.5s;
  //visibility: hidden;
  visibility: visible;
  opacity: 1;
  //backface-visibility: hidden;
  //-webkit-backface-visibility: hidden;
  //transform: translateZ(0);
  //-webkit-transform: translateZ(0);
  //transform-style: preserve-3d;
  //-webkit-transform-style: preserve-3d;
  li.opened .point__popup {
    opacity: 1;
    visibility: visible;
    transform: scale(1) translateZ(0);
    -webkit-transform: scale(1) translateZ(0);
    //display: block;
    //backface-visibility: hidden;
    //-webkit-backface-visibility: hidden;
    //transform-style: preserve-3d;
    //-webkit-transform-style: preserve-3d;
  }

  li {
    position: absolute;
    color: #233659;
    height: 20px;
    padding-left: 5px;
    padding-top: 5px;
    font-size: 0.437rem;
    cursor: pointer;
    // padding: 22px;
    // margin: 0 -10px;
    transition: all 0.4s ease-in-out;
    transform-origin: left center;
    //backface-visibility: hidden;
    //-webkit-backface-visibility: hidden;
    //transform: translateZ(0);
    //-webkit-transform: translateZ(0);
    //transform-style: preserve-3d;
    //-webkit-transform-style: preserve-3d;
    .shrink {
      padding: 0;
      opacity: 0;
      left: 0;
    }

    .stretch {
      padding: 9px 12px 9px 41px;
      opacity: 1;
    }

    em {
      font-style: normal;
      position: absolute;
      text-align: center;
      height: 15px;
      transform-origin: center center;
      transition: transform ease 0.5s;
      width: 15px;
      line-height: 15px;
      text-transform: uppercase;
      font-size: 0.72rem;
      background: -webkit-linear-gradient(top, #b53a57, #eb2a84);
      filter: none;
      border-radius: 100%;
      color: #fff;
      animation: point-anim 5s ease-in-out infinite;
      //animation-name: point-anim;
      //animation-duration: .2s;
      //animation-timing-function: ease;
      //animation-iteration-count: infinite;
      z-index: 5;
      margin-top: 2.5px;
      //backface-visibility: hidden;
      //-webkit-backface-visibility: hidden;
      //transform: translateZ(0);
      //-webkit-transform: translateZ(0);
      //transform-style: preserve-3d;
      //-webkit-transform-style: preserve-3d;

      &:hover {
        & + span {
          padding: 0;
          opacity: 0;
          left: 0;
        }
      }
    }

    span {
      white-space: nowrap;
      position: relative;
      height: 36px;
      line-height: 36px;
      top: 10px;
      left: 10px;
      transform-origin: 0 0;
      transition: padding ease-in-out 0.5s, opacity ease-in-out 0.3s,
      left ease 0.3s;
      font-family: "Open Sans", sans-serif;
      font-weight: 700;
      padding: 5px 6px 5px 25px;
      background: rgba(255, 255, 255, 0.75);
      border-radius: 30px;
      vertical-align: text-top;
      left: -5px;
      top: -8.5px;
      text-transform: uppercase;
      //backface-visibility: hidden;
      //transform: translateZ(0);
      -webkit-font-smoothing: subpixel-antialiased;
      //-webkit-backface-visibility: hidden;
      //-webkit-transform: translateZ(0);
      //transform-style: preserve-3d;
      //-webkit-transform-style: preserve-3d;
    }
  }
}

.point__popup {
  // background: -webkit-linear-gradient(top, #b53a57, #ff4ca0);
  background: #b53a57;
  transform-origin: left top;
  text-align: left;
  line-height: normal;
  color: #fcfcfc;
  font-weight: normal;
  font-size: 0.437rem;
  line-height: 13px;
  position: absolute;
  width: 250px;
  border-radius: 10px;
  padding: 40px;
  //transform: scale(0) translateZ(0) !important;
  //-webkit-transform: scale(0) translateZ(0) !important;
  opacity: 0;
  visibility: hidden;
  //display: none;
  left: -5px;
  top: 0;
  transition: all 0.4s ease-in-out;
  z-index: 21;
  cursor: default;
  //backface-visibility: hidden;
  //-webkit-backface-visibility: hidden;
  //transform-style: preserve-3d;
  //-webkit-transform-style: preserve-3d;
  &-mail {
    display: inline-block;
    position: relative;
    padding-left: 15px;
    margin: 5px 0;

    &::before {
      content: "";
      position: absolute;
      background: center / contain no-repeat url("@/assets/images/mail.png");
      height: 10px;
      width: 10px;
      left: 0px;
      top: 0px;
      display: inline-block;
    }
  }

  &-phone {
    display: inline-block;
    position: relative;
    padding-left: 15px;

    &::before {
      content: "";
      position: absolute;
      background: center / contain no-repeat url("@/assets/images/phone.png");
      height: 10px;
      width: 10px;
      left: 0px;
      top: 0px;
      display: inline-block;
    }
  }

  &-close {
    display: inline;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    background: center / cover no-repeat url("@/assets/images/icon-exit.svg");
    height: 16px;
    width: 16px;
  }

  &-title {
    font-size: 0.7rem;
    line-height: 21px;
    text-transform: uppercase;
    font-weight: bold;
    width: 170px;

    & > a {
      border-bottom: 1px solid #fff;
    }
  }

  &-link {
    color: #fcfcfc;
  }

  &--insideBottom {
    bottom: -5px;
    top: unset;
    transform-origin: left bottom;
  }

  &--insideRight {
    left: unset;
    right: 0;
    transform-origin: top right;
  }

  @media only screen and (max-width: 767px) {
    width: 200px;
    padding: 10px;

    &-close {
      top: 10px;
      right: 10px;
      width: 12px;
      height: 12px;
    }
  };
}

.hand-helper {
  position: fixed;
  left: 20px;
  bottom: 30px;
  z-index: 10;
  font-size: 20px;
  color: #2f3488;
  padding: 20px 50px 20px 90px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 8px;
  //transform: translateY(200px) translateZ(0);
  -webkit-transform: translateY(200px) translateZ(0);
  //visibility: hidden;
  transform: translateY(0);
  visibility: visible;
  transition: all 0.5s ease-in-out, visibility 0s ease-in-out 0s;
  //backface-visibility: hidden;
  //-webkit-backface-visibility: hidden;
  //transform-style: preserve-3d;
  //-webkit-transform-style: preserve-3d;
  &__wrap {
    background: url("@/assets/images/hand-sprite.svg") 0 0 no-repeat;
    animation: hand-anim 1.7s steps(15) infinite 0.7s;
    position: absolute;
    left: 12px;
    top: 6px;
    width: 32px;
    height: 45px;
  }

  @media only screen and (max-width: 769px) {
    padding: 0;
    display: flex;
    align-items: center;
    width: 70px;
    height: 60px;
    padding: 0;

    &__wrap {
      position: unset;
    }
    span {
      display: none;
    }
  };
}

.zoom-out-ico {
  position: fixed;
  right: 20px;
  bottom: 20px;
  //width: 40px;
  height: 40px;
  z-index: 300;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transform: translateY(100px);
  -webkit-transform: translateY(100px);
  background: -webkit-linear-gradient(top, #b53a57, #ff4ca0);
  border-radius: 4px;
  box-shadow: 0 2px 5px rgb(0 0 0 / 30%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  color: #ffffff;
  img {
    width: 20px;
    height: 20px;
    margin-left: 5px;
  }

  //&::after {
  //  position: absolute;
  //  content: "";
  //  display: block;
  //  background: url("@/assets/images/ico-set.svg") -194px 0 no-repeat;
  //  left: 0;
  //  top: 0;
  //  width: 100%;
  //  height: 100%;
  //}

  @media (hover: none) {
    bottom: 65px;
  }
}

@keyframes hand-anim {
  0% {
    background-position: 0 0;
  }
  25% {
    background-position: 0 0;
    transform: translateX(30px);
  }
  50% {
    background-position: 0 -745px;
    transform: translateX(30px);
  }
  75% {
    background-position: 0 -745px;
    transform: translateX(0px);
  }
  100% {
    background-position: 0 0;
    transform: translateX(0px);
  }
}

@keyframes point-anim {
  0% {
    box-shadow: 0 0 0 0px rgba(255, 0, 119, 80%);
  }
  15%, 100% {
    box-shadow: 0 0 0 4px transparent;
  }
}

.zoomed {
  .zoom-out-ico {
    opacity: 1;
    transition: all 0.4s ease-in-out, visibility 0s ease-in-out 0s;
    visibility: visible;
    transform: translateY(-30px);
  }
}

.bg__map {
  position: absolute;
  top: 0;
  left: 0;
  width: 1920px;
  //width: 3264px;
  height: 100%;
  //background: url("@/assets/images/map-gp.png") fixed center no-repeat;
  background-size: cover;
  //backface-visibility: hidden;
  //-webkit-backface-visibility: hidden;
  //transform: translateZ(0);
  //-webkit-transform: translateZ(0);
  //transform-style: preserve-3d;
  //-webkit-transform-style: preserve-3d;

  img {
    width: 100%;
    height: unset;
    position: absolute;
    top: 0;
    left: 0;
    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
    //backface-visibility: hidden;
    //-webkit-backface-visibility: hidden;
    //transform: translateZ(0);
    //-webkit-transform: translateZ(0);
    //transform-style: preserve-3d;
    //-webkit-transform-style: preserve-3d;
  }
}

.without-color {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("@/assets/images/without__texture.png") center center no-repeat;
  background-size: cover;
  //backface-visibility: hidden;
  //transform: translateZ(0);
  transition-duration: 0.4s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  //transform-style: preserve-3d;
  //-webkit-transform-style: preserve-3d;
}

.zoom-block {
  transform-origin: 0px 0px;
  transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
  transition-duration: 800ms;
  //transform: translate(-343px, -40px) scale(1.5) translateZ(0px);
  transform: scale(1.5) translateZ(0);
  will-change: transform;
  user-select: none;
  text-size-adjust: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-transform-style: preserve-3d;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
  //backface-visibility: hidden;
  //-webkit-backface-visibility: hidden;
  -webkit-transform: scale(1.5) translateZ(0);
  //transform-style: preserve-3d;
  //-webkit-transform-style: preserve-3d;
}

.scheme {
  position: absolute;
  left: 0;
  top: 0;
  width: 1920px;
  //width: 3264px;
  height: 1280px;
  //overflow: hidden;
  display: block;
  //backface-visibility: hidden;
  //-webkit-backface-visibility: hidden;
  //transform: translateZ(0);
  //-webkit-transform: translateZ(0);
  //transform-style: preserve-3d;
  //-webkit-transform-style: preserve-3d;
  //
  //& * {
  //  backface-visibility: hidden;
  //  -webkit-backface-visibility: hidden;
  //  transform: translateZ(0);
  //  -webkit-transform: translateZ(0);
  //  transform-style: preserve-3d;
  //  -webkit-transform-style: preserve-3d;
  //}

  .show-up {
    visibility: visible;
    opacity: 1;
    //backface-visibility: hidden;
    //-webkit-backface-visibility: hidden;
    //transform: translateZ(0);
    //-webkit-transform: translateZ(0);
    //transform-style: preserve-3d;
    //-webkit-transform-style: preserve-3d;
  }

  // &__image {
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   width: 100%;
  //   height: 100%;
  //   object-fit: contain;
  //   z-index: 3;
  // }
  &__layout {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    //backface-visibility: hidden;
    //-webkit-backface-visibility: hidden;
    //transform: translateZ(0);
    //-webkit-transform: translateZ(0);
    //transform-style: preserve-3d;
    //-webkit-transform-style: preserve-3d;
  }

  &__building {
    opacity: 0.5;
  }

  &__building:hover {
    opacity: 0.9;
  }

  &__card {
    position: absolute;
    background: #fff;
    width: 300px;
    height: 450px;
    box-shadow: 15px 20px 30px #ccc;
    right: 50px;
    bottom: calc(50% - 20px);
    display: none;
    //backface-visibility: hidden;
    //-webkit-backface-visibility: hidden;
    //transform: translateZ(0);
    //-webkit-transform: translateZ(0);
    //transform-style: preserve-3d;
    //-webkit-transform-style: preserve-3d;
  }
}

#play {
  width: 18px;
  height: 18px;
  margin-left: 6px;
  pointer-events: none;
}

.section-0 {
  //z-index: -1;
  //& * {
  //  backface-visibility: hidden;
  //  -webkit-backface-visibility: hidden;
  //  transform: translateZ(0);
  //  -webkit-transform: translateZ(0);
  //  transform-style: preserve-3d;
  //  -webkit-transform-style: preserve-3d;
  //}
}
</style>
