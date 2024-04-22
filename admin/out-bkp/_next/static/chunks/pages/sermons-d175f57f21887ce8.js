(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3465],{69417:function(e,t,o){"use strict";o.d(t,{Z:function(){return w}});var n=o(63366),a=o(87462),i=o(67294),r=o(63961),l=o(62236),s=o(58510),d=o(2101),c=o(90948),u=o(14136),h=o(71657),p=o(82607),x=o(98216),v=o(1977),m=o(8027);function getButtonUtilityClass(e){return(0,m.ZP)("MuiButton",e)}let g=(0,v.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),Z=i.createContext({}),b=i.createContext(void 0);var f=o(85893);let y=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],useUtilityClasses=e=>{let{color:t,disableElevation:o,fullWidth:n,size:i,variant:r,classes:l}=e,d={root:["root",r,`${r}${(0,x.Z)(t)}`,`size${(0,x.Z)(i)}`,`${r}Size${(0,x.Z)(i)}`,`color${(0,x.Z)(t)}`,o&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${(0,x.Z)(i)}`],endIcon:["icon","endIcon",`iconSize${(0,x.Z)(i)}`]},c=(0,s.Z)(d,getButtonUtilityClass,l);return(0,a.Z)({},l,c)},commonIconStyles=e=>(0,a.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),S=(0,c.ZP)(p.Z,{shouldForwardProp:e=>(0,u.Z)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${(0,x.Z)(o.color)}`],t[`size${(0,x.Z)(o.size)}`],t[`${o.variant}Size${(0,x.Z)(o.size)}`],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var o,n;let i="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],r="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,a.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,a.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:r,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,a.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${g.focusVisible}`]:(0,a.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${g.disabled}`]:(0,a.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(o=(n=e.palette).getContrastText)?void 0:o.call(n,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:i,boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${g.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${g.disabled}`]:{boxShadow:"none"}}),z=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.startIcon,t[`iconSize${(0,x.Z)(o.size)}`]]}})(({ownerState:e})=>(0,a.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},commonIconStyles(e))),j=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.endIcon,t[`iconSize${(0,x.Z)(o.size)}`]]}})(({ownerState:e})=>(0,a.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},commonIconStyles(e))),C=i.forwardRef(function(e,t){let o=i.useContext(Z),s=i.useContext(b),d=(0,l.Z)(o,e),c=(0,h.Z)({props:d,name:"MuiButton"}),{children:u,color:p="primary",component:x="button",className:v,disabled:m=!1,disableElevation:g=!1,disableFocusRipple:C=!1,endIcon:w,focusVisibleClassName:I,fullWidth:k=!1,size:$="medium",startIcon:L,type:_,variant:M="text"}=c,R=(0,n.Z)(c,y),E=(0,a.Z)({},c,{color:p,component:x,disabled:m,disableElevation:g,disableFocusRipple:C,fullWidth:k,size:$,type:_,variant:M}),P=useUtilityClasses(E),B=L&&(0,f.jsx)(z,{className:P.startIcon,ownerState:E,children:L}),N=w&&(0,f.jsx)(j,{className:P.endIcon,ownerState:E,children:w}),V=s||"";return(0,f.jsxs)(S,(0,a.Z)({ownerState:E,className:(0,r.Z)(o.className,P.root,v,V),component:x,disabled:m,focusRipple:!C,focusVisibleClassName:(0,r.Z)(P.focusVisible,I),ref:t,type:_},R,{classes:P,children:[B,u,N]}))});var w=C},66448:function(e,t,o){"use strict";t.Z=void 0;var n,a=(0,((n=o(65129))&&n.__esModule?n:{default:n}).default)("M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z","Delete");t.Z=a},22284:function(e,t,o){"use strict";t.Z=void 0;var n,a=(0,((n=o(65129))&&n.__esModule?n:{default:n}).default)("M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z","Pencil");t.Z=a},13739:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sermons",function(){return o(94226)}])},94226:function(e,t,o){"use strict";o.r(t);var n=o(85893),a=o(67294),i=o(9473),r=o(87079),l=o(41664),s=o.n(l),d=o(39332),c=o(86886),u=o(15861),h=o(66242),p=o(72882),x=o(7906),v=o(53184),m=o(53816),g=o(98102),Z=o(295),b=o(90629),f=o(69417),y=o(68269),S=o(93946),z=o(10633),j=o(22284),C=o(66448);o(21725),t.default=function(e){let t=(0,i.I0)(),{push:o}=(0,d.useRouter)(),l=(0,i.v9)(r.V_),w=(0,i.v9)(r.um);(0,i.v9)(r.MF);let I=(0,i.v9)(r.hU);console.log("sermonss",w);let[k,$]=(0,a.useState)(1),handleDelete=async(e,o)=>{e.preventDefault(),console.log(o),await t((0,r.$_)({id:o})),await t((0,r.bl)({page:k}))};return(0,a.useEffect)(()=>{t((0,r.bl)({page:k}))},[k]),(0,n.jsxs)(c.ZP,{container:!0,spacing:6,children:[(0,n.jsx)(c.ZP,{item:!0,xs:12,children:(0,n.jsxs)(y.Z,{direction:"row",children:[(0,n.jsx)(u.Z,{variant:"h5",children:"Sermons"}),(0,n.jsx)(f.Z,{component:s(),href:"/sermons/create",sx:{marginLeft:"auto"},children:"Create Sermon"})]})}),(0,n.jsx)(c.ZP,{item:!0,xs:12,children:(0,n.jsx)(h.Z,{children:(0,n.jsxs)(b.Z,{sx:{width:"100%",overflow:"hidden"},children:[l?(0,n.jsx)(u.Z,{variant:"h5",sx:{my:3},textAlign:"center",children:"Loading..."}):(0,n.jsx)(p.Z,{sx:{maxHeight:440},children:(0,n.jsxs)(x.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,n.jsx)(v.Z,{children:(0,n.jsxs)(m.Z,{children:[(0,n.jsx)(g.Z,{children:"ID"}),(0,n.jsx)(g.Z,{children:"Title"}),(0,n.jsx)(g.Z,{children:"Description"}),(0,n.jsx)(g.Z,{children:"Url"}),(0,n.jsx)(g.Z,{children:"Media"}),(0,n.jsx)(g.Z,{children:"Image"}),(0,n.jsx)(g.Z,{children:"Action"})]})}),(0,n.jsx)(Z.Z,{children:w.map(e=>{var t;return(0,n.jsxs)(m.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:[(0,n.jsx)(g.Z,{children:(0,n.jsx)("span",{children:e.id})}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("span",{children:e.title})}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("span",{children:null!==(t=e.description)&&void 0!==t?t:""})}),(0,n.jsx)(g.Z,{children:(0,n.jsx)("span",{children:e.url})}),(0,n.jsx)(g.Z,{className:"text-center",children:null!==e.media&&"null"!==e.media?(0,n.jsx)(f.Z,{tag:"a",href:e.media,target:"_blank",layout:"link",size:"small",children:"View Image"}):null}),(0,n.jsx)(g.Z,{className:"text-center",children:null!==e.image&&"null"!==e.image?(0,n.jsx)(f.Z,{tag:"a",href:e.image,target:"_blank",layout:"link",size:"small",children:"View Image"}):null}),(0,n.jsxs)(g.Z,{width:"200",children:[(0,n.jsx)(S.Z,{size:"small",variant:"outlined",onClick:t=>{t.preventDefault(),o("/sermons/".concat(e.id))},sx:{marginLeft:"auto"},children:(0,n.jsx)(j.Z,{})}),(0,n.jsx)(S.Z,{size:"small",variant:"outlined",onClick:t=>handleDelete(t,e.id),sx:{marginLeft:"auto"},children:(0,n.jsx)(C.Z,{})})]})]},e.id)})})]})}),(0,n.jsx)(y.Z,{direction:"row",sx:{my:4,display:l?"none":""},justifyContent:"center",children:(0,n.jsx)(z.Z,{count:I,onChange:function(e,t){$(t)}})})]})})})]})}}},function(e){e.O(0,[2657,9254,7169,2138,9774,2888,179],function(){return e(e.s=13739)}),_N_E=e.O()}]);