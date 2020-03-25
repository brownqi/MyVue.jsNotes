<template>
  <div id="app">

      <q-header/>

    <div class="cls-content-group-qxj">

      <div class="cls-nav-app-qxj">
        <q-nav/>
      </div>

      <div class="cls-content-app-qxj">
        <q-content/>
      </div>

    </div>
  </div>
</template>

<script>
  import qHeader from "./components/header-qxj/Header";
  import qNav from "./components/content-qxj/Nav";
  import qContent from "./components/content-qxj/Content";

  export default {
    name: 'App',
    components: {
      qHeader,
      qNav,
      qContent
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #ecf0f3;
    display: flex;
    flex: 1;
    flex-direction: column;

    .cls-content-group-qxj{
      display: flex;
      height: 100%;

      .cls-nav-app-qxj{
        flex: 0.15;
        height: 100%;
        /*background: gray;*/
      }

      .cls-content-app-qxj{
        flex: 0.85;
        height: 100%;
      }

    }

  }
</style>
