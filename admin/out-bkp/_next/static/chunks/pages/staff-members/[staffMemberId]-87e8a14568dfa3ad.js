(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8993,843],{92401:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var l=r(87462),o=r(63366),s=r(67294),n=r(63961),i=r(58510),a=r(78114),c=r(90948),u=r(15861),d=r(1977),p=r(8027);function getAlertTitleUtilityClass(e){return(0,p.ZP)("MuiAlertTitle",e)}(0,d.Z)("MuiAlertTitle",["root"]);var m=r(85893);let f=["className"],h=(0,a.U)("MuiAlertTitle"),useUtilityClasses=e=>{let{classes:t}=e;return(0,i.Z)({root:["root"]},getAlertTitleUtilityClass,t)},v=(0,c.ZP)(u.Z,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})),g=s.forwardRef(function(e,t){let r=h({props:e,name:"MuiAlertTitle"}),{className:s}=r,i=(0,o.Z)(r,f),a=useUtilityClasses(r);return(0,m.jsx)(v,(0,l.Z)({gutterBottom:!0,component:"div",ownerState:r,ref:t,className:(0,n.Z)(a.root,s)},i))});var y=g},21737:function(e,t,r){"use strict";r.d(t,{Z:function(){return $}});var l=r(63366),o=r(87462),s=r(67294),n=r(63961),i=r(58510),a=r(2101),c=r(78114),u=r(90948),d=r(80560),p=r(98216),m=r(90629),f=r(1977),h=r(8027);function getAlertUtilityClass(e){return(0,h.ZP)("MuiAlert",e)}let v=(0,f.Z)("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var g=r(93946),y=r(88169),Z=r(85893),x=(0,y.Z)((0,Z.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),S=(0,y.Z)((0,Z.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),A=(0,y.Z)((0,Z.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),j=(0,y.Z)((0,Z.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),C=(0,y.Z)((0,Z.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");let b=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],M=(0,c.U)("MuiAlert"),useUtilityClasses=e=>{let{variant:t,color:r,severity:l,classes:o}=e,s={root:["root",`color${(0,p.Z)(r||l)}`,`${t}${(0,p.Z)(r||l)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return(0,i.Z)(s,getAlertUtilityClass,o)},w=(0,u.ZP)(m.Z,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],t[`${r.variant}${(0,p.Z)(r.color||r.severity)}`]]}})(({theme:e})=>{let t="light"===e.palette.mode?a._j:a.$n,r="light"===e.palette.mode?a.$n:a._j;return(0,o.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(e.palette).filter(([,e])=>e.main&&e.light).map(([l])=>({props:{colorSeverity:l,variant:"standard"},style:{color:e.vars?e.vars.palette.Alert[`${l}Color`]:t(e.palette[l].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${l}StandardBg`]:r(e.palette[l].light,.9),[`& .${v.icon}`]:e.vars?{color:e.vars.palette.Alert[`${l}IconColor`]}:{color:e.palette[l].main}}})),...Object.entries(e.palette).filter(([,e])=>e.main&&e.light).map(([r])=>({props:{colorSeverity:r,variant:"outlined"},style:{color:e.vars?e.vars.palette.Alert[`${r}Color`]:t(e.palette[r].light,.6),border:`1px solid ${(e.vars||e).palette[r].light}`,[`& .${v.icon}`]:e.vars?{color:e.vars.palette.Alert[`${r}IconColor`]}:{color:e.palette[r].main}}})),...Object.entries(e.palette).filter(([,e])=>e.main&&e.dark).map(([t])=>({props:{colorSeverity:t,variant:"filled"},style:(0,o.Z)({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${t}FilledColor`],backgroundColor:e.vars.palette.Alert[`${t}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[t].dark:e.palette[t].main,color:e.palette.getContrastText(e.palette[t].main)})}))]})}),P=(0,u.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),k=(0,u.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),R=(0,u.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),_={success:(0,Z.jsx)(x,{fontSize:"inherit"}),warning:(0,Z.jsx)(S,{fontSize:"inherit"}),error:(0,Z.jsx)(A,{fontSize:"inherit"}),info:(0,Z.jsx)(j,{fontSize:"inherit"})},T=s.forwardRef(function(e,t){let r=M({props:e,name:"MuiAlert"}),{action:s,children:i,className:a,closeText:c="Close",color:u,components:p={},componentsProps:m={},icon:f,iconMapping:h=_,onClose:v,role:y="alert",severity:x="success",slotProps:S={},slots:A={},variant:j="standard"}=r,T=(0,l.Z)(r,b),$=(0,o.Z)({},r,{color:u,severity:x,variant:j,colorSeverity:u||x}),N=useUtilityClasses($),E={slots:(0,o.Z)({closeButton:p.CloseButton,closeIcon:p.CloseIcon},A),slotProps:(0,o.Z)({},m,S)},[L,I]=(0,d.Z)("closeButton",{elementType:g.Z,externalForwardedProps:E,ownerState:$}),[O,z]=(0,d.Z)("closeIcon",{elementType:C,externalForwardedProps:E,ownerState:$});return(0,Z.jsxs)(w,(0,o.Z)({role:y,elevation:0,ownerState:$,className:(0,n.Z)(N.root,a),ref:t},T,{children:[!1!==f?(0,Z.jsx)(P,{ownerState:$,className:N.icon,children:f||h[x]||_[x]}):null,(0,Z.jsx)(k,{ownerState:$,className:N.message,children:i}),null!=s?(0,Z.jsx)(R,{ownerState:$,className:N.action,children:s}):null,null==s&&v?(0,Z.jsx)(R,{ownerState:$,className:N.action,children:(0,Z.jsx)(L,(0,o.Z)({size:"small","aria-label":c,title:c,color:"inherit",onClick:v},I,{children:(0,Z.jsx)(O,(0,o.Z)({fontSize:"small"},z))}))}):null]}))});var $=T},68269:function(e,t,r){"use strict";r.d(t,{Z:function(){return k}});var l=r(63366),o=r(87462),s=r(67294),n=r(70828),i=r(68027),a=r(8027),c=r(58510),u=r(63390),d=r(17172),p=r(86523);let m=["ownerState"],f=["variants"],h=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function shouldForwardProp(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}let v=(0,d.Z)(),lowercaseFirstLetter=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function resolveTheme({defaultTheme:e,theme:t,themeId:r}){return 0===Object.keys(t).length?e:t[r]||t}function processStyleArg(e,t){let{ownerState:r}=t,s=(0,l.Z)(t,m),n="function"==typeof e?e((0,o.Z)({ownerState:r},s)):e;if(Array.isArray(n))return n.flatMap(e=>processStyleArg(e,(0,o.Z)({ownerState:r},s)));if(n&&"object"==typeof n&&Array.isArray(n.variants)){let{variants:e=[]}=n,t=(0,l.Z)(n,f),i=t;return e.forEach(e=>{let t=!0;"function"==typeof e.props?t=e.props((0,o.Z)({ownerState:r},s,r)):Object.keys(e.props).forEach(l=>{(null==r?void 0:r[l])!==e.props[l]&&s[l]!==e.props[l]&&(t=!1)}),t&&(Array.isArray(i)||(i=[i]),i.push("function"==typeof e.style?e.style((0,o.Z)({ownerState:r},s,r)):e.style))}),i}return n}let g=function(e={}){let{themeId:t,defaultTheme:r=v,rootShouldForwardProp:s=shouldForwardProp,slotShouldForwardProp:n=shouldForwardProp}=e,systemSx=e=>(0,p.Z)((0,o.Z)({},e,{theme:resolveTheme((0,o.Z)({},e,{defaultTheme:r,themeId:t}))}));return systemSx.__mui_systemSx=!0,(e,a={})=>{var c;let d;(0,u.internal_processStyles)(e,e=>e.filter(e=>!(null!=e&&e.__mui_systemSx)));let{name:p,slot:m,skipVariantsResolver:f,skipSx:v,overridesResolver:g=(c=lowercaseFirstLetter(m))?(e,t)=>t[c]:null}=a,y=(0,l.Z)(a,h),Z=void 0!==f?f:m&&"Root"!==m&&"root"!==m||!1,x=v||!1,S=shouldForwardProp;"Root"===m||"root"===m?S=s:m?S=n:"string"==typeof e&&e.charCodeAt(0)>96&&(S=void 0);let A=(0,u.default)(e,(0,o.Z)({shouldForwardProp:S,label:d},y)),transformStyleArg=e=>"function"==typeof e&&e.__emotion_real!==e||(0,i.P)(e)?l=>processStyleArg(e,(0,o.Z)({},l,{theme:resolveTheme({theme:l.theme,defaultTheme:r,themeId:t})})):e,muiStyledResolver=(l,...s)=>{let n=transformStyleArg(l),i=s?s.map(transformStyleArg):[];p&&g&&i.push(e=>{let l=resolveTheme((0,o.Z)({},e,{defaultTheme:r,themeId:t}));if(!l.components||!l.components[p]||!l.components[p].styleOverrides)return null;let s=l.components[p].styleOverrides,n={};return Object.entries(s).forEach(([t,r])=>{n[t]=processStyleArg(r,(0,o.Z)({},e,{theme:l}))}),g(e,n)}),p&&!Z&&i.push(e=>{var l;let s=resolveTheme((0,o.Z)({},e,{defaultTheme:r,themeId:t})),n=null==s||null==(l=s.components)||null==(l=l[p])?void 0:l.variants;return processStyleArg({variants:n},(0,o.Z)({},e,{theme:s}))}),x||i.push(systemSx);let a=i.length-s.length;if(Array.isArray(l)&&a>0){let e=Array(a).fill("");(n=[...l,...e]).raw=[...l.raw,...e]}let c=A(n,...i);return e.muiName&&(c.muiName=e.muiName),c};return A.withConfig&&(muiStyledResolver.withConfig=A.withConfig),muiStyledResolver}}();var y=r(29628),Z=r(39707),x=r(95408),S=r(98700),A=r(85893);let j=["component","direction","spacing","divider","children","className","useFlexGap"],C=(0,d.Z)(),b=g("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function useThemePropsDefault(e){return(0,y.Z)({props:e,name:"MuiStack",defaultTheme:C})}let getSideFromDirection=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],style=({ownerState:e,theme:t})=>{let r=(0,o.Z)({display:"flex",flexDirection:"column"},(0,x.k9)({theme:t},(0,x.P$)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e})));if(e.spacing){let l=(0,S.hB)(t),o=Object.keys(t.breakpoints.values).reduce((t,r)=>(("object"==typeof e.spacing&&null!=e.spacing[r]||"object"==typeof e.direction&&null!=e.direction[r])&&(t[r]=!0),t),{}),s=(0,x.P$)({values:e.direction,base:o}),n=(0,x.P$)({values:e.spacing,base:o});"object"==typeof s&&Object.keys(s).forEach((e,t,r)=>{let l=s[e];if(!l){let l=t>0?s[r[t-1]]:"column";s[e]=l}}),r=(0,i.Z)(r,(0,x.k9)({theme:t},n,(t,r)=>e.useFlexGap?{gap:(0,S.NA)(l,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${getSideFromDirection(r?s[r]:e.direction)}`]:(0,S.NA)(l,t)}}))}return(0,x.dt)(t.breakpoints,r)};var M=r(90948),w=r(71657);let P=function(e={}){let{createStyledComponent:t=b,useThemeProps:r=useThemePropsDefault,componentName:i="MuiStack"}=e,useUtilityClasses=()=>(0,c.Z)({root:["root"]},e=>(0,a.ZP)(i,e),{}),u=t(style),d=s.forwardRef(function(e,t){let i=r(e),a=(0,Z.Z)(i),{component:c="div",direction:d="column",spacing:p=0,divider:m,children:f,className:h,useFlexGap:v=!1}=a,g=(0,l.Z)(a,j),y=useUtilityClasses();return(0,A.jsx)(u,(0,o.Z)({as:c,ownerState:{direction:d,spacing:p,useFlexGap:v},ref:t,className:(0,n.Z)(y.root,h)},g,{children:m?function(e,t){let r=s.Children.toArray(e).filter(Boolean);return r.reduce((e,l,o)=>(e.push(l),o<r.length-1&&e.push(s.cloneElement(t,{key:`separator-${o}`})),e),[])}(f,m):f}))});return d}({createStyledComponent:(0,M.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,w.Z)({props:e,name:"MuiStack"})});var k=P},42978:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/staff-members/[staffMemberId]",function(){return r(41398)}])},41398:function(e,t,r){"use strict";r.r(t);var l=r(85893),o=r(67294),s=r(11163),n=r(9473),i=r(78151),a=r(86886),c=r(15861),u=r(66242),d=r(44267),p=r(21737),m=r(92401),f=r(68269),h=r(5616),v=r(50135),g=r(69417);t.default=function(e){let{push:t,query:r}=(0,s.useRouter)(),{staffMemberId:y}=r,Z=(0,n.I0)(),x=(0,n.v9)(i.Xr),S=(0,n.v9)(i.V_),A=(0,n.v9)(i.R0),j=(0,n.v9)(i.Vp),[C,b]=(0,o.useState)(null),[M,w]=(0,o.useState)(""),[P,k]=(0,o.useState)(null),[R,_]=(0,o.useState)(null);(0,o.useEffect)(()=>{y&&Z((0,i.u)({id:y}))},[y]),(0,o.useEffect)(()=>{x&&(w(x.name),k(x.description),_(x.image))},[x]),(0,o.useEffect)(()=>{Z((0,i.xM)(!1))},[j]),(0,o.useEffect)(()=>{!S&&j&&(b("Staff-Member updated successfully!"),setTimeout(()=>{t("/staff-members")},500))},[j,S]);let fileValidation=()=>{let e=[];return null===M&&e.push("Name is required!"),null===P&&e.push("Description is required!"),null===R&&e.push("Image is required!"),e.length>0&&Z((0,i.B$)(e)),e.length<1};return(0,l.jsxs)(a.ZP,{container:!0,spacing:6,children:[(0,l.jsx)(a.ZP,{item:!0,xs:12,children:(0,l.jsx)(c.Z,{variant:"h5",children:"Edit Staff Member"})}),(0,l.jsx)(a.ZP,{item:!0,xs:12,children:(0,l.jsx)(u.Z,{children:(0,l.jsxs)(d.Z,{children:[C?(0,l.jsxs)(p.Z,{severity:"success",sx:{mb:4},children:[(0,l.jsx)(m.Z,{children:"Success"}),(0,l.jsx)(h.Z,{component:"strong",sx:{display:"block"},children:C})]}):null,A&&A.length>0?(0,l.jsxs)(p.Z,{severity:"error",sx:{mb:4},children:[(0,l.jsx)(m.Z,{children:"Errors"}),A.map((e,t)=>(0,l.jsx)(h.Z,{component:"strong",sx:{display:"block"},children:e},t))]}):null,(0,l.jsx)("form",{onSubmit:e=>{e.preventDefault(),!S&&fileValidation()&&Z((0,i.HV)({id:y,name:M,description:P,image:R}))},children:(0,l.jsxs)(a.ZP,{row:!0,children:[(0,l.jsx)(a.ZP,{item:!0,xs:12,children:(0,l.jsx)(v.Z,{fullWidth:!0,label:"Name",value:M,onChange:e=>w(e.target.value)})}),(0,l.jsx)(a.ZP,{item:!0,xs:12,children:(0,l.jsx)(v.Z,{fullWidth:!0,label:"Description",value:P,onChange:e=>k(e.target.value)})}),(0,l.jsx)(a.ZP,{item:!0,xs:12,sx:{mt:5},children:(0,l.jsx)(f.Z,{direction:"row",gap:2,children:(0,l.jsxs)(g.Z,{variant:"contained",component:"label",children:["Upload Image",(0,l.jsx)("input",{type:"file",hidden:!0,onChange:e=>{var t,r;_(null!==(r=null===(t=e.target)||void 0===t?void 0:t.files[0])&&void 0!==r?r:null)}})]})})}),(0,l.jsx)(a.ZP,{item:!0,xs:12,sx:{mt:5},children:(0,l.jsx)(g.Z,{type:"submit",variant:"contained",disabled:S,children:S?"Saving":"Save"})})]})})]})})})]})}}},function(e){e.O(0,[2657,315,341,9774,2888,179],function(){return e(e.s=42978)}),_N_E=e.O()}]);