var __extends=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{BLi7:function(t,e,n){"use strict";n.r(e);var r=n("8Y7J"),o=n("j1vE").a,a=function(){},i=n("5VhP"),c=n("pMnS"),u=n("3hes"),s=n("1xDM"),l=n("J5kl"),b=n("/om3"),p=n("cbJd"),h=n("XNiG"),d=n("1G5W"),f=function(){function t(t,e){this.breakpointObserver=t,this.cd=e,this.view=p.a.Week,this.viewDate=new Date,this.daysInWeek=7,this.destroy$=new h.a}return t.prototype.ngOnInit=function(){var t=this,e={small:{breakpoint:"(max-width: 576px)",daysInWeek:2},medium:{breakpoint:"(max-width: 768px)",daysInWeek:3},large:{breakpoint:"(max-width: 960px)",daysInWeek:5}};this.breakpointObserver.observe(Object.values(e).map((function(t){return t.breakpoint}))).pipe(Object(d.a)(this.destroy$)).subscribe((function(n){var r=Object.values(e).find((function(t){var e=t.breakpoint;return!!n.breakpoints[e]}));t.daysInWeek=r?r.daysInWeek:7,t.cd.markForCheck()}))},t.prototype.ngOnDestroy=function(){this.destroy$.next()},t}(),m=n("/HVE"),y=n("itXk"),v=n("GyhO"),w=n("HDdC"),_=n("IzEk"),k=n("7o/Q"),j=function(){function t(t){this.total=t}return t.prototype.call=function(t,e){return e.subscribe(new W(t,this.total))},t}(),W=function(t){function e(e,n){var r=this;return(r=t.call(this,e)||this).total=n,r.count=0,r}return __extends(e,t),e.prototype._next=function(t){++this.count>this.total&&this.destination.next(t)},e}(k.a),O=n("Kj3r"),I=n("lJxs"),x=n("JX91"),g=n("KCVW");r.F;var M,q=new Set,D=function(){function t(t){this._platform=t,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):S}return t.prototype.matchMedia=function(t){return this._platform.WEBKIT&&function(t){if(!q.has(t))try{M||((M=document.createElement("style")).setAttribute("type","text/css"),document.head.appendChild(M)),M.sheet&&(M.sheet.insertRule("@media "+t+" {.fx-query-test{ }}",0),q.add(t))}catch(e){console.error(e)}}(t),this._matchMedia(t)},t}();function S(t){return{matches:"all"===t||""===t,media:t,addListener:function(){},removeListener:function(){}}}D.decorators=[{type:r.y,args:[{providedIn:"root"}]}],D.ctorParameters=function(){return[{type:m.a}]},D.ngInjectableDef=Object(r.mc)({factory:function(){return new D(Object(r.nc)(m.a))},token:D,providedIn:"root"});var E=function(){function t(t,e){this._mediaMatcher=t,this._zone=e,this._queries=new Map,this._destroySubject=new h.a}return t.prototype.ngOnDestroy=function(){this._destroySubject.next(),this._destroySubject.complete()},t.prototype.isMatched=function(t){var e=this;return J(Object(g.a)(t)).some((function(t){return e._registerQuery(t).mql.matches}))},t.prototype.observe=function(t){var e=this,n=J(Object(g.a)(t)).map((function(t){return e._registerQuery(t).observable})),r=Object(y.a)(n);return(r=Object(v.a)(r.pipe(Object(_.a)(1)),r.pipe((1,function(t){return t.lift(new j(1))}),Object(O.a)(0)))).pipe(Object(I.a)((function(t){var e={matches:!1,breakpoints:{}};return t.forEach((function(t){e.matches=e.matches||t.matches,e.breakpoints[t.query]=t.matches})),e})))},t.prototype._registerQuery=function(t){var e=this;if(this._queries.has(t))return this._queries.get(t);var n=this._mediaMatcher.matchMedia(t),r={observable:new w.a((function(t){var r=function(n){return e._zone.run((function(){return t.next(n)}))};return n.addListener(r),function(){n.removeListener(r)}})).pipe(Object(x.a)(n),Object(I.a)((function(e){return{query:t,matches:e.matches}})),Object(d.a)(this._destroySubject)),mql:n};return this._queries.set(t,r),r},t}();function J(t){return t.map((function(t){return t.split(",")})).reduce((function(t,e){return t.concat(e)})).map((function(t){return t.trim()}))}E.decorators=[{type:r.y,args:[{providedIn:"root"}]}],E.ctorParameters=function(){return[{type:D},{type:r.K}]},E.ngInjectableDef=Object(r.mc)({factory:function(){return new E(Object(r.nc)(D),Object(r.nc)(r.K))},token:E,providedIn:"root"});var L=r.Kb({encapsulation:2,styles:[],data:{}});function K(t){return r.ic(2,[(t()(),r.Mb(0,0,null,null,1,"div",[["class","alert alert-info"]],null,null,null,null,null)),(t()(),r.gc(-1,null,["\n  Shrink the browser window size to reduce the number of days in the week.\n"])),(t()(),r.gc(-1,null,["\n\n"])),(t()(),r.Mb(3,0,null,null,2,"mwl-calendar-week-view",[],null,null,null,u.b,u.a)),r.Lb(4,770048,null,0,s.a,[r.j,l.a,r.E,b.a],{viewDate:[0,"viewDate"],daysInWeek:[1,"daysInWeek"]},null),(t()(),r.gc(-1,null,["\n"])),(t()(),r.gc(-1,null,["\n"]))],(function(t,e){var n=e.component;t(e,4,0,n.viewDate,n.daysInWeek)}),null)}var N=r.Ib("mwl-demo-component",f,(function(t){return r.ic(0,[(t()(),r.Mb(0,0,null,null,1,"mwl-demo-component",[],null,null,null,K,L)),r.Lb(1,245760,null,0,f,[E,r.j],null,null)],(function(t,e){t(e,1,0)}),null)}),{},{},[]),Q=n("SVse"),z=n("LjNj"),C=n("9thp"),P=n("kUQb"),V=n("hYcs"),B=n("QBGs"),G=n("4uqC"),X=n("yotz"),F=n("cyy6"),$=n("SNsX"),A=n("Nrjh"),H=n("iInd");n.d(e,"DemoModuleNgFactory",(function(){return Y}));var Y=r.Jb(a,[],(function(t){return r.Vb([r.Wb(512,r.m,r.tb,[[8,[i.a,c.a,N]],[3,r.m],r.I]),r.Wb(4608,Q.q,Q.p,[r.E,[2,Q.N]]),r.Wb(4608,Q.h,Q.h,[Q.q]),r.Wb(5120,b.a,o,[]),r.Wb(4608,z.a,z.a,[]),r.Wb(4608,C.a,C.a,[b.a]),r.Wb(4608,l.a,l.a,[b.a]),r.Wb(4608,P.a,P.a,[Q.h]),r.Wb(1073742336,Q.c,Q.c,[]),r.Wb(1073742336,V.a,V.a,[]),r.Wb(1073742336,B.a,B.a,[]),r.Wb(1073742336,G.a,G.a,[]),r.Wb(1073742336,X.b,X.b,[]),r.Wb(1073742336,F.a,F.a,[]),r.Wb(1073742336,$.a,$.a,[]),r.Wb(1073742336,A.a,A.a,[]),r.Wb(1073742336,H.o,H.o,[[2,H.t],[2,H.m]]),r.Wb(1073742336,a,a,[]),r.Wb(1024,H.k,(function(){return[[{path:"",component:f}]]}),[])])}))}}]);