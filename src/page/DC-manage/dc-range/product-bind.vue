<template>
    <div id="product-bind">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px">
            <el-form-item label="Product Key" prop="ProductKey">
                <el-input v-model="ruleForm.ProductKey"></el-input>
            </el-form-item>
            <el-form-item label="Product Secret" prop="ProductSecret">
                <el-input v-model="ruleForm.ProductSecret"></el-input>
            </el-form-item>
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
                ProductKey: '',
                ProductSecret: ''
            },
            rules: { //表单验证规则
                ProductKey: [{
                    required: true,
                    message: '必填',
                    trigger: 'blur'
                }, ],
                ProductSecret: [{
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
    text-align: center;
    .el-form-item {
        width: 280px;
    }
}
</style>
