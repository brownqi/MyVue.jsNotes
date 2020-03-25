<template>
  <div class="qxj-banner-left">
    <div class="qxj-b-l-title">全部分类</div>
    <div class="qxj-left-wrapper">
      <div class="qxj-b-l-list">
        <ul>
          <li class="qxj-b-l-list-item" v-for="cate in cates" :key="cate.index">
            <div class="qxj-cate-logo">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="cate[0].icon"/>
              </svg>
            </div>
            <div class="qxj-cate-item-wrapper">
              <div
                class="qxj-item-type"
                :class="{active:index === (cate.length-1)}"
                v-for="(item,index) in cate"
                :key="item.index"
              >{{item.type}}
              </div>
            </div>
            <div class="qxj-cate-right">
              <span class="el-icon-arrow-right"></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios';

  export default {
    data() {
      return {
        cates: []
      };
    },
    created() {
      Axios.get("http://www.brownqi.cn:3001/category").then((resp) => {
        this.cates = resp.data;
      });
    }
  };
</script>

<style lang="scss" scoped>
  .qxj-banner-left {
    width: 100%;
    height: 100%;

    .qxj-b-l-title {
      width: 228px;
      height: 42px;
      padding-top: 15px;
      left: 0;
      background-color: white;
      text-indent: 10px;
      font-size: 16px;
      font-weight: 600;
    }

    .qxj-left-wrapper {
      width: 100%;
      height: 100%;
      position: relative;

      .qxj-b-l-list {
        width: 100%;
        height: 100%;

        ul {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;

          .qxj-b-l-list-item {
            display: flex;
            flex: 0 0 26px;
            align-items: center;
            justify-content: center;
            &:hover .qxj-item-type{
              font-weight: 600;
            }

            .qxj-cate-logo {
              flex: 0 0 26px;
              width: 26px;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;

              .icon {
                font-size: 18px;
              }
            }

            .qxj-cate-item-wrapper {
              display: flex;
              flex: 1;
              justify-content: flex-start;
              white-space: nowrap;
              overflow: hidden;

              .qxj-item-type::after {
                content: "/";
                padding: 0 2px;
              }

              .active::after {
                content: "";
              }
            }

            .qxj-cate-right {
              flex: 0 0 30px;
              width: 30px;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            &:hover {
              background-color: #FFF7EB;
            }
          }
        }
      }
    }
  }
</style>
