import{l as A,i as O,h as m,j as b,k as V,m as q,p as z,q as G,u as K,v as U,x,y as W,z as $,A as j,B as I,C as F}from"./runtime-core.esm-bundler.CB7qtb66.js";const X="http://www.w3.org/2000/svg",J="http://www.w3.org/1998/Math/MathML",l=typeof document<"u"?document:null,C=l&&l.createElement("template"),Q={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const o=e==="svg"?l.createElementNS(X,t):e==="mathml"?l.createElementNS(J,t):l.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&o.setAttribute("multiple",i.multiple),o},createText:t=>l.createTextNode(t),createComment:t=>l.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>l.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,o,r){const c=n?n.previousSibling:e.lastChild;if(o&&(o===r||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{C.innerHTML=i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t;const s=C.content;if(i==="svg"||i==="mathml"){const f=s.firstChild;for(;f.firstChild;)s.appendChild(f.firstChild);s.removeChild(f)}e.insertBefore(s,n)}return[c?c.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Y=Symbol("_vtc");function Z(t,e,n){const i=t[Y];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const y=Symbol("_vod"),k=Symbol("");function tt(t,e,n){const i=t.style,o=m(n);if(n&&!o){if(e&&!m(e))for(const r in e)n[r]==null&&S(i,r,"");for(const r in n)S(i,r,n[r])}else{const r=i.display;if(o){if(e!==n){const c=i[k];c&&(n+=";"+c),i.cssText=n}}else e&&t.removeAttribute("style");y in t&&(i.display=r)}}const E=/\s*!important$/;function S(t,e,n){if(b(n))n.forEach(i=>S(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=et(t,e);E.test(n)?t.setProperty(x(i),n.replace(E,""),"important"):t[i]=n}}const N=["Webkit","Moz","ms"],d={};function et(t,e){const n=d[e];if(n)return n;let i=W(e);if(i!=="filter"&&i in t)return d[e]=i;i=$(i);for(let o=0;o<N.length;o++){const r=N[o]+i;if(r in t)return d[e]=r}return e}const T="http://www.w3.org/1999/xlink";function nt(t,e,n,i,o){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(T,e.slice(6,e.length)):t.setAttributeNS(T,e,n);else{const r=j(e);n==null||r&&!I(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function it(t,e,n,i,o,r,c){if(e==="innerHTML"||e==="textContent"){i&&c(i,o,r),t[e]=n??"";return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){t._value=n;const a=s==="OPTION"?t.getAttribute("value"):t.value,v=n??"";a!==v&&(t.value=v),n==null&&t.removeAttribute(e);return}let f=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=I(n):n==null&&a==="string"?(n="",f=!0):a==="number"&&(n=0,f=!0)}try{t[e]=n}catch{}f&&t.removeAttribute(e)}function u(t,e,n,i){t.addEventListener(e,n,i)}function ot(t,e,n,i){t.removeEventListener(e,n,i)}const w=Symbol("_vei");function rt(t,e,n,i,o=null){const r=t[w]||(t[w]={}),c=r[e];if(i&&c)c.value=i;else{const[s,f]=st(e);if(i){const a=r[e]=at(i,o);u(t,s,a,f)}else c&&(ot(t,s,c,f),r[e]=void 0)}}const M=/(?:Once|Passive|Capture)$/;function st(t){let e;if(M.test(t)){e={};let i;for(;i=t.match(M);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):x(t.slice(2)),e]}let h=0;const ct=Promise.resolve(),ft=()=>h||(ct.then(()=>h=0),h=Date.now());function at(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;F(lt(i,n.value),e,5,[i])};return n.value=t,n.attached=ft(),n}function lt(t,e){if(b(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>o=>!o._stopped&&i&&i(o))}else return e}const _=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ut=(t,e,n,i,o,r,c,s,f)=>{const a=o==="svg";e==="class"?Z(t,i,a):e==="style"?tt(t,n,i):K(e)?U(e)||rt(t,e,n,i,c):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):pt(t,e,i,a))?it(t,e,i,r,c,s,f):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),nt(t,e,i,a))};function pt(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&_(e)&&O(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const o=t.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return _(e)&&m(n)?!1:e in t}const L=t=>{const e=t.props["onUpdate:modelValue"]||!1;return b(e)?n=>V(e,n):e};function mt(t){t.target.composing=!0}function P(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const g=Symbol("_assign"),St={created(t,{modifiers:{lazy:e,trim:n,number:i}},o){t[g]=L(o);const r=i||o.props&&o.props.type==="number";u(t,e?"change":"input",c=>{if(c.target.composing)return;let s=t.value;n&&(s=s.trim()),r&&(s=A(s)),t[g](s)}),n&&u(t,"change",()=>{t.value=t.value.trim()}),e||(u(t,"compositionstart",mt),u(t,"compositionend",P),u(t,"change",P))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:o}},r){if(t[g]=L(r),t.composing)return;const c=o||t.type==="number"?A(t.value):t.value,s=e??"";c!==s&&(document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===s)||(t.value=s))}},H=G({patchProp:ut},Q);let p,R=!1;function dt(){return p||(p=q(H))}function ht(){return p=R?p:z(H),R=!0,p}const bt=(...t)=>{const e=dt().createApp(...t),{mount:n}=e;return e.mount=i=>{const o=D(i);if(!o)return;const r=e._component;!O(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.innerHTML="";const c=n(o,!1,B(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),c},e},vt=(...t)=>{const e=ht().createApp(...t),{mount:n}=e;return e.mount=i=>{const o=D(i);if(o)return n(o,!0,B(o))},e};function B(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function D(t){return m(t)?document.querySelector(t):t}export{bt as a,vt as c,St as v};