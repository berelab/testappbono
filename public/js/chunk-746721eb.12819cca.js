(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-746721eb"],{"3337e":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.isLoading?e("div",{staticClass:"center pt-5"},[t._m(0)]):e("DeptoBase",{attrs:{goal:t.mantenimiento.meta_semana,progress:t.mantenimiento.progress,name:t.mantenimiento.nombre,depto:t.mantenimiento.depto,days:t.mantenimiento.dias_laborados,m3:t.mantenimiento.m3_persona,bonus_p:t.mantenimiento.bono_persona,bonus_tot:t.mantenimiento.bono_depto,asis:t.mantenimiento.asistencia,extra:t.mantenimiento.$_extra_m3,bonus_prod:t.mantenimiento.bono_productividad,bonus_goals:t.mantenimiento.bono_metas}})],1)},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Cargando contenido...")])])}],i=e("5a4b"),s={name:"Mantenimiento",components:{DeptoBase:i["a"]},created:function(){this.$store.dispatch("plants/getInfo",{department:"mantenimiento",userCode:this.$route.params.user,city:"cdmexico"})},computed:{isLoading:function(){return this.$store.getters["plants/loading"]},mantenimiento:function(){return this.$store.getters["plants/data"]}}},r=s,m=e("2877"),p=Object(m["a"])(r,a,o,!1,null,null,null);n["default"]=p.exports}}]);
//# sourceMappingURL=chunk-746721eb.12819cca.js.map