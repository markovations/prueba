(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77b149b5"],{"3a79":function(a,s,e){(function(a){
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function(a){a.fn.extend({slimScroll:function(s){var e={width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},i=a.extend(e,s);return this.each(function(){var e,r,l,n,c,o,d,u,f="<div></div>",m=30,p=!1,v=a(this);if(v.parent().hasClass(i.wrapperClass)){var h=v.scrollTop();if(w=v.siblings("."+i.barClass),x=v.siblings("."+i.railClass),E(),a.isPlainObject(s)){if("height"in s&&"auto"==s.height){v.parent().css("height","auto"),v.css("height","auto");var C=v.parent().parent().height();v.parent().css("height",C),v.css("height",C)}else if("height"in s){var g=s.height;v.parent().css("height",g),v.css("height",g)}if("scrollTo"in s)h=parseInt(i.scrollTo);else if("scrollBy"in s)h+=parseInt(i.scrollBy);else if("destroy"in s)return w.remove(),x.remove(),void v.unwrap();k(h,!1,!0)}}else if(!(a.isPlainObject(s)&&"destroy"in s)){i.height="auto"==i.height?v.parent().height():i.height;var b=a(f).addClass(i.wrapperClass).css({position:"relative",overflow:"hidden",width:i.width,height:i.height});v.css({overflow:"hidden",width:i.width,height:i.height});var x=a(f).addClass(i.railClass).css({width:i.size,height:"100%",position:"absolute",top:0,display:i.alwaysVisible&&i.railVisible?"block":"none","border-radius":i.railBorderRadius,background:i.railColor,opacity:i.railOpacity,zIndex:90}),w=a(f).addClass(i.barClass).css({background:i.color,width:i.size,position:"absolute",top:0,opacity:i.opacity,display:i.alwaysVisible?"block":"none","border-radius":i.borderRadius,BorderRadius:i.borderRadius,MozBorderRadius:i.borderRadius,WebkitBorderRadius:i.borderRadius,zIndex:99}),y="right"==i.position?{right:i.distance}:{left:i.distance};x.css(y),w.css(y),v.wrap(b),v.parent().append(w),v.parent().append(x),i.railDraggable&&w.bind("mousedown",function(s){var e=a(document);return l=!0,t=parseFloat(w.css("top")),pageY=s.pageY,e.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY,w.css("top",currTop),k(0,w.position().top,!1)}),e.bind("mouseup.slimscroll",function(t){l=!1,R(),e.unbind(".slimscroll")}),!1}).bind("selectstart.slimscroll",function(t){return t.stopPropagation(),t.preventDefault(),!1}),x.hover(function(){I()},function(){R()}),w.hover(function(){r=!0},function(){r=!1}),v.hover(function(){e=!0,I(),R()},function(){e=!1,R()}),v.bind("touchstart",function(t,a){t.originalEvent.touches.length&&(c=t.originalEvent.touches[0].pageY)}),v.bind("touchmove",function(t){if(p||t.originalEvent.preventDefault(),t.originalEvent.touches.length){var a=(c-t.originalEvent.touches[0].pageY)/i.touchScrollStep;k(a,!0),c=t.originalEvent.touches[0].pageY}}),E(),"bottom"===i.start?(w.css({top:v.outerHeight()-w.outerHeight()}),k(0,!0)):"top"!==i.start&&(k(a(i.start).position().top,null,!0),i.alwaysVisible||w.hide()),S(this)}function _(t){if(e){t=t||window.event;var s=0;t.wheelDelta&&(s=-t.wheelDelta/120),t.detail&&(s=t.detail/3);var r=t.target||t.srcTarget||t.srcElement;a(r).closest("."+i.wrapperClass).is(v.parent())&&k(s,!0),t.preventDefault&&!p&&t.preventDefault(),p||(t.returnValue=!1)}}function k(t,a,s){p=!1;var e=t,r=v.outerHeight()-w.outerHeight();if(a&&(e=parseInt(w.css("top"))+t*parseInt(i.wheelStep)/100*w.outerHeight(),e=Math.min(Math.max(e,0),r),e=t>0?Math.ceil(e):Math.floor(e),w.css({top:e+"px"})),d=parseInt(w.css("top"))/(v.outerHeight()-w.outerHeight()),e=d*(v[0].scrollHeight-v.outerHeight()),s){e=t;var l=e/v[0].scrollHeight*v.outerHeight();l=Math.min(Math.max(l,0),r),w.css({top:l+"px"})}v.scrollTop(e),v.trigger("slimscrolling",~~e),I(),R()}function S(t){window.addEventListener?(t.addEventListener("DOMMouseScroll",_,!1),t.addEventListener("mousewheel",_,!1)):document.attachEvent("onmousewheel",_)}function E(){o=Math.max(v.outerHeight()/v[0].scrollHeight*v.outerHeight(),m),w.css({height:o+"px"});var t=o==v.outerHeight()?"none":"block";w.css({display:t})}function I(){if(E(),clearTimeout(n),d==~~d){if(p=i.allowPageScroll,u!=d){var t=0==~~d?"top":"bottom";v.trigger("slimscroll",t)}}else p=!1;u=d,o>=v.outerHeight()?p=!0:(w.stop(!0,!0).fadeIn("fast"),i.railVisible&&x.stop(!0,!0).fadeIn("fast"))}function R(){i.alwaysVisible||(n=setTimeout(function(){i.disableFadeOut&&e||r||l||(w.fadeOut("slow"),x.fadeOut("slow"))},1e3))}}),this}}),a.fn.extend({slimscroll:a.fn.slimScroll})})(a)}).call(this,e("1157"))},"46ef":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{ref:"cardRef",staticClass:"card-tool float-right"},[t.refresh?s("em",{staticClass:"fas fa-sync",on:{click:t.handleRefresh}}):t._e(),t.dismiss?s("em",{staticClass:"fa fa-times",on:{click:t.handleDismiss}}):t._e()])},i=[];s("28a5"),s("ac6a"),s("f3e2"),s("d92a");function r(t){var a=t.parentElement;while(a&&!a.classList.contains("card"))a=a.parentElement;return a}var l={name:"CardTool",props:{refresh:Boolean,dismiss:Boolean,onRemove:{type:Function,default:function(){}},onRemoved:{type:Function,default:function(){}},onRefresh:{type:Function,default:function(){}},spinner:{type:String,default:"standard"}},methods:{handleDismiss:function(t){var a=this,s=r(this.$refs.cardRef),e=function(){s.parentNode.removeChild(s),a.onRemoved()},i=function(t,a){"onanimationend"in window?(t.addEventListener("animationend",a.bind(this)),t.className+=" animated bounceOut"):a.call(this)},l=function(){i(s,function(){e()})};this.onRemove(s,l)},handleRefresh:function(t){var a="whirl",s=r(this.$refs.cardRef),e=function(t,s){t.classList.add(a),s.forEach(function(a){t.classList.add(a)})},i=function(){s.classList.remove(a)};e(s,this.spinner.split(" ")),this.onRefresh(s,i)}}},n=l,c=s("2877"),o=Object(c["a"])(n,e,i,!1,null,null,null);a["a"]=o.exports},"5dbc":function(t,a,s){var e=s("d3f4"),i=s("8b97").set;t.exports=function(t,a,s){var r,l=a.constructor;return l!==s&&"function"==typeof l&&(r=l.prototype)!==s.prototype&&e(r)&&i&&i(t,r),t}},"6c50":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",t._b({},"div",t.$props,!1),[t._t("default")],2)},i=[],r=(s("c5f6"),s("1157")),l=s.n(r),n=(s("3a79"),{name:"Scrollable",props:{height:{type:Number,defaut:250}},mounted:function(){l()(this.$el).slimScroll({height:this.height})}}),c=n,o=s("2877"),d=Object(o["a"])(c,e,i,!1,null,null,null);a["a"]=d.exports},"8b97":function(t,a,s){var e=s("d3f4"),i=s("cb7c"),r=function(t,a){if(i(t),!e(a)&&null!==a)throw TypeError(a+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,a,e){try{e=s("9b43")(Function.call,s("11e9").f(Object.prototype,"__proto__").set,2),e(t,[]),a=!(t instanceof Array)}catch(i){a=!0}return function(t,s){return r(t,s),a?t.__proto__=s:e(t,s),t}}({},!1):void 0),check:r}},aa77:function(t,a,s){var e=s("5ca1"),i=s("be13"),r=s("79e5"),l=s("fdef"),n="["+l+"]",c="​",o=RegExp("^"+n+n+"*"),d=RegExp(n+n+"*$"),u=function(t,a,s){var i={},n=r(function(){return!!l[t]()||c[t]()!=c}),o=i[t]=n?a(f):l[t];s&&(i[s]=o),e(e.P+e.F*n,"String",i)},f=u.trim=function(t,a){return t=String(i(t)),1&a&&(t=t.replace(o,"")),2&a&&(t=t.replace(d,"")),t};t.exports=u},c5f6:function(t,a,s){"use strict";var e=s("7726"),i=s("69a8"),r=s("2d95"),l=s("5dbc"),n=s("6a99"),c=s("79e5"),o=s("9093").f,d=s("11e9").f,u=s("86cc").f,f=s("aa77").trim,m="Number",p=e[m],v=p,h=p.prototype,C=r(s("2aeb")(h))==m,g="trim"in String.prototype,b=function(t){var a=n(t,!1);if("string"==typeof a&&a.length>2){a=g?a.trim():f(a,3);var s,e,i,r=a.charCodeAt(0);if(43===r||45===r){if(s=a.charCodeAt(2),88===s||120===s)return NaN}else if(48===r){switch(a.charCodeAt(1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+a}for(var l,c=a.slice(2),o=0,d=c.length;o<d;o++)if(l=c.charCodeAt(o),l<48||l>i)return NaN;return parseInt(c,e)}}return+a};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var a=arguments.length<1?0:t,s=this;return s instanceof p&&(C?c(function(){h.valueOf.call(s)}):r(s)!=m)?l(new v(b(a)),s,p):b(a)};for(var x,w=s("9e1e")?o(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;w.length>y;y++)i(v,x=w[y])&&!i(p,x)&&u(p,x,d(v,x));p.prototype=h,h.constructor=p,s("2aba")(e,m,p)}},cb33:function(t,a,s){"use strict";var e=s("e10a"),i=s.n(e);i.a},e10a:function(t,a,s){},f4f4:function(t,a,s){(function(s){var e,i;
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
(function(s,r){e=[],i=function(){return s["EasyPieChart"]=r()}.apply(a,e),void 0===i||(t.exports=i)})(this,function(){var t=function(t,a){var s,e=document.createElement("canvas");t.appendChild(e),"object"===typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(e);var i=e.getContext("2d");e.width=e.height=a.size;var r=1;window.devicePixelRatio>1&&(r=window.devicePixelRatio,e.style.width=e.style.height=[a.size,"px"].join(""),e.width=e.height=a.size*r,i.scale(r,r)),i.translate(a.size/2,a.size/2),i.rotate((a.rotate/180-.5)*Math.PI);var l=(a.size-a.lineWidth)/2;a.scaleColor&&a.scaleLength&&(l-=a.scaleLength+2),Date.now=Date.now||function(){return+new Date};var n=function(t,a,s){s=Math.min(Math.max(-1,s||0),1);var e=s<=0;i.beginPath(),i.arc(0,0,l,0,2*Math.PI*s,e),i.strokeStyle=t,i.lineWidth=a,i.stroke()},c=function(){var t,s;i.lineWidth=1,i.fillStyle=a.scaleColor,i.save();for(var e=24;e>0;--e)e%6===0?(s=a.scaleLength,t=0):(s=.6*a.scaleLength,t=a.scaleLength-s),i.fillRect(-a.size/2+t,0,s,1),i.rotate(Math.PI/12);i.restore()},o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),d=function(){a.scaleColor&&c(),a.trackColor&&n(a.trackColor,a.trackWidth||a.lineWidth,1)};this.getCanvas=function(){return e},this.getCtx=function(){return i},this.clear=function(){i.clearRect(a.size/-2,a.size/-2,a.size,a.size)},this.draw=function(t){var e;a.scaleColor||a.trackColor?i.getImageData&&i.putImageData?s?i.putImageData(s,0,0):(d(),s=i.getImageData(0,0,a.size*r,a.size*r)):(this.clear(),d()):this.clear(),i.lineCap=a.lineCap,e="function"===typeof a.barColor?a.barColor(t):a.barColor,n(e,a.lineWidth,t/100)}.bind(this),this.animate=function(t,s){var e=Date.now();a.onStart(t,s);var i=function(){var r=Math.min(Date.now()-e,a.animate.duration),l=a.easing(this,r,t,s-t,a.animate.duration);this.draw(l),a.onStep(t,s,l),r>=a.animate.duration?a.onStop(t,s):o(i)}.bind(this);o(i)}.bind(this)},a=function(a,e){var i={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(t,a,s,e,i){return a/=i/2,a<1?e/2*a*a+s:-e/2*(--a*(a-2)-1)+s},onStart:function(t,a){},onStep:function(t,a,s){},onStop:function(t,a){}};if("undefined"!==typeof t)i.renderer=t;else{if("undefined"===typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");i.renderer=SVGRenderer}var r={},l=0,n=function(){for(var t in this.el=a,this.options=r,i)i.hasOwnProperty(t)&&(r[t]=e&&"undefined"!==typeof e[t]?e[t]:i[t],"function"===typeof r[t]&&(r[t]=r[t].bind(this)));"string"===typeof r.easing&&"undefined"!==typeof s&&s.isFunction(s.easing[r.easing])?r.easing=s.easing[r.easing]:r.easing=i.easing,"number"===typeof r.animate&&(r.animate={duration:r.animate,enabled:!0}),"boolean"!==typeof r.animate||r.animate||(r.animate={duration:1e3,enabled:r.animate}),this.renderer=new r.renderer(a,r),this.renderer.draw(l),a.dataset&&a.dataset.percent?this.update(parseFloat(a.dataset.percent)):a.getAttribute&&a.getAttribute("data-percent")&&this.update(parseFloat(a.getAttribute("data-percent")))}.bind(this);this.update=function(t){return t=parseFloat(t),r.animate.enabled?this.renderer.animate(l,t):this.renderer.draw(t),l=t,this}.bind(this),this.disableAnimation=function(){return r.animate.enabled=!1,this},this.enableAnimation=function(){return r.animate.enabled=!0,this},n()};return a})}).call(this,s("1157"))},f84a:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentWrapper",[s("div",{staticClass:"content-heading"},[s("div",[t._v("Dashboard\n            "),s("small",[t._v(t._s(t.$t("dashboard.WELCOME")))])]),s("div",{staticClass:"ml-auto"},[s("b-dropdown",{attrs:{id:"ddown1",text:t.selectedLanguage(),"no-caret":"",right:""}},[s("b-dropdown-item",{on:{click:function(a){t.changeLanguage("en")}}},[t._v("English")]),s("b-dropdown-item",{on:{click:function(a){t.changeLanguage("es")}}},[t._v("Spanish")])],1)],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-3 col-md-6"},[s("div",{staticClass:"card flex-row align-items-center align-items-stretch border-0"},[s("div",{staticClass:"col-4 d-flex align-items-center bg-primary-dark justify-content-center rounded-left"},[s("em",{staticClass:"icon-cloud-upload fa-3x"})]),s("div",{staticClass:"col-8 py-3 bg-primary rounded-right"},[s("div",{staticClass:"h2 mt-0"},[t._v("1700")]),s("div",{staticClass:"text-uppercase"},[t._v("Uploads")])])])]),s("div",{staticClass:"col-xl-3 col-md-6"},[s("div",{staticClass:"card flex-row align-items-center align-items-stretch border-0"},[s("div",{staticClass:"col-4 d-flex align-items-center bg-purple-dark justify-content-center rounded-left"},[s("em",{staticClass:"icon-globe fa-3x"})]),s("div",{staticClass:"col-8 py-3 bg-purple rounded-right"},[s("div",{staticClass:"h2 mt-0"},[t._v("700\n                        "),s("small",[t._v("GB")])]),s("div",{staticClass:"text-uppercase"},[t._v("Quota")])])])]),s("div",{staticClass:"col-xl-3 col-lg-6 col-md-12"},[s("div",{staticClass:"card flex-row align-items-center align-items-stretch border-0"},[s("div",{staticClass:"col-4 d-flex align-items-center bg-green-dark justify-content-center rounded-left"},[s("em",{staticClass:"icon-bubbles fa-3x"})]),s("div",{staticClass:"col-8 py-3 bg-green rounded-right"},[s("div",{staticClass:"h2 mt-0"},[t._v("500")]),s("div",{staticClass:"text-uppercase"},[t._v("Reviews")])])])]),s("div",{staticClass:"col-xl-3 col-lg-6 col-md-12"},[s("div",{staticClass:"card flex-row align-items-center align-items-stretch border-0"},[s("div",{staticClass:"col-4 d-flex align-items-center bg-green justify-content-center rounded-left"},[s("div",{staticClass:"text-center"},[s("Now",{staticClass:"text-sm",attrs:{format:"MMMM"}}),s("br"),s("Now",{staticClass:"h2 mt-0",attrs:{format:"D"}})],1)]),s("div",{staticClass:"col-8 py-3 rounded-right"},[s("Now",{staticClass:"text-uppercase",attrs:{format:"dddd"}}),s("br"),s("Now",{staticClass:"h2 mt-0",attrs:{format:"h:mm"}}),s("Now",{staticClass:"text-muted text-sm",attrs:{format:"a"}})],1)])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-9"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-12"},[s("div",{staticClass:"card card-default card-demo",attrs:{id:"cardChart9"}},[s("div",{staticClass:"card-header"},[s("CardTool",{attrs:{refresh:"",onRefresh:t.onRefresh}}),s("div",{staticClass:"card-title"},[t._v("Inbound visitor statistics")])],1),s("div",{staticClass:"card-body"},[s("FlotChart",{attrs:{data:t.flotData,options:t.flotOptions,height:"250px"}})],1)])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-12"},[s("div",{staticClass:"card border-0"},[s("div",{staticClass:"row row-flush"},[s("div",{staticClass:"col-lg-2 col-md-3 col-6 bg-info py-4 d-flex align-items-center justify-content-center rounded-left"},[s("em",{staticClass:"wi wi-day-sunny fa-4x"})]),s("div",{staticClass:"col-lg-2 col-md-3 col-6 py-2 br d-flex align-items-center justify-content-center"},[s("div",[s("div",{staticClass:"h1 m-0 text-bold"},[t._v("32°")]),s("div",{staticClass:"text-uppercase"},[t._v("Clear")])])]),s("div",{staticClass:"col-lg-2 col-md-3 d-none d-md-block py-2 text-center br"},[s("div",{staticClass:"text-info text-sm"},[t._v("10 AM")]),s("div",{staticClass:"text-muted text-md"},[s("em",{staticClass:"wi wi-day-cloudy"})]),s("div",{staticClass:"text-info"},[s("span",{staticClass:"text-muted"},[t._v("20%")])]),s("div",{staticClass:"text-muted"},[t._v("27°")])]),s("div",{staticClass:"col-lg-2 col-md-3 d-none d-md-block py-2 text-center br"},[s("div",{staticClass:"text-info text-sm"},[t._v("11 AM")]),s("div",{staticClass:"text-muted text-md"},[s("em",{staticClass:"wi wi-day-cloudy"})]),s("div",{staticClass:"text-info"},[s("span",{staticClass:"text-muted"},[t._v("30%")])]),s("div",{staticClass:"text-muted"},[t._v("28°")])]),s("div",{staticClass:"col-lg-2 py-2 text-center br d-none d-lg-block"},[s("div",{staticClass:"text-info text-sm"},[t._v("12 PM")]),s("div",{staticClass:"text-muted text-md"},[s("em",{staticClass:"wi wi-day-cloudy"})]),s("div",{staticClass:"text-info"},[s("span",{staticClass:"text-muted"},[t._v("20%")])]),s("div",{staticClass:"text-muted"},[t._v("30°")])]),s("div",{staticClass:"col-lg-2 py-2 text-center d-none d-lg-block"},[s("div",{staticClass:"text-info text-sm"},[t._v("1 PM")]),s("div",{staticClass:"text-muted text-md"},[s("em",{staticClass:"wi wi-day-sunny-overcast"})]),s("div",{staticClass:"text-info"},[s("span",{staticClass:"text-muted"},[t._v("0%")])]),s("div",{staticClass:"text-muted"},[t._v("30°")])])])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-4"},[s("div",{staticClass:"card border-0"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"d-flex"},[s("h3",{staticClass:"text-muted mt-0"},[t._v("300")]),s("em",{staticClass:"ml-auto text-muted fa fa-coffee fa-2x"})]),s("Sparkline",{staticClass:"pv-lg",attrs:{options:{type:"line",height:80,width:"100%",lineWidth:2,lineColor:"#7266ba",spotColor:"#888",fillColor:"transparent",minSpotColor:"#7266ba",maxSpotColor:"#7266ba",highlightLineColor:"#fff",spotRadius:3,resize:!0},values:[1,3,4,7,5,9,4,4,7,5,9,6,4]}}),s("p",[s("small",{staticClass:"text-muted"},[t._v("Actual progress")])]),s("div",{staticClass:"progress progress-xs mb-3"},[s("div",{staticClass:"progress-bar bg-info progress-bar-striped",staticStyle:{width:"80%"},attrs:{role:"progressbar","aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100"}},[s("span",{staticClass:"sr-only"},[t._v("80% Complete")])])])],1)])]),s("div",{staticClass:"col-xl-8"},[s("div",{staticClass:"card card-default"},[s("div",{staticClass:"card-header"},[s("div",{staticClass:"px-2 float-right badge badge-danger"},[t._v("5")]),s("div",{staticClass:"px-2 mr-2 float-right badge badge-success"},[t._v("12")]),s("div",{staticClass:"card-title"},[t._v("Team messages")])]),s("Scrollable",{attrs:{height:180}},[s("div",{staticClass:"list-group"},[s("div",{staticClass:"list-group-item list-group-item-action"},[s("div",{staticClass:"media"},[s("img",{staticClass:"align-self-start mx-2 circle thumb32",attrs:{src:"img/user/02.jpg",alt:"Image"}}),s("div",{staticClass:"media-body text-truncate"},[s("p",{staticClass:"mb-1"},[s("strong",{staticClass:"text-primary"},[s("span",{staticClass:"circle bg-success circle-lg text-left"}),s("span",[t._v("Catherine Ellis")])])]),s("p",{staticClass:"mb-1 text-sm"},[t._v("Cras sit amet nibh libero, in gravida nulla. Nulla...")])]),s("div",{staticClass:"ml-auto"},[s("small",{staticClass:"text-muted ml-2"},[t._v("2h")])])])]),s("div",{staticClass:"list-group-item list-group-item-action"},[s("div",{staticClass:"media"},[s("img",{staticClass:"align-self-start mx-2 circle thumb32",attrs:{src:"img/user/03.jpg",alt:"Image"}}),s("div",{staticClass:"media-body text-truncate"},[s("p",{staticClass:"mb-1"},[s("strong",{staticClass:"text-primary"},[s("span",{staticClass:"circle bg-success circle-lg text-left"}),s("span",[t._v("Jessica Silva")])])]),s("p",{staticClass:"mb-1 text-sm"},[t._v("Cras sit amet nibh libero, in gravida nulla. Nulla...")])]),s("div",{staticClass:"ml-auto"},[s("small",{staticClass:"text-muted ml-2"},[t._v("3h")])])])]),s("div",{staticClass:"list-group-item list-group-item-action"},[s("div",{staticClass:"media"},[s("img",{staticClass:"align-self-start mx-2 circle thumb32",attrs:{src:"img/user/09.jpg",alt:"Image"}}),s("div",{staticClass:"media-body text-truncate"},[s("p",{staticClass:"mb-1"},[s("strong",{staticClass:"text-primary"},[s("span",{staticClass:"circle bg-danger circle-lg text-left"}),s("span",[t._v("Jessie Wells")])])]),s("p",{staticClass:"mb-1 text-sm"},[t._v("Cras sit amet nibh libero, in gravida nulla. Nulla...")])]),s("div",{staticClass:"ml-auto"},[s("small",{staticClass:"text-muted ml-2"},[t._v("4h")])])])]),s("div",{staticClass:"list-group-item list-group-item-action"},[s("div",{staticClass:"media"},[s("img",{staticClass:"align-self-start mx-2 circle thumb32",attrs:{src:"img/user/12.jpg",alt:"Image"}}),s("div",{staticClass:"media-body text-truncate"},[s("p",{staticClass:"mb-1"},[s("strong",{staticClass:"text-primary"},[s("span",{staticClass:"circle bg-danger circle-lg text-left"}),s("span",[t._v("Rosa Burke")])])]),s("p",{staticClass:"mb-1 text-sm"},[t._v("Cras sit amet nibh libero, in gravida nulla. Nulla...")])]),s("div",{staticClass:"ml-auto"},[s("small",{staticClass:"text-muted ml-2"},[t._v(" 1d")])])])]),s("div",{staticClass:"list-group-item list-group-item-action"},[s("div",{staticClass:"media"},[s("img",{staticClass:"align-self-start mx-2 circle thumb32",attrs:{src:"img/user/10.jpg",alt:"Image"}}),s("div",{staticClass:"media-body text-truncate"},[s("p",{staticClass:"mb-1"},[s("strong",{staticClass:"text-primary"},[s("span",{staticClass:"circle bg-danger circle-lg text-left"}),s("span",[t._v("Michelle Lane")])])]),s("p",{staticClass:"mb-1 text-sm"},[t._v("Mauris eleifend, libero nec cursus lacinia...")])]),s("div",{staticClass:"ml-auto"},[s("small",{staticClass:"text-muted ml-2"},[t._v(" 2d")])])])])])]),s("div",{staticClass:"card-footer"},[s("div",{staticClass:"input-group"},[s("input",{staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"Search message .."}}),s("span",{staticClass:"input-group-btn"},[s("button",{staticClass:"btn btn-secondary btn-sm",attrs:{type:"submit"}},[s("i",{staticClass:"fa fa-search"})])])])])],1)])])]),s("aside",{staticClass:"col-xl-3"},[s("div",{staticClass:"card card-default"},[s("div",{staticClass:"card-body"},[s("a",{staticClass:"text-muted float-right",attrs:{href:"#"}},[s("em",{staticClass:"fa fa-arrow-right"})]),s("div",{staticClass:"text-info"},[t._v("Average Monthly Uploads")]),s("div",{staticClass:"text-center py-4"},[s("div",{ref:"easypie",staticClass:"easypie-chart easypie-chart-lg",attrs:{"data-percent":"70"}},[s("span",[t._v("70%")])])]),s("Sparkline",{staticClass:"text-center",attrs:{options:{barColor:"#23b7e5",height:30,barWidth:5,barSpacing:2},values:[5,4,8,7,8,5,4,6,5,5,9,4,6,3,4,7,5,4,7]}})],1),s("div",{staticClass:"card-footer"},[s("p",{staticClass:"text-muted"},[s("em",{staticClass:"fa fa-upload fa-fw"}),s("span",[t._v("This Month")]),s("span",{staticClass:"text-dark"},[t._v("1000 Gb")])])])]),s("div",{staticClass:"card card-default"},[s("div",{staticClass:"card-header"},[s("div",{staticClass:"card-title"},[t._v("Latest activities")])]),s("div",{staticClass:"list-group"},[s("div",{staticClass:"list-group-item"},[s("div",{staticClass:"media"},[s("div",{staticClass:"align-self-start mr-2"},[s("span",{staticClass:"fa-stack"},[s("em",{staticClass:"fa fa-circle fa-stack-2x text-purple"}),s("em",{staticClass:"fas fa-cloud-upload-alt fa-stack-1x fa-inverse text-white"})])]),s("div",{staticClass:"media-body text-truncate"},[s("p",{staticClass:"mb-1"},[s("a",{staticClass:"text-purple m-0",attrs:{href:"#"}},[t._v("NEW FILE")])]),s("p",{staticClass:"m-0"},[s("small",[s("a",{attrs:{href:"#"}},[t._v("Bootstrap.xls")])])])]),s("div",{staticClass:"ml-auto"},[s("small",{staticClass:"text-muted ml-2"},[t._v("15m")])])])]),s("div",{staticClass:"list-group-item"},[s("div",{staticClass:"media"},[s("div",{staticClass:"align-self-start mr-2"},[s("span",{staticClass:"fa-stack"},[s("em",{staticClass:"fa fa-circle fa-stack-2x text-info"}),s("em",{staticClass:"far fa-file-alt fa-stack-1x fa-inverse text-white"})])]),s("div",{staticClass:"media-body text-truncate"},[s("p",{staticClass:"mb-1"},[s("a",{staticClass:"text-info m-0",attrs:{href:"#"}},[t._v("NEW DOCUMENT")])]),s("p",{staticClass:"m-0"},[s("small",[s("a",{attrs:{href:"#"}},[t._v("Bootstrap.doc")])])])]),s("div",{staticClass:"ml-auto"},[s("small",{staticClass:"text-muted ml-2"},[t._v("2h")])])])]),s("div",{staticClass:"list-group-item"},[s("div",{staticClass:"media"},[s("div",{staticClass:"align-self-start mr-2"},[s("span",{staticClass:"fa-stack"},[s("em",{staticClass:"fa fa-circle fa-stack-2x text-danger"}),s("em",{staticClass:"fa fa-exclamation fa-stack-1x fa-inverse text-white"})])]),s("div",{staticClass:"media-body text-truncate"},[s("p",{staticClass:"mb-1"},[s("a",{staticClass:"text-danger m-0",attrs:{href:"#"}},[t._v("BROADCAST")])]),s("p",{staticClass:"m-0"},[s("a",{attrs:{href:"#"}},[t._v("Read")])])]),s("div",{staticClass:"ml-auto"},[s("small",{staticClass:"text-muted ml-2"},[t._v("5h")])])])]),s("div",{staticClass:"list-group-item"},[s("div",{staticClass:"media"},[s("div",{staticClass:"align-self-start mr-2"},[s("span",{staticClass:"fa-stack"},[s("em",{staticClass:"fa fa-circle fa-stack-2x text-success"}),s("em",{staticClass:"far fa-clock fa-stack-1x fa-inverse text-white"})])]),s("div",{staticClass:"media-body text-truncate"},[s("p",{staticClass:"mb-1"},[s("a",{staticClass:"text-success m-0",attrs:{href:"#"}},[t._v("NEW MEETING")])]),s("p",{staticClass:"m-0"},[s("small",[t._v("On\n                           "),s("em",[t._v("10/12/2015 09:00 am")])])])]),s("div",{staticClass:"ml-auto"},[s("small",{staticClass:"text-muted ml-2"},[t._v("15h")])])])]),s("div",{staticClass:"list-group-item"},[s("div",{staticClass:"media"},[s("div",{staticClass:"align-self-start mr-2"},[s("span",{staticClass:"fa-stack"},[s("em",{staticClass:"fa fa-circle fa-stack-2x text-warning"}),s("em",{staticClass:"fa fa-tasks fa-stack-1x fa-inverse text-white"})])]),s("div",{staticClass:"media-body text-truncate"},[s("p",{staticClass:"mb-1"},[s("a",{staticClass:"text-warning m-0",attrs:{href:"#"}},[t._v("TASKS COMPLETION")])]),s("div",{staticClass:"progress progress-xs m-0"},[s("div",{staticClass:"progress-bar bg-warning progress-bar-striped",staticStyle:{width:"22%"},attrs:{role:"progressbar","aria-valuenow":"22","aria-valuemin":"0","aria-valuemax":"100"}},[s("span",{staticClass:"sr-only"},[t._v("22% Complete")])])])]),s("div",{staticClass:"ml-auto"},[s("small",{staticClass:"text-muted ml-2"},[t._v("1w")])])])])]),s("div",{staticClass:"card-footer"},[s("a",{staticClass:"text-sm",attrs:{href:"#"}},[t._v("Load more")])])])])])])},i=[],r=s("f4f4"),l=s.n(r),n=s("46ef"),c=s("473d"),o=s("6c50"),d=s("7992"),u=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",t._b({},"div",t.$props,!1),[t._v("\n    "+t._s(t.currentTime)+"\n")])},f=[],m=s("c1df"),p=s.n(m),v={name:"Now",props:{format:String},data:function(){return{currentTime:null,interval:""}},mounted:function(){this.updateTime(),this.interval=setInterval(this.updateTime,1e3)},destroyed:function(){this.interval&&clearInterval(this.interval)},methods:{updateTime:function(){this.currentTime=p()(new Date).format(this.format)}}},h=v,C=(s("cb33"),s("2877")),g=Object(C["a"])(h,u,f,!1,null,"fe60910a",null),b=g.exports,x={name:"DashboardV1",components:{CardTool:n["a"],Sparkline:c["a"],Scrollable:o["a"],FlotChart:d["a"],Now:b},data:function(){return{flotData:[{label:"Uniques",color:"#768294",data:[["Mar",70],["Apr",85],["May",59],["Jun",93],["Jul",66],["Aug",86],["Sep",60]]},{label:"Recurrent",color:"#1f92fe",data:[["Mar",21],["Apr",12],["May",27],["Jun",24],["Jul",16],["Aug",39],["Sep",15]]}],flotOptions:{series:{lines:{show:!1},points:{show:!0,radius:4},splines:{show:!0,tension:.4,lineWidth:1,fill:.5}},grid:{borderColor:"#eee",borderWidth:1,hoverable:!0,backgroundColor:"#fcfcfc"},tooltip:!0,tooltipOpts:{content:function(t,a,s){return a+" : "+s}},xaxis:{tickColor:"#fcfcfc",mode:"categories"},yaxis:{min:0,max:150,tickColor:"#eee",tickFormatter:function(t){return t}},shadowSize:0},selectedLanguage:function(){switch(this.$i18n.i18next.language){case"es":return"Spanish";case"en":default:return"English"}}}},mounted:function(){var t={animate:{duration:800,enabled:!0},barColor:"#23b7e5",trackColor:"rgba(200,200,200,0.4)",scaleColor:!1,lineWidth:10,lineCap:"round",size:145};new l.a(this.$refs.easypie,t)},methods:{changeLanguage:function(t){this.$i18n.i18next.changeLanguage(t)},onRefresh:function(t,a){setTimeout(a,2e3)}}},w=x,y=Object(C["a"])(w,e,i,!1,null,null,null);a["default"]=y.exports},fdef:function(t,a){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);