(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216d97"],{c3e6:function(s,t,e){"use strict";e.r(t);var r=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[s.isLoading?e("div",{staticClass:"center pt-5"},[s._m(0)]):s._e(),e("DeptoBase",{attrs:{goal:s.kbrs.meta_semana,progress:s.kbrs.progress,name:s.kbrs.nombre,depto:s.kbrs.depto,days:s.kbrs.dias_laborados,m3:s.kbrs.m3_persona,bonus_p:s.kbrs.bono_persona,bonus_tot:s.kbrs.bono_depto,asis:s.kbrs.asistencia,extra:s.kbrs.$_extra_m3,bonus_prod:s.kbrs.bono_productividad,bonus_goals:s.kbrs.bono_metas}})],1)},a=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[s._v("Loading...")])])}],n=e("5a4b"),o={name:"Kbrs",components:{DeptoBase:n["a"]},created:function(){this.$store.dispatch("plants/getInfo",{department:"kbrs",userCode:this.$route.params.user,city:"juarez"})},computed:{isLoading:function(){return this.$store.getters["plants/loading"]},kbrs:function(){return this.$store.getters["plants/data"]}}},i=o,b=e("2877"),p=Object(b["a"])(i,r,a,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d216d97.7ef186a6.js.map