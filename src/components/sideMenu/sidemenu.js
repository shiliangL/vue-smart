import '../js/modernizr.custom.js'
import '../js/bootstrap.js'
import '../js/jquery.storageapi.js'
import '../js/screenfull.js'
import '../js/app.js'
import '../js/jquery.classyloader.min.js'
import created from './created.js'
export default {
  mixins: [created],
  methods: {
    clickMenuItem(item, index, parentIndex){
      this.selected = item.text
      this.$taber.open({
        name: item.name,
        params: {
          title: item.text
      }
  })
      if(index == this.originalIndex && parentIndex == this.originalParentIndex) return;
      let originalMenu = null;
      if(this.originalIndex != -1){
        originalMenu = this.$util.copy(this.menus[this.originalIndex]);
        originalMenu.class = '';
    }
    if(this.originalParentIndex != -1){
        if(originalMenu == null)
          originalMenu = this.$util.copy(this.menus[this.originalIndex]);
      originalMenu.items[this.originalParentIndex].class = '';
  }
  if(originalMenu != null){
    this.menus.splice(this.originalIndex, 1, originalMenu);
}
let menu = this.$util.copy(this.menus[index]);
menu.class = 'active';
if(parentIndex != -1){
    menu.items[parentIndex].class = 'active';
}
this.menus.splice(index, 1, menu);
this.originalIndex = index;
this.originalParentIndex = parentIndex;
},
cache(token){
  localStorage.setItem('token', token);
  this.$http.setToken(token);
  this.isShow = true;
  this.isLogin = true;
  this.frameClass = 'hide';
},
removeCache() {
  localStorage.setItem('token', '');
  this.frameClass = '';
},
clickSetting(item) {
  if(item.type == "loginout"){
    this.$confirm('您确定要退出登录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
      this.isLogin = false;
      this.isShow = false;
      this.removeCache();
      window.frames[0].postMessage('401', '*');
  });
}else if(item.type == "update-password"){

}
},
clickNavigationItem(item) {
  if(!this.$util.isEmpty(item.url)){
    let domain = document.domain;
    let reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
    if(domain == 'localhost' || reg.test(domain)){
      window.location.href = item.url + '.dev.cloudolp.com';
  }else{
      let lastDomain = domain.substring(domain.indexOf('.'), domain.length);
      window.location.href = item.url + lastDomain;
  }
}
}
}
}
