(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),o=a.n(c),i=(a(14),a(3)),s=a(4),u=a(6),l=a(5),h=a(7),d=a(1),p=(a(16),["The Shawshank Redemption (1994)","The Godfather (1972)","The Usual Suspects (1995)","Schindler\u2019s List (1993)","The Godfather: Part II (1974)","Fight Club (1999)","Indiana Jones and the Raiders of the Lost Ark (1981)","One Flew Over the Cuckoo\u2019s Nest (1975)","Star Wars: Episode IV - A New Hope (1977)","Casablanca (1942)"]),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={data:p,search:""},a.updateState=a.updateState.bind(Object(d.a)(Object(d.a)(a))),a.clearInput=a.clearInput.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"updateState",value:function(e){this.setState({search:e.target.value})}},{key:"clearInput",value:function(){this.setState({search:""}),o.a.findDOMNode(this.refs.myInput).focus()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("input",{value:this.state.search,ref:function(t){return e.state.search=t}}),r.a.createElement("button",{onClick:this.clearInput},"Search"),r.a.createElement("h4",null,this.state.data.map(function(e,t){return r.a.createElement(f,{componentData:e})})))}}]),t}(r.a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("span",null,this.props.componentData,r.a.createElement("br",null)))}}]),t}(r.a.Component),m=b;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.9db8752e.chunk.js.map