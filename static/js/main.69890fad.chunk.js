(this.webpackJsonpcodingimagined=this.webpackJsonpcodingimagined||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/codinglogo.5c22fb1a.svg"},24:function(e,t,n){e.exports=n(39)},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(20),r=n.n(l),c=(n(29),n(30),n(6)),i=n(5),u=n(21),s=n.n(u);n(31);var m=function(){return o.a.createElement("header",null,o.a.createElement("div",{className:"container"},o.a.createElement("img",{src:s.a,className:"App-logo",id:"App-logo",alt:"logo"}),o.a.createElement("h1",null,o.a.createElement(c.b,{to:"/",style:{textDecoration:"none"},className:"button"},"Coding Imagined")),o.a.createElement("nav",{className:"App-Header"},o.a.createElement("ul",{className:"buttons"},o.a.createElement("li",null,o.a.createElement(c.b,{to:"/explore",style:{textDecoration:"none"},className:"button"},"Explore")),o.a.createElement("li",null,o.a.createElement(c.b,{to:"/about",style:{textDecoration:"none"},className:"button"},"About Us")),o.a.createElement("li",null,o.a.createElement(c.b,{to:"/morestuff",style:{textDecoration:"none"},className:"button"},"More Stuff")),o.a.createElement("li",null,o.a.createElement(c.b,{to:"/evenMoreStuff",style:{textDecoration:"none"},className:"button"},"Even More Stuff"))))))};var d=function(){return o.a.createElement("div",null,o.a.createElement(m,null),o.a.createElement("div",null,"Explore Page"))};var E=function(){return o.a.createElement("div",null,o.a.createElement(m,null),o.a.createElement("div",null,"About Us"))};var f=function(){return o.a.createElement("div",null,o.a.createElement(m,null),o.a.createElement("div",null,"More Stuff"))};var v=function(){return o.a.createElement("div",null,o.a.createElement(m,null),o.a.createElement("div",null,"Even More Stuff"))},p=n(9),h=n(10),g=n(13),b=n(12),y=n(14),N=n(11),w=(n(37),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(g.a)(this,Object(b.a)(t).call(this,e))).changeColor.bind(Object(N.a)(n)),n.state={isLoading:!1,color:"none"},n}return Object(y.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.state={isLoading:!1,color:"none"}}},{key:"changeColor",value:function(){var e="none"==this.state.color?"green":"none";this.setState({isLoading:!1,color:e})}},{key:"render",value:function(){var e=this,t=this.props;t.col,t.row;return 1==this.state.isLoading?o.a.createElement("div",{className:"node "},"y"):o.a.createElement("div",{className:"node "+this.state.color,onMouseDown:function(){e.changeColor()}})}}]),t}(a.Component)),x=(n(38),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(g.a)(this,Object(b.a)(t).call(this,e))).state={isLoading:!0,grid:null},n}return Object(y.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){for(var e=[],t=0,n=0;n<10;n++){for(var a=[],o=0;o<10;o++)a.push({col:n,row:o,id:t}),t++;e.push(a)}this.setState({isLoading:!1,grid:e})}},{key:"render",value:function(){if(this.state.isLoading)return o.a.createElement("div",null);var e=this.state.grid;return o.a.createElement("div",{className:"center"},e.map((function(e){return o.a.createElement("div",{key:e[0].col,className:"row"},e.map((function(e){return o.a.createElement(w,{col:e.col,row:e.row,key:e.id})})))})))}}]),t}(a.Component));var j=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,null),o.a.createElement(x,null))};var k=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(c.a,null,o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:j}),o.a.createElement(i.a,{path:"/about",component:E}),o.a.createElement(i.a,{path:"/explore",component:d}),o.a.createElement(i.a,{path:"/moreStuff",component:f}),o.a.createElement(i.a,{path:"/EvenMoreStuff",component:v}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.69890fad.chunk.js.map