<template>
  <div>
    <Head />
    <Main />
    <Nav />
  </div>
</template>

<script>
import Head from "./components/Head";
import Main from "./components/Main";
import Nav from "./components/Nav";
export default {
  components: {
    Head,
    Main,
    Nav,
  },
};
</script>
<style lang='scss' scoped>
</style>