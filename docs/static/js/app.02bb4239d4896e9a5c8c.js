webpackJsonp([1,0],[function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=i(11),r=n(a),o=i(7),s=n(o);new r.default({template:"<App/>",components:{App:s.default}}).$mount("#app")},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(8),r=n(a);t.default={name:"app",components:{Parallax:r.default}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{parallax:{default:!0,type:Boolean},speedFactor:{default:.15,type:Number},fixed:{default:!1,type:Boolean},breakpoint:{default:"(min-width: 968px)",type:String},sectionHeight:{default:70,type:Number,required:!1}},data:function(){return{el:null,mediaQuery:null}},mounted:function(){this.parallax&&!this.fixed&&(this.el=this.$refs.parallax,window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)},this.init())},methods:{animateElement:function(){var e=this.$refs.block.offsetHeight,t=this.$refs.parallax.offsetHeight,i=t-e,n=window.pageYOffset*this.speedFactor;n<=i&&n>=0&&(this.el.style.transform="translate3d(0, "+n*-1+"px ,0)")},scrollHandler:function(){var e=this;window.requestAnimationFrame(function(){e.isInView(e.$refs.parallax)&&e.animateElement()})},isInView:function(e){var t=e.getBoundingClientRect();return t.bottom>=0&&t.top<=(window.innerHeight||document.documentElement.clientHeight)},setupListener:function(){this.mediaQuery.matches?window.addEventListener("scroll",this.scrollHandler,!1):window.removeEventListener("scroll",this.scrollHandler,!1)},init:function(){this.mediaQuery=window.matchMedia(this.breakpoint),this.mediaQuery&&(this.mediaQuery.addListener(this.setupListener),this.setupListener())}}}},function(e,t){},function(e,t){},function(e,t,i){e.exports=i.p+"static/img/pexels-photo-196416.0e51b6c.jpeg"},function(e,t,i){e.exports=i.p+"static/img/pexels-photo-241307.adfe629.jpeg"},function(e,t,i){var n,a;i(4),n=i(1);var r=i(10);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,e.exports=n},function(e,t,i){var n,a;i(3),n=i(2);var r=i(9);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,e.exports=n},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("section",{ref:"block",staticClass:"Masthead",style:{height:e.sectionHeight+"vh"}},[t("div",{ref:"parallax",staticClass:"Masthead__image",class:{"is-parallax":e.parallax,"is-fixed":e.fixed}},[e._t("default")],!0)])},staticRenderFns:[]}},function(e,t,i){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{attrs:{id:"app"}},[t("div",{staticStyle:{"background-color":"#fff",height:"100vh"}}),e._v(" "),t("div",{staticStyle:{position:"relative","z-index":"9999","background-color":"#fff"}},[t("h1",{staticStyle:{margin:"0"}},[e._v("Parallax Effect")]),e._v(" "),t("parallax",[t("img",{attrs:{src:i(6)}})])]),e._v(" "),t("div",{staticStyle:{"background-color":"#fff",height:"100vh"}}),e._v(" "),t("h1",[e._v("Parallax fixed position ")]),e._v(" "),t("div",{staticStyle:{position:"relative"}},[t("parallax",{attrs:{fixed:!0}},[t("img",{attrs:{src:i(5)}})]),e._v(" "),e._m(0)])])},staticRenderFns:[function(){var e=this,t=(e.$createElement,e._c);return t("div",[t("div",{staticStyle:{"background-color":"#fff",height:"100vh"}})])}]}}]);
//# sourceMappingURL=app.02bb4239d4896e9a5c8c.js.map