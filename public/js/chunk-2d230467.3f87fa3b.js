(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230467"],{ec1d:function(n,t,e){"use strict";e.r(t);var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[n.isLoading?e("div",{staticClass:"center pt-5"},[n._m(0)]):e("DeptoBase",{attrs:{goal:n.mantenimiento.meta_semana,progress:n.mantenimiento.progress,name:n.mantenimiento.nombre,depto:n.mantenimiento.depto,days:n.mantenimiento.dias_laborados,m3:n.mantenimiento.m3_persona,bonus_p:n.mantenimiento.bono_persona,bonus_tot:n.mantenimiento.bono_depto,asis:n.mantenimiento.asistencia,extra:n.mantenimiento.$_extra_m3,bonus_prod:n.mantenimiento.bono_productividad,bonus_goals:n.mantenimiento.bono_metas,energeticos:n.mantenimiento.pc_energeticos,fugas:n.mantenimiento.pc_fugas,descuento:n.mantenimiento.descuento_fr}})],1)},o=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[n._v("Cargando contenido...")])])}],i=e("5a4b"),s={name:"Mantenimiento",components:{DeptoBase:i["a"]},created:function(){this.$store.dispatch("plants/getInfo",{department:"mantenimiento",userCode:this.$route.params.user,city:"tijuana"})},computed:{isLoading:function(){return this.$store.getters["plants/loading"]},mantenimiento:function(){return this.$store.getters["plants/data"]}}},r=s,m=e("2877"),c=Object(m["a"])(r,a,o,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d230467.3f87fa3b.js.map