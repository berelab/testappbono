(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6c2c"],{"1f12":function(s,e,a){"use strict";a.r(e);var t=function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",[s.isLoading?a("div",{staticClass:"center pt-5"},[s._m(0)]):s._e(),a("DeptoBase",{attrs:{goal:s.mcsframe.meta_semana,progress:s.mcsframe.progress,name:s.mcsframe.nombre,depto:s.mcsframe.depto,days:s.mcsframe.dias_laborados,m3:s.mcsframe.m3_persona,bonus_p:s.mcsframe.bono_persona,bonus_tot:s.mcsframe.bono_depto,asis:s.mcsframe.asistencia,extra:s.mcsframe.$_extra_m3,bonus_prod:s.mcsframe.bono_productividad,bonus_goals:s.mcsframe.bono_metas}})],1)},r=[function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[s._v("Loading...")])])}],n=a("5a4b"),o={name:"McsFrame",components:{DeptoBase:n["a"]},created:function(){this.$store.dispatch("plants/getInfo",{department:"mcsframe",userCode:this.$route.params.user,city:"juarez"})},computed:{isLoading:function(){return this.$store.getters["plants/loading"]},mcsframe:function(){return this.$store.getters["plants/data"]}}},m=o,c=a("2877"),i=Object(c["a"])(m,t,r,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0b6c2c.9f071286.js.map