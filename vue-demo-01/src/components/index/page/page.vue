<template>
    <div class="cls-index-page">
      <page-content-nav/>
      <page-body-recommend></page-body-recommend>
    </div>
</template>

<script>
  import pageContentNav from './page-content-nav.vue'
  import pageBodyRecommend from './page-content-body-recommend'
    export default {
    components:{
      pageContentNav,
      pageBodyRecommend
    }
    }
</script>

<style lang="scss">

</style>
