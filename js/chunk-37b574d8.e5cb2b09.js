(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37b574d8"],{"46ef":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{ref:"cardRef",staticClass:"card-tool float-right"},[t.refresh?s("em",{staticClass:"fas fa-sync",on:{click:t.handleRefresh}}):t._e(),t.dismiss?s("em",{staticClass:"fa fa-times",on:{click:t.handleDismiss}}):t._e()])},i=[];s("28a5"),s("ac6a"),s("f3e2"),s("d92a");function d(t){var a=t.parentElement;while(a&&!a.classList.contains("card"))a=a.parentElement;return a}var c={name:"CardTool",props:{refresh:Boolean,dismiss:Boolean,onRemove:{type:Function,default:function(){}},onRemoved:{type:Function,default:function(){}},onRefresh:{type:Function,default:function(){}},spinner:{type:String,default:"standard"}},methods:{handleDismiss:function(t){var a=this,s=d(this.$refs.cardRef),e=function(){s.parentNode.removeChild(s),a.onRemoved()},i=function(t,a){"onanimationend"in window?(t.addEventListener("animationend",a.bind(this)),t.className+=" animated bounceOut"):a.call(this)},c=function(){i(s,function(){e()})};this.onRemove(s,c)},handleRefresh:function(t){var a="whirl",s=d(this.$refs.cardRef),e=function(t,s){t.classList.add(a),s.forEach(function(a){t.classList.add(a)})},i=function(){s.classList.remove(a)};e(s,this.spinner.split(" ")),this.onRefresh(s,i)}}},r=c,l=s("2877"),o=Object(l["a"])(r,e,i,!1,null,null,null);a["a"]=o.exports},"494a":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentWrapper",[s("div",{staticClass:"content-heading"},[s("div",[t._v("Cards\n            "),s("small",[t._v("Cards can contain almost any kind of element inside")])])]),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4"},[t._v("container-fluid\n                "),s("div",{staticClass:"card card-default",attrs:{id:"cardDemo1"}},[s("div",{staticClass:"card-header"},[t._v("Dismissable Card\n                        "),s("CardTool",{attrs:{dismiss:"",refresh:"",onRemove:t.onCardRemove,onRemoved:t.onCardRemoved,onRefresh:t.onCardRefresh}})],1),s("div",{staticClass:"card-body"},[s("p",[t._v("Card can be dismissed by clicking on the cross icon icon on the top right corner")])]),s("div",{staticClass:"card-footer"},[t._v("Card Footer")])])]),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"card card-default card-demo",attrs:{id:"cardDemo3"}},[s("div",{staticClass:"card-header"},[t._v("Standard Spinner\n                        "),s("CardTool",{attrs:{refresh:"",onRefresh:t.onCardRefresh}})],1),s("div",{staticClass:"card-body"},[s("p",[t._v("Click on the refresh icon to see how it triggers a refresh-event while it shows a spinner")])]),s("div",{staticClass:"card-footer"},[t._v("Card Footer")])])]),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"card card-default card-demo",attrs:{id:"cardDemo2"}},[s("div",{staticClass:"card-header"},[t._v("Custom Spinner\n                        "),s("CardTool",{attrs:{refresh:"",onRefresh:t.onCardRefresh,spinner:"traditional"}})],1),s("div",{staticClass:"card-body"},[s("p",[t._v("Click on the refresh icon to see how it triggers a refresh-event while it shows a spinner")])])])])])]),s("h4",{staticClass:"page-header"},[t._v("Card Styles")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"card text-white bg-primary mb-3"},[s("div",{staticClass:"card-header"},[t._v("Header")]),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Primary card title")]),s("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")])])])]),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"card card-default mb-3"},[s("div",{staticClass:"card-header"},[t._v("Header")]),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Card Default card title")]),s("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")])])])]),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"card text-white bg-success mb-3"},[s("div",{staticClass:"card-header"},[t._v("Header")]),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Success card title")]),s("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")])])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"card text-white bg-danger mb-3"},[s("div",{staticClass:"card-header"},[t._v("Header")]),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Danger card title")]),s("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")])])])]),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"card text-white bg-warning mb-3"},[s("div",{staticClass:"card-header"},[t._v("Header")]),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Warning card title")]),s("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")])])])]),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"card text-white bg-info mb-3"},[s("div",{staticClass:"card-header"},[t._v("Header")]),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Info card title")]),s("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")])])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"card bg-light mb-3"},[s("div",{staticClass:"card-header"},[t._v("Header")]),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Light card title")]),s("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")])])])]),s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"card text-white bg-dark mb-3"},[s("div",{staticClass:"card-header"},[t._v("Header")]),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Dark card title")]),s("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")])])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"card mb-3 border-primary"},[s("div",{staticClass:"card-header text-white bg-primary"},[t._v("Header")]),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Primary card title")]),s("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")])])])]),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"card mb-3 border-secondary"},[s("div",{staticClass:"card-header bg-secondary"},[t._v("Header")]),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Card Default card title")]),s("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")])])])]),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"card mb-3 border-success"},[s("div",{staticClass:"card-header text-white bg-success"},[t._v("Header")]),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Success card title")]),s("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")])])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"card mb-3 border-danger"},[s("div",{staticClass:"card-header text-white bg-danger"},[t._v("Header")]),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Danger card title")]),s("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")])])])]),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"card mb-3 border-warning"},[s("div",{staticClass:"card-header text-white bg-warning"},[t._v("Header")]),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Warning card title")]),s("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")])])])]),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"card mb-3 border-info"},[s("div",{staticClass:"card-header text-white bg-info"},[t._v("Header")]),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Info card title")]),s("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")])])])])]),s("h4",{staticClass:"page-header"},[t._v("Card Deck")]),s("div",{staticClass:"mb-4"},[s("div",{staticClass:"card-deck"},[s("div",{staticClass:"card card-default"},[s("div",{staticClass:"card-header"},[t._v("Demo content")]),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Card title")]),s("p",{staticClass:"card-text"},[t._v("This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.")])]),s("div",{staticClass:"card-footer"},[s("div",{staticClass:"text-sm text-muted"},[t._v("Last updated 3 mins ago")])])]),s("div",{staticClass:"card card-default"},[s("div",{staticClass:"card-header"},[t._v("Demo content")]),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Card title")]),s("p",{staticClass:"card-text"},[t._v("This card has supporting text below as a natural lead-in to additional content.")]),s("p",{staticClass:"card-text"},[t._v("This card has supporting text below as a natural lead-in to additional content.")]),s("p",{staticClass:"card-text"},[t._v("This card has supporting text below as a natural lead-in to additional content.")]),s("p",{staticClass:"card-text"},[t._v("This card has supporting text below as a natural lead-in to additional content.")])]),s("div",{staticClass:"card-footer"},[s("div",{staticClass:"text-sm text-muted"},[t._v("Last updated 3 mins ago")])])]),s("div",{staticClass:"card card-default"},[s("div",{staticClass:"card-header"},[t._v("Demo content")]),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Card title")]),s("p",{staticClass:"card-text"},[t._v("This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.")])]),s("div",{staticClass:"card-footer"},[s("div",{staticClass:"text-sm text-muted"},[t._v("Last updated 3 mins ago")])])])])]),s("h4",{staticClass:"page-header"},[t._v("Accordion")]),s("div",{attrs:{role:"tablist"}},[s("b-card",{staticClass:"card-default mb-1",attrs:{"no-body":""}},[s("b-card-header",{attrs:{role:"tab"}},[s("h4",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion1",modifiers:{accordion1:!0}}],staticClass:"mb-0"},[t._v("Collapsible Group Item #1")])]),s("b-collapse",{staticClass:"border-top",attrs:{id:"accordion1",visible:"",accordion:"my-accordion",role:"tabpanel"}},[s("b-card-body",[s("p",{staticClass:"card-text"},[t._v("\n                        I start opened because "),s("code",[t._v("visible")]),t._v(" is "),s("code",[t._v("true")])]),s("p",{staticClass:"card-text"},[t._v("\n                        "+t._s(t.text)+"\n                    ")])])],1)],1),s("b-card",{staticClass:"card-default mb-1",attrs:{"no-body":""}},[s("b-card-header",{attrs:{role:"tab"}},[s("h4",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion2",modifiers:{accordion2:!0}}],staticClass:"mb-0"},[t._v("Collapsible Group Item #2")])]),s("b-collapse",{staticClass:"border-top",attrs:{id:"accordion2",accordion:"my-accordion",role:"tabpanel"}},[s("b-card-body",[s("p",{staticClass:"card-text"},[t._v("\n                        "+t._s(t.text)+"\n                    ")])])],1)],1),s("b-card",{staticClass:"card-default mb-1",attrs:{"no-body":""}},[s("b-card-header",{attrs:{role:"tab"}},[s("h4",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion3",modifiers:{accordion3:!0}}],staticClass:"mb-0"},[t._v("Collapsible Group Item #2")])]),s("b-collapse",{staticClass:"border-top",attrs:{id:"accordion3",accordion:"my-accordion",role:"tabpanel"}},[s("b-card-body",[s("p",{staticClass:"card-text"},[t._v("\n                        "+t._s(t.text)+"\n                    ")])])],1)],1)],1),s("h4",{staticClass:"page-header"},[t._v("Tabs")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-12"},[s("div",{staticClass:"card card-default",attrs:{id:"cardDemo14"}},[s("div",{staticClass:"card-header"},[t._v("Basic Tabs")]),s("div",{staticClass:"card-body"},[s("b-tabs",[s("b-tab",{attrs:{title:"first",active:""}},[s("br"),t._v("I'm the first fading tab\n                      ")]),s("b-tab",{attrs:{title:"second"}},[s("br"),t._v("I'm the second tab content\n                      ")]),s("b-tab",{attrs:{title:"disabled",disabled:""}},[s("br"),t._v("Disabled tab!\n                      ")])],1)],1)])])]),s("b-jumbotron",[s("template",{slot:"header"},[t._v("\n        Bootstrap Vue\n      ")]),s("template",{slot:"lead"},[t._v("\n        This is a simple hero unit, a simple jumbotron-style component for\n        calling extra attention to featured content or information.\n      ")]),s("hr",{staticClass:"my-4"}),s("p",[t._v("\n        It uses utility classes for typography and spacing to space content\n        out within the larger container.\n      ")]),s("b-btn",{staticClass:"mr-1",attrs:{variant:"primary",href:"#"}},[t._v("Do Something")]),s("b-btn",{attrs:{variant:"success",href:"#"}},[t._v("Do Something Else")])],2)],1)},i=[],d=s("46ef"),c={components:{CardTool:d["a"]},data:function(){return{text:"\n                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n                richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor\n                brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\n                tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n                wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\n                vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n                synth nesciunt you probably haven't heard of them accusamus labore VHS.\n              "}},methods:{onCardRemove:function(t,a){console.log("Removing card"),setTimeout(a,50)},onCardRemoved:function(){console.log("Card Removed")},onCardRefresh:function(t,a){setTimeout(a,3e3)}}},r=c,l=s("2877"),o=Object(l["a"])(r,e,i,!1,null,null,null);a["default"]=o.exports}}]);