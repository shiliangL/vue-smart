<template>
    <div class="login-container">
        <el-form autoComplete="on" :rules="rules" :model="ruleForm" ref="ruleForm" label-position="left" label-width="0px" class="card-box login-form">
            <h3 class="title">vue-smart 系统登录</h3>
            <el-form-item prop="username" :rules="[{trigger:'change', required: true, validator: rules.validName}]">
                <el-input type="text" v-model="ruleForm.username" autoComplete="on" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password" :rules="[{trigger:'change', required: true, validator: rules.validCode}]">
                <el-input name="password" type="password" @keyup.enter.native="handleLogin" v-model="ruleForm.password" autoComplete="on" placeholder="密码"></el-input>
            </el-form-item>
            <div class="bnt">
                <el-button type="primary" style="width:45%;" @click.native.prevent="handleLogin">
                    登录
                </el-button>
                <el-button type="primary" style="width:45%;background-color:#FF4949;border-color: #FF4949;" @click.native.prevent="register">
                    注册
                </el-button>
            </div>
            </el-form-item>
        </el-form>
        <!-- <el-dialog title="第三方验证" :visible.sync="showDialog"> -->
        <!-- 邮箱登录成功,请选择第三方验证 -->
        <!-- <socialSign></socialSign> -->
        <!-- </el-dialog> -->
    </div>
</template>
<script>
export default {
    name: 'login',
    data() {
        return {
            urls: {
                register: 'iocm/oauth/login'
            },
            ruleForm: {
                username: '',
                password: '',
            },
            ding: false,
            showDialog: false,
            loading: false,
            rules: {
                validName: (rule, value, callback) => {
                    if (!value) {
                        return callback(new Error('请输入用户名'));
                    }
                    if (value !== 'admin') return callback(new Error('请输入正确的用户名'));
                    callback();
                },
                validCode: (rule, value, callback) => {
                    if (!value) {
                        return callback(new Error('请输入密码'));
                    }
                    if (value !== 'admin') return callback(new Error('请输入正确的密码'));
                    callback();
                }
            }
        }
    },
    created() {
        // this.$api.get('https://www.easy-mock.com/mock/594a3a808ac26d795f424b06/markingweb_1498036864045/api/menus')
        //     .then(function(response) {
        //         console.log(response);
        //     })
        //     .catch(function(error) {
        //         console.log(error);
        //     });
    },
    methods: {
        loadPt() {

        },
        handleLogin() {
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
                    const h = this.$createElement;
                    this.$notify({
                        title: '登录成功',
                        message: h('i', {
                            style: 'color: #333;font-style: normal;'
                        }, '欢迎光临')
                    });
                    this.$router.push('./layout');
                }
            });
        },
        register() {
            let params = {
                username: this.ruleForm.username,
                password: this.ruleForm.password,
                appId: '32tz80y8gn',
                secret: '7259b0d8y39hlkveftjp'
            };
            console.log(params);
            this.$api.post(this.urls.register, params)
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
    },
    destroyed() {
        // window.removeEventListener('hashchange', this.afterQRScan);
    }
}
</script>
<style rel="stylesheet/scss" lang="scss">
@import "static/css/mixin.scss";
.tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 5px;
}

.login-container {
    background: #2d3a4b;
    @include relative;
    height: 100vh;
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
        -webkit-text-fill-color: #fff !important;
    }
    input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: #eeeeee;
        height: 47px;
    }
    .el-input {
        display: inline-block;
        height: 47px;
        width: 85%;
    }
    .svg-container {
        padding: 6px 5px 6px 15px;
        color: #889aa4;
    }
    .title {
        font-style: normal;
        font-size: 28px;
        color: #eeeeee;
        margin: 0px auto 30px auto;
        text-align: center;
    }
    .login-form {
        position: absolute;
        left: 0;
        right: 0;
        width: 400px;
        padding: 35px 35px 15px 35px;
        margin: 120px auto;
    }
    .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #454545;
    }
    .forget-pwd {
        color: #fff;
    }
    .bnt {
        display: flex;
        justify-content: space-between;
    }
}
</style>
