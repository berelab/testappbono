(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2219f5"],{caab:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isLoading?a("div",{staticClass:"center pt-5"},[t._m(0)]):t._e(),a("DeptoBase",{attrs:{goal:t.vigueta.meta_semana,progress:t.vigueta.progress,name:t.vigueta.nombre,depto:t.vigueta.depto,days:t.vigueta.dias_laborados,m3:t.vigueta.m3_persona,bonus_p:t.vigueta.bono_persona,bonus_tot:t.vigueta.bono_depto,asis:t.vigueta.asistencia,extra:t.vigueta.$_extra_m3}})],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[t._v("Loading...")])])}],i=a("5a4b"),o={name:"Vigueta",components:{DeptoBase:i["a"]},created:function(){this.$store.dispatch("vigueta/getInfo")},computed:{isLoading:function(){return this.$store.getters["vigueta/loading"]},vigueta:function(){return this.$store.getters["vigueta/data"]}}},r=o,u=a("2877"),c=Object(u["a"])(r,s,n,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d2219f5.109f9d70.js.map