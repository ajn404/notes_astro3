const Rt=["top","right","bottom","left"],gt=["start","end"],pt=Rt.reduce((t,e)=>t.concat(e,e+"-"+gt[0],e+"-"+gt[1]),[]),V=Math.min,T=Math.max,et=Math.round,tt=Math.floor,_=t=>({x:t,y:t}),kt={left:"right",right:"left",bottom:"top",top:"bottom"},Ft={start:"end",end:"start"};function ct(t,e,n){return T(t,V(e,n))}function $(t,e){return typeof t=="function"?t(e):t}function F(t){return t.split("-")[0]}function N(t){return t.split("-")[1]}function lt(t){return t==="x"?"y":"x"}function ft(t){return t==="y"?"height":"width"}function q(t){return["top","bottom"].includes(F(t))?"y":"x"}function at(t){return lt(q(t))}function Ot(t,e,n){n===void 0&&(n=!1);const o=N(t),i=at(t),s=ft(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=ot(r)),[r,ot(r)]}function Bt(t){const e=ot(t);return[nt(t),e,nt(e)]}function nt(t){return t.replace(/start|end/g,e=>Ft[e])}function Ht(t,e,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?s:r;default:return[]}}function Wt(t,e,n,o){const i=N(t);let s=Ht(F(t),n==="start",o);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(nt)))),s}function ot(t){return t.replace(/left|right|bottom|top/g,e=>kt[e])}function Nt(t){return{top:0,right:0,bottom:0,left:0,...t}}function ut(t){return typeof t!="number"?Nt(t):{top:t,right:t,bottom:t,left:t}}function K(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function wt(t,e,n){let{reference:o,floating:i}=t;const s=q(e),r=at(e),l=ft(r),c=F(e),f=s==="y",g=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,m=o[l]/2-i[l]/2;let a;switch(c){case"top":a={x:g,y:o.y-i.height};break;case"bottom":a={x:g,y:o.y+o.height};break;case"right":a={x:o.x+o.width,y:u};break;case"left":a={x:o.x-i.width,y:u};break;default:a={x:o.x,y:o.y}}switch(N(e)){case"start":a[r]-=m*(n&&f?-1:1);break;case"end":a[r]+=m*(n&&f?-1:1);break}return a}const Vt=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,l=s.filter(Boolean),c=await(r.isRTL==null?void 0:r.isRTL(e));let f=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:g,y:u}=wt(f,o,c),m=o,a={},d=0;for(let h=0;h<l.length;h++){const{name:w,fn:p}=l[h],{x,y,data:b,reset:v}=await p({x:g,y:u,initialPlacement:o,placement:m,strategy:i,middlewareData:a,rects:f,platform:r,elements:{reference:t,floating:e}});if(g=x??g,u=y??u,a={...a,[w]:{...a[w],...b}},v&&d<=50){d++,typeof v=="object"&&(v.placement&&(m=v.placement),v.rects&&(f=v.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:g,y:u}=wt(f,m,c)),h=-1;continue}}return{x:g,y:u,placement:m,strategy:i,middlewareData:a}};async function G(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:l,strategy:c}=t,{boundary:f="clippingAncestors",rootBoundary:g="viewport",elementContext:u="floating",altBoundary:m=!1,padding:a=0}=$(e,t),d=ut(a),w=l[m?u==="floating"?"reference":"floating":u],p=K(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(w)))==null||n?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:f,rootBoundary:g,strategy:c})),x=u==="floating"?{...r.floating,x:o,y:i}:r.reference,y=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),b=await(s.isElement==null?void 0:s.isElement(y))?await(s.getScale==null?void 0:s.getScale(y))||{x:1,y:1}:{x:1,y:1},v=K(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:x,offsetParent:y,strategy:c}):x);return{top:(p.top-v.top+d.top)/b.y,bottom:(v.bottom-p.bottom+d.bottom)/b.y,left:(p.left-v.left+d.left)/b.x,right:(v.right-p.right+d.right)/b.x}}const $t=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:s,platform:r,elements:l,middlewareData:c}=e,{element:f,padding:g=0}=$(t,e)||{};if(f==null)return{};const u=ut(g),m={x:n,y:o},a=at(i),d=ft(a),h=await r.getDimensions(f),w=a==="y",p=w?"top":"left",x=w?"bottom":"right",y=w?"clientHeight":"clientWidth",b=s.reference[d]+s.reference[a]-m[a]-s.floating[d],v=m[a]-s.reference[a],A=await(r.getOffsetParent==null?void 0:r.getOffsetParent(f));let O=A?A[y]:0;(!O||!await(r.isElement==null?void 0:r.isElement(A)))&&(O=l.floating[y]||s.floating[d]);const P=b/2-v/2,D=O/2-h[d]/2-1,R=V(u[p],D),S=V(u[x],D),C=R,H=O-h[d]-S,E=O/2-h[d]/2+P,L=ct(C,E,H),M=!c.arrow&&N(i)!=null&&E!=L&&s.reference[d]/2-(E<C?R:S)-h[d]/2<0,W=M?E<C?E-C:E-H:0;return{[a]:m[a]+W,data:{[a]:L,centerOffset:E-L-W,...M&&{alignmentOffset:W}},reset:M}}});function zt(t,e,n){return(t?[...n.filter(i=>N(i)===t),...n.filter(i=>N(i)!==t)]:n.filter(i=>F(i)===i)).filter(i=>t?N(i)===t||(e?nt(i)!==i:!1):!0)}const It=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:s,middlewareData:r,placement:l,platform:c,elements:f}=e,{crossAxis:g=!1,alignment:u,allowedPlacements:m=pt,autoAlignment:a=!0,...d}=$(t,e),h=u!==void 0||m===pt?zt(u||null,a,m):m,w=await G(e,d),p=((n=r.autoPlacement)==null?void 0:n.index)||0,x=h[p];if(x==null)return{};const y=Ot(x,s,await(c.isRTL==null?void 0:c.isRTL(f.floating)));if(l!==x)return{reset:{placement:h[0]}};const b=[w[F(x)],w[y[0]],w[y[1]]],v=[...((o=r.autoPlacement)==null?void 0:o.overflows)||[],{placement:x,overflows:b}],A=h[p+1];if(A)return{data:{index:p+1,overflows:v},reset:{placement:A}};const O=v.map(R=>{const S=N(R.placement);return[R.placement,S&&g?R.overflows.slice(0,2).reduce((C,H)=>C+H,0):R.overflows[0],R.overflows]}).sort((R,S)=>R[1]-S[1]),D=((i=O.filter(R=>R[2].slice(0,N(R[0])?2:3).every(S=>S<=0))[0])==null?void 0:i[0])||O[0][0];return D!==l?{data:{index:p+1,overflows:v},reset:{placement:D}}:{}}}},Yt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:s,rects:r,initialPlacement:l,platform:c,elements:f}=e,{mainAxis:g=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:a="bestFit",fallbackAxisSideDirection:d="none",flipAlignment:h=!0,...w}=$(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const p=F(i),x=F(l)===l,y=await(c.isRTL==null?void 0:c.isRTL(f.floating)),b=m||(x||!h?[ot(l)]:Bt(l));!m&&d!=="none"&&b.push(...Wt(l,h,d,y));const v=[l,...b],A=await G(e,w),O=[];let P=((o=s.flip)==null?void 0:o.overflows)||[];if(g&&O.push(A[p]),u){const C=Ot(i,r,y);O.push(A[C[0]],A[C[1]])}if(P=[...P,{placement:i,overflows:O}],!O.every(C=>C<=0)){var D,R;const C=(((D=s.flip)==null?void 0:D.index)||0)+1,H=v[C];if(H)return{data:{index:C,overflows:P},reset:{placement:H}};let E=(R=P.filter(L=>L.overflows[0]<=0).sort((L,M)=>L.overflows[1]-M.overflows[1])[0])==null?void 0:R.placement;if(!E)switch(a){case"bestFit":{var S;const L=(S=P.map(M=>[M.placement,M.overflows.filter(W=>W>0).reduce((W,rt)=>W+rt,0)]).sort((M,W)=>M[1]-W[1])[0])==null?void 0:S[0];L&&(E=L);break}case"initialPlacement":E=l;break}if(i!==E)return{reset:{placement:E}}}return{}}}};function xt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function yt(t){return Rt.some(e=>t[e]>=0)}const _t=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=$(t,e);switch(o){case"referenceHidden":{const s=await G(e,{...i,elementContext:"reference"}),r=xt(s,n.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:yt(r)}}}case"escaped":{const s=await G(e,{...i,altBoundary:!0}),r=xt(s,n.floating);return{data:{escapedOffsets:r,escaped:yt(r)}}}default:return{}}}}};function Ct(t){const e=V(...t.map(s=>s.left)),n=V(...t.map(s=>s.top)),o=T(...t.map(s=>s.right)),i=T(...t.map(s=>s.bottom));return{x:e,y:n,width:o-e,height:i-n}}function Xt(t){const e=t.slice().sort((i,s)=>i.y-s.y),n=[];let o=null;for(let i=0;i<e.length;i++){const s=e[i];!o||s.y-o.y>o.height/2?n.push([s]):n[n.length-1].push(s),o=s}return n.map(i=>K(Ct(i)))}const jt=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:n,elements:o,rects:i,platform:s,strategy:r}=e,{padding:l=2,x:c,y:f}=$(t,e),g=Array.from(await(s.getClientRects==null?void 0:s.getClientRects(o.reference))||[]),u=Xt(g),m=K(Ct(g)),a=ut(l);function d(){if(u.length===2&&u[0].left>u[1].right&&c!=null&&f!=null)return u.find(w=>c>w.left-a.left&&c<w.right+a.right&&f>w.top-a.top&&f<w.bottom+a.bottom)||m;if(u.length>=2){if(q(n)==="y"){const R=u[0],S=u[u.length-1],C=F(n)==="top",H=R.top,E=S.bottom,L=C?R.left:S.left,M=C?R.right:S.right,W=M-L,rt=E-H;return{top:H,bottom:E,left:L,right:M,width:W,height:rt,x:L,y:H}}const w=F(n)==="left",p=T(...u.map(R=>R.right)),x=V(...u.map(R=>R.left)),y=u.filter(R=>w?R.left===x:R.right===p),b=y[0].top,v=y[y.length-1].bottom,A=x,O=p,P=O-A,D=v-b;return{top:b,bottom:v,left:A,right:O,width:P,height:D,x:A,y:b}}return m}const h=await s.getElementRects({reference:{getBoundingClientRect:d},floating:o.floating,strategy:r});return i.reference.x!==h.reference.x||i.reference.y!==h.reference.y||i.reference.width!==h.reference.width||i.reference.height!==h.reference.height?{reset:{rects:h}}:{}}}};async function qt(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=F(n),l=N(n),c=q(n)==="y",f=["left","top"].includes(r)?-1:1,g=s&&c?-1:1,u=$(e,t);let{mainAxis:m,crossAxis:a,alignmentAxis:d}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&typeof d=="number"&&(a=l==="end"?d*-1:d),c?{x:a*g,y:m*f}:{x:m*f,y:a*g}}const he=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:s,placement:r,middlewareData:l}=e,c=await qt(e,t);return r===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+c.x,y:s+c.y,data:{...c,placement:r}}}}},Ut=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:l={fn:w=>{let{x:p,y:x}=w;return{x:p,y:x}}},...c}=$(t,e),f={x:n,y:o},g=await G(e,c),u=q(F(i)),m=lt(u);let a=f[m],d=f[u];if(s){const w=m==="y"?"top":"left",p=m==="y"?"bottom":"right",x=a+g[w],y=a-g[p];a=ct(x,a,y)}if(r){const w=u==="y"?"top":"left",p=u==="y"?"bottom":"right",x=d+g[w],y=d-g[p];d=ct(x,d,y)}const h=l.fn({...e,[m]:a,[u]:d});return{...h,data:{x:h.x-n,y:h.y-o}}}}},Kt=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:i,rects:s,middlewareData:r}=e,{offset:l=0,mainAxis:c=!0,crossAxis:f=!0}=$(t,e),g={x:n,y:o},u=q(i),m=lt(u);let a=g[m],d=g[u];const h=$(l,e),w=typeof h=="number"?{mainAxis:h,crossAxis:0}:{mainAxis:0,crossAxis:0,...h};if(c){const y=m==="y"?"height":"width",b=s.reference[m]-s.floating[y]+w.mainAxis,v=s.reference[m]+s.reference[y]-w.mainAxis;a<b?a=b:a>v&&(a=v)}if(f){var p,x;const y=m==="y"?"width":"height",b=["top","left"].includes(F(i)),v=s.reference[u]-s.floating[y]+(b&&((p=r.offset)==null?void 0:p[u])||0)+(b?0:w.crossAxis),A=s.reference[u]+s.reference[y]+(b?0:((x=r.offset)==null?void 0:x[u])||0)-(b?w.crossAxis:0);d<v?d=v:d>A&&(d=A)}return{[m]:a,[u]:d}}}},Gt=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:i,elements:s}=e,{apply:r=()=>{},...l}=$(t,e),c=await G(e,l),f=F(n),g=N(n),u=q(n)==="y",{width:m,height:a}=o.floating;let d,h;f==="top"||f==="bottom"?(d=f,h=g===(await(i.isRTL==null?void 0:i.isRTL(s.floating))?"start":"end")?"left":"right"):(h=f,d=g==="end"?"top":"bottom");const w=a-c[d],p=m-c[h],x=!e.middlewareData.shift;let y=w,b=p;if(u){const A=m-c.left-c.right;b=g||x?V(p,A):A}else{const A=a-c.top-c.bottom;y=g||x?V(w,A):A}if(x&&!g){const A=T(c.left,0),O=T(c.right,0),P=T(c.top,0),D=T(c.bottom,0);u?b=m-2*(A!==0||O!==0?A+O:T(c.left,c.right)):y=a-2*(P!==0||D!==0?P+D:T(c.top,c.bottom))}await r({...e,availableWidth:b,availableHeight:y});const v=await i.getDimensions(s.floating);return m!==v.width||a!==v.height?{reset:{rects:!0}}:{}}}};function X(t){return Et(t)?(t.nodeName||"").toLowerCase():"#document"}function k(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Y(t){var e;return(e=(Et(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Et(t){return t instanceof Node||t instanceof k(t).Node}function I(t){return t instanceof Element||t instanceof k(t).Element}function z(t){return t instanceof HTMLElement||t instanceof k(t).HTMLElement}function vt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof k(t).ShadowRoot}function Z(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=B(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Jt(t){return["table","td","th"].includes(X(t))}function dt(t){const e=mt(),n=B(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Qt(t){let e=J(t);for(;z(e)&&!it(e);){if(dt(e))return e;e=J(e)}return null}function mt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function it(t){return["html","body","#document"].includes(X(t))}function B(t){return k(t).getComputedStyle(t)}function st(t){return I(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function J(t){if(X(t)==="html")return t;const e=t.assignedSlot||t.parentNode||vt(t)&&t.host||Y(t);return vt(e)?e.host:e}function Tt(t){const e=J(t);return it(e)?t.ownerDocument?t.ownerDocument.body:t.body:z(e)&&Z(e)?e:Tt(e)}function Q(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Tt(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=k(i);return s?e.concat(r,r.visualViewport||[],Z(i)?i:[],r.frameElement&&n?Q(r.frameElement):[]):e.concat(i,Q(i,[],n))}function St(t){const e=B(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=z(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,l=et(n)!==s||et(o)!==r;return l&&(n=s,o=r),{width:n,height:o,$:l}}function ht(t){return I(t)?t:t.contextElement}function U(t){const e=ht(t);if(!z(e))return _(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=St(e);let r=(s?et(n.width):n.width)/o,l=(s?et(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const Zt=_(0);function Lt(t){const e=k(t);return!mt()||!e.visualViewport?Zt:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function te(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==k(t)?!1:e}function j(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=ht(t);let r=_(1);e&&(o?I(o)&&(r=U(o)):r=U(t));const l=te(s,n,o)?Lt(s):_(0);let c=(i.left+l.x)/r.x,f=(i.top+l.y)/r.y,g=i.width/r.x,u=i.height/r.y;if(s){const m=k(s),a=o&&I(o)?k(o):o;let d=m.frameElement;for(;d&&o&&a!==m;){const h=U(d),w=d.getBoundingClientRect(),p=B(d),x=w.left+(d.clientLeft+parseFloat(p.paddingLeft))*h.x,y=w.top+(d.clientTop+parseFloat(p.paddingTop))*h.y;c*=h.x,f*=h.y,g*=h.x,u*=h.y,c+=x,f+=y,d=k(d).frameElement}}return K({width:g,height:u,x:c,y:f})}function ee(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=z(n),s=Y(n);if(n===s)return e;let r={scrollLeft:0,scrollTop:0},l=_(1);const c=_(0);if((i||!i&&o!=="fixed")&&((X(n)!=="body"||Z(s))&&(r=st(n)),z(n))){const f=j(n);l=U(n),c.x=f.x+n.clientLeft,c.y=f.y+n.clientTop}return{width:e.width*l.x,height:e.height*l.y,x:e.x*l.x-r.scrollLeft*l.x+c.x,y:e.y*l.y-r.scrollTop*l.y+c.y}}function ne(t){return Array.from(t.getClientRects())}function Pt(t){return j(Y(t)).left+st(t).scrollLeft}function oe(t){const e=Y(t),n=st(t),o=t.ownerDocument.body,i=T(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=T(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+Pt(t);const l=-n.scrollTop;return B(o).direction==="rtl"&&(r+=T(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:l}}function ie(t,e){const n=k(t),o=Y(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,l=0,c=0;if(i){s=i.width,r=i.height;const f=mt();(!f||f&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:s,height:r,x:l,y:c}}function se(t,e){const n=j(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=z(t)?U(t):_(1),r=t.clientWidth*s.x,l=t.clientHeight*s.y,c=i*s.x,f=o*s.y;return{width:r,height:l,x:c,y:f}}function bt(t,e,n){let o;if(e==="viewport")o=ie(t,n);else if(e==="document")o=oe(Y(t));else if(I(e))o=se(e,n);else{const i=Lt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return K(o)}function Dt(t,e){const n=J(t);return n===e||!I(n)||it(n)?!1:B(n).position==="fixed"||Dt(n,e)}function re(t,e){const n=e.get(t);if(n)return n;let o=Q(t,[],!1).filter(l=>I(l)&&X(l)!=="body"),i=null;const s=B(t).position==="fixed";let r=s?J(t):t;for(;I(r)&&!it(r);){const l=B(r),c=dt(r);!c&&l.position==="fixed"&&(i=null),(s?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Z(r)&&!c&&Dt(t,r))?o=o.filter(g=>g!==r):i=l,r=J(r)}return e.set(t,o),o}function ce(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?re(e,this._c):[].concat(n),o],l=r[0],c=r.reduce((f,g)=>{const u=bt(e,g,i);return f.top=T(u.top,f.top),f.right=V(u.right,f.right),f.bottom=V(u.bottom,f.bottom),f.left=T(u.left,f.left),f},bt(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function le(t){const{width:e,height:n}=St(t);return{width:e,height:n}}function fe(t,e,n){const o=z(e),i=Y(e),s=n==="fixed",r=j(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const c=_(0);if(o||!o&&!s)if((X(e)!=="body"||Z(i))&&(l=st(e)),o){const f=j(e,!0,s,e);c.x=f.x+e.clientLeft,c.y=f.y+e.clientTop}else i&&(c.x=Pt(i));return{x:r.left+l.scrollLeft-c.x,y:r.top+l.scrollTop-c.y,width:r.width,height:r.height}}function At(t,e){return!z(t)||B(t).position==="fixed"?null:e?e(t):t.offsetParent}function Mt(t,e){const n=k(t);if(!z(t))return n;let o=At(t,e);for(;o&&Jt(o)&&B(o).position==="static";)o=At(o,e);return o&&(X(o)==="html"||X(o)==="body"&&B(o).position==="static"&&!dt(o))?n:o||Qt(t)||n}const ae=async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||Mt,s=this.getDimensions;return{reference:fe(e,await i(n),o),floating:{x:0,y:0,...await s(n)}}};function ue(t){return B(t).direction==="rtl"}const de={convertOffsetParentRelativeRectToViewportRelativeRect:ee,getDocumentElement:Y,getClippingRect:ce,getOffsetParent:Mt,getElementRects:ae,getClientRects:ne,getDimensions:le,getScale:U,isElement:I,isRTL:ue};function me(t,e){let n=null,o;const i=Y(t);function s(){clearTimeout(o),n&&n.disconnect(),n=null}function r(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const{left:f,top:g,width:u,height:m}=t.getBoundingClientRect();if(l||e(),!u||!m)return;const a=tt(g),d=tt(i.clientWidth-(f+u)),h=tt(i.clientHeight-(g+m)),w=tt(f),x={rootMargin:-a+"px "+-d+"px "+-h+"px "+-w+"px",threshold:T(0,V(1,c))||1};let y=!0;function b(v){const A=v[0].intersectionRatio;if(A!==c){if(!y)return r();A?r(!1,A):o=setTimeout(()=>{r(!1,1e-7)},100)}y=!1}try{n=new IntersectionObserver(b,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,x)}n.observe(t)}return r(!0),s}function ge(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,f=ht(t),g=i||s?[...f?Q(f):[],...Q(e)]:[];g.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),s&&p.addEventListener("resize",n)});const u=f&&l?me(f,n):null;let m=-1,a=null;r&&(a=new ResizeObserver(p=>{let[x]=p;x&&x.target===f&&a&&(a.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{a&&a.observe(e)})),n()}),f&&!c&&a.observe(f),a.observe(e));let d,h=c?j(t):null;c&&w();function w(){const p=j(t);h&&(p.x!==h.x||p.y!==h.y||p.width!==h.width||p.height!==h.height)&&n(),h=p,d=requestAnimationFrame(w)}return n(),()=>{g.forEach(p=>{i&&p.removeEventListener("scroll",n),s&&p.removeEventListener("resize",n)}),u&&u(),a&&a.disconnect(),a=null,c&&cancelAnimationFrame(d)}}const pe=It,we=Ut,xe=Yt,ye=Gt,ve=_t,be=$t,Ae=jt,Re=Kt,Oe=(t,e,n)=>{const o=new Map,i={platform:de,...n},s={...i.platform,_c:o};return Vt(t,e,{...i,platform:s})};export{be as a,ge as b,Oe as c,ye as d,pe as e,xe as f,G as g,ve as h,Ae as i,Re as l,he as o,we as s};