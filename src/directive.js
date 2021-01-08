import Vue from 'vue'
// 自定义table水平滚动条始终显示在可视区域
Vue.directive('perfectScrollbar', {
  componentUpdated:function (el, binding,vnode) {
    let trCount=vnode.context.tableData.length;// tr的个数
    fixTabScrollbar(el,null,trCount)
  }
})
//自定义app滚动事件
Vue.directive('appScroll', {
  bind: function(el, binding, vNode) {
   let start = (e) =>{
      fixTabScrollbar(null,el)
    }
    // 添加事件监听器
    el.addEventListener("scroll", start);
  }
})
//app滚动->定位table的水平滚动条
function fixTabScrollbar(tabEle,appEle,trCount) {
  var tabEle=tabEle||document.getElementsByClassName('el-table')[0] // table 元素
  var appEle=appEle||document.getElementById("app") // 滚动条所在容器
  if(!(tabEle&&appEle)) return;
  var tabContainer=tabEle.parentNode; // table 的父级容器
  let thead = tabEle.getElementsByClassName('el-table__header-wrapper')[0];
  let tbody = tabEle.getElementsByClassName('el-table__body-wrapper')[0];
  var trCount=trCount||tbody.getElementsByTagName("tr").length //tr的个数
  let trHeight=50.4 //tr的高度（自己设置的,这里el-table-column需要设置为 show-overflow-tooltip，不然换行会影响tr的高度） elementui这个框架，不知道0.4哪里来的
  let theadHeight=thead.clientHeight?thead.clientHeight:60; // 表头的高度，60是默认的高度(自己设置的)
  let tabHeight=theadHeight+trHeight*trCount+18 //table的高度 （18是el-table水平滚动条的高度）
  let tabWinWidth=thead.clientWidth //table视口的宽度
  let tabWidth=thead.getElementsByTagName('table')[0].offsetWidth;//table的宽度
  let appHeight=appEle.offsetHeight- getOffsetTop(appEle) // 窗口的高度
  let tabOffsetTop=getOffsetTop(tabContainer) //table 距离顶部距离
  let appScrollTop=appEle.scrollTop  // 容器向上滚动的距离
  let bottom=tabOffsetTop+tabHeight-appScrollTop-appHeight;
  if(bottom>0&&tabWidth>tabWinWidth){ //底部大于0并且table的宽度大于el-table视口的宽度-->显示滚动条，并隐藏自己的滚动条
    let scrollBarEle=null
    let childEle=null
    tabEle.classList.add("hide-scrollBar")  //隐藏tableC自己的滚动条
    if(document.getElementById('perfectScrollbar-div')==null){
      scrollBarEle = document.createElement('div');
      scrollBarEle.id = 'perfectScrollbar-div';
      childEle=document.createElement('p');
      childEle.id = 'perfectScrollbar-child';
      tabContainer.appendChild(scrollBarEle);
      scrollBarEle.appendChild(childEle);
      scrollBarEle.style.display="block";
      childEle.style.width=tabWidth+"px";
      childEle.style.height="1px";
      childEle.style.padding="0";
      childEle.style.margin="0";
      scrollBarEle.style.position="absolute";
      scrollBarEle.style.overflowX="auto";
      scrollBarEle.style.left="0px";
      scrollBarEle.style.right="0px";
      scrollBarEle.style.margin="auto";
    }else{
      scrollBarEle = document.getElementById('perfectScrollbar-div');
    }
    scrollBarEle.style.bottom=bottom+"px";
    scrollBarEle.onscroll = function(){
      let target=event.target;
      let scrollLeft=target.scrollLeft
      tbody.scrollLeft=scrollLeft;
    }
  }else{
    tabEle.classList.remove("hide-scrollBar") //显示tableC自己的滚动条
    var scrollBarEle=document.getElementById('perfectScrollbar-div');
    if(scrollBarEle)scrollBarEle.parentNode.removeChild(scrollBarEle);
  }
}
function getOffsetTop(obj) {
  if (!!window.ActiveXObject || "ActiveXObject" in window) {
    var y = obj.offsetTop;
    while (obj = obj.offsetParent) y += obj.offsetTop;
    return y;
  }else{
   return obj.offsetTop
  }
}
