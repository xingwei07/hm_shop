(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-contact-contact"],{"0614":function(t,n,a){"use strict";a.r(n);var e=a("ad17"),i=a("fe25");for(var r in i)"default"!==r&&function(t){a.d(n,t,(function(){return i[t]}))}(r);a("07a6");var c,o=a("f0c5"),s=Object(o["a"])(i["default"],e["b"],e["c"],!1,null,"679d1c0c",null,!1,e["a"],c);n["default"]=s.exports},"07a6":function(t,n,a){"use strict";var e=a("7e93"),i=a.n(e);i.a},"7e93":function(t,n,a){var e=a("ff0a");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("b3506204",e,!0,{sourceMap:!1,shadowMode:!1})},ad17:function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return r})),a.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"contact"},[a("v-uni-image",{staticClass:"img",attrs:{src:"https://www.itcast.cn/2018czydz/images/gywmban.jpg"}}),a("v-uni-view",{staticClass:"info"},[a("v-uni-view",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.phone.apply(void 0,arguments)}}},[t._v("联系电话：400-618-9090（点击拨打）")]),a("v-uni-view",[t._v("校区地址：浙江省杭州市下沙经济开发区4号大街187号盛泰时代山")])],1),a("v-uni-map",{staticClass:"map",attrs:{longitude:t.longitude,latitude:t.latitude,markers:t.covers,scale:t.scale}})],1)},r=[]},e0a4:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{longitude:120.363118,latitude:30.312419,scale:13,covers:[{longitude:120.363118,latitude:30.312419,iconPath:"../../static/hmlogo.png",width:30,height:30}]}},methods:{phone:function(){uni.makePhoneCall({phoneNumber:"400-618-9090"})}}};n.default=e},fe25:function(t,n,a){"use strict";a.r(n);var e=a("e0a4"),i=a.n(e);for(var r in e)"default"!==r&&function(t){a.d(n,t,(function(){return e[t]}))}(r);n["default"]=i.a},ff0a:function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.contact .img[data-v-679d1c0c]{width:%?750?%;height:%?320?%}.contact .info[data-v-679d1c0c]{padding:%?10?% %?20?%;font-size:%?30?%}.contact .info uni-view[data-v-679d1c0c]{line-height:%?80?%;border-bottom:1px solid #eee}.contact .map[data-v-679d1c0c]{width:%?750?%;height:%?750?%}',""]),t.exports=n}}]);