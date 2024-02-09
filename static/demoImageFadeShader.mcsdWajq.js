import{j as H}from"./jsx-runtime.bkUup59_.js";import{R as We,P as Be,E as qe,c as P,M as Y,d as U,Q as we,f as Q,O as $,S as Ae,V as y,u as C,b as _e,s as Qe,e as $e,C as Je,g as et}from"./shaderMaterial.QffT7VNd.js";import{r as k}from"./index.yqZja8WZ.js";import{u as tt}from"./useTexture.yywfMFRP.js";import{_ as ot}from"./extends.dGVwEr9R.js";import"./_commonjsHelpers.4gQjN7DL.js";var nt=Object.defineProperty,at=(h,d,b)=>d in h?nt(h,d,{enumerable:!0,configurable:!0,writable:!0,value:b}):h[d]=b,n=(h,d,b)=>(at(h,typeof d!="symbol"?d+"":d,b),b);const J=new We,De=new Be,it=Math.cos(70*(Math.PI/180)),Le=(h,d)=>(h%d+d)%d;let st=class extends qe{constructor(d,b){super(),n(this,"object"),n(this,"domElement"),n(this,"enabled",!0),n(this,"target",new P),n(this,"minDistance",0),n(this,"maxDistance",1/0),n(this,"minZoom",0),n(this,"maxZoom",1/0),n(this,"minPolarAngle",0),n(this,"maxPolarAngle",Math.PI),n(this,"minAzimuthAngle",-1/0),n(this,"maxAzimuthAngle",1/0),n(this,"enableDamping",!1),n(this,"dampingFactor",.05),n(this,"enableZoom",!0),n(this,"zoomSpeed",1),n(this,"enableRotate",!0),n(this,"rotateSpeed",1),n(this,"enablePan",!0),n(this,"panSpeed",1),n(this,"screenSpacePanning",!0),n(this,"keyPanSpeed",7),n(this,"zoomToCursor",!1),n(this,"autoRotate",!1),n(this,"autoRotateSpeed",2),n(this,"reverseOrbit",!1),n(this,"reverseHorizontalOrbit",!1),n(this,"reverseVerticalOrbit",!1),n(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),n(this,"mouseButtons",{LEFT:Y.ROTATE,MIDDLE:Y.DOLLY,RIGHT:Y.PAN}),n(this,"touches",{ONE:U.ROTATE,TWO:U.DOLLY_PAN}),n(this,"target0"),n(this,"position0"),n(this,"zoom0"),n(this,"_domElementKeyEvents",null),n(this,"getPolarAngle"),n(this,"getAzimuthalAngle"),n(this,"setPolarAngle"),n(this,"setAzimuthalAngle"),n(this,"getDistance"),n(this,"listenToKeyEvents"),n(this,"stopListenToKeyEvents"),n(this,"saveState"),n(this,"reset"),n(this,"update"),n(this,"connect"),n(this,"dispose"),this.object=d,this.domElement=b,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>u.phi,this.getAzimuthalAngle=()=>u.theta,this.setPolarAngle=t=>{let o=Le(t,2*Math.PI),a=u.phi;a<0&&(a+=2*Math.PI),o<0&&(o+=2*Math.PI);let s=Math.abs(o-a);2*Math.PI-s<s&&(o<a?o+=2*Math.PI:a+=2*Math.PI),f.phi=o-a,e.update()},this.setAzimuthalAngle=t=>{let o=Le(t,2*Math.PI),a=u.theta;a<0&&(a+=2*Math.PI),o<0&&(o+=2*Math.PI);let s=Math.abs(o-a);2*Math.PI-s<s&&(o<a?o+=2*Math.PI:a+=2*Math.PI),f.theta=o-a,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=t=>{t.addEventListener("keydown",ie),this._domElementKeyEvents=t},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",ie),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(F),e.update(),c=i.NONE},this.update=(()=>{const t=new P,o=new P(0,1,0),a=new we().setFromUnitVectors(d.up,o),s=a.clone().invert(),m=new P,_=new we,S=2*Math.PI;return function(){const je=e.object.position;a.setFromUnitVectors(d.up,o),s.copy(a).invert(),t.copy(je).sub(e.target),t.applyQuaternion(a),u.setFromVector3(t),e.autoRotate&&c===i.NONE&&ee(Ie()),e.enableDamping?(u.theta+=f.theta*e.dampingFactor,u.phi+=f.phi*e.dampingFactor):(u.theta+=f.theta,u.phi+=f.phi);let I=e.minAzimuthAngle,R=e.maxAzimuthAngle;isFinite(I)&&isFinite(R)&&(I<-Math.PI?I+=S:I>Math.PI&&(I-=S),R<-Math.PI?R+=S:R>Math.PI&&(R-=S),I<=R?u.theta=Math.max(I,Math.min(R,u.theta)):u.theta=u.theta>(I+R)/2?Math.max(I,u.theta):Math.min(R,u.theta)),u.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,u.phi)),u.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(N,e.dampingFactor):e.target.add(N),e.zoomToCursor&&T||e.object.isOrthographicCamera?u.radius=oe(u.radius):u.radius=oe(u.radius*v),t.setFromSpherical(u),t.applyQuaternion(s),je.copy(e.target).add(t),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(f.theta*=1-e.dampingFactor,f.phi*=1-e.dampingFactor,N.multiplyScalar(1-e.dampingFactor)):(f.set(0,0,0),N.set(0,0,0));let X=!1;if(e.zoomToCursor&&T){let K=null;if(e.object instanceof Q&&e.object.isPerspectiveCamera){const V=t.length();K=oe(V*v);const q=V-K;e.object.position.addScaledVector(Z,q),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const V=new P(E.x,E.y,0);V.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/v)),e.object.updateProjectionMatrix(),X=!0;const q=new P(E.x,E.y,0);q.unproject(e.object),e.object.position.sub(q).add(V),e.object.updateMatrixWorld(),K=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;K!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(K).add(e.object.position):(J.origin.copy(e.object.position),J.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(J.direction))<it?d.lookAt(e.target):(De.setFromNormalAndCoplanarPoint(e.object.up,e.target),J.intersectPlane(De,e.target))))}else e.object instanceof $&&e.object.isOrthographicCamera&&(X=v!==1,X&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/v)),e.object.updateProjectionMatrix()));return v=1,T=!1,X||m.distanceToSquared(e.object.position)>G||8*(1-_.dot(e.object.quaternion))>G?(e.dispatchEvent(F),m.copy(e.object.position),_.copy(e.object.quaternion),X=!1,!0):!1}})(),this.connect=t=>{t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),e.domElement=t,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",Te),e.domElement.addEventListener("pointerdown",ye),e.domElement.addEventListener("pointercancel",ve),e.domElement.addEventListener("wheel",xe)},this.dispose=()=>{var t,o,a,s,m,_;(t=e.domElement)==null||t.removeEventListener("contextmenu",Te),(o=e.domElement)==null||o.removeEventListener("pointerdown",ye),(a=e.domElement)==null||a.removeEventListener("pointercancel",ve),(s=e.domElement)==null||s.removeEventListener("wheel",xe),(m=e.domElement)==null||m.ownerDocument.removeEventListener("pointermove",ne),(_=e.domElement)==null||_.ownerDocument.removeEventListener("pointerup",ae),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",ie)};const e=this,F={type:"change"},g={type:"start"},O={type:"end"},i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=i.NONE;const G=1e-6,u=new Ae,f=new Ae;let v=1;const N=new P,M=new y,j=new y,w=new y,A=new y,D=new y,L=new y,x=new y,p=new y,l=new y,Z=new P,E=new y;let T=!1;const r=[],W={};function Ie(){return 2*Math.PI/60/60*e.autoRotateSpeed}function B(){return Math.pow(.95,e.zoomSpeed)}function ee(t){e.reverseOrbit||e.reverseHorizontalOrbit?f.theta+=t:f.theta-=t}function re(t){e.reverseOrbit||e.reverseVerticalOrbit?f.phi+=t:f.phi-=t}const ce=(()=>{const t=new P;return function(a,s){t.setFromMatrixColumn(s,0),t.multiplyScalar(-a),N.add(t)}})(),le=(()=>{const t=new P;return function(a,s){e.screenSpacePanning===!0?t.setFromMatrixColumn(s,1):(t.setFromMatrixColumn(s,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(a),N.add(t)}})(),z=(()=>{const t=new P;return function(a,s){const m=e.domElement;if(m&&e.object instanceof Q&&e.object.isPerspectiveCamera){const _=e.object.position;t.copy(_).sub(e.target);let S=t.length();S*=Math.tan(e.object.fov/2*Math.PI/180),ce(2*a*S/m.clientHeight,e.object.matrix),le(2*s*S/m.clientHeight,e.object.matrix)}else m&&e.object instanceof $&&e.object.isOrthographicCamera?(ce(a*(e.object.right-e.object.left)/e.object.zoom/m.clientWidth,e.object.matrix),le(s*(e.object.top-e.object.bottom)/e.object.zoom/m.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function te(t){e.object instanceof Q&&e.object.isPerspectiveCamera||e.object instanceof $&&e.object.isOrthographicCamera?v/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function ue(t){e.object instanceof Q&&e.object.isPerspectiveCamera||e.object instanceof $&&e.object.isOrthographicCamera?v*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function pe(t){if(!e.zoomToCursor||!e.domElement)return;T=!0;const o=e.domElement.getBoundingClientRect(),a=t.clientX-o.left,s=t.clientY-o.top,m=o.width,_=o.height;E.x=a/m*2-1,E.y=-(s/_)*2+1,Z.set(E.x,E.y,1).unproject(e.object).sub(e.object.position).normalize()}function oe(t){return Math.max(e.minDistance,Math.min(e.maxDistance,t))}function de(t){M.set(t.clientX,t.clientY)}function Re(t){pe(t),x.set(t.clientX,t.clientY)}function me(t){A.set(t.clientX,t.clientY)}function Ce(t){j.set(t.clientX,t.clientY),w.subVectors(j,M).multiplyScalar(e.rotateSpeed);const o=e.domElement;o&&(ee(2*Math.PI*w.x/o.clientHeight),re(2*Math.PI*w.y/o.clientHeight)),M.copy(j),e.update()}function Ne(t){p.set(t.clientX,t.clientY),l.subVectors(p,x),l.y>0?te(B()):l.y<0&&ue(B()),x.copy(p),e.update()}function Se(t){D.set(t.clientX,t.clientY),L.subVectors(D,A).multiplyScalar(e.panSpeed),z(L.x,L.y),A.copy(D),e.update()}function ke(t){pe(t),t.deltaY<0?ue(B()):t.deltaY>0&&te(B()),e.update()}function Fe(t){let o=!1;switch(t.code){case e.keys.UP:z(0,e.keyPanSpeed),o=!0;break;case e.keys.BOTTOM:z(0,-e.keyPanSpeed),o=!0;break;case e.keys.LEFT:z(e.keyPanSpeed,0),o=!0;break;case e.keys.RIGHT:z(-e.keyPanSpeed,0),o=!0;break}o&&(t.preventDefault(),e.update())}function fe(){if(r.length==1)M.set(r[0].pageX,r[0].pageY);else{const t=.5*(r[0].pageX+r[1].pageX),o=.5*(r[0].pageY+r[1].pageY);M.set(t,o)}}function he(){if(r.length==1)A.set(r[0].pageX,r[0].pageY);else{const t=.5*(r[0].pageX+r[1].pageX),o=.5*(r[0].pageY+r[1].pageY);A.set(t,o)}}function be(){const t=r[0].pageX-r[1].pageX,o=r[0].pageY-r[1].pageY,a=Math.sqrt(t*t+o*o);x.set(0,a)}function ze(){e.enableZoom&&be(),e.enablePan&&he()}function Ye(){e.enableZoom&&be(),e.enableRotate&&fe()}function ge(t){if(r.length==1)j.set(t.pageX,t.pageY);else{const a=se(t),s=.5*(t.pageX+a.x),m=.5*(t.pageY+a.y);j.set(s,m)}w.subVectors(j,M).multiplyScalar(e.rotateSpeed);const o=e.domElement;o&&(ee(2*Math.PI*w.x/o.clientHeight),re(2*Math.PI*w.y/o.clientHeight)),M.copy(j)}function Ee(t){if(r.length==1)D.set(t.pageX,t.pageY);else{const o=se(t),a=.5*(t.pageX+o.x),s=.5*(t.pageY+o.y);D.set(a,s)}L.subVectors(D,A).multiplyScalar(e.panSpeed),z(L.x,L.y),A.copy(D)}function Pe(t){const o=se(t),a=t.pageX-o.x,s=t.pageY-o.y,m=Math.sqrt(a*a+s*s);p.set(0,m),l.set(0,Math.pow(p.y/x.y,e.zoomSpeed)),te(l.y),x.copy(p)}function Ue(t){e.enableZoom&&Pe(t),e.enablePan&&Ee(t)}function He(t){e.enableZoom&&Pe(t),e.enableRotate&&ge(t)}function ye(t){var o,a;e.enabled!==!1&&(r.length===0&&((o=e.domElement)==null||o.ownerDocument.addEventListener("pointermove",ne),(a=e.domElement)==null||a.ownerDocument.addEventListener("pointerup",ae)),Ge(t),t.pointerType==="touch"?Ke(t):Ze(t))}function ne(t){e.enabled!==!1&&(t.pointerType==="touch"?Ve(t):Xe(t))}function ae(t){var o,a,s;Oe(t),r.length===0&&((o=e.domElement)==null||o.releasePointerCapture(t.pointerId),(a=e.domElement)==null||a.ownerDocument.removeEventListener("pointermove",ne),(s=e.domElement)==null||s.ownerDocument.removeEventListener("pointerup",ae)),e.dispatchEvent(O),c=i.NONE}function ve(t){Oe(t)}function Ze(t){let o;switch(t.button){case 0:o=e.mouseButtons.LEFT;break;case 1:o=e.mouseButtons.MIDDLE;break;case 2:o=e.mouseButtons.RIGHT;break;default:o=-1}switch(o){case Y.DOLLY:if(e.enableZoom===!1)return;Re(t),c=i.DOLLY;break;case Y.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;me(t),c=i.PAN}else{if(e.enableRotate===!1)return;de(t),c=i.ROTATE}break;case Y.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;de(t),c=i.ROTATE}else{if(e.enablePan===!1)return;me(t),c=i.PAN}break;default:c=i.NONE}c!==i.NONE&&e.dispatchEvent(g)}function Xe(t){if(e.enabled!==!1)switch(c){case i.ROTATE:if(e.enableRotate===!1)return;Ce(t);break;case i.DOLLY:if(e.enableZoom===!1)return;Ne(t);break;case i.PAN:if(e.enablePan===!1)return;Se(t);break}}function xe(t){e.enabled===!1||e.enableZoom===!1||c!==i.NONE&&c!==i.ROTATE||(t.preventDefault(),e.dispatchEvent(g),ke(t),e.dispatchEvent(O))}function ie(t){e.enabled===!1||e.enablePan===!1||Fe(t)}function Ke(t){switch(Me(t),r.length){case 1:switch(e.touches.ONE){case U.ROTATE:if(e.enableRotate===!1)return;fe(),c=i.TOUCH_ROTATE;break;case U.PAN:if(e.enablePan===!1)return;he(),c=i.TOUCH_PAN;break;default:c=i.NONE}break;case 2:switch(e.touches.TWO){case U.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;ze(),c=i.TOUCH_DOLLY_PAN;break;case U.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Ye(),c=i.TOUCH_DOLLY_ROTATE;break;default:c=i.NONE}break;default:c=i.NONE}c!==i.NONE&&e.dispatchEvent(g)}function Ve(t){switch(Me(t),c){case i.TOUCH_ROTATE:if(e.enableRotate===!1)return;ge(t),e.update();break;case i.TOUCH_PAN:if(e.enablePan===!1)return;Ee(t),e.update();break;case i.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Ue(t),e.update();break;case i.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;He(t),e.update();break;default:c=i.NONE}}function Te(t){e.enabled!==!1&&t.preventDefault()}function Ge(t){r.push(t)}function Oe(t){delete W[t.pointerId];for(let o=0;o<r.length;o++)if(r[o].pointerId==t.pointerId){r.splice(o,1);return}}function Me(t){let o=W[t.pointerId];o===void 0&&(o=new y,W[t.pointerId]=o),o.set(t.pageX,t.pageY)}function se(t){const o=t.pointerId===r[0].pointerId?r[1]:r[0];return W[o.pointerId]}b!==void 0&&this.connect(b),this.update()}};const rt=k.forwardRef(({makeDefault:h,camera:d,regress:b,domElement:e,enableDamping:F=!0,keyEvents:g=!1,onChange:O,onStart:i,onEnd:c,...G},u)=>{const f=C(l=>l.invalidate),v=C(l=>l.camera),N=C(l=>l.gl),M=C(l=>l.events),j=C(l=>l.setEvents),w=C(l=>l.set),A=C(l=>l.get),D=C(l=>l.performance),L=d||v,x=e||M.connected||N.domElement,p=k.useMemo(()=>new st(L),[L]);return _e(()=>{p.enabled&&p.update()},-1),k.useEffect(()=>(g&&p.connect(g===!0?x:g),p.connect(x),()=>void p.dispose()),[g,x,b,p,f]),k.useEffect(()=>{const l=T=>{f(),b&&D.regress(),O&&O(T)},Z=T=>{i&&i(T)},E=T=>{c&&c(T)};return p.addEventListener("change",l),p.addEventListener("start",Z),p.addEventListener("end",E),()=>{p.removeEventListener("start",Z),p.removeEventListener("end",E),p.removeEventListener("change",l)}},[O,i,c,p,f,j]),k.useEffect(()=>{if(h){const l=A().controls;return w({controls:p}),()=>w({controls:l})}},[h,p]),k.createElement("primitive",ot({ref:u,object:p,enableDamping:F},G))}),ct=Qe({effectFactor:1.2,dispFactor:0,tex:void 0,tex2:void 0,disp:void 0},` varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,` varying vec2 vUv;
    uniform sampler2D tex;
    uniform sampler2D tex2;
    uniform sampler2D disp;
    uniform float _rot;
    uniform float dispFactor;
    uniform float effectFactor;
    void main() {
      vec2 uv = vUv;
      vec4 disp = texture2D(disp, uv);
      vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
      vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
      vec4 _texture = texture2D(tex, distortedPosition);
      vec4 _texture2 = texture2D(tex2, distortedPosition2);
      vec4 finalTexture = mix(_texture, _texture2, dispFactor);
      gl_FragColor = finalTexture;
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`);$e({ImageFadeMaterial:ct});function lt(){const h=k.useRef(),[d,b,e]=tt(["/notes_astro3/assets/xiaoGong.jpg","/notes_astro3/assets/xiaoGong.jpg","/notes_astro3/assets/xiaoGong.jpg"]),[F,g]=k.useState(!1);_e(()=>{h.current.dispFactor=et.lerp(h.current.dispFactor,F?1:0,.05)});const{viewport:O}=C();return H.jsxs("mesh",{scale:[O.width,O.height,1],onPointerOver:()=>g(!0),onClick:()=>{g(!F)},onPointerOut:()=>g(!1),children:[H.jsx("planeGeometry",{}),H.jsx("imageFadeMaterial",{ref:h,tex:d,tex2:b,disp:e,toneMapped:!1}),H.jsx(rt,{enablePan:!0,zoomSpeed:.5})]})}function Et(){return H.jsx(Je,{className:"max-w-[100vw]",style:{width:"250px",height:"208px",margin:"auto"},camera:{position:[0,0,2],fov:50},children:H.jsx(lt,{})})}export{Et as default};
