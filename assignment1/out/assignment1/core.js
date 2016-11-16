// Compiled by ClojureScript 1.9.293 {}
goog.provide('assignment1.core');
goog.require('cljs.core');
goog.require('clojure.string');
assignment1.core.Copies = (function assignment1$core$Copies(s,s1,n){
return (s1 + clojure.string.join.call(null,cljs.core.repeat.call(null,n,s)));
});
goog.exportSymbol('assignment1.core.Copies', assignment1.core.Copies);
assignment1.core.Factorial = (function assignment1$core$Factorial(n){
return cljs.core.reduce.call(null,cljs.core._STAR_,(1),cljs.core.range.call(null,(1),(n + (1))));
});
goog.exportSymbol('assignment1.core.Factorial', assignment1.core.Factorial);
assignment1.core.TaylorElements = (function assignment1$core$TaylorElements(x,n,prev){
var current = (((prev * x) * x) * ((((1) / (2)) / n) / (((2) * n) - (1))));
return (new cljs.core.LazySeq(null,((function (current){
return (function (){
return cljs.core.cons.call(null,current,assignment1.core.TaylorElements.call(null,x,(n + (1)),current));
});})(current))
,null,null));
});
assignment1.core.abs = (function assignment1$core$abs(n){
var x__3364__auto__ = n;
var y__3365__auto__ = (- n);
return ((x__3364__auto__ > y__3365__auto__) ? x__3364__auto__ : y__3365__auto__);
});
assignment1.core.CosTaylor = (function assignment1$core$CosTaylor(x,eps){
cljs.core.comp.call(null,cljs.core.first,cljs.core.first,cljs.core.partial.call(null,cljs.core.drop_while,(function (p1__46_SHARP_){
return (eps < assignment1.core.abs.call(null,((- cljs.core.first.call(null,p1__46_SHARP_)) - cljs.core.second.call(null,p1__46_SHARP_))));
})),cljs.core.partition,(2),(1));

return assignment1.core.TaylorElements.call(null,x,(1),x);
});
goog.exportSymbol('assignment1.core.CosTaylor', assignment1.core.CosTaylor);
assignment1.core.SqrByCathetus = (function assignment1$core$SqrByCathetus(a,b){
return ((a * b) / (2));
});
goog.exportSymbol('assignment1.core.SqrByCathetus', assignment1.core.SqrByCathetus);

//# sourceMappingURL=core.js.map