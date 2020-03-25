<template>
  <div class="cls-page-content-nav-img-slider">
    <div>
      <el-carousel :interval="5000" height="240px">
        <el-carousel-item v-for="item in imgs" :key="item">
          <img :src="item" width="550px" height="240px" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          imgs: [
            "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
            "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
            "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
            "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
            "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png"
          ]
        };
      }
    }
</script>

<style lang="scss">
  .cls-page-content-nav-img-slider {
    font-size: 12px;
    width: 550px;
    height: 240px;
    div{
      width: 550px;
      height: 240px;
    }
  }
</style>
