(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3161],{69417:function(e,t,r){"use strict";r.d(t,{Z:function(){return Z}});var n=r(63366),o=r(87462),a=r(67294),i=r(63961),l=r(62236),s=r(58510),c=r(2101),u=r(90948),d=r(14136),f=r(71657),p=r(82607),h=r(98216),m=r(1977),v=r(8027);function getButtonUtilityClass(e){return(0,v.ZP)("MuiButton",e)}let g=(0,m.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),y=a.createContext({}),x=a.createContext(void 0);var b=r(85893);let S=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],useUtilityClasses=e=>{let{color:t,disableElevation:r,fullWidth:n,size:a,variant:i,classes:l}=e,c={root:["root",i,`${i}${(0,h.Z)(t)}`,`size${(0,h.Z)(a)}`,`${i}Size${(0,h.Z)(a)}`,`color${(0,h.Z)(t)}`,r&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${(0,h.Z)(a)}`],endIcon:["icon","endIcon",`iconSize${(0,h.Z)(a)}`]},u=(0,s.Z)(c,getButtonUtilityClass,l);return(0,o.Z)({},l,u)},commonIconStyles=e=>(0,o.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),C=(0,u.ZP)(p.Z,{shouldForwardProp:e=>(0,d.Z)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],t[`${r.variant}${(0,h.Z)(r.color)}`],t[`size${(0,h.Z)(r.size)}`],t[`${r.variant}Size${(0,h.Z)(r.size)}`],"inherit"===r.color&&t.colorInherit,r.disableElevation&&t.disableElevation,r.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var r,n;let a="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],i="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,o.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,o.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:i,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,o.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${g.focusVisible}`]:(0,o.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${g.disabled}`]:(0,o.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(r=(n=e.palette).getContrastText)?void 0:r.call(n,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:a,boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${g.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${g.disabled}`]:{boxShadow:"none"}}),j=(0,u.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.startIcon,t[`iconSize${(0,h.Z)(r.size)}`]]}})(({ownerState:e})=>(0,o.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},commonIconStyles(e))),P=(0,u.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.endIcon,t[`iconSize${(0,h.Z)(r.size)}`]]}})(({ownerState:e})=>(0,o.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},commonIconStyles(e))),_=a.forwardRef(function(e,t){let r=a.useContext(y),s=a.useContext(x),c=(0,l.Z)(r,e),u=(0,f.Z)({props:c,name:"MuiButton"}),{children:d,color:p="primary",component:h="button",className:m,disabled:v=!1,disableElevation:g=!1,disableFocusRipple:_=!1,endIcon:Z,focusVisibleClassName:R,fullWidth:E=!1,size:L="medium",startIcon:w,type:z,variant:I="text"}=u,M=(0,n.Z)(u,S),O=(0,o.Z)({},u,{color:p,component:h,disabled:v,disableElevation:g,disableFocusRipple:_,fullWidth:E,size:L,type:z,variant:I}),k=useUtilityClasses(O),T=w&&(0,b.jsx)(j,{className:k.startIcon,ownerState:O,children:w}),$=Z&&(0,b.jsx)(P,{className:k.endIcon,ownerState:O,children:Z}),H=s||"";return(0,b.jsxs)(C,(0,o.Z)({ownerState:O,className:(0,i.Z)(r.className,k.root,m,H),component:h,disabled:v,focusRipple:!_,focusVisibleClassName:(0,i.Z)(k.focusVisible,R),ref:t,type:z},M,{classes:k,children:[T,d,$]}))});var Z=_},66448:function(e,t,r){"use strict";t.Z=void 0;var n,o=(0,((n=r(65129))&&n.__esModule?n:{default:n}).default)("M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z","Delete");t.Z=o},22284:function(e,t,r){"use strict";t.Z=void 0;var n,o=(0,((n=r(65129))&&n.__esModule?n:{default:n}).default)("M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z","Pencil");t.Z=o},78001:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categories",function(){return r(92193)}])},12422:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createAsyncLocalStorage",{enumerable:!0,get:function(){return createAsyncLocalStorage}});let r=Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");let FakeAsyncLocalStorage=class FakeAsyncLocalStorage{disable(){throw r}getStore(){}run(){throw r}exit(){throw r}enterWith(){throw r}};let n=globalThis.AsyncLocalStorage;function createAsyncLocalStorage(){return n?new n:new FakeAsyncLocalStorage}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},88427:function(e,t,r){"use strict";function clientHookInServerComponentError(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return clientHookInServerComponentError}}),r(38754),r(67294),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30636:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return ReadonlyURLSearchParams},useSearchParams:function(){return useSearchParams},usePathname:function(){return usePathname},ServerInsertedHTMLContext:function(){return s.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return s.useServerInsertedHTML},useRouter:function(){return useRouter},useParams:function(){return useParams},useSelectedLayoutSegments:function(){return useSelectedLayoutSegments},useSelectedLayoutSegment:function(){return useSelectedLayoutSegment},redirect:function(){return c.redirect},permanentRedirect:function(){return c.permanentRedirect},RedirectType:function(){return c.RedirectType},notFound:function(){return u.notFound}});let n=r(67294),o=r(89031),a=r(11593),i=r(88427),l=r(6160),s=r(30252),c=r(37866),u=r(49363),d=Symbol("internal for urlsearchparams readonly");function readonlyURLSearchParamsError(){return Error("ReadonlyURLSearchParams cannot be modified")}let ReadonlyURLSearchParams=class ReadonlyURLSearchParams{[Symbol.iterator](){return this[d][Symbol.iterator]()}append(){throw readonlyURLSearchParamsError()}delete(){throw readonlyURLSearchParamsError()}set(){throw readonlyURLSearchParamsError()}sort(){throw readonlyURLSearchParamsError()}constructor(e){this[d]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e),this.size=e.size}};function useSearchParams(){(0,i.clientHookInServerComponentError)("useSearchParams");let e=(0,n.useContext)(a.SearchParamsContext),t=(0,n.useMemo)(()=>e?new ReadonlyURLSearchParams(e):null,[e]);return t}function usePathname(){return(0,i.clientHookInServerComponentError)("usePathname"),(0,n.useContext)(a.PathnameContext)}function useRouter(){(0,i.clientHookInServerComponentError)("useRouter");let e=(0,n.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function useParams(){(0,i.clientHookInServerComponentError)("useParams");let e=(0,n.useContext)(o.GlobalLayoutRouterContext),t=(0,n.useContext)(a.PathParamsContext);return(0,n.useMemo)(()=>(null==e?void 0:e.tree)?function getSelectedParams(e,t){void 0===t&&(t={});let r=e[1];for(let e of Object.values(r)){let r=e[0],n=Array.isArray(r),o=n?r[1]:r;if(!o||o.startsWith("__PAGE__"))continue;let a=n&&("c"===r[2]||"oc"===r[2]);a?t[r[0]]=r[1].split("/"):n&&(t[r[0]]=r[1]),t=getSelectedParams(e,t)}return t}(e.tree):t,[null==e?void 0:e.tree,t])}function useSelectedLayoutSegments(e){void 0===e&&(e="children"),(0,i.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,n.useContext)(o.LayoutRouterContext);return function getSelectedLayoutSegmentPath(e,t,r,n){let o;if(void 0===r&&(r=!0),void 0===n&&(n=[]),r)o=e[1][t];else{var a;let t=e[1];o=null!=(a=t.children)?a:Object.values(t)[0]}if(!o)return n;let i=o[0],s=(0,l.getSegmentValue)(i);return!s||s.startsWith("__PAGE__")?n:(n.push(s),getSelectedLayoutSegmentPath(o,t,!1,n))}(t,e)}function useSelectedLayoutSegment(e){void 0===e&&(e="children"),(0,i.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=useSelectedLayoutSegments(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},49363:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{notFound:function(){return notFound},isNotFoundError:function(){return isNotFoundError}});let r="NEXT_NOT_FOUND";function notFound(){let e=Error(r);throw e.digest=r,e}function isNotFoundError(e){return(null==e?void 0:e.digest)===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},37866:function(e,t,r){"use strict";var n,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return getRedirectError},redirect:function(){return redirect},permanentRedirect:function(){return permanentRedirect},isRedirectError:function(){return isRedirectError},getURLFromRedirectError:function(){return getURLFromRedirectError},getRedirectTypeFromError:function(){return getRedirectTypeFromError}});let a=r(23743),i="NEXT_REDIRECT";function getRedirectError(e,t,r){void 0===r&&(r=!1);let n=Error(i);n.digest=i+";"+t+";"+e+";"+r;let o=a.requestAsyncStorage.getStore();return o&&(n.mutableCookies=o.mutableCookies),n}function redirect(e,t){throw void 0===t&&(t="replace"),getRedirectError(e,t,!1)}function permanentRedirect(e,t){throw void 0===t&&(t="replace"),getRedirectError(e,t,!0)}function isRedirectError(e){if("string"!=typeof(null==e?void 0:e.digest))return!1;let[t,r,n,o]=e.digest.split(";",4);return t===i&&("replace"===r||"push"===r)&&"string"==typeof n&&("true"===o||"false"===o)}function getURLFromRedirectError(e){return isRedirectError(e)?e.digest.split(";",3)[2]:null}function getRedirectTypeFromError(e){if(!isRedirectError(e))throw Error("Not a redirect error");return e.digest.split(";",3)[1]}(o=n||(n={})).push="push",o.replace="replace",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},23743:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"requestAsyncStorage",{enumerable:!0,get:function(){return o}});let n=r(12422),o=(0,n.createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6160:function(e,t){"use strict";function getSegmentValue(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return getSegmentValue}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30252:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ServerInsertedHTMLContext:function(){return a},useServerInsertedHTML:function(){return useServerInsertedHTML}});let n=r(61757),o=n._(r(67294)),a=o.default.createContext(null);function useServerInsertedHTML(e){let t=(0,o.useContext)(a);t&&t(e)}},92193:function(e,t,r){"use strict";r.r(t);var n=r(85893),o=r(67294),a=r(9473),i=r(19736),l=r(41664),s=r.n(l),c=r(39332),u=r(86886),d=r(15861),f=r(66242),p=r(72882),h=r(7906),m=r(53184),v=r(53816),g=r(98102),y=r(295),x=r(90629),b=r(69417),S=r(68269),C=r(93946),j=r(10633),P=r(22284),_=r(66448);t.default=function(e){let t=(0,a.I0)(),{push:r}=(0,c.useRouter)(),l=(0,a.v9)(i.V_),Z=(0,a.v9)(i.bd);(0,a.v9)(i.MF);let R=(0,a.v9)(i.hU),[E,L]=(0,o.useState)(1),handleDelete=async(e,r)=>{e.preventDefault(),await t((0,i.uu)({id:r})),await t((0,i.CP)({page:E}))};(0,o.useEffect)(()=>{t((0,i.CP)({page:E}))},[E]),(0,a.v9)(e=>e.categories.data);let getParentName=e=>{let t=Z.find(t=>t.id===e);return t?t.name:"N/A"};return(0,n.jsxs)(u.ZP,{container:!0,spacing:6,children:[(0,n.jsx)(u.ZP,{item:!0,xs:12,children:(0,n.jsxs)(S.Z,{direction:"row",children:[(0,n.jsx)(d.Z,{variant:"h5",children:"Categories"}),(0,n.jsx)(b.Z,{component:s(),href:"/categories/create",sx:{marginLeft:"auto"},children:"Create Categories"})]})}),(0,n.jsx)(u.ZP,{item:!0,xs:12,children:(0,n.jsx)(f.Z,{children:(0,n.jsxs)(x.Z,{sx:{width:"100%",overflow:"hidden"},children:[l?(0,n.jsx)(d.Z,{variant:"h5",sx:{my:3},textAlign:"center",children:"Loading..."}):(0,n.jsx)(p.Z,{sx:{maxHeight:440},children:(0,n.jsxs)(h.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,n.jsx)(m.Z,{children:(0,n.jsxs)(v.Z,{children:[(0,n.jsx)(g.Z,{children:"ID"}),(0,n.jsx)(g.Z,{children:"Name"}),(0,n.jsx)(g.Z,{className:"text-center",width:"150",children:"Parent Category"}),(0,n.jsx)(g.Z,{children:"Action"})]})}),(0,n.jsx)(y.Z,{children:Z.map(e=>(0,n.jsxs)(v.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:[(0,n.jsx)(g.Z,{children:(0,n.jsx)("span",{children:e.id})}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("span",{children:e.name})}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("span",{children:getParentName(e.parent_id)})}),(0,n.jsxs)(g.Z,{width:"200",children:[(0,n.jsx)(C.Z,{size:"small",variant:"outlined",onClick:t=>{t.preventDefault(),r("/categories/".concat(e.id))},sx:{marginLeft:"auto"},children:(0,n.jsx)(P.Z,{})}),(0,n.jsx)(C.Z,{size:"small",variant:"outlined",onClick:t=>handleDelete(t,e.id),sx:{marginLeft:"auto"},children:(0,n.jsx)(_.Z,{})})]})]},e.id))})]})}),(0,n.jsx)(S.Z,{direction:"row",sx:{my:4,display:l?"none":""},justifyContent:"center",children:(0,n.jsx)(j.Z,{count:R,onChange:function(e,t){L(t)}})})]})})})]})}},39332:function(e,t,r){e.exports=r(30636)}},function(e){e.O(0,[2657,9254,7169,9774,2888,179],function(){return e(e.s=78001)}),_N_E=e.O()}]);