(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26e32a8e"],{b640:function(e,t,r){e.exports=r.p+"img/logo.a3340256.jpg"},dd7b:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-page"},[r("div",{staticClass:"main-container container-flex"},[e._m(0),r("div",{staticClass:"col-two col50"},[e._m(1),r("div",{staticClass:"form-container"},[r("h4",[e._v("Login")]),r("form",{attrs:{id:"loginapp",action:"",method:"post"},on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[r("div",{staticClass:"row-block"},[r("p",{attrs:{for:"correo"}},[e._v("Correo")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email_form,expression:"email_form"}],attrs:{id:"correo",type:"email",name:"correo",required:"",placeholder:"info@legrafica.mx"},domProps:{value:e.email_form},on:{input:function(t){t.target.composing||(e.email_form=t.target.value)}}})]),r("div",{staticClass:"row-block"},[r("p",{attrs:{for:"password"}},[e._v("Contraseña")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password_form,expression:"password_form"}],attrs:{id:"password",type:"password",name:"password",required:"",placeholder:"**************"},domProps:{value:e.password_form},on:{input:function(t){t.target.composing||(e.password_form=t.target.value)}}})]),"error"==e.status?r("p",{staticClass:"error"},[e._v("Has introducido mal el email o la contraseña.")]):e._e(),e._m(2)])]),r("p",{staticClass:"txt-version"},[e._v("V 1.0.0")])])])])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-one col50"},[r("h2",[e._v("¡Bienvenido!")]),r("p",[e._v("El éxito es la suma de pequeños esfuerzos día a día.")]),r("hr")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-logo"},[s("img",{attrs:{src:r("b640")}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"btn-login"},[r("input",{attrs:{type:"submit",value:"Iniciar Sesión"}})])}],a=(r("96cf"),r("1da1")),n={name:"login",data:function(){return{email_form:"",password_form:"",status:""}},computed:{token:function(){return this.$store.getters["userService/getToken"]},identity:function(){return this.$store.getters["userService/getIdentity"]}},methods:{login:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("userService/login",{email:e.email_form,password:e.password_form,gettoken:!0});case 3:r=t.sent,"error"!=r.status?(e.status="success",e.$store.dispatch("userService/setToken",e.token),e.$store.dispatch("userService/getToken"),e.$store.dispatch("userService/decode",e.token),e.$router.push("/auth").catch((function(e){})),console.log(e.identity)):e.status="error",t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.status="error";case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}},i=n,c=r("2877"),l=Object(c["a"])(i,s,o,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-26e32a8e.10579887.js.map