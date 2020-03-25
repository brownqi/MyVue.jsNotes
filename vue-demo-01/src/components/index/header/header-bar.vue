<template>
  <div class="cls-index-header-bar">
    <div class="cls-i-h-b-left">
      <i class="el-icon-location"></i>
      <span>哈尔滨</span>
      <span class="cls-i-h-b-l-button">切换城市</span>

      <div class="cls-i-h-b-l-cityList">
        [
        <ul>
          <li>阿城区</li>
          <li>双城</li>
          <li>巴彦县</li>
        </ul>
        ]
      </div>

      <span class="cls-i-h-b-l-login">立即登录</span>
      <span class="cls-i-h-b-l-register">注册</span>

    </div>
    <div class="cls-i-h-b-right">

      <div class="cls-i-h-b-right-1">
        <span>我的美团</span>
        <div class="cls-i-h-b-right-1-dropdown">
          <ul>
            <li v-for="userSelect in user">{{userSelect}}</li>
          </ul>
        </div>
      </div>

      <div class="cls-i-h-b-right-2">
        <span>手机APP</span>
      </div>

      <div class="cls-i-h-b-right-3">
        <span>商家中心</span>
        <div class="cls-i-h-b-right-3-dropdown">
          <ul>
            <li v-for="sellerSelect in seller">{{sellerSelect}}</li>
          </ul>
        </div>
      </div>

      <div class="cls-i-h-b-right-4">
        <span>美团规则</span>
        <div class="cls-i-h-b-right-4-dropdown">
          <ul>
            <li v-for="ruleSelect in rule">{{ruleSelect}}</li>
          </ul>
        </div>
      </div>

      <div class="cls-i-h-b-right-5">
        <span>网站导航</span>
        <div class="cls-i-h-b-right-5-dropdown">
          <div class="cls-i-h-b-right-5-dropdown-hotel">
            <div>
              <span>酒店旅游</span>
              <ul>
                <li v-for="select in nav[0].hotel">{{select}}</li>
              </ul>
            </div>
          </div>

          <div class="cls-i-h-b-right-5-dropdown-food">
            <div>
              <span>吃美食</span>
              <ul>
                <li v-for="select in nav[1].food">{{select}}</li>
              </ul>
            </div>

          </div>

          <div class="cls-i-h-b-right-5-dropdown-movie">
            <div>
              <span>看电影</span>
              <ul>
                <li v-for="select in nav[2].movie">{{select}}</li>
              </ul>
            </div>
          </div>

          <div class="cls-i-h-b-right-5-dropdown-phoneApp">
            <div>
              <span>手机应用</span>
              <ul >
                <li v-for="select in nav[3].phoneApp"><img :src="select" class="cls-i-h-b-right-5-dropdown-phoneApp-img"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: [
          '我的订单',
          '我的收藏',
          '抵用券',
          '账户设置'
        ],
        seller: [
          '美团餐饮商户中心',
          '登录商家中心',
          '美团智能收银',
          '我想合作',
          '手机免费开店',
          '餐饮代理商招募',
          '商家申请开票',
          '免费合作美团排队'
        ],
        rule: [
          '规则中心',
          '规则目录',
          '规则评议院'
        ],
        nav: [
          {
            hotel: [
              '国际机票',
              '火车票',
              '民宿',
              '经济型酒店',
              '主题酒店',
              '商务酒店',
              '公寓',
              '豪华酒店',
              '客栈',
              '青年旅社',
              '度假酒店',
              '别墅',
              '农家院'
            ]
          },
          {
            food: [
              '烤鱼',
              '特色小吃',
              '烧烤',
              '自助餐',
              '火锅',
              '代金券'
            ]
          },
          {
            movie: [
              '热映电影',
              '热门影院',
              '热映电影口碑榜',
              '最受期待电影',
              '国内票房榜',
              '北美票房榜',
              '电影排行榜'
            ]
          },
          {
            phoneApp: [
              'https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png',
              'https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png',
              'https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png',
              'https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png',
              'https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png'
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .cls-index-header-bar {
    height: 40px;
    background: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
    /*font-size: 12px;*/
    color: #999999;
    .cls-i-h-b-left {
      width: 595px;
      /*background: gray;*/
      .cls-i-h-b-l-button {
        border: 0.5px solid #E5E5E5;
        border-radius: 3px;
        padding: 0 3px;
        color: #666666;
        background: #F4F4F4;
        &:hover {
          color: #FE8C00;
          cursor: pointer;
        }
      }
      .cls-i-h-b-l-cityList {
        display: inline-block;
        & ul {
          display: inline-flex;
          & li {
            margin: 0 2px;
            &:hover {
              color: #FE8C00;
              cursor: pointer;
            }
          }
        }
      }
      .cls-i-h-b-l-login{
        color: #FE8C00;
        margin-left: 20px;
      }
      .cls-i-h-b-l-register{
        margin-left: 5px;
        &:hover{
          color: #FE8C00;
          cursor: pointer;
        }
      }
    }
    .cls-i-h-b-right {
      width: 595px;
      text-align: right;
      div {
        height: 40px;
        display: inline-block;
        line-height: 40px;
        position: relative;
        span {
          padding: 0 20px;
        }
        & span:hover {
          color: #FE8C00;
          cursor: pointer;
        }
      }
      .cls-i-h-b-right-1 {
        .cls-i-h-b-right-1-dropdown {
          z-index: 10;
          text-align: center;
          display: none;
          position: absolute;
          min-width: 48px;
          height: 160px;
          box-shadow: 0 5px 5px #E5E5E5;
          border-radius: 0 0 5px 5px;
          padding: 0 20px;
          & ul li:hover {
            color: #FE8C00;
            cursor: pointer;
          }
        }
        &:hover {
          background: #FFFFFF;
          box-shadow: 0 5px 5px #E5E5E5;
        }
        &:hover .cls-i-h-b-right-1-dropdown {
          background: #FFFFFF;
          display: block;
        }
      }
      .cls-i-h-b-right-3 {
        text-align: right;
        .cls-i-h-b-right-3-dropdown {
          z-index: 10;
          text-align: center;
          display: none;
          position: absolute;
          right: 0;
          min-width: 98px;
          height: 320px;
          border-radius: 0 5px 5px 5px;
          padding: 0 18px;
          box-shadow: 0 5px 5px #E5E5E5;
          & ul li:hover {
            color: #FE8C00;
            cursor: pointer;
          }
        }
        &:hover {
          background: #FFFFFF;
          box-shadow: 0 5px 5px #E5E5E5;
        }
        &:hover .cls-i-h-b-right-3-dropdown {
          background: #FFFFFF;
          display: block;
        }
      }
      .cls-i-h-b-right-4 {
        .cls-i-h-b-right-4-dropdown {
          z-index: 10;
          text-align: center;
          display: none;
          position: absolute;
          min-width: 68px;
          height: 120px;
          box-shadow: 0 5px 5px #E5E5E5;
          border-radius: 0 0 5px 5px;
          padding: 0 10px;
          & ul li:hover {
            color: #FE8C00;
            cursor: pointer;
          }
        }
        &:hover {
          background: #FFFFFF;
          box-shadow: 0 5px 5px #E5E5E5;
        }
        &:hover .cls-i-h-b-right-4-dropdown {
          background: #FFFFFF;
          display: block;
        }
      }
      .cls-i-h-b-right-5 {
        .cls-i-h-b-right-5-dropdown {
          z-index: 10;
          text-align: center;
          display: none;
          position: absolute;
          right: 0;
          min-width: 1200px;
          height: 295px;
          box-shadow: 0 5px 5px #E5E5E5;
          border-radius: 0 0 5px 5px;
          padding: 30px 36px 36px 47px;
          .cls-i-h-b-right-5-dropdown-hotel {
            flex: 0.3;
            height: 100%;
            text-align: center;
            flex-direction: column;
            color: black;
            font-size: 14px;
            ul{
              li{
                color: #999999;
                display: inline-block;
                width: 30%;
                font-size: 12px;
              }
            }
            div{
              width: 100%;
              /*background: gray;*/
            }
          }
          .cls-i-h-b-right-5-dropdown-food {
            flex: 0.2;
            height: 100%;
            text-align: center;
            flex-direction: column;
            color: black;
            font-size: 14px;
            ul{
              li{
                color: #999999;
                display: inline-block;
                width: 50%;
                font-size: 12px;
              }
            }
            div{
              width: 100%;
              /*background: gray;*/
            }
          }
          .cls-i-h-b-right-5-dropdown-movie {
            flex: 0.1;height: 100%;
            text-align: center;
            flex-direction: column;
            color: black;
            font-size: 14px;
            ul{
              li{
                color: #999999;
                display: inline-block;
                width: 100%;
                font-size: 12px;
              }
            }
            div{
              width: 100%;
              /*background: gray;*/
            }
          }
          .cls-i-h-b-right-5-dropdown-phoneApp {
            flex: 0.4;
            ul{
              li{
                display: inline;
                .cls-i-h-b-right-5-dropdown-phoneApp-img{
                  width: 15%;
                  padding: 30px 5px;
                }
              }
            }
          }
          & ul {
            flex: 1;
          }
          & ul li:hover {
            color: #FE8C00;
            cursor: pointer;
          }
        }
        &:hover {
          background: #FFFFFF;
          box-shadow: 0 5px 5px #E5E5E5;
        }
        &:hover .cls-i-h-b-right-5-dropdown {
          display: flex;
          background: #FFFFFF;
          /*display: block;*/
        }
      }
    }
  }

</style>
