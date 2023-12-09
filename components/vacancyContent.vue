<template>
  <div class="Faq-blocks" @click="opened = !opened">
    <h1>{{ item.title }}</h1>
    <div
      class="answers"
      :class="{ hidden: opened == false, show: opened == true }"
      v-for="(detail, index) in item.detail"
      :key="index"
    >
      <small>{{ detail.created }}</small><br>
      <a :href="detail.file" target="_blank">
        {{ detail.title }}
      </a>
    </div>
    <svg
      :class="{ reveal: opened == true, closed: opened == false }"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.84344 8.63373C5.1319 8.34527 5.58329 8.31905 5.90136 8.55506L5.99249 8.63373L13.0013 15.6422L20.0101 8.63373C20.2986 8.34527 20.75 8.31905 21.068 8.55506L21.1592 8.63373C21.4476 8.92218 21.4738 9.37357 21.2378 9.69165L21.1592 9.78278L13.5758 17.3661C13.2874 17.6546 12.836 17.6808 12.5179 17.4448L12.4268 17.3661L4.84344 9.78278C4.52614 9.46548 4.52614 8.95103 4.84344 8.63373Z"
        fill="#B53A57"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: [],
    },
  },
  data: () => ({
    opened: false,
  }),
};
</script>

<style lang="scss" scoped>
.hidden {
  display: none !important;
}
.show {
  display: block !important;
}
.reveal {
  transform: rotate(-180deg);
  animation-name: reveal;
  animation-duration: 0.4s;

  @keyframes reveal {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-180deg);
    }
  }

  path {
    fill: gray;
  }
}
.closed {
  animation-name: closed;
  animation-duration: 0.4s;

  @keyframes closed {
    0% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
}
.Faq-blocks {
  display: flex;
  flex-direction: column;

  position: relative;

  background: #fff;
  border-radius: 10px;

  padding: 30px;
  cursor: pointer;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
    color: #b53a57;
    transition: 0.22s;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-decoration-line: underline;
    color: #233659;
    margin-bottom: 0 !important;
  }

  svg {
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
  }

  .answers {
    margin-top: 32px;

    a {
      margin-bottom: 34px !important;
      font-family: "OpenSans-Regular";
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #233659;
      text-decoration: underline !important;

      transition: 0.22s;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
  &:hover {
    box-shadow: 0px 4px 20px rgba(34, 79, 158, 0.15);
  }
}
@media screen and (max-width: 500px) {
  .Faq-blocks {
    padding: 20px;
    h1 {
      max-width: 265px;

      font-size: 18px;
      line-height: 21px;
    }

    svg {
      top: 20px;
      right: 20px;
    }
  }
}
@media screen and (max-width: 340px) {
  .Faq-blocks {
    h1 {
      max-width: 210px;
      font-size: 16px;
      line-height: 21px;
    }
  }
}
</style>