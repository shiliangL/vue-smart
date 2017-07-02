<template>
 <div id="side-menu" class="wrapper">
   <header  class="topnavbar-wrapper">
     <nav role="navigation" class="navbar topnavbar">
      <div class="navbar-header">
       <a href="#/" class="navbar-brand">
        <div class="brand-logo">
          LOGO 
          <!-- <img src="" alt="Logo" class="img-responsive"> -->
        </div>
        <div class="brand-logo-collapsed">
         <img src="static/img/logo-single.png" alt="App Logo" class="img-responsive">
       </div>
     </a>
   </div>
   <div class="nav-wrapper">
     <ul class="nav navbar-nav">
      <li>
       <a href="#" data-trigger-resize="" data-toggle-state="aside-collapsed" class="hidden-xs">
        <em class="fa fa-navicon"></em>
      </a>
      <a href="#" data-toggle-state="aside-toggled" data-no-persist="true" class="visible-xs sidebar-toggle">
        <em class="fa fa-navicon"></em>
      </a>
    </li>
  </ul>
  <ul class="nav navbar-nav navbar-right">
    <li class="dropdown dropdown-list">
      <a href="#">
        <font size="2">
          {{currentTime}}  Admin  欢迎您登陆！
        </font>
      </a>
    </li>
    <li class="dropdown dropdown-list">
      <a href="#" data-toggle="dropdown">系统导航</a>
      <ul role="menu" class="dropdown-menu animated swing" >
       <li v-for="item in navigations">
         <a style="display:block; text-align:left; padding-top:5px; padding-bottom:5px;" @click="clickNavigationItem(item)" href="#">{{item.name}}</a>
       </li>
     </ul>
   </li>
   <li class="dropdown dropdown-list">
    <a href="#" data-toggle="dropdown">设置</a>
    <ul role="menu" class="dropdown-menu animated swing">
     <li v-for="item in settings">
       <a style="display:block; text-align:center; padding-top:5px; padding-bottom:5px;" @click="clickSetting(item)">{{item.text}}</a>
     </li>
   </ul>
 </li>
</ul>
</div>
</nav>
</header>
<aside  class="aside">
 <div class="aside-inner">
  <nav data-sidebar-anyclick-close="" class="sidebar">
   <ul class="nav">
    <li v-for="(item, index) in menus" :class="item.class">
      <template v-if="item.items && item.items.length > 0">
        <a :href="'#'+item.text" :title="item.text" data-toggle="collapse">
         <em :class="item.icon"></em>
         <span>{{item.text}}</span>
       </a>
       <ul :id="item.text" class="nav sidebar-subnav collapse">
        <li v-for="(sub, indexI) in item.items" :class="sub.class">
          <template v-if="sub.items && sub.items.length > 0">
            <a :href="'#'+sub.text" :title="sub.text" data-toggle="collapse">
             <em class="fa fa-angle-right"></em>
             <span>{{sub.text}}</span>
           </a>
           <ul :id="sub.text" class="nav sidebar-subnav collapse">
            <li v-for="(child, indexJ) in sub.items" :class="child.class">
             <a href="javascript:void(0)" :data-item="child.name+'|'+child.text" :data-sub-index="indexI" :data-index="index" @click="clickMenuItem(child, index, indexI)" :title="child.text">
              <span>{{child.text}}</span>
            </a>
          </li>
        </ul>
      </template>
      <template v-else>
       <a href="javascript:void(0)" :data-item="sub.name+'|'+sub.text" data-sub-index="-1" :data-index="index" :title="item.text" @click="clickMenuItem(sub, index, -1)">
        <span>{{sub.text}}</span>
      </a>
    </template>
  </li>
</ul>
</template>
<template v-else>
  <a href="javascript:void(0)" :data-item="item.name+'|'+item.text" data-sub-index="-1" :data-index="index" :title="item.text" @click="clickMenuItem(item, index, -1)">
   <em :class="item.icon"></em>
   <span>{{item.text}}</span>
 </a>
</template>
</li>

</ul>
</nav>
</div>
</aside>
<section >
  <div class="content-wrapper">
    <div class="row">
      <vue-tabs></vue-tabs>
    </div>
  </div>
</section>
<footer >
  <span>Vue-Smart © 2014-2017</span>
</footer>
</div>
</template>
<script src="./src/index.js"></script>
<style scoped>
  @import "../../static/css/animate.min.css";
  @import "../../static/css/whirl.css";
  @import "../../static/css/bootstrap.css";
  @import "../../static/css/app.css";
</style>
