import Vue from 'vue'
// import Loading from './loading/index.js'
// import SearchInputBox from './search-input-box/index.js'
import Util from './util/util.js'
import './api'

const components = [
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
