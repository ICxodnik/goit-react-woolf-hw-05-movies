"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[744],{471:function(t,e,n){n.d(e,{r:function(){return h}});n(791);var r="Gallery_gallery__9nEup",a=n(866),c=n(689),u=n(87),s="GalleryItem_container__twRDK",o="GalleryItem_votes__ji5wo",i="GalleryItem_title__uFyrj",l="GalleryItem_poster__sloiz",p=n(184),f=function(t){var e,n,r=t.film,f=(0,c.TH)();return(0,p.jsxs)(u.rU,{className:s,onError:function(t){t.target.src=(0,a.FF)(),t.target.srcset=""},to:"/movies/".concat(r.id),state:{from:f,film:r},children:[(0,p.jsx)("img",{className:l,src:(0,a.Q4)(r.poster_path),srcSet:(0,a.Qb)(r.poster_path),alt:null!==(e=r.title)&&void 0!==e?e:r.name,width:"220px",height:"330px"}),(0,p.jsx)("span",{className:i,children:null!==(n=r.title)&&void 0!==n?n:r.name}),(0,p.jsx)("span",{className:o,children:r.vote_average.toFixed(1)})]})},h=function(t){return(0,p.jsx)("div",{className:r,children:t.films.map((function(t){return(0,p.jsx)(f,{film:t},t.id)}))})}},744:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),o=n(390),i=n(471),l="Home_page__UCLJa",p=n(184);function f(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],f=(0,s.useState)(null),h=(0,a.Z)(f,2),d=h[0],v=h[1];function m(){return(m=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Hg)();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return(0,s.useEffect)((function(){(function(){return m.apply(this,arguments)})().then((function(t){c(t)})).catch((function(t){return v(t)}))}),[]),d?(0,p.jsx)("div",{children:d}):(0,p.jsx)("div",{children:(0,p.jsx)("div",{className:l,children:(0,p.jsx)(i.r,{films:n})})})}},390:function(t,e,n){n.d(e,{HI:function(){return i},Hg:function(){return s},TP:function(){return p},tx:function(){return v},zv:function(){return h}});var r=n(861),a=n(757),c=n.n(a),u=n(294).Z.create({baseURL:"https://api.themoviedb.org/3/",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZThjMTU4ZjgyYWIxNTYyZjFiZjZjNDU3OTU0M2M5MyIsInN1YiI6IjY2MzY3OTJkYzM5MjY2MDEyNjZlZTk5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E7cJeKzFI5ktXMflbsHwvvJwQAEggGTnSKeqO30xvww"}});function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("trending/movie/day");case 2:return e=t.sent,console.log(e),t.abrupt("return",e.data.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function i(t,e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(e,n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("search/movie",{params:{query:e,page:n,sort_by:"vote_average.desc"}});case 2:return r=t.sent,console.log(r),t.abrupt("return",r.data.results);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/"+e);case 2:return n=t.sent,console.log(n),t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e,"/credits"));case 2:return n=t.sent,console.log(n),t.abrupt("return",n.data.cast);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e,"/reviews"),{params:{movie_id:e}});case 2:return n=t.sent,console.log(n),t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},866:function(t,e,n){n.d(e,{FF:function(){return u},Q4:function(){return a},Qb:function(){return c}});var r="https://media.themoviedb.org/t/p/w220_and_h330_face";function a(t){return"".concat(r).concat(t)}function c(t){return"".concat(r).concat(t," 1x, ").concat("https://media.themoviedb.org/t/p/w440_and_h660_face").concat(t," 2x")}function u(){return"https://placehold.co/220x330?text=Secret+Poster"}}}]);
//# sourceMappingURL=744.59b68c7f.chunk.js.map