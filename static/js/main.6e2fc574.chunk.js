(window["webpackJsonp@laney/react-use-truncate-list-example"]=window["webpackJsonp@laney/react-use-truncate-list-example"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(1),u=n.n(l),c=(n(10),n(2));function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,l=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(i){a=!0,l=i}finally{try{r||null==c.return||c.return()}finally{if(a)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o=["Blue","Brie","Cheddar","Chhurpi","Goat","Gouda","Gruy\xe8re","Havarti","Parmesan","Provolone","Raclette","Roquefort","Sharp Cheddar","Swiss"],s=function(){var e=Object(r.useState)(5),t=Object(c.a)(e,2),n=t[0],l=t[1],u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=t<0?0:t,a=i(Object(r.useState)(n),2),l=a[0],u=a[1],c=e-l<0?0:e-l,o=Object(r.useCallback)(function(){return u(e)},[e]),s=Object(r.useCallback)(function(){return u(n)},[n]);return Object(r.useEffect)(function(){return u(n)},[n,e]),{displayed:l,remaining:c,displayAllAction:o,truncateAction:s}}(o.length,n),s=u.displayed,d=u.remaining,h=u.displayAllAction,m=u.truncateAction;return a.a.createElement("div",{className:"container"},a.a.createElement("h3",null,"Cheeses!"),a.a.createElement("label",{htmlFor:"cheese-count"},"Initial:"),a.a.createElement("input",{id:"cheese-count",type:"number",min:"0",value:n,onChange:function(e){return l(e.target.value)}}),a.a.createElement("ul",null,o.slice(0,s).map(function(e){return a.a.createElement("li",{key:e},e)})),d?a.a.createElement("button",{onClick:h},"Show ",d," More Cheeses"):a.a.createElement("button",{onClick:m},"Show Fewer Cheeses"))};u.a.render(a.a.createElement(s,null),document.getElementById("root"))},3:function(e,t,n){e.exports=n(11)}},[[3,1,2]]]);
//# sourceMappingURL=main.6e2fc574.chunk.js.map