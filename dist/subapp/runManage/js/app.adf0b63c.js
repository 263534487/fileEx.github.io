(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["bgit-app"]=t():e["bgit-app"]=t()})(window,(function(){return function(e){function t(t){for(var a,r,u=t[0],i=t[1],l=t[2],c=0,d=[];c<u.length;c++)r=u[c],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==s[u]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0fe7deea":"1cc63d6b","chunk-22b17f62":"ee5923ce","chunk-180e55b3":"210620b6","chunk-7459ba90":"620b18f3","chunk-7b465a08":"c50b8e23","chunk-af7c236c":"80aa5183","chunk-2d216214":"cee5354e"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-180e55b3":1,"chunk-7459ba90":1,"chunk-7b465a08":1,"chunk-af7c236c":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0fe7deea":"31d6cfe0","chunk-22b17f62":"31d6cfe0","chunk-180e55b3":"7e224bae","chunk-7459ba90":"7e224bae","chunk-7b465a08":"7e224bae","chunk-af7c236c":"7e224bae","chunk-2d216214":"31d6cfe0"}[e]+".css",s=i.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var l=o[u],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===a||c===s))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],c=l.getAttribute("data-href");if(c===a||c===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],p.parentNode.removeChild(p),n(o)},p.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=o);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var d=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(p);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}s[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/subapp/runManage/",i.oe=function(e){throw e};var l=window["webpackJsonp_bgit"]=window["webpackJsonp_bgit"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=c;return o.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){e.exports=n("56d7")},"0cd3":function(e,t,n){},1:function(e,t){},"1e7d":function(e,t,n){},2:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return me})),n.d(t,"mount",(function(){return be})),n.d(t,"unmount",(function(){return ve}));var a=n("2b0e"),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},s=[],o={},u=o,i=(n("f2a9"),n("2877")),l=Object(i["a"])(u,r,s,!1,null,null,null),c=l.exports,d=n("5c96"),p=n.n(d),f=(n("0fae"),n("28dd"));n("ca3e"),n("1e7d");const h="错误";var g={errorMessage:h},m=n("8c4f"),b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("div",{staticClass:"content-box",class:{"content-collapse":e.collapse}},[t("router-view",{scopedSlots:e._u([{key:"default",fn:function({Component:n}){return[t("transition",{attrs:{name:"move",mode:"out-in"}},[t("keep-alive",{attrs:{include:e.tagsList}},[t(n,{tag:"component"})],1)],1)]}}])})],1)])},v=[],y={components:{},data(){return{headerMenuIndex:0}},created(){},computed:{tagsList(){return this.$store.state.collapse.tagsList.map(e=>e.name)},collapse(){return this.$store.state.collapse.collapse}},methods:{menuIndexBack(e){this.headerMenuIndex=e}}},_=y,k=(n("709c"),Object(i["a"])(_,b,v,!1,null,"0ac7e5fe",null)),w=(k.exports,function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"main content-box",attrs:{"element-loading-spinner":"el-icon-loading"}},[e.isShow?t("router-view",{key:e.$route.fullPath}):e._e(),e.isShow?e._e():t("div",{staticClass:"no-user"},[e._v(e._s(e.tips))])],1)}),L=[],P=(n("14d9"),n("bc3a")),S=n.n(P),C=n("3452"),E=n.n(C),O=function(e){var t="abcdefghijklmnopqrstuvwxyz",n=e+"";if(n=n.slice(-34).slice(0,16),n=n.split("").reverse(),!isNaN(Number(e)))return n.join("");try{for(let e=0;e<n.length;e++){let a=t.indexOf(n[e]);a>=25&&(a=25),"a"!=n[e]&&"b"!=n[e]&&(n[e]=t.slice(a+1,a+2))}n=n.join("")}catch(a){}return n},U={getPSData:O};const j="ijkoluhtfbnugmuhtchoqsrfyhikpnhtfvukobrhkvtxdfajmhkshfbkplokijuhygtfrdeswa",x="56987458956723594238157236958632587412593519946368245705748596321456987458";E.a.enc.Utf8.parse(U.getPSData(j)),E.a.enc.Utf8.parse(U.getPSData(x));class N{constructor(e){const t=Object.assign({baseURL:"",timeout:5e3,requestHandle:null,responseHandle:null},e);this.http=S.a.create({baseURL:t.baseURL,timeout:t.timeout}),this.http.interceptors.request.use(e=>{let n=e;return t.requestHandle&&(n=t.requestHandle(e)),n},e=>e),this.http.interceptors.response.use(e=>{let n=e;return t.responseHandle&&(n=t.responseHandle(e)),N.parseResponse(n)},e=>{let n=e.response;return t.responseHandle&&(n=t.responseHandle(n,e)),N.parseResponse(n,e)})}parseUrl(e,{routeParam:t,queryParam:n}={routeParam:null,queryParam:null}){let a=e;if(t&&(a=e.replace(/:[^/]+/g,(e,n)=>t[e])),n){const e=[];for(const t in n)e.push(`${t}=${encodeURIComponent(n[t])}`);a+="?"+e.join("&")}return a}static parseResponse(e,t=null){return e?{status:200===e.status||201===e.status,data:e.data}:t?{status:!1,data:{ret:-1,data:null,message:t.message}}:void 0}get(e,t=null,n=null){let a=e;return t&&(a=this.parseUrl(e,t)),this.http.get(a,n)}post(e,t={},n=null,a=null){let r=e;if(n&&(r=this.parseUrl(e,n)),-1!=e.indexOf("/uploadAttachment")){const e=new FormData;for(const n in t)e.append(n,t[n]);return this.http.post(r,e,a)}return this.http.post(r,t,a)}put(e,t=null,n=null,a=null){let r=e;return n&&(r=this.parseUrl(e,n)),this.http.put(r,t,a)}patch(e,t=null,n=null,a=null){let r=e;return n&&(r=this.parseUrl(r,n)),this.http.patch(r,t,a)}delete(e,t=null,n=null){let a=e;return t&&(a=this.parseUrl(a,t)),this.http.delete(a,n)}}a["default"].use(m["a"]);const T=window.__POWERED_BY_QIANKUN__?"/studio/runManage":"/subapp/runManage",R="history",I=new m["a"]({mode:R,base:T,scrollBehavior:()=>({y:0}),routes:Y});var M=I,A={pathURL:"/",baseURL:(window.__POWERED_BY_QIANKUN__,"/subapp/runManage/assets/geojson/"),timeout:12e4},D=n("852e"),$=n.n(D);const B=new N({baseURL:A.pathURL,timeout:A.timeout,requestHandle(e){const t=$.a.get("token");return t&&(e.headers["token"]=t,e.headers.tnControl='{"uuid":"'+t+'"}'),e},responseHandle(e){try{e.config["headers"]&&e.config.headers["responseType"]&&"blob"===e.config.headers["responseType"]&&(e.data=e.data)}catch(t){}if(e.hasOwnProperty("config")&&e.config.url.includes("flowJobGroupController/addFlowGroup"))return e;if(e.data&&(e.data.tnStatus&&"0"!=e.data.tnStatus.status||e.data.message)){const t=e.data.tnStatus&&e.data.tnStatus.tnErrors&&e.data.tnStatus.tnErrors.length>0?e.data.tnStatus.tnErrors[0].message:"网络错误请重试";(e.data.msg||e.data.message||t)&&d["Notification"].error({message:e.data.msg||e.data.message||t})}return e}});var H={async addUserLoginSave(e){return await B.post("/dataSecurityApi/userLoginCheckController/addUserLoginSave",e)},async login(e){return await B.post("run-manage/user/login",e)}},q={name:"Main",data(){return{isShow:!1,loading:!0,tips:""}},created(){this.addUserLoginSave()},methods:{addUserLoginSave(){H.login().then(e=>{if(this.loading=!1,0!=e.data.code)return this.tips=e.data.msg||"用户信息错误，无权限访问",null;this.isShow=!0})}}},F=q,K=(n("d9bc"),Object(i["a"])(F,w,L,!1,null,"3e7e24db",null)),J=K.exports;const Q=J;var Y=[{path:"/",redirect:"/fileCheck"},{path:"/",name:"Home",component:Q,children:[{path:"/fileCheck",name:"fileCheck",meta:{title:"文件上传"},component:()=>Promise.all([n.e("chunk-22b17f62"),n.e("chunk-af7c236c")]).then(n.bind(null,"f83d"))},{path:"/fileCheckDiff",name:"fileCheckDiff",meta:{title:"文件上传"},component:()=>Promise.all([n.e("chunk-22b17f62"),n.e("chunk-7459ba90")]).then(n.bind(null,"b361"))},{path:"/fileCheckForSreet",name:"fileCheckForSreet",meta:{title:"文件上传"},component:()=>Promise.all([n.e("chunk-22b17f62"),n.e("chunk-180e55b3")]).then(n.bind(null,"05f6"))},{path:"/fileCheckForALL",name:"fileCheckForALL",meta:{title:"文件上传"},component:()=>Promise.all([n.e("chunk-22b17f62"),n.e("chunk-7b465a08")]).then(n.bind(null,"dc71"))}]}],W=n("323e"),G=n.n(W);n("a5d8");M.beforeEach(async(e,t,n)=>{G.a.start(),n()}),M.afterEach(()=>{G.a.done()});var z=n("2f62"),V={namespaced:!0,state:{tagsList:[],collapse:!1},mutations:{delTagsItem(e,t){e.tagsList.splice(t.index,1)},setTagsItem(e,t){e.tagsList.push(t)},clearTags(e){e.tagsList=[]},closeTagsOther(e,t){e.tagsList=t},closeCurrentTag(e,t){for(let n=0,a=e.tagsList.length;n<a;n++){const r=e.tagsList[n];if(r.path===t.$route.fullPath){n<a-1?t.$router.push(e.tagsList[n+1].path):n>0?t.$router.push(e.tagsList[n-1].path):t.$router.push("/"),e.tagsList.splice(n,1);break}}},handleCollapse(e,t){e.collapse=t}},actions:{},modules:{}};const X={},Z={showMassage(e,t){Object(d["Notification"])({type:t.type,message:t.message||t.data})}},ee={},te={};a["default"].use(z["a"]);var ne=new z["a"].Store({state:X,getters:te,actions:Z,mutations:ee,modules:{collapse:V}}),ae=n("7e79"),re=n.n(ae),se=n("e069"),oe=n.n(se),ue=(n("dcad"),n("c0e9")),ie=n.n(ue),le=n("8baf"),ce={install(e,t){e.prototype.getPdf=function(){var e=this.htmlTitle;ie()(this.$refs.pdfDom,{allowTaint:!0,taintTest:!1,useCORS:!0,y:72,dpi:4*window.devicePixelRatio,scale:4}).then((function(t){let n=t.width,a=t.height,r=n/592.28*841.89,s=a,o=0,u=595.28,i=592.28/n*a,l=t.toDataURL("image/jpeg",1),c=new le["a"]("","pt","a4");if(s<r)c.addImage(l,"JPEG",0,0,u,i);else while(s>0)c.addImage(l,"JPEG",0,o,u,i),s-=r,o-=841.89,s>0&&c.addPage();c.save(e+".pdf")}))}}},de=n("e5d9");a["default"].use(ce),a["default"].use(m["a"]),a["default"].config.productionTip=!1,a["default"].use(p.a),a["default"].use(oe.a),a["default"].use(f["a"]),a["default"].use(re.a),a["default"].prototype.COMMON=g,a["default"].use(de["a"]);let pe=null,fe=null;const he=window.__POWERED_BY_QIANKUN__?"/studio/runManage":"/subapp/runManage";function ge(){fe=new m["a"]({mode:"history",base:he,scrollBehavior:()=>({y:0}),routes:Y}),fe.beforeEach((e,t,n)=>{0!==e.matched.length?n():n({path:"/404"})}),pe=new a["default"]({router:fe,store:ne,render:e=>e(c)}).$mount("#app")}async function me(){}async function be(e){a["default"].prototype.$appStore=e.store,ge()}async function ve(){sessionStorage.removeItem("uuid"),pe.$destroy(),pe=null,fe=null}window.__POWERED_BY_QIANKUN__&&(n.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__+"runManage/"),window.__POWERED_BY_QIANKUN__||(a["default"].prototype.$appStore={state:{}},ge())},"709c":function(e,t,n){"use strict";n("e1d8")},a2b1:function(e,t,n){},ca3e:function(e,t,n){},d9bc:function(e,t,n){"use strict";n("a2b1")},e1d8:function(e,t,n){},f2a9:function(e,t,n){"use strict";n("0cd3")}})}));