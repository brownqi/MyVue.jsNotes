<template>
  <div class="index-body">
    <q-header/>
    <div class="cls-index-page">
      <q-page/>
    </div>
    <div class="cls-index-footer">
      <q-footer/>
    </div>
  </div>
</template>

<script>
  import qHeader from "./header/header";
  import qPage from "./page/page";
  import qFooter from "./footer/footer";

  export default {
    components: {
      qHeader,
      qPage,
      qFooter
    }
  }
</script>

<style lang="scss">
  .index-body{
    background: #F8F8F8;
  }
</style>
