(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],d=0,m=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("8a23"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[a("router-view"),a("v-bottom-navigation",{attrs:{value:t.activeBtn,grow:"",fixed:"",color:"#ffdd58","background-color":"#fff"}},[a("v-btn",{attrs:{to:"/"}},[a("span",[t._v("Store")]),a("v-icon",[t._v("mdi-store")])],1),a("v-btn",{attrs:{to:"Cart"}},[a("span",[t._v("Cart")]),a("v-icon",[t._v("mdi-cart")])],1)],1)],1)],1)},r=[],o={name:"App",components:{},data:function(){return{activeBtn:1,tab:null,showcnt:!1,num:1,pitems:[{icon:"folder",qty:"120g",title:"Green Chilli",subtitle:"₨. 72.00"},{icon:"folder",qty:"300g",title:"Recipes",subtitle:"Jan 17, 2014"},{icon:"folder",qty:"500g",title:"Work",subtitle:"Jan 28, 2014"}],items:["All Products","Vegetables","Sea Food Collection","Organic Rice","Fruits"],text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}}},s=o,l=(a("034f"),a("2877")),c=a("6544"),u=a.n(c),d=a("7496"),m=a("b81c"),f=a("8336"),p=a("132d"),v=Object(l["a"])(s,i,r,!1,null,null,null),b=v.exports;u()(v,{VApp:d["a"],VBottomNavigation:m["a"],VBtn:f["a"],VIcon:p["a"]});var g=a("9483");Object(g["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var h=a("2f62");n["default"].use(h["a"]);var x=new h["a"].Store({state:{},mutations:{},actions:{},modules:{}}),_=a("8c4f"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"store"}},[a("v-card",{attrs:{flat:""}},[a("v-card-text",{staticClass:"text-xs-center"},[a("div",{staticStyle:{background:"#ffdd58!important",padding:"0px!important",margin:"0px!important"}},[a("v-card-title",{staticClass:"text-center justify-center"},[a("img",{staticClass:"image",attrs:{height:"90px",src:"sent.jpg"}})])],1),a("v-card",[a("v-toolbar",{attrs:{color:"white",light:"",flat:""},scopedSlots:t._u([{key:"extension",fn:function(){return[a("v-tabs",{staticStyle:{background:"linear-gradient(45deg, #ffdd58 0%, #ffdd58 35%, #ffdd58 100%)"},attrs:{"center-active":"",light:"",grow:"",color:"#0a0"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e){return a("v-tab",{key:e},[t._v(" "+t._s(e)+" ")])})),1)]},proxy:!0}])},[a("v-text-field",{staticClass:"mx-4",attrs:{"append-icon":"mdi-mic",flat:"",dense:"","hide-details":"",label:"Search","prepend-inner-icon":"mdi-magnify",solo:""}})],1),a("v-tabs-items",{staticStyle:{height:"70vh"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e){return a("v-tab-item",{key:e},["Fruits"==e?a("v-card",{staticClass:"pa-4",attrs:{flat:""}},[a("v-card-text",[a("v-list",{attrs:{"three-line":"",subheader:""}},t._l(t.fruits,(function(e){return a("v-list-item",{key:e.title,staticStyle:{background:"#ffff0000",border:"2px solid #eee",margin:"5px","border-radius":"15px"},attrs:{outlined:""}},[a("v-avatar",{staticClass:"profile",attrs:{color:"#ffdd58",size:"60",tile:""}},[a("v-img",{attrs:{src:"https://app-whatshash-com.s3.ap-south-1.amazonaws.com/uploads/c-40114/2020-06-30/media_1593495364.jpeg?response-content-disposition=attachment&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAISKMBIXSUCXZC6UQ%2F20200630%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20200630T102025Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Signature=f357c01cae014c396c87eb1e01e22359864327b0c933086f1ca392c910fb2ece"}})],1),a("v-list-item-content",{staticClass:"pa-2"},[a("v-list-item-title",{domProps:{textContent:t._s(e.Item_Name)}}),a("v-list-item-subtitle",[t._v("Rs. "+t._s(e.Price))]),a("v-list-item-subtitle",[t._v(t._s(e.Qty_per_unit)+t._s(e.Unit))])],1),t.showcnt?a("div",[a("el-input-number",{attrs:{size:"mini",min:1,max:10},on:{change:t.handleChange},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})],1):a("el-button",{attrs:{type:"primary",round:""},on:{click:function(e){t.showcnt=!0}}},[t._v("Add to cart")])],1)})),1)],1)],1):t._e(),"Vegetables"==e?a("v-card",{staticClass:"pa-4",attrs:{flat:""}},[a("v-card-text",[a("v-list",{attrs:{"three-line":"",subheader:""}},t._l(t.vegetables,(function(e){return a("v-list-item",{key:e.title,staticStyle:{background:"#fff",border:"2px solid #efefef",margin:"5px","border-radius":"15px"},attrs:{outlined:""}},[a("v-avatar",{staticStyle:{"border-radius":"10px!important",margin:"5px -5px 5px"},attrs:{rounded:"",color:"#fff",size:"90",tile:""}},[a("v-img",{staticStyle:{"border-radius":"20px"},attrs:{src:e.MediaURL}})],1),a("v-list-item-content",{staticClass:"pa-3"},[a("v-list-item-title",{domProps:{textContent:t._s(e.Item_Name)}}),a("v-list-item-subtitle",[t._v("Rs. "+t._s(e.Price))]),a("v-list-item-subtitle",[t._v(t._s(e.Qty_per_unit)+t._s(e.Unit))])],1),t.showcnt?a("div",[a("el-input-number",{attrs:{size:"mini",min:1,max:10},on:{change:t.handleChange},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})],1):a("el-button",{attrs:{type:"primary",round:""},on:{click:function(e){t.showcnt=!0}}},[t._v("Add to cart")])],1)})),1)],1)],1):t._e(),"Sea Food Collection"==e?a("v-card",{staticClass:"pa-4",attrs:{flat:""}},[a("v-card-text",[a("v-list",{attrs:{"three-line":"",subheader:""}},t._l(t.seafood,(function(e){return a("v-list-item",{key:e.title,staticStyle:{background:"#ffff0000",border:"2px solid #eee",margin:"5px","border-radius":"15px"},attrs:{outlined:""}},[a("v-avatar",{staticClass:"profile",attrs:{color:"green",size:"60",tile:""}},[a("v-img",{attrs:{src:"https://app-whatshash-com.s3.ap-south-1.amazonaws.com/uploads/c-40114/2020-06-30/media_1593495364.jpeg?response-content-disposition=attachment&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAISKMBIXSUCXZC6UQ%2F20200630%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20200630T102025Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Signature=f357c01cae014c396c87eb1e01e22359864327b0c933086f1ca392c910fb2ece"}})],1),a("v-list-item-content",{staticClass:"pa-2"},[a("v-list-item-title",{attrs:{large:""},domProps:{textContent:t._s(e.Item_Name)}}),a("v-list-item-subtitle",[t._v("Rs. "+t._s(e.Price))]),a("v-list-item-subtitle",[t._v(t._s(e.Qty_per_unit)+t._s(e.Unit))])],1),t.showcnt?a("div",[a("el-input-number",{attrs:{size:"mini",min:1,max:10},on:{change:t.handleChange},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})],1):a("el-button",{attrs:{type:"primary",round:""},on:{click:function(e){t.showcnt=!0}}},[t._v("Add to cart")])],1)})),1)],1)],1):t._e()],1)})),1)],1)],1)],1)],1)},C=[],A=(a("4de4"),a("caad"),a("2532"),a("bc3a")),S=a.n(A),w={name:"App",components:{},data:function(){return{activeBtn:1,tab:null,products:null,vegetables:null,fruits:null,seafood:null,showcnt:!1,num:1,pitems:[{icon:"folder",qty:"120g",title:"Green Chilli",subtitle:"₨. 72.00"},{icon:"folder",qty:"300g",title:"Recipes",subtitle:"Jan 17, 2014"},{icon:"folder",qty:"500g",title:"Work",subtitle:"Jan 28, 2014"}],items:["Vegetables","Fruits","Sea Food Collection","Organic Rice"],text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},created:function(){var t=this;S.a.get("https://script.google.com/macros/s/AKfycbxgX8WS7051I8afxFpj9-TQEELKIvsqFckrzfRSa3jGKZ4-EAY4/exec").then((function(e){t.products=e.data,t.fruits=e.data.Products.filter((function(t){return t.Categories.includes("Fruits")})),t.vegetables=e.data.Products.filter((function(t){return t.Categories.includes("Vegetables")})),t.seafood=e.data.Products.filter((function(t){return t.Categories.includes("Sea Food Collection")})),console.log(t.fprod)})).catch((function(e){t.errors.push(e)}))}},k=w,V=(a("73d9"),a("8212")),z=a("b0af"),I=a("99d9"),j=a("adda"),F=a("8860"),O=a("da13"),P=a("5d23"),X=a("71a3"),q=a("c671"),T=a("fe57"),E=a("aac8"),N=a("8654"),U=a("71d9"),L=Object(l["a"])(k,y,C,!1,null,null,null),M=L.exports;u()(L,{VAvatar:V["a"],VCard:z["a"],VCardText:I["a"],VCardTitle:I["b"],VImg:j["a"],VList:F["a"],VListItem:O["a"],VListItemContent:P["a"],VListItemSubtitle:P["b"],VListItemTitle:P["c"],VTab:X["a"],VTabItem:q["a"],VTabs:T["a"],VTabsItems:E["a"],VTextField:N["a"],VToolbar:U["a"]});var R,B,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts,"items-per-page":5}})},H=[],K={data:function(){return{headers:[{text:"Name",align:"start",sortable:!1,value:"name"},{text:"Address",value:"address"},{text:"",value:""},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Iron (%)",value:"iron"}],desserts:[{name:"test",address:159,mobile:6,type:24,protein:4,iron:""}]}}},J=K,Q=a("8fea"),G=Object(l["a"])(J,D,H,!1,null,null,null),W=G.exports;u()(G,{VDataTable:Q["a"]});var Z={},$=Object(l["a"])(Z,R,B,!1,null,null,null),Y=$.exports;n["default"].use(_["a"]);var tt=[{path:"/home",name:"Home",component:Y},{path:"/",name:"Store",component:M},{path:"/cart",name:"Cart",component:W}],et=new _["a"]({mode:"hash",base:"/",routes:tt,linkActiveClass:"active-route",linkExactActiveClass:"active-route-exact"}),at=et,nt=a("f309");n["default"].use(nt["a"]);var it=new nt["a"]({}),rt=a("5c96"),ot=a.n(rt);a("0fae");n["default"].config.productionTip=!1,n["default"].use(ot.a),new n["default"]({router:at,store:x,vuetify:it,render:function(t){return t(b)}}).$mount("#app")},"73d9":function(t,e,a){"use strict";var n=a("9bbe"),i=a.n(n);i.a},"8a23":function(t,e,a){},"9bbe":function(t,e,a){}});
//# sourceMappingURL=app.7f483917.js.map