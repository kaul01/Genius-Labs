(this.webpackJsonpgenius=this.webpackJsonpgenius||[]).push([[0],{28:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var s=a(3),n=a.n(s),c=a(29),i=a.n(c),r=(a(37),a(18)),l=a(6),o=(a(38),a(19)),j=a(30),d=a(31),h=[{title:"Base",cName:"nav-text"},{title:"Custom",cName:"nav-text"},{title:"Extended",cName:"nav-text"},{title:"Widgets",cName:"nav-text"},{title:"Forms",cName:"nav-text"},{title:"Keen Wizard",cName:"nav-text"},{title:"Keen Datatable",cName:"nav-text"},{title:"Datatables",cName:"nav-text"}],b=(a(39),a(0)),u=a(2);var x=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],c=function(){return n(!a)};return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(b.b.Provider,{value:{color:"white"},children:[Object(u.jsx)("div",{className:"navbar",children:Object(u.jsx)(j.a,{onClick:c})}),Object(u.jsx)("nav",{className:a?"nav-menu active":"nav-menu",children:Object(u.jsxs)("ul",{className:"nav-menu-items",onClick:c,children:[Object(u.jsx)("li",{className:"navbar-toggle",children:Object(u.jsx)(d.a,{})}),Object(u.jsx)("div",{className:"heading",children:"Components:"}),h.map((function(e,t){return Object(u.jsxs)("li",{className:e.cName,children:[e.icon,Object(u.jsx)("span",{children:e.title})]},t)}))]})})]})})};var m=function(){return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("div",{className:"nav_bar",children:Object(u.jsx)(x,{})}),Object(u.jsx)("div",{className:"items",children:"Guest's Dashboard"})]})},O=(a(41),a(23));a(54),a(43);O.a.initializeApp({apiKey:"AIzaSyBnNme4niVVZx8jnzmJxFT7_NNWrFN1RZQ",authDomain:"saiesh-for-geniuslabs.firebaseapp.com",projectId:"saiesh-for-geniuslabs",storageBucket:"saiesh-for-geniuslabs.appspot.com",messagingSenderId:"536773830149",appId:"1:536773830149:web:87a40fad43de0da7801e6c",measurementId:"G-K4C7ETCY1Z"});var v=O.a.auth();var g=function(){var e=Object(l.f)(),t=Object(s.useState)(""),a=Object(o.a)(t,2),n=a[0],c=a[1],i=Object(s.useState)(""),j=Object(o.a)(i,2),d=j[0],h=j[1];return Object(u.jsxs)("div",{className:"login",children:[Object(u.jsx)(r.b,{to:"/",children:Object(u.jsx)("img",{className:"login__logo",src:"logo.png",alt:""})}),Object(u.jsxs)("div",{className:"login__container",children:[Object(u.jsx)("h1",{children:"Sign-in"}),Object(u.jsxs)("form",{children:[Object(u.jsx)("h5",{children:"E-mail"}),Object(u.jsx)("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("h5",{children:"Password"}),Object(u.jsx)("input",{type:"password",value:d,onChange:function(e){return h(e.target.value)}}),Object(u.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),v.signInWithEmailAndPassword(n,d).then((function(t){e.push("/dashboard")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton",children:"Sign In"})]})]}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]})},p=(a(49),a(14)),f=a.n(p);var N=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(f.a,{options:{chart:{type:"bar",height:350},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},title:{text:"Author Sales = $64M",align:"left"},xaxis:{categories:[" "," "," "," "," "," "]},fill:{opacity:1},tooltip:{y:{formatter:function(e){return"$ "+e+" thousands"}}}},series:[{name:"Sales",data:[35,41,36,26,45,48]}],type:"bar",height:350})})};a(51);var _=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"head",children:"Announcement"}),Object(u.jsx)("div",{className:"p",children:"To start a blog first think about a topic and brainstrom on it"})]})};var y=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(f.a,{options:{chart:{type:"donut"},labels:["HTML","CSS","Angular"],title:{text:"Technologies = 9.3M",align:"left"},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]},series:[33,33,34],type:"donut",height:350})})};var A=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(f.a,{options:{chart:{type:"bar",height:350},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},title:{text:"Sales Statistics",align:"left"},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["1 Aug","2 Aug","3 Aug","4 Aug","5 Aug","6 Aug","7 Aug","8 Aug","9 Aug"]},fill:{opacity:1},tooltip:{y:{formatter:function(e){return"$ "+e+" thousands"}}}},series:[{name:"Author",data:[76,85,101,98,87,105,91,114,94]},{name:"Customer",data:[78,90,105,100,90,107,100,115,98]}],type:"bar",height:350})})};var S=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(f.a,{options:{chart:{type:"area",height:350,zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},title:{text:"Total Orders = 17M",align:"left"},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{opposite:!0},legend:{horizontalAlign:"left"}},series:[{name:"Orders",data:[51,55,57,56,61,58,63,60,66]}],type:"area",height:350})})};a(28);var C=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"c6_h",children:"Projects"}),Object(u.jsx)("div",{className:"c6_s",children:"First Milestone Achivement"}),Object(u.jsx)("div",{className:"c6_b",children:"To start a blog first thing of a idea and then move on to brainstoring for ececution."})]})};var T=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"c6_h",children:"Today's Schedule"}),Object(u.jsx)("div",{className:"c6_s",children:"UI/UX Dsign Updates"}),Object(u.jsx)("div",{className:"c6_b7",children:"11:15-12:30"})]})};a(52);var w=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"c8_h",children:"Top Products"}),Object(u.jsx)("div",{className:"c1",children:"HTML5 Templates"}),Object(u.jsx)("div",{className:"c1",children:"Wordpress Themes"}),Object(u.jsx)("div",{className:"c1",children:"eCommerce Websites"}),Object(u.jsx)("div",{className:"c1",children:"UI/UX Design"}),Object(u.jsx)("div",{className:"c1",children:"Freebie Themes"})]})};var I=function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"chart_1",children:Object(u.jsx)(N,{})}),Object(u.jsx)("div",{className:"chart_3",children:Object(u.jsx)(y,{})}),Object(u.jsx)("div",{className:"chart_5",children:Object(u.jsx)(S,{})}),Object(u.jsx)("div",{className:"chart_2",children:Object(u.jsx)(_,{})}),Object(u.jsx)("div",{className:"chart_6",children:Object(u.jsx)(C,{})}),Object(u.jsx)("div",{className:"chart_7",children:Object(u.jsx)(T,{})}),Object(u.jsx)("div",{className:"chart_8",children:Object(u.jsx)(w,{})}),Object(u.jsx)("div",{className:"chart_4",children:Object(u.jsx)(A,{})})]})};var k=function(){return Object(u.jsx)(r.a,{children:Object(u.jsx)("div",{className:"app",children:Object(u.jsxs)(l.c,{children:[Object(u.jsxs)(l.a,{path:"/dashboard",children:[Object(u.jsx)(m,{}),Object(u.jsx)(I,{})]}),Object(u.jsx)(l.a,{path:"/",children:Object(u.jsx)(g,{})})]})})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,55)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root")),F()}},[[53,1,2]]]);
//# sourceMappingURL=main.ab12cbd5.chunk.js.map