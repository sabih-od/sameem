(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2679],{69417:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var i=n(63366),o=n(87462),a=n(67294),r=n(63961),l=n(62236),s=n(58510),d=n(2101),c=n(90948),u=n(14136),h=n(71657),x=n(82607),p=n(98216),v=n(1977),m=n(8027);function getButtonUtilityClass(e){return(0,m.ZP)("MuiButton",e)}let Z=(0,v.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),g=a.createContext({}),b=a.createContext(void 0);var j=n(85893);let f=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],useUtilityClasses=e=>{let{color:t,disableElevation:n,fullWidth:i,size:a,variant:r,classes:l}=e,d={root:["root",r,`${r}${(0,p.Z)(t)}`,`size${(0,p.Z)(a)}`,`${r}Size${(0,p.Z)(a)}`,`color${(0,p.Z)(t)}`,n&&"disableElevation",i&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${(0,p.Z)(a)}`],endIcon:["icon","endIcon",`iconSize${(0,p.Z)(a)}`]},c=(0,s.Z)(d,getButtonUtilityClass,l);return(0,o.Z)({},l,c)},commonIconStyles=e=>(0,o.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),y=(0,c.ZP)(x.Z,{shouldForwardProp:e=>(0,u.Z)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${(0,p.Z)(n.color)}`],t[`size${(0,p.Z)(n.size)}`],t[`${n.variant}Size${(0,p.Z)(n.size)}`],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var n,i;let a="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],r="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,o.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,o.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:r,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,o.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${Z.focusVisible}`]:(0,o.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${Z.disabled}`]:(0,o.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(n=(i=e.palette).getContrastText)?void 0:n.call(i,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:a,boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${Z.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${Z.disabled}`]:{boxShadow:"none"}}),S=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.startIcon,t[`iconSize${(0,p.Z)(n.size)}`]]}})(({ownerState:e})=>(0,o.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},commonIconStyles(e))),z=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.endIcon,t[`iconSize${(0,p.Z)(n.size)}`]]}})(({ownerState:e})=>(0,o.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},commonIconStyles(e))),C=a.forwardRef(function(e,t){let n=a.useContext(g),s=a.useContext(b),d=(0,l.Z)(n,e),c=(0,h.Z)({props:d,name:"MuiButton"}),{children:u,color:x="primary",component:p="button",className:v,disabled:m=!1,disableElevation:Z=!1,disableFocusRipple:C=!1,endIcon:w,focusVisibleClassName:k,fullWidth:I=!1,size:$="medium",startIcon:_,type:M,variant:L="text"}=c,R=(0,i.Z)(c,f),A=(0,o.Z)({},c,{color:x,component:p,disabled:m,disableElevation:Z,disableFocusRipple:C,fullWidth:I,size:$,type:M,variant:L}),E=useUtilityClasses(A),P=_&&(0,j.jsx)(S,{className:E.startIcon,ownerState:A,children:_}),F=w&&(0,j.jsx)(z,{className:E.endIcon,ownerState:A,children:w}),N=s||"";return(0,j.jsxs)(y,(0,o.Z)({ownerState:A,className:(0,r.Z)(n.className,E.root,v,N),component:p,disabled:m,focusRipple:!C,focusVisibleClassName:(0,r.Z)(E.focusVisible,k),ref:t,type:M},R,{classes:E,children:[P,u,F]}))});var w=C},66448:function(e,t,n){"use strict";t.Z=void 0;var i,o=(0,((i=n(65129))&&i.__esModule?i:{default:i}).default)("M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z","Delete");t.Z=o},43992:function(e,t,n){"use strict";t.Z=void 0;var i,o=(0,((i=n(65129))&&i.__esModule?i:{default:i}).default)("M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z","Eye");t.Z=o},22284:function(e,t,n){"use strict";t.Z=void 0;var i,o=(0,((i=n(65129))&&i.__esModule?i:{default:i}).default)("M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z","Pencil");t.Z=o},9959:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return n(57459)}])},57459:function(e,t,n){"use strict";n.r(t);var i=n(85893),o=n(67294),a=n(9473),r=n(59917),l=n(41664),s=n.n(l),d=n(39332),c=n(86886),u=n(15861),h=n(66242),x=n(72882),p=n(7906),v=n(53184),m=n(53816),Z=n(98102),g=n(295),b=n(90629),j=n(69417),f=n(68269),y=n(93946),S=n(10633),z=n(22284),C=n(66448),w=n(43992);n(21725);var k=n(5616),I=n(59791);let $={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"50%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};t.default=function(e){let t=(0,a.I0)(),{push:n}=(0,d.useRouter)(),l=(0,a.v9)(r.V_),_=(0,a.v9)(r.xu);(0,a.v9)(r.MF);let M=(0,a.v9)(r.hU);console.log("posts",_);let[L,R]=(0,o.useState)(1),handleDelete=async(e,n)=>{e.preventDefault(),console.log(n),await t((0,r.fR)({id:n})),await t((0,r.Jq)({page:L}))},markAsFeatured=async(e,n)=>{await t((0,r.Uj)({post_id:e.id,is_featured:n})),await t((0,r.Jq)({page:L}))};(0,o.useEffect)(()=>{t((0,r.Jq)({page:L}))},[L]);let[A,E]=o.useState(!1),[P,F]=o.useState(null),handleOpen=()=>{E(!0)};return(0,i.jsxs)(c.ZP,{container:!0,spacing:6,children:[(0,i.jsx)(c.ZP,{item:!0,xs:12,children:(0,i.jsxs)(f.Z,{direction:"row",children:[(0,i.jsx)(u.Z,{variant:"h5",children:"Posts"}),(0,i.jsx)(j.Z,{component:s(),href:"/posts/create",sx:{marginLeft:"auto"},children:"Create Post"})]})}),(0,i.jsx)(c.ZP,{item:!0,xs:12,children:(0,i.jsx)(h.Z,{children:(0,i.jsxs)(b.Z,{sx:{width:"100%",overflow:"hidden"},children:[l?(0,i.jsx)(u.Z,{variant:"h5",sx:{my:3},textAlign:"center",children:"Loading..."}):(0,i.jsx)(x.Z,{sx:{maxHeight:440},children:(0,i.jsxs)(p.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,i.jsx)(v.Z,{children:(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(Z.Z,{children:"ID"}),(0,i.jsx)(Z.Z,{children:"Title"}),(0,i.jsx)(Z.Z,{children:"Title Arabic"}),(0,i.jsx)(Z.Z,{children:"Featured"}),(0,i.jsx)(Z.Z,{children:"Action"})]})}),(0,i.jsx)(g.Z,{children:_.map(e=>(0,i.jsxs)(m.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:[(0,i.jsx)(Z.Z,{children:(0,i.jsx)("span",{children:e.id})}),(0,i.jsx)(Z.Z,{children:(0,i.jsx)("span",{children:e.title})}),(0,i.jsx)(Z.Z,{children:(0,i.jsx)("span",{children:e.title_ar})}),(0,i.jsx)(Z.Z,{className:"text-center",children:0==e.is_featured?(0,i.jsx)(j.Z,{onClick:t=>{markAsFeatured(e,1)},children:"Mark as Featured"}):(0,i.jsx)(j.Z,{onClick:t=>{markAsFeatured(e,0)},children:"Remove from Featured"})}),(0,i.jsxs)(Z.Z,{width:"200",children:[(0,i.jsx)(y.Z,{size:"small",variant:"outlined",onClick:t=>{t.preventDefault(),n("/posts/".concat(e.id))},sx:{marginLeft:"auto"},children:(0,i.jsx)(z.Z,{})}),(0,i.jsx)(y.Z,{size:"small",variant:"outlined",onClick:t=>handleDelete(t,e.id),sx:{marginLeft:"auto"},children:(0,i.jsx)(C.Z,{})}),(0,i.jsx)(y.Z,{size:"small",variant:"outlined",onClick:t=>{F(e),handleOpen()},sx:{marginLeft:"auto"},children:(0,i.jsx)(w.Z,{})})]})]},e.id))})]})}),(0,i.jsx)(I.Z,{open:A,onClose:()=>E(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,i.jsx)(k.Z,{sx:$,children:(0,i.jsx)(x.Z,{sx:{maxHeight:440},children:(0,i.jsx)(p.Z,{stickyHeader:!0,"aria-label":"sticky table",children:(0,i.jsxs)(v.Z,{children:[(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(Z.Z,{children:"ID"}),(0,i.jsx)(Z.Z,{children:(0,i.jsx)("span",{children:null==P?void 0:P.id})})]}),(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(Z.Z,{children:"Title"}),(0,i.jsx)(Z.Z,{children:(0,i.jsx)("span",{children:null==P?void 0:P.title})})]}),(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(Z.Z,{children:"Title Arabic"}),(0,i.jsx)(Z.Z,{children:(0,i.jsx)("span",{children:null==P?void 0:P.title_ar})})]}),(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(Z.Z,{children:"Description"}),(0,i.jsx)(Z.Z,{children:(0,i.jsx)("span",{children:null==P?void 0:P.description})})]}),(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(Z.Z,{children:"Description Arabic"}),(0,i.jsx)(Z.Z,{children:(0,i.jsx)("span",{children:null==P?void 0:P.description_ar})})]}),(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(Z.Z,{children:"Video"}),(0,i.jsx)(Z.Z,{children:(null==P?void 0:P.video)&&(0,i.jsxs)("video",{width:"240",height:"150",controls:!0,children:[(0,i.jsx)("source",{src:null==P?void 0:P.video,type:"video/mp4"}),"Your browser does not support the video tag."]})})]}),(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(Z.Z,{children:"Audio"}),(0,i.jsx)(Z.Z,{children:(null==P?void 0:P.audio)&&(0,i.jsxs)("audio",{controls:!0,children:[(0,i.jsx)("source",{src:null==P?void 0:P.audio,type:"audio/mpeg"}),"Your browser does not support the audio element."]})})]}),(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(Z.Z,{children:"Image"}),(0,i.jsx)(Z.Z,{className:"text-center",children:(null==P?void 0:P.image)!==null&&(null==P?void 0:P.image)!=="null"?(0,i.jsx)(j.Z,{tag:"a",href:null==P?void 0:P.image,target:"_blank",layout:"link",size:"small",children:"View Image"}):null})]}),(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(Z.Z,{children:"PDF"}),(0,i.jsx)(Z.Z,{className:"text-center",children:(null==P?void 0:P.pdf)!==null&&(null==P?void 0:P.pdf)!=="null"?(0,i.jsx)(j.Z,{tag:"a",href:null==P?void 0:P.pdf,target:"_blank",layout:"link",size:"small",children:"View File"}):null})]})]})})})})}),(0,i.jsx)(f.Z,{direction:"row",sx:{my:4,display:l?"none":""},justifyContent:"center",children:(0,i.jsx)(S.Z,{count:M,onChange:function(e,t){R(t)}})})]})})})]})}}},function(e){e.O(0,[2657,9254,7169,2138,9774,2888,179],function(){return e(e.s=9959)}),_N_E=e.O()}]);