webpackJsonp([120],{SAlE:function(t,a,e){a=t.exports=e("UTlt")(!1),a.push([t.i,"\n.cms-body[data-v-3438b860]{\n   display: -webkit-box;\n   display: -ms-flexbox;\n   display: flex;\n}\n.content[data-v-3438b860]{\n  width: 60%;\n  border-right: 1px solid #ccc;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.prven[data-v-3438b860]{\n    width: 40%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.qrcode[data-v-3438b860]{\n  position: relative;\n   margin-left: 122px;\n   width: 200px;\n   height: 200px;\n   border: 1px dashed #d9d9d9;\n}\n.qrcode img[data-v-3438b860]{\n  width: 198px;\n  height: 198px;\n}\n.qr-tip[data-v-3438b860]{\n    color: #606266;\n    display: block;\n    text-align: center;\n     height: 60px;\n     width: 100px;\n     position: absolute;\n     left: 50%;\n     top: 50%;\n     margin-top: -30px;\n     margin-left: -50px;\n}\n.form-footer[data-v-3438b860]{\n  text-align: center;\n}\n.download[data-v-3438b860]{\n  position: absolute;\n  left: 50%;\n  top: 100%;\n  margin-top: 20px;\n  margin-left:-40px;\n}\n.download-tip[data-v-3438b860]{\n  text-align: center;\n  width: 140px;\n  line-height: 20px;\n  position: absolute;\n  left: 50%;\n  top: 100%;\n  margin-top: 20px;\n  margin-left:-70px;\n}\n",""])},WTky:function(t,a,e){var n=e("SAlE");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("FIqI")("3b711a7e",n,!0,{})},"c/X8":function(t,a,e){"use strict";function n(t){e("WTky")}Object.defineProperty(a,"__esModule",{value:!0});var o=e("2sCs"),i=e.n(o),s=e("x1ym"),l=e("QmSG"),r=e("2RFS"),d=e("lcoF"),c={mixins:[d.a],data:function(){var t=s.a.required("此项必填");return{rules:{content:[t],fontSize:[t,s.a.number("只能输入数字")],size:[t,s.a.qrcode("只能输入数字且大小在100-300之间")]},downloadImgFlage:!1,qrcodeUrl:""}},methods:{getPath:function(t){this.dataInfo.logoPicPath=t},getDataInfo:function(){var t={content:"",logoPicPath:"",logoWord:"",fontSize:"10",size:"100",qrcodeUrl:""};this.dataInfo=t,this.loading=!1},grenQR:function(){var t=this;this.loading=!0,this.downloadImgFlage=!1,i.a.post(this.$api.dimensioncodeCreate,this.dataInfo).then(function(a){if("200"==a.code){t.downloadImgFlage=!0;var e=(a.body.url+"").replace("/mylocal","");t.qrcodeUrl=Object(l.a)()+e+"?str="+Object(r.a)()}t.loading=!1}).catch(function(a){t.loading=!1})}},created:function(){this.getDataInfo()}},f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"cms-body"},[e("div",{staticClass:"content"},[e("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:t.dataInfo,rules:t.rules,"label-width":"162px"}},[e("el-form-item",{staticClass:"flex-10 ",attrs:{label:"二维码LOGO图片",prop:"imagePath"}},[e("cms-upload",{attrs:{src:t.dataInfo.imagePath,isMark:!1},on:{change:t.getPath}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-100 ",attrs:{label:"二维码内容",prop:"content"}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:t.dataInfo.content,callback:function(a){t.$set(t.dataInfo,"content",a)},expression:"dataInfo.content"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-100 ",attrs:{label:"logo文字",prop:"logoWord"}},[e("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.logoWord,callback:function(a){t.$set(t.dataInfo,"logoWord",a)},expression:"dataInfo.logoWord"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-100 ",attrs:{label:"logo文字大小",prop:"fontSize"}},[e("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.fontSize,callback:function(a){t.$set(t.dataInfo,"fontSize",a)},expression:"dataInfo.fontSize"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-100 ",attrs:{label:"二维码尺寸",prop:"size"}},[e("el-input",{staticClass:"cms-width",attrs:{maxlength:"3",onkeyup:"value=value.replace(/[^\\d]/g,'')"},model:{value:t.dataInfo.size,callback:function(a){t.$set(t.dataInfo,"size",a)},expression:"dataInfo.size"}}),t._v(" "),e("span",{staticClass:"gray"},[t._v("规定生成之后图片的宽和高（大小最好在100-300之间）")])],1),t._v(" "),e("div",{staticClass:"form-footer"},[e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/dimensioncode/create",expression:"'/dimensioncode/create'"}],attrs:{type:"primary"},on:{click:function(a){t.grenQR()}}},[t._v("生成二维码")]),t._v(" "),e("el-button",{attrs:{type:"info"},on:{click:t.$reset}},[t._v("重置")])],1)],1)],1),t._v(" "),e("div",{staticClass:"prven"},[e("el-form",{ref:"form1",staticClass:"cms-form"},[e("el-form-item",{staticClass:"flex-50 ",attrs:{label:"二维码预览"}},[e("div",{staticClass:"qrcode"},[t.downloadImgFlage?e("img",{attrs:{src:t.qrcodeUrl}}):e("span",{staticClass:"qr-tip"},[t._v("左侧输入内容，点击生成二维码")]),t._v(" "),e("span",{staticClass:"gray download-tip"},[t._v("下载提示：鼠标移动至图片，右键另存为即可")])])]),t._v(" "),e("div",{staticClass:"form-footer"})],1)],1)])},p=[],m={render:f,staticRenderFns:p},g=m,b=e("Z0/y"),v=n,x=b(c,g,!1,v,"data-v-3438b860",null);a.default=x.exports}});