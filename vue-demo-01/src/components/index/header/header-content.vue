<template>
  <div>
    <div class="cls-index-header-content">
      <div class="cls-index-header-content-body">

        <div class="cls-index-header-content-body-title-module">
          <router-link to="/">
            <img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="">
          </router-link>
        </div>

        <div class="cls-index-header-content-body-search-input">
          <input type="text" placeholder="  搜索商家或地点">
          <button class="el-icon-search"></button>
        </div>

        <div class="cls-index-header-content-links">
          <a v-on:click.stop href="" class="links-1">美团外卖</a>
          <a v-on:click.stop href="" class="links-2">猫眼电影</a>
          <a v-on:click.stop href="" class="links-3">美团酒店</a>
          <a v-on:click.stop href="" class="links-4">民宿/公寓</a>
          <a v-on:click.stop href="" class="links-5">商家入驻</a>
          <a v-on:click.stop href="" class="links-6">美团公益</a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  .cls-index-header-content {
    height: 157px;
    background: #FFFFFF;
    box-shadow: 0 5px 15px gainsboro;


    .cls-index-header-content-body {
      width: 1190px;
      height: 122px;
      padding-bottom: 35px;
      margin: 0 auto;

      .cls-index-header-content-body-title-module {
        display: inline-block;
        width: 220px;
        height: 54px;
        padding: 28px 60px 40px 0;

        img {
          width: 126px;
          height: 46px;
        }
      }

      .cls-index-header-content-body-search-input {
        display: inline-block;
        width: 550px;
        height: 93px;
        padding-top: 28px;
        vertical-align: top;
        margin-left: 30px;

        input {
          width: 469px;
          height: 38px;
          border: 1px solid #E5E5E5;
          border-radius: 4px 0 0 4px;
          border-right: none;
          background: transparent;
        }

        button {
          outline: none;
          display: inline-block;
          width: 80px;
          height: 40px;
          background: #FFC300;
          float: right;
          border: none;
          border-bottom-right-radius: 4px;
          border-top-right-radius: 4px;
          box-sizing: border-box;
          font-size: large;
          font-weight: 800;

          &:hover {
            cursor: pointer;
          }
        }
      }

      .cls-index-header-content-links {
        margin: 0 auto;
        width: 640px;
        height: 21px;

        a {
          width: 24px;
          height: 21px;
          margin: 0 18px;
          font-size: 16px;
          font-weight: 900;
          color: #222222;
        }

        .links-1:hover {
          color: #FBC700;
        }

        .links-2:hover {
          color: #ED1E24;
        }

        .links-3:hover {
          color: #F04D4E;
        }

        .links-4:hover {
          color: #FDC411;
        }

        .links-5:hover {
          color: #FE8C00;
        }

        .links-6:hover {
          color: #F04D4E;
        }

      }

    }
  }
</style>
