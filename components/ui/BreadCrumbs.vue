<template>
  <div class="main_bread">
    <div class="Breadcrumbs">
      <div>
        <nuxt-link
          :to="localePath(item.url)"
          v-for="(item, idx) in qwe"
          :key="idx"
          tag="a"
          class="d-flex align-center"
        >
          <div class="items">
            <p class="my-clamp" :class="{ textChange: qwe.length == idx + 1 }">
              {{ item.title }}
            </p>
            <span v-if="qwe.length - 1 != idx" class="mx-1">/</span>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  props: {
    qwe: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
.my-clamp {
  white-space: nowrap;
}
.main_bread {
  max-width: 100%;
  width: 100%;
  margin-bottom: 30px;

  margin: 50px auto 0 auto;
  display: flex;
  justify-content: center;
}
.Breadcrumbs {
  display: flex;
  flex-direction: row !important;
  align-items: center;

  max-width: 1400px;
  width: 100%;
}
div {
  display: flex;
  flex-direction: row;
  align-items: center;

  max-width: 600px;
}
a {
  color: #a0b4c3;
}
p {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 0 !important;
}
span {
  margin-left: 5px;
  margin-right: 5px;
}
.textChange {
  color: #224f9e;
  margin-bottom: 0 !important;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.items {
  display: flex;
  align-items: center;
}
@media screen and (max-width: 1440px) {
  .main_bread {
    margin-left: 60px;
  }
}
@media screen and (max-width: 960px) {
  .main_bread {
    margin-left: 16px !important;
  }
  .Breadcrumbs {
    margin-left: 0;
    // margin-top: 25px !important;
    // margin-bottom: 27px !important;
  }
}
@media only screen and (max-width: 769px) {
  .Breadcrumbs {
    p {
      font-size: 12px;
      line-height: 14px;
    }
    span {
      font-size: 12px;
      line-height: 14px;
    }
  }
}
</style>
