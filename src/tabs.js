// tabs.js 页面配置
import index from './page/index/login.vue'
import deList from './page/device-manage/de-list/de-list.vue'
import deRange from './page/device-manage/dc-range/de-range.vue'
import KH_Manage from './page/KH-Manage-Group/KH-Manage/KH-manage.vue'
import KH_Distributor from './page/KH-Manage-Group/KH-Distributor/KH-Distributor.vue' 
import KC_Item01 from './page/KC-Manage/KC-Item01/KC-Item01.vue' 




export default [{
	name: 'index',
	title: '系统首页',
	component: index
}, {
	name: 'deList',
	title: '产品绑定列表',
	component: deList
}, {
	name: 'deRange',
	title: '设备管理',
	component: deRange
},{	
	name: 'KH_Manage',
	title: '客户管理',
	component: KH_Manage
},{	
	name: 'KH_Distributor',
	title: '经销商管理',
	component: KH_Distributor
},{	
	name: 'KC_Item01',
	title: '厂家库存',
	component: KC_Item01
}]
