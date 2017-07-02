import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$api = axios


import axios from 'axios'
import config from './config'

/**
 * @param Vue {Object} Vue对象
 * @return instance {Object} axio对象
 * */
export default function(Vue) {
    let instance = axios.create({
        baseURL: config.serverPath, //API 请求base地址
        showLoading: true, //是否显示加载遮罩层
        timeout: 30000
    })
    instance.defaults.headers.post['Content-Type'] = 'application/json'
        // Add a request interceptor
    instance.interceptors.request.use(function(config) {
        // Do something before request is sent
        config.showLoading && Vue.$vux.loading.show() //
        return config
    }, function(error) {
        // Do something with request error
        Vue.$vux.loading.hide()
        Vue.$vux.toast.show({
            width: '64.5%',
            text: '请求失败，请稍后再试！',
            type: 'text'
        })
        return Promise.reject(error)
    })

    // Add a response interceptor
    instance.interceptors.response.use(function(response) {
        // Do something with response data
        if (response.config.isLastReq === undefined) {
            response.config.isLastReq = true
        }
        response.config.isLastReq && Vue.$vux.loading.hide()
        if (response.data.code === 50000) {
            Vue.$vux.toast.show({
                width: '64.5%',
                text: '身份过期，请重新登录',
                type: 'text'
            })
            Vue.$router.push({
                name: 'login'
            })
        }
        return response
    }, function(error) {
        // Do something with response error
        Vue.$vux.loading.hide()
        Vue.$vux.toast.show({
            width: '64.5%',
            text: '系统发生未知错误，请稍后再试！',
            type: 'text'
        })
        return Promise.reject(error)
    })
    return instance
}
