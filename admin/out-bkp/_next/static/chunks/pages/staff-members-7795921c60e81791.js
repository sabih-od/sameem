(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4531],{66448:function(e,t,r){"use strict";t.Z=void 0;var n,o=(0,((n=r(65129))&&n.__esModule?n:{default:n}).default)("M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z","Delete");t.Z=o},22284:function(e,t,r){"use strict";t.Z=void 0;var n,o=(0,((n=r(65129))&&n.__esModule?n:{default:n}).default)("M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z","Pencil");t.Z=o},15734:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/staff-members",function(){return r(25430)}])},12422:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createAsyncLocalStorage",{enumerable:!0,get:function(){return createAsyncLocalStorage}});let r=Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");let FakeAsyncLocalStorage=class FakeAsyncLocalStorage{disable(){throw r}getStore(){}run(){throw r}exit(){throw r}enterWith(){throw r}};let n=globalThis.AsyncLocalStorage;function createAsyncLocalStorage(){return n?new n:new FakeAsyncLocalStorage}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},88427:function(e,t,r){"use strict";function clientHookInServerComponentError(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return clientHookInServerComponentError}}),r(38754),r(67294),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30636:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return ReadonlyURLSearchParams},useSearchParams:function(){return useSearchParams},usePathname:function(){return usePathname},ServerInsertedHTMLContext:function(){return l.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return l.useServerInsertedHTML},useRouter:function(){return useRouter},useParams:function(){return useParams},useSelectedLayoutSegments:function(){return useSelectedLayoutSegments},useSelectedLayoutSegment:function(){return useSelectedLayoutSegment},redirect:function(){return s.redirect},permanentRedirect:function(){return s.permanentRedirect},RedirectType:function(){return s.RedirectType},notFound:function(){return c.notFound}});let n=r(67294),o=r(89031),u=r(11593),i=r(88427),a=r(6160),l=r(30252),s=r(37866),c=r(49363),d=Symbol("internal for urlsearchparams readonly");function readonlyURLSearchParamsError(){return Error("ReadonlyURLSearchParams cannot be modified")}let ReadonlyURLSearchParams=class ReadonlyURLSearchParams{[Symbol.iterator](){return this[d][Symbol.iterator]()}append(){throw readonlyURLSearchParamsError()}delete(){throw readonlyURLSearchParamsError()}set(){throw readonlyURLSearchParamsError()}sort(){throw readonlyURLSearchParamsError()}constructor(e){this[d]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e),this.size=e.size}};function useSearchParams(){(0,i.clientHookInServerComponentError)("useSearchParams");let e=(0,n.useContext)(u.SearchParamsContext),t=(0,n.useMemo)(()=>e?new ReadonlyURLSearchParams(e):null,[e]);return t}function usePathname(){return(0,i.clientHookInServerComponentError)("usePathname"),(0,n.useContext)(u.PathnameContext)}function useRouter(){(0,i.clientHookInServerComponentError)("useRouter");let e=(0,n.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function useParams(){(0,i.clientHookInServerComponentError)("useParams");let e=(0,n.useContext)(o.GlobalLayoutRouterContext),t=(0,n.useContext)(u.PathParamsContext);return(0,n.useMemo)(()=>(null==e?void 0:e.tree)?function getSelectedParams(e,t){void 0===t&&(t={});let r=e[1];for(let e of Object.values(r)){let r=e[0],n=Array.isArray(r),o=n?r[1]:r;if(!o||o.startsWith("__PAGE__"))continue;let u=n&&("c"===r[2]||"oc"===r[2]);u?t[r[0]]=r[1].split("/"):n&&(t[r[0]]=r[1]),t=getSelectedParams(e,t)}return t}(e.tree):t,[null==e?void 0:e.tree,t])}function useSelectedLayoutSegments(e){void 0===e&&(e="children"),(0,i.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,n.useContext)(o.LayoutRouterContext);return function getSelectedLayoutSegmentPath(e,t,r,n){let o;if(void 0===r&&(r=!0),void 0===n&&(n=[]),r)o=e[1][t];else{var u;let t=e[1];o=null!=(u=t.children)?u:Object.values(t)[0]}if(!o)return n;let i=o[0],l=(0,a.getSegmentValue)(i);return!l||l.startsWith("__PAGE__")?n:(n.push(l),getSelectedLayoutSegmentPath(o,t,!1,n))}(t,e)}function useSelectedLayoutSegment(e){void 0===e&&(e="children"),(0,i.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=useSelectedLayoutSegments(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},49363:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{notFound:function(){return notFound},isNotFoundError:function(){return isNotFoundError}});let r="NEXT_NOT_FOUND";function notFound(){let e=Error(r);throw e.digest=r,e}function isNotFoundError(e){return(null==e?void 0:e.digest)===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},37866:function(e,t,r){"use strict";var n,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return getRedirectError},redirect:function(){return redirect},permanentRedirect:function(){return permanentRedirect},isRedirectError:function(){return isRedirectError},getURLFromRedirectError:function(){return getURLFromRedirectError},getRedirectTypeFromError:function(){return getRedirectTypeFromError}});let u=r(23743),i="NEXT_REDIRECT";function getRedirectError(e,t,r){void 0===r&&(r=!1);let n=Error(i);n.digest=i+";"+t+";"+e+";"+r;let o=u.requestAsyncStorage.getStore();return o&&(n.mutableCookies=o.mutableCookies),n}function redirect(e,t){throw void 0===t&&(t="replace"),getRedirectError(e,t,!1)}function permanentRedirect(e,t){throw void 0===t&&(t="replace"),getRedirectError(e,t,!0)}function isRedirectError(e){if("string"!=typeof(null==e?void 0:e.digest))return!1;let[t,r,n,o]=e.digest.split(";",4);return t===i&&("replace"===r||"push"===r)&&"string"==typeof n&&("true"===o||"false"===o)}function getURLFromRedirectError(e){return isRedirectError(e)?e.digest.split(";",3)[2]:null}function getRedirectTypeFromError(e){if(!isRedirectError(e))throw Error("Not a redirect error");return e.digest.split(";",3)[1]}(o=n||(n={})).push="push",o.replace="replace",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},23743:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"requestAsyncStorage",{enumerable:!0,get:function(){return o}});let n=r(12422),o=(0,n.createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6160:function(e,t){"use strict";function getSegmentValue(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return getSegmentValue}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30252:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ServerInsertedHTMLContext:function(){return u},useServerInsertedHTML:function(){return useServerInsertedHTML}});let n=r(61757),o=n._(r(67294)),u=o.default.createContext(null);function useServerInsertedHTML(e){let t=(0,o.useContext)(u);t&&t(e)}},25430:function(e,t,r){"use strict";r.r(t);var n=r(85893),o=r(67294),u=r(9473),i=r(55220),a=r(41664),l=r.n(a),s=r(39332),c=r(86886),d=r(15861),f=r(66242),h=r(72882),m=r(7906),p=r(53184),g=r(53816),y=r(98102),v=r(295),x=r(90629),S=r(69417),b=r(68269),j=r(46198),_=r(93946),P=r(10633),L=r(22284),E=r(66448);t.default=function(e){let t=(0,u.I0)(),{push:r}=(0,s.useRouter)(),a=(0,u.v9)(i.V_),R=(0,u.v9)(i.Wg);(0,u.v9)(i.MF);let M=(0,u.v9)(i.hU),[Z,C]=(0,o.useState)(1),truncate=(e,t)=>e.length>t?"".concat(e.substring(0,t),"..."):e,handleDelete=async(e,r)=>{e.preventDefault(),await t((0,i.Qu)({id:r})),await t((0,i.$x)({page:Z}))};return(0,o.useEffect)(()=>{t((0,i.$x)({page:Z}))},[Z]),(0,n.jsxs)(c.ZP,{container:!0,spacing:6,children:[(0,n.jsx)(c.ZP,{item:!0,xs:12,children:(0,n.jsxs)(b.Z,{direction:"row",children:[(0,n.jsx)(d.Z,{variant:"h5",children:"Staff Members"}),(0,n.jsx)(S.Z,{component:l(),href:"/staff-members/create",sx:{marginLeft:"auto"},children:"Create Staff Member"})]})}),(0,n.jsx)(c.ZP,{item:!0,xs:12,children:(0,n.jsx)(f.Z,{children:(0,n.jsxs)(x.Z,{sx:{width:"100%",overflow:"hidden"},children:[a?(0,n.jsx)(d.Z,{variant:"h5",sx:{my:3},textAlign:"center",children:"Loading..."}):(0,n.jsx)(h.Z,{sx:{maxHeight:440},children:(0,n.jsxs)(m.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,n.jsx)(p.Z,{children:(0,n.jsxs)(g.Z,{children:[(0,n.jsx)(y.Z,{children:"ID"}),(0,n.jsx)(y.Z,{children:"Name"}),(0,n.jsx)(y.Z,{children:"description"}),(0,n.jsx)(y.Z,{className:"text-center",width:"150",children:"Image"}),(0,n.jsx)(y.Z,{children:"Action"})]})}),(0,n.jsx)(v.Z,{children:R.map(e=>(0,n.jsxs)(g.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:[(0,n.jsx)(y.Z,{children:(0,n.jsx)("span",{children:e.id})}),(0,n.jsx)(y.Z,{children:(0,n.jsx)("span",{children:e.name})}),(0,n.jsx)(y.Z,{children:(0,n.jsx)(j.Z,{title:e.description,children:(0,n.jsx)("span",{children:truncate(e.description,50)})})}),(0,n.jsx)(y.Z,{className:"text-center",children:null!==e.image&&"null"!==e.image?(0,n.jsx)(S.Z,{tag:"a",href:e.image,target:"_blank",layout:"link",size:"small",children:"View Image"}):null}),(0,n.jsxs)(y.Z,{width:"200",children:[(0,n.jsx)(_.Z,{size:"small",variant:"outlined",onClick:t=>{t.preventDefault(),r("/staff-members/".concat(e.id))},sx:{marginLeft:"auto"},children:(0,n.jsx)(L.Z,{})}),(0,n.jsx)(_.Z,{size:"small",variant:"outlined",onClick:t=>handleDelete(t,e.id),sx:{marginLeft:"auto"},children:(0,n.jsx)(E.Z,{})})]})]},e.id))})]})}),(0,n.jsx)(b.Z,{direction:"row",sx:{my:4,display:a?"none":""},justifyContent:"center",children:(0,n.jsx)(P.Z,{count:M,onChange:function(e,t){C(t)}})})]})})})]})}},39332:function(e,t,r){e.exports=r(30636)}},function(e){e.O(0,[2657,9254,7169,5551,2108,9774,2888,179],function(){return e(e.s=15734)}),_N_E=e.O()}]);