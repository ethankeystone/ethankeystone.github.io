(this.webpackJsonpcodingimagined=this.webpackJsonpcodingimagined||[]).push([[0],{22:function(e,t,n){e.exports=n.p+"static/media/codinglogo.5c22fb1a.svg"},25:function(e,t,n){e.exports=n(41)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(21),l=n.n(r),i=(n(30),n(31),n(7)),s=n(6),c=n(22),u=n.n(c);n(32);var d=function(){return o.a.createElement("header",null,o.a.createElement("div",{className:"container"},o.a.createElement("img",{src:u.a,className:"App-logo",id:"App-logo",alt:"logo"}),o.a.createElement("h1",null,o.a.createElement(i.b,{to:"/",style:{textDecoration:"none"},className:"button"},"Coding Imagined")),o.a.createElement("nav",{className:"App-Header"},o.a.createElement("ul",{className:"buttons"},o.a.createElement("li",null,o.a.createElement(i.b,{to:"/explore",style:{textDecoration:"none"},className:"button"},"Explore")),o.a.createElement("li",null,o.a.createElement(i.b,{to:"/about",style:{textDecoration:"none"},className:"button"},"About Us")),o.a.createElement("li",null,o.a.createElement(i.b,{to:"/morestuff",style:{textDecoration:"none"},className:"button"},"More Stuff")),o.a.createElement("li",null,o.a.createElement(i.b,{to:"/evenMoreStuff",style:{textDecoration:"none"},className:"button"},"Even More Stuff"))))))};var m=function(){return o.a.createElement("div",null,o.a.createElement(d,null),o.a.createElement("div",null,"Explore Page"))};var h=function(){return o.a.createElement("div",null,o.a.createElement(d,null),o.a.createElement("div",null,"About Us"))};var E=function(){return o.a.createElement("div",null,o.a.createElement(d,null),o.a.createElement("div",null,"More Stuff"))};var g=function(){return o.a.createElement("div",null,o.a.createElement(d,null),o.a.createElement("div",null,"Even More Stuff"))},p=n(3),f=n(11),v=n(12),b=n(14),w=n(13),S=n(15),j=(n(38),function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(b.a)(this,Object(w.a)(t).call(this,e))).state={isLoading:!1,color:"none"},n}return Object(S.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.setState({isLoading:!1,color:"none",col:this.props.col,row:this.props.row})}},{key:"determineColor",value:function(e){return"none"===e?"none":"expand"===e?"green":"path"===e?"blue":"start"===e?"start":"end"===e?"end":"wall"===e?"wall":"error"}},{key:"render",value:function(){var e=this.props,t=e.col,n=e.row,a=e.addNode,r=e.state,l=e.handleMouseUp,i=e.handleMouseDown,s=this.determineColor(r);return this.state.color=s,!0===this.state.isLoading?o.a.createElement("div",{className:"node "},"Yikes"):o.a.createElement("div",{className:"node "+this.state.color,onMouseDown:function(){i()},onMouseEnter:function(){return a(t,n)},onMouseUp:function(){return l(t,n)}})}}]),t}(a.Component)),O=n(9),k=n.n(O),y=(n(40),function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(b.a)(this,Object(w.a)(t).call(this,e))).state={isLoading:!0,grid:null,mouseDown:!1,currentSelection:"1"},n}return Object(S.a)(t,e),Object(v.a)(t,[{key:"createGrid",value:function(){for(var e=[],t=0,n=7,a=5,o=7,r=30,l=0;l<15;l++){for(var i=[],s=0;s<40;s++){var c="none";l===n&&s===a?c="start":l===o&&s===r&&(c="end"),i.push({col:l,row:s,id:t,state:c}),t++}e.push(i)}return e}},{key:"componentDidMount",value:function(){this.resetGrid()}},{key:"addNode",value:function(e,t){this.state.mouseDown&&("expand"===this.state.grid[t][e].state||"weight"===this.state.grid[t][e].state?this.setState({grid:k()(this.state.grid,Object(p.a)({},t,Object(p.a)({},e,{state:{$set:"none"}})))}):"end"===this.state.grid[t][e].state||"start"===this.state.grid[t][e].state||("1"===this.state.currentSelection?this.setState({grid:k()(this.state.grid,Object(p.a)({},t,Object(p.a)({},e,{state:{$set:"expand"}})))}):"2"===this.state.currentSelection&&this.setState({grid:k()(this.state.grid,Object(p.a)({},t,Object(p.a)({},e,{state:{$set:"wall"}})))})))}},{key:"handleMouseDown",value:function(e,t){"expand"===this.state.grid[t][e].state||"weight"===this.state.grid[t][e].state?this.setState({grid:k()(this.state.grid,Object(p.a)({},t,Object(p.a)({},e,{state:{$set:"none"}})))}):"end"===this.state.grid[t][e].state||"start"===this.state.grid[t][e].state||("1"===this.state.currentSelection?this.setState({grid:k()(this.state.grid,Object(p.a)({},t,Object(p.a)({},e,{state:{$set:"expand"}})))}):"2"===this.state.currentSelection&&this.setState({grid:k()(this.state.grid,Object(p.a)({},t,Object(p.a)({},e,{state:{$set:"wall"}})))})),this.setState({mouseDown:!0})}},{key:"handleMouseUp",value:function(){this.setState({mouseDown:!1})}},{key:"resetGrid",value:function(){this.setState({isLoading:!1,grid:this.createGrid()})}},{key:"render",value:function(){var e=this;if(this.state.isLoading)return o.a.createElement("div",null);var t=this.state.grid;return o.a.createElement("div",{className:"center"},o.a.createElement("button",{onClick:function(){return e.resetGrid()}}," Reset Grid "),o.a.createElement("label",{htmlFor:"Weight"},"Toggle Weights "),o.a.createElement("select",{id:"Weight",onChange:function(t){return e.setState({currentSelection:t.target.value})}},o.a.createElement("option",{value:"1"},"Wall"),o.a.createElement("option",{value:"2"},"Weights")),o.a.createElement("label",{id:"Algo"}," Select Algorithm "),o.a.createElement("select",{id:"Algo"},o.a.createElement("option",{value:"1"}," Dijkstra's "),o.a.createElement("option",{value:"2"}," Some other one ")),o.a.createElement("div",null,t.map((function(t){return o.a.createElement("div",{key:t[0].col,className:"row"},t.map((function(t){return o.a.createElement(j,{col:t.col,row:t.row,key:t.id,addNode:function(n,a){return e.addNode(t.row,t.col)},handleMouseDown:function(n,a){return e.handleMouseDown(t.row,t.col)},handleMouseUp:function(){return e.handleMouseUp()},state:t.state})})))}))))}}]),t}(a.Component));var M=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(d,null),o.a.createElement(y,null))};var N=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(i.a,null,o.a.createElement(s.c,null,o.a.createElement(s.a,{exact:!0,path:"/",component:M}),o.a.createElement(s.a,{path:"/about",component:h}),o.a.createElement(s.a,{path:"/explore",component:m}),o.a.createElement(s.a,{path:"/moreStuff",component:E}),o.a.createElement(s.a,{path:"/EvenMoreStuff",component:g}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.eaef4052.chunk.js.map