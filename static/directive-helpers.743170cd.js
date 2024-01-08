import{j as c}from"./lit-html.da629c26.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},T=t=>(...e)=>({_$litDirective$:t,values:e});let p=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,l){this._$Ct=e,this._$AM=i,this._$Ci=l}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:d}=c,E=t=>t===null||typeof t!="object"&&typeof t!="function",g=(t,e)=>e===void 0?t?._$litType$!==void 0:t?._$litType$===e,h=t=>{var e;return((e=t?._$litType$)===null||e===void 0?void 0:e.h)!=null},m=t=>t.strings===void 0,o=()=>document.createComment(""),b=(t,e,i)=>{var l;const r=t._$AA.parentNode,n=e===void 0?t._$AB:e._$AA;if(i===void 0){const s=r.insertBefore(o(),n),A=r.insertBefore(o(),n);i=new d(s,A,t,t.options)}else{const s=i._$AB.nextSibling,A=i._$AM,_=A!==t;if(_){let $;(l=i._$AQ)===null||l===void 0||l.call(i,t),i._$AM=t,i._$AP!==void 0&&($=t._$AU)!==A._$AU&&i._$AP($)}if(s!==n||_){let $=i._$AA;for(;$!==s;){const v=$.nextSibling;r.insertBefore($,n),$=v}}}return i},U=(t,e,i=t)=>(t._$AI(e,i),t),u={},x=(t,e=u)=>t._$AH=e,y=t=>t._$AH,I=t=>{var e;(e=t._$AP)===null||e===void 0||e.call(t,!1,!0);let i=t._$AA;const l=t._$AB.nextSibling;for(;i!==l;){const r=i.nextSibling;i.remove(),i=r}};export{f as a,T as b,p as c,b as d,m as e,U as f,x as g,E as i,y as m,I as p,g as t,h as v};
