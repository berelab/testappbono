(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8076"],{"52ad":function(o,e,t){"use strict";t.r(e);var s=function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",[o.isLoading?t("div",{staticClass:"center pt-5"},[o._m(0)]):o._e(),t("DeptoBase",{attrs:{goal:o.moldeo.meta_semana,progress:o.moldeo.progress,name:o.moldeo.nombre,depto:o.moldeo.depto,days:o.moldeo.dias_laborados,m3:o.moldeo.m3_persona,bonus_p:o.moldeo.bono_persona,bonus_tot:o.moldeo.bono_depto,asis:o.moldeo.asistencia,extra:o.moldeo.$_extra_m3,bonus_prod:o.moldeo.bono_productividad,bonus_goals:o.moldeo.bono_metas}})],1)},a=[function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[t("span",{staticClass:"sr-only"},[o._v("Loading...")])])}],n=t("5a4b"),r={name:"Moldeo",components:{DeptoBase:n["a"]},created:function(){this.$store.dispatch("plants/getInfo",{department:"moldeo",userCode:this.$route.params.user,city:"veracruz"})},computed:{isLoading:function(){return this.$store.getters["plants/loading"]},moldeo:function(){return this.$store.getters["plants/data"]}}},d=r,l=t("2877"),i=Object(l["a"])(d,s,a,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0c8076.fb296d19.js.map