(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8fc2"],{"8c34":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.isLoading?o("div",{staticClass:"center pt-5"},[e._m(0)]):o("DeptoBase",{attrs:{goal:e.emcorte.meta_semana,progress:e.emcorte.progress,name:e.emcorte.nombre,depto:e.emcorte.depto,days:e.emcorte.dias_laborados,m3:e.emcorte.m3_persona,bonus_p:e.emcorte.bono_persona,bonus_tot:e.emcorte.bono_depto,asis:e.emcorte.asistencia,extra:e.emcorte.$_extra_m3,bonus_prod:e.emcorte.bono_productividad,bonus_goals:e.emcorte.bono_metas}})],1)},s=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[o("span",{staticClass:"sr-only"},[e._v("Cargando contenido...")])])}],n=o("5a4b"),a={name:"Emcorte",components:{DeptoBase:n["a"]},created:function(){this.$store.dispatch("plants/getInfo",{department:"emcorte",userCode:this.$route.params.user,city:"monterrey"})},computed:{isLoading:function(){return this.$store.getters["plants/loading"]},emcorte:function(){return this.$store.getters["plants/data"]}}},c=a,i=o("2877"),m=Object(i["a"])(c,r,s,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0e8fc2.c013dee7.js.map