(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5c1b"],{"969a":function(e,s,a){"use strict";a.r(s);var t=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentWrapper",[a("div",{staticClass:"content-heading"},[a("div",[e._v("Tables\n            "),a("small",[e._v("Bootstrap Responsive tables")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-6"},[a("div",{staticClass:"card card-default"},[a("div",{staticClass:"card-header"},[e._v("Basic Example")]),a("div",{staticClass:"card-body"},[a("b-table",{attrs:{responsive:"",striped:"",hover:"",items:e.itemsBasic}})],1)])]),a("div",{staticClass:"col-xl-6"},[a("div",{staticClass:"card card-default"},[a("div",{staticClass:"card-header"},[e._v("Custom Fields")]),a("div",{staticClass:"card-body"},[a("b-table",{attrs:{responsive:"",striped:"",hover:"",items:e.itemsFields,fields:e.fields}})],1)])])]),a("div",{staticClass:"card card-default"},[a("div",{staticClass:"card-header"},[e._v("Sortable")]),a("div",{staticClass:"card-body"},[a("b-table",{attrs:{responsive:"",striped:"",hover:"",items:e.itemsSortable,fields:e.fieldsSortable}})],1)]),a("div",{staticClass:"card card-default"},[a("div",{staticClass:"card-header"},[e._v("Table styles")]),a("div",{staticClass:"card-body"},[a("b-form-checkbox",{model:{value:e.style.striped,callback:function(s){e.$set(e.style,"striped",s)},expression:"style.striped"}},[e._v("Striped")]),a("b-form-checkbox",{model:{value:e.style.bordered,callback:function(s){e.$set(e.style,"bordered",s)},expression:"style.bordered"}},[e._v("Bordered")]),a("b-form-checkbox",{model:{value:e.style.outlined,callback:function(s){e.$set(e.style,"outlined",s)},expression:"style.outlined"}},[e._v("Outlined")]),a("b-form-checkbox",{model:{value:e.style.small,callback:function(s){e.$set(e.style,"small",s)},expression:"style.small"}},[e._v("Small")]),a("b-form-checkbox",{model:{value:e.style.hover,callback:function(s){e.$set(e.style,"hover",s)},expression:"style.hover"}},[e._v("Hover")]),a("b-form-checkbox",{model:{value:e.style.dark,callback:function(s){e.$set(e.style,"dark",s)},expression:"style.dark"}},[e._v("Dark")]),a("b-form-checkbox",{model:{value:e.style.fixed,callback:function(s){e.$set(e.style,"fixed",s)},expression:"style.fixed"}},[e._v("Fixed")]),a("b-form-checkbox",{model:{value:e.style.footClone,callback:function(s){e.$set(e.style,"footClone",s)},expression:"style.footClone"}},[e._v("Foot Clone")]),a("b-table",{attrs:{responsive:"",striped:e.style.striped,bordered:e.style.bordered,outlined:e.style.outlined,small:e.style.small,hover:e.style.hover,dark:e.style.dark,fixed:e.style.fixed,"foot-clone":e.style.footClone,items:e.itemsFields,fields:e.fields}})],1)]),a("div",{staticClass:"card card-default"},[a("div",{staticClass:"card-header"},[e._v("Table Variant")]),a("div",{staticClass:"card-body"},[a("b-table",{attrs:{responsive:"",hover:"",items:e.itemsVariant}})],1)])])},l=[],i={data:function(){return{itemsBasic:[{isActive:!0,age:40,first_name:"Dickerson",last_name:"Macdonald"},{isActive:!1,age:21,first_name:"Larsen",last_name:"Shaw"},{isActive:!1,age:89,first_name:"Geneva",last_name:"Wilson"},{isActive:!0,age:38,first_name:"Jami",last_name:"Carney"}],itemsVariant:[{isActive:!1,age:21,first_name:"Larsen",last_name:"Shaw"},{isActive:!1,age:89,first_name:"Geneva",last_name:"Wilson",_rowVariant:"danger"},{isActive:!0,age:40,first_name:"Thor",last_name:"Macdonald",_cellVariants:{isActive:"success",age:"info",first_name:"warning"}},{isActive:!1,age:29,first_name:"Dick",last_name:"Dunlap"}],fields:["first_name","last_name","age"],itemsFields:[{isActive:!0,age:40,first_name:"Dickerson",last_name:"Macdonald"},{isActive:!1,age:21,first_name:"Larsen",last_name:"Shaw"},{isActive:!1,age:89,first_name:"Geneva",last_name:"Wilson"},{isActive:!0,age:38,first_name:"Jami",last_name:"Carney"}],fieldsSortable:{last_name:{label:"Person last name",sortable:!0},first_name:{label:"Person first name",sortable:!1},foo:{key:"age",label:"Person age",sortable:!0},city:{key:"address.city"},"address.country":{label:"Country"}},itemsSortable:[{isActive:!0,age:40,first_name:"Dickerson",last_name:"Macdonald",address:{country:"USA",city:"New York"}},{isActive:!1,age:21,first_name:"Larsen",last_name:"Shaw",address:{country:"Canada",city:"Toronto"}},{isActive:!1,age:89,first_name:"Geneva",last_name:"Wilson",address:{country:"Australia",city:"Sydney"}},{isActive:!0,age:38,first_name:"Jami",last_name:"Carney",address:{country:"England",city:"London"}}],style:{striped:!1,bordered:!1,outlined:!1,small:!1,hover:!1,dark:!1,fixed:!1,footClone:!1}}}},r=i,n=a("2877"),o=Object(n["a"])(r,t,l,!1,null,null,null);s["default"]=o.exports}}]);