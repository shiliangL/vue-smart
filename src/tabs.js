// tabs.js 页面配置
import index from './page/index/login.vue'
import deList from './page/DC-manage/de-list/de-list.vue'
import deRange from './page/DC-manage/dc-range/de-range.vue'
import KH_Manage from './page/KH-Manage/KH-Manage/KH-manage.vue'
import KH_Distributor from './page/KH-Manage/KH-Distributor/KH-Distributor.vue' 

import KC_Item01 from './page/KC-Manage/KC-Item01/KC-Item01.vue' 
import KC_Item02 from './page/KC-Manage/KC-Item02/KC-Item02.vue' 
import KC_Item03 from './page/KC-Manage/KC-Item03/KC-Item03.vue' 

import PC_Item01 from './page/PC-Manage/PC-Item01/PC-Item01.vue' 
import PC_Item02 from './page/PC-Manage/PC-Item02/PC-Item02.vue' 
import PC_Item03 from './page/PC-Manage/PC-Item03/PC-Item03.vue' 

import JC_Item01 from './page/JC-Manage/JC-Item01/JC-Item01.vue' 
import JC_Item02 from './page/JC-Manage/JC-Item02/JC-Item02.vue' 
import JC_Item03 from './page/JC-Manage/JC-Item03/JC-Item03.vue' 


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
},
{	
	name: 'KC_Item02',
	title: '经销商库存',
	component: KC_Item02
},
{	
	name: 'KC_Item03',
	title: '区域库存',
	component: KC_Item03
},
{	
	name: 'PC_Item01',
	title: '产品定价',
	component: PC_Item01
},,{	
	name: 'PC_Item02',
	title: '经销商价格',
	component: PC_Item02
},,{	
	name: 'PC_Item03',
	title: '销售价格',
	component: PC_Item03
},
{	
	name: 'JC_Item01',
	title: '经销商结算',
	component: JC_Item01
},,{	
	name: 'JC_Item02',
	title: '客户结算',
	component: JC_Item02
},,{	
	name: 'JC_Item03',
	title: '合作商户结算',
	component: JC_Item03
}
]
