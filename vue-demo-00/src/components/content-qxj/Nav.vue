<template>
  <div class="cls-nav-qxj">
    <div class="cls-select-group-qxj">
      <div class="cls-catalog-qxj" @click="isAllSelectShow=!isAllSelectShow" v-model="isAllSelectShow">
        <div class="cls-catalog-body-qxj">
          <span class="iconfont icon-icon-"></span>
          <span>目录</span>
        </div>
      </div>

      <div class="cls-list-qxj" @click="isGiftListShow=!isGiftListShow" v-model="isGiftListShow">
        <div class="cls-list-body-qxj" ref="listStyle">
          <span class="iconfont icon-liwu-"></span>
          <span>礼物管理</span>
          <span :class="giftListArrow"></span>
        </div>
      </div>
      <transition-group name="gift-list" tag="ul">
        <li class="list-item" v-show="isGiftListShow" v-for="select in giftSelects" :key="select.id">
          <router-link :to="select.link" class="router-link-item">{{select.name}}</router-link>
        </li>
      </transition-group>

      <div class="cls-list-qxj" @click="isUserListShow=!isUserListShow" v-model="isUserListShow">
        <div class="cls-list-body-qxj">
          <span class="iconfont icon-yonghu1"></span>
          <span>用户管理</span>
          <span :class="userListArrow"></span>
        </div>
      </div>
      <transition-group name="user-list" tag="ul">
        <li class="list-item" v-show="isUserListShow" v-for="select in userSelects" :key="select.id">
          <router-link :to="select.link" class="router-link-item">{{select.name}}</router-link>
        </li>
      </transition-group>

      <div class="cls-list-qxj" @click="isSourceListShow=!isSourceListShow" v-model="isSourceListShow">
        <div class="cls-list-body-qxj">
          <span class="iconfont icon-caidan"></span>
          <span>线上资源</span>
          <span :class="sourceListArrow"></span>
        </div>
      </div>
      <transition-group name="source-list" tag="ul">
        <li class="list-item" v-show="isSourceListShow" v-for="select in sourceSelects" :key="select.id">
          <router-link :to="select.link" class="router-link-item">{{select.name}}</router-link>
        </li>
      </transition-group>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isAllSelectShow: false,
        giftListArrow: 'iconfont icon-yuanquan-xia',
        isGiftListShow: false,
        giftSelects: [
          {id: '0', name: '所有礼物', link: '/all-gifts'},
          {id: '1', name: '所有商品', link: '/all-goods'},
        ],
        userListArrow: 'iconfont icon-yuanquan-xia',
        isUserListShow: false,
        userSelects: [
          {id: '0', name: '用户管理0', link: '/user-management0'},
          {id: '1', name: '用户管理1', link: '/user-management1'},
          {id: '2', name: '用户管理2', link: '/user-management2'}
        ],
        sourceListArrow: 'iconfont icon-yuanquan-xia',
        isSourceListShow: false,
        sourceSelects: [
          {id: '0', name: '问卷', link: '/questionnaire'},
          {id: '1', name: '拼图', link: '/jigsawpuzzle'},
          {id: '2', name: '考试', link: '/examination'}
        ]
      }
    },
    watch: {
      isGiftListShow: function (isTrue) {
        if (isTrue) {
          this.giftListArrow = 'iconfont icon-yuanquan-shang'
        } else {
          this.giftListArrow = 'iconfont icon-yuanquan-xia'
        }
      },
      isUserListShow: function (isTrue) {
        if (isTrue) {
          this.userListArrow = 'iconfont icon-yuanquan-shang'
        } else {
          this.userListArrow = 'iconfont icon-yuanquan-xia'
        }
      },
      isSourceListShow: function (isTrue) {
        if (isTrue) {
          this.sourceListArrow = 'iconfont icon-yuanquan-shang'
        } else {
          this.sourceListArrow = 'iconfont icon-yuanquan-xia'
        }
      },
      isAllSelectShow: function (isTrue) {
        if (isTrue) {
          this.isGiftListShow = true;
          this.isUserListShow = true;
          this.isSourceListShow = true;
        } else {
          this.isGiftListShow = false;
          this.isUserListShow = false;
          this.isSourceListShow = false;
        }
      }
    }
  }
</script>

<style lang="scss">
  .cls-nav-qxj {
    margin: 20px 10px 0px 0px;
    height: 97.6%;
    border: #2d3e4e solid 1px;
    background: #2d3e4e;
    border-radius: 0 10px 0 0;
    box-shadow: 0 0 10px gray;

    .cls-select-group-qxj {
      width: 100%;
      height: 70%;
      margin-top: 60px;

      .cls-catalog-qxj {
        background: #2d3e4e;
        width: 100%;
        height: 70px;
        line-height: 70px;
        color: white;

        .cls-catalog-body-qxj {
          margin-left: 40px;

          span {
            margin-left: 10px;
            font-size: 24px;
          }
        }
      }

      .cls-list-qxj {
        background: #425261;
        width: 100%;
        height: 70px;
        line-height: 70px;
        color: white;
        text-align: center;

        .cls-list-body-qxj {
          /*margin-left: 50px;*/

          span {
            margin-right: 10px;
            font-size: 24px;
          }
        }
      }

      .cls-list-qxj:hover {
        background-color: darkgray;
        cursor: pointer;
      }

      .list-item {
        background: #2d3e4e;
        width: 100%;
        height: 50px;
        line-height: 50px;
        color: white;
        font-size: 20px;
        text-align: center;
      }

      .list-item:hover {
        background: gray;
        cursor: pointer;
      }

      .cls-catalog-qxj:hover {
        background: gray;
        cursor: pointer;
      }
    }
  }

  .gift-list-enter-active {
    transition: all 0.2s;
  }

  .gift-list-leave-active {
    transition: all 0.1s;
  }

  .gift-list-enter, .gift-list-leave-to {
    opacity: 0.5;
    transform: translateX(-280px);
  }

  .user-list-enter-active {
    transition: all 0.2s;
  }

  .user-list-leave-active {
    transition: all 0.1s;
  }

  .user-list-enter, .user-list-leave-to {
    opacity: 0.5;
    transform: translateX(-280px);
  }

  .source-list-enter-active {
    transition: all 0.2s;
  }

  .source-list-leave-active {
    transition: all 0.1s;
  }

  .source-list-enter, .source-list-leave-to {
    opacity: 0.5;
    transform: translateX(-280px);
  }
</style>
