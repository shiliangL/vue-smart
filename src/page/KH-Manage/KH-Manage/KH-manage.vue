<!--客户管理-->
<template>
    <div id="KH-manage">
        <div class="search">
            <ul>
                <li>
                    <el-input placeholder="名字" icon="search" v-model="searchParams.name" />
                </li>
                <li>
                    <el-input placeholder="手机号码" icon="search" v-model="searchParams.PhoneNumber" />
                </li>
                <li>
                    <el-button type="primary" class="mb-sm btn btn-primary" @click="search">查询</el-button>
                </li>
                <li>
                    <el-button type="primary" class="mb-sm btn btn-primary" @click="reset">重置</el-button>
                </li>
            </ul>
            <ul>
                <li>
                    <el-button type="primary" class="mb-sm btn btn-primary btn-outline" @click="handleEdit(0,3)">新增</el-button>
                </li>
            </ul>
        </div>
        <div style="width: 100%;">
            <div class="table-content">
                <el-table :data="tableData" style="width: 100%" class="table-list">
                    <el-table-column label="序号" align="center">
                        <template scope="scope">
                            <span v-text="scope.$index+1"></span>
                        </template>
                    </el-table-column>
                    <el-table-column label="姓名" align="center" property="name"></el-table-column>
                    <el-table-column label="省份" align="center" property="moneyType"></el-table-column>
                    <el-table-column label="城市" align="center" property="is_CommonUser"></el-table-column>
                    <el-table-column label="区/县" align="center" property="remake"></el-table-column>
                    <el-table-column label="地址" align="center" property="remake"></el-table-column>
                    <el-table-column label="微信" align="center" property="remake"></el-table-column>
                    <el-table-column label="推荐人" align="center" property="remake"></el-table-column>
                    <el-table-column label="经销商" align="center" property="remake"></el-table-column>
                    <el-table-column label="设备型号" align="center" property="remake"></el-table-column>
                    <el-table-column label="设备ID" align="center" property="remake"></el-table-column>
                    <el-table-column label="操作" align="center" width="300">
                        <template scope="scope" align="center">
                            <el-button type="text" class="btn-edit" size="small" @click="handleEdit(scope.$index, 1)">编辑</el-button>
                            <el-button class="btn-delete" type="text" size="small" @click="handleEdit(scope.$index, 2)">删除</el-button>
                            <el-button class="btn-edit" type="text" size="small" @click="handleEdit(scope.$index, 3)">修改</el-button>
                            <el-button class="btn-edit" type="text" size="small" @click="handleEdit(scope.$index, 4)">查看设备</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <!-- <div class="block">
                <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize" layout="total, prev, pager, next" :total="total">
                </el-pagination>
            </div> -->
        </div>
    </div>
</template>
<script >
    export default {
        data(){
            return {
                searchParams:{
                    name:'',
                    PhoneNumber:''
                },
                tableData:[{}],
            }
        },
        methods:{
            search(){

            },
            reset(){

            },
            handleEdit(){

            }
        }
    }
</script>
<style scoped lang="scss">

</style>
