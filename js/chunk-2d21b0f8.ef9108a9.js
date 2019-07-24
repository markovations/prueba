(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21b0f8"],{bdbb:function(e,s,r){"use strict";r.r(s);var t=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"block-center mt-4 wd-xl"},[r("div",{staticClass:"card card-flat"},[e._m(0),r("div",{staticClass:"card-body"},[r("p",{staticClass:"text-center py-2"},[e._v("SIGNUP TO GET INSTANT ACCESS.")]),r("form",{staticClass:"mb-3",attrs:{"data-vv-scope":"register"},on:{submit:function(s){s.preventDefault(),e.validateBeforeSubmit("register")}}},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"text-muted",attrs:{for:"signupInputEmail1"}},[e._v("Email address")]),r("div",{staticClass:"input-group with-focus"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.email,expression:"register.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],class:{"form-control border-right-0":!0,"is-invalid":e.errors.has("register.email")},attrs:{placeholder:"Enter email",type:"text",name:"email"},domProps:{value:e.register.email},on:{input:function(s){s.target.composing||e.$set(e.register,"email",s.target.value)}}}),e._m(1),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("register.email"),expression:"errors.has('register.email')"}],staticClass:"invalid-feedback"},[e._v(e._s(e.errors.first("register.email")))])])]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"text-muted",attrs:{for:"signupInputPassword1"}},[e._v("Password")]),r("div",{staticClass:"input-group with-focus"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.password1,expression:"register.password1"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],ref:"password1",class:{"form-control border-right-0":!0,"is-invalid":e.errors.has("register.password1")},attrs:{type:"password",name:"password1",placeholder:"Password"},domProps:{value:e.register.password1},on:{input:function(s){s.target.composing||e.$set(e.register,"password1",s.target.value)}}}),e._m(2),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("register.password1"),expression:"errors.has('register.password1')"}],staticClass:"invalid-feedback"},[e._v(e._s(e.errors.first("register.password1")))])])]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"text-muted",attrs:{for:"signupInputRePassword1"}},[e._v("Retype Password")]),r("div",{staticClass:"input-group with-focus"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.password2,expression:"register.password2"},{name:"validate",rawName:"v-validate",value:"required|confirmed:password1",expression:"'required|confirmed:password1'"}],class:{"form-control border-right-0":!0,"is-invalid":e.errors.has("register.password2")},attrs:{type:"password",name:"password2",placeholder:"Retype Password"},domProps:{value:e.register.password2},on:{input:function(s){s.target.composing||e.$set(e.register,"password2",s.target.value)}}}),e._m(3),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("register.password2"),expression:"errors.has('register.password2')"}],staticClass:"invalid-feedback"},[e._v(e._s(e.errors.first("register.password2")))])])]),r("div",{staticClass:"custom-control custom-checkbox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.agreements,expression:"register.agreements"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"custom-control-input":!0,"is-invalid":e.errors.has("register.agreements")},attrs:{type:"checkbox",name:"agreements",id:"registeragree"},domProps:{checked:Array.isArray(e.register.agreements)?e._i(e.register.agreements,null)>-1:e.register.agreements},on:{change:function(s){var r=e.register.agreements,t=s.target,a=!!t.checked;if(Array.isArray(r)){var i=null,o=e._i(r,i);t.checked?o<0&&e.$set(e.register,"agreements",r.concat([i])):o>-1&&e.$set(e.register,"agreements",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.register,"agreements",a)}}}),e._m(4),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("register.agreements"),expression:"errors.has('register.agreements')"}],staticClass:"invalid-feedback"},[e._v(e._s(e.errors.first("register.agreements")))])]),r("button",{staticClass:"btn btn-block btn-primary mt-3",attrs:{type:"submit"}},[e._v("Create account")])]),r("p",{staticClass:"pt-3 text-center"},[e._v("Have an account?")]),r("router-link",{staticClass:"btn btn-block btn-secondary",attrs:{to:"/login"}},[e._v("Signup")])],1)]),e._m(5)])},a=[function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"card-header text-center bg-dark"},[r("a",{attrs:{href:"#"}},[r("img",{staticClass:"block-center",attrs:{src:"img/logo.png",alt:"Image"}})])])},function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"input-group-append"},[r("span",{staticClass:"input-group-text text-muted bg-transparent border-left-0"},[r("em",{staticClass:"fa fa-envelope"})])])},function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"input-group-append"},[r("span",{staticClass:"input-group-text text-muted bg-transparent border-left-0"},[r("em",{staticClass:"fa fa-lock"})])])},function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"input-group-append"},[r("span",{staticClass:"input-group-text text-muted bg-transparent border-left-0"},[r("em",{staticClass:"fa fa-lock"})])])},function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("label",{staticClass:"custom-control-label",attrs:{for:"registeragree"}},[e._v("\n                        I agree with the"),r("a",{staticClass:"ml-1",attrs:{href:"#"}},[e._v("terms")])])},function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"p-3 text-center"},[r("span",{staticClass:"mr-2"},[e._v("©")]),r("span",[e._v("2019")]),r("span",{staticClass:"mr-2"},[e._v("-")]),r("span",[e._v("Angle")]),r("br"),r("span",[e._v("Bootstrap Admin Template")])])}],i=r("2b0e"),o=r("7bb1");i["default"].use(o["a"],{fieldsBagName:"formFields"});var n={data:function(){return{register:{email:"",password1:"",password2:"",agreements:!1}}},methods:{validateBeforeSubmit:function(e){var s=this;this.$validator.validateAll(e).then(function(e){if(e)return console.log("Form Submitted!"),console.log("Email: ".concat(s.register.email)),console.log("Password: ".concat(s.register.password1)),void console.log("Agreed: ".concat(s.register.agreements));console.log("Correct them errors!")})}}},l=n,c=r("2877"),d=Object(c["a"])(l,t,a,!1,null,null,null);s["default"]=d.exports}}]);