(function(e){function t(t){for(var l,n,s=t[0],o=t[1],c=t[2],f=0,d=[];f<s.length;f++)n=s[f],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],l=!0,s=1;s<r.length;s++){var o=r[s];0!==a[o]&&(l=!1)}l&&(i.splice(t--,1),e=n(n.s=r[0]))}return e}var l={},a={app:0},i=[];function n(t){if(l[t])return l[t].exports;var r=l[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=l,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=o;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"019a":function(e,t,r){"use strict";r("2518")},1488:function(e,t,r){},"24ef":function(e,t,r){},2518:function(e,t,r){},"3a96":function(e,t,r){"use strict";r("9df9")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var l=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("HomeTable")},i=[],n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("vue-good-table",{attrs:{columns:e.columns,rows:e.filteredRows,"sort-options":{enabled:!1},styleClass:"custom-table"},scopedSlots:e._u([{key:"table-column",fn:function(t){var l=t.column;return[r("span",{staticClass:"text text--bold"},[e._v(e._s(l.label))]),l.withFilters?r("TableFilters",{attrs:{searchString:e.filters[l.field].search,filter:e.filters[l.field],isActive:e.filters[l.field].isActive,disabled:!!l.disabledFilters},on:{"update:searchString":function(t){return e.$set(e.filters[l.field],"search",t)},"update:search-string":function(t){return e.$set(e.filters[l.field],"search",t)},"update:filter":function(t){return e.$set(e.filters,l.field,t)},"update:isActive":function(t){return e.$set(e.filters[l.field],"isActive",t)},"update:is-active":function(t){return e.$set(e.filters[l.field],"isActive",t)},submit:e.filter,reset:e.resetFilters}}):e._e()]}},{key:"table-row",fn:function(t){var l=t.column,a=t.row,i=t.formattedRow;return[r("div",{class:{"custom-table__td-inner":!0,"custom-table__td-inner--truncated":["name","category"].includes(l.field)}},["img"===l.field?r("div",{staticClass:"custom-table__checkbox-cell"},[r("Checkbox",{staticClass:"custom-table__checkbox",attrs:{"native-value":a.sku},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),r("img",{staticClass:"custom-table__img",attrs:{src:a.img}})],1):["name","category","brand"].includes(l.field)?r("a",{attrs:{href:"#",title:i[l.field]}},[e._v(" "+e._s(i[l.field])+" ")]):r("span",[e._v(" "+e._s(i[l.field])+" ")])])]}}])})},s=[],o=(r("4de4"),r("a630"),r("caad"),r("b0c0"),r("b680"),r("ac1f"),r("2532"),r("3ca3"),r("841c"),r("5530")),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{staticClass:"checkbox",attrs:{tabindex:"0"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e._value,expression:"_value"}],staticClass:"checkbox__input",attrs:{type:"checkbox"},domProps:{value:e.nativeValue,checked:Array.isArray(e._value)?e._i(e._value,e.nativeValue)>-1:e._value},on:{change:function(t){var r=e._value,l=t.target,a=!!l.checked;if(Array.isArray(r)){var i=e.nativeValue,n=e._i(r,i);l.checked?n<0&&(e._value=r.concat([i])):n>-1&&(e._value=r.slice(0,n).concat(r.slice(n+1)))}else e._value=a}}}),r("IconChecked",{staticClass:"checkbox__icon"})],1)},u=[],f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M3.99998 7.78L1.21998 5L0.273315 5.94L3.99998 9.66667L12 1.66667L11.06 0.726669L3.99998 7.78Z",fill:"#2D67D6"}})])},d=[],p={name:"IconChecked"},b=p,v=r("2877"),m=Object(v["a"])(b,f,d,!1,null,null,null),_=m.exports,h={name:"Checkbox",components:{IconChecked:_},props:{value:{type:[Array,Boolean],required:!0},nativeValue:{default:!0}},computed:{_value:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},g=h,y=(r("ebe0"),Object(v["a"])(g,c,u,!1,null,null,null)),O=y.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"table-filters"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e._searchString,expression:"_searchString"}],staticClass:"table-filters__search",attrs:{disabled:e.disabled},domProps:{value:e._searchString},on:{input:function(t){t.target.composing||(e._searchString=t.target.value)}}}),r("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.onOutsideClick,expression:"onOutsideClick"}],staticClass:"table-filters__filter-wrp"},[r("div",{class:{"table-filters__filter":!0,"table-filters__filter--active":e.isActive}},[r("button",{staticClass:"table-filters__filter-btn",attrs:{disabled:e.disabled},on:{click:e.toggleActive}},[r("IconFilter")],1),e.isActive?r("div",{staticClass:"table-filters__tooltip"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)},reset:e.onReset}},[e._m(0),r("CustomSelect",{attrs:{options:e.filterOptions},model:{value:e._filter.left.option,callback:function(t){e.$set(e._filter.left,"option",t)},expression:"_filter.left.option"}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e._filter.left.query,expression:"_filter.left.query"}],staticClass:"input input--gray table-filters__query",attrs:{placeholder:"значение"},domProps:{value:e._filter.left.query},on:{input:function(t){t.target.composing||e.$set(e._filter.left,"query",t.target.value)}}}),e._filter.left.query?[r("RadioGroup",{staticClass:"table-filters__radio",attrs:{options:e.filterOperators},model:{value:e._filter.operator,callback:function(t){e.$set(e._filter,"operator",t)},expression:"_filter.operator"}}),r("CustomSelect",{attrs:{options:e.filterOptions},model:{value:e._filter.right.option,callback:function(t){e.$set(e._filter.right,"option",t)},expression:"_filter.right.option"}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e._filter.right.query,expression:"_filter.right.query"}],staticClass:"input input--gray table-filters__query",attrs:{placeholder:"значение"},domProps:{value:e._filter.right.query},on:{input:function(t){t.target.composing||e.$set(e._filter.right,"query",t.target.value)}}})]:e._e(),r("footer",{staticClass:"table-filters__footer"},[r("CustomButton",{staticClass:"table-filters__btn",attrs:{"native-type":"submit"}},[e._v(" Фильтровать ")]),r("CustomButton",{staticClass:"table-filters__btn",attrs:{"native-type":"reset",type:"danger-light"},scopedSlots:e._u([{key:"prepend",fn:function(){return[r("IconCross")]},proxy:!0}],null,!1,2230227621)},[e._v(" Сбросить ")])],1)],2)]):e._e()])])])},x=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("p",{staticClass:"table-filters__title text text--gray"},[e._v("Колонка должна:")])])}],C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"custom-select"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e._value,expression:"_value"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e._value=t.target.multiple?r:r[0]}}},[r("option",{attrs:{hidden:"",disabled:"",selected:""},domProps:{value:null}},[e._v(" Выберите ")]),e._l(e.options,(function(t){var l=t.value,a=t.label;return r("option",{key:l,domProps:{value:e.value}},[e._v(" "+e._s(a)+" ")])}))],2)])},j=[],k=(r("a9e3"),{name:"CustomSelect",props:{value:{type:[Boolean,String,Number],default:null},options:{type:Array,required:!0},valueProp:{type:String,default:"value"},labelProp:{type:String,default:"label"}},computed:{_value:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}}),S=k,A=(r("75de"),Object(v["a"])(S,C,j,!1,null,null,null)),$=A.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"radio-group",attrs:{role:"radiogroup"}},e._l(e.options,(function(t,l){return r("label",{key:l,class:{"radio-group__label":!0,"radio-group__label--active":e.value===t[e.valueProp]},attrs:{role:"radio"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e._value,expression:"_value"}],staticClass:"radio-group__orig-radio",attrs:{type:"radio"},domProps:{value:t[e.valueProp],checked:e._q(e._value,t[e.valueProp])},on:{change:function(r){e._value=t[e.valueProp]}}}),r("span",{staticClass:"radio-group__text"},[e._v(e._s(t[e.labelProp]))])])})),0)},q=[],L={name:"RadioGroup",props:{value:{type:[Boolean,String,Number],required:!0},options:{type:Array,required:!0},valueProp:{type:String,default:"value"},labelProp:{type:String,default:"label"}},computed:{_value:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},F=L,T=(r("9d01"),Object(v["a"])(F,P,q,!1,null,null,null)),E=T.exports,B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M0.479177 1.30166C0.53751 1.37749 3.82751 5.57749 3.82751 5.57749V9.08333C3.82751 9.40416 4.09001 9.66666 4.41668 9.66666H5.58918C5.91001 9.66666 6.17834 9.40416 6.17834 9.08333V5.57166C6.17834 5.57166 9.38084 1.47666 9.53251 1.28999C9.68418 1.10333 9.66668 0.916662 9.66668 0.916662C9.66668 0.595828 9.40418 0.333328 9.07751 0.333328H0.92251C0.566677 0.333328 0.333344 0.613328 0.333344 0.916662C0.333344 1.03333 0.368344 1.17333 0.479177 1.30166Z",fill:"#98B7D7"}})])},I=[],M={name:"IconFilter"},R=M,N=Object(v["a"])(R,B,I,!1,null,null,null),H=N.exports,V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M7.5 1.205L6.795 0.5L4 3.295L1.205 0.5L0.5 1.205L3.295 4L0.5 6.795L1.205 7.5L4 4.705L6.795 7.5L7.5 6.795L4.705 4L7.5 1.205Z",fill:"#C13636"}})])},K=[],D={name:"IconCross"},G=D,Z=Object(v["a"])(G,V,K,!1,null,null,null),J=Z.exports,U=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{class:"custom-button custom-button--"+e.type,attrs:{type:e.nativeType}},[e._t("prepend"),e._t("default")],2)},z=[],Q={name:"CustomButton",props:{nativeType:{type:String,default:"button"},type:{type:String,default:"primary"}}},W=Q,X=(r("019a"),Object(v["a"])(W,U,z,!1,null,null,null)),Y=X.exports,ee=r("e67d"),te=r.n(ee),re={name:"Table",components:{CustomSelect:$,RadioGroup:E,IconFilter:H,CustomButton:Y,IconCross:J},directives:{ClickOutside:te.a},props:{searchString:{type:String,required:!0},filter:{type:Object,required:!0},isActive:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},data:function(){return{filterOptions:[{label:"содержать",value:"contain"}],filterOperators:[{label:"«И»",value:"and"},{label:"«Или»",value:"or"}]}},computed:{_searchString:{get:function(){return this.searchString},set:function(e){this.$emit("update:searchString",e)}},_filter:{get:function(){return this.filter},set:function(e){this.$emit("update:filter",e)}},_isActive:{get:function(){return this.isActive},set:function(e){this.$emit("update:isActive",e)}}},methods:{onSubmit:function(){this.$emit("submit")},onReset:function(){this.$emit("reset")},toggleActive:function(){this._isActive=!this._isActive},onOutsideClick:function(){this.isActive&&(this._isActive=!1)}}},le=re,ae=(r("3a96"),Object(v["a"])(le,w,x,!1,null,null,null)),ie=ae.exports,ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{option:e,query:null}},se=function(){return{search:"",operator:"and",left:ne("contain"),right:ne(),isActive:!1}},oe=["Носки СОВА, 1 шт","Носки Веселый носочни","Носки Kingkit","Носки KAFTAN","Носки HAPPESTAR"],ce=[{brand:"СОВА",name:"Сова"},{brand:"Веселый носочник",name:"Веселый носочник"},{brand:"Kingkit",name:"Kingkit"},{brand:"HAPPESTAR",name:"Socks4you"},{brand:"HAPPESTAR",name:"TM Ukid"},{brand:"Country Socks",name:"Country Socks"}],ue=Array.from({length:10},(function(e,t){var r=ce[Math.floor(Math.random()*ce.length)],l=r.brand,a=r.name,i=oe[Math.floor(Math.random()*oe.length)];return{img:"https://picsum.photos/id/".concat(t+1,"/30"),sku:"".concat(165446325+t),name:i,platform:"Ozon",category:"Одежда, обувь аксессуары/Женщина т",brand:l,seller:a,color:null,availability:2,comment:2+t,rate:(4.86+.1*t).toFixed(2),spp:(4.86+.5*t).toFixed(2),avg:(1+.3*t).toFixed(2),potential:(6125+5*t).toFixed(2),price:350+10*t,wasIn:4+t,salesCount:32+t,proceeds:11840+20*t}})),fe={name:"HomeTable",components:{Checkbox:O,TableFilters:ie},data:function(){var e={thClass:"custom-table__th",tdClass:"custom-table__td",width:"77px"},t=Object(o["a"])(Object(o["a"])({},e),{},{withFilters:!0});return{columns:[Object(o["a"])(Object(o["a"])({},e),{},{thClass:"vgt-center-align custom-table__th",tdClass:"vgt-center-align custom-table__td",label:"Фото",field:"img"}),Object(o["a"])(Object(o["a"])({},t),{},{label:"SKU",field:"sku",width:"124px"}),Object(o["a"])(Object(o["a"])({},t),{},{label:"Название",field:"name",width:"155px"}),Object(o["a"])(Object(o["a"])({},t),{},{disabledFilters:!0,label:"Площадка",field:"platform",width:"115px"}),Object(o["a"])(Object(o["a"])({},t),{},{label:"Категория",field:"category",width:"230px"}),Object(o["a"])(Object(o["a"])({},t),{},{label:"Бренд",field:"brand",width:"115px"}),Object(o["a"])(Object(o["a"])({},t),{},{label:"Продавец",field:"seller",width:"155px"}),Object(o["a"])(Object(o["a"])({},t),{},{disabledFilters:!0,label:"Цвет",field:"color",width:"92px"}),Object(o["a"])(Object(o["a"])({},t),{},{label:"Наличие",field:"availability",type:"number",width:"100px"}),Object(o["a"])(Object(o["a"])({},t),{},{label:"Коммент",field:"comment",type:"number",width:"100px"}),Object(o["a"])(Object(o["a"])({},t),{},{label:"Рейтинг",field:"rate",type:"number",width:"100px"}),Object(o["a"])(Object(o["a"])({},t),{},{label:"СПП",field:"spp",type:"number"}),Object(o["a"])(Object(o["a"])({},t),{},{label:"Среднее",field:"avg",type:"number"}),Object(o["a"])(Object(o["a"])({},t),{},{label:"Потенц",field:"potential",type:"number"}),Object(o["a"])(Object(o["a"])({},t),{},{label:"Цена",field:"price",type:"number"}),Object(o["a"])(Object(o["a"])({},t),{},{label:"Был в на",field:"wasIn",type:"number"}),Object(o["a"])(Object(o["a"])({},t),{},{label:"Продажи",field:"salesCount",type:"number"}),Object(o["a"])(Object(o["a"])({},t),{},{label:"Выручка",field:"proceeds",type:"number"})],rows:ue,filters:{sku:se(),name:se(),platform:se(),category:se(),brand:se(),seller:se(),color:se(),availability:se(),comment:se(),rate:se(),spp:se(),avg:se(),potential:se(),price:se(),wasIn:se(),salesCount:se(),proceeds:se()},filterOptions:[{label:"содержать",value:"contain"}],filterOperators:[{label:"«И»",value:"and"},{label:"«Или»",value:"or"}],selected:[]}},computed:{filteredRows:function(){var e=this.rows,t=this.filters;return e.filter((function(e){for(var r in t){var l;if(null!==(l=t[r])&&void 0!==l&&l.search&&!"".concat(e[r]).includes(t[r].search))return!1}return!0}))}},methods:{filter:function(){var e=this.filters;this.rows=ue.filter((function(t){for(var r in e){var l=e[r],a=l.left,i=l.right,n=l.operator;if(a.query)switch(a.option){case"contain":if(!t[r].includes(a.query)){if("and"===n)return!1;if(i.option&&i.query)switch(i.option){case"contain":if(!t[r].includes(i.query))return!1;break}}break}}return!0}))},resetFilters:function(){var e=this.filters;for(var t in e)e[t]=se();this.filter()}}},de=fe,pe=(r("5977"),Object(v["a"])(de,n,s,!1,null,null,null)),be=pe.exports,ve={name:"App",components:{HomeTable:be}},me=ve,_e=(r("5c0b"),Object(v["a"])(me,a,i,!1,null,null,null)),he=_e.exports,ge=r("f617");r("dac4");l["a"].use(ge["a"]),l["a"].config.productionTip=!1,new l["a"]({render:function(e){return e(he)}}).$mount("#app")},5977:function(e,t,r){"use strict";r("1488")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"5e70":function(e,t,r){},"75de":function(e,t,r){"use strict";r("8936")},8936:function(e,t,r){},"9c0c":function(e,t,r){},"9d01":function(e,t,r){"use strict";r("5e70")},"9df9":function(e,t,r){},ebe0:function(e,t,r){"use strict";r("24ef")}});
//# sourceMappingURL=app.7f1cf22b.js.map