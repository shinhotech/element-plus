const l={outputDir:"/themeStyle/",defaultScopeName:"theme-default",includeStyleWithColors:[{}],extract:!0,themeLinkTagId:"theme-link-tag",themeLinkTagInjectTo:"body",removeCssScopeName:!1,arbitraryMode:!1,defaultPrimaryColor:"",customThemeOutputPath:"/Users/sura/Documents/shinho\u9879\u76EE/\u57FA\u5EFA/sh-design-plus-docs/node_modules/.pnpm/@zougt+vite-plugin-theme-preprocessor@1.4.8/node_modules/@zougt/vite-plugin-theme-preprocessor/setCustomTheme.js",styleTagId:"custom-theme-tagid",InjectDefaultStyleTagToHtml:!0,hueDiffControls:{low:0,high:0},multipleScopeVars:[{scopeName:"theme-default",path:"/Users/sura/Documents/shinho\u9879\u76EE/\u57FA\u5EFA/sh-design-plus-docs/docs/componentTheme/theme-default.scss"},{scopeName:"theme-blue",path:"/Users/sura/Documents/shinho\u9879\u76EE/\u57FA\u5EFA/sh-design-plus-docs/docs/componentTheme/theme-blue.scss"}]},u="/sh-element-plus/";function m(s){return`(^${s}\\s+|\\s+${s}\\s+|\\s+${s}$|^${s}$)`}function a({scopeName:s,multipleScopeVars:t}){const n=Array.isArray(t)&&t.length?t:l.multipleScopeVars;let e=document.documentElement.className;new RegExp(m(s)).test(e)||(n.forEach(r=>{e=e.replace(new RegExp(m(r.scopeName),"g"),` ${s} `)}),document.documentElement.className=e.replace(/(^\s+|\s+$)/g,""))}function c({id:s,href:t}){const n=document.createElement("link");return n.rel="stylesheet",n.href=t,n.id=s,n}function i(s){const t={scopeName:"theme-default",customLinkHref:o=>o,...s},n=t.themeLinkTagId||l.themeLinkTagId;let e=document.getElementById(n);const r=t.customLinkHref(`${u.replace(/\/$/,"")}${`/${l.outputDir}/${t.scopeName}.css`.replace(/\/+(?=\/)/g,"")}`);if(e){e.id=`${n}_old`;const o=c({id:n,href:r});e.nextSibling?e.parentNode.insertBefore(o,e.nextSibling):e.parentNode.appendChild(o),o.onload=()=>{setTimeout(()=>{e.parentNode.removeChild(e),e=null},60),a(t)};return}e=c({id:n,href:r}),a(t),document[(t.themeLinkTagInjectTo||l.themeLinkTagInjectTo||"").replace("-prepend","")].appendChild(e)}var d={toggleTheme:i,addClassNameToHtmlTag:a};export{a as addClassNameToHtmlTag,d as default,i as toggleTheme};
