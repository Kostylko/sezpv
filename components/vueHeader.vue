<template>
  <div class="main">
    <div v-if="menu" class="backdrop"></div>
    <div class="Header__content">
      <div class="Header">
        <div class="logo">
          <nuxt-link :to="localePath('/')">
            <img src="@/assets/images/Header/logo.svg" />
            <p>{{ $t("title") }}</p>
          </nuxt-link>
        </div>
        <div class="nav">
          <nuxt-link
            :to="localePath({ path: '/', hash: '#Benefits' })"
            v-scroll-to="{
              element: '#Benefits',
              easing: 'ease-in',
              lazy: true,
              offset: 0,
              force: true,
              cancelable: true,
            }"
            >{{ $t("benefits") }}</nuxt-link
          >
          <nuxt-link
            :to="localePath('/News')"
            :class="{ eng_text: $i18n.locale == 'en' }"
            >{{ $t("news") }}</nuxt-link
          >
          <nuxt-link :to="localePath('/About')">{{ $t("about") }}</nuxt-link>
          <nuxt-link :to="localePath('/Contacts')">{{
            $t("contacts")
          }}</nuxt-link>
        </div>
        <div class="menu">
          <v-tooltip bottom color="#39393A">
            <template v-slot:activator="{ on, attrs }">
              <div class="weather" v-bind="attrs" v-on="on">
                <img src="@/assets/images/Header/cloudy 1.svg" />
                <p>{{ weather_count }}°C</p>
              </div>
            </template>
            <span>Pavlodar</span>
          </v-tooltip>
          <div class="language" v-click-outside="onClickOutside">
            <div
              class="selectedLang"
              @click="openLang = !openLang"
              :class="{ openedLang: openLang == true }"
            >
              {{
                $i18n.locale == "ru" ? "RU" : $i18n.locale == "en" ? "EN" : "KZ"
              }}
            </div>
            <div class="listLang" v-if="openLang">
              <p
                v-for="(lang, idx) in itemsLang"
                :key="idx"
                @click="selectLang(lang)"
              >
                {{ lang }}
              </p>
            </div>
          </div>
          <svg
            class="burger_img"
            @click.stop="showMenu"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="5" width="30" height="3" rx="1.5" fill="#224F9E" />
            <rect y="13" width="30" height="3" rx="1.5" fill="#224F9E" />
            <rect y="21" width="30" height="3" rx="1.5" fill="#224F9E" />
          </svg>
        </div>
      </div>
    </div>
    <transition name="burger_menu">
      <div
        v-if="menu"
        class="menu-burger"
        :class="{ active: menu == true, deactive: menu == false }"
      >
        <div ref="menuBurger" v-click-outside="OutsideClick" class="menu-burger--content" :class="{'menu__burger--offset': offset}" >
          <svg
            @click="closeMenu"
            class="close"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3422 10.9937L20.5029 3.84958C20.8165 3.536 20.9927 3.1107 20.9927 2.66723C20.9927 2.22375 20.8165 1.79845 20.5029 1.48487C20.1893 1.17129 19.764 0.995117 19.3206 0.995117C18.8771 0.995117 18.4518 1.17129 18.1382 1.48487L10.9941 8.64563L3.84998 1.48487C3.5364 1.17129 3.1111 0.995117 2.66763 0.995117C2.22416 0.995117 1.79885 1.17129 1.48527 1.48487C1.17169 1.79845 0.995518 2.22375 0.995518 2.66723C0.995518 3.1107 1.17169 3.536 1.48527 3.84958L8.64603 10.9937L1.48527 18.1378C1.32918 18.2926 1.20529 18.4768 1.12075 18.6797C1.0362 18.8827 0.992676 19.1003 0.992676 19.3202C0.992676 19.54 1.0362 19.7577 1.12075 19.9606C1.20529 20.1635 1.32918 20.3477 1.48527 20.5025C1.64008 20.6586 1.82426 20.7825 2.02719 20.867C2.23012 20.9516 2.44779 20.9951 2.66763 20.9951C2.88746 20.9951 3.10513 20.9516 3.30806 20.867C3.51099 20.7825 3.69517 20.6586 3.84998 20.5025L10.9941 13.3418L18.1382 20.5025C18.293 20.6586 18.4772 20.7825 18.6801 20.867C18.8831 20.9516 19.1007 20.9951 19.3206 20.9951C19.5404 20.9951 19.7581 20.9516 19.961 20.867C20.1639 20.7825 20.3481 20.6586 20.5029 20.5025C20.659 20.3477 20.7829 20.1635 20.8674 19.9606C20.952 19.7577 20.9955 19.54 20.9955 19.3202C20.9955 19.1003 20.952 18.8827 20.8674 18.6797C20.7829 18.4768 20.659 18.2926 20.5029 18.1378L13.3422 10.9937Z"
              fill="#B53A57"
            />
          </svg>
          <h2>{{ $t("menu") }}</h2>
          <a
            :href="localePath(item.url)"
            v-for="(item, index) in items"
            :key="index"
            @click="goToInner"
          >
            {{ item.title }}
          </a>
          <a @click="goToNews" class="adaptive_links">
            {{ $t("news") }}
          </a>
          <a @click="goToAbout" class="adaptive_links">
            {{ $t("about") }}
          </a>
          <a @click="goToContacts" class="adaptive_links">
            {{ $t("contacts") }}
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>


<i18n>
{
  "en": {
    "menu": "MENU",
    "projects": "Projects",
    "scheme": "Interactive Diagram",
    "managment": "Managment",
    "faq": "Memo to investors",
    "compliance": "Compliance",
    "supply": "To the consumer",
    "vacancy": "Vacancies",
    "benefits": "Benefits",
    "news": "News",
    "about": "About Us",
    "contacts": "Contacts",
    "title": "Special Economic Zone “Pavlodar”"
  },
  "kz": {
    "menu": "Мәзір",
    "projects": "Жобалар",
    "scheme": "Интерактивті схема",
    "managment": "Басшылық",
    "faq": "Инвесторларға жадынама",
    "compliance": "Сәйкестік қызметі",
    "supply": "Тұтынушыға",
    "vacancy": "Бос орындар",
    "benefits": "Жеңілдіктер",
    "news": "Жаңалықтар",
    "about": "Біз туралы",
    "contacts": "Байланыстар",
    "title": "“Павлодар” арнайы экономикалық аймағы"
  },
  "ru": {
    "menu": "МЕНЮ",
    "projects": "Проекты",
    "scheme": "Интерактивная схема",
    "managment": "Руководство",
    "faq": "Памятка инвесторам",
    "compliance": "Комплаенс служба",
    "supply": "Потребителю",
    "vacancy": "Вакансии",
    "benefits": "Льготы",
    "news": "Новости",
    "about": "О Нас",
    "contacts": "Контакты",
    "title": "Специальная экономическая зона “Павлодар”"
  }
}
</i18n>

<script>
import ClickOutside from "vue-click-outside";

export default {
  props: ['offset'],
  data: () => ({
    defaultItem: "RU",
    itemsLang: ["RU", "KZ", "EN"],
    openLang: false,
    menu: false,
    weather_temp: null,
    weather_count: null,
  }),
  created() {
    this.loadTemp();
  },
  computed: {
    items() {
      return [
        {
          title: this.$t("projects"),
          url: "/Projects",
        },
        {
          title: this.$t("scheme"),
          url: "/InteractiveDiagram",
        },
        {
          title: this.$t("faq"),
          url: "/Faq",
        },
        {
          title: this.$t("compliance"),
          url: "/Compliance",
        },
        {
          title: this.$t("supply"),
          url: "/Supply",
        },
        {
          title: this.$t("managment"),
          url: "/Managment",
        },
        {
          title: this.$t("vacancy"),
          url: "/Vacancy",
        },
      ];
    },
  },
  methods: {
    goToInner() {
      this.menu = false;
      this.$emit("showMenu", this.menu);
    },
    goToContacts() {
      this.menu = false;
      this.$emit("showMenu", this.menu);
      this.$router.push(
        this.localePath({
          path: "/Contacts",
        })
      );
    },
    goToAbout() {
      this.menu = false;
      this.$emit("showMenu", this.menu);
      this.$router.push(
        this.localePath({
          path: "/About",
        })
      );
    },
    goToNews() {
      this.menu = false;
      this.$emit("showMenu", this.menu);
      this.$router.push(
        this.localePath({
          path: "/News",
        })
      );
    },
    onClickOutside() {
      this.openLang = false;
    },
    loadTemp() {
      this.$axios
        .get(`parts`)
        .then((res) => {
          this.weather_temp = JSON.parse(
            res.data.data.weather.value
          ).temperature;
          this.weather_count = this.weather_temp.toFixed();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    showMenu() {
      this.menu = true;
      this.$emit("showMenu", this.menu);
    },
    closeMenu() {
      this.menu = false;
      this.$emit("showMenu", false);
      this.$store.commit("setVisibility", false);
    },
    selectLang(lang) {
      if (this.defaultItem == lang) return;
      this.openLang = false;
      this.defaultItem = lang;
      lang = lang.toLowerCase();
      if (this.$route.path != this.switchLocalePath(lang)) {
        this.$router.replace(this.switchLocalePath(lang));
      }
    },
    local() {
      let lang = this.$i18n.locale.toUpperCase();
      if (lang != this.defaultItem) {
        this.defaultItem = lang;
        this.selectLang(this.defaultItem);
      }
    },
    OutsideClick() {
      this.menu = false;
      this.$emit("showMenu", false);
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style lang="scss" scoped>
.eng_text {
  margin-right: 20px !important;
}
.backdrop {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.38);
  backdrop-filter: blur(4px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  clear: both;
}
.main {
  z-index: 4;
  position: relative;
  padding: 20px 20px 0 20px;

  width: 100%;
  .active {
    // background: rgba(0, 0, 0, 0.38);
    // backdrop-filter: blur(4px);
    z-index: 11;
    .menu-burger--content {
      transform: translateX(0%);
    }
    .menu__burger--offset{
      transform: translateX(0) translateY(-20px);
    }
  }
  .deactive {
    z-index: -1;
    .menu-burger--content {
      transform: translateX(100%);
    }
  }
}

.menu-burger {
  z-index: 9999 !important;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: flex-end;

  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  margin-left: auto !important;
  transition: 0.5s;
  &--content {
    position: relative;
    max-width: 720px;
    height: 100vh;
    width: 100%;

    background: #fff;

    display: flex;
    flex-direction: column;
    padding: 120px 85px 0 120px;
    transform: translateX(100%);
    transition: 0.5s;
    svg {
      position: absolute;
      top: 85px;
      right: 85px;

      cursor: pointer;
    }

    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 50px;
      text-transform: uppercase;
      color: #224f9e;
      margin-bottom: 30px;
    }
    a {
      margin-bottom: 30px;
      font-family: "OpenSans-Regular";
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      color: #233659;
      transition: 0.2s;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
    .adaptive_links {
      display: none;
      margin-bottom: 30px;
      font-family: "OpenSans-Regular";
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 18px;
      color: #233659;
      transition: 0.2s;
    }
    a:hover {
      font-family: "OpenSans-Medium";
      font-size: 24px;
      line-height: 28px;
      color: #224f9e;
    }
  }
}
.Header__content {
  max-width: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 10px 30px 0 rgba(138, 149, 158, 0.1);

  background: #fff;
  border-radius: 10px;
}
.Header {
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  width: 100%;
  height: 70px;
  padding: 15px 0;

  .logo {
    a {
      display: flex;
      align-items: center;

      p {
        font-family: "Gilroy-Semibold";
        color: #224f9e;
        font-weight: 600;
        max-width: 330px;
        font-size: 18px;
        line-height: 21px;
        width: 100%;
        margin-bottom: 0 !important;
        text-transform: uppercase;

        margin-left: 10px;
      }
    }
  }
  .nav {
    max-width: 387px;
    width: 100%;

    display: flex;
    align-items: center;

    a {
      font-family: "OpenSans-Semibold";
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16.48px;
      text-transform: uppercase;
      color: #233659;
      margin-right: 50px;
      width: 100%;
      white-space: nowrap;
      transition: 0.22s;

      &:first-of-type {
        max-width: 54px;
      }
      &:nth-of-type(2) {
        max-width: 68px;
      }
      &:nth-of-type(3) {
        max-width: 44px;
      }
      &:last-of-type {
        max-width: 71px;
        margin-right: 0;
      }
    }
    a:hover {
      color: #224f9e;
      font-size: 16px;
      line-height: 19px;
    }
  }
  .menu {
    display: flex;
    align-items: center;

    max-width: 253px;
    width: 100%;
    .weather {
      display: flex;
      align-items: center;

      cursor: default;

      margin-right: 40px;

      p {
        font-family: "OpenSans-Semibold";
        margin-left: 2px;
        margin-bottom: 0 !important;
        font-size: 14px;
        line-height: 16.48px;
        color: #224f9e;
        font-weight: normal;
      }
    }
    .language {
      position: relative;
      width: 100%;
      max-width: 70px;
      height: 38px;
      margin-right: 32px;
      .selectedLang {
        display: flex;
        align-items: center;

        width: 100%;
        height: 100%;

        background: #fff;
        border-radius: 6px;
        border: 2px solid #224f9e;

        font-family: "OpenSans-Regular";

        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #224f9e;

        padding: 11px 8px;
        z-index: 20;
        cursor: pointer;
        &:after {
          position: absolute;
          background: url("@/assets/images/Faq/Arrow - Down 2.svg");
          content: "";
          top: 8px;
          right: 8px;
          width: 22px;
          height: 22px;
          transition: 0.3s;
        }
      }
      .openedLang {
        &:after {
          transform: rotate(180deg) !important;
        }
      }
      .listLang {
        position: absolute;
        top: 80%;
        width: 100%;
        z-index: 7 !important;

        padding: 11px 8px;
        border: 2px solid #224f9e;
        background: #fff;
        border-radius: 0px 0px 16px 16px;

        z-index: -1;
        transition: 0.3s;
        p {
          font-weight: normal;
          font-size: 14px;
          line-height: 16px;
          color: #224f9e;
          cursor: pointer;

          margin-bottom: 5px !important;
          &:last-child {
            margin-bottom: 0px !important;
          }
          &:hover {
            color: #ff575f;
          }
        }
      }
    }
    .burger_img {
      cursor: pointer;
    }
  }
}

.burger_menu-enter-active,
.burger_menu-leave-active {
  transition: 0.33;
}
.burger_menu-enter,
.burger_menu-leave-to {
  transform: translateX(100%);
}
@media screen and (max-width: 1440px) {
  .Header {
    padding: 15px 60px;
  }
}
@media screen and (max-width: 1230px) {
  .Header {
    padding: 15px 20px;
    .logo {
      a {
        p {
          line-height: 18px;
        }
      }
    }
    .nav {
      a {
        margin-right: 45px;
      }
    }
  }
}
@media screen and (max-width: 1070px) {
  .Header {
    .nav {
      max-width: 355px;
      a {
        &:first-of-type {
          max-width: 40px;
        }
        &:nth-of-type(2) {
          max-width: 40px;
        }
        &:nth-of-type(3) {
          max-width: 44px;
          margin-right: 30px;
        }
        &:last-of-type {
          max-width: 71px;
          margin-right: 0;
        }
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .main {
    padding: 8px;
  }
  .Header {
    height: 60px;
    padding: 10px 8px;
    .nav {
      display: none;
    }
  }
  .menu-burger {
    &--content {
      .adaptive_links {
        display: block;
      }
    }
  }
}
@media screen and (max-width: 685px) {
  .Header {
    .logo {
      p {
        display: none;
      }
    }
    .menu {
      max-width: unset;
      justify-content: flex-end;

      .weather {
        margin-right: 16px;
      }
      .language {
        margin-right: 16px;
      }
    }
  }
  .menu-burger {
    &--content {
      max-width: 359px;

      padding: 80px 29px 0 60px;

      svg {
        top: 29px;
        right: 29px;
      }
      h2 {
        font-size: 24px;
        line-height: 29px;
      }
      a {
        font-size: 16px;
        line-height: 18px;
      }
      a:hover {
        font-size: 22px;
        line-height: 25px;
      }
    }
  }
}
</style>
