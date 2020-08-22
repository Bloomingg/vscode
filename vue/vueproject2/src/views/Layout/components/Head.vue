<template>
  <div id="header-wrap">
    <span class="header-icon1">
      <img src="@/assets/images/menu.png" alt />
    </span>
    <span class="header-icon2">
      <img src="@/assets/images/user.png" alt />
      <strong>{{username}}</strong>
    </span>
    <span class="header-icon3">
      <img src="@/assets/images/logout.png" alt @click="exit" />
    </span>
  </div>
</template>
<script>
import { computed } from "@vue/composition-api";
export default {
  setup(props, { root }) {
    const exit = () => {
      root.$store.dispatch("exit").then(() => {
        root.$router.push({
          name: "Login",
        });
      });
    };
    const username = computed(() => root.$store.state.login.username);
    console.log(username.value);
    return {
      username,
      exit,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../../styles/config.scss";
#header-wrap {
  position: fixed;
  top: 0;
  right: 0;
  left: $navMenu;
  height: 75px;
  background-color: #fff;
  box-shadow: 0 3px 0 16px rgba(0, 0, 0, 0.1);
  line-height: 75px;

  .header-icon1,
  .header-icon2,
  .header-icon3 {
    position: absolute;
    top: 10px;
    img {
      display: inline-block;
      width: 48px;
      height: 48px;
    }
  }
  .header-icon1 {
    left: 20px;
  }
  .header-icon2 {
    right: 180px;
    top: -3px;
    img {
      vertical-align: middle;
    }
  }
  .header-icon3 {
    right: 40px;
    cursor: pointer;
    img {
      width: 24px;
      height: 24px;
    }
  }
}
</style>