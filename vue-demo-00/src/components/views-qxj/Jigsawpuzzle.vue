<template>
  <div class="cls-jigsawpuzzle-body-qxj">
    <div class="cls-jigsawpuzzle-row1-qxj">
      <div class="cls-jigsawpuzzle-row1-left-qxj">
        <div class="cls-jigsawpuzzle-row1-left-body-qxj">
          <span class="iconfont icon-caidan"></span>
          <span>所有拼图 (共{{resultSet.length}}个)</span>
        </div>
      </div>
      <div class="cls-jigsawpuzzle-row1-right-qxj">

        <span class="clas-jisawpuzzle-row1-right-body-qxj">
          <span class="iconfont icon-tianjia"></span>
          <span>添加拼图</span>
        </span>

      </div>
    </div>
    <div class="cls-jigsawpuzzle-row2-qxj">
      <table cellspacing="0">
        <tr style="background: #ecf0f3">
          <th class="ofTableUnit" colspan="2">编码</th>
          <th class="ofTableUnit">开始时间</th>
          <th class="ofTableUnit">结束时间</th>
          <th class="zsfTableUnit">数量</th>
          <th class="zsfTableUnit">状态</th>
          <th class="doubleTableUnit" colspan="2">操作</th>
        </tr>
        <tr v-for="item in pageResultSet" :key="item.id" class="table-items">
          <td class="zfTableUnit"><input type="checkbox" v-model="checkbox[item.id%14]"></td>
          <td class="singelTableUnit">{{item.id}}</td>
          <td class="ofTableUnit">{{item.startTime}}</td>
          <td class="ofTableUnit">{{item.finishTime}}</td>
          <td class="zsfTableUnit">{{item.nums}}</td>
          <td class="zsfTableUnit">{{item.status}}</td>
          <td class="singelTableUnit"><span class="iconfont icon-bianji myIconStyle">编辑</span></td>
          <td class="singelTableUnit"><span class="iconfont icon-shanchu myIconStyle">删除</span></td>
        </tr>
      </table>
    </div>

    <div class="cls-jigsawpuzzle-row3-qxj">
      <div class="cls-jigsawpuzzle-row3-left-qxj">
        <input type="checkbox" id="allPic" :value="checkAll" v-model="checkAll">
        <label for="allPic" class="myIconStyle">全选</label>
        <span class="myIconStyle">删除</span>
      </div>
      <span class="cls-jigsawpuzzle-row3-right-qxj">
        <button class="icon-border" @click="reducePage">
          <span class="iconfont icon-jiantouzuo myIconStyle"></span>
        </button>
        <span>{{pageNum}}/{{pageCounts}}</span>
        <button class="icon-border" @click="addPage">
          <span class="iconfont icon-jiantouyou myIconStyle"></span>
        </button>

          <input type="text" class="input-item" v-model="pageNumTemp">

        <span class="icon-border myIconStyle" @click="toPage">
          跳转
        </span>

      </span>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data() {
      return {
        pageCounts: 1,
        pageNum: 1,
        pageNumTemp: 1,
        resultSet: [],
        pageResultSet: [],
        checkbox: [],
        checkAll:false
      }
    },
    created() {
      let url = `${this.global.basePath}/items`;
      axios.get(url).then(response => {
        const result = response.data;
        this.resultSet = result;
        this.pageCounts = Math.ceil(this.resultSet.length / 14);

        for (let i = 0; i < 14; i++) {
          this.pageResultSet.splice(i, 0, this.resultSet[i])
        }
        for (let i = 0; i < 14; i++) {
          this.checkbox.splice(i,0,false)
        }
      });

    },
    methods: {
      toPage() {
        this.pageNum = this.pageNumTemp;
      },
      addPage() {
        if (this.pageNum < this.pageCounts) {
          this.pageNum++;
        }
      },
      reducePage() {
        if (this.pageNum > 0) {
          this.pageNum--;
        }
      }
    },
    watch: {
      pageNum: function (num) {
        this.pageResultSet = [];
        let start = (num - 1) * 14;
        let max;
        if ((start + 14) < this.resultSet.length) {
          max = start + 14;
        } else {
          max = this.resultSet.length;
        }
        for (let i = start, j = 0; i < max; i++, j++) {
          this.pageResultSet.splice(j, 0, this.resultSet[i])
        }
      },
      checkAll:function (isTrue) {
        if (isTrue){
          for (let i = 0; i < 14; i++) {
            this.checkbox.splice(i,1,true);
          }
        }else {
          for (let i = 0; i < 14; i++) {
            this.checkbox.splice(i,1,false);
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .cls-jigsawpuzzle-body-qxj {
    width: auto;
    height: 680px;
    margin: 20px 50px 50px 50px;
    display: flex;
    flex-direction: column;


    .cls-jigsawpuzzle-row1-qxj {
      display: flex;
      flex: 0.1;
      font-size: 16px;
      color: white;
      align-items: start;
      justify-content: center;


      .cls-jigsawpuzzle-row1-left-qxj {
        flex: 1;
        line-height: 40px;
        color: #5ccec6;

        .cls-jigsawpuzzle-row1-left-body-qxj {
          margin-left: 10px;
        }

      }

      .cls-jigsawpuzzle-row1-right-qxj {
        flex: 1;
        text-align: right;

        .clas-jisawpuzzle-row1-right-body-qxj {
          display: inline-block;
          text-align: center;
          line-height: 40px;
          width: 130px;
          background: #5ccec6;
          border-radius: 10px;
        }
      }
    }


    .cls-jigsawpuzzle-row2-qxj {
      flex: 0.8;
      align-items: center;

      table {
        text-align: center;

        .singelTableUnit {
          font-family: "Microsoft YaHei UI Light", Consolas;
          color: gray;
          width: 180px;
          border: gainsboro 0.5px solid;
          height: 33px;
        }

        .ofTableUnit {
          font-family: "Microsoft YaHei UI Light", Consolas;
          color: gray;
          width: 270px;
          border: gainsboro 0.5px solid;
          height: 33px;
        }

        .zsfTableUnit {
          font-family: "Microsoft YaHei UI Light", Consolas;
          color: gray;
          width: 135px;
          border: gainsboro 0.5px solid;
          height: 33px;
        }

        .zfTableUnit {
          font-family: "Microsoft YaHei UI Light", Consolas;
          color: gray;
          width: 90px;
          border: gainsboro 0.5px solid;
          height: 33px;
        }

        .doubleTableUnit {
          font-family: "Microsoft YaHei UI Light", Consolas;
          color: gray;
          width: 360px;
          border: gainsboro 0.5px solid;
          height: 33px;
        }


      }
    }

    .cls-jigsawpuzzle-row3-qxj {
      flex: 0.1;
      display: flex;

      justify-content: flex-end;


      .cls-jigsawpuzzle-row3-left-qxj {
        color: black;
        flex: 1;
        display: inline-block;
        align-items: end;
        justify-content: center;
        line-height: 68px;

        label {
          border: none;
        }

        span {
          margin-left: 20px;
          border: gainsboro solid 1px;
          border-radius: 5px;
          padding: 2px 10px;
        }
      }

      .cls-jigsawpuzzle-row3-right-qxj {
        text-align: right;
        flex: 1;
        line-height: 68px;

        .icon-border {
          padding: 2px 10px;
          border: gainsboro solid 1px;
          border-radius: 5px;
          background: white;
        }

        .input-item {
          width: 60px;
          height: 25px;
          border-radius: 5px;
          border: gainsboro 0.5px solid;
          margin: 20px;
          text-align: center;
        }
      }
    }
  }

  .myIconStyle {
    /*border: gainsboro 0.5px solid;*/
    color: gray;
  }

  .myIconStyle:hover {
    color: #5ccec6;
    cursor: pointer;
  }

  .table-items {
    font-size: 12px;
  }

  .table-items:nth-child(odd) {
    background: #ecf0f3;
  }

  /* 临时 */

  .cls-jigsawpuzzle-body-qxj {
  }

  .cls-jigsawpuzzle-row1-qxj {
    /*background: gainsboro;*/
  }

  .cls-jigsawpuzzle-row2-qxj {
    /*background: whitesmoke;*/
  }

  .cls-jigsawpuzzle-row3-qxj {
  }
</style>
