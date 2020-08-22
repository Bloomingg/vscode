<template>
  <div id="main-wrap">
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
@import "../../../styles/config.scss";
#main-wrap {
  height: 100vh;
  position: fixed;
  left: $navMenu;
  top: 75px;
  right: 0;
  bottom: 0;
  border: 30px solid #f7f7f7;
  border-bottom: none;
  box-sizing: border;
}
.main-content {
  width: 100%;
  height: 100%;
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  @include webkit(box-sizing, border-box);
  @include webkit(transition, all 0.3s ease 0s);
}
</style>