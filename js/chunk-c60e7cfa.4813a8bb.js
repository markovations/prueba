(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c60e7cfa"],{"0455":function(t,s,a){},"0a63":function(t,s,a){var i,e,o;
/*!
 * jQCloud 2.0.3
 * Copyright 2011 Luca Ongaro (http://www.lucaongaro.eu)
 * Copyright 2013 Daniel White (http://www.developerdan.com)
 * Copyright 2014-2017 Damien "Mistic" Sorel (http://www.strangeplanet.fr)
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */
/*!
 * jQCloud 2.0.3
 * Copyright 2011 Luca Ongaro (http://www.lucaongaro.eu)
 * Copyright 2013 Daniel White (http://www.developerdan.com)
 * Copyright 2014-2017 Damien "Mistic" Sorel (http://www.strangeplanet.fr)
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */
(function(r,l){e=[a("1157")],i=l,o="function"===typeof i?i.apply(s,e):i,void 0===o||(t.exports=o)})(0,function(t){"use strict";var s=function(s,a,i){this.$element=t(s),this.word_array=a||[],this.options=i,this.sizeGenerator=null,this.colorGenerator=null,this.data={placed_words:[],timeouts:{},namespace:null,step:null,angle:null,aspect_ratio:null,max_weight:null,min_weight:null,sizes:[],colors:[]},this.initialize()};function a(t,s,a){var i={pid:null,last:0};return function(){var e=(new Date).getTime()-i.last,o=arguments,r=this;function l(){return i.last=(new Date).getTime(),t.apply(a||r,Array.prototype.slice.call(o))}if(e>s)return l();clearTimeout(i.pid),i.pid=setTimeout(l,s-e)}}s.DEFAULTS={width:100,height:100,center:{x:.5,y:.5},steps:10,delay:null,shape:"elliptic",classPattern:"w{n}",encodeURI:!0,removeOverflowing:!0,afterCloudRender:null,autoResize:!1,colors:null,fontSize:null,template:null},s.prototype={initialize:function(){if(this.options.width?this.$element.width(this.options.width):this.options.width=this.$element.width(),this.options.height?this.$element.height(this.options.height):this.options.height=this.$element.height(),this.options=t.extend(!0,{},s.DEFAULTS,this.options),null===this.options.delay&&(this.options.delay=this.word_array.length>50?10:0),this.options.center.x>1&&(this.options.center.x=this.options.center.x/this.options.width,this.options.center.y=this.options.center.y/this.options.height),"function"==typeof this.options.colors)this.colorGenerator=this.options.colors;else if(t.isArray(this.options.colors)){var i=this.options.colors.length;if(i>0){if(i<this.options.steps)for(var e=i;e<this.options.steps;e++)this.options.colors[e]=this.options.colors[i-1];this.colorGenerator=function(t){return this.options.colors[this.options.steps-t]}}}if("function"==typeof this.options.fontSize)this.sizeGenerator=this.options.fontSize;else if(t.isPlainObject(this.options.fontSize))this.sizeGenerator=function(t,s,a){var i=t*this.options.fontSize.from,e=t*this.options.fontSize.to;return Math.round(e+1*(i-e)/(this.options.steps-1)*(a-1))+"px"};else if(t.isArray(this.options.fontSize)){var o=this.options.fontSize.length;if(o>0){if(o<this.options.steps)for(var r=o;r<this.options.steps;r++)this.options.fontSize[r]=this.options.fontSize[o-1];this.sizeGenerator=function(t,s,a){return this.options.fontSize[this.options.steps-a]}}}this.data.angle=6.28*Math.random(),this.data.step="rectangular"===this.options.shape?18:2,this.data.aspect_ratio=this.options.width/this.options.height,this.clearTimeouts(),this.data.namespace=(this.$element.attr("id")||Math.floor(1e6*Math.random()).toString(36))+"_word_",this.$element.addClass("jqcloud"),"static"===this.$element.css("position")&&this.$element.css("position","relative"),this.createTimeout(t.proxy(this.drawWordCloud,this),10),this.options.autoResize&&t(window).on("resize."+this.data.namespace,a(this.resize,50,this))},createTimeout:function(s,a){var i=setTimeout(t.proxy(function(){delete this.data.timeouts[i],s()},this),a);this.data.timeouts[i]=!0},clearTimeouts:function(){t.each(this.data.timeouts,function(t){clearTimeout(t)}),this.data.timeouts={}},overlapping:function(t,s){return Math.abs(2*t.left+t.width-2*s.left-s.width)<t.width+s.width&&Math.abs(2*t.top+t.height-2*s.top-s.height)<t.height+s.height},hitTest:function(t){for(var s=0,a=this.data.placed_words.length;s<a;s++)if(this.overlapping(t,this.data.placed_words[s]))return!0;return!1},drawWordCloud:function(){var t,s;if(this.$element.children('[id^="'+this.data.namespace+'"]').remove(),0!==this.word_array.length){for(t=0,s=this.word_array.length;t<s;t++)this.word_array[t].weight=parseFloat(this.word_array[t].weight,10);if(this.word_array.sort(function(t,s){return s.weight-t.weight}),this.data.max_weight=this.word_array[0].weight,this.data.min_weight=this.word_array[this.word_array.length-1].weight,this.data.colors=[],this.colorGenerator)for(t=0;t<this.options.steps;t++)this.data.colors.push(this.colorGenerator(t+1));if(this.data.sizes=[],this.sizeGenerator)for(t=0;t<this.options.steps;t++)this.data.sizes.push(this.sizeGenerator(this.options.width,this.options.height,t+1));if(this.options.delay>0)this.drawOneWordDelayed();else{for(t=0,s=this.word_array.length;t<s;t++)this.drawOneWord(t,this.word_array[t]);"function"===typeof this.options.afterCloudRender&&this.options.afterCloudRender.call(this.$element)}}},drawOneWord:function(s,a){var i,e,o,r=this.data.namespace+s,l=this.data.angle,n=0,h=0,d=0,c=Math.floor(this.options.steps/2);a.attr=t.extend({},a.html,{id:r}),this.data.max_weight!=this.data.min_weight&&(c=Math.round(1*(a.weight-this.data.min_weight)*(this.options.steps-1)/(this.data.max_weight-this.data.min_weight))+1),i=t("<span>").attr(a.attr),i.addClass("jqcloud-word"),this.options.classPattern&&i.addClass(this.options.classPattern.replace("{n}",c)),this.data.colors.length&&i.css("color",this.data.colors[c-1]),a.color&&i.css("color",a.color),this.data.sizes.length&&i.css("font-size",this.data.sizes[c-1]),this.options.template?i.html(this.options.template(a)):a.link?("string"===typeof a.link&&(a.link={href:a.link}),this.options.encodeURI&&(a.link.href=encodeURI(a.link.href).replace(/'/g,"%27")),i.append(t("<a>").attr(a.link).text(a.text))):i.text(a.text),a.handlers&&i.on(a.handlers),this.$element.append(i),e={width:i.outerWidth(),height:i.outerHeight()},e.left=this.options.center.x*this.options.width-e.width/2,e.top=this.options.center.y*this.options.height-e.height/2,o=i[0].style,o.position="absolute",o.left=e.left+"px",o.top=e.top+"px";while(this.hitTest(e)){if("rectangular"===this.options.shape)switch(h++,h*this.data.step>(1+Math.floor(d/2))*this.data.step*(d%4%2===0?1:this.data.aspect_ratio)&&(h=0,d++),d%4){case 1:e.left+=this.data.step*this.data.aspect_ratio+2*Math.random();break;case 2:e.top-=this.data.step+2*Math.random();break;case 3:e.left-=this.data.step*this.data.aspect_ratio+2*Math.random();break;case 0:e.top+=this.data.step+2*Math.random();break}else n+=this.data.step,l+=(s%2===0?1:-1)*this.data.step,e.left=this.options.center.x*this.options.width-e.width/2+n*Math.cos(l)*this.data.aspect_ratio,e.top=this.options.center.y*this.options.height+n*Math.sin(l)-e.height/2;o.left=e.left+"px",o.top=e.top+"px"}this.options.removeOverflowing&&(e.left<0||e.top<0||e.left+e.width>this.options.width||e.top+e.height>this.options.height)?i.remove():(this.data.placed_words.push(e),"function"===typeof a.afterWordRender&&a.afterWordRender.call(i))},drawOneWordDelayed:function(s){s=s||0,this.$element.is(":visible")?s<this.word_array.length?(this.drawOneWord(s,this.word_array[s]),this.createTimeout(t.proxy(function(){this.drawOneWordDelayed(s+1)},this),this.options.delay)):"function"==typeof this.options.afterCloudRender&&this.options.afterCloudRender.call(this.$element):this.createTimeout(t.proxy(function(){this.drawOneWordDelayed(s)},this),10)},destroy:function(){this.options.autoResize&&t(window).off("resize."+this.data.namespace),this.clearTimeouts(),this.$element.removeClass("jqcloud"),this.$element.removeData("jqcloud"),this.$element.children('[id^="'+this.data.namespace+'"]').remove()},update:function(t){this.word_array=t,this.data.placed_words=[],this.clearTimeouts(),this.drawWordCloud()},resize:function(){var t={width:this.$element.width(),height:this.$element.height()};t.width==this.options.width&&t.height==this.options.height||(this.options.width=t.width,this.options.height=t.height,this.data.aspect_ratio=this.options.width/this.options.height,this.update(this.word_array))}},t.fn.jQCloud=function(a,i){var e=arguments;return this.each(function(){var o=t(this),r=o.data("jqcloud");if(r||"destroy"!==a)if(r)"string"===typeof a&&r[a].apply(r,Array.prototype.slice.call(e,1));else{var l="object"===typeof i?i:{};o.data("jqcloud",r=new s(this,a,l))}})},t.fn.jQCloud.defaults={set:function(a){t.extend(!0,s.DEFAULTS,a)},get:function(a){var i=s.DEFAULTS;return a&&(i=i[a]),t.extend(!0,{},i)}}})},bbc8:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentWrapper",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-9"},[a("div",{staticClass:"card-columns"},[a("div",{staticClass:"card"},[a("a",{attrs:{href:"#"}},[a("img",{staticClass:"img-fluid",attrs:{src:"img/bg1.jpg",alt:"demo"}})]),a("div",{staticClass:"card-body"},[a("p",{staticClass:"d-flex"},[a("span",[a("small",{staticClass:"mr-1"},[t._v("By\n                                    "),a("a",{staticClass:"ml-1",attrs:{href:"#"}},[t._v("Erica Castro")])]),a("small",{staticClass:"mr-1"},[t._v("May 03, 2015")])]),a("span",{staticClass:"ml-auto"},[a("small",[a("strong",[t._v("56")]),a("span",[t._v("Comments")])])])]),a("h4",[a("a",{attrs:{href:"#"}},[t._v("Trip down the river")])]),a("p",[t._v("Aenean in sollicitudin velit. Nam sem magna, tristique non facilisis a, porta ut elit. Aliquam luctus nulla in justo euismod blandit. Aliquam condimentum enim a risus cursus blandit.")])])]),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body bg-primary"},[a("h3",{staticClass:"my-3"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")])]),a("div",{staticClass:"card-body"},[a("p",{staticClass:"d-flex"},[a("span",[a("small",{staticClass:"mr-1"},[t._v("By\n                                    "),a("a",{staticClass:"ml-1",attrs:{href:"#"}},[t._v("Erica Castro")])]),a("small",{staticClass:"mr-1"},[t._v("May 03, 2015")])]),a("span",{staticClass:"ml-auto"},[a("small",[a("strong",[t._v("56")]),a("span",[t._v("Comments")])])])])])]),a("div",{staticClass:"card"},[a("a",{attrs:{href:"#"}},[a("img",{staticClass:"img-fluid",attrs:{src:"img/bg10.jpg",alt:"demo"}})]),a("div",{staticClass:"card-body"},[a("p",{staticClass:"d-flex"},[a("span",[a("small",{staticClass:"mr-1"},[t._v("By\n                                    "),a("a",{staticClass:"ml-1",attrs:{href:"#"}},[t._v("Erin Clark")])]),a("small",{staticClass:"mr-1"},[t._v("Apr 13, 2015")])]),a("span",{staticClass:"ml-auto"},[a("small",[a("strong",[t._v("1000")]),a("span",[t._v("Comments")])])])]),a("h4",[a("a",{attrs:{href:"#"}},[t._v("New camera")])]),a("p",[t._v("Nullam posuere euismod volutpat. Quisque in ligula eget libero tristique varius sed euismod dolor. Sed ultrices, diam varius pellentesque porta, nulla neque auctor elit, quis tempus orci massa eget odio. Duis eleifend elementum\n                            commodo. Donec volutpat tristique laoreet. Cras vitae turpis enim, eget malesuada erat. Suspendisse quam leo, gravida a ullamcorper a, interdum id odio. Nullam eu lacus in nibh rutrum ornare at eget tellus.")])])]),a("div",{staticClass:"card"},[a("a",{attrs:{href:"#"}},[a("img",{staticClass:"img-fluid",attrs:{src:"img/bg2.jpg",alt:"demo"}})]),a("div",{staticClass:"card-body"},[a("p",{staticClass:"d-flex"},[a("span",[a("small",{staticClass:"mr-1"},[t._v("By\n                                    "),a("a",{staticClass:"ml-1",attrs:{href:"#"}},[t._v("Erica Castro")])]),a("small",{staticClass:"mr-1"},[t._v("May 03, 2015")])]),a("span",{staticClass:"ml-auto"},[a("small",[a("strong",[t._v("56")]),a("span",[t._v("Comments")])])])]),a("h4",[a("a",{attrs:{href:"#"}},[t._v("Reviewing latests phones")])]),a("p",[t._v("Aenean in sollicitudin velit. Nam sem magna, tristique non facilisis a, porta ut elit. Aliquam luctus nulla in justo euismod blandit. Aliquam condimentum enim a risus cursus blandit.")])])]),a("div",{staticClass:"card"},[a("a",{attrs:{href:"#"}},[a("img",{staticClass:"img-fluid",attrs:{src:"img/bg8.jpg",alt:"demo"}})]),a("div",{staticClass:"card-body"},[a("p",{staticClass:"d-flex"},[a("span",[a("small",{staticClass:"mr-1"},[t._v("By\n                                    "),a("a",{staticClass:"ml-1",attrs:{href:"#"}},[t._v("Allen Stephens")])]),a("small",{staticClass:"mr-1"},[t._v("May 03, 2015")])]),a("span",{staticClass:"ml-auto"},[a("small",[a("strong",[t._v("5600")]),a("span",[t._v("Comments")])])])]),a("h4",[a("a",{attrs:{href:"#"}},[t._v("Workspace showcase")])]),a("p",[t._v("Aenean iaculis diam lectus. Morbi quis purus velit. Maecenas tincidunt tempus sapien id ultrices. Vivamus fermentum libero vel felis aliquet interdum.")])])]),a("div",{staticClass:"card"},[a("a",{attrs:{href:"#"}},[a("img",{staticClass:"img-fluid",attrs:{src:"img/bg3.jpg",alt:"demo"}})]),a("div",{staticClass:"card-body"},[a("p",{staticClass:"d-flex"},[a("span",[a("small",{staticClass:"mr-1"},[t._v("By\n                                    "),a("a",{staticClass:"ml-1",attrs:{href:"#"}},[t._v("Erica Castro")])]),a("small",{staticClass:"mr-1"},[t._v("May 03, 2015")])]),a("span",{staticClass:"ml-auto"},[a("small",[a("strong",[t._v("56")]),a("span",[t._v("Comments")])])])]),a("h4",[a("a",{attrs:{href:"#"}},[t._v("Incredible panoramic")])]),a("p",[t._v("Aenean in sollicitudin velit. Nam sem magna, tristique non facilisis a, porta ut elit. Aliquam luctus nulla in justo euismod blandit. Aliquam condimentum enim a risus cursus blandit.")])])]),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body bg-purple"},[a("h3",{staticClass:"my-3"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")])]),a("div",{staticClass:"card-body"},[a("p",{staticClass:"d-flex m-0"},[a("span",[a("small",{staticClass:"mr-1"},[t._v("By\n                                    "),a("a",{staticClass:"ml-1",attrs:{href:"#"}},[t._v("Ava Chavez")])]),a("small",{staticClass:"mr-1"},[t._v("May 03, 2015")])]),a("span",{staticClass:"ml-auto"},[a("small",[a("strong",[t._v("999")]),a("span",[t._v("Comments")])])])])])]),a("div",{staticClass:"card"},[a("a",{attrs:{href:"#"}},[a("img",{staticClass:"img-fluid",attrs:{src:"img/bg4.jpg",alt:"demo"}})]),a("div",{staticClass:"card-body"},[a("p",{staticClass:"d-flex"},[a("span",[a("small",{staticClass:"mr-1"},[t._v("By\n                                    "),a("a",{staticClass:"ml-1",attrs:{href:"#"}},[t._v("Danny Ford")])]),a("small",{staticClass:"mr-1"},[t._v("May 03, 2015")])]),a("span",{staticClass:"ml-auto"},[a("small",[a("strong",[t._v("1000")]),a("span",[t._v("Comments")])])])]),a("h4",[a("a",{attrs:{href:"#"}},[t._v("Sunset in the forest")])])])]),a("div",{staticClass:"card"},[a("a",{attrs:{href:"#"}},[a("img",{staticClass:"img-fluid",attrs:{src:"img/bg5.jpg",alt:"demo"}})]),a("div",{staticClass:"card-body"},[a("p",{staticClass:"d-flex"},[a("span",[a("small",{staticClass:"mr-1"},[t._v("By\n                                    "),a("a",{staticClass:"ml-1",attrs:{href:"#"}},[t._v("Danny Ford")])]),a("small",{staticClass:"mr-1"},[t._v("May 03, 2015")])]),a("span",{staticClass:"ml-auto"},[a("small",[a("strong",[t._v("1000")]),a("span",[t._v("Comments")])])])]),a("h4",[a("a",{attrs:{href:"#"}},[t._v("Tech review")])])])])])]),a("div",{staticClass:"col-xl-3"},[a("div",{staticClass:"card card-default"},[a("div",{staticClass:"card-header"},[t._v("Search")]),a("div",{staticClass:"card-body"},[a("form",{staticClass:"form-horizontal"},[a("div",{staticClass:"input-group"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search for..."}}),a("span",{staticClass:"input-group-btn"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"}},[a("em",{staticClass:"fa fa-search"})])])])])])]),a("div",{staticClass:"card card-default"},[a("div",{staticClass:"card-header"},[t._v("Categories")]),a("div",{staticClass:"card-body"},[a("ul",{staticClass:"list-unstyled"},[a("li",[a("a",{attrs:{href:"#"}},[a("em",{staticClass:"fa fa-angle-right fa-fw"}),t._v("Smartphones")])]),a("li",[a("a",{attrs:{href:"#"}},[a("em",{staticClass:"fa fa-angle-right fa-fw"}),t._v("Mobiles")])]),a("li",[a("a",{attrs:{href:"#"}},[a("em",{staticClass:"fa fa-angle-right fa-fw"}),t._v("Tech")])]),a("li",[a("a",{attrs:{href:"#"}},[a("em",{staticClass:"fa fa-angle-right fa-fw"}),t._v("Inpiration")])]),a("li",[a("a",{attrs:{href:"#"}},[a("em",{staticClass:"fa fa-angle-right fa-fw"}),t._v("Workspace")])])])])]),a("div",{staticClass:"card card-default"},[a("div",{staticClass:"card-header"},[t._v("Tag Cloud")]),a("div",{staticClass:"card-body"},[a("div",{ref:"jqcloud",staticClass:"mw-100"})])]),a("div",{staticClass:"card card-default"},[a("div",{staticClass:"card-header"},[t._v("Ads")]),a("div",{staticClass:"card-body ie-fix-flex"},[a("a",{attrs:{href:"#"}},[a("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:"img/mockup.png",alt:"demo"}})])])])])])])},e=[],o=a("e8fe"),r=o["a"],l=a("2877"),n=Object(l["a"])(r,i,e,!1,null,null,null);s["default"]=n.exports},e8fe:function(t,s,a){"use strict";(function(t){a("551c"),a("8a81"),a("ffc1"),a("6762"),a("0455"),a("0a63");s["a"]={data:function(){return{word_array:[{text:"Lorem",weight:13},{text:"Ipsum",weight:10.5},{text:"Dolor",weight:9.4},{text:"Sit",weight:8},{text:"Amet",weight:6.2},{text:"Consectetur",weight:5},{text:"Adipiscing",weight:5},{text:"Sit",weight:8},{text:"Amet",weight:6.2},{text:"Consectetur",weight:5},{text:"Adipiscing",weight:5}]}},mounted:function(){t(this.$refs.jqcloud).jQCloud(this.word_array,{width:240,height:200,steps:7})}}}).call(this,a("1157"))}}]);