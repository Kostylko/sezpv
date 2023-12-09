<template>
  <div class="Footer">
    <div class="Footer--top">
      <div class="contacts">
        <div class="blocks">
          <img src="@/assets/images/Footer/Work.svg" />
          <p>
            {{ $t("address") }}
          </p>
        </div>
        <div class="blocks">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9394 3C18.2804 3 19.5704 3.53 20.5194 4.481C21.4694 5.43 22.0004 6.71 22.0004 8.05V15.95C22.0004 18.74 19.7304 21 16.9394 21H7.06043C4.26943 21 2.00043 18.74 2.00043 15.95V8.05C2.00043 5.26 4.25943 3 7.06043 3H16.9394ZM18.0704 8.2C17.8604 8.189 17.6604 8.26 17.5094 8.4L13.0004 12C12.4204 12.481 11.5894 12.481 11.0004 12L6.50043 8.4C6.18943 8.17 5.75943 8.2 5.50043 8.47C5.23043 8.74 5.20043 9.17 5.42943 9.47L5.56043 9.6L10.1104 13.15C10.6704 13.59 11.3494 13.83 12.0604 13.83C12.7694 13.83 13.4604 13.59 14.0194 13.15L18.5304 9.54L18.6104 9.46C18.8494 9.17 18.8494 8.75 18.5994 8.46C18.4604 8.311 18.2694 8.22 18.0704 8.2Z"
              fill="#B53A57"
            />
          </svg>
          <a href="mailto: info@sez-pvl.kz">info@sez-pvl.kz</a>
        </div>
        <div class="blocks">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.9001 12.9404C15.8892 16.9284 16.7942 12.3147 19.3341 14.8528C21.7827 17.3008 23.19 17.7912 20.0876 20.8927C19.699 21.205 17.23 24.9623 8.55301 16.2877C-0.12507 7.61202 3.62999 5.14046 3.94238 4.75197C7.05227 1.64186 7.53427 3.0574 9.9829 5.50535C12.5228 8.04451 7.91107 8.95243 11.9001 12.9404Z"
              fill="#B53A57"
            />
          </svg>
          <div class="contacts_div">
            <div v-for="(item, index) in contacts" :key="index">
              <a v-if="item.type == 'mobile'" :href="`tel:${item.content}`">
                {{ item.content }}
              </a>
            </div>
          </div>
        </div>
        <div class="blocks">
          <a href="https://www.instagram.com/sez.pv/" target="_blank">
            <svg
              class="insta"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="25" fill="#B53A57" />
              <path
                d="M30.0284 13H19.9716C16.1275 13 13 16.1275 13 19.9716V30.0284C13 33.8725 16.1275 37 19.9716 37H30.0284C33.8725 37 37 33.8725 37 30.0284V19.9716C37 16.1275 33.8725 13 30.0284 13ZM35.125 30.0284C35.125 32.8387 32.8387 35.125 30.0284 35.125H19.9716C17.1613 35.125 14.875 32.8387 14.875 30.0284V19.9716C14.875 17.1613 17.1613 14.875 19.9716 14.875H30.0284C32.8387 14.875 35.125 17.1613 35.125 19.9716V30.0284Z"
                fill="#FCFCFC"
              />
              <path
                d="M25 18.5312C21.4331 18.5312 18.5312 21.4331 18.5312 25C18.5312 28.5669 21.4331 31.4688 25 31.4688C28.5669 31.4688 31.4688 28.5669 31.4688 25C31.4688 21.4331 28.5669 18.5312 25 18.5312ZM25 29.5938C22.467 29.5938 20.4062 27.533 20.4062 25C20.4062 22.467 22.467 20.4062 25 20.4062C27.533 20.4062 29.5938 22.467 29.5938 25C29.5938 27.533 27.533 29.5938 25 29.5938Z"
                fill="#FCFCFC"
              />
              <path
                d="M31.5625 19.375C32.0803 19.375 32.5 18.9553 32.5 18.4375C32.5 17.9197 32.0803 17.5 31.5625 17.5C31.0447 17.5 30.625 17.9197 30.625 18.4375C30.625 18.9553 31.0447 19.375 31.5625 19.375Z"
                fill="#FCFCFC"
              />
            </svg>
          </a>
          <a href="https://www.facebook.com/sez.pv" target="_blank">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="25" fill="#B53A57" />
              <g clip-path="url(#clip0_1341_2199)">
                <path
                  d="M26.62 36.9531H22.7691C22.1259 36.9531 21.6026 36.4309 21.6026 35.7889V27.12H19.3559C18.7127 27.12 18.1895 26.5976 18.1895 25.9558V22.2412C18.1895 21.5992 18.7127 21.077 19.3559 21.077H21.6026V19.2168C21.6026 17.3724 22.1829 15.8032 23.2806 14.6791C24.3832 13.5499 25.9241 12.9531 27.7367 12.9531L30.6736 12.9579C31.3157 12.959 31.8381 13.4812 31.8381 14.1221V17.571C31.8381 18.213 31.315 18.7352 30.672 18.7352L28.6946 18.736C28.0915 18.736 27.938 18.8566 27.9051 18.8936C27.851 18.955 27.7866 19.1284 27.7866 19.6072V21.0768H30.5234C30.7294 21.0768 30.929 21.1275 31.1005 21.2231C31.4706 21.4294 31.7006 21.8196 31.7006 22.2413L31.6992 25.956C31.6992 26.5976 31.1759 27.1198 30.5327 27.1198H27.7866V35.7889C27.7866 36.4309 27.2632 36.9531 26.62 36.9531ZM23.0123 35.5461H26.3767V26.4901C26.3767 26.0615 26.7262 25.7128 27.1555 25.7128H30.2894L30.2907 22.4839H27.1553C26.726 22.4839 26.3767 22.1353 26.3767 21.7067V19.6072C26.3767 19.0575 26.4327 18.4324 26.8484 17.9625C27.3507 17.3945 28.1424 17.329 28.6942 17.329L30.4283 17.3282V14.3645L27.7356 14.3601C24.8226 14.3601 23.0123 16.2212 23.0123 19.2168V21.7067C23.0123 22.1351 22.663 22.4839 22.2337 22.4839H19.5992V25.7128H22.2337C22.663 25.7128 23.0123 26.0615 23.0123 26.4901V35.5461ZM30.6709 14.3649H30.671H30.6709Z"
                  fill="#FCFCFC"
                />
              </g>
              <defs>
                <clipPath id="clip0_1341_2199">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(13 13)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <img src="@/assets/images/Footer/logo_footer.svg" class="logo_footer" />
      </div>
      <div class="pages">
        <div class="pages--left">
          <nuxt-link :to="localePath('/Projects')">{{ $t("projects") }}</nuxt-link>
          <nuxt-link :to="localePath('/InteractiveDiagram')">{{ $t("sheme") }}</nuxt-link>
          <nuxt-link :to="localePath('/Faq')">{{ $t("faq") }}</nuxt-link>
          <nuxt-link :to="localePath('/Compliance')">{{ $t("compliance") }}</nuxt-link>
          <nuxt-link :to="localePath('/Supply')">{{ $t("supply") }}</nuxt-link>
          <nuxt-link :to="localePath('Managment')">{{ $t("managment") }}</nuxt-link>
          <nuxt-link :to="localePath('/Vacancy')">{{ $t("vacancy") }}</nuxt-link>
        </div>
        <div class="pages--right">
          <img
            src="@/assets/images/Footer/footer_logos/new_logo.png"
            class="footer_logo"
          />
          <p>{{ $t("footer_logo") }}</p>
        </div>
      </div>
    </div>
    <div class="Footer--bottom">
      <div class="rights">
        <p>
          All rights reserved © <span>{{ currentYear }}</span> SEZ “PAVLODAR”
        </p>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "projects": "Projects",
    "sheme": "Interactive Diagram",
    "managment": "Managment",
    "faq": "Memo to investors",
    "compliance": "Compliance",
    "supply": "To the consumer",
    "vacancy": "Vacancies",
    "address": "The republic of Kazakhstan, Pavlodar region Nothern industrial zone, 167",
    "footer_logo": "Special Economic Zone “Pavlodar”"
  },
  "kz": {
    "projects": "Жобалар",
    "sheme": "Интерактивті диаграмма",
    "managment": "Басқару",
    "faq": "Инвесторларға арналған естелік",
    "compliance": "Сәйкестік қызметі",
    "supply": "Тұтынушыға",
    "vacancy": "Бос орындар",
    "address": "Қазақстан Республикасы, Павлодар облысы, Солтүстік өнеркәсіптік аймақ, 167",
    "footer_logo": "“Павлодар” арнайы экономикалық аймағы"
  },
  "ru": {
    "projects": "Проекты",
    "sheme": "Интерактивная схема",
    "managment": "Руководство",
    "faq": "Памятка инвесторам",
    "compliance": "Комплаенс служба",
    "supply": "Потребителю",
    "vacancy": "Вакансии",
    "address": "Республика Казахстан, Павлодарская область, Северная промышленная зона, 167",
    "footer_logo": "Специальная экономическая зона “Павлодар”"
  }
}
</i18n>

<script>
export default {
  props: {
    contacts: Array,
  },
  data: () => ({
    currentYear: null,
  }),
  created() {
    if (process.client) {
      this.currentYear = new Date().getFullYear();
    }
  },
};
</script>

<style lang="scss" scoped>
.Footer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-width: 100%;
  width: 100%;
  height: auto;
  padding: 120px 0 32px 0;

  background: #233659;

  &--top {
    display: flex;
    flex-direction: row;
    justify-content: center;

    width: 100%;

    .contacts {
      display: flex;
      flex-direction: column;
      position: relative;
      padding-left: 80px;

      max-width: 534px;
      width: 100%;

      border-right: 3px solid #b53a57;

      .logo_footer {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
      }

      .blocks {
        z-index: 3;

        width: 100%;

        display: flex;
        align-items: center;

        margin-bottom: 46px;
        max-width: 374px;
        width: 100%;

        p {
          font-size: 18px;
          line-height: 23px;
          margin-left: 12px;
          color: #f3f5f8;
          margin-bottom: 0 !important;
        }
        a {
          font-family: "OpenSans-Regular";
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 21px;
          margin-left: 10px;
          color: #fcfcfc;
        }
        svg {
          width: 24px;
          height: 24px;
        }

        &:last-of-type {
          margin-bottom: 0;

          display: flex;
          align-items: center;
          width: 100%;
          a {
            margin-right: 50px;
            margin-left: 0;

            svg {
              width: 50px;
              height: 50px;
            }
            &:last-of-type {
              margin-right: 0;
            }
          }
        }
      }
      .contacts_div {
        display: flex;
        flex-direction: column;
        margin-left: 10px;

        a {
          font-family: "OpenSans-Regular";
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 21px;

          color: #fcfcfc;
          margin-left: 0;
        }
      }
    }
    .pages {
      display: flex;
      justify-content: space-between;
      align-items: center;

      max-width: 742px;
      width: 100%;
      height: 209px;

      margin-left: 84px;
      &--left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        z-index: 2;
      }
      a {
        margin-bottom: 20px;
        color: #f3f5f8;

        font-family: "OpenSans-Regular";
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #fcfcfc;
        transition: 0.22s;

        &:last-of-type {
          margin-bottom: 0;
        }
      }
      a:hover {
        font-size: 20px;
        line-height: 24px;
      }
      &--right {
        max-width: 414px;
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        img {
          margin-bottom: 30px;
        }
        p {
          font-family: "OpenSans-Semibold";
          font-style: normal;
          font-weight: normal;
          font-size: 28px;
          line-height: 33px;
          color: #fcfcfc;
          text-align: left;
          width: 100%;
          text-transform: uppercase;
        }
      }
    }
  }
  &--bottom {
    margin: 115px auto 0;
    padding: 0 60px;

    width: 100%;

    p {
      border-top: 3px solid #b5bac1;
      text-align: center;
      padding-top: 30px;
      color: #f3f5f8;
    }
  }
}
@media screen and (max-width: 1550px) {
  .Footer {
    &--top {
      justify-content: flex-start;
    }
  }
}
@media screen and (max-width: 960px) {
  .Footer {
    height: auto;
    padding: 80px 16px 16px;
    &--top {
      flex-direction: column;
      align-items: center;

      width: 100%;

      .contacts {
        max-width: 304px !important;
        padding-left: 0;
        padding-bottom: 80px;

        max-width: unset;
        border-right: none;
        align-items: center;
        border-bottom: 3px solid #b53a57;

        .logo_footer {
          max-width: 100%;
          width: 100%;
          height: auto;
        }
        .blocks {
          max-width: unset;
          justify-content: center;
          margin-bottom: 42px;
          align-items: center;
          &:nth-of-type(3) {
            margin-bottom: 60px;
          }
          &:last-of-type {
            a {
              margin-right: 40px;
            }
            &:last-of-type {
              margin-right: 0;
            }
          }
          p {
            font-size: 16px;
            line-height: 18px;

            &:first-of-type {
              text-align: center;
            }
          }
        }
      }
      .pages {
        flex-direction: column;
        align-items: ceenter;

        max-width: unset;
        height: auto;

        margin: 80px 0;

        &--left {
          display: flex;
          flex-direction: column;
          align-items: center;

          margin-bottom: 80px;
          p {
            text-align: center;
          }
        }
        &--right {
          align-items: center;
          p {
            text-align: center;
          }
        }
      }
    }
    &--bottom {
      margin: 115px auto 0;
      padding: 0 60px;

      width: 100%;

      p {
        border-top: 3px solid #b5bac1;
        text-align: center;
        padding-top: 30px;
        color: #f3f5f8;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .logo_footer {
    top: 25% !important;
  }
}
</style>