<template>
  <div class="bg">
    <div class="News">
      <div class="News--table">
        <div v-for="(item, idx) in data" :key="idx" class="News--table--items">
          <a @click="goToInner(item.id)">
            <img
              :src="item.images.length ? item.images[0].url : defaultImage"
              class="photo"
            />
            <p>{{ item.created_at }}</p>
            <p>
              {{ item.title }}
            </p>
            <p v-html="item.content" class="test_div">{{ item.content }}</p>
          </a>
          <div>
            <a @click="goToInner(item.id)">{{ $t("more") }}</a>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1022_1025)">
                <path
                  d="M15.8167 7.55771C15.8165 7.55752 15.8163 7.5573 15.8161 7.55711L12.5504 4.30712C12.3057 4.06365 11.91 4.06456 11.6665 4.30924C11.423 4.5539 11.4239 4.94962 11.6686 5.19312L13.8612 7.37511H0.625C0.279813 7.37511 0 7.65493 0 8.00011C0 8.3453 0.279813 8.62511 0.625 8.62511H13.8612L11.6686 10.8071C11.4239 11.0506 11.423 11.4463 11.6665 11.691C11.91 11.9357 12.3058 11.9365 12.5504 11.6931L15.8162 8.44311C15.8163 8.44292 15.8165 8.44271 15.8167 8.44252C16.0615 8.19821 16.0607 7.80121 15.8167 7.55771Z"
                  fill="#B53A57"
                />
              </g>
              <defs>
                <clipPath id="clip0_1022_1025">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div class="pagination--items">
        <svg
          v-if="page != 1"
          :class="{ disabled: page == 1 }"
          class="previous-button"
          @click="prevPage"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.96209 24.4129C9.62925 24.0801 9.599 23.5592 9.87131 23.1922L9.96209 23.0871L18.0487 15L9.96209 6.9129C9.62925 6.58007 9.599 6.05924 9.87131 5.69223L9.96209 5.58708C10.2949 5.25425 10.8158 5.22399 11.1828 5.49631L11.2879 5.58708L20.0379 14.3371C20.3707 14.6699 20.401 15.1907 20.1287 15.5578L20.0379 15.6629L11.2879 24.4129C10.9218 24.779 10.3282 24.779 9.96209 24.4129Z"
            fill="#B53A57"
          />
        </svg>
        <svg
          v-else
          disabled
          class="disabled-btn"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.96209 24.4129C9.62925 24.0801 9.599 23.5592 9.87131 23.1922L9.96209 23.0871L18.0487 15L9.96209 6.9129C9.62925 6.58007 9.599 6.05924 9.87131 5.69223L9.96209 5.58708C10.2949 5.25425 10.8158 5.22399 11.1828 5.49631L11.2879 5.58708L20.0379 14.3371C20.3707 14.6699 20.401 15.1907 20.1287 15.5578L20.0379 15.6629L11.2879 24.4129C10.9218 24.779 10.3282 24.779 9.96209 24.4129Z"
            fill="#B53A57"
          />
        </svg>
        <v-pagination
          @input="getterNews"
          v-model="page"
          :total-visible="7"
          class="pagination"
          :length="last_page"
        ></v-pagination>
        <svg
          v-if="page != last_page"
          :class="{ disabled: page == last_page }"
          class="next-button"
          @click="nextPage"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.96209 24.4129C9.62925 24.0801 9.599 23.5592 9.87131 23.1922L9.96209 23.0871L18.0487 15L9.96209 6.9129C9.62925 6.58007 9.599 6.05924 9.87131 5.69223L9.96209 5.58708C10.2949 5.25425 10.8158 5.22399 11.1828 5.49631L11.2879 5.58708L20.0379 14.3371C20.3707 14.6699 20.401 15.1907 20.1287 15.5578L20.0379 15.6629L11.2879 24.4129C10.9218 24.779 10.3282 24.779 9.96209 24.4129Z"
            fill="#B53A57"
          />
        </svg>
        <svg
          v-else
          :class="{ disabled: page == last_page }"
          class="next-button"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.96209 24.4129C9.62925 24.0801 9.599 23.5592 9.87131 23.1922L9.96209 23.0871L18.0487 15L9.96209 6.9129C9.62925 6.58007 9.599 6.05924 9.87131 5.69223L9.96209 5.58708C10.2949 5.25425 10.8158 5.22399 11.1828 5.49631L11.2879 5.58708L20.0379 14.3371C20.3707 14.6699 20.401 15.1907 20.1287 15.5578L20.0379 15.6629L11.2879 24.4129C10.9218 24.779 10.3282 24.779 9.96209 24.4129Z"
            fill="#B53A57"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "more": "Read more"
  },
  "kz": {
    "more": "Толығырақ"
  },
  "ru": {
    "more": "Читать больше"
  }
}
</i18n>

<script>
import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([, Navigation, Pagination]);
export default {
  async asyncData({ $axios, i18n }) {
    let page = 1;
    let pagination = 8;
    let params = {
      page,
      pagination,
    };
    params.lang = i18n.locale == "en" ? "en" : i18n.locale;
    const { data, meta } = (await $axios.get(`news`, { params })).data;
    const { last_page } = meta;
    return { data, page, pagination, last_page };
  },
  data: () => ({
    defaultImage: require("@/assets/images/qwe.png"),
    attrs: {
      class: "mb-6",
      boilerplate: true,
      elevation: 2,
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
    nextPage() {
      this.page++;
      this.getterNews();
    },
    prevPage() {
      this.page--;
      this.getterNews();
    },

    async getterNews() {
      let params = {
        page: this.page,
        pagination: this.pagination,
      };
      await this.$axios
        .get(`news`, { params })
        .then((res) => {
          this.data = res.data.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.News {
  max-width: 1400px;
  width: 100%;

  margin: 0 auto;

  padding: 80px 0 120px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 36px;
    line-height: 50px;
    text-align: center;
    text-transform: uppercase;
    color: #224f9e;
  }
  &--table {
    display: grid;
    grid-template-columns: repeat(auto-fit, 305px);
    grid-gap: 58px 20px;
    width: 100%;
    &--items {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      border-radius: 10px;
      cursor: pointer;

      width: 100%;
      max-width: 100%;
      img {
        min-height: 305px;
        width: 305px !important;
        height: 305px !important;

        object-fit: cover;
        border-radius: 10px;
      }
      p {
        &:nth-of-type(1) {
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 16px;
          color: #b5bac1;
          margin: 10px 0 19px;
        }
        &:nth-of-type(2) {
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 22px;
          color: #224f9e;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
          overflow: hidden;
        }
      }
      .test_div {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #233659;
        margin: 14px 0 36px;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        max-height: 48px;
        overflow: hidden;
        p {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
      }
      div {
        display: flex;
        align-items: center;

        a {
          font-family: "OpenSans-Medium";
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 22px;
          color: #b53a57;

          cursor: pointer;

          margin-right: 16px;
        }
      }
    }
  }
  .pagination--items {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 60px;

    .pagination {
      margin: 0 35px;
    }
    svg {
      cursor: pointer;
      fill: #b53a57;
    }
    .previous-button {
      transform: rotate(180deg);
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
  }
}
.disabled {
  path {
    fill: #b5bac1 !important;
  }
}
.disabled-btn {
  transform: rotate(180deg);
  path {
    fill: #b5bac1 !important;
  }
}
@media screen and (max-width: 1440px) {
  .News {
    max-width: 1280px;
  }
}
@media screen and (max-width: 1264px) {
  .News {
    padding: 40px 16px;

    &--table {
      justify-content: center;

      &--items {
        img {
          max-width: 343px;
          width: 100%;
          height: auto;
        }
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .News {
    &--table {
      grid-gap: 40px 0;

      &--items {
        p {
          &:nth-of-type(1) {
            margin: 10px 0 10px;
          }
          &:nth-of-type(2) {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
          }
          &:nth-of-type(3) {
            margin: 8px 0 20px;
          }
        }
      }
    }
    .pagination--items {
      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>