<template>
  <div class="inside_breadcrumbs">
    <div class="inside_breadcrumbs__links">
      <nuxt-link
        :to="localePath(item.url)"
        v-for="(item, index) in links"
        :key="index"
        tag="a"
        class="d-flex align-center"
      >
        <div class="items">
          <p
            class="my-clamp"
            :class="{ textChange: links.length == index + 1 }"
          >
            {{ item.title }}
          </p>
          <span v-if="links.length - 1 != index" class="mx-1">/</span>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
.inside_breadcrumbs {
  max-width: 100%;
  width: 100%;

  margin-bottom: 59px;
}
.inside_breadcrumbs__links {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.items {
  display: flex;
  align-items: center;
}
p {
  color: #bbc2d0;
  font-family: "OpenSans-Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  white-space: nowrap;
  width: 100%;
}
span {
  margin-top: -15px;
  color: #bbc2d0;
}
.textChange {
  color: #224f9e;
  margin-bottom: 0 !important;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  white-space: unset;
}
@media screen and (max-width: 1440px) {
  .inside_breadcrumbs {
    margin-left: 60px;
  }
}
@media screen and (max-width: 960px) {
  .inside_breadcrumbs {
    margin-left: 0;
    max-width: 600px;
    width: 100%;
  }
}
</style>