<template>
  <div class="qxj-content-recommend">
    <div class="qxj-c-r-wrapper">
      <div class="qxj-c-r-header">
        <h2>猜你喜欢</h2>
        <p>为你甄选最合适的</p>
      </div>
      <div class="qxj-c-r-content">
        <div class="qxj-item-wrapper">
          <transition-group tag="div" name="list">
            <div class="qxj-good" v-for="(good,index) in goodList" :key="index">
              <div class="qxj-good-img">
                <img :src="good.src" alt />
              </div>
              <h3 class="qxj-good-name">{{good.name}}</h3>
              <div class="qxj-good-rate">
                <el-rate
                  class="qxj-rate-value"
                  v-model="good.rate"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                ></el-rate>
                <span class="qxj-rate-count">{{good.count}}个评价</span>
              </div>
              <div class="qxj-good-addr">{{good.addr}}</div>
              <div class="qxj-good-price">
                <span class="qxj-price-code">￥</span>
                <span class="qxj-price-value">{{good.price}}</span>
                <span class="qxj-price-text">起</span>
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios';
  export default {
    data() {
      return {
        goodList: []
      };
    },
    created() {
      let url = "http://www.brownqi.cn:3001/goodList";
      Axios.get(url).then((resp) => {
        this.goodList = resp.data;
      });
    }
  };
</script>

<style lang="scss" scoped>
  .qxj-content-recommend {
    width: 100%;
    margin-top: 50px;
    .qxj-c-r-wrapper {
      width: 1190px;
      margin: 0 auto;
      background-color: #ffffff;
      .qxj-c-r-header {
        width: 1190px;
        height: 44px;
        background: rgb(88, 174, 221)
        linear-gradient(to right, rgb(88, 174, 221) 2%, rgb(66, 191, 205) 97%)
        repeat scroll 0% 0%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        display: flex;
        color: #ffffff;
        h2 {
          font-size: 18px;
          margin-left: 13px;
          margin-right: 10px;
          display: flex;
          align-items: center;
        }
        p {
          font-size: 14px;
          display: flex;
          align-items: center;
        }
      }
      .qxj-c-r-content {
        padding: 10px;
        box-sizing: border-box;
        font-size: 0;
        border: #E5E5E5 1px solid;
        border-top: none;
        border-radius: 0 0 10px 10px;

        .qxj-item-wrapper {
          .list-enter-active,
          .list-leave-active {
            transition: all 1s;
          }
          .qxj-good {
            width: 233px;
            box-sizing: border-box;
            display: inline-block;
            padding: 10px;
            background-color: white;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.5s;
            &:hover {
              background-color: rgba($color: #666, $alpha: 0.1);
            }
            .qxj-good-img {
              width: 214px;
              overflow: hidden;
              img {
                width: 214px;
                border-radius: 5px;
                transition: all 0.5s;
                &:hover {
                  transform: scale3d(1.2, 1.2, 0);
                }
              }
            }
            .qxj-good-name {
              font-size: 16px;
              line-height: 22px;
              width: 100%;
              height: 22px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              margin-top: 5px;
            }
            .qxj-good-rate {
              display: flex;
              .qxj-rate-value .el-rate__icon {
                font-size: 12px;
                margin-right: 3px;
                line-height: 24px;
                height: 24px;
                .el-rate__decimal {
                  line-height: 24px;
                  height: 24px;
                }
              }
              .qxj-rate-count {
                font-size: 12px;
                color: #999;
                height: 24px;
                line-height: 24px;
                margin-left: 10px;
              }
            }
            .qxj-good-addr {
              font-size: 12px;
              color: #999999;
              width: 100%;
              height: 18px;
              line-height: 18px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              margin-top: 4px;
            }
            .qxj-good-price {
              color: #ff6600;
              .qxj-price-code {
                font-size: 14px;
                font-weight: 700;
              }
              .qxj-price-value {
                font-size: 22px;
              }
              .qxj-price-text {
                font-size: 12px;
                margin-left: 4px;
                font-weight: 700;
              }
            }
          }
        }
      }
    }
  }
</style>
