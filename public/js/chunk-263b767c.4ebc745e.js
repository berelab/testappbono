(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-263b767c"],{1148:function(t,s,a){"use strict";var r=a("a691"),i=a("1d80");t.exports="".repeat||function(t){var s=String(i(this)),a="",e=r(t);if(e<0||e==1/0)throw RangeError("Wrong number of repetitions");for(;e>0;(e>>>=1)&&(s+=s))1&e&&(a+=s);return a}},1276:function(t,s,a){"use strict";var r=a("d784"),i=a("44e7"),e=a("825a"),o=a("1d80"),l=a("4840"),n=a("8aa5"),c=a("50c4"),u=a("14c3"),p=a("9263"),d=a("d039"),g=[].push,b=Math.min,f=4294967295,h=!d((function(){return!RegExp(f,"y")}));r("split",2,(function(t,s,a){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var r=String(o(this)),e=void 0===a?f:a>>>0;if(0===e)return[];if(void 0===t)return[r];if(!i(t))return s.call(r,t,e);var l,n,c,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),b=0,h=new RegExp(t.source,d+"g");while(l=p.call(h,r)){if(n=h.lastIndex,n>b&&(u.push(r.slice(b,l.index)),l.length>1&&l.index<r.length&&g.apply(u,l.slice(1)),c=l[0].length,b=n,u.length>=e))break;h.lastIndex===l.index&&h.lastIndex++}return b===r.length?!c&&h.test("")||u.push(""):u.push(r.slice(b)),u.length>e?u.slice(0,e):u}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:s.call(this,t,a)}:s,[function(s,a){var i=o(this),e=void 0==s?void 0:s[t];return void 0!==e?e.call(s,i,a):r.call(String(i),s,a)},function(t,i){var o=a(r,t,this,i,r!==s);if(o.done)return o.value;var p=e(t),d=String(this),g=l(p,RegExp),v=p.unicode,m=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(h?"y":"g"),C=new g(h?p:"^(?:"+p.source+")",m),_=void 0===i?f:i>>>0;if(0===_)return[];if(0===d.length)return null===u(C,d)?[d]:[];var y=0,w=0,x=[];while(w<d.length){C.lastIndex=h?w:0;var S,q=u(C,h?d:d.slice(w));if(null===q||(S=b(c(C.lastIndex+(h?0:w)),d.length))===y)w=n(d,w,v);else{if(x.push(d.slice(y,w)),x.length===_)return x;for(var k=1;k<=q.length-1;k++)if(x.push(q[k]),x.length===_)return x;w=y=S}}return x.push(d.slice(y)),x}]}),!h)},1474:function(t,s,a){"use strict";a.r(s);var r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t.isLoading?a("div",{staticClass:"center pt-5"},[t._m(0)]):t._e(),a("DeptoBase",{attrs:{goal:t.aosmith.meta_semana,progress:t.aosmith.progress,name:t.aosmith.nombre,depto:t.aosmith.depto,days:t.aosmith.dias_laborados,m3:t.aosmith.m3_persona,bonus_p:t.aosmith.bono_persona,bonus_tot:t.aosmith.bono_depto,asis:t.aosmith.asistencia,extra:t.aosmith.$_extra_m3,bonus_prod:t.aosmith.bono_productividad,bonus_goals:t.aosmith.bono_metas}})],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[t._v("Loading...")])])}],e=a("5a4b"),o={name:"Aosmith",components:{DeptoBase:e["a"]},created:function(){this.$store.dispatch("juarez/getInfo",{department:"aosmith",userCode:this.$route.params.user})},computed:{isLoading:function(){return this.$store.getters["juarez/loading"]},aosmith:function(){return this.$store.getters["juarez/data"]}}},l=o,n=a("2877"),c=Object(n["a"])(l,r,i,!1,null,null,null);s["default"]=c.exports},"25f0":function(t,s,a){"use strict";var r=a("6eeb"),i=a("825a"),e=a("d039"),o=a("ad6d"),l="toString",n=RegExp.prototype,c=n[l],u=e((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),p=c.name!=l;(u||p)&&r(RegExp.prototype,l,(function(){var t=i(this),s=String(t.source),a=t.flags,r=String(void 0===a&&t instanceof RegExp&&!("flags"in n)?o.call(t):a);return"/"+s+"/"+r}),{unsafe:!0})},"408a":function(t,s,a){var r=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},"44e7":function(t,s,a){var r=a("861d"),i=a("c6b6"),e=a("b622"),o=e("match");t.exports=function(t){var s;return r(t)&&(void 0!==(s=t[o])?!!s:"RegExp"==i(t))}},"5a4b":function(t,s,a){"use strict";var r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container-fluid pt-5",style:{backgroundImage:"url("+t.background+")"}},[a("b-container",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-9 col-sm-8 text-white pt-3 pb-4 pl-4 "},[a("p",{staticClass:"stylingH1"},[t._v(" ¡Hola, "+t._s(t._f("split")(t.name))+"! ")]),a("p",{staticClass:"stylingH2"},[t._v(" Este es tu resumen mensual ")]),a("p",{staticClass:"text-white stylingName"},[t._v(t._s(t.week))])]),a("div",{staticClass:"pt-4 col-3 col-sm-4"},[a("img",{staticClass:"user",attrs:{src:t.user}})])]),a("ProgressBar",{attrs:{goal:t.goal,progress:t.progress}}),a("b-row",[a("b-col",{staticClass:"bg-gris py-3"},[a("h4",{staticClass:"px-3 pt-2 stylingName"},[t._v(t._s(t.name||t.cap))]),a("h4",{staticClass:"px-3 pb-2 stylingDepto"},[t._v("Departamento: "),a("strong",[t._v(t._s(t.depto))])]),a("b-row",{staticClass:"px-4 py-2"},[a("b-col",{staticClass:"bg-white pila mr-2"},[a("b-row",[a("b-col",{staticClass:"pr-0 pt-1",attrs:{cols:"1"}},[a("div",{staticClass:"square",staticStyle:{"background-color":"#ff4a4a"}})]),a("b-col",{staticClass:"pl-3"},[a("p",{staticClass:"stylingSmall"},[t._v(" Meta"),a("br"),t._v("semanal ")]),t.goal?a("h4",{staticClass:"stylingH4G"},[t._v(t._s(t.goal))]):a("h4",{staticClass:"stylingH4G"},[t._v("0")])])],1)],1),a("b-col",{staticClass:"bg-white pila ml-1"},[a("b-row",[a("b-col",{staticClass:"pr-0 pt-1",attrs:{cols:"1"}},[a("div",{staticClass:"square",staticStyle:{"background-color":"#00c290"}})]),a("b-col",{staticClass:"pl-3"},[a("p",{staticClass:"stylingSmall"},[t._v("Producción"),a("br"),t._v("al día ")]),a("h4",{staticClass:"stylingH4G"},[t._v(t._s(t._f("rand")(t.m3)))])])],1)],1)],1),a("b-row",{staticClass:"px-4 py-2"},[a("b-col",{staticClass:"bg-white pila mr-2"},[a("b-row",[a("b-col",{staticClass:"pr-0 pt-1",attrs:{cols:"1"}},[a("div",{staticClass:"square",staticStyle:{"background-color":"#9d3eff"}})]),a("b-col",{staticClass:"pl-3"},[a("p",{staticClass:"stylingSmall"},[t._v("Días"),a("br"),t._v("Laborados ")]),a("h4",{staticClass:"stylingH4G"},[t._v(t._s(t.days))])])],1)],1),a("b-col",{staticClass:"bg-white pila ml-1"},[a("b-row",[a("b-col",{staticClass:"pr-0 pt-1",attrs:{cols:"1"}},[a("div",{staticClass:"square",staticStyle:{"background-color":"#6791fb"}})]),a("b-col",{staticClass:"pl-3"},[a("p",{staticClass:"stylingSmall"},[t._v("Mis"),a("br"),t._v("asistencias ")]),a("h4",{staticClass:"stylingH4G"},[t._v(t._s(t.asis))])])],1)],1)],1),a("b-row",{staticClass:"px-4 py-2"},[a("b-col",{staticClass:"bg-white pila mr-2"},[a("b-row",[a("b-col",{staticClass:"pr-0 pt-1",attrs:{cols:"1"}},[a("div",{staticClass:"square",staticStyle:{"background-color":"#fbda67"}})]),a("b-col",{staticClass:"pl-3"},[a("p",{staticClass:"stylingSmall"},[t._v("Precio por"),a("br"),t._v("excedente")]),a("h4",{staticClass:"stylingH4G"},[t._v("$ "+t._s(t._f("rand")(t.extra)))])])],1)],1),a("b-col",{staticClass:"bg-white pila ml-1"},[a("b-row",[a("b-col",{staticClass:"pr-0 pt-1",attrs:{cols:"1"}},[a("div",{staticClass:"square",staticStyle:{"background-color":"#78d9ee"}})]),a("b-col",{staticClass:"pl-3"},[a("p",{staticClass:"stylingSmall"},[t._v("Bono por productividad")]),a("h4",{staticClass:"stylingH4G"},[t._v("$ "+t._s(t._f("rand")(t.bonus_prod)))])])],1)],1)],1),a("b-row",{staticClass:"px-4 py-2"},[a("b-col",{staticClass:"bg-white pila mr-2"},[a("b-row",[a("b-col",{staticClass:"pr-0 pt-1",attrs:{cols:"1"}},[a("div",{staticClass:"square",staticStyle:{"background-color":"#ff4a4a"}})]),a("b-col",{staticClass:"pl-3"},[a("p",{staticClass:"stylingSmall"},[t._v("Premio o castigo por metas")]),a("h4",{staticClass:"stylingH4G"},[t._v("$ "+t._s(t._f("rand")(t.bonus_goals))+" ")])])],1)],1),a("b-col",{staticClass:"bg-white pila ml-1"},[a("b-row",[a("b-col",{staticClass:"pr-0 pt-1",attrs:{cols:"1"}},[a("div",{staticClass:"square",staticStyle:{"background-color":"#00c290"}})]),a("b-col",{staticClass:"pl-3"},[a("p",{staticClass:"stylingSmall"},[t._v("Bono semanal del departamento ")]),a("h4",{staticClass:"stylingH4G"},[t._v("$ "+t._s(t._f("rand")(t.bonus_tot)))])])],1)],1)],1),a("b-row",{staticClass:"px-4 py-2"},[a("b-col",{staticClass:"pilaO"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4 col-sm-4 pl-4 pt-1"},[a("p",{staticClass:"stylingSmallO"},[t._v("Bono total* ")])]),a("div",{staticClass:"col-8 col-sm-8 pr-5"},[a("h4",{staticClass:"stylingH4O float-right"},[t._v("$ "+t._s(t._f("rand")(t.bonus_p)))])])])])],1),a("b-row",{staticClass:"px-4 py-2 float-right"},[a("p",{staticClass:"stylingSmall"},[t._v("*Bono sujeto a cambio de condicionantes")])])],1)],1)],1)],1)},i=[],e=(a("a15b"),a("fb6a"),a("b680"),a("d3b7"),a("ac1f"),a("25f0"),a("1276"),a("8a6d")),o=a.n(e),l=a("c121"),n=a.n(l),c=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row pb-3"},[a("div",{staticClass:"col-11 col-sm-11"},[a("div",{staticClass:"progress"},[a("div",{staticClass:"progress-bar",class:t.color,style:{width:t.percentage+"%"},attrs:{role:"progressbar","aria-valuemin":"0","aria-valuemax":t.max}})])]),a("div",{staticClass:"col-1 col-sm-1 text-white"},[t.progress?a("p",{staticClass:"stylingProgress float-right"},[t._v(t._s(t._f("rand")(t.progress)))]):a("p",{staticClass:"stylingProgress float-right"},[t._v("0")])]),a("br")])},u=[],p={name:"ProgressBar",props:{goal:{required:!0},progress:{required:!0}},data:function(){return{max:0,p:0}},computed:{percentage:function(){return this.max=6*this.goal,this.p=100*this.progress/this.max,this.p},color:function(){return{green:this.progress>this.goal,blue:this.progress==this.goal,yellow:this.progress<this.goal}}},filters:{rand:function(t){return t?"number"===typeof t?t.toFixed(2):t:""}}},d=p,g=(a("5ad5"),a("2877")),b=Object(g["a"])(d,c,u,!1,null,"827d989a",null),f=b.exports,h={name:"DeptoBase",props:{goal:{required:!0},progress:{required:!0},name:{required:!0},depto:{required:!0},days:{required:!0},m3:{required:!0},bonus_p:{required:!0},bonus_tot:{required:!0},asis:{required:!0},extra:{required:!0},bonus_prod:{required:!1},bonus_goals:{required:!1}},components:{ProgressBar:f},data:function(){return{background:o.a,user:n.a}},created:function(){this.$store.dispatch("admin/week")},computed:{week:function(){return this.$store.getters["admin/getWeek"]}},filters:{split:function(t){if(!t)return"";t=t.toString();for(var s=t.toLowerCase().split(" "),a=s.length,r=0;r<a;r++)s[r]=s[r].charAt(0).toUpperCase()+s[r].substring(1);var i=s.join(" "),e=i.split(" ").slice(0,-1).join(" ");return e},rand:function(t){return!t||t<0?"0":"number"===typeof t?t.toFixed(2):t},cap:function(t){if(!t)return"";t=t.toString();for(var s=t.toLowerCase().split(" "),a=s.length,r=0;r<a;r++)s[r]=s[r].charAt(0).toUpperCase()+s[r].substring(1);var i=s.join(" ");return i}}},v=h,m=Object(g["a"])(v,r,i,!1,null,null,null);s["a"]=m.exports},"5ad5":function(t,s,a){"use strict";a("e076")},"8a6d":function(t,s,a){t.exports=a.p+"img/fondoazul.bba6d2eb.png"},a15b:function(t,s,a){"use strict";var r=a("23e7"),i=a("44ad"),e=a("fc6a"),o=a("a640"),l=[].join,n=i!=Object,c=o("join",",");r({target:"Array",proto:!0,forced:n||!c},{join:function(t){return l.call(e(this),void 0===t?",":t)}})},a640:function(t,s,a){"use strict";var r=a("d039");t.exports=function(t,s){var a=[][t];return!!a&&r((function(){a.call(null,s||function(){throw 1},1)}))}},ae40:function(t,s,a){var r=a("83ab"),i=a("d039"),e=a("5135"),o=Object.defineProperty,l={},n=function(t){throw t};t.exports=function(t,s){if(e(l,t))return l[t];s||(s={});var a=[][t],c=!!e(s,"ACCESSORS")&&s.ACCESSORS,u=e(s,0)?s[0]:n,p=e(s,1)?s[1]:void 0;return l[t]=!!a&&!i((function(){if(c&&!r)return!0;var t={length:-1};c?o(t,1,{enumerable:!0,get:n}):t[1]=1,a.call(t,u,p)}))}},b680:function(t,s,a){"use strict";var r=a("23e7"),i=a("a691"),e=a("408a"),o=a("1148"),l=a("d039"),n=1..toFixed,c=Math.floor,u=function(t,s,a){return 0===s?a:s%2===1?u(t,s-1,a*t):u(t*t,s/2,a)},p=function(t){var s=0,a=t;while(a>=4096)s+=12,a/=4096;while(a>=2)s+=1,a/=2;return s},d=n&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!l((function(){n.call({})}));r({target:"Number",proto:!0,forced:d},{toFixed:function(t){var s,a,r,l,n=e(this),d=i(t),g=[0,0,0,0,0,0],b="",f="0",h=function(t,s){var a=-1,r=s;while(++a<6)r+=t*g[a],g[a]=r%1e7,r=c(r/1e7)},v=function(t){var s=6,a=0;while(--s>=0)a+=g[s],g[s]=c(a/t),a=a%t*1e7},m=function(){var t=6,s="";while(--t>=0)if(""!==s||0===t||0!==g[t]){var a=String(g[t]);s=""===s?a:s+o.call("0",7-a.length)+a}return s};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(n!=n)return"NaN";if(n<=-1e21||n>=1e21)return String(n);if(n<0&&(b="-",n=-n),n>1e-21)if(s=p(n*u(2,69,1))-69,a=s<0?n*u(2,-s,1):n/u(2,s,1),a*=4503599627370496,s=52-s,s>0){h(0,a),r=d;while(r>=7)h(1e7,0),r-=7;h(u(10,r,1),0),r=s-1;while(r>=23)v(1<<23),r-=23;v(1<<r),h(1,1),v(2),f=m()}else h(0,a),h(1<<-s,0),f=m()+o.call("0",d);return d>0?(l=f.length,f=b+(l<=d?"0."+o.call("0",d-l)+f:f.slice(0,l-d)+"."+f.slice(l-d))):f=b+f,f}})},c121:function(t,s,a){t.exports=a.p+"img/user.00f5534d.png"},e076:function(t,s,a){},fb6a:function(t,s,a){"use strict";var r=a("23e7"),i=a("861d"),e=a("e8b5"),o=a("23cb"),l=a("50c4"),n=a("fc6a"),c=a("8418"),u=a("b622"),p=a("1dde"),d=a("ae40"),g=p("slice"),b=d("slice",{ACCESSORS:!0,0:0,1:2}),f=u("species"),h=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!g||!b},{slice:function(t,s){var a,r,u,p=n(this),d=l(p.length),g=o(t,d),b=o(void 0===s?d:s,d);if(e(p)&&(a=p.constructor,"function"!=typeof a||a!==Array&&!e(a.prototype)?i(a)&&(a=a[f],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return h.call(p,g,b);for(r=new(void 0===a?Array:a)(v(b-g,0)),u=0;g<b;g++,u++)g in p&&c(r,u,p[g]);return r.length=u,r}})}}]);
//# sourceMappingURL=chunk-263b767c.4ebc745e.js.map