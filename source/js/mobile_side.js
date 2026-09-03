/* 手机侧边栏默认不展开：从旧线上站补回的兼容脚本 */
(function () {
  var mobileSidebarMenus = document.getElementById('mobile-sidebar-menus')
  if (!mobileSidebarMenus) return

  var menusItemChild = mobileSidebarMenus.getElementsByClassName('menus_item_child')
  var menusExpand = mobileSidebarMenus.getElementsByClassName('menus-expand')

  for (var i = 0; i < menusItemChild.length; i++) {
    menusItemChild[i].style.display = 'none'
    if (menusExpand[i]) menusExpand[i].className += ' menus-closed'
  }
})()
