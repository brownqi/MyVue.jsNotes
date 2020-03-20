<template>
  <div class="cls-header-group-qxj">
    <div class="cls-header-item-left-qxj">
      <h2>LOGO</h2>
    </div>
    <div class="cls-header-item-right-qxj">
      <div class="cls-header-item-right-group-qxj">
        <span class="iconfont icon-yonghu"></span>
        <span>您好，{{username}}</span>
        <span>退出</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        username:''
      }
    },
    created() {
      this.username = this.global.currentUser;
    }
  }
</script>

<style lang="scss">
  .cls-header-group-qxj {
    flex: 0 0 70px;
    background: #5ccec6;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 5px #425261;


    .cls-header-item-left-qxj{
      flex: 0.45;
    }

    .cls-header-item-right-qxj{
      flex: 0.45;
      font-size: 16px;
      .cls-header-item-right-group-qxj{
        text-align: right;
      }
      span {
        margin-right: 10px;
      }
    }
  }
</style>
