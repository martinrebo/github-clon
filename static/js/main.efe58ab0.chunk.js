(this["webpackJsonpgithub-clon"]=this["webpackJsonpgithub-clon"]||[]).push([[0],[,,,,,function(e,a,t){e.exports=t(15)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(4),o=t.n(c),l=(t(10),t(1)),i=t(2),s={data:{name:"",bio:"",avatarUrl:"",company:"",email:"",repositories:{nodes:[]}},filtered:[],loading:!0},u=Object(n.createContext)(s),m=u.Provider,d=function(e){var a=e.children,t=Object(n.useReducer)((function(e,a){switch(a.type){case"GET_GITHUB_DATA":return Object(l.a)(Object(l.a)({},e),{},{data:a.payload,filtered:a.payload.repositories.nodes,loading:!1});case"FILTER_SEARCH":return Object(l.a)(Object(l.a)({},e),{},{filtered:a.payload,loading:!1});default:throw new Error}}),s),c=Object(i.a)(t,2),o=c[0],u=c[1];return r.a.createElement(m,{value:{state:o,dispatch:u}},a)};t(11),t(12);var p=function(){var e=Object(n.useContext)(u).state.data;return r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Github repo search"),r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{src:e.avatarUrl,alt:e.name})),r.a.createElement("div",{className:"profile"},r.a.createElement("p",{className:"name"},e.name),r.a.createElement("p",null,e.bio),r.a.createElement("p",null,e.email),r.a.createElement("p",null,e.company)))};t(13);var h=function(){var e=Object(n.useContext)(u),a=e.dispatch,t=Object(n.useCallback)(a,[]),c=Object(n.useState)({value:""}),o=Object(i.a)(c,2),l=o[0],s=o[1],m=function(a){var n=e.state.data.repositories.nodes.filter((function(e){return e.name.includes(a)}));t({type:"FILTER_SEARCH",payload:n})};return r.a.createElement("div",{className:"searchbar"},r.a.createElement("input",{className:"searchbar-input",type:"text",value:l.value,onChange:function(e){s({value:e.target.value}),m(e.target.value)}}))};t(14);var f=function(){var e=Object(n.useContext)(u),a=e.dispatch,t=Object(n.useCallback)(a,[]);return Object(n.useEffect)((function(){fetch("https://api.github.com/graphql",{method:"POST",headers:{Authorization:"bearer ".concat("97ecbd56bbc85ae918e9b901eb4fd2a6ae08ae9d")},body:JSON.stringify({query:'\nquery repo {\n    user(login: "martinrebo") {\n      name\n      bio\n      avatarUrl\n      company\n      email\n      repositories(first: 50) {\n          nodes {\n            name\n            description\n            createdAt\n            resourcePath\n            url\n          }\n      }\n    }\n  }\n  \n'})}).then((function(e){return e.json()})).then((function(e){console.log("Data",e),t({type:"GET_GITHUB_DATA",payload:e.data.user})})).catch((function(e){return console.log(e)}))}),[t]),r.a.createElement(r.a.Fragment,null,e.state.filtered.length>0?e.state.filtered.map((function(e,a){return r.a.createElement("div",{key:a,className:"repos"},r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"name"},e.name),r.a.createElement("div",{className:"description"},e.description))))})):r.a.createElement("div",{className:"noMatch"},' "No repositories match" '))};var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null,r.a.createElement(p,null),r.a.createElement(h,null),r.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.efe58ab0.chunk.js.map