<template>
  <div id="showDetails">
    <div class="title">
      <h2>设备ID终端明细 0001342</h2>
    </div>
    <div class="item-one">
      <el-row :gutter="20">
        <el-col :span="6" v-for="(item,index) in rowHead" :key="index">
          <div class="content">
            <div :class="item.theme">
              <h3 v-text="item.txt"></h3>
              <p v-text="item.subTxt"></p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="item-two">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content">
            <div class="mc-title">
              <h4>滤芯信息</h4>
              <p>滤芯剩余流量信息</p>
            </div>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="40"></el-progress>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="90" status="success"></el-progress>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
            <div class="set">
             <div class="mc-title">
               <h4>设备操作</h4>
             </div>
             <div class="set-mc">
               <el-button icon="el-icon-information" type="info">设备开机</el-button>
               <el-button icon="el-icon-more" type="info">设备重启</el-button>
               <el-button icon="el-icon-warning" type="info">设备强冲</el-button>
             </div>
           </div>
         </div>
       </el-col>
       <el-col :span="12">
        <div class="grid-content LrAre">
         <div class="mc-title">
           <h4>设备信息</h4>
           <!-- <p>滤芯剩余流量信息</p> -->
         </div>
         <div class="table">
           <div class="li" v-for="(item,index) in valueDatas">
             <p><strong v-text="item.txt">设备编号：</strong> <span v-text="item.subTxt"></span></p>
           </div>
         </div>
       </div>
     </el-col>
   </el-row>
 </div>
 <div style=" text-align: center;margin-top:20px">
  <el-button @click="closeForm">取消</el-button>
  <el-button type="primary" @click="closeForm">确定</el-button>
</div>
</div>
</template>
<script>
// import xxx from '../xxx';
export default {
  components: {
        // xxx
      },
      name: '',
      props: {
        bar: {}, // 按字母顺序
        foo: {},
        fooBar: {},
      },
    // 变量
    data() {
      return {
        rowHead: [{
          num: 150,
          txt: '正常',
          subTxt:'水机当前状态',
          theme: 'blue'
        }, {
          num: 20,
          txt: '0 PPM',
          subTxt:'水机原始净水值',
          theme: 'green'
        }, {
          num: 1503,
          txt: '0 PPM',
          subTxt:'水机当前净水值',
          theme: 'yellow'
        },{
          num: 0,
          txt: '2017-7-2',
          subTxt:'创建时间',
          theme: 'red'
        }],
        valueDatas:[
        { 
          txt: '设备编号：',
          subTxt:'00001342'
        }, 
        { 
          txt: '设备型号：',
          subTxt:'型号三'
        },
        { 
          txt: '套餐类型：',
          subTxt:'无'
        }, 
        { 
          txt: '状态：',
          subTxt:'正常'
        }, 
        { 
          txt: '原水值：',
          subTxt:'OPPM'
        }, 
        { 
          txt: '套餐天数：',
          subTxt:'无'
        },
        { 
          txt: '套餐天数：',
          subTxt:'无'
        },
        { 
          txt: '净水值：',
          subTxt:'OPPM'
        },
        { 
          txt: '套餐天数：',
          subTxt:'无'
        },
        { 
          txt: '剩余流量：',
          subTxt:'100升'
        },
        { 
          txt: '剩余天数：',
          subTxt:'47天'
        },
        { 
          txt: '累积过滤流量：',
          subTxt:'0升'
        }, 
        { 
          txt: '水质等级：',
          subTxt:'极好'
        },
        { 
          txt: 'iccid：',
          subTxt:'89860616020060356404'
        }]
      }
    },
    beforeCreate() {

    },
    created() {

    },
    mounted() {},
    computed: {},
    methods: {
      closeForm() {
        this.$emit('close')
      },
      changeIsShow() {

      },
      changeIsShowChart(){

      }
    },
    watch: {},
  };
</script>
<style scoped lang="scss">
  #showDetails{
    .title{
      text-align: center;
      margin-top: -40px;
    }
    .item-one{
      .content{
        >div{
          color: #eee;
          padding: 10px 20px;
          box-shadow: 10px 10px 10px #ccc;
        }
      }
    }
    .item-two{
      margin-top: 35px;
      .el-progress{
        margin-bottom: 15px;
      }
      .set{
        margin: 20px 0;
        .set-mc{
          margin: 25px 0;
        }
      }
      .LrAre{
        max-height: 300px;
        overflow: auto;
        .table{
          .li{
            height:40px;
            line-height: 40px;
            border-bottom: 1px solid #ccc;
          }
        }
      }
    }
    .blue{
      background:#20A0FF
    }
    .green{
      background:#13CE66
    }
    .yellow{
      background:#F7BA2A
    }
    .red{
      background:#FF4949
    }

  }
</style>
