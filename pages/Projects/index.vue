<template>
  <div class="bg">
    <div class="Projects">
      <div class="Search">
        <input type="search" :placeholder="$t('searching')" v-model="search" />
        <div class="search-btn" @click="searchBtn">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.739 2C17.109 2 21.477 6.368 21.477 11.738C21.477 14.2715 20.5047 16.5823 18.9136 18.3165L22.0444 21.4407C22.3374 21.7337 22.3384 22.2077 22.0454 22.5007C21.8994 22.6487 21.7064 22.7217 21.5144 22.7217C21.3234 22.7217 21.1314 22.6487 20.9844 22.5027L17.8159 19.343C16.1491 20.6778 14.0357 21.477 11.739 21.477C6.369 21.477 2 17.108 2 11.738C2 6.368 6.369 2 11.739 2ZM11.739 3.5C7.196 3.5 3.5 7.195 3.5 11.738C3.5 16.281 7.196 19.977 11.739 19.977C16.281 19.977 19.977 16.281 19.977 11.738C19.977 7.195 16.281 3.5 11.739 3.5Z"
              fill="#FCFCFC"
            />
          </svg>
        </div>
      </div>
      <div class="Projects--type">
        <div
          v-for="(category, idx) in type"
          :key="idx"
          :class="{ active_div: selectedCategory == category.id }"
        >
          <p @click="selectCat(category.id) & (search = '')" class="mb-0">
            {{ category.title }}
          </p>
        </div>
      </div>
      <div class="Projects--list">
        <div
          v-for="(project, idx) in filtered"
          :key="'B' + idx"
          class="Projects--list--div"
        >
          <div
            :style="{
              backgroundImage: `url(${
                project.images.length ? project.images[0].url : defaultImage
              })`,
            }"
            class="opacity"
          ></div>
          <p class="title">
            {{ project.title }}
          </p>
          <div class="hover_div">
            <h2>{{ project.title }}</h2>
            <p>{{ project.product }}</p>
            <a @click="goToPage(project.id)"
              >{{ $t("read_more") }}
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.641066 13.2754C0.419177 13.0535 0.399006 12.7063 0.580551 12.4617L0.641066 12.3916L6.03217 7.00016L0.641066 1.60877C0.419177 1.38688 0.399006 1.03966 0.580551 0.794984L0.641066 0.724886C0.862955 0.502996 1.21017 0.482824 1.45485 0.664371L1.52495 0.724886L7.35828 6.55822C7.58017 6.78011 7.60034 7.12733 7.4188 7.372L7.35828 7.4421L1.52495 13.2754C1.28087 13.5195 0.885144 13.5195 0.641066 13.2754Z"
                  fill="#FCFCFC"
                />
              </svg>
            </a>
          </div>
        </div>
        <div
          v-for="(sub_project, index) in filtered"
          :key="'A' + index"
          class="Projects--list--adaptive"
        >
          <div
            class="opacity"
            :style="{
              backgroundImage: `url(${
                sub_project.images.length
                  ? sub_project.images[0].url
                  : defaultImage
              })`,
            }"
          ></div>
          <a @click="goToInner(sub_project.id)">
            <p class="title">
              {{ sub_project.title }}
            </p>
            <p>{{ sub_project.product }}</p>
          </a>
        </div>
      </div>
    </div>
    <v-overlay :value="loading" z-index="999999">
      <v-progress-circular
        :size="70"
        :width="7"
        color="#ff575f"
        indeterminate
      ></v-progress-circular>
    </v-overlay>
  </div>
</template>

<i18n>
{
  "en": {
    "read_more": "Read more",
    "searching": "Search by project"
  },
  "kz": {
    "read_more": "Толығырақ",
    "searching": "Жоба бойынша іздеу"
  },
  "ru": {
    "read_more": "Читать подробнее",
    "searching": "Поиск по проекту"
  }
}
</i18n>

<script>
import BreadCrumbs from "../../components/ui/BreadCrumbs.vue";
export default {
  components: { BreadCrumbs },
  async asyncData({ $axios, i18n }) {
    let total = (await $axios.get(`projects`)).data.meta.total;
    let page = 1;
    let pagination = total;
    let params = {
      page,
      pagination,
    };
    params.lang = i18n.locale == "en" ? "en" : i18n.locale;
    const { data } = (await $axios.get(`projects`, { params })).data;
    const type = (await $axios.get(`projects/statuses`, { params })).data.data;
    return { data, type, params };
  },
  data: () => ({
    defaultImage: require("@/assets/images/qwe.png"),
    selectedCategory: 1,
    loading: false,
    filtered: [],
    search: "",
    test: [],
  }),
  created() {
    this.selectCat(this.selectedCategory);
  },
  watch: {
    search() {
      if (this.search == "") {
        this.selectCat(this.selectedCategory);
      } else {
        this.searchBtn();
      }
    },
  },
  methods: {
    selectCat(type) {
      this.selectedCategory = type;
      this.filtered = this.data.filter((x) => x.status_id == type);
    },
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
    searchBtn() {
      this.selectCat(this.selectedCategory);
      this.filtered = this.filtered.filter((x) => {
        if (
          x["title"].includes(this.search) == true ||
          x["title"].toUpperCase().includes(this.search) == true ||
          x["title"].toLowerCase().includes(this.search) == true
        ) {
          return x;
        }
      });
    },
    goToPage(id) {
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
.opacity {
  opacity: 0.6;
  background-position: 50%;
  z-index: 1;
  width: 100%;
  height: 305px;
  border-radius: 10px;
  background-size: cover;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: flex-end;
}
.Projects {
  margin: 0 auto;

  max-width: 1400px;
  width: 100%;

  padding: 60px 0 120px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .active_div {
    background: #b53a57;

    p {
      color: white;
      font-weight: bold;
    }
  }

  .Search {
    width: 100%;
    height: 50px;

    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    background: #ffffff;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-left: 20px;

    input {
      max-width: 1180px;
      width: 100%;
      height: 50px;
      padding: 14px 0 15px 0;
      outline: none;
      font-family: "OpenSans-Regular";
    }
    ::placeholder {
      font-family: "OpenSans-Regular";
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      color: #b5bac1;
    }

    .search-btn {
      max-width: 100px;
      width: 100%;
      height: 100%;

      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      background: #b53a57;

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
    }
  }
  &--type {
    display: flex;
    align-items: center;

    margin: 40px 0;
    padding: 4px 6px;
    background: #fff;
    border-radius: 10px;

    width: 100%;

    div {
      width: 100%;
      height: 42px;

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
      transition: 0.33s;

      max-width: 179px;

      &:nth-of-type(3) {
        max-width: 170px;
      }
      &:last-of-type {
        max-width: 220px;
        padding: 0 5px;
      }
      p {
        color: #233659;
        text-align: center;
        font-size: 18px;
        line-height: 24px;
      }
    }
    div:hover {
      background: #b53a57;
      border-radius: 10px;
      p {
        color: #fcfcfc;
      }
    }
    .active_div {
      background: #b53a57;
      border-radius: 10px;
    }
    .deactive_div {
      background: none;
    }
    .active {
      color: #fcfcfc;
      font-weight: 600;
    }
    .deactive {
      color: #233659;
    }
  }
  &--list {
    display: grid;
    grid-template-columns: repeat(auto-fit, 305px);
    grid-gap: 20px;

    width: 100%;
    &--adaptive {
      display: none;
    }
    &--div {
      background: black;
      padding: 0 30px 54px;
      max-width: 305px;
      cursor: pointer;
      width: 100%;
      height: 305px;

      display: flex;
      align-items: flex-end;

      background-size: cover;
      border-radius: 10px;

      position: relative;

      .title {
        z-index: 3;
        color: #fcfcfc;
        opacity: 1;
        font-weight: 600;
        text-transform: uppercase;
      }

      .hover_div {
        display: none;
      }
    }
    &--div:hover .title {
      display: none;
    }
    &--div:hover .opacity {
      background-image: unset !important;
    }
    &--div:hover .background {
      display: none;
    }
    &--div:hover .hover_div {
      display: flex;
      flex-direction: column;

      width: 100%;
      height: 100%;

      h2 {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #fcfcfc;
        text-transform: uppercase;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      p {
        max-width: 245px;
        width: 100%;

        color: #fcfcfc;
        opacity: 0.5;
        font-weight: normal;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-size: 18px;
        line-height: 21px;

        margin: 22px 0 120px !important;
        box-sizing: border-box;
      }
      a {
        z-index: 3;
        font-family: "OpenSans-Regular";
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #fcfcfc;

        cursor: pointer;

        display: flex;
        align-items: center;

        svg {
          margin-left: 16px;
        }
      }
    }
    &--div:hover {
      padding: 30px;
      background: #b53a57 !important;
      border-radius: 10px;
      z-index: 2;

      animation-name: hover;
      animation-duration: 1s;

      @keyframes hover {
        from {
          opacity: 0.4;
          transition: 0.3s;
        }
        to {
          opacity: 1;
          transition: 0;
        }
      }
    }
  }
}
@media screen and (max-width: 1440px) {
  .Projects {
    max-width: 1280px;
  }
}
@media screen and (max-width: 1264px) {
  .Projects {
    padding: 40px 16px 80px;

    &--list {
      justify-content: center;
    }
  }
}
@media screen and (max-width: 960px) {
  .Projects {
    .Search {
      ::placeholder {
        font-size: 16px;
        line-height: 18px;
      }
      .search-btn {
        max-width: unset;
        width: 80px;
      }
    }
    &--type {
      flex-wrap: wrap;
    }
    &--list {
      &--div {
        display: none;
      }
      &--adaptive {
        background: black;
        display: grid;
        background-position: 50%;

        max-width: 305px;
        width: 100%;
        height: 305px;
        padding: 0 30px 54px;

        display: flex;
        align-items: flex-end;

        background-size: cover;
        border-radius: 10px;

        position: relative;
        a {
          width: 100%;
          height: 100%;

          margin-top: auto;

          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        p {
          z-index: 2;
          width: 100%;
          color: #fcfcfc;
          font-weight: 600;
          text-transform: uppercase;

          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .title {
          z-index: 2;
          margin-bottom: 16px !important;
        }
      }
    }
  }
}
@media screen and (max-width: 514px) {
  .Projects {
    &--type {
      display: grid;
      grid-template-columns: 1fr 1fr;

      div {
        max-width: unset !important;
        width: 100%;
        margin-right: 0 !important;

        p,
        .active {
          font-size: 15px;
          line-height: 19px;

          white-space: nowrap;
        }
      }
    }
    &--list {
      &--div {
        .title {
          font-size: 16px;
          line-height: 19px;
        }
      }
      .hover_div {
        h2,
        p,
        a {
          font-size: 16px;
          line-height: 19px;
        }
      }
    }
  }
}
</style>