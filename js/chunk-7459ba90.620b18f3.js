(window["webpackJsonp_bgit"]=window["webpackJsonp_bgit"]||[]).push([["chunk-7459ba90"],{"271a":function(e,t,a){"use strict";var l=a("cb2d"),n=a("e330"),o=a("577e"),r=a("d6d6"),c=URLSearchParams,s=c.prototype,i=n(s.getAll),u=n(s.has),m=new c("a=1");!m.has("a",2)&&m.has("a",void 0)||l(s,"has",(function(e){var t=arguments.length,a=t<2?void 0:arguments[1];if(t&&void 0===a)return u(this,e);var l=i(this,e);r(t,1);var n=o(a),c=0;while(c<l.length)if(l[c++]===n)return!0;return!1}),{enumerable:!0,unsafe:!0})},5494:function(e,t,a){"use strict";var l=a("83ab"),n=a("e330"),o=a("edd0"),r=URLSearchParams.prototype,c=n(r.forEach);l&&!("size"in r)&&o(r,"size",{get:function(){var e=0;return c(this,(function(){e++})),e},configurable:!0,enumerable:!0})},"577e":function(e,t,a){"use strict";var l=a("f5df"),n=String;e.exports=function(e){if("Symbol"===l(e))throw new TypeError("Cannot convert a Symbol value to a string");return n(e)}},"62ba":function(e,t,a){"use strict";a("7197")},7197:function(e,t,a){},"88a7":function(e,t,a){"use strict";var l=a("cb2d"),n=a("e330"),o=a("577e"),r=a("d6d6"),c=URLSearchParams,s=c.prototype,i=n(s.append),u=n(s["delete"]),m=n(s.forEach),h=n([].push),d=new c("a=1&a=2&b=3");d["delete"]("a",1),d["delete"]("b",void 0),d+""!=="a=2"&&l(s,"delete",(function(e){var t=arguments.length,a=t<2?void 0:arguments[1];if(t&&void 0===a)return u(this,e);var l=[];m(this,(function(e,t){h(l,{key:t,value:e})})),r(t,1);var n,c=o(e),s=o(a),d=0,p=0,b=!1,f=l.length;while(d<f)n=l[d++],b||n.key===c?(b=!0,u(this,n.key)):p++;while(p<f)n=l[p++],n.key===c&&n.value===s||i(this,n.key,n.value)}),{enumerable:!0,unsafe:!0})},b361:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e._self._c;return t("div",[t("input",{attrs:{type:"file",accept:".xlsx, .xls"},on:{change:e.handleFileUpload1}}),t("input",{attrs:{type:"file",accept:".xlsx, .xls"},on:{change:e.handleFileUpload2}}),t("input",{attrs:{type:"file",accept:".xlsx, .xls"},on:{change:e.handleFileUpload3}}),t("el-button",{attrs:{type:"mini"},on:{click:e.exportExcel}},[e._v("导出")]),t("div",{staticStyle:{display:"flex"}},[t("div",{staticStyle:{width:"100%"}},[t("div",{staticClass:"title1"},[e._v("新增的企业")]),t("div",[e.tableData.length>0?t("el-table",{attrs:{data:e.data1,"max-height":"650"}},[t("el-table-column",{attrs:{prop:"column1",label:"信用代码",width:"180"}}),t("el-table-column",{attrs:{prop:"column2",label:"企业名"}}),t("el-table-column",{attrs:{prop:"column3",label:"街道"}}),t("el-table-column",{attrs:{prop:"column4",label:"企业规模"}}),t("el-table-column",{attrs:{prop:"column6",label:"地址"}}),t("el-table-column",{attrs:{prop:"column7",label:"企业类型",width:"110"}}),t("el-table-column",{attrs:{prop:"column8",label:"一键告警数量"}}),t("el-table-column",{attrs:{prop:"column9",label:"烟感数量"}})],1):e._e()],1)])])],1)},n=[],o=(a("14d9"),a("2c66"),a("249d"),a("40e9"),a("907a"),a("986a"),a("1d02"),a("3c5d"),a("6ce5"),a("2834"),a("4ea1"),a("88a7"),a("271a"),a("5494"),a("25ca")),r={data(){return{tableData:[],tableData2:[],tableData3:[],data1:[],data2:[],data3:[],data4:[]}},methods:{handleFileUpload1(e){const t=e.target.files[0],a=new FileReader;a.onload=e=>{const t=new Uint8Array(e.target.result),a=o["a"](t,{type:"array"}),l=a.Sheets[a.SheetNames[0]],n=o["b"].sheet_to_json(l,{header:1}),r=(n[0],n.map(e=>({column1:e[0],column2:e[1],column3:e[2],column4:e[3],column5:e[4],column6:e[5],column7:e[6]})));this.tableData=r},a.readAsArrayBuffer(t)},handleFileUpload2(e){const t=e.target.files[0],a=new FileReader;a.onload=e=>{const t=new Uint8Array(e.target.result),a=o["a"](t,{type:"array"}),l=a.Sheets[a.SheetNames[0]],n=o["b"].sheet_to_json(l,{header:1}),r=(n[0],n.map(e=>({column1:e[0],column2:e[1],column3:e[6]})));this.tableData2=r},a.readAsArrayBuffer(t)},handleFileUpload3(e){const t=e.target.files[0],a=new FileReader;a.onload=e=>{const t=new Uint8Array(e.target.result),a=o["a"](t,{type:"array"}),l=a.Sheets[a.SheetNames[0]],n=o["b"].sheet_to_json(l,{header:1}),r=(n[0],n.map(e=>({column1:e[4],column2:e[5],column3:e[3],column4:"",column5:e[6],column6:e[2],column7:e[21]})));this.tableData3=r,this.data1=this.checkColumnExistence3(),this.data4=this.calculateDeviceCount()},a.readAsArrayBuffer(t)},exportExcel(){const e=o["b"].json_to_sheet(this.data1),t=o["b"].book_new();o["b"].book_append_sheet(t,e,"Sheet1");const a=o["c"](t,{bookType:"xlsx",type:"array"}),l=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),n="data1.xlsx";if(navigator.msSaveBlob)navigator.msSaveBlob(l,n);else{const e=document.createElement("a");e.href=window.URL.createObjectURL(l),e.download=n,e.click()}},calculateDeviceCount(){const e=[];return this.data1.forEach(t=>{const a=t.column2,l=this.tableData3.filter(e=>e.column2===a&&("烟雾告警设备"===e.column7||"1"==e.column7)).length,n=this.tableData3.filter(e=>e.column2===a&&("一键告警设备"===e.column7||"2"==e.column7)).length;e.push({column2:a,smokeAlarmCount:l,panicAlarmCount:n}),t.column8=n,t.column9=l}),e},checkColumnExistence3(){const e=this.tableData.filter(e=>this.tableData3.some(t=>t.column2===e.column2)),t=e.filter(e=>!this.tableData2.some(t=>t.column2===e.column2));return t},checkColumnExistence2(){const e=this.tableData3.filter(e=>!this.tableData2.some(t=>t.column2===e.column2)&&!this.tableData.some(t=>t.column2===e.column2));return e},checkColumnExistence(){const e=this.tableData.filter(e=>!this.tableData2.some(t=>t.column2===e.column2));return e},checkColumnExistence1(){const e=this.tableData2.filter(e=>!this.tableData.some(t=>t.column2===e.column2));return e}}},c=r,s=(a("62ba"),a("2877")),i=Object(s["a"])(c,l,n,!1,null,null,null);t["default"]=i.exports},d6d6:function(e,t,a){"use strict";var l=TypeError;e.exports=function(e,t){if(e<t)throw new l("Not enough arguments");return e}}}]);