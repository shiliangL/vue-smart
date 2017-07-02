import model from './model.js'
import menus from '../json/menus.json'
import config from '../json/config.json'
export default{
  mixins: [model],
  created() {
    document.title = config.title;
    let domain = document.domain;
    let reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
    if(domain == 'localhost' || reg.test(domain)){
      this.frameSrc = 'http://passport.dev.cloudolp.com'
    }else{
      let lastDomain = domain.substring(domain.indexOf('.'), domain.length);
      this.frameSrc = 'http://passport' + lastDomain;
    }

    this.navigations = config.systemnavigation;;
    this.settings = config.setting;
    var _this = this;

    (function(window, document, $, undefined){

      var $win;
      var $html;
      var $body;
      var $sidebar;
      var mq;

      $(function(){
        $win     = $(window);
        $html    = $('html');
        $body    = $('body');
        $sidebar = $('.sidebar');
        mq       = APP_MEDIAQUERY;

        // AUTOCOLLAPSE ITEMS
        // -----------------------------------

        var sidebarCollapse = $sidebar.find('.collapse');
        sidebarCollapse.on('show.bs.collapse', function(event){

          event.stopPropagation();
          if ( $(this).parents('.collapse').length === 0 )
            sidebarCollapse.filter('.in').collapse('hide');

        });

        // SIDEBAR ACTIVE STATE
        // -----------------------------------

        // Find current active item
        var currentItem = $('.sidebar .active').parents('li');

        // hover mode don't try to expand active collapse
        if ( ! useAsideHover() )
          currentItem
            .addClass('active')     // activate the parent
            .children('.collapse')  // find the collapse
            .collapse('show');      // and show it

        // remove this if you use only collapsible sidebar items
        $sidebar.find('li > a + ul').on('show.bs.collapse', function (e) {
          if( useAsideHover() ) e.preventDefault();
        });

        // SIDEBAR COLLAPSED ITEM HANDLER
        // -----------------------------------


        var eventName = isTouch() ? 'click' : 'mouseenter' ;
        var subNav = $();
        $sidebar.on( eventName, '.nav > li', function() {

          if( isSidebarCollapsed() || useAsideHover() ) {

            subNav.trigger('mouseleave');
            subNav = toggleMenuItem( $(this) );

            // Used to detect click and touch events outside the sidebar
            sidebarAddBackdrop();
          }

        });

        var sidebarAnyclickClose = $sidebar.data('sidebarAnyclickClose');

        // Allows to close
        if ( typeof sidebarAnyclickClose !== 'undefined' ) {
          $('.wrapper').on('click.sidebar', function(e){
            // don't check if sidebar not visible
            if( ! $body.hasClass('aside-toggled')) return;

            var $target = $(e.target);
            if( ! $target.parents('.aside').length && // if not child of sidebar
                ! $target.is('#user-block-toggle') && // user block toggle anchor
                ! $target.parent().is('#user-block-toggle') // user block toggle icon
              ) {
                    $body.removeClass('aside-toggled');
            }

          });
        }

      });

      function sidebarAddBackdrop() {
        var $backdrop = $('<div/>', { 'class': 'dropdown-backdrop'} );
        $backdrop.insertAfter('.aside').on("click mouseenter", function () {
          removeFloatingNav();
        });
      }

      // Open the collapse sidebar submenu items when on touch devices
      // - desktop only opens on hover
      function toggleTouchItem($element){
        $element
          .siblings('li')
          .removeClass('open')
          .end()
          .toggleClass('open');
      }

      // Handles hover to open items under collapsed menu
      // -----------------------------------
      function toggleMenuItem($listItem) {
        removeFloatingNav();

        var ul = $listItem.children('ul');

        if( !ul.length ) return $();
        if( $listItem.hasClass('open') ) {
          toggleTouchItem($listItem);
          return $();
        }

        var $aside = $('.aside');
        var $asideInner = $('.aside-inner'); // for top offset calculation
        // float aside uses extra padding on aside
        var mar = parseInt( $asideInner.css('padding-top'), 0) + parseInt( $aside.css('padding-top'), 0);

        var subNav = ul.clone().appendTo( $aside );

        toggleTouchItem($listItem);

        var itemTop = ($listItem.position().top + mar) - $sidebar.scrollTop();
        var vwHeight = $win.height();

        subNav
          .addClass('nav-floating')
          .css({
            position: isFixed() ? 'fixed' : 'absolute',
            top:      itemTop,
            bottom:   (subNav.outerHeight(true) + itemTop > vwHeight) ? 0 : 'auto'
          });

        subNav.on('mouseleave', function() {
          toggleTouchItem($listItem);
          subNav.remove();
        });
        $('ul li a[data-item]').on('click', function() {
          let item = $(this).attr('data-item').split('|');
          let index = $(this).attr('data-index');
          let subIndex =  $(this).attr('data-sub-index');
          _this.clickMenuItem({name: item[0], text: item[1]}, index, subIndex);
        });
        return subNav;
      }

      function removeFloatingNav() {
        $('.sidebar-subnav.nav-floating').remove();
        $('.dropdown-backdrop').remove();
        $('.sidebar li.open').removeClass('open');
      }

      function isTouch() {
        return $html.hasClass('touch');
      }
      function isSidebarCollapsed() {
        return $body.hasClass('aside-collapsed') || $body.hasClass('aside-collapsed-text');
      }
      function isSidebarToggled() {
        return $body.hasClass('aside-toggled');
      }
      function isMobile() {
        return $win.width() < mq.tablet;
      }
      function isFixed(){
        return $body.hasClass('layout-fixed');
      }
      function useAsideHover() {
        return $body.hasClass('aside-hover');
      }

    })(window, document, window.jQuery);

    var token = localStorage.getItem('token');
    if(token != null && token.length > 30){
      this.isShow = true;
      this.$http.setToken(token);
    }else{
      this.status = '200';
      this.frameClass = null;
    }

    var _this = this;
    window.addEventListener('message', receiveMessage);
    function receiveMessage(event) {
      if(event.data == '401' || event.data == 'exit'){
        _this.removeCache();
        window.frames[0].postMessage('401', '*');
      }else if(event.data == 'onload' && (_this.status == '401' || _this.status == 'exit')){
        window.frames[0].postMessage('401', '*');
      }else if(event.data == 'exit-success'){
        _this.status = '200';
      }else{
        if(_this.status == '401' || _this.status == 'exit' ) return;
        if(event.data != null && event.data.length > 30){
          _this.cache(event.data);
        }
      }
    }

    this.menus = menus;
    this.$taber.$on('vue-tabs-active-change', (tab) => {
      if (tab) {
        this.selected = tab.meta.title
      } else {
        this.selected = null
      }
    });
  }
}
