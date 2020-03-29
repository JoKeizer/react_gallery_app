(this["webpackJsonpproject-7"]=this["webpackJsonpproject-7"]||[]).push([[0],{32:function(e,t,a){e.exports=a(61)},37:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),c=a.n(o),s=(a(37),a(15)),l=a(9),i=a(10),h=a(11),u=a(12),p=a(6),m=a(7),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"main-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{exact:!0,to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/friends"},"Friends")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/people"},"People")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/sunset"},"Sunset"))))}}]),a}(n.Component),d=function(e){e.data.id,e.data.secret,e.data.server,e.data.farm},v=function(e){return r.a.createElement("li",{className:"photo-container not-found"},r.a.createElement("i",{className:"material-icons icon-gif"},"sentiment_very_dissatisfied"),r.a.createElement("h3",null,"Sorry, no photos match your search"))},E=function(e){var t,a=e.data;return a.length>0?(t=a.map((function(e){return r.a.createElement(d,{data:e,key:e.id})})),r.a.createElement("div",{className:"photo-container"},r.a.createElement("h2",null,e.title," images"),r.a.createElement("ul",null,t))):(t=r.a.createElement(v,null),r.a.createElement("div",{className:"photo-container"},r.a.createElement("ul",null,t)))},g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchtext:""},e.onSearchChange=function(t){e.setState({searchtext:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSearch(e.query.value);var a="/search/".concat(e.query.value);e.props.history.push(a),t.currentTarget.reset()},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:this.handleSubmit,className:"search-form"},r.a.createElement("input",{ref:function(t){return e.query=t},type:"search",name:"search",placeholder:"Search",required:!0}),r.a.createElement("button",{type:"submit",className:"search-button"},r.a.createElement("svg",{fill:"#1d1b1b",height:"24",viewBox:"0 0 23 23",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))))}}]),a}(n.Component),b=Object(m.f)(g),w="8092185dff33df09943635e786214042",j=a(13),k=a.n(j),y=(a(60),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).performSearch=function(t){k.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(w,"&tags=").concat(t,"&per_page=24&format=json&nojsoncallback=1&safe_search=1&safe_search=1")).then((function(a){e.setState({photos:a.data.photos.photo,loading:!1,title:t})})).catch((function(e){console.log("Error fetching data")}))},e.state={photos:[],query:"",loading:!0,home:{photos:[],loading:!0},friends:{photos:[],loading:!0},people:{photos:[],loading:!0},sunset:{photos:[],loading:!0}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.performSearch(),k.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(w,"&tags=vacation&per_page=24&format=json&nojsoncallback=1&safe_search=1&safe_search=1")).then((function(t){var a=Object(s.a)({},e.state.home);a.photos=t.data.photos.photo,a.loading=!1,e.setState({home:a})})),k.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(w,"&tags=friends&per_page=24&format=json&nojsoncallback=1&safe_search=1&safe_search=1")).then((function(t){var a=Object(s.a)({},e.state.friends);a.photos=t.data.photos.photo,a.loading=!1,e.setState({friends:a})})),k.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(w,"&tags=people&per_page=24&format=json&nojsoncallback=1&safe_search=1&safe_search=1")).then((function(t){var a=Object(s.a)({},e.state.people);a.photos=t.data.photos.photo,a.loading=!1,e.setState({people:a})})),k.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(w,"&tags=sunset&per_page=24&format=json&nojsoncallback=1&safe_search=1&safe_search=1")).then((function(t){var a=Object(s.a)({},e.state.sunset);a.photos=t.data.photos.photo,a.loading=!1,e.setState({sunset:a})})).catch((function(e){console.log("Error fetching data")}))}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(b,{onSearch:this.performSearch}),r.a.createElement(f,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",render:function(){return r.a.createElement(E,{data:e.state.home.photos,title:"vacation"})}}),r.a.createElement(m.a,{exact:!0,path:"/friends",render:function(){return r.a.createElement(E,{data:e.state.friends.photos,title:"friends"})}}),r.a.createElement(m.a,{exact:!0,path:"/people",render:function(){return r.a.createElement(E,{data:e.state.people.photos,title:"people"})}}),r.a.createElement(m.a,{exact:!0,path:"/sunset",render:function(){return r.a.createElement(E,{data:e.state.sunset.photos,title:"sunset"})}}),r.a.createElement(m.a,{exact:!0,path:"/search/:query",render:function(){return r.a.createElement(E,{data:e.state.photos,title:e.state.title})}}),r.a.createElement(m.a,{component:v}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.15d1189f.chunk.js.map