(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4be9"],{"086a":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.isLoading?s("div",{staticClass:"center pt-5"},[e._m(0)]):e._e(),s("DeptoBase",{attrs:{goal:e.cedi.meta_semana,progress:e.cedi.progress,name:e.cedi.nombre,depto:e.cedi.depto,days:e.cedi.dias_laborados,m3:e.cedi.m3_persona,bonus_p:e.cedi.bono_persona,bonus_tot:e.cedi.bono_depto,asis:e.cedi.asistencia,extra:e.cedi.$_extra_m3,bonus_prod:e.cedi.bono_productividad,bonus_goals:e.cedi.bono_metas}})],1)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[e._v("Loading...")])])}],o=s("5a4b"),i={name:"Cedi",components:{DeptoBase:o["a"]},created:function(){this.$store.dispatch("plants/getInfo",{department:"chofercedi",city:"lapaz",userCode:this.$route.params.user})},computed:{isLoading:function(){return this.$store.getters["plants/loading"]},cedi:function(){return this.$store.getters["plants/data"]}}},r=i,d=s("2877"),c=Object(d["a"])(r,a,n,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0a4be9.d774baf9.js.map