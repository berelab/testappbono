(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2225a4"],{cdf3:function(a,e,n){"use strict";n.r(e);var t=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",[a.isLoading?n("div",{staticClass:"center pt-5"},[a._m(0)]):n("DeptoBase",{attrs:{goal:a.almacen.meta_semana,progress:a.almacen.progress,name:a.almacen.nombre,depto:a.almacen.depto,days:a.almacen.dias_laborados,m3:a.almacen.m3_persona,bonus_p:a.almacen.bono_persona,bonus_tot:a.almacen.bono_depto,asis:a.almacen.asistencia,extra:a.almacen.$_extra_m3,bonus_prod:a.almacen.bono_productividad,bonus_goals:a.almacen.bono_metas}})],1)},s=[function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[a._v("Cargando contenido...")])])}],o=n("5a4b"),r={name:"Almacen",components:{DeptoBase:o["a"]},created:function(){this.$store.dispatch("plants/getInfo",{department:"almacen",userCode:this.$route.params.user,city:"cancun"})},computed:{isLoading:function(){return this.$store.getters["plants/loading"]},almacen:function(){return this.$store.getters["plants/data"]}}},c=r,l=n("2877"),i=Object(l["a"])(c,t,s,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d2225a4.fb786aa9.js.map