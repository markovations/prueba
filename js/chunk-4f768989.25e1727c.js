(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f768989"],{aa95:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentWrapper",[s("div",{staticClass:"content-heading"},[s("div",[t._v("Dashboard\n            "),s("small",[t._v(t._s(t.$t("dashboard.WELCOME")))])]),s("div",{staticClass:"ml-auto"},[s("b-dropdown",{attrs:{id:"ddown1",text:t.selectedLanguage(),"no-caret":"",right:""}},[s("b-dropdown-item",{on:{click:function(a){t.changeLanguage("en")}}},[t._v("English")]),s("b-dropdown-item",{on:{click:function(a){t.changeLanguage("es")}}},[t._v("Spanish")])],1)],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-4"},[s("div",{staticClass:"list-group mb-3"},[s("div",{staticClass:"list-group-item"},[s("div",{staticClass:"d-flex align-items-center py-3"},[s("div",{staticClass:"w-50 px-3"},[s("p",{staticClass:"m-0 lead"},[t._v("1204")]),s("p",{staticClass:"m-0 text-sm"},[t._v("Commits this month")])]),s("div",{staticClass:"w-50 px-3 text-center"},[s("Sparkline",{attrs:{options:{barColor:"#23b7e5",height:"60",barWidth:"10",barSpacing:"6",chartRangeMin:"0"},values:[3,6,7,8,4,5]}})],1)])]),s("div",{staticClass:"list-group-item"},[s("div",{staticClass:"d-flex align-items-center py-3"},[s("div",{staticClass:"w-50 px-3"},[s("p",{staticClass:"m-0 lead"},[t._v("$ 3,200.00")]),s("p",{staticClass:"m-0 text-sm"},[t._v("Available budget")])]),s("div",{staticClass:"w-50 px-3 text-center"},[s("Sparkline",{attrs:{options:{type:"line",height:"60",width:"80%",lineWidth:"2",lineColor:"#7266ba",chartRangeMin:"0",spotColor:"#888",minSpotColor:"#7266ba",maxSpotColor:"#7266ba",fillColor:"",highlightLineColor:"#fff",spotRadius:"3",resize:!0},values:[7,3,4,7,5,9,4,4,7,5,9,6,4]}})],1)])]),s("div",{staticClass:"list-group-item"},[s("div",{staticClass:"d-flex align-items-center py-3"},[s("div",{staticClass:"w-50 px-3"},[s("p",{staticClass:"m-0 lead"},[t._v("67")]),s("p",{staticClass:"m-0 text-sm"},[t._v("New followers")])]),s("div",{staticClass:"w-50 px-3 text-center"},[s("div",{staticClass:"d-flex align-items-center flex-wrap justify-content-center"},[s("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"#",title:"Katie"}},[s("img",{staticClass:"circle thumb24 mx-1",attrs:{src:"img/user/02.jpg",alt:"Follower"}})]),s("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"#",title:"Cody"}},[s("img",{staticClass:"circle thumb24 mx-1",attrs:{src:"img/user/01.jpg",alt:"Follower"}})]),s("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"#",title:"Tamara"}},[s("img",{staticClass:"circle thumb24 mx-1",attrs:{src:"img/user/03.jpg",alt:"Follower"}})]),s("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"#",title:"Gene"}},[s("img",{staticClass:"circle thumb24 mx-1",attrs:{src:"img/user/04.jpg",alt:"Follower"}})]),s("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"#",title:"Marsha"}},[s("img",{staticClass:"circle thumb24 mx-1",attrs:{src:"img/user/04.jpg",alt:"Follower"}})]),s("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"#",title:"Robin"}},[s("img",{staticClass:"circle thumb24 mx-1",attrs:{src:"img/user/09.jpg",alt:"Follower"}})])])])])])])]),s("div",{staticClass:"col-xl-8"},[s("div",{staticClass:"card",attrs:{id:"cardChart3"}},[s("div",{staticClass:"card-header"},[s("div",{staticClass:"float-right btn-group"},[s("b-dropdown",{attrs:{id:"ddown1",text:"Monthly",size:"sm","no-caret":"",right:""}},[s("b-dropdown-item",[t._v("Daily")]),s("b-dropdown-item",[t._v("Monthly")]),s("b-dropdown-item",[t._v("Yearly")])],1)],1),s("div",{staticClass:"card-title"},[t._v("Projects Hours")])]),s("div",{staticClass:"card-wrapper"},[s("div",{staticClass:"card-body"},[s("FlotChart",{attrs:{data:t.barStackedData,options:t.barStackedOptions,height:"250px"}})],1)])])])]),s("div",{staticClass:"unwrap my-3"},[s("div",{staticClass:"card",attrs:{id:"cardChart9"}},[s("div",{staticClass:"card-header"},[s("div",{staticClass:"float-right btn-group"},[s("b-dropdown",{attrs:{id:"ddown1",text:"Monthly",size:"sm","no-caret":"",right:"","menu-class":"animated fadeInLeft dropdown-menu-right-forced"}},[s("b-dropdown-item",[t._v("Daily")]),s("b-dropdown-item",[t._v("Monthly")]),s("b-dropdown-divider"),s("b-dropdown-item",[t._v("All time")])],1)],1),s("div",{staticClass:"card-title"},[t._v("Overall progress")])]),s("div",{staticClass:"card-wrapper"},[s("div",{staticClass:"card-body"},[s("FlotChart",{attrs:{data:t.splineData,options:t.splineOptions,height:"250px"}})],1),s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-3 col-6 text-center"},[s("p",[t._v("Projects")]),s("div",{staticClass:"h1"},[t._v("25")])]),s("div",{staticClass:"col-md-3 col-6 text-center"},[s("p",[t._v("Teammates")]),s("div",{staticClass:"h1"},[t._v("85")])]),s("div",{staticClass:"col-md-3 col-6 text-center"},[s("p",[t._v("Hours")]),s("div",{staticClass:"h1"},[t._v("380")])]),s("div",{staticClass:"col-md-3 col-6 text-center"},[s("p",[t._v("Budget")]),s("div",{staticClass:"h1 text-truncate"},[t._v("$ 10,000.00")])])])])])])]),s("div",{staticClass:"row mb-3"},[s("div",{staticClass:"col-lg-3 col-6 text-center"},[s("p",[t._v("Current Project")]),s("div",{staticClass:"text-center py-4"},[s("div",{ref:"easypiechart1",staticClass:"easypie-chart easypie-chart-md",attrs:{"data-percent":"60"}},[s("span",[t._v("60%")])])])]),s("div",{staticClass:"col-lg-3 col-6 text-center"},[s("p",[t._v("Current Progress")]),s("div",{staticClass:"text-center py-4"},[s("div",{ref:"easypiechart2",staticClass:"easypie-chart easypie-chart-md",attrs:{"data-percent":"30"}},[s("span",[t._v("30%")])])])]),s("div",{staticClass:"col-lg-3 col-6 text-center"},[s("p",[t._v("Space Usage")]),s("div",{staticClass:"text-center py-4"},[s("div",{ref:"easypiechart3",staticClass:"easypie-chart easypie-chart-md",attrs:{"data-percent":"50"}},[s("span",[t._v("50%")])])])]),s("div",{staticClass:"col-lg-3 col-6 text-center"},[s("p",[t._v("Interactions")]),s("div",{staticClass:"text-center py-4"},[s("div",{ref:"easypiechart4",staticClass:"easypie-chart easypie-chart-md",attrs:{"data-percent":"75"}},[s("span",[t._v("75%")])])])])]),s("div",{staticClass:"list-group mb-3"},[s("a",{staticClass:"list-group-item",attrs:{href:"#"}},[s("table",{staticClass:"wd-wide"},[s("tbody",[s("tr",[s("td",{staticClass:"wd-xs"},[s("div",{staticClass:"px-2"},[s("img",{staticClass:"img-fluid rounded thumb64",attrs:{src:"img/dummy.png",alt:""}})])]),s("td",[s("div",{staticClass:"px-2"},[s("h4",{staticClass:"mb-2"},[t._v("Project A")]),s("small",{staticClass:"text-muted"},[t._v("Vestibulum ante ipsum primis in faucibus orci")])])]),s("td",{staticClass:"wd-sm d-none d-lg-table-cell"},[s("div",{staticClass:"px-2"},[s("p",{staticClass:"m-0"},[t._v("Last change")]),s("small",{staticClass:"text-muted"},[t._v("4 weeks ago")])])]),s("td",{staticClass:"wd-xs d-none d-lg-table-cell"},[s("div",{staticClass:"px-2"},[s("p",{staticClass:"m-0 text-muted"},[s("em",{staticClass:"icon-people mr-2 fa-lg"}),t._v("26")])])]),s("td",{staticClass:"wd-xs d-none d-lg-table-cell"},[s("div",{staticClass:"px-2"},[s("p",{staticClass:"m-0 text-muted"},[s("em",{staticClass:"icon-doc mr-2 fa-lg"}),t._v("3500")])])]),s("td",{staticClass:"wd-sm"},[s("div",{staticClass:"px-2"},[s("div",{staticClass:"progress-bar progress-xs bg-success",staticStyle:{width:"80%"}},[s("span",{staticClass:"sr-only"},[t._v("80%")])])])])])])])])]),s("div",{staticClass:"list-group mb-3"},[s("a",{staticClass:"list-group-item",attrs:{href:"#"}},[s("table",{staticClass:"wd-wide"},[s("tbody",[s("tr",[s("td",{staticClass:"wd-xs"},[s("div",{staticClass:"px-2"},[s("img",{staticClass:"img-fluid rounded thumb64",attrs:{src:"img/dummy.png",alt:""}})])]),s("td",[s("div",{staticClass:"px-2"},[s("h4",{staticClass:"mb-2"},[t._v("Project X")]),s("small",{staticClass:"text-muted"},[t._v("Vestibulum ante ipsum primis in faucibus orci")])])]),s("td",{staticClass:"wd-sm d-none d-lg-table-cell"},[s("div",{staticClass:"px-2"},[s("p",{staticClass:"m-0"},[t._v("Last change")]),s("small",{staticClass:"text-muted"},[t._v("Today at 06:23 am")])])]),s("td",{staticClass:"wd-xs d-none d-lg-table-cell"},[s("div",{staticClass:"px-2"},[s("p",{staticClass:"m-0 text-muted"},[s("em",{staticClass:"icon-people mr-2 fa-lg"}),t._v("3")])])]),s("td",{staticClass:"wd-xs d-none d-lg-table-cell"},[s("div",{staticClass:"px-2"},[s("p",{staticClass:"m-0 text-muted"},[s("em",{staticClass:"icon-doc mr-2 fa-lg"}),t._v("150")])])]),s("td",{staticClass:"wd-sm"},[s("div",{staticClass:"px-2"},[s("div",{staticClass:"progress-bar progress-xs bg-purple",staticStyle:{width:"50%"}},[s("span",{staticClass:"sr-only"},[t._v("50%")])])])])])])])])]),s("div",{staticClass:"list-group mb-3"},[s("a",{staticClass:"list-group-item",attrs:{href:"#"}},[s("table",{staticClass:"wd-wide"},[s("tbody",[s("tr",[s("td",{staticClass:"wd-xs"},[s("div",{staticClass:"px-2"},[s("img",{staticClass:"img-fluid rounded thumb64",attrs:{src:"img/dummy.png",alt:""}})])]),s("td",[s("div",{staticClass:"px-2"},[s("h4",{staticClass:"mb-2"},[t._v("Project Z")]),s("small",{staticClass:"text-muted"},[t._v("Vestibulum ante ipsum primis in faucibus orci")])])]),s("td",{staticClass:"wd-sm d-none d-lg-table-cell"},[s("div",{staticClass:"px-2"},[s("p",{staticClass:"m-0"},[t._v("Last change")]),s("small",{staticClass:"text-muted"},[t._v("Yesterday at 10:20 pm")])])]),s("td",{staticClass:"wd-xs d-none d-lg-table-cell"},[s("div",{staticClass:"px-2"},[s("p",{staticClass:"m-0 text-muted"},[s("em",{staticClass:"icon-people mr-2 fa-lg"}),t._v("15")])])]),s("td",{staticClass:"wd-xs d-none d-lg-table-cell"},[s("div",{staticClass:"px-2"},[s("p",{staticClass:"m-0 text-muted"},[s("em",{staticClass:"icon-doc mr-2 fa-lg"}),t._v("480")])])]),s("td",{staticClass:"wd-sm"},[s("div",{staticClass:"px-2"},[s("div",{staticClass:"progress-bar progress-xs bg-green",staticStyle:{width:"20%"}},[s("span",{staticClass:"sr-only"},[t._v("20%")])])])])])])])])])])},i=[],r=s("f4f4"),l=s.n(r),n=s("473d"),o=s("7992"),c={name:"DashboardV2",components:{Sparkline:n["a"],FlotChart:o["a"]},data:function(){return{splineData:[{label:"Hours",color:"#23b7e5",data:[["Jan",70],["Feb",20],["Mar",70],["Apr",85],["May",59],["Jun",93],["Jul",66],["Aug",86],["Sep",60],["Oct",60],["Nov",12],["Dec",50]]},{label:"Commits",color:"#7266ba",data:[["Jan",20],["Feb",70],["Mar",30],["Apr",50],["May",85],["Jun",43],["Jul",96],["Aug",36],["Sep",80],["Oct",10],["Nov",72],["Dec",31]]}],splineOptions:{series:{lines:{show:!1},points:{show:!0,radius:4},splines:{show:!0,tension:.4,lineWidth:1,fill:.5}},grid:{borderColor:"#eee",borderWidth:1,hoverable:!0,backgroundColor:"#fcfcfc"},tooltip:!0,tooltipOpts:{content:function(t,a,s){return a+" : "+s}},xaxis:{tickColor:"#fcfcfc",mode:"categories"},yaxis:{min:0,max:150,tickColor:"#eee",tickFormatter:function(t){return t}},shadowSize:0},barStackedData:[{label:"Pending",color:"#9289ca",data:[["Pj1",86],["Pj2",136],["Pj3",97],["Pj4",110],["Pj5",62],["Pj6",85],["Pj7",115],["Pj8",78],["Pj9",104],["Pj10",82],["Pj11",97],["Pj12",110],["Pj13",62]]},{label:"Assigned",color:"#7266ba",data:[["Pj1",49],["Pj2",81],["Pj3",47],["Pj4",44],["Pj5",100],["Pj6",49],["Pj7",94],["Pj8",44],["Pj9",52],["Pj10",17],["Pj11",47],["Pj12",44],["Pj13",100]]},{label:"Completed",color:"#564aa3",data:[["Pj1",29],["Pj2",56],["Pj3",14],["Pj4",21],["Pj5",5],["Pj6",24],["Pj7",37],["Pj8",22],["Pj9",28],["Pj10",9],["Pj11",14],["Pj12",21],["Pj13",5]]}],barStackedOptions:{series:{stack:!0,bars:{align:"center",lineWidth:0,show:!0,barWidth:.6,fill:.9}},grid:{borderColor:"#eee",borderWidth:1,hoverable:!0,backgroundColor:"#fcfcfc"},tooltip:!0,tooltipOpts:{content:function(t,a,s){return a+" : "+s}},xaxis:{tickColor:"#fcfcfc",mode:"categories"},yaxis:{tickColor:"#eee"},shadowSize:0},selectedLanguage:function(){switch(this.$i18n.i18next.language){case"es":return"Spanish";case"en":default:return"English"}}}},mounted:function(){var t={animate:{duration:800,enabled:!0},barColor:"#23b7e5",trackColor:"#edf2f6",scaleColor:!1,lineWidth:2,lineCap:"round",size:130};new l.a(this.$refs.easypiechart1,t);var a={animate:{duration:800,enabled:!0},barColor:"#f532e5",trackColor:"#edf2f6",scaleColor:!1,lineWidth:2,lineCap:"round",size:130};new l.a(this.$refs.easypiechart2,a);var s={animate:{duration:800,enabled:!0},barColor:"#7266ba",trackColor:"#edf2f6",scaleColor:!1,lineWidth:2,lineCap:"round",size:130};new l.a(this.$refs.easypiechart3,s);var e={animate:{duration:800,enabled:!0},barColor:"#ff902b",trackColor:"#edf2f6",scaleColor:!1,lineWidth:2,lineCap:"round",size:130};new l.a(this.$refs.easypiechart4,e)},methods:{changeLanguage:function(t){this.$i18n.i18next.changeLanguage(t)}}},d=c,p=s("2877"),m=Object(p["a"])(d,e,i,!1,null,null,null);a["default"]=m.exports},f4f4:function(t,a,s){(function(s){var e,i;
/**!
 * easy-pie-chart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.7
 **/
/**!
 * easy-pie-chart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.7
 **/
(function(s,r){e=[],i=function(){return s["EasyPieChart"]=r()}.apply(a,e),void 0===i||(t.exports=i)})(this,function(){var t=function(t,a){var s,e=document.createElement("canvas");t.appendChild(e),"object"===typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(e);var i=e.getContext("2d");e.width=e.height=a.size;var r=1;window.devicePixelRatio>1&&(r=window.devicePixelRatio,e.style.width=e.style.height=[a.size,"px"].join(""),e.width=e.height=a.size*r,i.scale(r,r)),i.translate(a.size/2,a.size/2),i.rotate((a.rotate/180-.5)*Math.PI);var l=(a.size-a.lineWidth)/2;a.scaleColor&&a.scaleLength&&(l-=a.scaleLength+2),Date.now=Date.now||function(){return+new Date};var n=function(t,a,s){s=Math.min(Math.max(-1,s||0),1);var e=s<=0;i.beginPath(),i.arc(0,0,l,0,2*Math.PI*s,e),i.strokeStyle=t,i.lineWidth=a,i.stroke()},o=function(){var t,s;i.lineWidth=1,i.fillStyle=a.scaleColor,i.save();for(var e=24;e>0;--e)e%6===0?(s=a.scaleLength,t=0):(s=.6*a.scaleLength,t=a.scaleLength-s),i.fillRect(-a.size/2+t,0,s,1),i.rotate(Math.PI/12);i.restore()},c=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),d=function(){a.scaleColor&&o(),a.trackColor&&n(a.trackColor,a.trackWidth||a.lineWidth,1)};this.getCanvas=function(){return e},this.getCtx=function(){return i},this.clear=function(){i.clearRect(a.size/-2,a.size/-2,a.size,a.size)},this.draw=function(t){var e;a.scaleColor||a.trackColor?i.getImageData&&i.putImageData?s?i.putImageData(s,0,0):(d(),s=i.getImageData(0,0,a.size*r,a.size*r)):(this.clear(),d()):this.clear(),i.lineCap=a.lineCap,e="function"===typeof a.barColor?a.barColor(t):a.barColor,n(e,a.lineWidth,t/100)}.bind(this),this.animate=function(t,s){var e=Date.now();a.onStart(t,s);var i=function(){var r=Math.min(Date.now()-e,a.animate.duration),l=a.easing(this,r,t,s-t,a.animate.duration);this.draw(l),a.onStep(t,s,l),r>=a.animate.duration?a.onStop(t,s):c(i)}.bind(this);c(i)}.bind(this)},a=function(a,e){var i={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(t,a,s,e,i){return a/=i/2,a<1?e/2*a*a+s:-e/2*(--a*(a-2)-1)+s},onStart:function(t,a){},onStep:function(t,a,s){},onStop:function(t,a){}};if("undefined"!==typeof t)i.renderer=t;else{if("undefined"===typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");i.renderer=SVGRenderer}var r={},l=0,n=function(){for(var t in this.el=a,this.options=r,i)i.hasOwnProperty(t)&&(r[t]=e&&"undefined"!==typeof e[t]?e[t]:i[t],"function"===typeof r[t]&&(r[t]=r[t].bind(this)));"string"===typeof r.easing&&"undefined"!==typeof s&&s.isFunction(s.easing[r.easing])?r.easing=s.easing[r.easing]:r.easing=i.easing,"number"===typeof r.animate&&(r.animate={duration:r.animate,enabled:!0}),"boolean"!==typeof r.animate||r.animate||(r.animate={duration:1e3,enabled:r.animate}),this.renderer=new r.renderer(a,r),this.renderer.draw(l),a.dataset&&a.dataset.percent?this.update(parseFloat(a.dataset.percent)):a.getAttribute&&a.getAttribute("data-percent")&&this.update(parseFloat(a.getAttribute("data-percent")))}.bind(this);this.update=function(t){return t=parseFloat(t),r.animate.enabled?this.renderer.animate(l,t):this.renderer.draw(t),l=t,this}.bind(this),this.disableAnimation=function(){return r.animate.enabled=!1,this},this.enableAnimation=function(){return r.animate.enabled=!0,this},n()};return a})}).call(this,s("1157"))}}]);