(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{389:function(t,n,e){"use strict";e.d(n,"d",(function(){return r})),e.d(n,"a",(function(){return a})),e.d(n,"i",(function(){return s})),e.d(n,"f",(function(){return u})),e.d(n,"g",(function(){return c})),e.d(n,"h",(function(){return o})),e.d(n,"b",(function(){return f})),e.d(n,"e",(function(){return h})),e.d(n,"k",(function(){return p})),e.d(n,"l",(function(){return d})),e.d(n,"c",(function(){return v})),e.d(n,"j",(function(){return m}));e(51),e(77),e(390),e(392),e(201),e(76),e(115),e(116),e(35),e(117),e(198);var r=/#.*$/,i=/\.(md|html)$/,a=/\/$/,s=/^[a-z]+:/i;function l(t){return decodeURI(t).replace(r,"").replace(i,"")}function u(t){return s.test(t)}function c(t){return/^mailto:/.test(t)}function o(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;var n=t.match(r),e=n?n[0]:"",i=l(t);return a.test(i)?t:i+".html"+e}function h(t,n){var e=decodeURIComponent(t.hash),i=function(t){var n=t.match(r);if(n)return n[0]}(n);return(!i||e===i)&&l(t.path)===l(n)}function p(t,n,e){if(u(n))return{type:"external",path:n};e&&(n=function(t,n,e){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return n+t;var i=n.split("/");e&&i[i.length-1]||i.pop();for(var a=t.replace(/^\//,"").split("/"),s=0;s<a.length;s++){var l=a[s];".."===l?i.pop():"."!==l&&i.push(l)}""!==i[0]&&i.unshift("");return i.join("/")}(n,e));for(var r=l(n),i=0;i<t.length;i++)if(l(t[i].regularPath)===r)return Object.assign({},t[i],{type:"page",path:f(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(n,'"')),{}}function d(t,n,e,r){var i=e.pages,a=e.themeConfig,s=r&&a.locales&&a.locales[r]||a;if("auto"===(t.frontmatter.sidebar||s.sidebar||a.sidebar))return g(t);var l=s.sidebar||a.sidebar;if(l){var u=function(t,n){if(Array.isArray(n))return{base:"/",config:n};for(var e in n)if(0===(r=t,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(encodeURI(e)))return{base:e,config:n[e]};var r;return{}}(n,l),c=u.base,o=u.config;return"auto"===o?g(t):o?o.map((function(t){return function t(n,e,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof n)return p(e,n,r);if(Array.isArray(n))return Object.assign(p(e,n[0],r),{title:n[1]});var a=n.children||[];return 0===a.length&&n.path?Object.assign(p(e,n.path,r),{title:n.title}):{type:"group",path:n.path,title:n.title,sidebarDepth:n.sidebarDepth,initialOpenGroupIndex:n.initialOpenGroupIndex,children:a.map((function(n){return t(n,e,r,i+1)})),collapsable:!1!==n.collapsable}}(t,i,c)})):[]}return[]}function g(t){var n=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:n.map((function(n){return{type:"auto",title:n.title,basePath:t.path,path:t.path+"#"+n.slug,children:n.children||[]}}))}]}function v(t){var n;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?n=t:n&&(n.children||(n.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},390:function(t,n,e){"use strict";var r=e(195),i=e(7),a=e(17),s=e(29),l=e(196),u=e(197);r("match",(function(t,n,e){return[function(n){var e=s(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,e):new RegExp(n)[t](String(e))},function(t){var r=e(n,this,t);if(r.done)return r.value;var s=i(this),c=String(t);if(!s.global)return u(s,c);var o=s.unicode;s.lastIndex=0;for(var f,h=[],p=0;null!==(f=u(s,c));){var d=String(f[0]);h[p]=d,""===d&&(s.lastIndex=l(c,a(s.lastIndex),o)),p++}return 0===p?null:h}]}))},391:function(t,n,e){"use strict";e(393),e(113),e(114);var r=e(389),i={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(r.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(n){return n===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(r.g)(this.link)||Object(r.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(r.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(r.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction:function(){this.$emit("focusout")}}},a=e(50),s=Object(a.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isInternal?e("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(n){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);n.a=s.exports},392:function(t,n,e){"use strict";var r=e(195),i=e(199),a=e(7),s=e(29),l=e(118),u=e(196),c=e(17),o=e(197),f=e(78),h=e(200),p=e(2),d=h.UNSUPPORTED_Y,g=[].push,v=Math.min;r("split",(function(t,n,e){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var r=String(s(this)),a=void 0===e?4294967295:e>>>0;if(0===a)return[];if(void 0===t)return[r];if(!i(t))return n.call(r,t,a);for(var l,u,c,o=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,d=new RegExp(t.source,h+"g");(l=f.call(d,r))&&!((u=d.lastIndex)>p&&(o.push(r.slice(p,l.index)),l.length>1&&l.index<r.length&&g.apply(o,l.slice(1)),c=l[0].length,p=u,o.length>=a));)d.lastIndex===l.index&&d.lastIndex++;return p===r.length?!c&&d.test("")||o.push(""):o.push(r.slice(p)),o.length>a?o.slice(0,a):o}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,e){var i=s(this),a=null==n?void 0:n[t];return void 0!==a?a.call(n,i,e):r.call(String(i),n,e)},function(t,i){var s=e(r,this,t,i,r!==n);if(s.done)return s.value;var f=a(this),h=String(t),p=l(f,RegExp),g=f.unicode,m=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(d?"g":"y"),b=new p(d?"^(?:"+f.source+")":f,m),k=void 0===i?4294967295:i>>>0;if(0===k)return[];if(0===h.length)return null===o(b,h)?[h]:[];for(var x=0,O=0,_=[];O<h.length;){b.lastIndex=d?0:O;var y,L=o(b,d?h.slice(O):h);if(null===L||(y=v(c(b.lastIndex+(d?O:0)),h.length))===x)O=u(h,O,g);else{if(_.push(h.slice(x,O)),_.length===k)return _;for(var j=1;j<=L.length-1;j++)if(_.push(L[j]),_.length===k)return _;O=x=y}}return _.push(h.slice(x)),_}]}),!!p((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]})),d)},393:function(t,n,e){"use strict";var r=e(1),i=e(394);r({target:"String",proto:!0,forced:e(395)("link")},{link:function(t){return i(this,"a","href",t)}})},394:function(t,n,e){var r=e(29),i=/"/g;t.exports=function(t,n,e,a){var s=String(r(t)),l="<"+n;return""!==e&&(l+=" "+e+'="'+String(a).replace(i,"&quot;")+'"'),l+">"+s+"</"+n+">"}},395:function(t,n,e){var r=e(2);t.exports=function(t){return r((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},450:function(t,n,e){"use strict";e.r(n);var r={components:{NavLink:e(391).a},computed:{DEMOLinkML:function(){return{link:"/samples/machinelearning",text:"Machine Learning"}},DEMOLinkPVC:function(){return{link:"/samples/accelerate_pvc",text:"Accelerate PVC"}},DEMOLinkWarm:function(){return{link:"/samples/data_warmup",text:"Data Warmup"}}}},i=e(50),a=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"demo",staticClass:"demo"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:8}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("center",[e("NavLink",{attrs:{item:t.DEMOLinkML}})],1)],1),t._v(" "),e("a",{attrs:{href:"http://pasa-bigdata.nju.edu.cn/fluid-public/video/machineLearning.mp4",target:"_blank"}},[e("el-image",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/machineLearning.png",fit:"scale-down"}})],1)])],1),t._v(" "),e("el-col",{attrs:{span:8}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("center",[e("NavLink",{attrs:{item:t.DEMOLinkPVC}})],1)],1),t._v(" "),e("a",{attrs:{href:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/video/accelerate_pvc.mp4",target:"_blank"}},[e("el-image",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/accelerate_pvc.jfif",fit:"scale-down"}})],1)])],1),t._v(" "),e("el-col",{attrs:{span:8}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("center",[e("NavLink",{attrs:{item:t.DEMOLinkWarm}})],1)],1),t._v(" "),e("a",{attrs:{href:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/video/dataWarmup.mp4",target:"_blank"}},[e("el-image",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/dataWarmup.jfif",fit:"scale-down"}})],1)])],1)],1)],1)}),[],!1,null,null,null);n.default=a.exports}}]);