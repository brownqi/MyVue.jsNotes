<template>
  <div class="cls-index-header">
    <header-bar/>
    <header-content/>
  </div>
</template>

<script>
  import headerBar from './header-bar.vue'
  import headerContent from './header-content.vue'

  export default {
    components: {
      headerBar,
      headerContent
    }
  }
</script>

<style lang="scss">
  .cls-index-header{
    height: 197px;
  }
</style>
