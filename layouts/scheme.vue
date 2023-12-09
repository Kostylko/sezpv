<template>
  <v-app>
    <div class="header__wrapper">
      <vue-header :offset="true"></vue-header>
    </div>
    <nuxt />
  </v-app>
</template>

<script>
import vueHeader from "@/components/vueHeader.vue";
export default {
  components: {
    vueHeader,
  },
};
</script>

<style>

.header__wrapper{
    position: absolute;
    top: 20px;
    z-index: 10;
    width: 100%;
}
.header__wrapper.hide__header {
    top: -150px;
    visibility: hidden;
    transition: all .5s ease;
    }
</style>