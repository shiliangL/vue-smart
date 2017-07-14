import Vue from 'vue'
import Multiselect from 'vue-multiselect'
// import Loading from './loading/index.js'
import focusInput from './input/index.js'
import Util from './util/util.js'
import './api'

const components = [
    Multiselect,
    focusInput
    // Loading,
    // SearchInputBox
];
const install = function(Vue, opts = {}) {
    if (install.installed) return;
    let util = new Util();
    Vue.prototype.$util = util;
    components.map(component => {
        Vue.component(component.name, component);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

Vue.use(install);
