<template>
  <div id="KC-Item01">
    <h1>产品定价</h1>
    <div class="search">
      <ul>
        <li>
          <el-input placeholder="产品名称检索" v-model.tirm="searchName" />
        </li>
        <li>
          <el-button type="primary" class="mb-sm btn btn-primary" @click="search">查询</el-button>
        </li>
      </ul>
      <ul>
        <li>
          <el-button type="primary" class="mb-sm btn btn-primary btn-outline" @click="handleEdit(0,1)">新增入库</el-button>
        </li>
      </ul>
    </div>
    <el-table ref="singleTable" :data="tableData" highlight-current-row @current-change="handleCurrentChange" style="width: 100%">
      <el-table-column type="index" width="50" align="center">
      </el-table-column>
      <el-table-column property="productName" label="产品名称" align="center">
      </el-table-column>
      <el-table-column property="communicationType" label="通讯方式" align="center">>
      </el-table-column>
      <el-table-column property="time" label="绑定时间" align="center">>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template scope="scope" align="center">
          <el-button size="mini" class="btn-edit" @click="handleEdit(scope.$index, 2)">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pages block" style="margin-top: 20px">
      <el-pagination @current-change="handleCurrentChange" layout="total, prev, pager, next" :current-page="currentPage" :page-size="10" :total="3" align="center">
      </el-pagination>
    </div>
    <el-dialog v-model="dialogFormVisible" :size="size" :title="dialogTitle" @close="dismiss">
      <add-form v-if="showForm" @close="dismiss" @refreshPage="onRefresh" @addData="addData"></add-form>
      <add-form-details v-if="showDetails" @close="dismiss" @refreshPage="onRefresh"></add-form-details>
    </el-dialog>
  </div>
</template>
<script>
  import { init, destroy } from 'ityped';
  import AddForm from './product-bind.vue'
  import AddFormDetails from './showDetails.vue'


  export default {
    components: {
      AddForm,
      AddFormDetails,
    },
    data() {
      return {
        currentPage: 1,
        tableData: [{
          productName: '产品 A',
          communicationType: 'COAP',
          time: '2017-7-2 16:26:08'
        },{
          productName: '产品 A',
          communicationType: 'COAP',
          time: '2017-7-2 16:26:08'
        },{
          productName: '产品 A',
          communicationType: 'COAP',
          time: '2017-7-2 16:26:08'
        }],
        currentRow: null,
        searchName: '',

        size: '',
        dialogTitle: '',
        showForm: false,
        showDetails: false,
        dialogFormVisible: false,

      }
    },
    methods: {
      dismiss() {
        this.showForm = false;
        this.showDetails = false;
        this.dialogFormVisible = false;
      },
      onRefresh() {

      },
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      handleEdit(index, type) {
        switch (type) {
          case 1:
                    { //编辑
                      console.log('新绑定');
                      this.size = 'tiny';
                      this.showForm = true;
                      this.showDetails = false;
                      this.dialogFormVisible = true;
                      break;
                    }
                    case 2:
                    {
                      this.size = 'full'
                      this.dialogTitle = '产品详细参数详情';
                      this.showForm = false;
                      this.showDetails = true;
                      this.dialogFormVisible = true;
                      break;
                    }
                  }
                },
                search() {

                },
                addData(item){
                  this.tableData.push(item)
                }
              },
              directives:{
                focus:{
                  inserted: function (el) {
              // 聚焦元素
              el.focus()
            }
          }
        }

      }
    </script>
    <style scoped lang="scss">
      #de-list {
        padding: 10px;
        .shi{
          height:50px;
          border: 1px solid red;
        }
      }
    </style>
