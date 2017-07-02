/**
 * Created by super on 2017/3/22.
 */
import axios from 'axios'

const domain = "marketing"

export default class Http {

  constructor() {
    this.$http = this.newAxios();
    this.token = '';
  }

  newAxios() {
    return axios.create({
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: this.token,
      },
      timeout: 1000 * 5,
    });
  }

  setToken(token) {
    this.token = token;
    this.$http = this.newAxios();
  }

  /**
   * get 请求
   * @param url
   * @param params 参数
   * @param callBack 回到函数
   */
  get(url, params, callBack) {
    var _this = this;
    this.$http.get(this.appendDomain(url), {
      params: params
    }).then(response => {
      callBack(response, true);
    }).catch(error => {
      callBack(_this.handleError(error), false);
    });
  }

  /**
   * 通用分页
   * @param url
   * @param size 每页显示条数
   * @param page 当前页下标
   * @param callBack 回调函数
   */
  getPage(url, size, page, callBack) {
    var _this = this;
    var params = {
      size: size,
      page: page
    };
    this.$http.get(this.appendDomain(url), {
      params: params
    }).then(response => {
      callBack(response, true);
    }).catch(error => {
      callBack(_this.handleError(error), false);
    });
  }

  /**
   * 默认分页，默认每页显示10条
   * @param url
   * @param page 当前页下标
   * @param callBack 回调函数
   */
  getDefaultPage(url, page, callBack) {
    var _this = this;
    var params = {
      size: 10,
      page: page
    };
    this.$http.get(this.appendDomain(url), {
      params: params
    }).then(response => {
      callBack(response, true);
    }).catch(error => {
      callBack(_this.handleError(error), false);
    });
  }

  /**
   * post请求
   * @param url
   * @param params
   * @param callBack
   */
  post(url, params, callBack) {
    this.$http.post(this.appendDomain(url), params).then(response => {
      // console.log('xxx = ' + JSON.stringify(response));
      callBack(response, true);
    }).catch(error => {
      callBack(error, false);
    });
  }

  /**
   * [postUrl description]
   * @param  {[type]} url      [description]
   * @param  {[type]} params   [description]
   * @param  {[type]} callBack [description]
   * @return {[type]}          [description]
   */
  postUrl(url, params, callBack) {
    this.$http.post(this.appendDomain(url) + this.urlParams(params), null).then(response => {
      // console.log('xxx = ' + JSON.stringify(response));
      callBack(response, true);
    }).catch(error => {
      callBack(error, false);
    });
  }



  urlParams(params) {
    if (params == null) return '';
    var paramStr = '?';
    for (var key in params) {
      paramStr += key + "=" + params[key] + "&";
    }
    paramStr = paramStr.substring(0, paramStr.length - 1); //将a字符串转换成数组
    return paramStr;
  };

  /**
   * put 请求
   * @param url
   * @param params
   * @param callBack
   */
  put(url, params, callBack) {
    this.$http.put(this.appendDomain(url), params).then(response => {
      callBack(response, true);
    }).catch(error => {
      callBack(error, false);
    });
  }

  putUrl(url, params, callBack) {
    this.$http.put(this.appendDomain(url) + this.urlParams(params), null).then(response => {
      // console.log('xxx = ' + JSON.stringify(response));
      callBack(response, true);
    }).catch(error => {
      callBack(error, false);
    });
  }

  


  /**
   * delete请求
   * @param url
   * @param params
   * @param callBack
   */
  delete(url, params, callBack) {
    this.$http.delete(this.appendDomain(url), {
      params: params
    }).then(response => {
      callBack(response, true);
    }).catch(error => {
      callBack(error, false);
    });
  }

  /**
   * [putUploadFile description]
   * @param  {[type]} url      [description]
   * @param  {[type]} formData [description]
   * @param  {[type]} callBack [description]
   * @return {[type]}          [description]
   */
  putFileUpload(url, formData, callBack) {
    var config = {
      headers: {
        "Content-Type": 'multipart/form-data',
        Authorization: this.token
      }
    };
    axios.put(this.appendDomain(url), formData, config).then(response => {
      callBack(response, true);
    }).catch(error => {
      callBack(error, false);
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
    var config = {
      headers: {
        "Content-Type": 'multipart/form-data',
        Authorization: this.token
      }
    };
    axios.post(this.appendDomain(url), formData, config).then(response => {
      callBack(response, true);
    }).catch(error => {
      console.log(error);
    });
  }

  handleError(error) {
    if (error.response) {
      // The request was made, but the server responded with a status code
      // that falls out of the range of 2xx
      // console.log('data = ' + error.response.data);
      console.log('status = ' + error.response.status);
      // console.log('headers = ' + error.response.headers);
      if (error.response.status == 401) {
        window.postMessage('401', '*');
      }
      return JSON.stringify(error.response.data);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('message = ', error.message);
      return JSON.stringify(error.message);
    }
    // console.log('config = ' + JSON.stringify(error.config));
  }

  appendDomain(url) {
    var urls = url.split('/');
    if (urls.length > 2 && urls[1] == 'api')
      return url;

    return domain + '/api/' + url;
  }


}
