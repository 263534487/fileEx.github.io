(window["webpackJsonp_bgit"]=window["webpackJsonp_bgit"]||[]).push([["chunk-7b465a08"],{"271a":function(e,t,a){"use strict";var n=a("cb2d"),l=a("e330"),o=a("577e"),r=a("d6d6"),s=URLSearchParams,c=s.prototype,i=l(c.getAll),u=l(c.has),h=new s("a=1");!h.has("a",2)&&h.has("a",void 0)||n(c,"has",(function(e){var t=arguments.length,a=t<2?void 0:arguments[1];if(t&&void 0===a)return u(this,e);var n=i(this,e);r(t,1);var l=o(a),s=0;while(s<n.length)if(n[s++]===l)return!0;return!1}),{enumerable:!0,unsafe:!0})},5494:function(e,t,a){"use strict";var n=a("83ab"),l=a("e330"),o=a("edd0"),r=URLSearchParams.prototype,s=l(r.forEach);n&&!("size"in r)&&o(r,"size",{get:function(){var e=0;return s(this,(function(){e++})),e},configurable:!0,enumerable:!0})},"577e":function(e,t,a){"use strict";var n=a("f5df"),l=String;e.exports=function(e){if("Symbol"===n(e))throw new TypeError("Cannot convert a Symbol value to a string");return l(e)}},"68a0":function(e,t,a){"use strict";a("b113")},"88a7":function(e,t,a){"use strict";var n=a("cb2d"),l=a("e330"),o=a("577e"),r=a("d6d6"),s=URLSearchParams,c=s.prototype,i=l(c.append),u=l(c["delete"]),h=l(c.forEach),d=l([].push),m=new s("a=1&a=2&b=3");m["delete"]("a",1),m["delete"]("b",void 0),m+""!=="a=2"&&n(c,"delete",(function(e){var t=arguments.length,a=t<2?void 0:arguments[1];if(t&&void 0===a)return u(this,e);var n=[];h(this,(function(e,t){d(n,{key:t,value:e})})),r(t,1);var l,s=o(e),c=o(a),m=0,b=0,f=!1,p=n.length;while(m<p)l=n[m++],f||l.key===s?(f=!0,u(this,l.key)):b++;while(b<p)l=n[b++],l.key===s&&l.value===c||i(this,l.key,l.value)}),{enumerable:!0,unsafe:!0})},b113:function(e,t,a){},d6d6:function(e,t,a){"use strict";var n=TypeError;e.exports=function(e,t){if(e<t)throw new n("Not enough arguments");return e}},dc71:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",[t("input",{attrs:{type:"file",accept:".xlsx, .xls"},on:{change:e.handleFileUpload1}}),t("input",{attrs:{type:"file",accept:".xlsx, .xls"},on:{change:e.handleFileUpload3}}),t("el-button",{attrs:{type:"mini"},on:{click:e.exportExcel}},[e._v("导出")]),t("div",{staticStyle:{display:"flex"}},[t("div",{staticStyle:{width:"100%"}},[t("div",{staticClass:"title1"},[e._v("不存在的企业")]),t("div",[e.tableData.length>0?t("el-table",{attrs:{data:e.data1,"max-height":"650"}},[t("el-table-column",{attrs:{prop:"column2",label:"企业名"}})],1):e._e()],1)])])],1)},l=[],o=(a("14d9"),a("2c66"),a("249d"),a("40e9"),a("907a"),a("986a"),a("1d02"),a("3c5d"),a("6ce5"),a("2834"),a("4ea1"),a("88a7"),a("271a"),a("5494"),a("25ca")),r={data(){return{tableData:[],tableData2:[],tableData3:[],data1:[],data2:[],data3:[],data4:[]}},methods:{handleFileUpload1(e){const t=e.target.files[0],a=new FileReader;a.onload=e=>{const t=new Uint8Array(e.target.result),a=o["a"](t,{type:"array"}),n=a.Sheets[a.SheetNames[0]],l=o["b"].sheet_to_json(n,{header:1}),r=(l[0],l.map(e=>({column1:e[4],column2:e[5],column3:e[21]})));this.tableData=r},a.readAsArrayBuffer(t)},handleFileUpload2(e){const t=e.target.files[0],a=new FileReader;a.onload=e=>{const t=new Uint8Array(e.target.result),a=o["a"](t,{type:"array"}),n=a.Sheets[a.SheetNames[0]],l=o["b"].sheet_to_json(n,{header:1}),r=(l[0],l.map(e=>({column1:e[0],column2:e[1],column3:e[6]})));this.tableData2=r},a.readAsArrayBuffer(t)},handleFileUpload3(e){const t=e.target.files[0],a=new FileReader;a.onload=e=>{const t=new Uint8Array(e.target.result),a=o["a"](t,{type:"array"}),n=a.Sheets[a.SheetNames[0]],l=o["b"].sheet_to_json(n,{header:1}),r=(l[0],l.map(e=>({column1:e[1],column2:e[2],column3:e[3],column4:e[4]})));this.tableData3=r,this.data1=this.checkColumnExistence4()},a.readAsArrayBuffer(t)},exportExcel(){const e=o["b"].json_to_sheet(this.data1),t=o["b"].book_new();o["b"].book_append_sheet(t,e,"Sheet1");const a=o["c"](t,{bookType:"xlsx",type:"array"}),n=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),l="tableData3.xlsx";if(navigator.msSaveBlob)navigator.msSaveBlob(n,l);else{const e=document.createElement("a");e.href=window.URL.createObjectURL(n),e.download=l,e.click()}},checkColumnExistence4(){const e=this.tableData3.filter(e=>!this.tableData.some(t=>t.column2===e.column2));return e},calculateDeviceCount(){const e=[];return this.tableData3.forEach(t=>{const a=t.column2,n=this.tableData.filter(e=>e.column2===a&&"1"==e.column3).length,l=this.tableData.filter(e=>e.column2===a&&"2"==e.column3).length;e.push({column2:a,smokeAlarmCount:n,panicAlarmCount:l}),t.column7=l,t.column8=n}),e},checkColumnExistence3(){const e=this.tableData1.filter(e=>this.tableData3.some(t=>t.column2===e.column2)),t=e.filter(e=>!this.tableData2.some(t=>t.column2===e.column2));return t},checkColumnExistence2(){const e=this.tableData3.filter(e=>!this.tableData2.some(t=>t.column2===e.column2)&&!this.tableData.some(t=>t.column2===e.column2));return e},checkColumnExistence(){const e=this.tableData.filter(e=>!this.tableData2.some(t=>t.column2===e.column2));return e},checkColumnExistence1(){const e=this.tableData2.filter(e=>!this.tableData.some(t=>t.column2===e.column2));return e}}},s=r,c=(a("68a0"),a("2877")),i=Object(c["a"])(s,n,l,!1,null,null,null);t["default"]=i.exports}}]);