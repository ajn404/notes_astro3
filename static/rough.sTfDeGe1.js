import{j as F}from"./jsx-runtime.bkUup59_.js";import{r as ut}from"./index.yqZja8WZ.js";import"./_commonjsHelpers.4gQjN7DL.js";function Y(a,t,s){if(a&&a.length){const[e,n]=t,o=Math.PI/180*s,h=Math.cos(o),r=Math.sin(o);for(const i of a){const[l,c]=i;i[0]=(l-e)*h-(c-n)*r+e,i[1]=(l-e)*r+(c-n)*h+n}}}function Tt(a,t){return a[0]===t[0]&&a[1]===t[1]}function Dt(a,t,s,e=1){const n=s,o=Math.max(t,.1),h=a[0]&&a[0][0]&&typeof a[0][0]=="number"?[a]:a,r=[0,0];if(n)for(const l of h)Y(l,r,n);const i=function(l,c,d){const p=[];for(const M of l){const y=[...M];Tt(y[0],y[y.length-1])||y.push([y[0][0],y[0][1]]),y.length>2&&p.push(y)}const u=[];c=Math.max(c,.1);const f=[];for(const M of p)for(let y=0;y<M.length-1;y++){const P=M[y],w=M[y+1];if(P[1]!==w[1]){const x=Math.min(P[1],w[1]);f.push({ymin:x,ymax:Math.max(P[1],w[1]),x:x===P[1]?P[0]:w[0],islope:(w[0]-P[0])/(w[1]-P[1])})}}if(f.sort((M,y)=>M.ymin<y.ymin?-1:M.ymin>y.ymin?1:M.x<y.x?-1:M.x>y.x?1:M.ymax===y.ymax?0:(M.ymax-y.ymax)/Math.abs(M.ymax-y.ymax)),!f.length)return u;let g=[],k=f[0].ymin,b=0;for(;g.length||f.length;){if(f.length){let M=-1;for(let y=0;y<f.length&&!(f[y].ymin>k);y++)M=y;f.splice(0,M+1).forEach(y=>{g.push({s:k,edge:y})})}if(g=g.filter(M=>!(M.edge.ymax<=k)),g.sort((M,y)=>M.edge.x===y.edge.x?0:(M.edge.x-y.edge.x)/Math.abs(M.edge.x-y.edge.x)),(d!==1||b%c==0)&&g.length>1)for(let M=0;M<g.length;M+=2){const y=M+1;if(y>=g.length)break;const P=g[M].edge,w=g[y].edge;u.push([[Math.round(P.x),k],[Math.round(w.x),k]])}k+=d,g.forEach(M=>{M.edge.x=M.edge.x+d*M.edge.islope}),b++}return u}(h,o,e);if(n){for(const l of h)Y(l,r,-n);(function(l,c,d){const p=[];l.forEach(u=>p.push(...u)),Y(p,c,d)})(i,r,-n)}return i}function $(a,t){var s;const e=t.hachureAngle+90;let n=t.hachureGap;n<0&&(n=4*t.strokeWidth),n=Math.round(Math.max(n,.1));let o=1;return t.roughness>=1&&(((s=t.randomizer)===null||s===void 0?void 0:s.next())||Math.random())>.7&&(o=n),Dt(a,n,e,o||1)}class ht{constructor(t){this.helper=t}fillPolygons(t,s){return this._fillPolygons(t,s)}_fillPolygons(t,s){const e=$(t,s);return{type:"fillSketch",ops:this.renderLines(e,s)}}renderLines(t,s){const e=[];for(const n of t)e.push(...this.helper.doubleLineOps(n[0][0],n[0][1],n[1][0],n[1][1],s));return e}}function X(a){const t=a[0],s=a[1];return Math.sqrt(Math.pow(t[0]-s[0],2)+Math.pow(t[1]-s[1],2))}class At extends ht{fillPolygons(t,s){let e=s.hachureGap;e<0&&(e=4*s.strokeWidth),e=Math.max(e,.1);const n=$(t,Object.assign({},s,{hachureGap:e})),o=Math.PI/180*s.hachureAngle,h=[],r=.5*e*Math.cos(o),i=.5*e*Math.sin(o);for(const[l,c]of n)X([l,c])&&h.push([[l[0]-r,l[1]+i],[...c]],[[l[0]+r,l[1]-i],[...c]]);return{type:"fillSketch",ops:this.renderLines(h,s)}}}class Ct extends ht{fillPolygons(t,s){const e=this._fillPolygons(t,s),n=Object.assign({},s,{hachureAngle:s.hachureAngle+90}),o=this._fillPolygons(t,n);return e.ops=e.ops.concat(o.ops),e}}class _t{constructor(t){this.helper=t}fillPolygons(t,s){const e=$(t,s=Object.assign({},s,{hachureAngle:0}));return this.dotsOnLines(e,s)}dotsOnLines(t,s){const e=[];let n=s.hachureGap;n<0&&(n=4*s.strokeWidth),n=Math.max(n,.1);let o=s.fillWeight;o<0&&(o=s.strokeWidth/2);const h=n/4;for(const r of t){const i=X(r),l=i/n,c=Math.ceil(l)-1,d=i-c*n,p=(r[0][0]+r[1][0])/2-n/4,u=Math.min(r[0][1],r[1][1]);for(let f=0;f<c;f++){const g=u+d+f*n,k=p-h+2*Math.random()*h,b=g-h+2*Math.random()*h,M=this.helper.ellipse(k,b,o,o,s);e.push(...M.ops)}}return{type:"fillSketch",ops:e}}}class It{constructor(t){this.helper=t}fillPolygons(t,s){const e=$(t,s);return{type:"fillSketch",ops:this.dashedLine(e,s)}}dashedLine(t,s){const e=s.dashOffset<0?s.hachureGap<0?4*s.strokeWidth:s.hachureGap:s.dashOffset,n=s.dashGap<0?s.hachureGap<0?4*s.strokeWidth:s.hachureGap:s.dashGap,o=[];return t.forEach(h=>{const r=X(h),i=Math.floor(r/(e+n)),l=(r+n-i*(e+n))/2;let c=h[0],d=h[1];c[0]>d[0]&&(c=h[1],d=h[0]);const p=Math.atan((d[1]-c[1])/(d[0]-c[0]));for(let u=0;u<i;u++){const f=u*(e+n),g=f+e,k=[c[0]+f*Math.cos(p)+l*Math.cos(p),c[1]+f*Math.sin(p)+l*Math.sin(p)],b=[c[0]+g*Math.cos(p)+l*Math.cos(p),c[1]+g*Math.sin(p)+l*Math.sin(p)];o.push(...this.helper.doubleLineOps(k[0],k[1],b[0],b[1],s))}}),o}}class zt{constructor(t){this.helper=t}fillPolygons(t,s){const e=s.hachureGap<0?4*s.strokeWidth:s.hachureGap,n=s.zigzagOffset<0?e:s.zigzagOffset,o=$(t,s=Object.assign({},s,{hachureGap:e+n}));return{type:"fillSketch",ops:this.zigzagLines(o,n,s)}}zigzagLines(t,s,e){const n=[];return t.forEach(o=>{const h=X(o),r=Math.round(h/(2*s));let i=o[0],l=o[1];i[0]>l[0]&&(i=o[1],l=o[0]);const c=Math.atan((l[1]-i[1])/(l[0]-i[0]));for(let d=0;d<r;d++){const p=2*d*s,u=2*(d+1)*s,f=Math.sqrt(2*Math.pow(s,2)),g=[i[0]+p*Math.cos(c),i[1]+p*Math.sin(c)],k=[i[0]+u*Math.cos(c),i[1]+u*Math.sin(c)],b=[g[0]+f*Math.cos(c+Math.PI/4),g[1]+f*Math.sin(c+Math.PI/4)];n.push(...this.helper.doubleLineOps(g[0],g[1],b[0],b[1],e),...this.helper.doubleLineOps(b[0],b[1],k[0],k[1],e))}}),n}}const S={};class Wt{constructor(t){this.seed=t}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}const Et=0,tt=1,pt=2,V={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0};function et(a,t){return a.type===t}function it(a){const t=[],s=function(h){const r=new Array;for(;h!=="";)if(h.match(/^([ \t\r\n,]+)/))h=h.substr(RegExp.$1.length);else if(h.match(/^([aAcChHlLmMqQsStTvVzZ])/))r[r.length]={type:Et,text:RegExp.$1},h=h.substr(RegExp.$1.length);else{if(!h.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))return[];r[r.length]={type:tt,text:`${parseFloat(RegExp.$1)}`},h=h.substr(RegExp.$1.length)}return r[r.length]={type:pt,text:""},r}(a);let e="BOD",n=0,o=s[n];for(;!et(o,pt);){let h=0;const r=[];if(e==="BOD"){if(o.text!=="M"&&o.text!=="m")return it("M0,0"+a);n++,h=V[o.text],e=o.text}else et(o,tt)?h=V[e]:(n++,h=V[o.text],e=o.text);if(!(n+h<s.length))throw new Error("Path data ended short");for(let i=n;i<n+h;i++){const l=s[i];if(!et(l,tt))throw new Error("Param not a number: "+e+","+l.text);r[r.length]=+l.text}if(typeof V[e]!="number")throw new Error("Bad segment: "+e);{const i={key:e,data:r};t.push(i),n+=h,o=s[n],e==="M"&&(e="L"),e==="m"&&(e="l")}}return t}function yt(a){let t=0,s=0,e=0,n=0;const o=[];for(const{key:h,data:r}of a)switch(h){case"M":o.push({key:"M",data:[...r]}),[t,s]=r,[e,n]=r;break;case"m":t+=r[0],s+=r[1],o.push({key:"M",data:[t,s]}),e=t,n=s;break;case"L":o.push({key:"L",data:[...r]}),[t,s]=r;break;case"l":t+=r[0],s+=r[1],o.push({key:"L",data:[t,s]});break;case"C":o.push({key:"C",data:[...r]}),t=r[4],s=r[5];break;case"c":{const i=r.map((l,c)=>c%2?l+s:l+t);o.push({key:"C",data:i}),t=i[4],s=i[5];break}case"Q":o.push({key:"Q",data:[...r]}),t=r[2],s=r[3];break;case"q":{const i=r.map((l,c)=>c%2?l+s:l+t);o.push({key:"Q",data:i}),t=i[2],s=i[3];break}case"A":o.push({key:"A",data:[...r]}),t=r[5],s=r[6];break;case"a":t+=r[5],s+=r[6],o.push({key:"A",data:[r[0],r[1],r[2],r[3],r[4],t,s]});break;case"H":o.push({key:"H",data:[...r]}),t=r[0];break;case"h":t+=r[0],o.push({key:"H",data:[t]});break;case"V":o.push({key:"V",data:[...r]}),s=r[0];break;case"v":s+=r[0],o.push({key:"V",data:[s]});break;case"S":o.push({key:"S",data:[...r]}),t=r[2],s=r[3];break;case"s":{const i=r.map((l,c)=>c%2?l+s:l+t);o.push({key:"S",data:i}),t=i[2],s=i[3];break}case"T":o.push({key:"T",data:[...r]}),t=r[0],s=r[1];break;case"t":t+=r[0],s+=r[1],o.push({key:"T",data:[t,s]});break;case"Z":case"z":o.push({key:"Z",data:[]}),t=e,s=n}return o}function xt(a){const t=[];let s="",e=0,n=0,o=0,h=0,r=0,i=0;for(const{key:l,data:c}of a){switch(l){case"M":t.push({key:"M",data:[...c]}),[e,n]=c,[o,h]=c;break;case"C":t.push({key:"C",data:[...c]}),e=c[4],n=c[5],r=c[2],i=c[3];break;case"L":t.push({key:"L",data:[...c]}),[e,n]=c;break;case"H":e=c[0],t.push({key:"L",data:[e,n]});break;case"V":n=c[0],t.push({key:"L",data:[e,n]});break;case"S":{let d=0,p=0;s==="C"||s==="S"?(d=e+(e-r),p=n+(n-i)):(d=e,p=n),t.push({key:"C",data:[d,p,...c]}),r=c[0],i=c[1],e=c[2],n=c[3];break}case"T":{const[d,p]=c;let u=0,f=0;s==="Q"||s==="T"?(u=e+(e-r),f=n+(n-i)):(u=e,f=n);const g=e+2*(u-e)/3,k=n+2*(f-n)/3,b=d+2*(u-d)/3,M=p+2*(f-p)/3;t.push({key:"C",data:[g,k,b,M,d,p]}),r=u,i=f,e=d,n=p;break}case"Q":{const[d,p,u,f]=c,g=e+2*(d-e)/3,k=n+2*(p-n)/3,b=u+2*(d-u)/3,M=f+2*(p-f)/3;t.push({key:"C",data:[g,k,b,M,u,f]}),r=d,i=p,e=u,n=f;break}case"A":{const d=Math.abs(c[0]),p=Math.abs(c[1]),u=c[2],f=c[3],g=c[4],k=c[5],b=c[6];d===0||p===0?(t.push({key:"C",data:[e,n,k,b,k,b]}),e=k,n=b):(e!==k||n!==b)&&(wt(e,n,k,b,d,p,u,f,g).forEach(function(M){t.push({key:"C",data:M})}),e=k,n=b);break}case"Z":t.push({key:"Z",data:[]}),e=o,n=h}s=l}return t}function j(a,t,s){return[a*Math.cos(s)-t*Math.sin(s),a*Math.sin(s)+t*Math.cos(s)]}function wt(a,t,s,e,n,o,h,r,i,l){const c=(d=h,Math.PI*d/180);var d;let p=[],u=0,f=0,g=0,k=0;if(l)[u,f,g,k]=l;else{[a,t]=j(a,t,-c),[s,e]=j(s,e,-c);const T=(a-s)/2,v=(t-e)/2;let C=T*T/(n*n)+v*v/(o*o);C>1&&(C=Math.sqrt(C),n*=C,o*=C);const W=n*n,E=o*o,Ot=W*E-W*v*v-E*T*T,Lt=W*v*v+E*T*T,lt=(r===i?-1:1)*Math.sqrt(Math.abs(Ot/Lt));g=lt*n*v/o+(a+s)/2,k=lt*-o*T/n+(t+e)/2,u=Math.asin(parseFloat(((t-k)/o).toFixed(9))),f=Math.asin(parseFloat(((e-k)/o).toFixed(9))),a<g&&(u=Math.PI-u),s<g&&(f=Math.PI-f),u<0&&(u=2*Math.PI+u),f<0&&(f=2*Math.PI+f),i&&u>f&&(u-=2*Math.PI),!i&&f>u&&(f-=2*Math.PI)}let b=f-u;if(Math.abs(b)>120*Math.PI/180){const T=f,v=s,C=e;f=i&&f>u?u+120*Math.PI/180*1:u+120*Math.PI/180*-1,p=wt(s=g+n*Math.cos(f),e=k+o*Math.sin(f),v,C,n,o,h,0,i,[f,T,g,k])}b=f-u;const M=Math.cos(u),y=Math.sin(u),P=Math.cos(f),w=Math.sin(f),x=Math.tan(b/4),L=4/3*n*x,A=4/3*o*x,q=[a,t],D=[a+L*y,t-A*M],I=[s+L*w,e-A*P],ct=[s,e];if(D[0]=2*q[0]-D[0],D[1]=2*q[1]-D[1],l)return[D,I,ct].concat(p);{p=[D,I,ct].concat(p);const T=[];for(let v=0;v<p.length;v+=3){const C=j(p[v][0],p[v][1],c),W=j(p[v+1][0],p[v+1][1],c),E=j(p[v+2][0],p[v+2][1],c);T.push([C[0],C[1],W[0],W[1],E[0],E[1]])}return T}}const Rt={randOffset:function(a,t){return m(a,t)},randOffsetWithRange:function(a,t,s){return B(a,t,s)},ellipse:function(a,t,s,e,n){const o=vt(s,e,n);return at(a,t,n,o).opset},doubleLineOps:function(a,t,s,e,n){return _(a,t,s,e,n,!0)}};function Pt(a,t,s,e,n){return{type:"path",ops:_(a,t,s,e,n)}}function H(a,t,s){const e=(a||[]).length;if(e>2){const n=[];for(let o=0;o<e-1;o++)n.push(..._(a[o][0],a[o][1],a[o+1][0],a[o+1][1],s));return t&&n.push(..._(a[e-1][0],a[e-1][1],a[0][0],a[0][1],s)),{type:"path",ops:n}}return e===2?Pt(a[0][0],a[0][1],a[1][0],a[1][1],s):{type:"path",ops:[]}}function jt(a,t,s,e,n){return function(o,h){return H(o,!0,h)}([[a,t],[a+s,t],[a+s,t+e],[a,t+e]],n)}function ft(a,t){if(a.length){const s=typeof a[0][0]=="number"?[a]:a,e=Z(s[0],1*(1+.2*t.roughness),t),n=t.disableMultiStroke?[]:Z(s[0],1.5*(1+.22*t.roughness),Mt(t));for(let o=1;o<s.length;o++){const h=s[o];if(h.length){const r=Z(h,1*(1+.2*t.roughness),t),i=t.disableMultiStroke?[]:Z(h,1.5*(1+.22*t.roughness),Mt(t));for(const l of r)l.op!=="move"&&e.push(l);for(const l of i)l.op!=="move"&&n.push(l)}}return{type:"path",ops:e.concat(n)}}return{type:"path",ops:[]}}function vt(a,t,s){const e=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(a/2,2)+Math.pow(t/2,2))/2)),n=Math.ceil(Math.max(s.curveStepCount,s.curveStepCount/Math.sqrt(200)*e)),o=2*Math.PI/n;let h=Math.abs(a/2),r=Math.abs(t/2);const i=1-s.curveFitting;return h+=m(h*i,s),r+=m(r*i,s),{increment:o,rx:h,ry:r}}function at(a,t,s,e){const[n,o]=kt(e.increment,a,t,e.rx,e.ry,1,e.increment*B(.1,B(.4,1,s),s),s);let h=J(n,null,s);if(!s.disableMultiStroke&&s.roughness!==0){const[r]=kt(e.increment,a,t,e.rx,e.ry,1.5,0,s),i=J(r,null,s);h=h.concat(i)}return{estimatedPoints:o,opset:{type:"path",ops:h}}}function dt(a,t,s,e,n,o,h,r,i){const l=a,c=t;let d=Math.abs(s/2),p=Math.abs(e/2);d+=m(.01*d,i),p+=m(.01*p,i);let u=n,f=o;for(;u<0;)u+=2*Math.PI,f+=2*Math.PI;f-u>2*Math.PI&&(u=0,f=2*Math.PI);const g=2*Math.PI/i.curveStepCount,k=Math.min(g/2,(f-u)/2),b=bt(k,l,c,d,p,u,f,1,i);if(!i.disableMultiStroke){const M=bt(k,l,c,d,p,u,f,1.5,i);b.push(...M)}return h&&(r?b.push(..._(l,c,l+d*Math.cos(u),c+p*Math.sin(u),i),..._(l,c,l+d*Math.cos(f),c+p*Math.sin(f),i)):b.push({op:"lineTo",data:[l,c]},{op:"lineTo",data:[l+d*Math.cos(u),c+p*Math.sin(u)]})),{type:"path",ops:b}}function gt(a,t){const s=xt(yt(it(a))),e=[];let n=[0,0],o=[0,0];for(const{key:h,data:r}of s)switch(h){case"M":o=[r[0],r[1]],n=[r[0],r[1]];break;case"L":e.push(..._(o[0],o[1],r[0],r[1],t)),o=[r[0],r[1]];break;case"C":{const[i,l,c,d,p,u]=r;e.push(...Gt(i,l,c,d,p,u,o,t)),o=[p,u];break}case"Z":e.push(..._(o[0],o[1],n[0],n[1],t)),o=[n[0],n[1]]}return{type:"path",ops:e}}function st(a,t){const s=[];for(const e of a)if(e.length){const n=t.maxRandomnessOffset||0,o=e.length;if(o>2){s.push({op:"move",data:[e[0][0]+m(n,t),e[0][1]+m(n,t)]});for(let h=1;h<o;h++)s.push({op:"lineTo",data:[e[h][0]+m(n,t),e[h][1]+m(n,t)]})}}return{type:"fillPath",ops:s}}function R(a,t){return function(s,e){let n=s.fillStyle||"hachure";if(!S[n])switch(n){case"zigzag":S[n]||(S[n]=new At(e));break;case"cross-hatch":S[n]||(S[n]=new Ct(e));break;case"dots":S[n]||(S[n]=new _t(e));break;case"dashed":S[n]||(S[n]=new It(e));break;case"zigzag-line":S[n]||(S[n]=new zt(e));break;default:n="hachure",S[n]||(S[n]=new ht(e))}return S[n]}(t,Rt).fillPolygons(a,t)}function Mt(a){const t=Object.assign({},a);return t.randomizer=void 0,a.seed&&(t.seed=a.seed+1),t}function St(a){return a.randomizer||(a.randomizer=new Wt(a.seed||0)),a.randomizer.next()}function B(a,t,s,e=1){return s.roughness*e*(St(s)*(t-a)+a)}function m(a,t,s=1){return B(-a,a,t,s)}function _(a,t,s,e,n,o=!1){const h=o?n.disableMultiStrokeFill:n.disableMultiStroke,r=ot(a,t,s,e,n,!0,!1);if(h)return r;const i=ot(a,t,s,e,n,!0,!0);return r.concat(i)}function ot(a,t,s,e,n,o,h){const r=Math.pow(a-s,2)+Math.pow(t-e,2),i=Math.sqrt(r);let l=1;l=i<200?1:i>500?.4:-.0016668*i+1.233334;let c=n.maxRandomnessOffset||0;c*c*100>r&&(c=i/10);const d=c/2,p=.2+.2*St(n);let u=n.bowing*n.maxRandomnessOffset*(e-t)/200,f=n.bowing*n.maxRandomnessOffset*(a-s)/200;u=m(u,n,l),f=m(f,n,l);const g=[],k=()=>m(d,n,l),b=()=>m(c,n,l),M=n.preserveVertices;return o&&(h?g.push({op:"move",data:[a+(M?0:k()),t+(M?0:k())]}):g.push({op:"move",data:[a+(M?0:m(c,n,l)),t+(M?0:m(c,n,l))]})),h?g.push({op:"bcurveTo",data:[u+a+(s-a)*p+k(),f+t+(e-t)*p+k(),u+a+2*(s-a)*p+k(),f+t+2*(e-t)*p+k(),s+(M?0:k()),e+(M?0:k())]}):g.push({op:"bcurveTo",data:[u+a+(s-a)*p+b(),f+t+(e-t)*p+b(),u+a+2*(s-a)*p+b(),f+t+2*(e-t)*p+b(),s+(M?0:b()),e+(M?0:b())]}),g}function Z(a,t,s){if(!a.length)return[];const e=[];e.push([a[0][0]+m(t,s),a[0][1]+m(t,s)]),e.push([a[0][0]+m(t,s),a[0][1]+m(t,s)]);for(let n=1;n<a.length;n++)e.push([a[n][0]+m(t,s),a[n][1]+m(t,s)]),n===a.length-1&&e.push([a[n][0]+m(t,s),a[n][1]+m(t,s)]);return J(e,null,s)}function J(a,t,s){const e=a.length,n=[];if(e>3){const o=[],h=1-s.curveTightness;n.push({op:"move",data:[a[1][0],a[1][1]]});for(let r=1;r+2<e;r++){const i=a[r];o[0]=[i[0],i[1]],o[1]=[i[0]+(h*a[r+1][0]-h*a[r-1][0])/6,i[1]+(h*a[r+1][1]-h*a[r-1][1])/6],o[2]=[a[r+1][0]+(h*a[r][0]-h*a[r+2][0])/6,a[r+1][1]+(h*a[r][1]-h*a[r+2][1])/6],o[3]=[a[r+1][0],a[r+1][1]],n.push({op:"bcurveTo",data:[o[1][0],o[1][1],o[2][0],o[2][1],o[3][0],o[3][1]]})}if(t&&t.length===2){const r=s.maxRandomnessOffset;n.push({op:"lineTo",data:[t[0]+m(r,s),t[1]+m(r,s)]})}}else e===3?(n.push({op:"move",data:[a[1][0],a[1][1]]}),n.push({op:"bcurveTo",data:[a[1][0],a[1][1],a[2][0],a[2][1],a[2][0],a[2][1]]})):e===2&&n.push(...ot(a[0][0],a[0][1],a[1][0],a[1][1],s,!0,!0));return n}function kt(a,t,s,e,n,o,h,r){const i=[],l=[];if(r.roughness===0){a/=4,l.push([t+e*Math.cos(-a),s+n*Math.sin(-a)]);for(let c=0;c<=2*Math.PI;c+=a){const d=[t+e*Math.cos(c),s+n*Math.sin(c)];i.push(d),l.push(d)}l.push([t+e*Math.cos(0),s+n*Math.sin(0)]),l.push([t+e*Math.cos(a),s+n*Math.sin(a)])}else{const c=m(.5,r)-Math.PI/2;l.push([m(o,r)+t+.9*e*Math.cos(c-a),m(o,r)+s+.9*n*Math.sin(c-a)]);const d=2*Math.PI+c-.01;for(let p=c;p<d;p+=a){const u=[m(o,r)+t+e*Math.cos(p),m(o,r)+s+n*Math.sin(p)];i.push(u),l.push(u)}l.push([m(o,r)+t+e*Math.cos(c+2*Math.PI+.5*h),m(o,r)+s+n*Math.sin(c+2*Math.PI+.5*h)]),l.push([m(o,r)+t+.98*e*Math.cos(c+h),m(o,r)+s+.98*n*Math.sin(c+h)]),l.push([m(o,r)+t+.9*e*Math.cos(c+.5*h),m(o,r)+s+.9*n*Math.sin(c+.5*h)])}return[l,i]}function bt(a,t,s,e,n,o,h,r,i){const l=o+m(.1,i),c=[];c.push([m(r,i)+t+.9*e*Math.cos(l-a),m(r,i)+s+.9*n*Math.sin(l-a)]);for(let d=l;d<=h;d+=a)c.push([m(r,i)+t+e*Math.cos(d),m(r,i)+s+n*Math.sin(d)]);return c.push([t+e*Math.cos(h),s+n*Math.sin(h)]),c.push([t+e*Math.cos(h),s+n*Math.sin(h)]),J(c,null,i)}function Gt(a,t,s,e,n,o,h,r){const i=[],l=[r.maxRandomnessOffset||1,(r.maxRandomnessOffset||1)+.3];let c=[0,0];const d=r.disableMultiStroke?1:2,p=r.preserveVertices;for(let u=0;u<d;u++)u===0?i.push({op:"move",data:[h[0],h[1]]}):i.push({op:"move",data:[h[0]+(p?0:m(l[0],r)),h[1]+(p?0:m(l[0],r))]}),c=p?[n,o]:[n+m(l[u],r),o+m(l[u],r)],i.push({op:"bcurveTo",data:[a+m(l[u],r),t+m(l[u],r),s+m(l[u],r),e+m(l[u],r),c[0],c[1]]});return i}function G(a){return[...a]}function mt(a,t=0){const s=a.length;if(s<3)throw new Error("A curve must have at least three points.");const e=[];if(s===3)e.push(G(a[0]),G(a[1]),G(a[2]),G(a[2]));else{const n=[];n.push(a[0],a[0]);for(let r=1;r<a.length;r++)n.push(a[r]),r===a.length-1&&n.push(a[r]);const o=[],h=1-t;e.push(G(n[0]));for(let r=1;r+2<n.length;r++){const i=n[r];o[0]=[i[0],i[1]],o[1]=[i[0]+(h*n[r+1][0]-h*n[r-1][0])/6,i[1]+(h*n[r+1][1]-h*n[r-1][1])/6],o[2]=[n[r+1][0]+(h*n[r][0]-h*n[r+2][0])/6,n[r+1][1]+(h*n[r][1]-h*n[r+2][1])/6],o[3]=[n[r+1][0],n[r+1][1]],e.push(o[1],o[2],o[3])}}return e}function N(a,t){return Math.pow(a[0]-t[0],2)+Math.pow(a[1]-t[1],2)}function $t(a,t,s){const e=N(t,s);if(e===0)return N(a,t);let n=((a[0]-t[0])*(s[0]-t[0])+(a[1]-t[1])*(s[1]-t[1]))/e;return n=Math.max(0,Math.min(1,n)),N(a,z(t,s,n))}function z(a,t,s){return[a[0]+(t[0]-a[0])*s,a[1]+(t[1]-a[1])*s]}function rt(a,t,s,e){const n=e||[];if(function(r,i){const l=r[i+0],c=r[i+1],d=r[i+2],p=r[i+3];let u=3*c[0]-2*l[0]-p[0];u*=u;let f=3*c[1]-2*l[1]-p[1];f*=f;let g=3*d[0]-2*p[0]-l[0];g*=g;let k=3*d[1]-2*p[1]-l[1];return k*=k,u<g&&(u=g),f<k&&(f=k),u+f}(a,t)<s){const r=a[t+0];n.length?(o=n[n.length-1],h=r,Math.sqrt(N(o,h))>1&&n.push(r)):n.push(r),n.push(a[t+3])}else{const i=a[t+0],l=a[t+1],c=a[t+2],d=a[t+3],p=z(i,l,.5),u=z(l,c,.5),f=z(c,d,.5),g=z(p,u,.5),k=z(u,f,.5),b=z(g,k,.5);rt([i,p,g,b],0,s,n),rt([b,k,f,d],0,s,n)}var o,h;return n}function qt(a,t){return K(a,0,a.length,t)}function K(a,t,s,e,n){const o=n||[],h=a[t],r=a[s-1];let i=0,l=1;for(let c=t+1;c<s-1;++c){const d=$t(a[c],h,r);d>i&&(i=d,l=c)}return Math.sqrt(i)>e?(K(a,t,l+1,e,o),K(a,l,s,e,o)):(o.length||o.push(h),o.push(r)),o}function nt(a,t=.15,s){const e=[],n=(a.length-1)/3;for(let o=0;o<n;o++)rt(a,3*o,t,e);return s&&s>0?K(e,0,e.length,s):e}const O="none";class U{constructor(t){this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:"#000",strokeWidth:1,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,seed:0,disableMultiStroke:!1,disableMultiStrokeFill:!1,preserveVertices:!1,fillShapeRoughnessGain:.8},this.config=t||{},this.config.options&&(this.defaultOptions=this._o(this.config.options))}static newSeed(){return Math.floor(Math.random()*2**31)}_o(t){return t?Object.assign({},this.defaultOptions,t):this.defaultOptions}_d(t,s,e){return{shape:t,sets:s||[],options:e||this.defaultOptions}}line(t,s,e,n,o){const h=this._o(o);return this._d("line",[Pt(t,s,e,n,h)],h)}rectangle(t,s,e,n,o){const h=this._o(o),r=[],i=jt(t,s,e,n,h);if(h.fill){const l=[[t,s],[t+e,s],[t+e,s+n],[t,s+n]];h.fillStyle==="solid"?r.push(st([l],h)):r.push(R([l],h))}return h.stroke!==O&&r.push(i),this._d("rectangle",r,h)}ellipse(t,s,e,n,o){const h=this._o(o),r=[],i=vt(e,n,h),l=at(t,s,h,i);if(h.fill)if(h.fillStyle==="solid"){const c=at(t,s,h,i).opset;c.type="fillPath",r.push(c)}else r.push(R([l.estimatedPoints],h));return h.stroke!==O&&r.push(l.opset),this._d("ellipse",r,h)}circle(t,s,e,n){const o=this.ellipse(t,s,e,e,n);return o.shape="circle",o}linearPath(t,s){const e=this._o(s);return this._d("linearPath",[H(t,!1,e)],e)}arc(t,s,e,n,o,h,r=!1,i){const l=this._o(i),c=[],d=dt(t,s,e,n,o,h,r,!0,l);if(r&&l.fill)if(l.fillStyle==="solid"){const p=Object.assign({},l);p.disableMultiStroke=!0;const u=dt(t,s,e,n,o,h,!0,!1,p);u.type="fillPath",c.push(u)}else c.push(function(p,u,f,g,k,b,M){const y=p,P=u;let w=Math.abs(f/2),x=Math.abs(g/2);w+=m(.01*w,M),x+=m(.01*x,M);let L=k,A=b;for(;L<0;)L+=2*Math.PI,A+=2*Math.PI;A-L>2*Math.PI&&(L=0,A=2*Math.PI);const q=(A-L)/M.curveStepCount,D=[];for(let I=L;I<=A;I+=q)D.push([y+w*Math.cos(I),P+x*Math.sin(I)]);return D.push([y+w*Math.cos(A),P+x*Math.sin(A)]),D.push([y,P]),R([D],M)}(t,s,e,n,o,h,l));return l.stroke!==O&&c.push(d),this._d("arc",c,l)}curve(t,s){const e=this._o(s),n=[],o=ft(t,e);if(e.fill&&e.fill!==O)if(e.fillStyle==="solid"){const h=ft(t,Object.assign(Object.assign({},e),{disableMultiStroke:!0,roughness:e.roughness?e.roughness+e.fillShapeRoughnessGain:0}));n.push({type:"fillPath",ops:this._mergedShape(h.ops)})}else{const h=[],r=t;if(r.length){const i=typeof r[0][0]=="number"?[r]:r;for(const l of i)l.length<3?h.push(...l):l.length===3?h.push(...nt(mt([l[0],l[0],l[1],l[2]]),10,(1+e.roughness)/2)):h.push(...nt(mt(l),10,(1+e.roughness)/2))}h.length&&n.push(R([h],e))}return e.stroke!==O&&n.push(o),this._d("curve",n,e)}polygon(t,s){const e=this._o(s),n=[],o=H(t,!0,e);return e.fill&&(e.fillStyle==="solid"?n.push(st([t],e)):n.push(R([t],e))),e.stroke!==O&&n.push(o),this._d("polygon",n,e)}path(t,s){const e=this._o(s),n=[];if(!t)return this._d("path",n,e);t=(t||"").replace(/\n/g," ").replace(/(-\s)/g,"-").replace("/(ss)/g"," ");const o=e.fill&&e.fill!=="transparent"&&e.fill!==O,h=e.stroke!==O,r=!!(e.simplification&&e.simplification<1),i=function(c,d,p){const u=xt(yt(it(c))),f=[];let g=[],k=[0,0],b=[];const M=()=>{b.length>=4&&g.push(...nt(b,d)),b=[]},y=()=>{M(),g.length&&(f.push(g),g=[])};for(const{key:w,data:x}of u)switch(w){case"M":y(),k=[x[0],x[1]],g.push(k);break;case"L":M(),g.push([x[0],x[1]]);break;case"C":if(!b.length){const L=g.length?g[g.length-1]:k;b.push([L[0],L[1]])}b.push([x[0],x[1]]),b.push([x[2],x[3]]),b.push([x[4],x[5]]);break;case"Z":M(),g.push([k[0],k[1]])}if(y(),!p)return f;const P=[];for(const w of f){const x=qt(w,p);x.length&&P.push(x)}return P}(t,1,r?4-4*(e.simplification||1):(1+e.roughness)/2),l=gt(t,e);if(o)if(e.fillStyle==="solid")if(i.length===1){const c=gt(t,Object.assign(Object.assign({},e),{disableMultiStroke:!0,roughness:e.roughness?e.roughness+e.fillShapeRoughnessGain:0}));n.push({type:"fillPath",ops:this._mergedShape(c.ops)})}else n.push(st(i,e));else n.push(R(i,e));return h&&(r?i.forEach(c=>{n.push(H(c,!1,e))}):n.push(l)),this._d("path",n,e)}opsToPath(t,s){let e="";for(const n of t.ops){const o=typeof s=="number"&&s>=0?n.data.map(h=>+h.toFixed(s)):n.data;switch(n.op){case"move":e+=`M${o[0]} ${o[1]} `;break;case"bcurveTo":e+=`C${o[0]} ${o[1]}, ${o[2]} ${o[3]}, ${o[4]} ${o[5]} `;break;case"lineTo":e+=`L${o[0]} ${o[1]} `}}return e.trim()}toPaths(t){const s=t.sets||[],e=t.options||this.defaultOptions,n=[];for(const o of s){let h=null;switch(o.type){case"path":h={d:this.opsToPath(o),stroke:e.stroke,strokeWidth:e.strokeWidth,fill:O};break;case"fillPath":h={d:this.opsToPath(o),stroke:O,strokeWidth:0,fill:e.fill||O};break;case"fillSketch":h=this.fillSketch(o,e)}h&&n.push(h)}return n}fillSketch(t,s){let e=s.fillWeight;return e<0&&(e=s.strokeWidth/2),{d:this.opsToPath(t),stroke:s.fill||O,strokeWidth:e,fill:O}}_mergedShape(t){return t.filter((s,e)=>e===0||s.op!=="move")}}class Ft{constructor(t,s){this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.gen=new U(s)}draw(t){const s=t.sets||[],e=t.options||this.getDefaultOptions(),n=this.ctx,o=t.options.fixedDecimalPlaceDigits;for(const h of s)switch(h.type){case"path":n.save(),n.strokeStyle=e.stroke==="none"?"transparent":e.stroke,n.lineWidth=e.strokeWidth,e.strokeLineDash&&n.setLineDash(e.strokeLineDash),e.strokeLineDashOffset&&(n.lineDashOffset=e.strokeLineDashOffset),this._drawToContext(n,h,o),n.restore();break;case"fillPath":{n.save(),n.fillStyle=e.fill||"";const r=t.shape==="curve"||t.shape==="polygon"||t.shape==="path"?"evenodd":"nonzero";this._drawToContext(n,h,o,r),n.restore();break}case"fillSketch":this.fillSketch(n,h,e)}}fillSketch(t,s,e){let n=e.fillWeight;n<0&&(n=e.strokeWidth/2),t.save(),e.fillLineDash&&t.setLineDash(e.fillLineDash),e.fillLineDashOffset&&(t.lineDashOffset=e.fillLineDashOffset),t.strokeStyle=e.fill||"",t.lineWidth=n,this._drawToContext(t,s,e.fixedDecimalPlaceDigits),t.restore()}_drawToContext(t,s,e,n="nonzero"){t.beginPath();for(const o of s.ops){const h=typeof e=="number"&&e>=0?o.data.map(r=>+r.toFixed(e)):o.data;switch(o.op){case"move":t.moveTo(h[0],h[1]);break;case"bcurveTo":t.bezierCurveTo(h[0],h[1],h[2],h[3],h[4],h[5]);break;case"lineTo":t.lineTo(h[0],h[1])}}s.type==="fillPath"?t.fill(n):t.stroke()}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}line(t,s,e,n,o){const h=this.gen.line(t,s,e,n,o);return this.draw(h),h}rectangle(t,s,e,n,o){const h=this.gen.rectangle(t,s,e,n,o);return this.draw(h),h}ellipse(t,s,e,n,o){const h=this.gen.ellipse(t,s,e,n,o);return this.draw(h),h}circle(t,s,e,n){const o=this.gen.circle(t,s,e,n);return this.draw(o),o}linearPath(t,s){const e=this.gen.linearPath(t,s);return this.draw(e),e}polygon(t,s){const e=this.gen.polygon(t,s);return this.draw(e),e}arc(t,s,e,n,o,h,r=!1,i){const l=this.gen.arc(t,s,e,n,o,h,r,i);return this.draw(l),l}curve(t,s){const e=this.gen.curve(t,s);return this.draw(e),e}path(t,s){const e=this.gen.path(t,s);return this.draw(e),e}}const Q="http://www.w3.org/2000/svg";class Vt{constructor(t,s){this.svg=t,this.gen=new U(s)}draw(t){const s=t.sets||[],e=t.options||this.getDefaultOptions(),n=this.svg.ownerDocument||window.document,o=n.createElementNS(Q,"g"),h=t.options.fixedDecimalPlaceDigits;for(const r of s){let i=null;switch(r.type){case"path":i=n.createElementNS(Q,"path"),i.setAttribute("d",this.opsToPath(r,h)),i.setAttribute("stroke",e.stroke),i.setAttribute("stroke-width",e.strokeWidth+""),i.setAttribute("fill","none"),e.strokeLineDash&&i.setAttribute("stroke-dasharray",e.strokeLineDash.join(" ").trim()),e.strokeLineDashOffset&&i.setAttribute("stroke-dashoffset",`${e.strokeLineDashOffset}`);break;case"fillPath":i=n.createElementNS(Q,"path"),i.setAttribute("d",this.opsToPath(r,h)),i.setAttribute("stroke","none"),i.setAttribute("stroke-width","0"),i.setAttribute("fill",e.fill||""),t.shape!=="curve"&&t.shape!=="polygon"||i.setAttribute("fill-rule","evenodd");break;case"fillSketch":i=this.fillSketch(n,r,e)}i&&o.appendChild(i)}return o}fillSketch(t,s,e){let n=e.fillWeight;n<0&&(n=e.strokeWidth/2);const o=t.createElementNS(Q,"path");return o.setAttribute("d",this.opsToPath(s,e.fixedDecimalPlaceDigits)),o.setAttribute("stroke",e.fill||""),o.setAttribute("stroke-width",n+""),o.setAttribute("fill","none"),e.fillLineDash&&o.setAttribute("stroke-dasharray",e.fillLineDash.join(" ").trim()),e.fillLineDashOffset&&o.setAttribute("stroke-dashoffset",`${e.fillLineDashOffset}`),o}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}opsToPath(t,s){return this.gen.opsToPath(t,s)}line(t,s,e,n,o){const h=this.gen.line(t,s,e,n,o);return this.draw(h)}rectangle(t,s,e,n,o){const h=this.gen.rectangle(t,s,e,n,o);return this.draw(h)}ellipse(t,s,e,n,o){const h=this.gen.ellipse(t,s,e,n,o);return this.draw(h)}circle(t,s,e,n){const o=this.gen.circle(t,s,e,n);return this.draw(o)}linearPath(t,s){const e=this.gen.linearPath(t,s);return this.draw(e)}polygon(t,s){const e=this.gen.polygon(t,s);return this.draw(e)}arc(t,s,e,n,o,h,r=!1,i){const l=this.gen.arc(t,s,e,n,o,h,r,i);return this.draw(l)}curve(t,s){const e=this.gen.curve(t,s);return this.draw(e)}path(t,s){const e=this.gen.path(t,s);return this.draw(e)}}var Zt={canvas:(a,t)=>new Ft(a,t),svg:(a,t)=>new Vt(a,t),generator:a=>new U(a),newSeed:()=>U.newSeed()};const Bt=()=>{const a=ut.useRef(null);return ut.useEffect(()=>{const t=Zt.svg(a.current);a.current.appendChild(t.line(60,60,190,60)),a.current.appendChild(t.rectangle(10,10,100,100)),a.current.appendChild(t.rectangle(140,10,100,100,{fill:"rgba(255,0,0,0.2)",fillStyle:"solid",roughness:2}))}),F.jsx(F.Fragment,{children:F.jsx("div",{className:"bg-[#fff]",children:F.jsx("svg",{ref:a,className:""})})})};export{Bt as default};
