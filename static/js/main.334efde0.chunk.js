(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o),s=(a(14),a(3)),i=a(4),u=a(6),l=a(5),h=a(7),d=a(1),p=(a(16),["The Shawshank Redemption (1994)","The Godfather (1972)","The Usual Suspects (1995)","Schindler\u2019s List (1993)","The Godfather: Part II (1974)","Fight Club (1999)","Indiana Jones and the Raiders of the Lost Ark (1981)","One Flew Over the Cuckoo\u2019s Nest (1975)","Star Wars: Episode IV - A New Hope (1977)","Casablanca (1942)"]),m=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={data:p,search:""},a.updateState=a.updateState.bind(Object(d.a)(Object(d.a)(a))),a.searchMovie=a.searchMovie.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"updateState",value:function(e){this.setState({search:e.target.value})}},{key:"searchMovie",value:function(){for(var e=[],t=0;t<p.length;t++)p[t].includes(this.state.search)&&e.push(p[t]);alert("You searched movies with keyword: "+this.state.search),this.setState({data:e,search:""}),c.a.findDOMNode(this.refs.myInput).focus()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{value:this.state.search,onChange:this.updateState,ref:"myInput"}),r.a.createElement("button",{onClick:this.searchMovie},"Search"),r.a.createElement("table",null,this.state.data.map(function(e,t){return r.a.createElement(b,{componentData:e})})))}}]),t}(r.a.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("span",null,this.props.componentData,r.a.createElement("br",null)))))}}]),t}(r.a.Component),f=m;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.334efde0.chunk.js.map