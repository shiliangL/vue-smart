<template>
    <div class="login-container">
        <el-form autoComplete="on" :model="loginForm" ref="loginForm" label-position="left" label-width="0px" class="card-box login-form">
            <h3 class="title">vue-smart 系统登录</h3>
            <el-form-item>
                <el-input name="email" type="text" v-model="loginForm.email" autoComplete="on" placeholder="邮箱"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input name="password" type="password" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on" placeholder="密码"></el-input>
            </el-form-item>
            <div class="bnt">
                <el-button type="primary" style="width:45%;" :loading="loading" @click.native.prevent="handleLogin">
                    登录
                </el-button>
                <el-button type="primary" style="width:45%;background-color:#FF4949;border-color: #FF4949;" :loading="loading" @click.native.prevent="handleLogin">
                    注册
                </el-button>
            </div>
            </el-form-item>
        </el-form>
        <el-dialog title="第三方验证" :visible.sync="showDialog">
            邮箱登录成功,请选择第三方验证
            <!-- <socialSign></socialSign> -->
        </el-dialog>
        <div id="particles-js" class="lz"></div>
        <!-- <div class="lz"></div> -->
        <!-- <canvas id="canvas"></canvas> -->
    </div>
</template>
<script>
// import { isWscnEmail } from 'utils/validate';
// import socialSign from './socialsignin';
// import '../../../../static/js/lz.js';
// import '../../../../static/js/pz.js';
import '../../../assets/js/particles.js';
import particles from '../../../assets/js/particles.json';

export default {
    // components: { socialSign },
    name: 'login',
    data() {
        return {
            loginForm: {
                email: 'shiliangL@qq.com',
                password: ''
            },
            ding: false,
            showDialog: false,
            loading: false
        }
    },
    created() {
        console.log(particlesJS);
        this.loadPt();
    },
    methods: {
        loadPt() {
            console.log(particlesJS);
            particlesJS.load('particles-js', particles, function() {
                console.log('callback - particles.js config loaded');
            });
        },
        handleLogin() {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    this.loading = true;
                    this.$store.dispatch('LoginByEmail', this.loginForm).then(() => {
                        this.loading = false;
                        this.$router.push({
                            path: '/'
                        });
                        // this.showDialog = true;
                    }).catch(err => {
                        this.$message.error(err);
                        this.loading = false;
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        afterQRScan() {
            // const hash = window.location.hash.slice(1);
            // const hashObj = getQueryObject(hash);
            // const originUrl = window.location.origin;
            // history.replaceState({}, '', originUrl);
            // const codeMap = {
            //   wechat: 'code',
            //   tencent: 'code'
            // };
            // const codeName = hashObj[codeMap[this.auth_type]];
            // if (!codeName) {
            //   alert('第三方登录失败');
            // } else {
            //   this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
            //     this.$router.push({ path: '/' });
            //   });
            // }
        }
    },
    created() {
        // window.addEventListener('hashchange', this.afterQRScan);
    },
    destroyed() {
        // window.removeEventListener('hashchange', this.afterQRScan);
    }
}
</script>
<style rel="stylesheet/scss" lang="scss">
@import "static/css/mixin.scss";
.lz {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #2d3a4b;
}

.tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 5px;
}

.login-container {
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
