<template>
  <div class="qxj-footer">
    <div class="qxj-f-content">
      <div>
        <span>用户帮助</span>
        <ul>
          <li v-for="(userHelpItem,index) in userhelp" :key="index">{{userHelpItem}}</li>
        </ul>
        <br />
        <br />
        <span>美团服务</span>
        <ul>
          <li
            v-for="(meituanServiceItem,index) in meituanService"
            :key="index"
          >{{meituanServiceItem}}</li>
        </ul>
      </div>
      <div>
        <span>商家合作</span>
        <ul>
          <li
            v-for="(sellerCooperationItem,index) in sellerCooperation"
            :key="index"
          >{{sellerCooperationItem}}</li>
        </ul>
      </div>
      <div>
        <span>代理商加盟</span>
        <ul>
          <li v-for="(agentJoinSelect,index) in agentJoin" :key="index">{{agentJoinSelect}}</li>
        </ul>
        <br />
        <br />
        <span>美团规则</span>
        <ul>
          <li v-for="(meituanRule,index) in meituanRules" :key="index">{{meituanRule}}</li>
        </ul>
      </div>
      <div>
        <span>关注美团</span>
        <ul>
          <li>关注新浪微博</li>
        </ul>
        <span>公司信息</span>
        <ul>
          <li
            v-for="(companyInformationItem,index) in companyInformaiton"
            :key="index"
          >{{companyInformationItem}}</li>
        </ul>
        <br />
        <br />
        <span>廉政举报</span>
        <ul>
          <li>廉政举报平台</li>
        </ul>
        <br />
        <br />
        <span>知识产权</span>
        <ul>
          <li>知识产权维权平台</li>
        </ul>
      </div>
      <div>
        <span>消费者服务热线</span>
        <ul>
          <li
            v-for="(consumerHotlineItem,index) in consumerHotline"
            :key="index"
          >{{consumerHotlineItem}}</li>
        </ul>
        <br />
        <br />

        <span>商家服务热线</span>
        <ul>
          <li v-for="(sellHotlineItem,index) in sellHotline" :key="index">{{sellHotlineItem}}</li>
        </ul>
        <br />
        <br />
        <br />
        <br />

        <span>投诉举报热线</span>
        <ul>
          <li v-for="(reportHotlineItem,index) in reportHotline" :key="index">{{reportHotlineItem}}</li>
        </ul>
        <br />
        <br />
        <a href="#">商家自助入驻美团入口</a>
        <br />
        <br />
        <br>
        <br>
        <a href="#">供应商注册入口</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userhelp: ['申请退款', '查看美团券密码', '常见问题', '用户协议', '隐私政策', '反诈骗公告', '消费者权益保障'],
        meituanService: [
          '美团外卖',
          '美团酒店',
          '猫眼电影',
          '美团配送',
          '美团云',
          '大众点评',
          '美团民宿',
          '无人配送'
        ],
        sellerCooperation: [
          '美团餐饮商户中心',
          '美食商家入驻(非外卖)',
          '美团外卖开店申请',
          '美团收银官网',
          '外卖配送加盟申请',
          '美团点评餐饮学院',
          '酒店商家入驻',
          '境内度假商家入驻',
          '综合商家入驻',
          '美团民宿房东商家入驻',
          '商家开票申请',
          '美团点评智能收银机',
          '美团点评餐饮开放平台',
          '美团点评收单',
          '免费使用美团排队',
          '快驴进货商家合作',
          '美团闪购商家入驻'
        ],
        agentJoin: [
          '美团外卖代理商招募',
          '到店餐饮代理商招募',
          '非餐饮代理商招募',
          '美团联盟',
          '美团收银招募线上分销商',
          '美团点评5S服务商招募',
          '美团收单渠道代理商招募'
        ],
        meituanRules: [
          '规则中心',
          '规则目录',
          '规则评议院'
        ],
        companyInformaiton: ['关于我们', '投资者关系', '加入我们', '商户诚信公约及管理办法', '保险经纪资质'],
        consumerHotline: ['外卖消费者：10109777', '猫眼消费者：10105335', '其他消费者：10107888'],
        sellHotline: ['外卖&餐饮商家：10105557', '休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：10100107'
        ],
        reportHotline: ['违法和不良信息举报电话：4006018900', '举报邮箱：tousujubao@meituan.com'
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .qxj-footer {
    margin: 30px auto;
    width: 1190px;
    height: 538px;
    border-top: #e5e5e5 1px solid;

    .qxj-f-content {
      padding: 40px 45px;
      width: 1100px;
      height: 458px;
      /*background: #F8F8F8;*/
      display: flex;
      div {
        flex: 1;
        span {
          font-size: 14px;
          color: #333333;
        }
        ul {
          margin-top: 8px;
          li {
            // margin: 6px 0;
            height: 24px;
            line-height: 24px;
            color: #666666;
            &:hover{
              color: #FE8C00;
              cursor:pointer;
            }
          }
        }
        a{
          font-size:14px;
          &:hover{
            color: #FE8C00;
            cursor:pointer;
          }
        }
      }
    }
  }
</style>
