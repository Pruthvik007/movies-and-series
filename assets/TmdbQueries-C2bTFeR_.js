import{_ as K,e as Q,n as te,i as w,f as A,t as re,g as se,h as D,k as L,s as ne,l as ie,m as P,S as ue,o as k,p as ae,q as oe,R as S,v as ce,w as j,C as V,x as le,I as B,y as R,d as q}from"./index-Cp5AYT38.js";var Y=function(n){K(s,n);function s(i,e){var t;return t=n.call(this)||this,t.client=i,t.options=e,t.trackedProps=[],t.selectError=null,t.bindMethods(),t.setOptions(e),t}var r=s.prototype;return r.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},r.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),H(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},r.onUnsubscribe=function(){this.listeners.length||this.destroy()},r.shouldFetchOnReconnect=function(){return C(this.currentQuery,this.options,this.options.refetchOnReconnect)},r.shouldFetchOnWindowFocus=function(){return C(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},r.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},r.setOptions=function(e,t){var a=this.options,u=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(e),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=a.queryKey),this.updateQuery();var c=this.hasListeners();c&&W(this.currentQuery,u,this.options,a)&&this.executeFetch(),this.updateResult(t),c&&(this.currentQuery!==u||this.options.enabled!==a.enabled||this.options.staleTime!==a.staleTime)&&this.updateStaleTimeout();var o=this.computeRefetchInterval();c&&(this.currentQuery!==u||this.options.enabled!==a.enabled||o!==this.currentRefetchInterval)&&this.updateRefetchInterval(o)},r.getOptimisticResult=function(e){var t=this.client.defaultQueryObserverOptions(e),a=this.client.getQueryCache().build(this.client,t);return this.createResult(a,t)},r.getCurrentResult=function(){return this.currentResult},r.trackResult=function(e,t){var a=this,u={},c=function(l){a.trackedProps.includes(l)||a.trackedProps.push(l)};return Object.keys(e).forEach(function(o){Object.defineProperty(u,o,{configurable:!1,enumerable:!0,get:function(){return c(o),e[o]}})}),(t.useErrorBoundary||t.suspense)&&c("error"),u},r.getNextResult=function(e){var t=this;return new Promise(function(a,u){var c=t.subscribe(function(o){o.isFetching||(c(),o.isError&&(e!=null&&e.throwOnError)?u(o.error):a(o))})})},r.getCurrentQuery=function(){return this.currentQuery},r.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},r.refetch=function(e){return this.fetch(Q({},e,{meta:{refetchPage:e==null?void 0:e.refetchPage}}))},r.fetchOptimistic=function(e){var t=this,a=this.client.defaultQueryObserverOptions(e),u=this.client.getQueryCache().build(this.client,a);return u.fetch().then(function(){return t.createResult(u,a)})},r.fetch=function(e){var t=this;return this.executeFetch(e).then(function(){return t.updateResult(),t.currentResult})},r.executeFetch=function(e){this.updateQuery();var t=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(t=t.catch(te)),t},r.updateStaleTimeout=function(){var e=this;if(this.clearStaleTimeout(),!(w||this.currentResult.isStale||!A(this.options.staleTime))){var t=re(this.currentResult.dataUpdatedAt,this.options.staleTime),a=t+1;this.staleTimeoutId=setTimeout(function(){e.currentResult.isStale||e.updateResult()},a)}},r.computeRefetchInterval=function(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1},r.updateRefetchInterval=function(e){var t=this;this.clearRefetchInterval(),this.currentRefetchInterval=e,!(w||this.options.enabled===!1||!A(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(t.options.refetchIntervalInBackground||se.isFocused())&&t.executeFetch()},this.currentRefetchInterval))},r.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},r.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},r.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},r.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},r.createResult=function(e,t){var a=this.currentQuery,u=this.options,c=this.currentResult,o=this.currentResultState,l=this.currentResultOptions,d=e!==a,f=d?e.state:this.currentQueryInitialState,g=d?this.currentResult:this.previousQueryResult,h=e.state,O=h.dataUpdatedAt,T=h.error,N=h.errorUpdatedAt,_=h.isFetching,v=h.status,$=!1,U=!1,p;if(t.optimisticResults){var x=this.hasListeners(),X=!x&&H(e,t),Z=x&&W(e,a,t,u);(X||Z)&&(_=!0,O||(v="loading"))}if(t.keepPreviousData&&!h.dataUpdateCount&&(g!=null&&g.isSuccess)&&v!=="error")p=g.data,O=g.dataUpdatedAt,v=g.status,$=!0;else if(t.select&&typeof h.data<"u")if(c&&h.data===(o==null?void 0:o.data)&&t.select===this.selectFn)p=this.selectResult;else try{this.selectFn=t.select,p=t.select(h.data),t.structuralSharing!==!1&&(p=D(c==null?void 0:c.data,p)),this.selectResult=p,this.selectError=null}catch(E){L().error(E),this.selectError=E}else p=h.data;if(typeof t.placeholderData<"u"&&typeof p>"u"&&(v==="loading"||v==="idle")){var y;if(c!=null&&c.isPlaceholderData&&t.placeholderData===(l==null?void 0:l.placeholderData))y=c.data;else if(y=typeof t.placeholderData=="function"?t.placeholderData():t.placeholderData,t.select&&typeof y<"u")try{y=t.select(y),t.structuralSharing!==!1&&(y=D(c==null?void 0:c.data,y)),this.selectError=null}catch(E){L().error(E),this.selectError=E}typeof y<"u"&&(v="success",p=y,U=!0)}this.selectError&&(T=this.selectError,p=this.selectResult,N=Date.now(),v="error");var ee={status:v,isLoading:v==="loading",isSuccess:v==="success",isError:v==="error",isIdle:v==="idle",data:p,dataUpdatedAt:O,error:T,errorUpdatedAt:N,failureCount:h.fetchFailureCount,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>f.dataUpdateCount||h.errorUpdateCount>f.errorUpdateCount,isFetching:_,isRefetching:_&&v!=="loading",isLoadingError:v==="error"&&h.dataUpdatedAt===0,isPlaceholderData:U,isPreviousData:$,isRefetchError:v==="error"&&h.dataUpdatedAt!==0,isStale:M(e,t),refetch:this.refetch,remove:this.remove};return ee},r.shouldNotifyListeners=function(e,t){if(!t)return!0;var a=this.options,u=a.notifyOnChangeProps,c=a.notifyOnChangePropsExclusions;if(!u&&!c||u==="tracked"&&!this.trackedProps.length)return!0;var o=u==="tracked"?this.trackedProps:u;return Object.keys(e).some(function(l){var d=l,f=e[d]!==t[d],g=o==null?void 0:o.some(function(O){return O===l}),h=c==null?void 0:c.some(function(O){return O===l});return f&&!h&&(!o||g)})},r.updateResult=function(e){var t=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!ne(this.currentResult,t)){var a={cache:!0};(e==null?void 0:e.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,t)&&(a.listeners=!0),this.notify(Q({},a,e))}},r.updateQuery=function(){var e=this.client.getQueryCache().build(this.client,this.options);if(e!==this.currentQuery){var t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(t==null||t.removeObserver(this),e.addObserver(this))}},r.onQueryUpdate=function(e){var t={};e.type==="success"?t.onSuccess=!0:e.type==="error"&&!ie(e.error)&&(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()},r.notify=function(e){var t=this;P.batch(function(){e.onSuccess?(t.options.onSuccess==null||t.options.onSuccess(t.currentResult.data),t.options.onSettled==null||t.options.onSettled(t.currentResult.data,null)):e.onError&&(t.options.onError==null||t.options.onError(t.currentResult.error),t.options.onSettled==null||t.options.onSettled(void 0,t.currentResult.error)),e.listeners&&t.listeners.forEach(function(a){a(t.currentResult)}),e.cache&&t.client.getQueryCache().notify({query:t.currentQuery,type:"observerResultsUpdated"})})},s}(ue);function he(n,s){return s.enabled!==!1&&!n.state.dataUpdatedAt&&!(n.state.status==="error"&&s.retryOnMount===!1)}function H(n,s){return he(n,s)||n.state.dataUpdatedAt>0&&C(n,s,s.refetchOnMount)}function C(n,s,r){if(s.enabled!==!1){var i=typeof r=="function"?r(n):r;return i==="always"||i!==!1&&M(n,s)}return!1}function W(n,s,r,i){return r.enabled!==!1&&(n!==s||i.enabled===!1)&&(!r.suspense||n.state.status!=="error")&&M(n,r)}function M(n,s){return n.isStaleByTime(s.staleTime)}var fe=function(n){K(s,n);function s(i,e){return n.call(this,i,e)||this}var r=s.prototype;return r.bindMethods=function(){n.prototype.bindMethods.call(this),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)},r.setOptions=function(e,t){n.prototype.setOptions.call(this,Q({},e,{behavior:k()}),t)},r.getOptimisticResult=function(e){return e.behavior=k(),n.prototype.getOptimisticResult.call(this,e)},r.fetchNextPage=function(e){var t;return this.fetch({cancelRefetch:(t=e==null?void 0:e.cancelRefetch)!=null?t:!0,throwOnError:e==null?void 0:e.throwOnError,meta:{fetchMore:{direction:"forward",pageParam:e==null?void 0:e.pageParam}}})},r.fetchPreviousPage=function(e){var t;return this.fetch({cancelRefetch:(t=e==null?void 0:e.cancelRefetch)!=null?t:!0,throwOnError:e==null?void 0:e.throwOnError,meta:{fetchMore:{direction:"backward",pageParam:e==null?void 0:e.pageParam}}})},r.createResult=function(e,t){var a,u,c,o,l,d,f=e.state,g=n.prototype.createResult.call(this,e,t);return Q({},g,{fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:ae(t,(a=f.data)==null?void 0:a.pages),hasPreviousPage:oe(t,(u=f.data)==null?void 0:u.pages),isFetchingNextPage:f.isFetching&&((c=f.fetchMeta)==null||(o=c.fetchMore)==null?void 0:o.direction)==="forward",isFetchingPreviousPage:f.isFetching&&((l=f.fetchMeta)==null||(d=l.fetchMore)==null?void 0:d.direction)==="backward"})},s}(Y);function de(){var n=!1;return{clearReset:function(){n=!1},reset:function(){n=!0},isReset:function(){return n}}}var ve=S.createContext(de()),pe=function(){return S.useContext(ve)};function Re(n,s,r){return typeof s=="function"?s.apply(void 0,r):typeof s=="boolean"?s:!!n}function J(n,s){var r=S.useRef(!1),i=S.useState(0),e=i[1],t=ce(),a=pe(),u=t.defaultQueryObserverOptions(n);u.optimisticResults=!0,u.onError&&(u.onError=P.batchCalls(u.onError)),u.onSuccess&&(u.onSuccess=P.batchCalls(u.onSuccess)),u.onSettled&&(u.onSettled=P.batchCalls(u.onSettled)),u.suspense&&(typeof u.staleTime!="number"&&(u.staleTime=1e3),u.cacheTime===0&&(u.cacheTime=1)),(u.suspense||u.useErrorBoundary)&&(a.isReset()||(u.retryOnMount=!1));var c=S.useState(function(){return new s(t,u)}),o=c[0],l=o.getOptimisticResult(u);if(S.useEffect(function(){r.current=!0,a.clearReset();var d=o.subscribe(P.batchCalls(function(){r.current&&e(function(f){return f+1})}));return o.updateResult(),function(){r.current=!1,d()}},[a,o]),S.useEffect(function(){o.setOptions(u,{listeners:!1})},[u,o]),u.suspense&&l.isLoading)throw o.fetchOptimistic(u).then(function(d){var f=d.data;u.onSuccess==null||u.onSuccess(f),u.onSettled==null||u.onSettled(f,null)}).catch(function(d){a.clearReset(),u.onError==null||u.onError(d),u.onSettled==null||u.onSettled(void 0,d)});if(l.isError&&!a.isReset()&&!l.isFetching&&Re(u.suspense,u.useErrorBoundary,[l.error,o.getCurrentQuery()]))throw l.error;return u.notifyOnChangeProps==="tracked"&&(l=o.trackResult(l,u)),l}function I(n,s,r){var i=j(n,s,r);return J(i,Y)}function z(n,s,r){var i=j(n,s,r);return J(i,fe)}async function m(n="",s="GET",r=void 0){const i=new URL(V.ENV.TMDB_API_BASE_URL+n);return i.searchParams.set("api_key",V.ENV.TMDB_API_KEY),(await fetch(i,{method:s,body:JSON.stringify(r)})).json()}class ge{getCategoryMediaParams(s){let r="";const i={...s};return le.forEach(e=>{i[e]&&(r&&(r+=","),r+=i[e],delete i[e])}),r&&(i.sort_by=r),this.getQueryParams(i)}getQueryParams(s){return new URLSearchParams(Object.entries(s).filter(r=>r[1]!==null&&r[1]!==void 0&&r[1]!=="")).toString()}}const G=new ge;class ye{getMedia(s,r){return m(r?s+"?"+G.getCategoryMediaParams(r):s)}getMediaDetails(s,r){return m(`${s}${r}`)}getMediaSearchResults(s,r){return m(s+"?"+G.getQueryParams(r))}getMediaRecomendations(s,r){return m(`${s.replace(B,r.toString())}`)}getGenres(s){return m(s)}getVideos(s,r){return m(`${s.replace(B,r)}`)}}const b=new ye,F=1e3*60*60*24,me=(n,s)=>I([`${n}-${s}`,s],()=>b.getMedia(q[n][s]),{staleTime:F}),Se=(n,s,r,i=!0)=>z({queryKey:[`${n}-${s}`,n,s,r],queryFn:({pageParam:e=1})=>b.getMedia(q[n][s],{...r,page:e}),enabled:i,getNextPageParam:e=>e.page+1<=e.total_pages?e.page+1:null,keepPreviousData:!0,staleTime:F}),be=(n,s)=>I([`${n}-details-${s}`,s,n],()=>b.getMediaDetails(n==="movies"?R.DETAILS_OF_MOVIE:R.DETAILS_OF_SHOWS,s)),Ee=(n,s)=>I([`${n}-recomendations-${s}`,s,n],()=>b.getMediaRecomendations(n==="movies"?R.MOVIE_RECOMENDATIONS:R.SHOW_RECOMENDATIONS,s)),Pe=(n,s)=>z({queryKey:[`${n}-search`,n,s],queryFn:({pageParam:r=1})=>b.getMediaSearchResults(n==="movies"?R.SEARCH_MOVIE:R.SEARCH_SHOWS,{...s,page:r}),enabled:s.query.length>0,getNextPageParam:r=>r.page+1<=r.total_pages?r.page+1:null,keepPreviousData:!0,staleTime:F}),Ie=n=>{const s=n==="movies"?R.GENRES_OF_MOVIES:R.GENRES_OF_SHOWS,{data:r,error:i}=I([`${n}-genres`],()=>b.getGenres(s));return i?[]:(r==null?void 0:r.genres)||[]},Qe=(n,s)=>{const r=n==="movies"?R.VIDEOS_OF_MOVIE:R.VIDEOS_OF_SHOW;return I([`${n}-videos-${s}`],()=>b.getVideos(r,s))};export{Qe as a,Ee as b,Pe as c,Ie as d,Se as e,me as f,be as u};