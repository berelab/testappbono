(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-276c01f4"],{1148:function(t,s,a){"use strict";var r=a("a691"),e=a("1d80");t.exports="".repeat||function(t){var s=String(e(this)),a="",i=r(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(s+=s))1&i&&(a+=s);return a}},1276:function(t,s,a){"use strict";var r=a("d784"),e=a("44e7"),i=a("825a"),o=a("1d80"),l=a("4840"),n=a("8aa5"),c=a("50c4"),u=a("14c3"),p=a("9263"),d=a("d039"),g=[].push,b=Math.min,f=4294967295,v=!d((function(){return!RegExp(f,"y")}));r("split",2,(function(t,s,a){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var r=String(o(this)),i=void 0===a?f:a>>>0;if(0===i)return[];if(void 0===t)return[r];if(!e(t))return s.call(r,t,i);var l,n,c,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),b=0,v=new RegExp(t.source,d+"g");while(l=p.call(v,r)){if(n=v.lastIndex,n>b&&(u.push(r.slice(b,l.index)),l.length>1&&l.index<r.length&&g.apply(u,l.slice(1)),c=l[0].length,b=n,u.length>=i))break;v.lastIndex===l.index&&v.lastIndex++}return b===r.length?!c&&v.test("")||u.push(""):u.push(r.slice(b)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:s.call(this,t,a)}:s,[function(s,a){var e=o(this),i=void 0==s?void 0:s[t];return void 0!==i?i.call(s,e,a):r.call(String(e),s,a)},function(t,e){var o=a(r,t,this,e,r!==s);if(o.done)return o.value;var p=i(t),d=String(this),g=l(p,RegExp),h=p.unicode,m=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(v?"y":"g"),C=new g(v?p:"^(?:"+p.source+")",m),_=void 0===e?f:e>>>0;if(0===_)return[];if(0===d.length)return null===u(C,d)?[d]:[];var y=0,w=0,x=[];while(w<d.length){C.lastIndex=v?w:0;var q,S=u(C,v?d:d.slice(w));if(null===S||(q=b(c(C.lastIndex+(v?0:w)),d.length))===y)w=n(d,w,h);else{if(x.push(d.slice(y,w)),x.length===_)return x;for(var k=1;k<=S.length-1;k++)if(x.push(S[k]),x.length===_)return x;w=y=q}}return x.push(d.slice(y)),x}]}),!v)},"25f0":function(t,s,a){"use strict";var r=a("6eeb"),e=a("825a"),i=a("d039"),o=a("ad6d"),l="toString",n=RegExp.prototype,c=n[l],u=i((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),p=c.name!=l;(u||p)&&r(RegExp.prototype,l,(function(){var t=e(this),s=String(t.source),a=t.flags,r=String(void 0===a&&t instanceof RegExp&&!("flags"in n)?o.call(t):a);return"/"+s+"/"+r}),{unsafe:!0})},"408a":function(t,s,a){var r=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},"44e7":function(t,s,a){var r=a("861d"),e=a("c6b6"),i=a("b622"),o=i("match");t.exports=function(t){var s;return r(t)&&(void 0!==(s=t[o])?!!s:"RegExp"==e(t))}},"5a4b":function(t,s,a){"use strict";var r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container-fluid pt-5",style:{backgroundImage:"url("+t.background+")"}},[a("b-container",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-9 col-sm-9 col-md-8 text-white pt-3 pb-4 pl-4 ",attrs:{id:"headerColab"}},[a("p",{staticClass:"stylingH1"},[t._v(" ¡Hola, "+t._s(t._f("split")(t.name))+"! ")]),a("p",{staticClass:"stylingH2"},[t._v(" Este es tu resumen mensual ")]),a("p",{staticClass:"text-white stylingName"},[t._v(t._s(t.week))])]),a("div",{staticClass:"pt-4 col-3 col-sm-3 col-md-4"},[a("img",{staticClass:"user",attrs:{src:t.user}})])]),a("ProgressBar",{attrs:{goal:t.goal,progress:t.progress}}),a("b-row",[a("b-col",{staticClass:"bg-gris py-3"},[a("h4",{staticClass:"px-3 pt-2 stylingName"},[t._v(t._s(t._f("cap")(t.name)))]),a("h4",{staticClass:"px-3 pb-2 stylingDepto"},[t._v("Departamento: "),a("strong",[t._v(t._s(t.depto))])]),a("b-row",{staticClass:"px-4 py-2"},[a("b-col",{staticClass:"bg-white pila mr-2"},[a("b-row",[a("b-col",{staticClass:"pr-0 pt-1",attrs:{cols:"1"}},[a("div",{staticClass:"square",staticStyle:{"background-color":"#ff4a4a"}})]),a("b-col",{staticClass:"pl-3"},[a("p",{staticClass:"stylingSmall"},[t._v(" Meta"),a("br"),t._v("semanal ")]),t.goal?a("h4",{staticClass:"stylingH4G"},[t._v(t._s(t.goal))]):a("h4",{staticClass:"stylingH4G"},[t._v("0")])])],1)],1),a("b-col",{staticClass:"bg-white pila ml-1"},[a("b-row",[a("b-col",{staticClass:"pr-0 pt-1",attrs:{cols:"1"}},[a("div",{staticClass:"square",staticStyle:{"background-color":"#00c290"}})]),a("b-col",{staticClass:"pl-3"},[a("p",{staticClass:"stylingSmall"},[t._v("Producción"),a("br"),t._v("al día ")]),a("h4",{staticClass:"stylingH4G"},[t._v(t._s(t._f("rand")(t.m3)))])])],1)],1)],1),a("b-row",{staticClass:"px-4 py-2"},[a("b-col",{staticClass:"bg-white pila mr-2"},[a("b-row",[a("b-col",{staticClass:"pr-0 pt-1",attrs:{cols:"1"}},[a("div",{staticClass:"square",staticStyle:{"background-color":"#9d3eff"}})]),a("b-col",{staticClass:"pl-3"},[a("p",{staticClass:"stylingSmall"},[t._v("Días"),a("br"),t._v("Laborados ")]),a("h4",{staticClass:"stylingH4G"},[t._v(t._s(t.days))])])],1)],1),a("b-col",{staticClass:"bg-white pila ml-1"},[a("b-row",[a("b-col",{staticClass:"pr-0 pt-1",attrs:{cols:"1"}},[a("div",{staticClass:"square",staticStyle:{"background-color":"#6791fb"}})]),a("b-col",{staticClass:"pl-3"},[a("p",{staticClass:"stylingSmall"},[t._v("Mis"),a("br"),t._v("asistencias ")]),a("h4",{staticClass:"stylingH4G"},[t._v(t._s(t.asis))])])],1)],1)],1),a("b-row",{staticClass:"px-4 py-2"},[a("b-col",{staticClass:"bg-white pila mr-2"},[a("b-row",[a("b-col",{staticClass:"pr-0 pt-1",attrs:{cols:"1"}},[a("div",{staticClass:"square",staticStyle:{"background-color":"#fbda67"}})]),a("b-col",{staticClass:"pl-3"},[a("p",{staticClass:"stylingSmall"},[t._v("Precio por"),a("br"),t._v("excedente")]),a("h4",{staticClass:"stylingH4G"},[t._v("$ "+t._s(t._f("rand")(t.extra)))])])],1)],1),a("b-col",{staticClass:"bg-white pila ml-1"},[a("b-row",[a("b-col",{staticClass:"pr-0 pt-1",attrs:{cols:"1"}},[a("div",{staticClass:"square",staticStyle:{"background-color":"#78d9ee"}})]),a("b-col",{staticClass:"pl-3"},[a("p",{staticClass:"stylingSmall"},[t._v("Bono por productividad")]),a("h4",{staticClass:"stylingH4G"},[t._v("$ "+t._s(t._f("rand")(t.bonus_prod)))])])],1)],1)],1),a("b-row",{staticClass:"px-4 py-2"},[a("b-col",{staticClass:"bg-white pila mr-2"},[a("b-row",[a("b-col",{staticClass:"pr-0 pt-1",attrs:{cols:"1"}},[a("div",{staticClass:"square",staticStyle:{"background-color":"#ff4a4a"}})]),a("b-col",{staticClass:"pl-3"},[a("p",{staticClass:"stylingSmall"},[t._v("Premio o castigo por metas")]),a("h4",{staticClass:"stylingH4G"},[t._v("$ "+t._s(t._f("rand")(t.bonus_goals))+" ")])])],1)],1),a("b-col",{staticClass:"bg-white pila ml-1"},[a("b-row",[a("b-col",{staticClass:"pr-0 pt-1",attrs:{cols:"1"}},[a("div",{staticClass:"square",staticStyle:{"background-color":"#00c290"}})]),a("b-col",{staticClass:"pl-3"},[a("p",{staticClass:"stylingSmall"},[t._v("Bono semanal del departamento ")]),a("h4",{staticClass:"stylingH4G"},[t._v("$ "+t._s(t._f("rand")(t.bonus_tot)))])])],1)],1)],1),a("b-row",{staticClass:"px-4 py-2"},[a("b-col",{staticClass:"pilaO"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4 col-sm-4 pl-4 pt-1"},[a("p",{staticClass:"stylingSmallO"},[t._v("Bono total* ")])]),a("div",{staticClass:"col-8 col-sm-8 pr-5"},[a("h4",{staticClass:"stylingH4O float-right"},[t._v("$ "+t._s(t._f("rand")(t.bonus_p)))])])])])],1),a("b-row",{staticClass:"px-4 py-2 float-right"},[a("p",{staticClass:"stylingSmall"},[t._v("*Bono sujeto a cambio de condicionantes")])])],1)],1)],1)],1)},e=[],i=(a("a15b"),a("fb6a"),a("b680"),a("d3b7"),a("ac1f"),a("25f0"),a("1276"),a("8a6d")),o=a.n(i),l=a("c121"),n=a.n(l),c=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row pb-3"},[a("div",{staticClass:"col-11 col-sm-11"},[a("div",{staticClass:"progress"},[a("div",{staticClass:"progress-bar",class:t.color,style:{width:t.percentage+"%"},attrs:{role:"progressbar","aria-valuemin":"0","aria-valuemax":t.max}})])]),a("div",{staticClass:"col-1 col-sm-1 text-white"},[t.progress?a("p",{staticClass:"stylingProgress float-right"},[t._v(t._s(t._f("rand")(t.progress)))]):a("p",{staticClass:"stylingProgress float-right"},[t._v("0")])]),a("br")])},u=[],p={name:"ProgressBar",props:{goal:{required:!0},progress:{required:!0}},data:function(){return{max:0,p:0}},computed:{percentage:function(){return this.max=6*this.goal,this.p=100*this.progress/this.max,this.p},color:function(){return{green:this.progress>this.goal,blue:this.progress==this.goal,yellow:this.progress<this.goal}}},filters:{rand:function(t){return t?"number"===typeof t?t.toFixed(2):t:""}}},d=p,g=(a("e0f9"),a("2877")),b=Object(g["a"])(d,c,u,!1,null,"4eeab912",null),f=b.exports,v={name:"DeptoBase",props:{goal:{required:!0},progress:{required:!0},name:{required:!0},depto:{required:!0},days:{required:!0},m3:{required:!0},bonus_p:{required:!0},bonus_tot:{required:!0},asis:{required:!0},extra:{required:!0},bonus_prod:{required:!1},bonus_goals:{required:!1}},components:{ProgressBar:f},data:function(){return{background:o.a,user:n.a}},created:function(){this.$store.dispatch("admin/week")},computed:{week:function(){return this.$store.getters["admin/getWeek"]}},filters:{split:function(t){if(!t)return"";t=t.toString();var s,a=t.toLowerCase().split(" "),r=a.length;for(s=0;s<r;s++)a[s]=a[s].charAt(0).toUpperCase()+a[s].substring(1);var e=a.join(" "),i=e.split(" ").slice(0,-1).join(" ");return i},rand:function(t){return!t||t<0?"0":"number"===typeof t?t.toFixed(2):t},cap:function(t){if(!t)return"";t=t.toString();var s,a=t.toLowerCase().split(" "),r=a.length;for(s=0;s<r;s++)a[s]=a[s].charAt(0).toUpperCase()+a[s].substring(1);var e=a.join(" ");return e}}},h=v,m=Object(g["a"])(h,r,e,!1,null,null,null);s["a"]=m.exports},"888e":function(t,s,a){},"8a6d":function(t,s,a){t.exports=a.p+"img/fondoazul.bba6d2eb.png"},a15b:function(t,s,a){"use strict";var r=a("23e7"),e=a("44ad"),i=a("fc6a"),o=a("a640"),l=[].join,n=e!=Object,c=o("join",",");r({target:"Array",proto:!0,forced:n||!c},{join:function(t){return l.call(i(this),void 0===t?",":t)}})},b680:function(t,s,a){"use strict";var r=a("23e7"),e=a("a691"),i=a("408a"),o=a("1148"),l=a("d039"),n=1..toFixed,c=Math.floor,u=function(t,s,a){return 0===s?a:s%2===1?u(t,s-1,a*t):u(t*t,s/2,a)},p=function(t){var s=0,a=t;while(a>=4096)s+=12,a/=4096;while(a>=2)s+=1,a/=2;return s},d=n&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!l((function(){n.call({})}));r({target:"Number",proto:!0,forced:d},{toFixed:function(t){var s,a,r,l,n=i(this),d=e(t),g=[0,0,0,0,0,0],b="",f="0",v=function(t,s){var a=-1,r=s;while(++a<6)r+=t*g[a],g[a]=r%1e7,r=c(r/1e7)},h=function(t){var s=6,a=0;while(--s>=0)a+=g[s],g[s]=c(a/t),a=a%t*1e7},m=function(){var t=6,s="";while(--t>=0)if(""!==s||0===t||0!==g[t]){var a=String(g[t]);s=""===s?a:s+o.call("0",7-a.length)+a}return s};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(n!=n)return"NaN";if(n<=-1e21||n>=1e21)return String(n);if(n<0&&(b="-",n=-n),n>1e-21)if(s=p(n*u(2,69,1))-69,a=s<0?n*u(2,-s,1):n/u(2,s,1),a*=4503599627370496,s=52-s,s>0){v(0,a),r=d;while(r>=7)v(1e7,0),r-=7;v(u(10,r,1),0),r=s-1;while(r>=23)h(1<<23),r-=23;h(1<<r),v(1,1),h(2),f=m()}else v(0,a),v(1<<-s,0),f=m()+o.call("0",d);return d>0?(l=f.length,f=b+(l<=d?"0."+o.call("0",d-l)+f:f.slice(0,l-d)+"."+f.slice(l-d))):f=b+f,f}})},bb10:function(t,s,a){"use strict";a.r(s);var r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t.isLoading?a("div",{staticClass:"center pt-5"},[t._m(0)]):a("DeptoBase",{attrs:{goal:t.cortemaq.meta_semana,progress:t.cortemaq.progress,name:t.cortemaq.nombre,depto:t.cortemaq.depto,days:t.cortemaq.dias_laborados,m3:t.cortemaq.m3_persona,bonus_p:t.cortemaq.bono_persona,bonus_tot:t.cortemaq.bono_depto,asis:t.cortemaq.asistencia,extra:t.cortemaq.$_extra_m3,bonus_prod:t.cortemaq.bono_productividad,bonus_goals:t.cortemaq.bono_metas}})],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[t._v("Cargando contenido...")])])}],i=a("5a4b"),o={name:"Cortemaq",components:{DeptoBase:i["a"]},created:function(){this.$store.dispatch("plants/getInfo",{department:"cortemaq",userCode:this.$route.params.user,city:"tijuana"})},computed:{isLoading:function(){return this.$store.getters["plants/loading"]},cortemaq:function(){return this.$store.getters["plants/data"]}}},l=o,n=a("2877"),c=Object(n["a"])(l,r,e,!1,null,null,null);s["default"]=c.exports},c121:function(t,s,a){t.exports=a.p+"img/user.00f5534d.png"},e0f9:function(t,s,a){"use strict";a("888e")},fb6a:function(t,s,a){"use strict";var r=a("23e7"),e=a("861d"),i=a("e8b5"),o=a("23cb"),l=a("50c4"),n=a("fc6a"),c=a("8418"),u=a("b622"),p=a("1dde"),d=a("ae40"),g=p("slice"),b=d("slice",{ACCESSORS:!0,0:0,1:2}),f=u("species"),v=[].slice,h=Math.max;r({target:"Array",proto:!0,forced:!g||!b},{slice:function(t,s){var a,r,u,p=n(this),d=l(p.length),g=o(t,d),b=o(void 0===s?d:s,d);if(i(p)&&(a=p.constructor,"function"!=typeof a||a!==Array&&!i(a.prototype)?e(a)&&(a=a[f],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return v.call(p,g,b);for(r=new(void 0===a?Array:a)(h(b-g,0)),u=0;g<b;g++,u++)g in p&&c(r,u,p[g]);return r.length=u,r}})}}]);
//# sourceMappingURL=chunk-276c01f4.b9fd6e73.js.map