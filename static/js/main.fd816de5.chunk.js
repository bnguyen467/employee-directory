(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{18:function(e,t,a){e.exports=a(44)},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(14),c=a.n(r),s=a(4),m=a(17),i=a(16),l=(a(25),a(15)),u=a.n(l);a(43);var d=function(){var e=Object(n.useState)({employees:[],columns:[{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Email",accessor:"email"},{Header:"Phone Number",accessor:"phoneNumber"}]}),t=Object(m.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){u.a.get("https://randomuser.me/api?results=20").then((function(e){var t=e.data.results.map((function(e){return{firstName:e.name.first,lastName:e.name.last,email:e.email,phoneNumber:e.phone}}));r(Object(s.a)(Object(s.a)({},a),{},{employees:t}))})).catch((function(e){return console.error(e)}))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{data:a.employees,columns:a.columns}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.fd816de5.chunk.js.map