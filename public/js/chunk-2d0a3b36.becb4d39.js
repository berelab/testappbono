(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3b36"],{"02fd":function(n,s,e){"use strict";e.r(s);var a=function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("div",[n.isLoading?e("div",{staticClass:"center pt-5"},[n._m(0)]):e("DeptoBase",{attrs:{goal:n.insulpanel.meta_semana,progress:n.insulpanel.progress,name:n.insulpanel.nombre,depto:n.insulpanel.depto,days:n.insulpanel.dias_laborados,m3:n.insulpanel.m3_persona,bonus_p:n.insulpanel.bono_persona,bonus_tot:n.insulpanel.bono_depto,asis:n.insulpanel.asistencia,extra:n.insulpanel.$_extra_m3,bonus_prod:n.insulpanel.bono_productividad,bonus_goals:n.insulpanel.bono_metas}})],1)},t=[function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[n._v("Cargando contenido...")])])}],o=e("5a4b"),l={name:"Insulpanel",components:{DeptoBase:o["a"]},created:function(){this.$store.dispatch("plants/getInfo",{department:"insulpanel",userCode:this.$route.params.user,city:"hermosillo"})},computed:{isLoading:function(){return this.$store.getters["plants/loading"]},insulpanel:function(){return this.$store.getters["plants/data"]}}},i=l,r=e("2877"),p=Object(r["a"])(i,a,t,!1,null,null,null);s["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0a3b36.becb4d39.js.map