<template>
  <v-app>
    <div class="bg">
      <div class="Request">
        <div class="Request--content">
          <v-form
            ref="form"
            class="form"
            @submit.prevent="showPopup"
            v-click-outside="OutsideClick"
          >
            <div class="form--text">
              <h2>{{ $t("request") }}</h2>
              <div class="line"></div>
              <p>
                {{ $t("text") }}
              </p>
              <img src="@/assets/images/Request/messages-illustration.svg" />
            </div>
            <div class="form--request">
              <p>{{ $t("fio") }}</p>
              <v-text-field
                v-model="name"
                :name_validate="name_validate"
                :rules="rules"
                :placeholder="$t('name')"
                required
              ></v-text-field>
              <p>{{ $t("telephone") }}</p>
              <div class="phone_input">
                <v-select
                  :items="phone_masks"
                  v-model="qwe"
                  placeholder="KZ"
                ></v-select>
                <v-text-field
                  v-mask="qwe"
                  v-model="asd"
                  :rules="mobileRules"
                  id="mobile_phone"
                ></v-text-field>
              </div>
              <p>{{ $t("message") }}</p>
              <textarea
                :placeholder="$t('placeholder')"
                v-model="textarea"
                auto-grow
              ></textarea>
              <button type="submit" class="red-btn">
                {{ $t("send") }}
              </button>
            </div>
          </v-form>
        </div>
        <v-dialog v-model="popup">
          <div
            class="popupInfo"
            :class="{ active: popup == true, deactive: popup == false }"
          >
            <div class="popupInfo--content">
              <img src="@/assets/images/Request/Vector.svg" />
              <h1>Ваша заявка успешно отправлена</h1>
              <svg
                class="close"
                @click="closePopup"
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
            </div>
          </div>
        </v-dialog>
      </div>
    </div>
  </v-app>
</template>

<i18n>
{
  "en": {
    "request": "Make a request",
    "fio": "Enter your full name",
    "telephone": "Enter your phone number",
    "message": "Your message",
    "send": "Send",
    "placeholder": "Message",
    "name": "Full name",
    "text": "If you are interested and need help in ordering an object, leave your contacts.",
    "musthave": "Required field",
    "ten": "Enter the correct phone number"

  },
  "kz": {
    "request": "Тапсырыс беру",
    "fio": "Толық аты-жөніңізді енгізіңіз",
    "telephone": "Телефон нөмірін енгізіңіз",
    "message": "Сіздің хабарламаңыз",
    "send": "Жіберу",
    "placeholder": "Хабар",
    "name": "Толық аты",
    "text": "Егер сіз қызығушылық танытсаңыз және объектіге тапсырыс беруге көмек қажет болса, контактілерді қалдырыңыз",
    "musthave": "Міндетті жол",
    "ten": "Дұрыс телефон нөмірін енгізіңіз"


  },
  "ru": {
    "request": "Подать заявку",
    "fio": "Укажите ФИО",
    "telephone": "Введите номер телефона",
    "message": "Ваше сообщение",
    "send": "Отправить",
    "placeholder": "Сообщение",
    "name": "ФИО",
    "text": "Если вы заинтересованы и Вам нужна помощь в заказе объекта, оставьте свои контакты.",
    "musthave": "Обязательное поле",
    "ten": "Введите корректный номер телефона"
  }
}
</i18n>

<script>
import { masks } from "@/plugins/phone_mask.js";
export default {
  data: () => ({
    asd: "",
    ddd: "",
    popup: false,
    formm: { test: "" },
    name_form: "",
    selected_mask: "#-##-##",
    default_mask: "Kazakhstan",
    phone_masks: [],
    phone_number: "",
    test: "",
    form: {},
    textarea: "",
    name: "",
    number: "",
    qwe: [
      "+7 ",
      "(",
      /\d/,
      /\d/,
      /\d/,
      ") ",
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
    ],
    name_validate: [/[^a-zA-Z\-]/],
  }),
  created() {
    this.phone_masks = [];
    Object.keys(masks).forEach((key) => {
      this.phone_masks.push({ text: key, value: masks[key] });
    });
  },
  computed: {
    mobileRules() {
      return [(v) => !!v || this.$t("musthave")];
    },
    rules() {
      return [(value) => !!value || this.$t("musthave")];
    },
  },

  methods: {
    OutsideClick() {
      this.popup = false;
    },
    showPopup() {
      if (!this.$refs.form.validate()) return;
      else {
        this.popup = true;
        const postData = {
          full_name: this.name,
          phone: this.asd,
          message: this.textarea,
        };
        this.$axios
          .post("save-request", postData)
          .then(() => {
            this.$refs.form.reset();
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
    closePopup() {
      this.popup = false;
      this.$refs.form.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
.bg {
  background: white !important;
}
::placeholder {
  z-index: 99999;
}
.popupInfo {
  position: absolute !important;
  top: 0 !important;
  left: 0;
  right: 0 !important;
  bottom: 0;

  width: 100vw;
  height: 100vh;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.38);
  backdrop-filter: blur(4px);

  .popupInfo--content {
    max-width: 560px;
    width: 100%;
    height: 400px;
    background: #fcfcfc;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px;
    position: relative;

    .close {
      position: absolute;
      top: 30px;
      right: 30px;
      cursor: pointer;
    }
    img {
      top: 80px;
      left: 200px;
      margin-bottom: 30px;
      width: 160px;
      height: auto;
    }
    h1 {
      font-family: "OpenSans-Bold";
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 29px;
      text-align: center;
      text-transform: uppercase;
      color: #224f9e;
    }
  }
}
.Request {
  max-width: 1280px;
  width: 100%;
  padding: 120px 0;
  margin: 0 auto;

  position: relative;

  .active {
    display: flex;
  }
  .deactive {
    display: none;
  }

  &--content {
    padding: 60px 100px 60px 60px;

    background: #7ca0df;
    border-radius: 10px;
    max-width: 100%;
    width: 100%;
    margin: 0 auto;

    .form {
      display: flex;
      justify-content: center;

      &--text {
        max-width: 490px;
        width: 100%;

        h2 {
          font-family: "OpenSans-Bold";
          font-style: normal;
          font-weight: bold;
          font-size: 36px;
          line-height: 50px;
          text-transform: uppercase;
          color: #fcfcfc;
        }
        .line {
          margin-bottom: 40px !important;
        }
        p {
          font-size: 18px;
          line-height: 21px;
          color: #fcfcfc;
          margin-bottom: 15px !important;
        }
      }
      &--request {
        margin-left: 60px;

        p {
          color: #fcfcfc;
          margin-bottom: 12px !important;
        }
        .v-text-field {
          margin-bottom: 25px;

          &:last-of-type {
            margin-bottom: 0 !important;
          }

          ::placeholder {
            max-width: 100%;
            text-align: left;
            width: 100%;
            z-index: 5;
          }
        }
        ::placeholder {
          font-family: "OpenSans-Medium";
          font-style: normal;
          text-align: left;
          font-weight: normal;
          font-size: 18px;
          line-height: 21px;
          color: #fcfcfc;
        }
        .textarea {
          height: auto;
          min-height: 60px;
        }
        .red-btn {
          background: #b53a57;
          border-radius: 6px;

          font-family: "OpenSans-Semibold";
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 22px;
          text-align: center;
          color: #fcfcfc;

          max-width: 490px;
          width: 100%;
          height: 50px;

          padding: 14px 0;
          margin-top: 40px;

          z-index: 9;
        }
        .phone_input {
          display: flex;

          ::placeholder {
            width: 30px;
          }
          .theme--light.v-input {
            .theme--light.v-select .v-select__selections {
              margin-left: -5px !important;
              margin-top: -5px !important;
            }
            .v-select__selections {
              margin-left: -5px !important;
              margin-top: -5px !important;
            }
            max-width: 120px;
            width: 100%;

            &:last-of-type {
              max-width: 100%;
              padding-right: 10px;

              .v-text-field
                > .v-input__control
                > .v-input__slot
                > .v-text-field__slot {
                padding-left: 10px !important;
              }
            }
          }
        }
      }
      textarea {
        max-width: 490px;
        width: 100%;
        height: 80px;
        background: rgba(35, 54, 89, 0.1);
        border-radius: 10px;
        border: 1px solid rgba(252, 252, 252, 0.2);
        outline: none;
        padding: 5px 0 0 15px;
        color: white;
      }
    }
  }
}
@media screen and (max-width: 1264px) {
  .Request {
    padding: 120px 80px;
  }
}
@media screen and (max-width: 1024px) {
  .Request {
    padding: 80px 16px;

    &--content {
      padding: 24px;
      .form {
        flex-direction: column;
        align-items: center;

        &--text {
          display: flex;
          flex-direction: column;

          margin-bottom: 40px;

          h2 {
            font-size: 24px;
            line-height: 29px;
          }
          p {
            font-size: 16px;
            line-height: 19px;
          }
        }
        &--request {
          margin-left: 0;

          p {
            font-size: 16px;
            line-height: 19px;
          }
          ::placeholder {
            font-size: 16px;
            line-height: 19px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .popupInfo {
    padding: 0 16px;
  }
}
@media screen and (max-width: 330px) {
  .phone_input {
    flex-direction: column;

    .theme--light.v-input {
      margin-bottom: 10px !important;

      &:last-of-type {
        margin-bottom: 20px !important;
      }
    }
  }
  .theme--light.v-input {
    max-width: 260px !important;
  }
}
</style>