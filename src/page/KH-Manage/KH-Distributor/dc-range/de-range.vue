<template>
    <div id="de-list">
        <!-- <h1>设备管理</h1> -->
        <div class="search">
            <ul>
                <li>
                    <el-input  class="w170" placeholder="设备ID" v-model.tirm="searchName" />
                </li>
                <li>
                    <el-input class="w170" placeholder="型号" v-model.tirm="searchName" />
                </li>
                <li>
                    <el-input class="w170" placeholder="经销商名称" v-model.tirm="searchName" />
                </li>
                <li>
                    <el-input class="w170" placeholder="用户" v-model.tirm="searchName" />
                </li>
                <li>
                    <el-input class="w170" placeholder="用户手机" v-model.tirm="searchName" />
                </li>
                <li>
                    <el-input class="w170" placeholder="设备状态" v-model.tirm="searchName" />
                </li>
                <li>
                    <el-input class="w170" placeholder="产品名称检索" v-model.tirm="searchName" />
                </li>
                <li>
                    <el-button type="primary" class="mb-sm btn btn-primary" @click="search">查询</el-button>
                </li>
                <li>
                    <el-button type="primary" class="mb-sm btn btn-primary" @click="search">重置</el-button>
                </li>
            </ul>
           <!--  <ul>
                <li>
                    <el-button type="primary" class="mb-sm btn btn-primary btn-outline" @click="handleEdit(0,1)">新增产品绑定</el-button>
                </li>
            </ul> -->
        </div>
        <div class="cf">
        </div>
        <div style="width: 100%;">
            <div class="table-content">
                <el-table ref="singleTable" :data="tableData" highlight-current-row @current-change="handleCurrentChange" style="width: 100%">
                    <el-table-column type="index" width="50" align="center">
                    </el-table-column>
                    <el-table-column property="deviceID" label="设备ID" align="center">
                    </el-table-column>
                    <el-table-column property="model" label="型号" align="center">
                    </el-table-column>
                    <el-table-column property="internetCode" label="物联网号" align="center">
                    </el-table-column>
                    <el-table-column property="dealerName" label="经销商名称" align="center">
                    </el-table-column>
                    <el-table-column property="userName" label="用户姓名" align="center">
                    </el-table-column>
                    <el-table-column property="phone" label="用户手机号" align="center">
                    </el-table-column>
                    <el-table-column property="city" label="城市" align="center">
                    </el-table-column>
                    <el-table-column property="address" label="安装地址" align="center">
                    </el-table-column>
                    <el-table-column property="activationDate" label="激活日期" align="center">
                    </el-table-column>
                    <el-table-column property="setMeal" label="套餐" align="center">
                    </el-table-column>
                    <el-table-column property="leaveVal" label="剩余流量" align="center">
                    </el-table-column>
                    <el-table-column property="status" label="设备状态" align="center">
                    </el-table-column>
                    <el-table-column property="netStatus" label="网络状态" align="center">
                    </el-table-column>
                    <el-table-column label="操作" align="center" width="230">
                        <template scope="scope" align="center">
                            <el-button size="mini" class="btn-edit" @click="handleEdit(scope.$index, 2)">查看详情</el-button>
                            <el-button size="mini" class="btn-edit" @click="handleEdit(scope.$index, 2)">设备开机</el-button>
                            <el-button size="mini" class="btn-edit" @click="handleEdit(scope.$index, 2)">设备重启</el-button>
                            
                            <el-button size="mini" class="btn-edit" @click="handleEdit(scope.$index, 2)">设备强冲</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <div class="pages block" style="margin-top: 20px">
            <el-pagination @current-change="handleCurrentChange" layout="total, prev, pager, next" :current-page="currentPage" :page-size="10" :total="10" align="center">
            </el-pagination>
        </div>
        <el-dialog v-model="dialogFormVisible" :size="size" @close="dismiss">
            <add-form v-if="showForm" @close="dismiss" @refreshPage="onRefresh"></add-form>
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
            AddFormDetails
        },
        data() {
            return {
                currentPage: 1,
                tableData: [{
                    deviceID:'0001342',
                    model:'SMT-001',
                    internetCode:'89860616020060356404',
                    dealerName:'天猫旗舰店', 
                    userName:'张生',
                    phone:'18677205588',
                    city:'北京',
                    address:'北京朝阳区人民路58号',
                    activationDate : '2017-01-03 15:10:49',
                    setMeal: '免年费套装-AT',
                    leaveVal:'7000G',
                    status:'良好',
                    netStatus:'良好',
                    address: '2017-01-03 15:10:49'
                },{
                    deviceID:'0001342',
                    model:'SMT-001',
                    internetCode:'89860616020060356404',
                    dealerName:'天猫旗舰店', 
                    userName:'张生',
                    phone:'18677205588',
                    city:'北京',
                    address:'北京朝阳区人民路58号',
                    activationDate : '2017-01-03 15:10:49',
                    setMeal: '免年费套装-AT',
                    leaveVal:'7000G',
                    status:'良好',
                    netStatus:'良好',
                    address: '2017-01-03 15:10:49'
                },{
                    deviceID:'0001342',
                    model:'SMT-001',
                    internetCode:'89860616020060356404',
                    dealerName:'天猫旗舰店', 
                    userName:'张生',
                    phone:'18677205588',
                    city:'北京',
                    address:'北京朝阳区人民路58号',
                    activationDate : '2017-01-03 15:10:49',
                    setMeal: '免年费套装-AT',
                    leaveVal:'7000G',
                    status:'良好',
                    netStatus:'良好',
                    address: '2017-01-03 15:10:49'
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
                        this.size = 'small'
                        this.dialogTitle = '产品详细参数详情';
                        this.showForm = false;
                        this.showDetails = true;
                        this.dialogFormVisible = true;
                        break;
                    }
                }
            },
            click(type) {
                switch (type) {
                    case 1:
                    { //编辑

                        break;
                    }
                    case 2:
                    { //删除
                        this.$confirm('您确定要删除吗？', '提示', {
                            cancelButtonText: '取消',
                            confirmButtonText: '确定',
                            type: 'warning'
                        }).then(() => {
                            this.loading = true;
                            var obj = this.tableData[index];
                            this.$http.delete(this.urls.delete, {
                                id: obj.id
                            }, (reponse, status) => {
                                if (status) {
                                    this.tableData.splice(index, 1);
                                    
                                    this.$message({
                                        message: '删除成功',
                                        type: 'success'
                                    });
                                    this.total -= 1;
                                    this.loading = false;
                                } else {
                                    this.$message({
                                        message: '删除失败',
                                        type: 'error'
                                    });
                                }
                            });
                        }).catch(() => {
                            this.loading = false;
                        });;
                        break;
                    }
                    case 3:
                    { //新增
                        // this.editLayer = true;
                        this.propsOption.TipsWindow = 3;
                        this.dialogFormVisible = true;
                        this.destroy = true;
                        this.dialogSize = 'small';
                        this.showForm = true;
                        break;
                    }
                    case 4:
                    { //禁用
                        this.alertMessage = this.tableData[index].status == 0 ? '您确定要禁用吗？' : '您确定要启用吗';
                        this.$confirm(this.alertMessage, '提示', {
                            cancelButtonText: '取消',
                            confirmButtonText: '确定',
                            type: 'warning'
                        }).then(() => {
                            this.loading = true;
                            var obj = this.tableData[index];
                            var params = {
                                id: obj.id
                            };
                            this.$http.putUrl(this.urls.changeStatus, params, (reponse, status) => {
                                if (status) {
                                    obj.status = obj.status == 1 ? 0 : 1;
                                    if (obj.status == 1) {
                                        this.$message({
                                            message: '状态启用成功',
                                            type: 'success'
                                        });
                                        this.loading = false;
                                    } else {
                                        this.$message({
                                            message: '状态禁用成功',
                                            type: 'success'
                                        });
                                        this.loading = false;
                                    }
                                } else {
                                    this.$message({
                                        message: '切换状态失败',
                                        type: 'error'
                                    });
                                    this.loading = false;
                                }
                            });
                        }).catch(() => {
                            this.loading = false;
                        });
                        break;
                    }
                    case 5:
                    { //分配角色
                        this.propsOption.TipsWindow = 5;
                        // this.authorityLayer = true; //权限层
                        this.propsOption.editID = this.tableData[index].id;
                        this.dialogFormVisible = true;
                        this.dialogSize = 'small';
                        this.showRole = true;
                        break;
                    }
                    case 6:
                    { //修改密码
                        this.propsOption.TipsWindow = 6;
                        // this.passwordLayer = true; //密码层
                        this.passwordOption.username = this.tableData[index].username;
                        this.dialogFormVisible = true;
                        this.dialogSize = 'tiny';
                        break;
                    }
                }
            },
            search() {

            },
        },
    }
</script>
<style scoped lang="scss">
    #de-list {
        padding: 10px;
        .shi{
            height:50px;
            border: 1px solid red;
        }
        .DC{
            text-align: left;
            margin: 10px 5px;
        }
    }
</style>
