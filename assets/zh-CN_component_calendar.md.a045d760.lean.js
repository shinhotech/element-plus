import{h as d,i as A,r as C,o as c,a as i,_,w as E,e as a,K as g,t as k,b as t,d as n,c as h,u as r,f as v,g as f}from"./app.5ca4bc88.js";const b=d({__name:"basic",setup(u){const e=A(new Date);return(l,o)=>{const s=C("el-calendar");return c(),i(s,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=p=>e.value=p)},null,8,["modelValue"])}}});var y=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"}));const x={};function z(u,e){const l=C("el-calendar");return c(),i(l,null,{"date-cell":E(({data:o})=>[a("p",{class:g(o.isSelected?"is-selected":"")},k(o.day.split("-").slice(1).join("-"))+" "+k(o.isSelected?"\u2714\uFE0F":""),3)]),_:1})}var w=_(x,[["render",z]]),S=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"}));const q=a("span",null,"Custom header content",-1),T=d({__name:"header",setup(u){const e=A(),l=o=>{!e.value||e.value.selectDate(o)};return(o,s)=>{const p=C("el-button"),F=C("el-button-group"),B=C("el-calendar");return c(),i(B,{ref_key:"calendar",ref:e},{header:E(({date:m})=>[q,a("span",null,k(m),1),t(F,null,{default:E(()=>[t(p,{size:"small",onClick:s[0]||(s[0]=D=>l("prev-year"))},{default:E(()=>[n(" Previous Year ")]),_:1}),t(p,{size:"small",onClick:s[1]||(s[1]=D=>l("prev-month"))},{default:E(()=>[n(" Previous Month ")]),_:1}),t(p,{size:"small",onClick:s[2]||(s[2]=D=>l("today"))},{default:E(()=>[n("Today")]),_:1}),t(p,{size:"small",onClick:s[3]||(s[3]=D=>l("next-month"))},{default:E(()=>[n(" Next Month ")]),_:1}),t(p,{size:"small",onClick:s[4]||(s[4]=D=>l("next-year"))},{default:E(()=>[n(" Next Year ")]),_:1})]),_:1})]),_:1},512)}}});var P=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));const j={};function N(u,e){const l=C("el-calendar");return c(),i(l,{range:[new Date(2019,2,4),new Date(2019,2,24)]},null,8,["range"])}var M=_(j,[["render",N]]),$=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));const I=a("h1",{id:"calendar-\u65E5\u5386",tabindex:"-1"},[n("Calendar \u65E5\u5386 "),a("a",{class:"header-anchor vp-link",href:"#calendar-\u65E5\u5386","aria-hidden":"true"},"#")],-1),O=a("p",null,"\u663E\u793A\u65E5\u671F",-1),V=a("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[n("\u57FA\u7840\u7528\u6CD5 "),a("a",{class:"header-anchor vp-link",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),Y=a("p",null,"calendar/basic",-1),U=a("h2",{id:"\u81EA\u5B9A\u4E49\u5185\u5BB9",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49\u5185\u5BB9 "),a("a",{class:"header-anchor vp-link",href:"#\u81EA\u5B9A\u4E49\u5185\u5BB9","aria-hidden":"true"},"#")],-1),K=a("p",null,"calendar/customize",-1),R=a("h2",{id:"\u8303\u56F4",tabindex:"-1"},[n("\u8303\u56F4 "),a("a",{class:"header-anchor vp-link",href:"#\u8303\u56F4","aria-hidden":"true"},"#")],-1),G=a("p",null,"calendar/range",-1),H=a("h2",{id:"\u81EA\u5B9A\u4E49\u65E5\u5386\u5934\u90E8",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49\u65E5\u5386\u5934\u90E8 "),a("a",{class:"header-anchor vp-link",href:"#\u81EA\u5B9A\u4E49\u65E5\u5386\u5934\u90E8","aria-hidden":"true"},"#")],-1),J=a("p",null,"calendar/header",-1),L=v("",5),Q={class:"vp-table"},W=a("thead",null,[a("tr",null,[a("th",null,"\u5C5E\u6027\u540D"),a("th",null,"\u8BF4\u660E"),a("th",null,"\u7C7B\u578B"),a("th",null,"\u9ED8\u8BA4\u503C")])],-1),X=a("td",null,"model-value / v-model",-1),Z=a("td",null,"\u9009\u4E2D\u9879\u7ED1\u5B9A\u503C",-1),a2=a("td",null,"\u2014",-1),n2=a("td",null,"range",-1),s2=a("td",null,"\u65F6\u95F4\u8303\u56F4\uFF0C\u5305\u62EC\u5F00\u59CB\u65F6\u95F4\u4E0E\u7ED3\u675F\u65F6\u95F4\u3002 \u5F00\u59CB\u65F6\u95F4\u5FC5\u987B\u662F\u5468\u8D77\u59CB\u65E5\uFF0C\u7ED3\u675F\u65F6\u95F4\u5FC5\u987B\u662F\u5468\u7ED3\u675F\u65E5\uFF0C\u4E14\u65F6\u95F4\u8DE8\u5EA6\u4E0D\u80FD\u8D85\u8FC7\u4E24\u4E2A\u6708\u3002",-1),t2=a("td",null,"\u2014",-1),e2=a("h3",{id:"slots",tabindex:"-1"},[n("Slots "),a("a",{class:"header-anchor vp-link",href:"#slots","aria-hidden":"true"},"#")],-1),p2={class:"vp-table"},E2=a("thead",null,[a("tr",null,[a("th",null,"\u63D2\u69FD\u540D"),a("th",null,"\u8BF4\u660E"),a("th",null,"\u7C7B\u578B")])],-1),l2=a("td",null,"date-cell",-1),o2=a("td",null,[a("code",null,"type"),n(" \u8868\u793A\u8BE5\u65E5\u671F\u7684\u6240\u5C5E\u6708\u4EFD\uFF0C\u53EF\u9009\u503C\u6709 prev-month\u3001current-month \u548C next-month\uFF1B"),a("code",null,"isSelected"),n(" \u6807\u660E\u8BE5\u65E5\u671F\u662F\u5426\u88AB\u9009\u4E2D\uFF1B"),a("code",null,"day"),n(" \u662F\u683C\u5F0F\u5316\u7684\u65E5\u671F\uFF0C\u683C\u5F0F\u4E3A "),a("code",null,"yyyy-MM-dd"),n("\uFF1B"),a("code",null,"date"),n(" \u662F\u5355\u5143\u683C\u7684\u65E5\u671F")],-1),C2=a("td",null,"header",-1),c2=a("td",null,"\u5361\u7247\u6807\u9898\u5185\u5BB9",-1),u2=a("h2",{id:"\u6E90\u4EE3\u7801",tabindex:"-1"},[n("\u6E90\u4EE3\u7801 "),a("a",{class:"header-anchor vp-link",href:"#\u6E90\u4EE3\u7801","aria-hidden":"true"},"#")],-1),D2={href:"https://github.com/element-plus/element-plus/blob/dev/docs/zh-CN/component/calendar.md",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},F2='{"title":"Calendar \u65E5\u5386","description":"","frontmatter":{"title":"Calendar \u65E5\u5386","lang":"zh-CN"},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u5185\u5BB9","slug":"\u81EA\u5B9A\u4E49\u5185\u5BB9"},{"level":2,"title":"\u8303\u56F4","slug":"\u8303\u56F4"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u65E5\u5386\u5934\u90E8","slug":"\u81EA\u5B9A\u4E49\u65E5\u5386\u5934\u90E8"},{"level":2,"title":"\u56FD\u9645\u5316","slug":"\u56FD\u9645\u5316"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Attributes","slug":"attributes"},{"level":3,"title":"Slots","slug":"slots"},{"level":2,"title":"\u6E90\u4EE3\u7801","slug":"\u6E90\u4EE3\u7801"}],"relativePath":"zh-CN/component/calendar.md","lastUpdated":null}',r2={},k2=Object.assign(r2,{__name:"calendar",setup(u){const e={"../../examples/calendar/basic.vue":y,"../../examples/calendar/customize.vue":S,"../../examples/calendar/header.vue":P,"../../examples/calendar/range.vue":$};return(l,o)=>{const s=C("Demo"),p=C("api-typing"),F=f;return c(),h("div",null,[I,O,V,t(s,{demos:r(e),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-calendar%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Evalue%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20value%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EDate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"calendar/basic","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-calendar%20v-model%3D%22value%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20value%20%3D%20ref(new%20Date())%0A%3C%2Fscript%3E%0A",description:"%3Cp%3E%E8%AE%BE%E7%BD%AE%20%3Ccode%3Evalue%3C%2Fcode%3E%20%E6%9D%A5%E6%8C%87%E5%AE%9A%E5%BD%93%E5%89%8D%E6%98%BE%E7%A4%BA%E7%9A%84%E6%9C%88%E4%BB%BD%E3%80%82%20%E5%A6%82%E6%9E%9C%20%3Ccode%3Evalue%3C%2Fcode%3E%20%E6%9C%AA%E6%8C%87%E5%AE%9A%EF%BC%8C%E5%88%99%E6%98%BE%E7%A4%BA%E5%BD%93%E6%9C%88%E3%80%82%20%3Ccode%3Evalue%3C%2Fcode%3E%20%E6%94%AF%E6%8C%81%20%3Ccode%3Ev-model%3C%2Fcode%3E%20%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A%E3%80%82%3C%2Fp%3E%0A"},{default:E(()=>[Y]),_:1},8,["demos"]),U,t(s,{demos:r(e),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-calendar%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%23date-cell%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20data%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ep%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Edata.isSelected%20%3F%20'is-selected'%20%3A%20''%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%7B%7B%20data.day.split('-').slice(1).join('-')%20%7D%7D%0A%20%20%20%20%20%20%20%20%7B%7B%20data.isSelected%20%3F%20'%E2%9C%94%EF%B8%8F'%20%3A%20''%20%7D%7D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ep%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-calendar%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0A%3Cspan%20class%3D%22token%20selector%22%3E.is-selected%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3Ecolor%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%231989fa%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"calendar/customize","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-calendar%3E%0A%20%20%20%20%3Ctemplate%20%23date-cell%3D%22%7B%20data%20%7D%22%3E%0A%20%20%20%20%20%20%3Cp%20%3Aclass%3D%22data.isSelected%20%3F%20'is-selected'%20%3A%20''%22%3E%0A%20%20%20%20%20%20%20%20%7B%7B%20data.day.split('-').slice(1).join('-')%20%7D%7D%0A%20%20%20%20%20%20%20%20%7B%7B%20data.isSelected%20%3F%20'%E2%9C%94%EF%B8%8F'%20%3A%20''%20%7D%7D%0A%20%20%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fel-calendar%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%3E%0A.is-selected%20%7B%0A%20%20color%3A%20%231989fa%3B%0A%7D%0A%3C%2Fstyle%3E%0A",description:"%3Cp%3E%E9%80%9A%E8%BF%87%E8%AE%BE%E7%BD%AE%E5%90%8D%E4%B8%BA%20%3Ccode%3Edate-cell%3C%2Fcode%3E%20%E7%9A%84%20%3Ccode%3Escoped-slot%3C%2Fcode%3E%20%E6%9D%A5%E8%87%AA%E5%AE%9A%E4%B9%89%E6%97%A5%E5%8E%86%E5%8D%95%E5%85%83%E6%A0%BC%E4%B8%AD%E6%98%BE%E7%A4%BA%E7%9A%84%E5%86%85%E5%AE%B9%E3%80%82%20%E5%9C%A8%20%3Ccode%3Escoped-slot%3C%2Fcode%3E%20%E5%8F%AF%E4%BB%A5%E8%8E%B7%E5%8F%96%E5%88%B0%20date%EF%BC%88%E5%BD%93%E5%89%8D%E5%8D%95%E5%85%83%E6%A0%BC%E7%9A%84%E6%97%A5%E6%9C%9F%EF%BC%89%2C%20data%EF%BC%88%E5%8C%85%E6%8B%AC%20type%EF%BC%8CisSelected%EF%BC%8Cday%20%E5%B1%9E%E6%80%A7%EF%BC%89%E3%80%82%20%E8%AF%A6%E6%83%85%E8%A7%A3%E9%87%8A%E5%8F%82%E8%80%83%E4%B8%8B%E6%96%B9%E7%9A%84%20API%20%E6%96%87%E6%A1%A3%E3%80%82%3C%2Fp%3E%0A"},{default:E(()=>[K]),_:1},8,["demos"]),R,t(s,{demos:r(e),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-calendar%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Arange%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%5Bnew%20Date(2019%2C%202%2C%204)%2C%20new%20Date(2019%2C%202%2C%2024)%5D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"calendar/range","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-calendar%20%3Arange%3D%22%5Bnew%20Date(2019%2C%202%2C%204)%2C%20new%20Date(2019%2C%202%2C%2024)%5D%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A",description:"%3Cp%3E%E8%AE%BE%E7%BD%AE%20%3Ccode%3Erange%3C%2Fcode%3E%20%E5%B1%9E%E6%80%A7%E6%8C%87%E5%AE%9A%E6%97%A5%E5%8E%86%E7%9A%84%E6%98%BE%E7%A4%BA%E8%8C%83%E5%9B%B4%E3%80%82%20%E5%BC%80%E5%A7%8B%E6%97%B6%E9%97%B4%E5%BF%85%E9%A1%BB%E6%98%AF%E5%91%A8%E8%B5%B7%E5%A7%8B%E6%97%A5%EF%BC%8C%E7%BB%93%E6%9D%9F%E6%97%B6%E9%97%B4%E5%BF%85%E9%A1%BB%E6%98%AF%E5%91%A8%E7%BB%93%E6%9D%9F%E6%97%A5%EF%BC%8C%E4%B8%94%E6%97%B6%E9%97%B4%E8%B7%A8%E5%BA%A6%E4%B8%8D%E8%83%BD%E8%B6%85%E8%BF%87%E4%B8%A4%E4%B8%AA%E6%9C%88%E3%80%82%3C%2Fp%3E%0A"},{default:E(()=>[G]),_:1},8,["demos"]),H,t(s,{demos:r(e),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-calendar%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ecalendar%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%23header%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20date%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3ECustom%20header%20content%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%7B%7B%20date%20%7D%7D%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button-group%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esize%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Esmall%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EselectDate('prev-year')%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20Previous%20Year%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esize%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Esmall%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EselectDate('prev-month')%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20Previous%20Month%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esize%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Esmall%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EselectDate('today')%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EToday%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esize%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Esmall%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EselectDate('next-month')%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20Next%20Month%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esize%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Esmall%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EselectDate('next-year')%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20Next%20Year%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button-group%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-calendar%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20type%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20CalendarDateType%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20CalendarInstance%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'element-plus'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20calendar%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20ref%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3ECalendarInstance%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EselectDate%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3E%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eval%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20CalendarDateType%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eif%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E!%3C%2Fspan%3Ecalendar%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%0A%20%20calendar%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3EselectDate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Eval%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"calendar/header","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-calendar%20ref%3D%22calendar%22%3E%0A%20%20%20%20%3Ctemplate%20%23header%3D%22%7B%20date%20%7D%22%3E%0A%20%20%20%20%20%20%3Cspan%3ECustom%20header%20content%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%3E%7B%7B%20date%20%7D%7D%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cel-button-group%3E%0A%20%20%20%20%20%20%20%20%3Cel-button%20size%3D%22small%22%20%40click%3D%22selectDate('prev-year')%22%3E%0A%20%20%20%20%20%20%20%20%20%20Previous%20Year%0A%20%20%20%20%20%20%20%20%3C%2Fel-button%3E%0A%20%20%20%20%20%20%20%20%3Cel-button%20size%3D%22small%22%20%40click%3D%22selectDate('prev-month')%22%3E%0A%20%20%20%20%20%20%20%20%20%20Previous%20Month%0A%20%20%20%20%20%20%20%20%3C%2Fel-button%3E%0A%20%20%20%20%20%20%20%20%3Cel-button%20size%3D%22small%22%20%40click%3D%22selectDate('today')%22%3EToday%3C%2Fel-button%3E%0A%20%20%20%20%20%20%20%20%3Cel-button%20size%3D%22small%22%20%40click%3D%22selectDate('next-month')%22%3E%0A%20%20%20%20%20%20%20%20%20%20Next%20Month%0A%20%20%20%20%20%20%20%20%3C%2Fel-button%3E%0A%20%20%20%20%20%20%20%20%3Cel-button%20size%3D%22small%22%20%40click%3D%22selectDate('next-year')%22%3E%0A%20%20%20%20%20%20%20%20%20%20Next%20Year%0A%20%20%20%20%20%20%20%20%3C%2Fel-button%3E%0A%20%20%20%20%20%20%3C%2Fel-button-group%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fel-calendar%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aimport%20type%20%7B%20CalendarDateType%2C%20CalendarInstance%20%7D%20from%20'element-plus'%0A%0Aconst%20calendar%20%3D%20ref%3CCalendarInstance%3E()%0Aconst%20selectDate%20%3D%20(val%3A%20CalendarDateType)%20%3D%3E%20%7B%0A%20%20if%20(!calendar.value)%20return%0A%20%20calendar.value.selectDate(val)%0A%7D%0A%3C%2Fscript%3E%0A",description:""},{default:E(()=>[J]),_:1},8,["demos"]),L,a("div",Q,[a("table",null,[W,a("tbody",null,[a("tr",null,[X,Z,a("td",null,[t(p,{type:"Date",details:""})]),a2]),a("tr",null,[n2,s2,a("td",null,[t(p,{type:"array",details:"[Date, Date]"})]),t2])])])]),e2,a("div",p2,[a("table",null,[E2,a("tbody",null,[a("tr",null,[l2,o2,a("td",null,[t(p,{type:"object",details:"{ data: { type: 'prev-month' | 'current-month' | 'next-month', isSelected: boolean, day: string, date: Date } }"})])]),a("tr",null,[C2,c2,a("td",null,[t(p,{type:"object",details:"{ date: string }"})])])])])]),u2,a("p",null,[a("a",D2,[n("\u6587\u6863"),t(F,{class:"link-icon"})])])])}}});export{F2 as __pageData,k2 as default};
