(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6524],{61013:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categoryMenus",function(){return r(26554)}])},12422:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createAsyncLocalStorage",{enumerable:!0,get:function(){return createAsyncLocalStorage}});let r=Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");let FakeAsyncLocalStorage=class FakeAsyncLocalStorage{disable(){throw r}getStore(){}run(){throw r}exit(){throw r}enterWith(){throw r}};let n=globalThis.AsyncLocalStorage;function createAsyncLocalStorage(){return n?new n:new FakeAsyncLocalStorage}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},88427:function(e,t,r){"use strict";function clientHookInServerComponentError(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return clientHookInServerComponentError}}),r(38754),r(67294),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30636:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return ReadonlyURLSearchParams},useSearchParams:function(){return useSearchParams},usePathname:function(){return usePathname},ServerInsertedHTMLContext:function(){return c.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return c.useServerInsertedHTML},useRouter:function(){return useRouter},useParams:function(){return useParams},useSelectedLayoutSegments:function(){return useSelectedLayoutSegments},useSelectedLayoutSegment:function(){return useSelectedLayoutSegment},redirect:function(){return l.redirect},permanentRedirect:function(){return l.permanentRedirect},RedirectType:function(){return l.RedirectType},notFound:function(){return s.notFound}});let n=r(67294),o=r(89031),u=r(11593),i=r(88427),a=r(6160),c=r(30252),l=r(37866),s=r(49363),d=Symbol("internal for urlsearchparams readonly");function readonlyURLSearchParamsError(){return Error("ReadonlyURLSearchParams cannot be modified")}let ReadonlyURLSearchParams=class ReadonlyURLSearchParams{[Symbol.iterator](){return this[d][Symbol.iterator]()}append(){throw readonlyURLSearchParamsError()}delete(){throw readonlyURLSearchParamsError()}set(){throw readonlyURLSearchParamsError()}sort(){throw readonlyURLSearchParamsError()}constructor(e){this[d]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e),this.size=e.size}};function useSearchParams(){(0,i.clientHookInServerComponentError)("useSearchParams");let e=(0,n.useContext)(u.SearchParamsContext),t=(0,n.useMemo)(()=>e?new ReadonlyURLSearchParams(e):null,[e]);return t}function usePathname(){return(0,i.clientHookInServerComponentError)("usePathname"),(0,n.useContext)(u.PathnameContext)}function useRouter(){(0,i.clientHookInServerComponentError)("useRouter");let e=(0,n.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function useParams(){(0,i.clientHookInServerComponentError)("useParams");let e=(0,n.useContext)(o.GlobalLayoutRouterContext),t=(0,n.useContext)(u.PathParamsContext);return(0,n.useMemo)(()=>(null==e?void 0:e.tree)?function getSelectedParams(e,t){void 0===t&&(t={});let r=e[1];for(let e of Object.values(r)){let r=e[0],n=Array.isArray(r),o=n?r[1]:r;if(!o||o.startsWith("__PAGE__"))continue;let u=n&&("c"===r[2]||"oc"===r[2]);u?t[r[0]]=r[1].split("/"):n&&(t[r[0]]=r[1]),t=getSelectedParams(e,t)}return t}(e.tree):t,[null==e?void 0:e.tree,t])}function useSelectedLayoutSegments(e){void 0===e&&(e="children"),(0,i.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,n.useContext)(o.LayoutRouterContext);return function getSelectedLayoutSegmentPath(e,t,r,n){let o;if(void 0===r&&(r=!0),void 0===n&&(n=[]),r)o=e[1][t];else{var u;let t=e[1];o=null!=(u=t.children)?u:Object.values(t)[0]}if(!o)return n;let i=o[0],c=(0,a.getSegmentValue)(i);return!c||c.startsWith("__PAGE__")?n:(n.push(c),getSelectedLayoutSegmentPath(o,t,!1,n))}(t,e)}function useSelectedLayoutSegment(e){void 0===e&&(e="children"),(0,i.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=useSelectedLayoutSegments(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},49363:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{notFound:function(){return notFound},isNotFoundError:function(){return isNotFoundError}});let r="NEXT_NOT_FOUND";function notFound(){let e=Error(r);throw e.digest=r,e}function isNotFoundError(e){return(null==e?void 0:e.digest)===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},37866:function(e,t,r){"use strict";var n,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return getRedirectError},redirect:function(){return redirect},permanentRedirect:function(){return permanentRedirect},isRedirectError:function(){return isRedirectError},getURLFromRedirectError:function(){return getURLFromRedirectError},getRedirectTypeFromError:function(){return getRedirectTypeFromError}});let u=r(23743),i="NEXT_REDIRECT";function getRedirectError(e,t,r){void 0===r&&(r=!1);let n=Error(i);n.digest=i+";"+t+";"+e+";"+r;let o=u.requestAsyncStorage.getStore();return o&&(n.mutableCookies=o.mutableCookies),n}function redirect(e,t){throw void 0===t&&(t="replace"),getRedirectError(e,t,!1)}function permanentRedirect(e,t){throw void 0===t&&(t="replace"),getRedirectError(e,t,!0)}function isRedirectError(e){if("string"!=typeof(null==e?void 0:e.digest))return!1;let[t,r,n,o]=e.digest.split(";",4);return t===i&&("replace"===r||"push"===r)&&"string"==typeof n&&("true"===o||"false"===o)}function getURLFromRedirectError(e){return isRedirectError(e)?e.digest.split(";",3)[2]:null}function getRedirectTypeFromError(e){if(!isRedirectError(e))throw Error("Not a redirect error");return e.digest.split(";",3)[1]}(o=n||(n={})).push="push",o.replace="replace",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},23743:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"requestAsyncStorage",{enumerable:!0,get:function(){return o}});let n=r(12422),o=(0,n.createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6160:function(e,t){"use strict";function getSegmentValue(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return getSegmentValue}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30252:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ServerInsertedHTMLContext:function(){return u},useServerInsertedHTML:function(){return useServerInsertedHTML}});let n=r(61757),o=n._(r(67294)),u=o.default.createContext(null);function useServerInsertedHTML(e){let t=(0,o.useContext)(u);t&&t(e)}},26554:function(e,t,r){"use strict";r.r(t);var n=r(85893),o=r(67294),u=r(9473),i=r(99128);r(41664);var a=r(39332),c=r(86886),l=r(15861),s=r(66242),d=r(72882),f=r(7906),h=r(53184),p=r(53816),y=r(98102),m=r(295),g=r(90629),S=r(68269),v=r(10633);t.default=function(e){let t=(0,u.I0)(),{push:r}=(0,a.useRouter)(),b=(0,u.v9)(i.V_),j=(0,u.v9)(i.de);(0,u.v9)(i.MF);let x=(0,u.v9)(i.hU),[_,P]=(0,o.useState)(1);return(0,o.useEffect)(()=>{t((0,i.Z6)({page:_}))},[_]),(0,u.v9)(e=>e.categoryMenus.data),(0,n.jsxs)(c.ZP,{container:!0,spacing:6,children:[(0,n.jsx)(c.ZP,{item:!0,xs:12,children:(0,n.jsx)(S.Z,{direction:"row",children:(0,n.jsx)(l.Z,{variant:"h5",children:"Category Menus"})})}),(0,n.jsx)(c.ZP,{item:!0,xs:12,children:(0,n.jsx)(s.Z,{children:(0,n.jsxs)(g.Z,{sx:{width:"100%",overflow:"hidden"},children:[b?(0,n.jsx)(l.Z,{variant:"h5",sx:{my:3},textAlign:"center",children:"Loading..."}):(0,n.jsx)(d.Z,{sx:{maxHeight:440},children:(0,n.jsxs)(f.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,n.jsx)(h.Z,{children:(0,n.jsxs)(p.Z,{children:[(0,n.jsx)(y.Z,{children:"ID"}),(0,n.jsx)(y.Z,{children:"Name"}),(0,n.jsx)(y.Z,{className:"text-center",width:"150",children:"Sub Category"})]})}),(0,n.jsx)(m.Z,{children:j.map(e=>(0,n.jsxs)(p.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:[(0,n.jsx)(y.Z,{children:(0,n.jsx)("span",{children:e.id})}),(0,n.jsx)(y.Z,{children:(0,n.jsx)("span",{children:e.name})}),e.children&&e.children.length>0&&(0,n.jsx)(p.Z,{children:(0,n.jsx)(y.Z,{colSpan:3,children:(0,n.jsx)(f.Z,{children:(0,n.jsx)(m.Z,{children:e.children.map(e=>(0,n.jsx)(p.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:(0,n.jsx)(y.Z,{children:(0,n.jsx)("span",{children:e.name})})},e.id))})})})})]},e.id))})]})}),(0,n.jsx)(S.Z,{direction:"row",sx:{my:4,display:b?"none":""},justifyContent:"center",children:(0,n.jsx)(v.Z,{count:x,onChange:function(e,t){P(t)}})})]})})})]})}},39332:function(e,t,r){e.exports=r(30636)}},function(e){e.O(0,[2657,9254,7169,9774,2888,179],function(){return e(e.s=61013)}),_N_E=e.O()}]);