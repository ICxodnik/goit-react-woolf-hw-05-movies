"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[220],{863:function(e,n,t){t.d(n,{v:function(){return f}});var r=t(671),s=t(144),a=t(136),c=t(104),i="Message_info__wv0Jn",o="Message_warning__-C1KS",u="Message_error__Dd2nR",l=t(791),p=t(184),f=function(e){(0,a.Z)(t,e);var n=(0,c.Z)(t);function t(){return(0,r.Z)(this,t),n.apply(this,arguments)}return(0,s.Z)(t,[{key:"render",value:function(){return{info:(0,p.jsx)("div",{className:i,children:this.props.message}),warning:(0,p.jsx)("div",{className:o,children:this.props.message}),error:(0,p.jsx)("div",{className:u,children:this.props.message})}[this.props.level]}}]),t}(l.Component);f.defaultProps={level:"warning"}},220:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r=t(861),s=t(439),a=t(757),c=t.n(a),i=t(791),o=t(390),u=t(689),l="Reviews_poster__KH4Iz",p="Reviews_imageWrapper__vLIvy",f="Reviews_author__ZJLB8",h="Reviews_reviewHeader__pAMIK",v="Reviews_reviews__Mf1cR",d="Reviews_review__AQuNC",m=t(866),_=t(829),w=t(690),g=t(863),x=t(184);function j(){var e=(0,u.UO)().movieId,n=(0,i.useState)(null),t=(0,s.Z)(n,2),a=t[0],j=t[1],y=(0,i.useState)(null),Z=(0,s.Z)(y,2),N=Z[0],b=Z[1],I=(0,i.useState)(!1),k=(0,s.Z)(I,2),J=k[0],M=k[1];return(0,i.useEffect)((function(){function n(){return(n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,M(!0),n.next=4,(0,o.tx)(e);case 4:t=n.sent,j(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),b(n.t0.message);case 11:return n.prev=11,M(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}b(null),e&&function(){n.apply(this,arguments)}()}),[e]),J?(0,x.jsx)(_.Z,{hide:!J}):N?(0,x.jsx)(g.v,{level:"error",message:N}):a&&a.length?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:v,children:a.map((function(e){return(0,x.jsxs)("div",{className:d,children:[(0,x.jsxs)("div",{className:h,children:[(0,x.jsx)("div",{className:p,children:(0,x.jsx)("img",{className:l,src:(0,m.Q4)(e.author_details.avatar_path),height:"60px",alt:e.author})}),(0,x.jsx)("span",{className:f,children:e.author})]}),(0,x.jsx)("span",{className:"content",children:e.content})]},e.id)}))}),a.length>5&&(0,x.jsx)(w.t,{})]}):(0,x.jsx)(g.v,{level:"info",message:"We don't have any reviews for this movie."})}},690:function(e,n,t){t.d(n,{t:function(){return s}});t(791);var r=t(184),s=function(){return(0,r.jsx)("div",{className:"smallButton",children:(0,r.jsx)("span",{className:"content",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:"scroll up \u25b2"})})}},390:function(e,n,t){t.d(n,{HI:function(){return u},Hg:function(){return i},TP:function(){return p},tx:function(){return d},zv:function(){return h}});var r=t(861),s=t(757),a=t.n(s),c=t(294).Z.create({baseURL:"https://api.themoviedb.org/3/",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZThjMTU4ZjgyYWIxNTYyZjFiZjZjNDU3OTU0M2M5MyIsInN1YiI6IjY2MzY3OTJkYzM5MjY2MDEyNjZlZTk5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E7cJeKzFI5ktXMflbsHwvvJwQAEggGTnSKeqO30xvww"}});function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("trending/movie/day");case 2:return n=e.sent,console.log(n),e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function e(n,t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("search/movie",{params:{query:n,page:t,sort_by:"vote_average.desc"}});case 2:return r=e.sent,console.log(r),e.abrupt("return",r.data.results);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/"+n);case 2:return t=e.sent,console.log(t),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(n,"/credits"));case 2:return t=e.sent,console.log(t),e.abrupt("return",t.data.cast);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(n,"/reviews"),{params:{movie_id:n}});case 2:return t=e.sent,console.log(t),e.abrupt("return",t.data.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},866:function(e,n,t){t.d(n,{FF:function(){return c},Q4:function(){return s},Qb:function(){return a}});var r="https://media.themoviedb.org/t/p/w220_and_h330_face";function s(e){return"".concat(r).concat(e)}function a(e){return"".concat(r).concat(e," 1x, ").concat("https://media.themoviedb.org/t/p/w440_and_h660_face").concat(e," 2x")}function c(){return"https://placehold.co/220x330?text=Secret+Poster"}}}]);
//# sourceMappingURL=220.c783df40.chunk.js.map