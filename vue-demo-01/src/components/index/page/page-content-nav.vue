<template>
  <div class="page-content-nav">
    <div class="cls-page-content-nav-category-container">
      <nav-catalog></nav-catalog>
    </div>
    <div class="cls-page-content-nav-img-container">
      <div class="cls-page-content-nav-img-container-1">

        <nav-slider></nav-slider>

        <div class="cls-page-content-nav-img-pic-1"></div>
        <div class="cls-page-content-nav-img-login">
          <div class="cls-page-content-nav-img-login-default">
            <div class="cls-page-nav-login-row">
              <img src="https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="">
            </div>
            <p>Hi! 你好</p>
            <a v-on:click.stop href="#">注册</a>

            <a v-on:click.stop href="#">立即登录</a>
          </div>
        </div>
      </div>

      <div class="cls-page-content-nav-img-container-2">
        <div class="cls-page-content-nav-img-pic-2"></div>
        <div class="cls-page-content-nav-img-pic-3"></div>
        <div class="cls-page-content-nav-img-pic-4"></div>
        <div class="cls-page-content-nav-img-download">
          <div class="cls-page-content-nav-img-download-row1">
            <img src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="">
          </div>
          <div class="cls-page-content-nav-img-download-row2">
            <p>美团APP手机版</p>
            <p><font color="red">1元起</font> 吃喝玩乐</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import navSlider from './page-content-nav-slider';
  import navCatalog from './page-content-nav-catalog';

  export default {
    components: {
      navSlider,
      navCatalog
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  .page-content-nav {
    margin: 0 auto;
    width: 1190px;
    height: 427px;
    /*position: relative;*/

    .cls-page-content-nav-category-container {
      margin-top: -50px;
      width: 228px;
      height: 473px;
      background: #FFFFFF;
      border: #E5E5E5 1px solid;
      position: absolute;
    }

    .cls-page-content-nav-img-container {
      margin-top: 10px;
      margin-left: 240px;
      position: absolute;
      font-size: 0;

      div {
        display: inline-block;
        font-size: 0;
        vertical-align: middle
      }

      .cls-page-content-nav-img-container-1 {
        .cls-page-content-nav-img-pic-1 {
          width: 150px;
          height: 240px;
          background-image: url("http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg");
          background-size: 150px 240px;

          margin-left: 10px;
          margin-right: 10px;
        }

        .cls-page-content-nav-img-login {
          font-size: 12px;
          width: 228px;
          height: 238px;
          border: #E5E5E5 1px solid;
          background: #FFFFFF;

          .cls-page-content-nav-img-login-default {
            width: 228px;
            height: 189px;
            padding-top: 30px;
            text-align: center;

            .cls-page-nav-login-row {
              width: 228px;
              height: 59px;
              margin-bottom: 10px;
              text-align: center;

              img {
                width: 45px;
                height: 45px;
                border: #E5E5E5 5px solid;
                border-radius: 50%;
              }
            }

            p {
              text-align: center;
              font-size: 16px;
            }

            a {
              font-size: 14px;
              display: block;
              width: 120px;
              height: 40px;
              line-height: 40px;
              margin: 10px auto;
              border: #E5E5E5 1px solid;
              border-radius: 40px;
              transition: all .5s;

              &:hover {
                background: #F6F6F6;
              }
            }
          }
        }
      }

      .cls-page-content-nav-img-container-2 {
        margin-top: 10px;

        .cls-page-content-nav-img-pic-2 {
          width: 270px;
          height: 165px;
          margin-right: 10px;
          background-image: url("http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png");
          background-size: 270px 165px;
        }

        .cls-page-content-nav-img-pic-3 {
          width: 270px;
          height: 165px;
          margin-right: 10px;
          background-image: url("http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg");
          background-size: 270px 165px;
        }

        .cls-page-content-nav-img-pic-4 {
          width: 150px;
          height: 165px;
          margin-right: 10px;
          background-image: url("http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg");
          background-size: 150px;
          height: 165px;
        }

        .cls-page-content-nav-img-download {
          width: 228px;
          height: 163px;
          border: #E5E5E5 1px solid;
          font-size: 12px;
          text-align: center;
          background: #FFFFFF;

          .cls-page-content-nav-img-download-row1 {
            display: block;
            margin-top: 10px;

            img {
              width: 95px;
              height: 95px;
            }
          }

          .cls-page-content-nav-img-download-row2 {
            display: block;

            p:first-child {
              margin-top: 5px;
              font-size: 16px;
            }

            p:last-child {
              margin-top: 10px;
              font-size: 12px;
            }
          }
        }
      }

    }
  }
</style>
