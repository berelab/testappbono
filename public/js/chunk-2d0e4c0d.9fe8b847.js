(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4c0d"],{9220:function(t,o,n){"use strict";n.r(o);var s=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[t.isLoading?n("div",{staticClass:"center pt-5"},[t._m(0)]):n("DeptoBase",{attrs:{goal:t.bonotyg.meta_semana,progress:t.bonotyg.progress,name:t.bonotyg.nombre,depto:t.bonotyg.depto,days:t.bonotyg.dias_laborados,m3:t.bonotyg.m3_persona,bonus_p:t.bonotyg.bono_persona,bonus_tot:t.bonotyg.bono_depto,asis:t.bonotyg.asistencia,extra:t.bonotyg.$_extra_m3,bonus_prod:t.bonotyg.bono_productividad,bonus_goals:t.bonotyg.bono_metas}})],1)},e=[function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[t._v("Cargando contenido...")])])}],a=n("5a4b"),r={name:"Bonotyg",components:{DeptoBase:a["a"]},created:function(){this.$store.dispatch("plants/getInfo",{department:"bonotyg",userCode:this.$route.params.user,city:"tijuana"})},computed:{isLoading:function(){return this.$store.getters["plants/loading"]},bonotyg:function(){return this.$store.getters["plants/data"]}}},i=r,d=n("2877"),p=Object(d["a"])(i,s,e,!1,null,null,null);o["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0e4c0d.9fe8b847.js.map