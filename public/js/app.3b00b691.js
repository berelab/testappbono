(function(e){function n(n){for(var a,r,u=n[0],s=n[1],i=n[2],f=0,d=[];f<u.length;f++)r=u[f],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(n);while(d.length)d.shift()();return o.push.apply(o,i||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,r=1;r<t.length;r++){var u=t[r];0!==c[u]&&(a=!1)}a&&(o.splice(n--,1),e=s(s.s=t[0]))}return e}var a={},r={app:0},c={app:0},o=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-012d2db8":"c1bf179e","chunk-1dbc6e8a":"087c534a","chunk-263b767c":"61bad1b9","chunk-2c325170":"f13c048b","chunk-380d30bc":"0d334948","chunk-430de2af":"de30ed86","chunk-4cf8bc80":"2f150c04","chunk-5717e915":"4509b969","chunk-6816190c":"42abe22a","chunk-6cb7f57d":"80a1bfee","chunk-6d8a9228":"8e5ba1e4","chunk-743500be":"aaa6a859","chunk-77e01d7e":"f0e49044","chunk-7dc29966":"f530a1d9","chunk-87ba61ba":"68a8df74","chunk-99a2dd7e":"16c2d2d2","chunk-b6d09a42":"22e8d82b","chunk-e8298d38":"876ceb84","chunk-f9f8edee":"2b968956"}[e]+".js"}function s(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t={"chunk-012d2db8":1,"chunk-1dbc6e8a":1,"chunk-263b767c":1,"chunk-2c325170":1,"chunk-380d30bc":1,"chunk-430de2af":1,"chunk-4cf8bc80":1,"chunk-5717e915":1,"chunk-6816190c":1,"chunk-6cb7f57d":1,"chunk-6d8a9228":1,"chunk-743500be":1,"chunk-77e01d7e":1,"chunk-7dc29966":1,"chunk-87ba61ba":1,"chunk-99a2dd7e":1,"chunk-b6d09a42":1,"chunk-e8298d38":1,"chunk-f9f8edee":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-012d2db8":"dcf83569","chunk-1dbc6e8a":"dcf83569","chunk-263b767c":"dcf83569","chunk-2c325170":"dcf83569","chunk-380d30bc":"dcf83569","chunk-430de2af":"dcf83569","chunk-4cf8bc80":"dcf83569","chunk-5717e915":"dcf83569","chunk-6816190c":"dcf83569","chunk-6cb7f57d":"dcf83569","chunk-6d8a9228":"dcf83569","chunk-743500be":"dcf83569","chunk-77e01d7e":"586a7c28","chunk-7dc29966":"dcf83569","chunk-87ba61ba":"dcf83569","chunk-99a2dd7e":"dcf83569","chunk-b6d09a42":"dcf83569","chunk-e8298d38":"dcf83569","chunk-f9f8edee":"dcf83569"}[e]+".css",c=s.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var i=o[u],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===a||f===c))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],f=i.getAttribute("data-href");if(f===a||f===c)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var a=n&&n.target&&n.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],l.parentNode.removeChild(l),t(o)},l.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(n,t){a=c[e]=[n,t]}));n.push(a[2]=o);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=u(e);var d=new Error;i=function(n){f.onerror=f.onload=null,clearTimeout(l);var t=c[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,t[1](d)}c[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(n)},s.m=e,s.c=a,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)s.d(t,a,function(n){return e[n]}.bind(null,a));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var l=f;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},4678:function(e,n,t){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var n=c(e);return t(n)}function c(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id="4678"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},c=[],o=(t("034f"),t("2877")),u={},s=Object(o["a"])(u,r,c,!1,null,null,null),i=s.exports,f=(t("d3b7"),t("8c4f"));a["default"].use(f["a"]);var d,l,h,b=[{path:"/",name:"dashboard",component:function(){return t.e("chunk-77e01d7e").then(t.bind(null,"7277"))}},{path:"/lapaz/corte/:user",name:"corte",component:function(){return t.e("chunk-5717e915").then(t.bind(null,"d364"))}},{path:"/lapaz/almacen/:user",name:"almacen",component:function(){return t.e("chunk-012d2db8").then(t.bind(null,"f2f8"))}},{path:"/lapaz/chofer-local/:user",name:"chofer",component:function(){return t.e("chunk-4cf8bc80").then(t.bind(null,"7218"))}},{path:"/lapaz/chofercedi/:user",name:"cedi",component:function(){return t.e("chunk-430de2af").then(t.bind(null,"086a"))}},{path:"/lapaz/vigueta/:user",name:"vigueta",component:function(){return t.e("chunk-87ba61ba").then(t.bind(null,"caab"))}},{path:"/lapaz/bloquera/:user",name:"moldeoLaPaz",component:function(){return t.e("chunk-f9f8edee").then(t.bind(null,"d607"))}},{path:"/juarez/kbrs/:user",name:"kbrs",component:function(){return t.e("chunk-99a2dd7e").then(t.bind(null,"c3e6"))}},{path:"/juarez/mcsframe/:user",name:"mcsframe",component:function(){return t.e("chunk-6816190c").then(t.bind(null,"1f12"))}},{path:"/juarez/bloquera/:user",name:"moldeoJuarez",component:function(){return t.e("chunk-2c325170").then(t.bind(null,"7aa1"))}},{path:"/juarez/aligerante/:user",name:"aligerante",component:function(){return t.e("chunk-b6d09a42").then(t.bind(null,"2b1d"))}},{path:"/juarez/almacen/:user",name:"almacenJuarez",component:function(){return t.e("chunk-1dbc6e8a").then(t.bind(null,"030e"))}},{path:"/juarez/aosmith/:user",name:"aosmith",component:function(){return t.e("chunk-263b767c").then(t.bind(null,"1474"))}},{path:"/juarez/choferes/:user",name:"choferes",component:function(){return t.e("chunk-6d8a9228").then(t.bind(null,"37a3"))}},{path:"/juarez/commscope/:user",name:"commscope",component:function(){return t.e("chunk-6cb7f57d").then(t.bind(null,"0236"))}},{path:"/juarez/corte/:user",name:"corteJuarez",component:function(){return t.e("chunk-743500be").then(t.bind(null,"6128"))}},{path:"/juarez/electrolux/:user",name:"electrolux",component:function(){return t.e("chunk-e8298d38").then(t.bind(null,"4c6e"))}},{path:"/juarez/molino/:user",name:"molino",component:function(){return t.e("chunk-380d30bc").then(t.bind(null,"4356"))}},{path:"/juarez/placa/:user",name:"placa",component:function(){return t.e("chunk-7dc29966").then(t.bind(null,"2f56"))}}],p=new f["a"]({mode:"history",base:"/",routes:b}),m=p,g=t("2f62"),j=(t("ac1f"),t("5319"),t("96cf"),t("1da1")),k=t("ade3"),v=(t("99af"),t("bc3a")),z=t.n(v),w={getDeptos:function(e){return z.a.get("/".concat(e))},getDeptoInfo:function(e,n){return z.a.get("/lapaz/".concat(e,"/calculator/").concat(n))},getDashboardInfo:function(e){return z.a.get("/lapaz/".concat(e,"/calculator"))},getBDInfo:function(e){return z.a.get("/lapaz/".concat(e))},editInfo:function(e,n,t,a){return z.a.put("/lapaz/admin/".concat(a),{base:e,dias_sucios:n,extra_m3:t})},getBonos:function(e){return z.a.get("/lapaz/".concat(e,"/bonos"))},getProduccion:function(e){return z.a.get("/lapaz/".concat(e,"/produccion"))}},O="UPDATE_SUCCESS",C="GET_INFO",_="GET_INFO_SUCCESS",y="UPDATE_PROCESS",D="GETTING_BD_INFO",E="GET_BD_INFO_SUCCESS",S="GET_PRODDATE_SUCCESS",N="GET_PROD_SUCCESS",x="GET_BONUSDATE_SUCCESS",I="GET_BONUS_SUCCESS",P={namespaced:!0,state:{notification:"Guardar",loading:!1,flag:!1,data:[],bd:[],chartBonos:{},chartBonosFecha:{},chartProduccion:{},chartProduccionFecha:{}},getters:{getNotif:function(e){return e.notification},loading:function(e){return e.loading},flag:function(e){return e.flag},data:function(e){return e.data},bd:function(e){return e.bd},chartBonos:function(e){return e.chartBonos},chartBonosFecha:function(e){return e.chartBonosFecha},chartProduccion:function(e){return e.chartProduccion},chartProduccionFecha:function(e){return e.chartProduccionFecha}},mutations:(d={},Object(k["a"])(d,C,(function(e){e.loading=!0,e.data=[]})),Object(k["a"])(d,_,(function(e,n){e.loading=!1,e.data=n})),Object(k["a"])(d,O,(function(e,n){e.flag=!0,e.notification=n})),Object(k["a"])(d,y,(function(e){e.notification="Guardar",e.flag=!1})),Object(k["a"])(d,D,(function(e){e.loading=!0,e.bd=[]})),Object(k["a"])(d,E,(function(e,n){e.loading=!1,e.bd=n})),Object(k["a"])(d,S,(function(e,n){e.chartProduccionFecha=n})),Object(k["a"])(d,N,(function(e,n){e.chartProduccion=n})),Object(k["a"])(d,x,(function(e,n){e.chartBonosFecha=n})),Object(k["a"])(d,I,(function(e,n){e.chartBonos=n})),d),actions:{editInfo:function(e,n){return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,a(y),t.prev=2,t.next=5,w.editInfo(n.base,n.dias_sucios,n.extra_m3,n.depto);case 5:return r=t.sent,a(O,"Cambios guardados"),t.abrupt("return",r.data);case 10:t.prev=10,t.t0=t["catch"](2),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})))()},getInfo:function(e,n){return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,r,c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,a(C),t.prev=2,c=n.department,r="Chofer Local"==c?c.replace(/ /g,"-"):c.normalize("NFD").replace(/[\u0300-\u036f-\s]/g,""),t.next=7,w.getDeptoInfo(r.toLowerCase(),n.userCode);case 7:return o=t.sent,a(_,o.data),t.abrupt("return",o.data);case 12:t.prev=12,t.t0=t["catch"](2),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[2,12]])})))()},getBDInfo:function(e,n){return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,a(D),t.prev=2,r="Chofer Local"==n?n.replace(/ /g,"-"):n.normalize("NFD").replace(/[\u0300-\u036f-\s]/g,""),t.next=6,w.getBDInfo(r.toLowerCase());case 6:return c=t.sent,a(E,c.data),t.abrupt("return",c.data);case 11:t.prev=11,t.t0=t["catch"](2),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})))()},getAllInfo:function(e,n){return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,a(C),t.prev=2,r="Chofer Local"==n?n.replace(/ /g,"-"):n.normalize("NFD").replace(/[\u0300-\u036f-\s]/g,""),t.next=6,w.getDashboardInfo(r.toLowerCase());case 6:return c=t.sent,a(_,c.data),t.abrupt("return",c.data);case 11:t.prev=11,t.t0=t["catch"](2),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})))()},getBonos:function(e,n){return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,r,c,o,u,s,i,f,d,l,h,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.prev=1,r=n.cityName,c=n.depName,s=[],i=[],f=[],o="Chofer Local"==c?c.toLowerCase().replace(/ /g,""):c.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f-\s]/g,""),u="La Paz"==r?r.toLowerCase().replace(/ /g,""):r.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f-\ ]/g,""),"lapaz"!=u&&(u="lapaz"),"choferlocal"!=o&&"corte"!=o&&"bloquera"!=o&&"almacen"!=o&&"vigueta"!=o&&(o="bloquera"),t.next=13,w.getBonos(o);case 13:for(d=t.sent,f=d.data.bonos,l=f.length,h=0;h<l;h++)i.push(f[h].semana);for(a(x,i),b=0;b<l;b++)s.push(f[b].bono);a(I,s),t.next=25;break;case 22:t.prev=22,t.t0=t["catch"](1),console.log(t.t0);case 25:case"end":return t.stop()}}),t,null,[[1,22]])})))()},getProduccion:function(e,n){return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,r,c,o,u,s,i,f,d,l,h,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.prev=1,r=n.cityName,c=n.depName,s=[],i=[],f=[],o="Chofer Local"==c?c.toLowerCase().replace(/ /g,""):c.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f-\ ]/g,""),u="La Paz"==r?r.toLowerCase().replace(/ /g,""):r.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f-\ ]/g,""),"lapaz"!=u&&(u="lapaz"),"choferlocal"!=o&&"corte"!=o&&"bloquera"!=o&&"almacen"!=o&&"vigueta"!=o&&(o="bloquera"),t.next=13,w.getProduccion(o);case 13:for(d=t.sent,s=d.data.produccion,l=s.length,h=0;h<l;h++)f.push(s[h].semana);for(a(S,f),b=0;b<l;b++)i.push(s[b].produccion);a(N,i),t.next=25;break;case 22:t.prev=22,t.t0=t["catch"](1),console.log(t.t0);case 25:case"end":return t.stop()}}),t,null,[[1,22]])})))()}}},L={getDeptos:function(e){return z.a.get("/".concat(e))},getDeptoInfo:function(e,n){return z.a.get("/juarez/".concat(e,"/calculator/").concat(n))},getDashboardInfo:function(e){return z.a.get("/juarez/".concat(e,"/calculator"))},getBDInfo:function(e){return z.a.get("/juarez/".concat(e))},editInfo:function(e,n,t,a){return z.a.put("/juarez/admin/".concat(a),{base:e,dias_sucios:n,extra_m3:t})}},F="UPDATE_SUCCESS",T="GET_INFO",B="GET_INFO_SUCCESS",A="UPDATE_PROCESS",R="GETTING_BD_INFO",G="GET_BD_INFO_SUCCESS",U={namespaced:!0,state:{notification:"Guardar",loading:!1,flag:!1,data:[],bd:[]},getters:{getNotif:function(e){return e.notification},loading:function(e){return e.loading},flag:function(e){return e.flag},data:function(e){return e.data},bd:function(e){return e.bd}},mutations:(l={},Object(k["a"])(l,T,(function(e){e.loading=!0,e.data=[]})),Object(k["a"])(l,B,(function(e,n){e.loading=!1,e.data=n})),Object(k["a"])(l,F,(function(e,n){e.flag=!0,e.notification=n})),Object(k["a"])(l,A,(function(e){e.notification="Guardar",e.flag=!1})),Object(k["a"])(l,R,(function(e){e.loading=!0,e.bd=[]})),Object(k["a"])(l,G,(function(e,n){e.loading=!1,e.bd=n})),l),actions:{editInfo:function(e,n){return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,a(A),t.prev=2,t.next=5,L.editInfo(n.base,n.dias_sucios,n.extra_m3,n.depto);case 5:return r=t.sent,a(F,"Cambios guardados"),t.abrupt("return",r.data);case 10:t.prev=10,t.t0=t["catch"](2),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})))()},getInfo:function(e,n){return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,r,c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,a(T),t.prev=2,r=n.department,c=r.normalize("NFD").replace(/[\u0300-\u036f-\s]/g,""),t.next=7,L.getDeptoInfo(c.toLowerCase(),n.userCode);case 7:return o=t.sent,a(B,o.data),t.abrupt("return",o.data);case 12:t.prev=12,t.t0=t["catch"](2),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[2,12]])})))()},getAllInfo:function(e,n){return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,a(T),t.prev=2,r=n.normalize("NFD").replace(/[\u0300-\u036f-\s]/g,""),t.next=6,L.getDashboardInfo(r.toLowerCase());case 6:return c=t.sent,a(B,c.data),t.abrupt("return",c.data);case 11:t.prev=11,t.t0=t["catch"](2),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})))()},getBDInfo:function(e,n){return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,a(R),t.prev=2,r=n.normalize("NFD").replace(/[\u0300-\u036f-\s]/g,""),t.next=6,L.getBDInfo(r.toLowerCase());case 6:return c=t.sent,a(G,c.data),t.abrupt("return",c.data);case 11:t.prev=11,t.t0=t["catch"](2),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})))()}}},q=t("c1df"),M=t.n(q),J="CHANGE_NAME",Y="SET_WEEK",H="GET_INFO",K="GET_INFO_SUCCESS",W="CHANGE_DEPTO",$={namespaced:!0,state:{place:"La Paz",department:"Almacén",week:"",loading:!1,data:[]},getters:{getName:function(e){return e.place},getDep:function(e){return e.department},getWeek:function(e){return e.week},loading:function(e){return e.loading},data:function(e){return e.data}},mutations:(h={},Object(k["a"])(h,J,(function(e,n){e.place=n})),Object(k["a"])(h,W,(function(e,n){e.department=n})),Object(k["a"])(h,Y,(function(e,n){e.week=n})),Object(k["a"])(h,H,(function(e){e.loading=!0,e.data=[]})),Object(k["a"])(h,K,(function(e,n){e.loading=!1,e.data=n})),h),actions:{week:function(e){var n=e.commit,t=M()().startOf("isoweek").locale("es").format("dddd D [a]"),a=M()().endOf("isoweek").locale("es").format(" dddd D [de] MMMM[,] YYYY"),r=t+a;n(Y,r)},getInfo:function(e,n){return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,a(J,n),a(H),t.prev=3,r=n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f-\s-\.]/g,""),t.next=7,w.getDeptos(r);case 7:return c=t.sent,a(K,c.data),t.abrupt("return",c.data);case 12:t.prev=12,t.t0=t["catch"](3),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[3,12]])})))()},changeDeptos:function(e,n){var t=e.commit;if("Juárez"==n){t(W,"Aligerante");var a=n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f-\s-\.]/g,"");this.dispatch("".concat(a,"/getAllInfo"),"Aligerante"),this.dispatch("".concat(a,"/getBDInfo"),"Aligerante")}else if("La Paz"==n){t(W,"Almacén");var r=n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f-\s-\.]/g,"");this.dispatch("".concat(r,"/getAllInfo"),"Almacén"),this.dispatch("".concat(r,"/getBDInfo"),"Almacén"),this.dispatch("lapaz/getBonos",{cityName:"La Paz",depName:"Almacén"}),this.dispatch("lapaz/getProduccion",{cityName:"La Paz",depName:"Almacén"})}}}};a["default"].use(g["a"]);var Q=new g["a"].Store({modules:{lapaz:P,juarez:U,admin:$}}),V=t("2ead"),X=t.n(V),Z=t("d842"),ee=t("30ef"),ne=t.n(ee),te=t("5f5b"),ae=t("b1e0"),re=(t("f9e3"),t("2dd8"),t("2106")),ce=t.n(re);a["default"].use(te["a"]),a["default"].use(ae["a"]),a["default"].use(X.a),a["default"].use(Z["a"].use(ne.a)),a["default"].use(ce.a,z.a),z.a.defaults.baseURL="http://localhost:3000/api",a["default"].config.productionTip=!1,new a["default"]({router:m,store:Q,render:function(e){return e(i)}}).$mount("#app")},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.3b00b691.js.map