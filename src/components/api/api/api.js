/**
 * @author wuchao@cloudolp.com
 * 针对axios组件二次封装，支持各种请求，包括图片上传请求，http错误处理
 */
import axios from 'axios'
import config from './config.json'

const domain = "member"

export default class Api {

    constructor() {
        this.$http = this.newAxios();
        this.token = '';
    }

    newAxios() {
        return axios.create({
            headers: config.headers,
            timeout: config.timeout,
        });
    }

    setToken(token) {
        config.headers.Authorization = token;
        this.$http = this.newAxios();
    }

    /**
     * axios get 请求
     * @param  {[type]} url    [链接]
     * @param  {[type]} params [参数]
     * @return {[type]}        [Promise]
     */
    get(url, params) {
        let _this = this;
        return new Promise(function(resolve, reject) {
            _this.$http.get(_this.appendDomain(url), {
                params: params
            }).then(response => {
                resolve(_this.handleSuccess(response));
            }).catch(error => {
                reject(_this.handleError(error));
            });
        });
    }

    /**
     * axios post 请求
     * @param  {[type]} url    [链接]
     * @param  {[type]} params [参数]
     * @return {[type]}        [Promise]
     */
    post(url, params) {
        let _this = this;
        return new Promise(function(resolve, reject) {
            _this.$http.post(_this.appendDomain(url), params).then(response => {
                resolve(_this.handleSuccess(response));
            }).catch(error => {
                reject(_this.handleError(error));
            });
        });
    }

    /**
     * axios post 请求 用url方式传参
     * @param  {[type]} url    [链接]
     * @param  {[type]} params [参数]
     * @return {[type]}        [Promise]
     */
    postUrl(url, params) {
        let _this = this;
        let requestUrl = this.appendDomain(url) + this.urlParams(params);
        return new Promise(function(resolve, reject) {
            _this.$http.post(requestUrl, null).then(response => {
                resolve(_this.handleSuccess(response));
            }).catch(error => {
                reject(_this.handleError(error));
            });
        });
    }

    /**
     * axios put 请求
     * @param  {[type]} url    [链接]
     * @param  {[type]} params [参数]
     * @return {[type]}        [Promise]
     */
    put(url, params) {
        let _this = this;
        return new Promise(function(resolve, reject) {
            _this.$http.put(_this.appendDomain(url), params).then(response => {
                resolve(_this.handleSuccess(response));
            }).catch(error => {
                reject(_this.handleError(error));
            });
        });
    }

    putUrl(url, params) {
        let _this = this;
        let requestUrl = this.appendDomain(url) + this.urlParams(params);
        return new Promise(function(resolve, reject) {
            _this.$http.put(requestUrl, null).then(response => {
                resolve(_this.handleSuccess(response));
            }).catch(error => {
                reject(_this.handleError(error));
            });
        });
    }

    /**
     * delete请求
     * @param url
     * @param params
     * @param callBack
     */
    delete(url, params, callBack) {
        let _this = this;
        return new Promise(function(resolve, reject) {
            _this.$http.delete(_this.appendDomain(url), {
                params: params
            }).then(response => {
                resolve(_this.handleSuccess(response));
            }).catch(error => {
                reject(_this.handleError(error));
            });
        });
    }

    /**
     * [putUploadFile description]
     * @param  {[type]} url      [description]
     * @param  {[type]} formData [description]
     * @param  {[type]} callBack [description]
     * @return {[type]}          [description]
     */
    putFileUpload(url, formData) {
        let config = { headers: { "Content-Type": 'multipart/form-data', Authorization: this.token } };
        let _this = this;
        return new Promise(function(resolve, reject) {
            axios.put(_this.appendDomain(url), formData, config).then(response => {
                resolve(_this.handleSuccess(response));
            }).catch(error => {
                reject(_this.handleError(error));
            });
        });
    }

    /**
     * post表单提交
     * @param  {[type]} url      [地址]
     * @param  {[type]} formData [表单对象]
     * @param  {[type]} callBack [回调函数]
     * @return {[type]}          [reponse]
     */
    postFileUpload(url, formData, callBack) {
        let config = {
            headers: {
                "Content-Type": 'multipart/form-data',
                Authorization: this.token
            }
        };
        let _this = this;
        return new Promise(function(resolve, reject) {
            axios.post(_this.appendDomain(url), formData, config).then(response => {
                resolve(_this.handleSuccess(response));
            }).catch(error => {
                reject(_this.handleError(error));
            });
        });
    }


    /**
     * url 组装参数
     * @param  {[type]} params [参数列表]
     * @return {[type]}        [String]
     */
    urlParams(params) {
        if (params == null) return '';
        var paramStr = '?';
        for (var key in params) {
            paramStr += key + "=" + params[key] + "&";
        }
        paramStr = paramStr.substring(0, paramStr.length - 1); //将a字符串转换成数组
        return paramStr;
    }

    /**
     * [成功返回处理]
     * @param  {[type]} response [返回数据]
     * @return {[type]}          [Object]
     */
    handleSuccess(response) {
        let data = response.data;
        return {
            status: data.resultCode == 0 ? true : false,
            data: data
        };
    }

    /**
     * 处理Http 错误
     * @param  {[type]} error [description]
     * @return {[type]}       [description]
     */
    handleError(error) {
        let resp = {
            code: 0,
            message: null,
            random: Math.random() * 100
        };
        if (error.response) {
            if (error.response.status == 401) {
                window.postMessage('401', '*');
                resp.code = 401;
            } else if (error.response.status == 500) {
                let data = error.response.data;
                if (data && data.resultCode == 65541) {
                    resp.message = data.resultCode;
                    resp.code = -1;
                } else if (data && data.resultCode == 65545) {
                    resp.message = data.resultCode;
                    resp.code = -1;
                } else {
                    resp.code = 500;
                    resp.message = "服务器内部出错";
                }
            } else if (error.response.status == 504) {
                resp.message = error.response.data;
                resp.code = 504;
            } else if (error.response.status == 502) {
                resp.message = "网关延时";
                resp.code = 502;
            } else if (error.response.status == 503) {
                resp.message = "后台服务未开启";
                resp.code = 503;
            }
        } else {
            resp.code = -1;
            resp.message = error.message;
        }
        return resp;
    }

    /**
     * 封装Url
     * @param  {[type]} url [description]
     * @return {[type]}     [description]
     */
    appendDomain(url) {
        var urls = url.split('/');
        if (urls && urls.length > 2 && urls[1] == 'api')
            return url;
        return domain + '/api/' + url;
    }

}
