<template>
    <div id="product-bind">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :inline="true" label-position="left">
            <el-form-item label="产品名称" prop="productName">
                <el-input v-model="ruleForm.productName"></el-input>
            </el-form-item>
            <el-form-item label="通讯方式" prop="communicationType">
                <el-input v-model="ruleForm.communicationType"></el-input>
            </el-form-item>
            <!--<el-form-item label="Product Key" prop="ProductKey">
                <el-input v-model="ruleForm.ProductKey"></el-input>
            </el-form-item>
            <el-form-item label="Product Secret" prop="ProductSecret">
                <el-input v-model="ruleForm.ProductSecret"></el-input>
            </el-form-item> -->
        </el-form>
        <div style=" text-align: center">
            <el-button @click="closeForm">取消</el-button>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </div>
        <loading v-if="loading" @loadingRefresh="onRefresh" :loadingText="loadingText"></loading>
    </div>
</template>
<script>
    export default {
        props: {
            propsOption: {
                type: Object
            }
        },
        data() {
            return {
                loading: false,
                loadingText: '',
                urls: {
                    save: 'distribute/insert',
                    update: 'distribute/update',
                },
                ruleForm: {
                    productName:'',
                    communicationType:'',
                    time:'',
                    ProductKey: '',
                    ProductSecret: ''
                },
            rules: { //表单验证规则
                productName: [{
                    required: true,
                    message: '必填',
                    trigger: 'blur'
                }, ],
                communicationType: [{
                    required: true,
                    message: '必填'
                }]
            },
        }
    },
    created() {
        this.getEditData();
    },
    methods: {
        closeForm() {
            this.$emit('close');
        },
        refreshFather() {
            this.$emit('refreshPage');
        },
        submitForm(formName) { //表单提交
            this.$refs[formName].validate((valid) => { //验证表单数据是否合法
                if (valid) {
                   this.ruleForm.time= new Date().toLocaleString();
                   this.$emit('addData',this.ruleForm);
                   this.$message({
                    message: '添加成功',
                    type: 'success'
                });
                   this.total += 1;
                   this.$emit('close');
                   close
               } else {

               }
           })
        },
        getEditData() {

        },
        onRefresh() {
            this.getEditData();
        }
    }
}
</script>
<style scoped lang="scss">
    #product-bind {
        .el-form{
            text-align: center;
        }
        .el-form-item {
            display:inline-block;
            width: 280px;
        }
    }
</style>
