(this.webpackJsonpmonitorcodiv19=this.webpackJsonpmonitorcodiv19||[]).push([[0],{16:function(e,t,a){e.exports=a(42)},21:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},24:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),l=(a(21),a(3)),s=a.n(l),i=a(14),u=a(2),m=(a(23),a(24),a(15)),d=a.n(m),p=function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,e.label),r.a.createElement("h1",null,e.number))};var b=function(){Object(n.useEffect)((function(){y(),setInterval((function(){y()}),2e3)}),[]);var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(),l=Object(u.a)(c,2),m=l[0],b=l[1],f=Object(n.useState)(),h=Object(u.a)(f,2),v=h[0],E=h[1],j=Object(n.useState)(),w=Object(u.a)(j,2),O=w[0],g=w[1],y=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://coronavirus-19-api.herokuapp.com/countries/brazil");case 2:t=e.sent,console.log("response",t.data),o(t.data.cases),b(t.data.todayCases),E(t.data.deaths),g(t.data.recovered);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null),r.a.createElement("p",null),r.a.createElement("h1",null,"Monitor COVID-19 no Brasil"),r.a.createElement("p",null),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",width:"100%",flexDirection:"row"}},r.a.createElement(p,{label:"Casos Totais",number:a}),r.a.createElement(p,{label:"Hoje",number:m}),r.a.createElement(p,{label:"Mortes",number:v}),r.a.createElement(p,{label:"Curados",number:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.d066344f.chunk.js.map