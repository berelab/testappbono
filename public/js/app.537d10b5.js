(function(e){function n(n){for(var a,c,u=n[0],s=n[1],f=n[2],i=0,d=[];i<u.length;i++)c=u[i],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(n);while(d.length)d.shift()();return o.push.apply(o,f||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,c=1;c<t.length;c++){var u=t[c];0!==r[u]&&(a=!1)}a&&(o.splice(n--,1),e=s(s.s=t[0]))}return e}var a={},c={app:0},r={app:0},o=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0142823a":"92d922df","chunk-0852fcc5":"7b192258","chunk-09ec7400":"822783c1","chunk-0d4ee0ef":"8d80d007","chunk-1215ad43":"85e57f69","chunk-156ae48e":"48a72138","chunk-164c4c62":"960385eb","chunk-1e703efe":"a2277809","chunk-30299544":"d1518fc2","chunk-361704ea":"62db87db","chunk-39127264":"5d460fc7","chunk-4b9996c6":"563541cb","chunk-4f2a3636":"581c643d","chunk-4fc931f4":"96cb966f","chunk-5c52e76a":"ae8ebbc7","chunk-619892aa":"a46c0ce2","chunk-69ec9c2c":"846e2e18","chunk-8e2fb9c2":"c3b68dfb","chunk-977372a4":"0eca6e9c","chunk-b96fd292":"f98872c2","chunk-cdae2bbc":"d61025e2","chunk-e183df5e":"3cee7319"}[e]+".js"}function s(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t={"chunk-0142823a":1,"chunk-0852fcc5":1,"chunk-09ec7400":1,"chunk-0d4ee0ef":1,"chunk-1215ad43":1,"chunk-156ae48e":1,"chunk-164c4c62":1,"chunk-1e703efe":1,"chunk-30299544":1,"chunk-361704ea":1,"chunk-39127264":1,"chunk-4b9996c6":1,"chunk-4f2a3636":1,"chunk-4fc931f4":1,"chunk-619892aa":1,"chunk-69ec9c2c":1,"chunk-8e2fb9c2":1,"chunk-977372a4":1,"chunk-b96fd292":1,"chunk-cdae2bbc":1,"chunk-e183df5e":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-0142823a":"6e6fa3b4","chunk-0852fcc5":"6e6fa3b4","chunk-09ec7400":"6e6fa3b4","chunk-0d4ee0ef":"6e6fa3b4","chunk-1215ad43":"6e6fa3b4","chunk-156ae48e":"6e6fa3b4","chunk-164c4c62":"86aa08ce","chunk-1e703efe":"6e6fa3b4","chunk-30299544":"6e6fa3b4","chunk-361704ea":"6e6fa3b4","chunk-39127264":"6e6fa3b4","chunk-4b9996c6":"6e6fa3b4","chunk-4f2a3636":"6e6fa3b4","chunk-4fc931f4":"6e6fa3b4","chunk-5c52e76a":"31d6cfe0","chunk-619892aa":"6e6fa3b4","chunk-69ec9c2c":"6e6fa3b4","chunk-8e2fb9c2":"6e6fa3b4","chunk-977372a4":"6e6fa3b4","chunk-b96fd292":"6e6fa3b4","chunk-cdae2bbc":"6e6fa3b4","chunk-e183df5e":"6e6fa3b4"}[e]+".css",r=s.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var f=o[u],i=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(i===a||i===r))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){f=d[u],i=f.getAttribute("data-href");if(i===a||i===r)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var a=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete c[e],l.parentNode.removeChild(l),t(o)},l.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){c[e]=0})));var a=r[e];if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(n,t){a=r[e]=[n,t]}));n.push(a[2]=o);var f,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=u(e);var d=new Error;f=function(n){i.onerror=i.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",d.name="ChunkLoadError",d.type=a,d.request=c,t[1](d)}r[e]=void 0}};var l=setTimeout((function(){f({type:"timeout",target:i})}),12e4);i.onerror=i.onload=f,document.head.appendChild(i)}return Promise.all(n)},s.m=e,s.c=a,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)s.d(t,a,function(n){return e[n]}.bind(null,a));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],i=f.push.bind(f);f.push=n,f=f.slice();for(var d=0;d<f.length;d++)n(f[d]);var l=i;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},4678:function(e,n,t){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function c(e){var n=r(e);return t(n)}function r(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=r,e.exports=c,c.id="4678"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],o=(t("034f"),t("2877")),u={},s=Object(o["a"])(u,c,r,!1,null,null,null),f=s.exports,i=(t("d3b7"),t("8c4f"));a["default"].use(i["a"]);var d,l,h=[{path:"/",name:"dashboard",component:function(){return t.e("chunk-164c4c62").then(t.bind(null,"7277"))}},{path:"/login",name:"login",component:function(){return t.e("chunk-5c52e76a").then(t.bind(null,"dd7b"))}},{path:"/lapaz/corte/:user",name:"corte",component:function(){return t.e("chunk-b96fd292").then(t.bind(null,"d364"))}},{path:"/lapaz/almacen/:user",name:"almacen",component:function(){return t.e("chunk-4b9996c6").then(t.bind(null,"f2f8"))}},{path:"/lapaz/choferlocal/:user",name:"chofer",component:function(){return t.e("chunk-cdae2bbc").then(t.bind(null,"7218"))}},{path:"/lapaz/chofercedi/:user",name:"cedi",component:function(){return t.e("chunk-e183df5e").then(t.bind(null,"086a"))}},{path:"/lapaz/vigueta/:user",name:"vigueta",component:function(){return t.e("chunk-0852fcc5").then(t.bind(null,"caab"))}},{path:"/lapaz/bloquera/:user",name:"moldeoLaPaz",component:function(){return t.e("chunk-619892aa").then(t.bind(null,"d607"))}},{path:"/juarez/kbrs/:user",name:"kbrs",component:function(){return t.e("chunk-0142823a").then(t.bind(null,"c3e6"))}},{path:"/juarez/mcsframe/:user",name:"mcsframe",component:function(){return t.e("chunk-977372a4").then(t.bind(null,"1f12"))}},{path:"/juarez/bloquera/:user",name:"moldeoJuarez",component:function(){return t.e("chunk-361704ea").then(t.bind(null,"7aa1"))}},{path:"/juarez/aligerante/:user",name:"aligerante",component:function(){return t.e("chunk-1e703efe").then(t.bind(null,"2b1d"))}},{path:"/juarez/almacen/:user",name:"almacenJuarez",component:function(){return t.e("chunk-69ec9c2c").then(t.bind(null,"030e"))}},{path:"/juarez/aosmith/:user",name:"aosmith",component:function(){return t.e("chunk-39127264").then(t.bind(null,"1474"))}},{path:"/juarez/choferes/:user",name:"choferes",component:function(){return t.e("chunk-156ae48e").then(t.bind(null,"37a3"))}},{path:"/juarez/commscope/:user",name:"commscope",component:function(){return t.e("chunk-8e2fb9c2").then(t.bind(null,"0236"))}},{path:"/juarez/corte/:user",name:"corteJuarez",component:function(){return t.e("chunk-1215ad43").then(t.bind(null,"6128"))}},{path:"/juarez/electrolux/:user",name:"electrolux",component:function(){return t.e("chunk-4fc931f4").then(t.bind(null,"4c6e"))}},{path:"/juarez/molino/:user",name:"molino",component:function(){return t.e("chunk-30299544").then(t.bind(null,"4356"))}},{path:"/juarez/placa/:user",name:"placa",component:function(){return t.e("chunk-0d4ee0ef").then(t.bind(null,"2f56"))}},{path:"/cancun/almacen/:user",name:"almacenCun",component:function(){return t.e("chunk-4f2a3636").then(t.bind(null,"cdf3"))}},{path:"/cancun/corte/:user",name:"corteCun",component:function(){return t.e("chunk-09ec7400").then(t.bind(null,"9fb9"))}}],b=new i["a"]({mode:"history",base:"/",routes:h}),p=b,m=t("2f62"),j=(t("ac1f"),t("5319"),t("96cf"),t("1da1")),g=t("ade3"),k=t("c1df"),v=t.n(k),z=(t("99af"),t("bc3a")),w=t.n(z),y={getDeptos:function(e){return w.a.get("/".concat(e))},getDeptoInfo:function(e,n,t){return w.a.get("/".concat(n,"/").concat(e,"/calculator/").concat(t))},getDashboardInfo:function(e,n){return w.a.get("/".concat(n,"/").concat(e,"/calculator"))},getBDInfo:function(e,n){return w.a.get("/".concat(n,"/").concat(e))},editInfo:function(e,n,t,a,c){return w.a.put("/".concat(c,"/admin/").concat(a),{base:e,dias_sucios:n,extra_m3:t})},getBonos:function(e,n){return w.a.get("/".concat(n,"/").concat(e,"/bonos"))},getProduccion:function(e,n){return w.a.get("/".concat(n,"/").concat(e,"/produccion"))}},O="CHANGE_NAME",C="SET_WEEK",E="GET_INFO",_="GET_INFO_SUCCESS",N="CHANGE_DEPTO",S={namespaced:!0,state:{place:"La Paz",department:"Almacén",week:"",loading:!1,data:[]},getters:{getName:function(e){return e.place},getDep:function(e){return e.department},getWeek:function(e){return e.week},loading:function(e){return e.loading},data:function(e){return e.data}},mutations:(d={},Object(g["a"])(d,O,(function(e,n){e.place=n})),Object(g["a"])(d,N,(function(e,n){e.department=n})),Object(g["a"])(d,C,(function(e,n){e.week=n})),Object(g["a"])(d,E,(function(e){e.loading=!0,e.data=[]})),Object(g["a"])(d,_,(function(e,n){e.loading=!1,e.data=n})),d),actions:{week:function(e){var n=e.commit,t=v()().startOf("isoweek").locale("es").format("dddd D [a]"),a=v()().endOf("isoweek").locale("es").format(" dddd D [de] MMMM[,] YYYY"),c=t+a;n(C,c)},getInfo:function(e,n){return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,c,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,a(O,n),a(E),t.prev=3,c=n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f-\s-\.]/g,""),t.next=7,y.getDeptos(c);case 7:return r=t.sent,a(_,r.data),t.abrupt("return",r.data);case 12:t.prev=12,t.t0=t["catch"](3),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[3,12]])})))()},changeDeptos:function(e,n){var t=e.commit;if("Juárez"==n){t(N,"Aligerante");var a=n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f-\s-\.]/g,"");this.dispatch("plants/getBDInfo",{department:"Aligerante",city:a}),this.dispatch("plants/getAllInfo",{department:"Aligerante",city:a})}else if("La Paz"==n){t(N,"Almacén");var c=n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f-\s-\.]/g,"");this.dispatch("plants/getBDInfo",{department:"Almacén",city:c}),this.dispatch("plants/getAllInfo",{department:"Almacén",city:c}),this.dispatch("plants/getBonos",{cityName:"La Paz",depName:"Almacén"}),this.dispatch("plants/getProduccion",{cityName:"La Paz",depName:"Almacén"})}}}},D="UPDATE_SUCCESS",P="GET_INFO",x="GET_INFO_SUCCESS",F="UPDATE_PROCESS",L="GETTING_BD_INFO",T="GET_BD_INFO_SUCCESS",A="GET_PRODDATE_SUCCESS",I="GET_PROD_SUCCESS",B="GET_BONUSDATE_SUCCESS",R="GET_BONUS_SUCCESS",U={namespaced:!0,state:{notification:"Guardar",loading:!1,flag:!1,data:[],bd:[],chartBonos:{},chartBonosFecha:{},chartProduccion:{},chartProduccionFecha:{}},getters:{getNotif:function(e){return e.notification},loading:function(e){return e.loading},flag:function(e){return e.flag},data:function(e){return e.data},bd:function(e){return e.bd},chartBonos:function(e){return e.chartBonos},chartBonosFecha:function(e){return e.chartBonosFecha},chartProduccion:function(e){return e.chartProduccion},chartProduccionFecha:function(e){return e.chartProduccionFecha}},mutations:(l={},Object(g["a"])(l,P,(function(e){e.loading=!0,e.data=[]})),Object(g["a"])(l,x,(function(e,n){e.loading=!1,e.data=n})),Object(g["a"])(l,D,(function(e,n){e.flag=!0,e.notification=n})),Object(g["a"])(l,F,(function(e){e.notification="Guardar",e.flag=!1})),Object(g["a"])(l,L,(function(e){e.loading=!0,e.bd=[]})),Object(g["a"])(l,T,(function(e,n){e.loading=!1,e.bd=n})),Object(g["a"])(l,A,(function(e,n){e.chartProduccionFecha=n})),Object(g["a"])(l,I,(function(e,n){e.chartProduccion=n})),Object(g["a"])(l,B,(function(e,n){e.chartBonosFecha=n})),Object(g["a"])(l,R,(function(e,n){e.chartBonos=n})),l),actions:{editInfo:function(e,n){return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,a(F),t.prev=2,t.next=5,y.editInfo(n.base,n.dias_sucios,n.extra_m3,n.depto,n.city);case 5:return c=t.sent,a(D,"Cambios guardados"),t.abrupt("return",c.data);case 10:t.prev=10,t.t0=t["catch"](2),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})))()},getInfo:function(e,n){return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,c,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,a(P),c=n.department,t.prev=3,r=c.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f-\s]/g,""),t.next=7,y.getDeptoInfo(r,n.city,n.userCode);case 7:return o=t.sent,a(x,o.data),t.abrupt("return",o.data);case 12:t.prev=12,t.t0=t["catch"](3),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[3,12]])})))()},getBDInfo:function(e,n){return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,c,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,a(L),c=n.department,t.prev=3,r=c.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f-\s]/g,""),t.next=7,y.getBDInfo(r,n.city);case 7:return o=t.sent,a(T,o.data),t.abrupt("return",o.data);case 12:t.prev=12,t.t0=t["catch"](3),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[3,12]])})))()},getAllInfo:function(e,n){return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,c,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,a(P),c=n.department,t.prev=3,r=c.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f-\s]/g,""),t.next=7,y.getDashboardInfo(r,n.city);case 7:return o=t.sent,a(x,o.data),t.abrupt("return",o.data);case 12:t.prev=12,t.t0=t["catch"](3),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[3,12]])})))()},getBonos:function(e,n){return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,c,r,o,u,s,f,i,d,l,h,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.prev=1,c=n.cityName,r=n.depName,u=[],s=[],f=[],i=r.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f-\s]/g,""),o="La Paz"==c?c.toLowerCase().replace(/ /g,""):c.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f-\ ]/g,""),"lapaz"!=o&&(o="lapaz"),"choferlocal"!=i&&"corte"!=i&&"bloquera"!=i&&"almacen"!=i&&"vigueta"!=i&&(i="bloquera"),t.next=13,y.getBonos(i,o);case 13:for(d=t.sent,f=d.data.bonos,l=f.length,h=0;h<l;h++)s.push(f[h].semana);for(a(B,s),b=0;b<l;b++)u.push(f[b].bono);a(R,u),t.next=25;break;case 22:t.prev=22,t.t0=t["catch"](1),console.log(t.t0);case 25:case"end":return t.stop()}}),t,null,[[1,22]])})))()},getProduccion:function(e,n){return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,c,r,o,u,s,f,i,d,l,h,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.prev=1,c=n.cityName,r=n.depName,u=[],s=[],f=[],i=r.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f-\ ]/g,""),o="La Paz"==c?c.toLowerCase().replace(/ /g,""):c.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f-\ ]/g,""),"lapaz"!=o&&(o="lapaz"),"choferlocal"!=i&&"corte"!=i&&"bloquera"!=i&&"almacen"!=i&&"vigueta"!=i&&(i="bloquera"),t.next=13,y.getProduccion(i,o);case 13:for(d=t.sent,u=d.data.produccion,l=u.length,h=0;h<l;h++)f.push(u[h].semana);for(a(A,f),b=0;b<l;b++)s.push(u[b].produccion);a(I,s),t.next=25;break;case 22:t.prev=22,t.t0=t["catch"](1),console.log(t.t0);case 25:case"end":return t.stop()}}),t,null,[[1,22]])})))()}}};a["default"].use(m["a"]);var G=new m["a"].Store({modules:{admin:S,plants:U}}),q=t("2ead"),M=t.n(q),J=t("d842"),Y=t("30ef"),H=t.n(Y),K=t("5f5b"),W=t("b1e0"),$=(t("f9e3"),t("2dd8"),t("2106")),Q=t.n($);a["default"].use(K["a"]),a["default"].use(W["a"]),a["default"].use(M.a),a["default"].use(J["a"].use(H.a)),a["default"].use(Q.a,w.a),w.a.defaults.baseURL="http://localhost:3000/api",a["default"].config.productionTip=!1,new a["default"]({router:p,store:G,render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.537d10b5.js.map