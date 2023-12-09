<template>
  <v-app>
    <div :class="{ hidden: menu == true || isScroll }">
      <div class="pages-content">
        <div
          class="pages"
          :class="{ first_page: index == 1, inside: !$route.query.id }"
        >
          <div v-if="index == 1" class="video">
            <video
              loop
              muted
              autoplay
              frameborder="0"
              allowfullscreen
              disabled
              src="@/assets/videos/video.mp4"
              type="video/mp4"
            ></video>
          </div>
          <News class="News" v-if="index == 2" />
          <managment class="Managment" v-else-if="index == 3" />
          <about-page class="About" v-else-if="index == 4" />
          <contacts class="Contacts" v-else-if="index == 5" />
          <Project class="Projects" v-else-if="index == 6" />
          <faq class="Faq" v-else-if="index == 7" />
          <compliance class="Compliance" v-else-if="index == 10" />
          <supply class="Supply" v-else-if="index == 11" />
          <vacancy class="Vacancy" v-else-if="index == 12" />
          <interactive class="Scheme" v-else-if="index == 8" />
          <vue-header @showMenu="showMenu" />
          <bread-crumbs
            class="breadCrumbs"
            v-if="index != 1 && index != 9"
            :qwe="all"
          />

          <div class="currency_block">
            <div class="currency_text">
              <div class="currency" v-if="index == 1">
                <div class="currency--top">
                  <h4>{{ $t("currency") }}</h4>
                </div>
                <div class="currency--bottom">
                  <div class="currency--bottom--content">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.792 21.5861H17.4587C17.7631 21.5913 18.0655 21.5358 18.3482 21.4229C18.631 21.31 18.8884 21.1419 19.1055 20.9285C19.3226 20.715 19.4951 20.4605 19.6128 20.1797C19.7305 19.899 19.7911 19.5975 19.7911 19.2931C19.7911 18.9886 19.7305 18.6872 19.6128 18.4064C19.4951 18.1257 19.3226 17.8711 19.1055 17.6577C18.8884 17.4443 18.631 17.2762 18.3482 17.1633C18.0655 17.0504 17.7631 16.9949 17.4587 17.0001H16.792V21.5861Z"
                        fill="#224F9E"
                      />
                      <path
                        d="M16 1C13.0333 1 10.1332 1.87973 7.66646 3.52796C5.19972 5.17618 3.27713 7.51886 2.14181 10.2597C1.0065 13.0006 0.709449 16.0166 1.28823 18.9263C1.86701 21.8361 3.29562 24.5088 5.39341 26.6066C7.49119 28.7044 10.1639 30.133 13.0737 30.7118C15.9834 31.2906 18.9994 30.9935 21.7403 29.8582C24.4812 28.7229 26.8238 26.8003 28.4721 24.3335C30.1203 21.8668 31 18.9667 31 16C31 14.0302 30.612 12.0796 29.8582 10.2597C29.1044 8.43986 27.9995 6.78628 26.6066 5.3934C25.2137 4.00052 23.5601 2.89563 21.7403 2.14181C19.9204 1.38799 17.9698 1 16 1ZM17.4613 15C18.0296 14.9929 18.5936 15.0987 19.1207 15.3113C19.6478 15.5239 20.1274 15.839 20.5317 16.2383C20.9361 16.6376 21.2571 17.1133 21.4762 17.6377C21.6953 18.162 21.8082 18.7247 21.8082 19.293C21.8082 19.8613 21.6953 20.424 21.4762 20.9483C21.2571 21.4727 20.9361 21.9484 20.5317 22.3477C20.1274 22.747 19.6478 23.0621 19.1207 23.2747C18.5936 23.4873 18.0296 23.5931 17.4613 23.586H16.7947V25.7333C16.7947 25.9985 16.6893 26.2529 16.5018 26.4404C16.3142 26.628 16.0599 26.7333 15.7947 26.7333C15.5295 26.7333 15.2751 26.628 15.0876 26.4404C14.9 26.2529 14.7947 25.9985 14.7947 25.7333V23.586H14.128C12.9897 23.5848 11.8984 23.132 11.0935 22.3271C10.2886 21.5223 9.83591 20.4309 9.83468 19.2927C9.83468 19.0274 9.94003 18.7731 10.1276 18.5856C10.3151 18.398 10.5695 18.2927 10.8347 18.2927C11.0999 18.2927 11.3542 18.398 11.5418 18.5856C11.7293 18.7731 11.8347 19.0274 11.8347 19.2927C11.8354 19.9007 12.0772 20.4836 12.5072 20.9135C12.9371 21.3434 13.52 21.5853 14.128 21.586H14.7947V17H14.128C13.5597 17.0071 12.9957 16.9013 12.4687 16.6887C11.9416 16.4761 11.462 16.161 11.0576 15.7617C10.6533 15.3624 10.3322 14.8867 10.1131 14.3623C9.89401 13.838 9.78118 13.2753 9.78118 12.707C9.78118 12.1387 9.89401 11.576 10.1131 11.0517C10.3322 10.5273 10.6533 10.0516 11.0576 9.6523C11.462 9.25295 11.9416 8.93786 12.4687 8.72529C12.9957 8.51273 13.5597 8.40692 14.128 8.414H14.7947V6.26666C14.7947 6.00145 14.9 5.7471 15.0876 5.55956C15.2751 5.37202 15.5295 5.26667 15.7947 5.26667C16.0599 5.26667 16.3142 5.37202 16.5018 5.55956C16.6893 5.7471 16.7947 6.00145 16.7947 6.26666V8.414H17.4613C18.5996 8.41523 19.6909 8.86796 20.4958 9.67285C21.3007 10.4777 21.7534 11.569 21.7547 12.7073C21.7547 12.9725 21.6493 13.2269 21.4618 13.4144C21.2743 13.602 21.0199 13.7073 20.7547 13.7073C20.4895 13.7073 20.2351 13.602 20.0476 13.4144C19.86 13.2269 19.7547 12.9725 19.7547 12.7073C19.754 12.0993 19.5121 11.5164 19.0822 11.0865C18.6523 10.6565 18.0694 10.4147 17.4613 10.414H16.7947V15H17.4613Z"
                        fill="#224F9E"
                      />
                      <path
                        d="M11.83 12.7074C11.8307 13.3154 12.0726 13.8982 12.5025 14.328C12.9325 14.7578 13.5154 14.9995 14.1233 15.0001H14.79V10.4141H14.1233C13.5153 10.4148 12.9324 10.6566 12.5025 11.0865C12.0726 11.5165 11.8307 12.0994 11.83 12.7074Z"
                        fill="#224F9E"
                      />
                    </svg>
                    <div v-for="(usd, index) in currency" :key="index">
                      <p v-if="usd.USD">{{ usd.USD }} {{ $t("tenge") }}</p>
                    </div>
                  </div>
                  <div class="currency--bottom--content">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 31C18.9667 31 21.8668 30.1203 24.3335 28.4721C26.8003 26.8238 28.7229 24.4812 29.8582 21.7403C30.9935 18.9994 31.2906 15.9834 30.7118 13.0737C30.133 10.1639 28.7044 7.49119 26.6066 5.39341C24.5088 3.29562 21.8361 1.86701 18.9263 1.28823C16.0166 0.709449 13.0006 1.0065 10.2597 2.14181C7.51886 3.27713 5.17618 5.19972 3.52796 7.66646C1.87973 10.1332 1 13.0333 1 16C1 19.9783 2.58035 23.7936 5.3934 26.6066C8.20644 29.4197 12.0218 31 16 31ZM11.4393 17.8913C11.1741 17.8913 10.9198 17.786 10.7322 17.5985C10.5447 17.4109 10.4393 17.1566 10.4393 16.8913C10.4393 16.6261 10.5447 16.3718 10.7322 16.1842C10.9198 15.9967 11.1741 15.8913 11.4393 15.8913H13.1767V9.41401C13.1767 9.14879 13.282 8.89444 13.4696 8.7069C13.6571 8.51937 13.9114 8.41401 14.1767 8.41401H16.8213C18.0781 8.41401 19.2834 8.91326 20.1721 9.80193C21.0607 10.6906 21.56 11.8959 21.56 13.1527C21.56 14.4094 21.0607 15.6147 20.1721 16.5034C19.2834 17.3921 18.0781 17.8913 16.8213 17.8913H15.1767V19.076H19.5833C19.8485 19.076 20.1029 19.1814 20.2904 19.3689C20.478 19.5564 20.5833 19.8108 20.5833 20.076C20.5833 20.3412 20.478 20.5956 20.2904 20.7831C20.1029 20.9707 19.8485 21.076 19.5833 21.076H15.1767V22.5913C15.1767 22.8566 15.0713 23.1109 14.8838 23.2985C14.6962 23.486 14.4419 23.5913 14.1767 23.5913C13.9114 23.5913 13.6571 23.486 13.4696 23.2985C13.282 23.1109 13.1767 22.8566 13.1767 22.5913V21.076H11.4393C11.1741 21.076 10.9198 20.9707 10.7322 20.7831C10.5447 20.5956 10.4393 20.3412 10.4393 20.076C10.4393 19.8108 10.5447 19.5564 10.7322 19.3689C10.9198 19.1814 11.1741 19.076 11.4393 19.076H13.1767V17.8913H11.4393Z"
                        fill="#224F9E"
                      />
                      <path
                        d="M19.5607 13.1527C19.5598 12.4265 19.2709 11.7304 18.7573 11.2169C18.2438 10.7035 17.5475 10.4148 16.8213 10.4141H15.1766V15.8914H16.8213C17.5475 15.8907 18.2438 15.6019 18.7573 15.0885C19.2709 14.5751 19.5598 13.8789 19.5607 13.1527Z"
                        fill="#224F9E"
                      />
                    </svg>
                    <div v-for="(rub, idx) in currency" :key="idx">
                      <p v-if="rub.RUB">{{ rub.RUB }} {{ $t("tenge") }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="welcome" v-if="index == 1">
            <div>
              <h1 v-html="bannerTitle"></h1>
              <button class="red-btn" @click="watchVid">
                {{ $t("see_all") }}
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.96212 24.4129C9.62928 24.0801 9.59903 23.5592 9.87135 23.1922L9.96212 23.0871L18.0488 15L9.96212 6.91291C9.62928 6.58008 9.59903 6.05925 9.87135 5.69224L9.96212 5.58709C10.295 5.25426 10.8158 5.224 11.1828 5.49632L11.2879 5.58709L20.0379 14.3371C20.3708 14.6699 20.401 15.1908 20.1287 15.5578L20.0379 15.6629L11.2879 24.4129C10.9218 24.779 10.3282 24.779 9.96212 24.4129Z"
                    fill="#FCFCFC"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <v-dialog v-model="openVid">
          <video
            v-click-outside="OutsideClick"
            autoplay
            loop
            controls
            :src="main_video"
            id="video"
            class="v-dialog_video"
          ></video>
        </v-dialog>
      </div>
      <Nuxt @OpenImg="OpenImg" />
      <vue-footer :contacts="contacts" />
    </div>
  </v-app>
</template>

<i18n>
{
  "en": {
    "news": "News",
    "managment": "Managment",
    "contacts": "Contacts",
    "projects": "Our projects",
    "faq": "Memo to investors",
    "compliance": "Compliance",
    "supply": "To the consumer",
    "vacancy": "Vacancies",
    "scheme": "Interactive diagram",
    "about": "About us",
    "main": "Home",
    "currency": "Exchange rate",
    "tenge": "KZT",
    "see_all": "Watch video"


  },
  "kz": {
    "news": "Жаңалықтар",
    "managment": "Басшылық",
    "about": "Біз туралы",
    "contacts": "Байланыстар",
    "projects": "Біздің жобалар",
    "faq": "Инвесторларға жадынама",
    "compliance": "Сәйкестік қызметі",
    "supply": "Тұтынушыға",
    "vacancy": "Бос орындар",
    "scheme": "Интерактивті схема",
    "main": "Басты бет",
    "currency": "Валюта бағамы",
    "tenge": "ТГ",
    "see_all": "Бейне көру"
  },
  "ru": {
    "news": "Новости",
    "managment": "Руководство",
    "contacts": "Контакты",
    "about": "О нас",
    "projects": "Наши проекты",
    "faq": "Памятка инвесторам",
    "compliance": "Комплаенс служба",
    "supply": "Потребителю",
    "vacancy": "Вакансии",
    "scheme": "Интерактивная схема",
    "main": "Главная",
    "currency": "Курс валют",
    "tenge": "ТГ",
    "see_all": "Посмотреть видео"
  }
}
</i18n>


<script>
import { mapGetters } from "vuex";
import News from "@/components/backgrounds/News";
import BreadCrumbs from "@/components/ui/BreadCrumbs";
import vueFooter from "@/components/vueFooter";
import Project from "@/components/backgrounds/Project";
import VueHeader from "@/components/vueHeader.vue";
import AboutPage from "../components/backgrounds/AboutPage.vue";
import Faq from "../components/backgrounds/Faq.vue";
import Compliance from "../components/backgrounds/Compliance.vue";
import Supply from "../components/backgrounds/Supply.vue";
import Vacancy from "../components/backgrounds/Vacancy.vue";
import Interactive from "../components/backgrounds/Interactive.vue";
import Managment from "../components/backgrounds/Managment.vue";
import Contacts from "../components/backgrounds/Contacts.vue";
export default {
  components: {
    vueFooter,
    VueHeader,
    News,
    BreadCrumbs,
    Project,
    AboutPage,
    Faq,
    Compliance,
    Supply,
    Vacancy,
    Interactive,
    Managment,
    Contacts,
  },
  data: () => ({
    inside_page: false,
    contacts: null,
    rub: null,
    menu: false,
    opened_img: false,
    popup_video: false,
    index: 1,
    currency: null,
    back: [],
    title: [],
    currentPageText: "",
    bannerTitle: "",
    name: null,
    openVid: false,
    main_video: null,
  }),
  watch: {
    "$i18n.locale": function () {
      this.bannerText();
      const jdiv = document.getElementsByTagName("jdiv");
      jdiv.style;
      if (this.$i18n.locale == "ru") {
        jdiv[0].style.display = "unset";
      } else {
        jdiv[0].style.display = "none";
      }
    },
    "$route.path"() {
      if (
        this.$route.path == "/" ||
        this.$route.path == "/kz" ||
        this.$route.path == "/en"
      ) {
        this.index = 1;
      } else if (this.$route.path.includes("News") && !this.$route.query.id) {
        this.index = 2;
      } else if (
        this.$route.path.includes("Managment") &&
        !this.$route.query.id
      ) {
        this.index = 3;
      } else if (this.$route.path.includes("About") && !this.$route.query.id) {
        this.index = 4;
      } else if (
        this.$route.path.includes("Contacts") &&
        !this.$route.query.id
      ) {
        this.index = 5;
      } else if (
        this.$route.path.includes("Projects") &&
        !this.$route.query.id
      ) {
        this.index = 6;
      } else if (this.$route.path.includes("Faq") && !this.$route.query.id) {
        this.index = 7;
      } else if (this.$route.path.includes("Compliance") && !this.$route.query.id) {
        this.index = 10;
      } else if (this.$route.path.includes("Supply") && !this.$route.query.id) {
        this.index = 11;
      } else if (this.$route.path.includes("Vacancy") && !this.$route.query.id) {
          this.index = 12;
      } else if (
        this.$route.path.includes("InteractiveDiagram") &&
        !this.$route.query.id
      ) {
        this.index = 8;
      } else {
        this.index = 9;
      }
    },
  },
  computed: {
    ...mapGetters({
      isScroll: "getPreventSroll",
    }),
    all() {
      let obj = {
        News: ["news", "/News"],
        About: ["about", "/About"],
        Projects: ["projects", "/Projects"],
        Contacts: ["contacts", "/Contacts"],
        Faq: ["faq", "/Faq"],
        Compliance: ["compliance", "/Compliance"],
        Supply: ["supply", "/Supply"],
        Vacancy: ["vacancy", "/Vacancy"],
        Managment: ["managment", "/Managment"],
        InteractiveDiagram: ["scheme", "/InteractiveDiagram"],
      };
      let url = null;
      for (let item of Object.keys(obj)) {
        if (this.$route.path.includes(item)) {
          this.name = obj[item][0];
          url = obj[item][1];
        }
      }
      return [
        {
          title: this.$t("main"),
          url: "/",
        },
        {
          title: this.$t(`${this.name}`),
          url: url,
        },
      ];
    },
  },
  methods: {
    async watchVid() {
      if (process.client) {
        this.mainVid();
        this.openVid = true;
      }
    },
    showMenu(bool) {
      this.menu = bool;
    },
    OpenImg(bool) {
      this.opened_img = bool;
    },
    async mainVid() {
      try {
        let params = {};
        params.lang =
          this.$i18n.locale == "en"
            ? "en"
            : this.$i18n.locale == "kz"
            ? "kz"
            : this.$i18n.locale;
        const video = (await this.$axios.get("home", { params })).data.data;
        this.main_video = video.video.video;
      } catch (err) {
        console.error(err);
      }
    },
    async bannerText() {
      try {
        let params = {};
        params.lang =
          this.$i18n.locale == "en"
            ? "en"
            : this.$i18n.locale == "kz"
            ? "kz"
            : this.$i18n.locale;
        const banner = (await this.$axios.get(`home`, { params })).data.data;
        this.bannerTitle = banner.banner.title;
      } catch (e) {
        console.error(e);
      }
    },
    async currVal() {
      await this.$axios
        .get(`parts`)
        .then((res) => {
          let value = res.data.data.rates.value;
          this.currency = JSON.parse(value);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    async changeBg() {
      try {
        const { data } = (await this.$axios.get(`parts`)).data;
        this.back = data.backgrounds[2].image;
      } catch (e) {
        console.error(e);
      }
    },
    async titleText() {
      try {
        const test = (await this.$axios.get(`parts`)).data;
        this.title = test.data.backgrounds;
      } catch (err) {
        console.error(err);
      }
    },
    async contactsList() {
      try {
        const contacts = (await this.$axios.get(`contacts`)).data.data;
        this.contacts = contacts;
      } catch (err) {
        console.error(error);
      }
    },
    OutsideClick() {
      if (this.openVid) {
        console.log(123);
        let vidos = document.getElementById("video");
        vidos.pause();
        vidos.currentTime = 0;
      }
    },
  },
  created() {
    this.currVal();
    this.changeBg();
    this.titleText();
    this.bannerText();
    this.contactsList();
    if (
      this.$route.path == "/" ||
      this.$route.path == "/kz" ||
      this.$route.path == "/en"
    ) {
      this.index = 1;
    } else if (this.$route.path.includes("News") && !this.$route.query.id) {
      this.index = 2;
      this.inside_page = true;
    } else if (
      this.$route.path.includes("Managment") &&
      !this.$route.query.id
    ) {
      this.index = 3;
      this.inside_page = true;
    } else if (this.$route.path.includes("About") && !this.$route.query.id) {
      this.index = 4;
      this.inside_page = true;
    } else if (this.$route.path.includes("Contacts") && !this.$route.query.id) {
      this.index = 5;
      this.inside_page = true;
    } else if (this.$route.path.includes("Projects") && !this.$route.query.id) {
      this.index = 6;
      this.inside_page = true;
    } else if (this.$route.path.includes("Faq") && !this.$route.query.id) {
      this.index = 7;
      this.inside_page = true;
    } else if (this.$route.path.includes("Compliance") && !this.$route.query.id) {
      this.index = 10;
      this.inside_page = true;
    } else if (this.$route.path.includes("Supply") && !this.$route.query.id) {
      this.index = 11;
      this.inside_page = true;
    } else if (this.$route.path.includes("Vacancy") && !this.$route.query.id) {
        this.index = 12;
        this.inside_page = true;
    } else if (
      this.$route.path.includes("InteractiveDiagram") &&
      !this.$route.query.id
    ) {
      this.index = 8;
      this.inside_page = true;
    } else {
      this.index = 9;
    }
  },
};
</script>


<style lang="scss" scoped>
.v-dialog_video,
.v-dialog .v-dialog--active {
  z-index: 999999;
}
.pages-content {
  background: white;
}
.inside {
  height: 350px;
}
.News,
.Contacts,
.Managment,
.Scheme,
.Faq,
.Compliance,
.Supply,
.Vacancy,
.Projects,
.About {
  position: absolute;
  top: 0;
  opacity: 1;
  z-index: 3;
  left: 0;
}
.active_chat {
  display: block;
}
.deactive_chat {
  display: none;
}
.hidden {
  height: 100vh !important;
  overflow-y: hidden !important;
  overflow-x: hidden;
  background: rgba(0, 0, 0, 0.38);
  backdrop-filter: blur(4px);
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
}
.first_page {
  height: 100vh !important;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.38);
  backdrop-filter: blur(4px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.pages {
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  .welcome {
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto 130px auto;

    div {
      max-width: 1400px;
      width: 100%;
    }

    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 50px;
      text-transform: uppercase;
      color: #fcfcfc;
      padding-left: 20px;

      border-left: 3px solid #fcfcfc;
      margin-bottom: 30px;
    }

    .red-btn {
      width: 285px;
      height: 50px;
      padding: 12px 0;
      background: #b53a57;
      box-shadow: 0px 4px 20px rgba(181, 58, 87, 0.15);
      border-radius: 6px;
      font-family: "OpenSans-Medium";
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 25px;
      text-align: center;

      cursor: pointer;
      color: #fcfcfc;

      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        margin-left: 16px;
      }
    }
  }
  p {
    font-family: "OpenSans-Bold" !important;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    line-height: 73px;
    text-transform: uppercase;
    color: #224f9e;
    text-align: center;
    margin-bottom: 0 !important;

    width: 100%;
    z-index: 5;
  }
  .line {
    margin: 0 auto 80px auto;
  }
  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    video {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
    &::before {
      position: absolute;
      content: "";
      top: 0px;
      left: 0px;
      bottom: 0;
      right: 0;
      background: red;
      background: rgba($color: #000000, $alpha: 0.5);
    }
  }
}
.breadCrumbs {
  margin-top: 30px !important;
  z-index: 3;
}
.main_page {
  position: relative;
  height: 100vh !important;

  background: black;
}
.currency_block {
  position: absolute;
  top: 110px;
  left: 0;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  z-index: 1;

  display: flex;
  justify-content: flex-end;

  .currency_text {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
  }
}
.currency {
  border-radius: 10px;
  z-index: 1;

  max-width: 216px;
  width: 100%;
  height: 139px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &--top {
    padding: 11px 0 11px 20px;

    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 10px 30px rgba(138, 149, 158, 0.1);
    border-radius: 10px 10px 0px 0px;

    max-width: 216px;
    width: 100%;
    h4 {
      font-family: "OpenSans-Semibold";
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      text-transform: uppercase;
      color: #224f9e;
      text-align: left;
    }
  }
  &--bottom {
    background: #8dacc8;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    &--content {
      display: flex;
      align-items: center;

      width: 100%;

      padding: 9px 30px;
      border-bottom: 1px solid #e9ecf1;

      svg {
        margin-right: 50px;
        width: unset !important;
        height: unset !important;
      }

      div {
        p {
          font-family: "OpenSans-Semibold";
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 16px;
          text-align: left;
          text-transform: uppercase;
          color: #224f9e;
        }
      }
      &:last-of-type {
        border-bottom: none;
      }
    }
  }
}
@media screen and (max-width: 1440px) {
  .currency_block {
    right: 2%;
    left: unset;
  }
  .pages {
    .welcome {
      margin: 0 auto 130px 80px;
    }
  }
}
@media screen and (max-width: 1230px) {
  .pages {
    .welcome {
      margin: 0 auto 130px 40px;
    }
  }
}
@media screen and (max-width: 960px) {
  .pages {
    background-repeat: no-repeat !important;
    background-size: cover !important;
    .welcome {
      margin: 0 auto 100px 16px;
      h1 {
        font-size: 24px !important;
        line-height: 29px !important;
      }
    }
  }
  p {
    font-size: 40px;
    line-height: 48px;
  }

  .currency {
    p {
      font-size: 14px !important;
      line-height: 16px !important;
    }
  }
  // .news {
  //   background: url("@/assets/images/backgrounds/adaptive_news.png");
  // }
  // .managment {
  //   background: url("@/assets/images/backgrounds/adaptive_managment.png");
  // }
  // .about {
  //   background: url("@/assets/images/backgrounds/adaptive_about.png");
  // }
  // .contacts {
  //   background: url("@/assets/images/backgrounds/adaptive_contacts.png");
  // }
  // .projects {
  //   background: url("@/assets/images/backgrounds/adaptive_projects.png");
  // }
  // .faq {
  //   background: url("@/assets/images/backgrounds/adaptive_faq.png");
  // }
  .main_page {
    height: auto;
    .Breadcrumbs {
      margin-left: 16px !important;
    }
    h1 {
      font-size: 24px;
      line-height: 29px;

      margin-left: 16px;
      margin-bottom: 100px;

      max-width: 323px;
    }
  }
  .opacity {
    height: 812px;
    background: url("@/assets/images/backgrounds/adaptive_main.png");
    background-size: 100% 100%;
    // opacity: 0.3;

    .desktop_bg {
      display: none;
    }
  }
}
@media screen and (max-width: 699px) {
  .pages {
    .welcome {
      padding-right: 16px;
    }
  }
  .main_page {
    height: 812px;
  }
  .currency {
    top: 76px !important;
    right: 8px !important;
  }
}
.asd {
  display: none !important;
}
</style>



