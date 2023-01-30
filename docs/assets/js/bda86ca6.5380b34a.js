"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7669],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),v=c(r),f=i,d=v["".concat(s,".").concat(f)]||v[f]||u[f]||o;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=v;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},962:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={title:"Trivy"},a=void 0,l={unversionedId:"trivy",id:"version-v1.0.0-beta.2/trivy",title:"Trivy",description:"Trivy Provider Options",source:"@site/versioned_docs/version-v1.0.0-beta.2/trivy.md",sourceDirName:".",slug:"/trivy",permalink:"/eraser/docs/v1.0.0-beta.2/trivy",draft:!1,tags:[],version:"v1.0.0-beta.2",frontMatter:{title:"Trivy"},sidebar:"sidebar",previous:{title:"Custom Scanner",permalink:"/eraser/docs/v1.0.0-beta.2/custom-scanner"},next:{title:"FAQ",permalink:"/eraser/docs/v1.0.0-beta.2/faq"}},s={},c=[{value:"Trivy Provider Options",id:"trivy-provider-options",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"trivy-provider-options"},"Trivy Provider Options"),(0,i.kt)("p",null,"The trivy provider is used in Eraser for image scanning and detecting vulnerabilities. The following arguments can be supplied to the scanner to specify which types of images will be detected for removal by the trivy scanner container:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"--ignore-unfixed: boolean to report only fixed vulnerabilities (default true)"),(0,i.kt)("li",{parentName:"ul"},'--security-checks: comma-separated list of what security issues to detect (default "vuln")'),(0,i.kt)("li",{parentName:"ul"},'--vuln-type: list of severity levels to report  (default "CRITICAL")'),(0,i.kt)("li",{parentName:"ul"},"--delete-scan-failed-images : boolean to delete images for which scanning has failed (default true)")))}u.isMDXComponent=!0}}]);