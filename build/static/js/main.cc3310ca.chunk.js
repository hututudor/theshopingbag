(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,a){e.exports=a(290)},288:function(e,t,a){},29:function(e){e.exports={a:[{name:"Mere",desc:"Mere bune bio si naturale",count:100,price:"1,00",img:"/img/poza-1.jpeg",featured:!0},{name:"Banane",desc:"Banane din Africa. Foarte naturale.",count:50,price:"2,00",img:"/img/poza-1.jpeg",featured:!0},{name:"Portocale",desc:"Portocale din Grecia",count:70,price:"1,07",img:"/img/poza-1.jpeg",featured:!0},{name:"Pere",desc:"Pere romanesti",count:40,price:"1,40",img:"/img/poza-1.jpeg",featured:!0}]}},290:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(39),o=a.n(c),l=a(14),u=a(15),i=a(17),s=a(16),m=a(18),p=a(302),d=a(141),h=a(300),E=a(29),b=a(296),O=a(298),j=a(297),f=a(295),g=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,{style:{overflowX:"hidden"},as:f.a,to:"/product/"+E.a.indexOf(this.props.prod)},r.a.createElement(j.a,{src:this.props.prod.img}),r.a.createElement(O.a.Content,null,r.a.createElement(O.a.Header,null,this.props.prod.name),r.a.createElement(O.a.Meta,null,this.props.prod.price," Lei"),r.a.createElement(O.a.Description,null,this.props.prod.desc)))}}]),t}(n.Component),v=a(91),y=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header-img"},r.a.createElement("h1",null,"The Shopping Bag"),r.a.createElement("h1",null,"Cumpara inteligent")),r.a.createElement("div",{className:"featured"},r.a.createElement("h1",null,"Produse populare"),r.a.createElement(b.a,null,r.a.createElement(O.a.Group,{centered:!0,stackable:!0,itemsPerRow:3},E.a.map(function(e){return r.a.createElement(r.a.Fragment,null,e.featured?r.a.createElement(g,{prod:e}):null)}))),r.a.createElement("div",{className:"button"},r.a.createElement(v.a,{to:"/products"},"Vezi toate produsele"))))}}]),t}(n.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return"cc"}}]),t}(n.Component),w="ADD",k=a(67),C=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={prod:""},a.addToCart=function(){a.props.add(a.state.prod)},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({prod:E.a[this.props.match.params.id]}),E.a[this.props.match.params.id]||this.props.history.goBack()}},{key:"render",value:function(){return r.a.createElement("div",{className:"product"},r.a.createElement(b.a,null,r.a.createElement("img",{src:this.state.prod.img}),r.a.createElement("div",{className:"hdr"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",null,this.state.prod.name)))),r.a.createElement("div",{className:"det"},r.a.createElement("span",null,this.state.prod.price," Lei"),r.a.createElement("span",null,"Doar ",this.state.prod.count," ramase in stoc")),r.a.createElement("div",{className:"desc"},r.a.createElement("p",null,this.state.prod.desc))))}}]),t}(n.Component),x=Object(k.b)(null,function(e){return{add:function(t){return e({type:w,product:t})}}})(C),D=a(299),_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).logout=function(){a.props.logout()},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(D.a,{size:"large",borderless:!0,inverted:!0,fixed:"top",stackable:!0,color:"green"},r.a.createElement(b.a,{textAlign:"center"},r.a.createElement(D.a.Item,{header:!0},r.a.createElement("span",{className:"logo"},r.a.createElement("span",null,"The"),"Shopping",r.a.createElement("span",null,"Bag"))),r.a.createElement(D.a.Item,{as:f.a,exact:!0,to:"/"},"Acasa"),r.a.createElement(D.a.Item,{as:f.a,exact:!0,to:"/products"},"Produse"),r.a.createElement(D.a.Item,{as:f.a,exact:!0,to:"/about"},"Despre noi"),r.a.createElement(D.a.Item,{as:f.a,exact:!0,to:"/contact"},"Contact")))}}]),t}(n.Component),P=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"products"},r.a.createElement("h1",null,"Produsele noastre"),r.a.createElement(b.a,null,r.a.createElement(O.a.Group,{centered:!0,stackable:!0,itemsPerRow:3},E.a.map(function(e){return r.a.createElement(g,{prod:e})}))))}}]),t}(n.Component),T=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contr"},r.a.createElement("h1",null,"Despre noi"),r.a.createElement("br",null),"Noi suntem smecheri!")}}]),t}(n.Component),I=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contr"},r.a.createElement("h1",null,"Contact"),r.a.createElement("br",null),"Ne puteti gasi la: 0783483479382437948234823483924")}}]),t}(n.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},"Copyright ","\xa9"," ",(new Date).getFullYear()," The Shopping Bag."),r.a.createElement("div",{className:"col-md-6"},"Facut de Tudor Hutu")))}}]),t}(n.Component),B=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null),r.a.createElement(p.a,null,r.a.createElement(d.a,{path:"/",exact:!0,component:y}),r.a.createElement(d.a,{path:"/about",exact:!0,component:T}),r.a.createElement(d.a,{path:"/contact",exact:!0,component:I}),r.a.createElement(d.a,{path:"/products",exact:!0,component:P}),r.a.createElement(d.a,{path:"/product/:id",exact:!0,component:x}),r.a.createElement(d.a,{path:"/cart",exact:!0,component:N}),r.a.createElement(h.a,{to:"/"})),r.a.createElement(S,null))}}]),t}(n.Component),z=a(301),A=(a(288),a(289),a(66)),F=a(140),X=a(142),L={products:[]};var M=Object(A.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,a=Object(X.a)({},e);switch(t.type){case w:a.products=[t.product].concat(Object(F.a)(a.products))}return a},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(r.a.createElement(k.a,{store:M},r.a.createElement(z.a,null,r.a.createElement(B,null))),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.cc3310ca.chunk.js.map