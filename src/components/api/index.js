import Vue from 'vue'
import Http from './http/http.js'
import Api from './api/api.js'


const install = function(Vue, opts = {}) {
    if (install.installed) return;
    var http = new Http();
    var api = new Api();
    Vue.prototype.$http = http;
    Vue.prototype.$api = api;
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

Vue.use(install);
