import{j as S}from"./jsx-runtime.bkUup59_.js";import{r as W}from"./index.yqZja8WZ.js";import"./_commonjsHelpers.4gQjN7DL.js";const P="http://www.w3.org/2000/svg";class q{constructor(t){this.seed=t}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function M(e,t,s,n,i){return{type:"path",ops:R(e,t,s,n,i)}}function j(e,t,s){const n=(e||[]).length;if(n>2){const i=[];for(let a=0;a<n-1;a++)i.push(...R(e[a][0],e[a][1],e[a+1][0],e[a+1][1],s));return t&&i.push(...R(e[n-1][0],e[n-1][1],e[0][0],e[0][1],s)),{type:"path",ops:i}}return n===2?M(e[0][0],e[0][1],e[1][0],e[1][1],s):{type:"path",ops:[]}}function I(e,t,s,n,i){return function(a,c){return j(a,!0,c)}([[e,t],[e+s,t],[e+s,t+n],[e,t+n]],i)}function D(e,t,s,n,i){return function(a,c,o,r){const[w,d]=A(r.increment,a,c,r.rx,r.ry,1,r.increment*O(.1,O(.4,1,o),o),o);let _=T(w,null,o);if(!o.disableMultiStroke){const[g]=A(r.increment,a,c,r.rx,r.ry,1.5,0,o),l=T(g,null,o);_=_.concat(l)}return{estimatedPoints:d,opset:{type:"path",ops:_}}}(e,t,i,function(a,c,o){const r=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(a/2,2)+Math.pow(c/2,2))/2)),w=Math.max(o.curveStepCount,o.curveStepCount/Math.sqrt(200)*r),d=2*Math.PI/w;let _=Math.abs(a/2),g=Math.abs(c/2);const l=1-o.curveFitting;return _+=v(_*l,o),g+=v(g*l,o),{increment:d,rx:_,ry:g}}(s,n,i)).opset}function N(e){return e.randomizer||(e.randomizer=new q(e.seed||0)),e.randomizer.next()}function O(e,t,s,n=1){return s.roughness*n*(N(s)*(t-e)+e)}function v(e,t,s=1){return O(-e,e,t,s)}function R(e,t,s,n,i,a=!1){const c=a?i.disableMultiStrokeFill:i.disableMultiStroke,o=$(e,t,s,n,i,!0,!1);if(c)return o;const r=$(e,t,s,n,i,!0,!0);return o.concat(r)}function $(e,t,s,n,i,a,c){const o=Math.pow(e-s,2)+Math.pow(t-n,2),r=Math.sqrt(o);let w=1;w=r<200?1:r>500?.4:-.0016668*r+1.233334;let d=i.maxRandomnessOffset||0;d*d*100>o&&(d=r/10);const _=d/2,g=.2+.2*N(i);let l=i.bowing*i.maxRandomnessOffset*(n-t)/200,h=i.bowing*i.maxRandomnessOffset*(e-s)/200;l=v(l,i,w),h=v(h,i,w);const u=[],p=()=>v(_,i,w),f=()=>v(d,i,w);return a&&(c?u.push({op:"move",data:[e+p(),t+p()]}):u.push({op:"move",data:[e+v(d,i,w),t+v(d,i,w)]})),c?u.push({op:"bcurveTo",data:[l+e+(s-e)*g+p(),h+t+(n-t)*g+p(),l+e+2*(s-e)*g+p(),h+t+2*(n-t)*g+p(),s+p(),n+p()]}):u.push({op:"bcurveTo",data:[l+e+(s-e)*g+f(),h+t+(n-t)*g+f(),l+e+2*(s-e)*g+f(),h+t+2*(n-t)*g+f(),s+f(),n+f()]}),u}function T(e,t,s){const n=e.length,i=[];if(n>3){const a=[],c=1-s.curveTightness;i.push({op:"move",data:[e[1][0],e[1][1]]});for(let o=1;o+2<n;o++){const r=e[o];a[0]=[r[0],r[1]],a[1]=[r[0]+(c*e[o+1][0]-c*e[o-1][0])/6,r[1]+(c*e[o+1][1]-c*e[o-1][1])/6],a[2]=[e[o+1][0]+(c*e[o][0]-c*e[o+2][0])/6,e[o+1][1]+(c*e[o][1]-c*e[o+2][1])/6],a[3]=[e[o+1][0],e[o+1][1]],i.push({op:"bcurveTo",data:[a[1][0],a[1][1],a[2][0],a[2][1],a[3][0],a[3][1]]})}if(t&&t.length===2){const o=s.maxRandomnessOffset;i.push({op:"lineTo",data:[t[0]+v(o,s),t[1]+v(o,s)]})}}else n===3?(i.push({op:"move",data:[e[1][0],e[1][1]]}),i.push({op:"bcurveTo",data:[e[1][0],e[1][1],e[2][0],e[2][1],e[2][0],e[2][1]]})):n===2&&i.push(...R(e[0][0],e[0][1],e[1][0],e[1][1],s));return i}function A(e,t,s,n,i,a,c,o){const r=[],w=[],d=v(.5,o)-Math.PI/2;w.push([v(a,o)+t+.9*n*Math.cos(d-e),v(a,o)+s+.9*i*Math.sin(d-e)]);for(let _=d;_<2*Math.PI+d-.01;_+=e){const g=[v(a,o)+t+n*Math.cos(_),v(a,o)+s+i*Math.sin(_)];r.push(g),w.push(g)}return w.push([v(a,o)+t+n*Math.cos(d+2*Math.PI+.5*c),v(a,o)+s+i*Math.sin(d+2*Math.PI+.5*c)]),w.push([v(a,o)+t+.98*n*Math.cos(d+c),v(a,o)+s+.98*i*Math.sin(d+c)]),w.push([v(a,o)+t+.9*n*Math.cos(d+.5*c),v(a,o)+s+.9*i*Math.sin(d+.5*c)]),[w,r]}function E(e,t){return{maxRandomnessOffset:2,roughness:e==="highlight"?3:1.5,bowing:1,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,combineNestedSvgPaths:!1,disableMultiStroke:e!=="double",disableMultiStrokeFill:!1,seed:t}}function F(e,t,s,n,i,a){const c=[];let o=s.strokeWidth||2;const r=function(l){const h=l.padding;if(h||h===0){if(typeof h=="number")return[h,h,h,h];if(Array.isArray(h)){const u=h;if(u.length)switch(u.length){case 4:return[...u];case 1:return[u[0],u[0],u[0],u[0]];case 2:return[...u,...u];case 3:return[...u,u[1]];default:return[u[0],u[1],u[2],u[3]]}}}return[5,5,5,5]}(s),w=s.animate===void 0||!!s.animate,d=s.iterations||2,_=s.rtl?1:0,g=E("single",a);switch(s.type){case"underline":{const l=t.y+t.h+r[2];for(let h=_;h<d+_;h++)h%2?c.push(M(t.x+t.w,l,t.x,l,g)):c.push(M(t.x,l,t.x+t.w,l,g));break}case"strike-through":{const l=t.y+t.h/2;for(let h=_;h<d+_;h++)h%2?c.push(M(t.x+t.w,l,t.x,l,g)):c.push(M(t.x,l,t.x+t.w,l,g));break}case"box":{const l=t.x-r[3],h=t.y-r[0],u=t.w+(r[1]+r[3]),p=t.h+(r[0]+r[2]);for(let f=0;f<d;f++)c.push(I(l,h,u,p,g));break}case"bracket":{const l=Array.isArray(s.brackets)?s.brackets:s.brackets?[s.brackets]:["right"],h=t.x-2*r[3],u=t.x+t.w+2*r[1],p=t.y-2*r[0],f=t.y+t.h+2*r[2];for(const b of l){let m;switch(b){case"bottom":m=[[h,t.y+t.h],[h,f],[u,f],[u,t.y+t.h]];break;case"top":m=[[h,t.y],[h,p],[u,p],[u,t.y]];break;case"left":m=[[t.x,p],[h,p],[h,f],[t.x,f]];break;case"right":m=[[t.x+t.w,p],[u,p],[u,f],[t.x+t.w,f]]}m&&c.push(j(m,!1,g))}break}case"crossed-off":{const l=t.x,h=t.y,u=l+t.w,p=h+t.h;for(let f=_;f<d+_;f++)f%2?c.push(M(u,p,l,h,g)):c.push(M(l,h,u,p,g));for(let f=_;f<d+_;f++)f%2?c.push(M(l,p,u,h,g)):c.push(M(u,h,l,p,g));break}case"circle":{const l=E("double",a),h=t.w+(r[1]+r[3]),u=t.h+(r[0]+r[2]),p=t.x-r[3]+h/2,f=t.y-r[0]+u/2,b=Math.floor(d/2),m=d-2*b;for(let x=0;x<b;x++)c.push(D(p,f,h,u,l));for(let x=0;x<m;x++)c.push(D(p,f,h,u,g));break}case"highlight":{const l=E("highlight",a);o=.95*t.h;const h=t.y+t.h/2;for(let u=_;u<d+_;u++)u%2?c.push(M(t.x+t.w,h,t.x,h,l)):c.push(M(t.x,h,t.x+t.w,h,l));break}}if(c.length){const l=function(b){const m=[];for(const x of b){let k="";for(const z of x.ops){const y=z.data;switch(z.op){case"move":k.trim()&&m.push(k.trim()),k=`M${y[0]} ${y[1]} `;break;case"bcurveTo":k+=`C${y[0]} ${y[1]}, ${y[2]} ${y[3]}, ${y[4]} ${y[5]} `;break;case"lineTo":k+=`L${y[0]} ${y[1]} `}}k.trim()&&m.push(k.trim())}return m}(c),h=[],u=[];let p=0;const f=(b,m,x)=>b.setAttribute(m,x);for(const b of l){const m=document.createElementNS(P,"path");if(f(m,"d",b),f(m,"fill","none"),f(m,"stroke",s.color||"currentColor"),f(m,"stroke-width",""+o),w){const x=m.getTotalLength();h.push(x),p+=x}e.appendChild(m),u.push(m)}if(w){let b=0;for(let m=0;m<u.length;m++){const x=u[m],k=h[m],z=p?i*(k/p):0,y=n+b,C=x.style;C.strokeDashoffset=""+k,C.strokeDasharray=""+k,C.animation=`rough-notation-dash ${z}ms ease-out ${y}ms forwards`,b+=z}}}}class J{constructor(t,s){this._state="unattached",this._resizing=!1,this._seed=Math.floor(Math.random()*2**31),this._lastSizes=[],this._animationDelay=0,this._resizeListener=()=>{this._resizing||(this._resizing=!0,setTimeout(()=>{this._resizing=!1,this._state==="showing"&&this.haveRectsChanged()&&this.show()},400))},this._e=t,this._config=JSON.parse(JSON.stringify(s)),this.attach()}get animate(){return this._config.animate}set animate(t){this._config.animate=t}get animationDuration(){return this._config.animationDuration}set animationDuration(t){this._config.animationDuration=t}get iterations(){return this._config.iterations}set iterations(t){this._config.iterations=t}get color(){return this._config.color}set color(t){this._config.color!==t&&(this._config.color=t,this.refresh())}get strokeWidth(){return this._config.strokeWidth}set strokeWidth(t){this._config.strokeWidth!==t&&(this._config.strokeWidth=t,this.refresh())}get padding(){return this._config.padding}set padding(t){this._config.padding!==t&&(this._config.padding=t,this.refresh())}attach(){if(this._state==="unattached"&&this._e.parentElement){(function(){if(!window.__rno_kf_s){const i=window.__rno_kf_s=document.createElement("style");i.textContent="@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }",document.head.appendChild(i)}})();const t=this._svg=document.createElementNS(P,"svg");t.setAttribute("class","rough-annotation");const s=t.style;s.position="absolute",s.top="0",s.left="0",s.overflow="visible",s.pointerEvents="none",s.width="100px",s.height="100px";const n=this._config.type==="highlight";if(this._e.insertAdjacentElement(n?"beforebegin":"afterend",t),this._state="not-showing",n){const i=window.getComputedStyle(this._e).position;(!i||i==="static")&&(this._e.style.position="relative")}this.attachListeners()}}detachListeners(){window.removeEventListener("resize",this._resizeListener),this._ro&&this._ro.unobserve(this._e)}attachListeners(){this.detachListeners(),window.addEventListener("resize",this._resizeListener,{passive:!0}),!this._ro&&"ResizeObserver"in window&&(this._ro=new window.ResizeObserver(t=>{for(const s of t)s.contentRect&&this._resizeListener()})),this._ro&&this._ro.observe(this._e)}haveRectsChanged(){if(this._lastSizes.length){const t=this.rects();if(t.length!==this._lastSizes.length)return!0;for(let s=0;s<t.length;s++)if(!this.isSameRect(t[s],this._lastSizes[s]))return!0}return!1}isSameRect(t,s){const n=(i,a)=>Math.round(i)===Math.round(a);return n(t.x,s.x)&&n(t.y,s.y)&&n(t.w,s.w)&&n(t.h,s.h)}isShowing(){return this._state!=="not-showing"}refresh(){this.isShowing()&&!this.pendingRefresh&&(this.pendingRefresh=Promise.resolve().then(()=>{this.isShowing()&&this.show(),delete this.pendingRefresh}))}show(){switch(this._state){case"unattached":break;case"showing":this.hide(),this._svg&&this.render(this._svg,!0);break;case"not-showing":this.attach(),this._svg&&this.render(this._svg,!1)}}hide(){if(this._svg)for(;this._svg.lastChild;)this._svg.removeChild(this._svg.lastChild);this._state="not-showing"}remove(){this._svg&&this._svg.parentElement&&this._svg.parentElement.removeChild(this._svg),this._svg=void 0,this._state="unattached",this.detachListeners()}render(t,s){let n=this._config;s&&(n=JSON.parse(JSON.stringify(this._config)),n.animate=!1);const i=this.rects();let a=0;i.forEach(r=>a+=r.w);const c=n.animationDuration||800;let o=0;for(let r=0;r<i.length;r++){const w=c*(i[r].w/a);F(t,i[r],n,o+this._animationDelay,w,this._seed),o+=w}this._lastSizes=i,this._state="showing"}rects(){const t=[];if(this._svg)if(this._config.multiline){const s=this._e.getClientRects();for(let n=0;n<s.length;n++)t.push(this.svgRect(this._svg,s[n]))}else t.push(this.svgRect(this._svg,this._e.getBoundingClientRect()));return t}svgRect(t,s){const n=t.getBoundingClientRect(),i=s;return{x:(i.x||i.left)-(n.x||n.left),y:(i.y||i.top)-(n.y||n.top),w:i.width,h:i.height}}}function L(e,t){return new J(e,t)}function B(e){let t=0;for(const n of e){const i=n;i._animationDelay=t,t+=i.animationDuration===0?0:i.animationDuration||800}const s=[...e];return{show(){for(const n of s)n.show()},hide(){for(const n of s)n.hide()}}}const Q=()=>(W.useEffect(()=>{const e=L(document.querySelector("#e1"),{type:"underline"}),t=L(document.querySelector("#e2"),{type:"box"}),s=L(document.querySelector("#e3"),{type:"circle"});B([s,e,t]).show()}),S.jsx(S.Fragment,{children:S.jsxs("div",{className:"flex text-skin-base gap-8 ",children:[S.jsx("span",{id:"e1",children:"e1"}),S.jsx("span",{id:"e2",children:"e2"}),S.jsx("span",{id:"e3",children:"e3"})]})}));export{Q as default};