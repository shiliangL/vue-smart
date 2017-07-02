export default {
  data() {
    return {
      menus: [],          //菜单
      navigations: [],    //导航
      settings: [],       //设置
      originalIndex: -1,  //原选中
      originalParentIndex: -1,  //原选中父级
      selected: null,     //选中数据
      isLogin: false,     //是否登录
      isShow: false,      //是否显示布局
      status: '200',      //状态
      frameClass: 'hide', //登录元素
      frameSrc: null,     //登录地址
      currentTime: null,  //登录时间
    }
  }
}
