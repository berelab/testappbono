(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c7a76"],{5214:function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[e.isLoading?t("div",{staticClass:"center pt-5"},[e._m(0)]):t("DeptoBase",{attrs:{goal:e.bloquera.meta_semana,progress:e.bloquera.progress,name:e.bloquera.nombre,depto:e.bloquera.depto,days:e.bloquera.dias_laborados,m3:e.bloquera.m3_persona,bonus_p:e.bloquera.bono_persona,bonus_tot:e.bloquera.bono_depto,asis:e.bloquera.asistencia,extra:e.bloquera.$_extra_m3,bonus_prod:e.bloquera.bono_productividad,bonus_goals:e.bloquera.bono_metas}})],1)},s=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[t("span",{staticClass:"sr-only"},[e._v("Cargando contenido...")])])}],r=t("5a4b"),n={name:"Bloquera",components:{DeptoBase:r["a"]},created:function(){this.$store.dispatch("plants/getInfo",{department:"bloquera",userCode:this.$route.params.user,city:"merida"})},computed:{isLoading:function(){return this.$store.getters["plants/loading"]},bloquera:function(){return this.$store.getters["plants/data"]}}},u=n,i=t("2877"),l=Object(i["a"])(u,o,s,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0c7a76.6a87a8db.js.map