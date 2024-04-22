(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1032],{69417:function(e,t,o){"use strict";o.d(t,{Z:function(){return I}});var a=o(63366),n=o(87462),r=o(67294),i=o(63961),l=o(62236),s=o(58510),c=o(2101),d=o(90948),p=o(14136),u=o(71657),h=o(82607),m=o(98216),v=o(1977),g=o(8027);function getButtonUtilityClass(e){return(0,g.ZP)("MuiButton",e)}let x=(0,v.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),b=r.createContext({}),f=r.createContext(void 0);var y=o(85893);let S=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],useUtilityClasses=e=>{let{color:t,disableElevation:o,fullWidth:a,size:r,variant:i,classes:l}=e,c={root:["root",i,`${i}${(0,m.Z)(t)}`,`size${(0,m.Z)(r)}`,`${i}Size${(0,m.Z)(r)}`,`color${(0,m.Z)(t)}`,o&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${(0,m.Z)(r)}`],endIcon:["icon","endIcon",`iconSize${(0,m.Z)(r)}`]},d=(0,s.Z)(c,getButtonUtilityClass,l);return(0,n.Z)({},l,d)},commonIconStyles=e=>(0,n.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),Z=(0,d.ZP)(h.Z,{shouldForwardProp:e=>(0,p.Z)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${(0,m.Z)(o.color)}`],t[`size${(0,m.Z)(o.size)}`],t[`${o.variant}Size${(0,m.Z)(o.size)}`],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var o,a;let r="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],i="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,n.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,n.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:i,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,n.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${x.focusVisible}`]:(0,n.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${x.disabled}`]:(0,n.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(o=(a=e.palette).getContrastText)?void 0:o.call(a,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:r,boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${x.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${x.disabled}`]:{boxShadow:"none"}}),z=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.startIcon,t[`iconSize${(0,m.Z)(o.size)}`]]}})(({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},commonIconStyles(e))),w=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.endIcon,t[`iconSize${(0,m.Z)(o.size)}`]]}})(({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},commonIconStyles(e))),C=r.forwardRef(function(e,t){let o=r.useContext(b),s=r.useContext(f),c=(0,l.Z)(o,e),d=(0,u.Z)({props:c,name:"MuiButton"}),{children:p,color:h="primary",component:m="button",className:v,disabled:g=!1,disableElevation:x=!1,disableFocusRipple:C=!1,endIcon:I,focusVisibleClassName:k,fullWidth:$=!1,size:j="medium",startIcon:E,type:R,variant:B="text"}=d,P=(0,a.Z)(d,S),N=(0,n.Z)({},d,{color:h,component:m,disabled:g,disableElevation:x,disableFocusRipple:C,fullWidth:$,size:j,type:R,variant:B}),T=useUtilityClasses(N),_=E&&(0,y.jsx)(z,{className:T.startIcon,ownerState:N,children:E}),M=I&&(0,y.jsx)(w,{className:T.endIcon,ownerState:N,children:I}),W=s||"";return(0,y.jsxs)(Z,(0,n.Z)({ownerState:N,className:(0,i.Z)(o.className,T.root,v,W),component:m,disabled:g,focusRipple:!C,focusVisibleClassName:(0,i.Z)(T.focusVisible,k),ref:t,type:R},P,{classes:T,children:[_,p,M]}))});var I=C},84721:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/401",function(){return o(70968)}])},81805:function(e,t,o){"use strict";var a=o(85893),n=o(90948),r=o(5616);let i=(0,n.ZP)(r.Z)(e=>{let{theme:t}=e;return{height:"100vh","& .content-center":{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",padding:t.spacing(5)},"& .content-right":{display:"flex",minHeight:"100vh",overflowX:"hidden",position:"relative"}}});t.Z=e=>{let{children:t}=e;return(0,a.jsx)(i,{className:"layout-wrapper",children:(0,a.jsx)(r.Z,{className:"app-content",sx:{minHeight:"100vh",overflowX:"hidden",position:"relative"},children:t})})}},70968:function(e,t,o){"use strict";o.r(t);var a=o(85893),n=o(41664),r=o.n(n),i=o(69417),l=o(90948),s=o(15861),c=o(5616),d=o(81805),p=o(13223);let u=(0,l.ZP)(c.Z)(e=>{let{theme:t}=e;return{[t.breakpoints.down("md")]:{width:"90vw"}}}),h=(0,l.ZP)("img")(e=>{let{theme:t}=e;return{marginBottom:t.spacing(10),[t.breakpoints.down("lg")]:{height:450,marginTop:t.spacing(10)},[t.breakpoints.down("md")]:{height:400},[t.breakpoints.up("lg")]:{marginTop:t.spacing(13)}}}),Error401=()=>(0,a.jsxs)(c.Z,{className:"content-center",children:[(0,a.jsxs)(c.Z,{sx:{p:5,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:[(0,a.jsxs)(u,{children:[(0,a.jsx)(s.Z,{variant:"h1",children:"401"}),(0,a.jsx)(s.Z,{variant:"h5",sx:{mb:1,fontSize:"1.5rem !important"},children:"You are not authorized! \uD83D\uDD10"}),(0,a.jsx)(s.Z,{variant:"body2",children:"You don′t have permission to access this page. Go Home!"})]}),(0,a.jsx)(h,{height:"487",alt:"error-illustration",src:"/images/pages/401.png"}),(0,a.jsx)(r(),{passHref:!0,href:"/",children:(0,a.jsx)(i.Z,{component:"a",variant:"contained",sx:{px:5.5},children:"Back to Home"})})]}),(0,a.jsx)(p.Z,{})]});Error401.getLayout=e=>(0,a.jsx)(d.Z,{children:e}),t.default=Error401},13223:function(e,t,o){"use strict";var a=o(85893),n=o(67294),r=o(61730),i=o(90948),l=o(2734);let s=(0,i.ZP)("img")(()=>({bottom:0,zIndex:-1,width:"100%",position:"absolute"})),c=(0,i.ZP)("img")(e=>{let{theme:t}=e;return{left:"2.25rem",bottom:"4.25rem",position:"absolute",[t.breakpoints.down("lg")]:{left:0,bottom:0}}});t.Z=e=>{let{image:t}=e,o=(0,l.Z)(),i=(0,r.Z)(o.breakpoints.down("md"));return i?null:(0,a.jsxs)(n.Fragment,{children:[t||(0,a.jsx)(c,{alt:"tree",src:"/images/pages/tree-2.png"}),(0,a.jsx)(s,{alt:"mask",src:"/images/pages/misc-mask-".concat(o.palette.mode,".png")})]})}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=84721)}),_N_E=e.O()}]);