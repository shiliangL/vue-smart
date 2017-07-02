export default {
  data() {
    return {
      menus: [{
        name: 'example',
        text: '表格代码示例',
        icon: '',
        items: [{
          name: 'table1',
          text: '系统TABLE样式'
        },{
          name: 'table2',
          text: '修改后的EL-TABLE样式'
        }]
      },{
        name: 'kb',
        text: '今日看板'
      },{
        name: 'basics',
        text: '基础管理',
        icon: '',
        items: [{
          name: 'basics-pay',
          text: '支付方式设置'
        },{
          name: 'basics-store-pay',
          text: '店铺支付方式设置'
        },{
          name: 'basics-wild-card',
          text: '外卡设置'
        },{
          name: 'basics-delivery',
          text: '配送方式'
        }]
      }, {
        name: 'price',
        text: '价格管理',
        icon: '',
        items: [{
          name: 'price-unify',
          text: '商品统一定价',
        },{
          name: 'price-single',
          text: '个别组织定价',
        },{
          name: 'price-vary',
          text: '商品变价单'
        }]
      }, {
        name: 'fee',
        text: '扣率管理',
        icon: '',
        items: [{
          name: 'fee-basics',
          text: '基础扣率设置',
        },{
          name: 'fee-return',
          text: '退货扣率设置',
         }]
      }, {
        name: 'promotion',
        text: '促销管理',
        icon: '',
        items: [{
          name: 'promotio-activity',
          text: '活动扣率设置',
        },{
          name: 'promotion-logoff',
          text: '注销和启用模板',
        },{
          name: 'promotion-create',
          text: '创建促销活动'
        },{
          name: 'promotion-release',
          text: '发布与调整活动'
        }]
      }, {
        name: 'operating',
        text: '营运管理',
        icon: '',
        items: [{
          name: 'operating-assistant',
          text: '营业员资料',
        },{
          name: 'operating-resolve',
          text: '店铺目标分解',
        },{
          name: 'operating-setting',
          text: '销售目标设置',
        }]
      }, {
        name: 'coupon',
        text: '劵管理',
        icon: '',
        items: [{
          name: 'coupon-generate',
          text: '卷生成',
        },{
          name: 'coupon-manage',
          text: '劵管理',
        },{
          name: 'coupon-count',
          text: '劵使用统计',
        }]
      }, {
        name: 'sale',
        text: '销售管理',
        icon: '',
        items: [{
          name: 'sale-stay',
          text: '待处理订单',
        },{
          name: 'sale-on-line',
          text: '线上销售列表',
        },{
          name: 'sale-line',
          text: '线下销售列表',
        }]
      }, {
        name: 'online',
        text: '线上接口'
      }, {
        name: 'store',
        text: '店铺规则设置',
        icon: '',
        items: [{
          name: 'store-param',
          text: '店铺参数设置',
        },{
          name: 'store-share',
          text: '库存共享设置',
        },{
          name: 'store-matching',
          text: '跨店匹配规则',
        },{
          name: 'store-reason', 
          text: '原因设置',
        }]
      }, {
        name: 'form',
        text: '报表统计',
        icon: '',
        items: [{
          name: 'form-achievement',
          text: '营业员业绩统计',
        },{
          name: 'form-store',
          text: '营业员调店查询',
        },{
          name: 'form-count',
          text: '结算方式统计',
        }]
      }]
    }
  },
  created() {
    this.$taber.$on('vue-tabs-active-change', (tab) => {
      if (tab) {
        this.selected = tab.meta.title
      } else {
        this.selected = null
      }
    })
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log("open : ", key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log("close : ", key, keyPath);
    },
    handleSelect: function (a, b) {
      console.log('handleselect ' + a + "-" + b);
    },
    clickMenuItem(item) {
      console.log(item.name, item.text);
      this.selected = item.text
      this.$taber.open({
        name: item.name,
        params: {
          title: item.text
        }
      })
    },
  }
}
