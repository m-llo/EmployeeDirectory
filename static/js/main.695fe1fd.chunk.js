(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var s=n(2),c=n(12),a=n.n(c),r=(n(22),n(23),n(13)),l=n(14),i=n(17),o=n(16),d=n(0);var h=function(e){return Object(d.jsx)("div",{className:"px-5",children:Object(d.jsxs)("table",{className:"table table-striped dataTable p-5 bg-light",children:[Object(d.jsx)("thead",{className:"bg-primary text-light ",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"Picture"}),Object(d.jsx)("th",{scope:"col",onClick:function(){return e.employeeSort()},children:"First"}),Object(d.jsx)("th",{scope:"col",children:"Last"}),Object(d.jsx)("th",{scope:"col",children:"Email"}),Object(d.jsx)("th",{scope:"col",children:"Phone"}),Object(d.jsx)("th",{scope:"col",children:"City"})]})}),Object(d.jsx)("tbody",{className:"table-hover",children:e.results.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("img",{src:e.picture.thumbnail,alt:"employee thumbnail"})}),Object(d.jsx)("td",{children:e.name.first}),Object(d.jsx)("td",{children:e.name.last}),Object(d.jsx)("td",{children:e.email}),Object(d.jsx)("td",{children:e.phone}),Object(d.jsx)("td",{children:e.location.city})]},e.login.uuid)}))})]})})};var u=function(e){return Object(d.jsx)("div",{className:"container pt-3",children:Object(d.jsxs)("div",{className:"jumbotron mt-6 p-5 bg-dark",children:[Object(d.jsx)("h1",{className:"display-2 text-primary",children:"Employee Directory"}),Object(d.jsx)("p",{}),Object(d.jsx)("span",{className:"d-flex mt-5",children:Object(d.jsxs)("form",{className:"d-flex align-items-end",children:[Object(d.jsx)("input",{className:"form-control  ml-2",type:"text",value:e.search,id:"search",onChange:function(t){return e.handleInputChange(t)},placeholder:"Search by Last Name"}),Object(d.jsx)("button",{className:"btn btn-primary",value:e.search,type:"submit",onClick:function(t){return e.handleFormSubmit(t)},children:"Search"})]})})]})})},j=n(15),m=n.n(j),b=function(){return m.a.get("https://randomuser.me/api/?seed=yolo&results=25&nat=us")},p=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={search:"",results:[],displayed:[],ascending:!0},e.searchAll=function(){b().then((function(t){console.log(t),e.setState({results:t.data.results}),e.setState({displayed:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){console.log(t),console.log(t.target),console.log(t.target.value),e.setState({search:t.target.value})},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state.search;console.log(n),e.employeeSearch(n)},e.employeeSearch=function(t){var n=t;console.log("searching for",n);var s=e.state.displayed;console.log("employee list ",s);var c=s.filter((function(e){return e.name.last===n}));console.log("search result ",c),e.setState({displayed:c})},e.sortByName=function(){var t=e.state.displayed;e.state.ascending?t.sort((function(e,t){return e.name.first<t.name.first?-1:e.name.first>t.name.first?1:0})):t.sort((function(e,t){return e.name.first>t.name.first?-1:e.name.first<t.name.first?1:0})),e.setState({ascending:!e.state.ascending}),e.setState({displayed:t})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.searchAll()}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(u,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),Object(d.jsx)(h,{results:this.state.displayed,employeeSort:this.sortByName})]})}}]),n}(s.Component);var f=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(p,{})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};a.a.render(Object(d.jsx)(f,{}),document.getElementById("root")),x()}},[[43,1,2]]]);
//# sourceMappingURL=main.695fe1fd.chunk.js.map