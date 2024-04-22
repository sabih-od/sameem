(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4516],{75634:function(e,a,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tables",function(){return i(86187)}])},86187:function(e,a,i){"use strict";i.r(a),i.d(a,{default:function(){return tables}});var t=i(85893),r=i(86886),l=i(23795),n=i(66242),s=i(15861),c=i(78445),h=i(90629),d=i(7906),o=i(53816),x=i(53184),g=i(295),j=i(98102),Z=i(72882);let createData=(e,a,i,t,r)=>({name:e,calories:a,fat:i,carbs:t,protein:r}),b=[createData("Frozen yoghurt",159,6,24,4),createData("Ice cream sandwich",237,9,37,4.3),createData("Eclair",262,16,24,6),createData("Cupcake",305,3.7,67,4.3),createData("Gingerbread",356,16,49,3.9)];var tables_TableBasic=()=>(0,t.jsx)(Z.Z,{component:h.Z,children:(0,t.jsxs)(d.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,t.jsx)(x.Z,{children:(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(j.Z,{children:"Dessert (100g serving)"}),(0,t.jsx)(j.Z,{align:"right",children:"Calories"}),(0,t.jsx)(j.Z,{align:"right",children:"Fat (g)"}),(0,t.jsx)(j.Z,{align:"right",children:"Carbs (g)"}),(0,t.jsx)(j.Z,{align:"right",children:"Protein (g)"})]})}),(0,t.jsx)(g.Z,{children:b.map(e=>(0,t.jsxs)(o.Z,{sx:{"&:last-of-type td, &:last-of-type th":{border:0}},children:[(0,t.jsx)(j.Z,{component:"th",scope:"row",children:e.name}),(0,t.jsx)(j.Z,{align:"right",children:e.calories}),(0,t.jsx)(j.Z,{align:"right",children:e.fat}),(0,t.jsx)(j.Z,{align:"right",children:e.carbs}),(0,t.jsx)(j.Z,{align:"right",children:e.protein})]},e.name))})]})});let TableDense_createData=(e,a,i,t,r)=>({name:e,calories:a,fat:i,carbs:t,protein:r}),p=[TableDense_createData("Frozen yoghurt",159,6,24,4),TableDense_createData("Ice cream sandwich",237,9,37,4.3),TableDense_createData("Eclair",262,16,24,6),TableDense_createData("Cupcake",305,3.7,67,4.3),TableDense_createData("Gingerbread",356,16,49,3.9)];var tables_TableDense=()=>(0,t.jsx)(Z.Z,{component:h.Z,children:(0,t.jsxs)(d.Z,{sx:{minWidth:650},size:"small","aria-label":"a dense table",children:[(0,t.jsx)(x.Z,{children:(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(j.Z,{children:"Dessert (100g serving)"}),(0,t.jsx)(j.Z,{align:"right",children:"Calories"}),(0,t.jsx)(j.Z,{align:"right",children:"Fat (g)"}),(0,t.jsx)(j.Z,{align:"right",children:"Carbs (g)"}),(0,t.jsx)(j.Z,{align:"right",children:"Protein (g)"})]})}),(0,t.jsx)(g.Z,{children:p.map(e=>(0,t.jsxs)(o.Z,{sx:{"&:last-of-type  td, &:last-of-type  th":{border:0}},children:[(0,t.jsx)(j.Z,{component:"th",scope:"row",children:e.name}),(0,t.jsx)(j.Z,{align:"right",children:e.calories}),(0,t.jsx)(j.Z,{align:"right",children:e.fat}),(0,t.jsx)(j.Z,{align:"right",children:e.carbs}),(0,t.jsx)(j.Z,{align:"right",children:e.protein})]},e.name))})]})});let ccyFormat=e=>"".concat(e.toFixed(2)),priceRow=(e,a)=>e*a,createRow=(e,a,i)=>{let t=priceRow(a,i);return{desc:e,qty:a,unit:i,price:t}},m=[createRow("Paperclips (Box)",100,1.15),createRow("Paper (Case)",10,45.99),createRow("Waste Basket",2,17.99)],u=m.map(e=>{let{price:a}=e;return a}).reduce((e,a)=>e+a,0),y=.07*u,T=y+u;var tables_TableSpanning=()=>(0,t.jsx)(Z.Z,{component:h.Z,children:(0,t.jsxs)(d.Z,{sx:{minWidth:700},"aria-label":"spanning table",children:[(0,t.jsxs)(x.Z,{children:[(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(j.Z,{align:"center",colSpan:3,children:"Details"}),(0,t.jsx)(j.Z,{align:"right",children:"Price"})]}),(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(j.Z,{children:"Desc"}),(0,t.jsx)(j.Z,{align:"right",children:"Qty."}),(0,t.jsx)(j.Z,{align:"right",children:"Unit"}),(0,t.jsx)(j.Z,{align:"right",children:"Sum"})]})]}),(0,t.jsxs)(g.Z,{children:[m.map(e=>(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(j.Z,{children:e.desc}),(0,t.jsx)(j.Z,{align:"right",children:e.qty}),(0,t.jsx)(j.Z,{align:"right",children:e.unit}),(0,t.jsx)(j.Z,{align:"right",children:ccyFormat(e.price)})]},e.desc)),(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(j.Z,{rowSpan:3}),(0,t.jsx)(j.Z,{colSpan:2,children:"Subtotal"}),(0,t.jsx)(j.Z,{align:"right",children:ccyFormat(u)})]}),(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(j.Z,{children:"Tax"}),(0,t.jsx)(j.Z,{align:"right",children:"".concat(7.000000000000001.toFixed(0)," %")}),(0,t.jsx)(j.Z,{align:"right",children:ccyFormat(y)})]}),(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(j.Z,{colSpan:2,children:"Total"}),(0,t.jsx)(j.Z,{align:"right",children:ccyFormat(T)})]})]})]})}),_=i(90948),D=i(89755);let C=(0,_.ZP)(j.Z)(e=>{let{theme:a}=e;return{["&.".concat(D.Z.head)]:{color:a.palette.common.white,backgroundColor:a.palette.common.black},["&.".concat(D.Z.body)]:{fontSize:14}}}),S=(0,_.ZP)(o.Z)(e=>{let{theme:a}=e;return{"&:nth-of-type(odd)":{backgroundColor:a.palette.action.hover},"&:last-of-type td, &:last-of-type th":{border:0}}}),TableCustomized_createData=(e,a,i,t,r)=>({name:e,calories:a,fat:i,carbs:t,protein:r}),k=[TableCustomized_createData("Frozen yoghurt",159,6,24,4),TableCustomized_createData("Ice cream sandwich",237,9,37,4.3),TableCustomized_createData("Eclair",262,16,24,6),TableCustomized_createData("Cupcake",305,3.7,67,4.3),TableCustomized_createData("Gingerbread",356,16,49,3.9)];var tables_TableCustomized=()=>(0,t.jsx)(Z.Z,{component:h.Z,children:(0,t.jsxs)(d.Z,{sx:{minWidth:700},"aria-label":"customized table",children:[(0,t.jsx)(x.Z,{children:(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(C,{children:"Dessert (100g serving)"}),(0,t.jsx)(C,{align:"right",children:"Calories"}),(0,t.jsx)(C,{align:"right",children:"Fat (g)"}),(0,t.jsx)(C,{align:"right",children:"Carbs (g)"}),(0,t.jsx)(C,{align:"right",children:"Protein (g)"})]})}),(0,t.jsx)(g.Z,{children:k.map(e=>(0,t.jsxs)(S,{children:[(0,t.jsx)(C,{component:"th",scope:"row",children:e.name}),(0,t.jsx)(C,{align:"right",children:e.calories}),(0,t.jsx)(C,{align:"right",children:e.fat}),(0,t.jsx)(C,{align:"right",children:e.carbs}),(0,t.jsx)(C,{align:"right",children:e.protein})]},e.name))})]})}),P=i(67294),f=i(5616),w=i(57922),v=i(93946),z=i(23246),H=i(22875);let TableCollapsible_createData=(e,a,i,t,r,l)=>({name:e,calories:a,fat:i,carbs:t,protein:r,price:l,history:[{date:"2020-01-05",customerId:"11091700",amount:3},{date:"2020-01-02",customerId:"Anonymous",amount:1}]}),Row=e=>{let{row:a}=e,[i,r]=(0,P.useState)(!1);return(0,t.jsxs)(P.Fragment,{children:[(0,t.jsxs)(o.Z,{sx:{"& > *":{borderBottom:"unset"}},children:[(0,t.jsx)(j.Z,{children:(0,t.jsx)(v.Z,{"aria-label":"expand row",size:"small",onClick:()=>r(!i),children:i?(0,t.jsx)(z.Z,{}):(0,t.jsx)(H.Z,{})})}),(0,t.jsx)(j.Z,{component:"th",scope:"row",children:a.name}),(0,t.jsx)(j.Z,{align:"right",children:a.calories}),(0,t.jsx)(j.Z,{align:"right",children:a.fat}),(0,t.jsx)(j.Z,{align:"right",children:a.carbs}),(0,t.jsx)(j.Z,{align:"right",children:a.protein})]}),(0,t.jsx)(o.Z,{children:(0,t.jsx)(j.Z,{colSpan:6,sx:{py:"0 !important"},children:(0,t.jsx)(w.Z,{in:i,timeout:"auto",unmountOnExit:!0,children:(0,t.jsxs)(f.Z,{sx:{m:2},children:[(0,t.jsx)(s.Z,{variant:"h6",gutterBottom:!0,component:"div",children:"History"}),(0,t.jsxs)(d.Z,{size:"small","aria-label":"purchases",children:[(0,t.jsx)(x.Z,{children:(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(j.Z,{children:"Date"}),(0,t.jsx)(j.Z,{children:"Customer"}),(0,t.jsx)(j.Z,{align:"right",children:"Amount"}),(0,t.jsx)(j.Z,{align:"right",children:"Total price ($)"})]})}),(0,t.jsx)(g.Z,{children:a.history.map(e=>(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(j.Z,{component:"th",scope:"row",children:e.date}),(0,t.jsx)(j.Z,{children:e.customerId}),(0,t.jsx)(j.Z,{align:"right",children:e.amount}),(0,t.jsx)(j.Z,{align:"right",children:Math.round(e.amount*a.price*100)/100})]},e.date))})]})]})})})})]})},F=[TableCollapsible_createData("Frozen yoghurt",159,6,24,4,3.99),TableCollapsible_createData("Ice cream sandwich",237,9,37,4.3,4.99),TableCollapsible_createData("Eclair",262,16,24,6,3.79),TableCollapsible_createData("Cupcake",305,3.7,67,4.3,2.5),TableCollapsible_createData("Gingerbread",356,16,49,3.9,1.5)];var tables_TableCollapsible=()=>(0,t.jsx)(Z.Z,{component:h.Z,children:(0,t.jsxs)(d.Z,{"aria-label":"collapsible table",children:[(0,t.jsx)(x.Z,{children:(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(j.Z,{}),(0,t.jsx)(j.Z,{children:"Dessert (100g serving)"}),(0,t.jsx)(j.Z,{align:"right",children:"Calories"}),(0,t.jsx)(j.Z,{align:"right",children:"Fat (g)"}),(0,t.jsx)(j.Z,{align:"right",children:"Carbs (g)"}),(0,t.jsx)(j.Z,{align:"right",children:"Protein (g)"})]})}),(0,t.jsx)(g.Z,{children:F.map(e=>(0,t.jsx)(Row,{row:e},e.name))})]})}),I=i(27110);let R=[{id:"name",label:"Name",minWidth:170},{id:"code",label:"ISO\xa0Code",minWidth:100},{id:"population",label:"Population",minWidth:170,align:"right",format:e=>e.toLocaleString("en-US")},{id:"size",label:"Size\xa0(km\xb2)",minWidth:170,align:"right",format:e=>e.toLocaleString("en-US")},{id:"density",label:"Density",minWidth:170,align:"right",format:e=>e.toFixed(2)}];function TableStickyHeader_createData(e,a,i,t){return{name:e,code:a,population:i,size:t,density:i/t}}let E=[TableStickyHeader_createData("India","IN",1324171354,3287263),TableStickyHeader_createData("China","CN",1403500365,9596961),TableStickyHeader_createData("Italy","IT",60483973,301340),TableStickyHeader_createData("United States","US",327167434,9833520),TableStickyHeader_createData("Canada","CA",37602103,9984670),TableStickyHeader_createData("Australia","AU",25475400,7692024),TableStickyHeader_createData("Germany","DE",83019200,357578),TableStickyHeader_createData("Ireland","IE",4857e3,70273),TableStickyHeader_createData("Mexico","MX",126577691,1972550),TableStickyHeader_createData("Japan","JP",126317e3,377973),TableStickyHeader_createData("France","FR",67022e3,640679),TableStickyHeader_createData("United Kingdom","GB",67545757,242495),TableStickyHeader_createData("Russia","RU",146793744,17098246),TableStickyHeader_createData("Nigeria","NG",200962417,923768),TableStickyHeader_createData("Brazil","BR",210147125,8515767)];var tables_TableStickyHeader=()=>{let[e,a]=(0,P.useState)(0),[i,r]=(0,P.useState)(10);return(0,t.jsxs)(h.Z,{sx:{width:"100%",overflow:"hidden"},children:[(0,t.jsx)(Z.Z,{sx:{maxHeight:440},children:(0,t.jsxs)(d.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,t.jsx)(x.Z,{children:(0,t.jsx)(o.Z,{children:R.map(e=>(0,t.jsx)(j.Z,{align:e.align,sx:{minWidth:e.minWidth},children:e.label},e.id))})}),(0,t.jsx)(g.Z,{children:E.slice(e*i,e*i+i).map(e=>(0,t.jsx)(o.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:R.map(a=>{let i=e[a.id];return(0,t.jsx)(j.Z,{align:a.align,children:a.format&&"number"==typeof i?a.format(i):i},a.id)})},e.code))})]})}),(0,t.jsx)(I.Z,{rowsPerPageOptions:[10,25,100],component:"div",count:E.length,rowsPerPage:i,page:e,onPageChange:(e,i)=>{a(i)},onRowsPerPageChange:e=>{r(+e.target.value),a(0)}})]})},tables=()=>(0,t.jsxs)(r.ZP,{container:!0,spacing:6,children:[(0,t.jsxs)(r.ZP,{item:!0,xs:12,children:[(0,t.jsx)(s.Z,{variant:"h5",children:(0,t.jsx)(l.Z,{href:"https://mui.com/components/tables/",target:"_blank",children:"MUI Tables"})}),(0,t.jsx)(s.Z,{variant:"body2",children:"Tables display sets of data. They can be fully customized"})]}),(0,t.jsx)(r.ZP,{item:!0,xs:12,children:(0,t.jsxs)(n.Z,{children:[(0,t.jsx)(c.Z,{title:"Basic Table",titleTypographyProps:{variant:"h6"}}),(0,t.jsx)(tables_TableBasic,{})]})}),(0,t.jsx)(r.ZP,{item:!0,xs:12,children:(0,t.jsxs)(n.Z,{children:[(0,t.jsx)(c.Z,{title:"Dense Table",titleTypographyProps:{variant:"h6"}}),(0,t.jsx)(tables_TableDense,{})]})}),(0,t.jsx)(r.ZP,{item:!0,xs:12,children:(0,t.jsxs)(n.Z,{children:[(0,t.jsx)(c.Z,{title:"Sticky Header",titleTypographyProps:{variant:"h6"}}),(0,t.jsx)(tables_TableStickyHeader,{})]})}),(0,t.jsx)(r.ZP,{item:!0,xs:12,children:(0,t.jsxs)(n.Z,{children:[(0,t.jsx)(c.Z,{title:"Collapsible Table",titleTypographyProps:{variant:"h6"}}),(0,t.jsx)(tables_TableCollapsible,{})]})}),(0,t.jsx)(r.ZP,{item:!0,xs:12,children:(0,t.jsxs)(n.Z,{children:[(0,t.jsx)(c.Z,{title:"Spanning Table",titleTypographyProps:{variant:"h6"}}),(0,t.jsx)(tables_TableSpanning,{})]})}),(0,t.jsx)(r.ZP,{item:!0,xs:12,children:(0,t.jsxs)(n.Z,{children:[(0,t.jsx)(c.Z,{title:"Customized Table",titleTypographyProps:{variant:"h6"}}),(0,t.jsx)(tables_TableCustomized,{})]})})]})}},function(e){e.O(0,[2657,315,9254,4026,9774,2888,179],function(){return e(e.s=75634)}),_N_E=e.O()}]);