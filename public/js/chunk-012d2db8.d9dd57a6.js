(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-012d2db8"],{1148:function(t,s,a){"use strict";var e=a("a691"),r=a("1d80");t.exports="".repeat||function(t){var s=String(r(this)),a="",i=e(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(s+=s))1&i&&(a+=s);return a}},1276:function(t,s,a){"use strict";var e=a("d784"),r=a("44e7"),i=a("825a"),l=a("1d80"),n=a("4840"),o=a("8aa5"),c=a("50c4"),u=a("14c3"),p=a("9263"),d=a("d039"),g=[].push,b=Math.min,f=4294967295,v=!d((function(){return!RegExp(f,"y")}));e("split",2,(function(t,s,a){var e;return e="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var e=String(l(this)),i=void 0===a?f:a>>>0;if(0===i)return[];if(void 0===t)return[e];if(!r(t))return s.call(e,t,i);var n,o,c,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),b=0,v=new RegExp(t.source,d+"g");while(n=p.call(v,e)){if(o=v.lastIndex,o>b&&(u.push(e.slice(b,n.index)),n.length>1&&n.index<e.length&&g.apply(u,n.slice(1)),c=n[0].length,b=o,u.length>=i))break;v.lastIndex===n.index&&v.lastIndex++}return b===e.length?!c&&v.test("")||u.push(""):u.push(e.slice(b)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:s.call(this,t,a)}:s,[function(s,a){var r=l(this),i=void 0==s?void 0:s[t];return void 0!==i?i.call(s,r,a):e.call(String(r),s,a)},function(t,r){var l=a(e,t,this,r,e!==s);if(l.done)return l.value;var p=i(t),d=String(this),g=n(p,RegExp),h=p.unicode,m=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(v?"y":"g"),C=new g(v?p:"^(?:"+p.source+")",m),_=void 0===r?f:r>>>0;if(0===_)return[];if(0===d.length)return null===u(C,d)?[d]:[];var y=0,w=0,x=[];while(w<d.length){C.lastIndex=v?w:0;var S,q=u(C,v?d:d.slice(w));if(null===q||(S=b(c(C.lastIndex+(v?0:w)),d.length))===y)w=o(d,w,h);else{if(x.push(d.slice(y,w)),x.length===_)return x;for(var k=1;k<=q.length-1;k++)if(x.push(q[k]),x.length===_)return x;w=y=S}}return x.push(d.slice(y)),x}]}),!v)},"25f0":function(t,s,a){"use strict";var e=a("6eeb"),r=a("825a"),i=a("d039"),l=a("ad6d"),n="toString",o=RegExp.prototype,c=o[n],u=i((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),p=c.name!=n;(u||p)&&e(RegExp.prototype,n,(function(){var t=r(this),s=String(t.source),a=t.flags,e=String(void 0===a&&t instanceof RegExp&&!("flags"in o)?l.call(t):a);return"/"+s+"/"+e}),{unsafe:!0})},"408a":function(t,s,a){var e=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=e(t))throw TypeError("Incorrect invocation");return+t}},"44e7":function(t,s,a){var e=a("861d"),r=a("c6b6"),i=a("b622"),l=i("match");t.exports=function(t){var s;return e(t)&&(void 0!==(s=t[l])?!!s:"RegExp"==r(t))}},"5a4b":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container-fluid pt-5",style:{backgroundImage:"url("+t.background+")"}},[a("b-container",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-9 col-sm-9 col-md-8 text-white pt-3 pb-4 pl-4 ",attrs:{id:"headerColab"}},[a("p",{staticClass:"stylingH1"},[t._v(" ¡Hola, "+t._s(t._f("split")(t.name))+"! ")]),a("p",{staticClass:"stylingH2"},[t._v(" Este es tu resumen mensual ")]),a("p",{staticClass:"text-white stylingName"},[t._v(t._s(t.week))])]),a("div",{staticClass:"pt-4 col-3 col-sm-3 col-md-4"},[a("img",{staticClass:"user",attrs:{src:t.user}})])]),a("ProgressBar",{attrs:{goal:t.goal,progress:t.progress}}),a("b-row",[a("b-col",{staticClass:"bg-gris py-3"},[a("h4",{staticClass:"px-3 pt-2 stylingName"},[t._v(t._s(t._f("cap")(t.name)))]),a("h4",{staticClass:"px-3 pb-2 stylingDepto"},[t._v("Departamento: "),a("strong",[t._v(t._s(t.depto))])]),a("b-row",{staticClass:"px-4 py-2"},[a("b-col",{staticClass:"bg-white pila mr-2"},[a("b-row",[a("b-col",{staticClass:"pr-0 pt-1",attrs:{cols:"1"}},[a("div",{staticClass:"square",staticStyle:{"background-color":"#ff4a4a"}})]),a("b-col",{staticClass:"pl-3"},[a("p",{staticClass:"stylingSmall"},[t._v(" Meta"),a("br"),t._v("semanal ")]),t.goal?a("h4",{staticClass:"stylingH4G"},[t._v(t._s(t.goal))]):a("h4",{staticClass:"stylingH4G"},[t._v("0")])])],1)],1),a("b-col",{staticClass:"bg-white pila ml-1"},[a("b-row",[a("b-col",{staticClass:"pr-0 pt-1",attrs:{cols:"1"}},[a("div",{staticClass:"square",staticStyle:{"background-color":"#00c290"}})]),a("b-col",{staticClass:"pl-3"},[a("p",{staticClass:"stylingSmall"},[t._v("Producción"),a("br"),t._v("al día ")]),a("h4",{staticClass:"stylingH4G"},[t._v(t._s(t._f("rand")(t.m3)))])])],1)],1)],1),a("b-row",{staticClass:"px-4 py-2"},[a("b-col",{staticClass:"bg-white pila mr-2"},[a("b-row",[a("b-col",{staticClass:"pr-0 pt-1",attrs:{cols:"1"}},[a("div",{staticClass:"square",staticStyle:{"background-color":"#9d3eff"}})]),a("b-col",{staticClass:"pl-3"},[a("p",{staticClass:"stylingSmall"},[t._v("Días"),a("br"),t._v("Laborados ")]),a("h4",{staticClass:"stylingH4G"},[t._v(t._s(t.days))])])],1)],1),a("b-col",{staticClass:"bg-white pila ml-1"},[a("b-row",[a("b-col",{staticClass:"pr-0 pt-1",attrs:{cols:"1"}},[a("div",{staticClass:"square",staticStyle:{"background-color":"#6791fb"}})]),a("b-col",{staticClass:"pl-3"},[a("p",{staticClass:"stylingSmall"},[t._v("Mis"),a("br"),t._v("asistencias ")]),a("h4",{staticClass:"stylingH4G"},[t._v(t._s(t.asis))])])],1)],1)],1),a("b-row",{staticClass:"px-4 py-2"},[a("b-col",{staticClass:"bg-white pila mr-2"},[a("b-row",[a("b-col",{staticClass:"pr-0 pt-1",attrs:{cols:"1"}},[a("div",{staticClass:"square",staticStyle:{"background-color":"#fbda67"}})]),a("b-col",{staticClass:"pl-3"},[a("p",{staticClass:"stylingSmall"},[t._v("Precio por"),a("br"),t._v("excedente")]),a("h4",{staticClass:"stylingH4G"},[t._v("$ "+t._s(t._f("rand")(t.extra)))])])],1)],1),a("b-col",{staticClass:"bg-white pila ml-1"},[a("b-row",[a("b-col",{staticClass:"pr-0 pt-1",attrs:{cols:"1"}},[a("div",{staticClass:"square",staticStyle:{"background-color":"#78d9ee"}})]),a("b-col",{staticClass:"pl-3"},[a("p",{staticClass:"stylingSmall"},[t._v("Bono por productividad")]),a("h4",{staticClass:"stylingH4G"},[t._v("$ "+t._s(t._f("rand")(t.bonus_prod)))])])],1)],1)],1),a("b-row",{staticClass:"px-4 py-2"},[a("b-col",{staticClass:"bg-white pila mr-2"},[a("b-row",[a("b-col",{staticClass:"pr-0 pt-1",attrs:{cols:"1"}},[a("div",{staticClass:"square",staticStyle:{"background-color":"#ff4a4a"}})]),a("b-col",{staticClass:"pl-3"},[a("p",{staticClass:"stylingSmall"},[t._v("Premio o castigo por metas")]),a("h4",{staticClass:"stylingH4G"},[t._v("$ "+t._s(t._f("rand")(t.bonus_goals))+" ")])])],1)],1),a("b-col",{staticClass:"bg-white pila ml-1"},[a("b-row",[a("b-col",{staticClass:"pr-0 pt-1",attrs:{cols:"1"}},[a("div",{staticClass:"square",staticStyle:{"background-color":"#00c290"}})]),a("b-col",{staticClass:"pl-3"},[a("p",{staticClass:"stylingSmall"},[t._v("Bono semanal del departamento ")]),a("h4",{staticClass:"stylingH4G"},[t._v("$ "+t._s(t._f("rand")(t.bonus_tot)))])])],1)],1)],1),a("b-row",{staticClass:"px-4 py-2"},[a("b-col",{staticClass:"pilaO"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4 col-sm-4 pl-4 pt-1"},[a("p",{staticClass:"stylingSmallO"},[t._v("Bono total* ")])]),a("div",{staticClass:"col-8 col-sm-8 pr-5"},[a("h4",{staticClass:"stylingH4O float-right"},[t._v("$ "+t._s(t._f("rand")(t.bonus_p)))])])])])],1),a("b-row",{staticClass:"px-4 py-2 float-right"},[a("p",{staticClass:"stylingSmall"},[t._v("*Bono sujeto a cambio de condicionantes")])])],1)],1)],1)],1)},r=[],i=(a("a15b"),a("fb6a"),a("b680"),a("d3b7"),a("ac1f"),a("25f0"),a("1276"),a("8a6d")),l=a.n(i),n=a("c121"),o=a.n(n),c=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row pb-3"},[a("div",{staticClass:"col-11 col-sm-11"},[a("div",{staticClass:"progress"},[a("div",{staticClass:"progress-bar",class:t.color,style:{width:t.percentage+"%"},attrs:{role:"progressbar","aria-valuemin":"0","aria-valuemax":t.max}})])]),a("div",{staticClass:"col-1 col-sm-1 text-white"},[t.progress?a("p",{staticClass:"stylingProgress float-right"},[t._v(t._s(t._f("rand")(t.progress)))]):a("p",{staticClass:"stylingProgress float-right"},[t._v("0")])]),a("br")])},u=[],p={name:"ProgressBar",props:{goal:{required:!0},progress:{required:!0}},data:function(){return{max:0,p:0}},computed:{percentage:function(){return this.max=6*this.goal,this.p=100*this.progress/this.max,this.p},color:function(){return{green:this.progress>this.goal,blue:this.progress==this.goal,yellow:this.progress<this.goal}}},filters:{rand:function(t){return t?"number"===typeof t?t.toFixed(2):t:""}}},d=p,g=(a("5ad5"),a("2877")),b=Object(g["a"])(d,c,u,!1,null,"827d989a",null),f=b.exports,v={name:"DeptoBase",props:{goal:{required:!0},progress:{required:!0},name:{required:!0},depto:{required:!0},days:{required:!0},m3:{required:!0},bonus_p:{required:!0},bonus_tot:{required:!0},asis:{required:!0},extra:{required:!0},bonus_prod:{required:!1},bonus_goals:{required:!1}},components:{ProgressBar:f},data:function(){return{background:l.a,user:o.a}},created:function(){this.$store.dispatch("admin/week")},computed:{week:function(){return this.$store.getters["admin/getWeek"]}},filters:{split:function(t){if(!t)return"";t=t.toString();var s,a=t.toLowerCase().split(" "),e=a.length;for(s=0;s<e;s++)a[s]=a[s].charAt(0).toUpperCase()+a[s].substring(1);var r=a.join(" "),i=r.split(" ").slice(0,-1).join(" ");return i},rand:function(t){return!t||t<0?"0":"number"===typeof t?t.toFixed(2):t},cap:function(t){if(!t)return"";t=t.toString();var s,a=t.toLowerCase().split(" "),e=a.length;for(s=0;s<e;s++)a[s]=a[s].charAt(0).toUpperCase()+a[s].substring(1);var r=a.join(" ");return r}}},h=v,m=Object(g["a"])(h,e,r,!1,null,null,null);s["a"]=m.exports},"5ad5":function(t,s,a){"use strict";a("e076")},"8a6d":function(t,s,a){t.exports=a.p+"img/fondoazul.bba6d2eb.png"},a15b:function(t,s,a){"use strict";var e=a("23e7"),r=a("44ad"),i=a("fc6a"),l=a("a640"),n=[].join,o=r!=Object,c=l("join",",");e({target:"Array",proto:!0,forced:o||!c},{join:function(t){return n.call(i(this),void 0===t?",":t)}})},a640:function(t,s,a){"use strict";var e=a("d039");t.exports=function(t,s){var a=[][t];return!!a&&e((function(){a.call(null,s||function(){throw 1},1)}))}},ae40:function(t,s,a){var e=a("83ab"),r=a("d039"),i=a("5135"),l=Object.defineProperty,n={},o=function(t){throw t};t.exports=function(t,s){if(i(n,t))return n[t];s||(s={});var a=[][t],c=!!i(s,"ACCESSORS")&&s.ACCESSORS,u=i(s,0)?s[0]:o,p=i(s,1)?s[1]:void 0;return n[t]=!!a&&!r((function(){if(c&&!e)return!0;var t={length:-1};c?l(t,1,{enumerable:!0,get:o}):t[1]=1,a.call(t,u,p)}))}},b680:function(t,s,a){"use strict";var e=a("23e7"),r=a("a691"),i=a("408a"),l=a("1148"),n=a("d039"),o=1..toFixed,c=Math.floor,u=function(t,s,a){return 0===s?a:s%2===1?u(t,s-1,a*t):u(t*t,s/2,a)},p=function(t){var s=0,a=t;while(a>=4096)s+=12,a/=4096;while(a>=2)s+=1,a/=2;return s},d=o&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n((function(){o.call({})}));e({target:"Number",proto:!0,forced:d},{toFixed:function(t){var s,a,e,n,o=i(this),d=r(t),g=[0,0,0,0,0,0],b="",f="0",v=function(t,s){var a=-1,e=s;while(++a<6)e+=t*g[a],g[a]=e%1e7,e=c(e/1e7)},h=function(t){var s=6,a=0;while(--s>=0)a+=g[s],g[s]=c(a/t),a=a%t*1e7},m=function(){var t=6,s="";while(--t>=0)if(""!==s||0===t||0!==g[t]){var a=String(g[t]);s=""===s?a:s+l.call("0",7-a.length)+a}return s};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return String(o);if(o<0&&(b="-",o=-o),o>1e-21)if(s=p(o*u(2,69,1))-69,a=s<0?o*u(2,-s,1):o/u(2,s,1),a*=4503599627370496,s=52-s,s>0){v(0,a),e=d;while(e>=7)v(1e7,0),e-=7;v(u(10,e,1),0),e=s-1;while(e>=23)h(1<<23),e-=23;h(1<<e),v(1,1),h(2),f=m()}else v(0,a),v(1<<-s,0),f=m()+l.call("0",d);return d>0?(n=f.length,f=b+(n<=d?"0."+l.call("0",d-n)+f:f.slice(0,n-d)+"."+f.slice(n-d))):f=b+f,f}})},c121:function(t,s,a){t.exports=a.p+"img/user.00f5534d.png"},e076:function(t,s,a){},f2f8:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t.isLoading?a("div",{staticClass:"center pt-5"},[t._m(0)]):t._e(),a("DeptoBase",{attrs:{goal:t.almacen.meta_semana,progress:t.almacen.progress,name:t.almacen.nombre,depto:t.almacen.depto,days:t.almacen.dias_laborados,m3:t.almacen.m3_persona,bonus_p:t.almacen.bono_persona,bonus_tot:t.almacen.bono_depto,asis:t.almacen.asistencia,extra:t.almacen.$_extra_m3,bonus_prod:t.almacen.bono_productividad,bonus_goals:t.almacen.bono_metas}})],1)},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[t._v("Loading...")])])}],i=a("5a4b"),l={name:"Almacen",components:{DeptoBase:i["a"]},created:function(){this.$store.dispatch("lapaz/getInfo",{department:"almacen",userCode:this.$route.params.user})},computed:{isLoading:function(){return this.$store.getters["lapaz/loading"]},almacen:function(){return this.$store.getters["lapaz/data"]}}},n=l,o=a("2877"),c=Object(o["a"])(n,e,r,!1,null,null,null);s["default"]=c.exports},fb6a:function(t,s,a){"use strict";var e=a("23e7"),r=a("861d"),i=a("e8b5"),l=a("23cb"),n=a("50c4"),o=a("fc6a"),c=a("8418"),u=a("b622"),p=a("1dde"),d=a("ae40"),g=p("slice"),b=d("slice",{ACCESSORS:!0,0:0,1:2}),f=u("species"),v=[].slice,h=Math.max;e({target:"Array",proto:!0,forced:!g||!b},{slice:function(t,s){var a,e,u,p=o(this),d=n(p.length),g=l(t,d),b=l(void 0===s?d:s,d);if(i(p)&&(a=p.constructor,"function"!=typeof a||a!==Array&&!i(a.prototype)?r(a)&&(a=a[f],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return v.call(p,g,b);for(e=new(void 0===a?Array:a)(h(b-g,0)),u=0;g<b;g++,u++)g in p&&c(e,u,p[g]);return e.length=u,e}})}}]);
//# sourceMappingURL=chunk-012d2db8.d9dd57a6.js.map