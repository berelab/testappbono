(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6338"],{7218:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.isLoading?o("div",{staticClass:"center pt-5"},[e._m(0)]):e._e(),o("DeptoBase",{attrs:{goal:e.chofer.meta_semana,progress:e.chofer.progress,name:e.chofer.nombre,depto:e.chofer.depto,days:e.chofer.dias_laborados,m3:e.chofer.m3_persona,bonus_p:e.chofer.bono_persona,bonus_tot:e.chofer.bono_depto,asis:e.chofer.asistencia,extra:e.chofer.$_extra_m3}})],1)},s=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[o("span",{staticClass:"sr-only"},[e._v("Loading...")])])}],a=o("5a4b"),n={name:"Chofer",components:{DeptoBase:a["a"]},created:function(){this.$store.dispatch("chofer/getInfo")},computed:{isLoading:function(){return this.$store.getters["chofer/loading"]},chofer:function(){return this.$store.getters["chofer/data"]}}},c=n,i=o("2877"),f=Object(i["a"])(c,r,s,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0d6338.7a1e22af.js.map