import{j as e}from"./jsx-runtime.bkUup59_.js";import{R as N,r as o}from"./index.yqZja8WZ.js";import{g as H}from"./_commonjsHelpers.4gQjN7DL.js";var b={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var a={}.hasOwnProperty;function s(){for(var n="",r=0;r<arguments.length;r++){var c=arguments[r];c&&(n=d(n,i(c)))}return n}function i(n){if(typeof n=="string"||typeof n=="number")return n;if(typeof n!="object")return"";if(Array.isArray(n))return s.apply(null,n);if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]"))return n.toString();var r="";for(var c in n)a.call(n,c)&&n[c]&&(r=d(r,c));return r}function d(n,r){return r?n?n+" "+r:n+r:n}t.exports?(s.default=s,t.exports=s):window.classNames=s})()})(b);var S=b.exports;const m=H(S),D=()=>({left:0,x:0}),l={clamp:(t,a,s)=>Math.min(Math.max(t,a),s),rand:(t,a)=>Math.floor(Math.random()*(a-t+1)+t)},g={format:t=>{const a=g.formatHours(t.getHours()),s=t.getMinutes();return t.getSeconds(),`${a}:${g.formatSegment(s)}`},formatHours:t=>t%12===0?12:t%12,formatSegment:t=>t<10?`0${t}`:t},W={verify:async t=>new Promise((a,s)=>{setTimeout(()=>{t==="1234"?a(!0):s(`Invalid pin: ${t}`)},l.rand(300,700))})},C=()=>{const[t,a]=o.useState(new Date);return o.useEffect(()=>{const s=setInterval(()=>{const i=new Date;i.getSeconds()!==t.getSeconds()&&a(i)},100);return()=>clearInterval(s)},[t]),t},j=t=>{const a=o.useRef(null),[s,i]=o.useState({grabbing:!1,position:D()}),d=c=>{i({...s,grabbing:!0,position:{x:c.clientX,left:a.current.scrollLeft}})},n=c=>{if(s.grabbing){const x=Math.max(0,s.position.left+(s.position.x-c.clientX));a.current.scrollLeft=x}},r=()=>{s.grabbing&&i({...s,grabbing:!1})};return e.jsx("div",{ref:a,className:m("scrollable-component",t.className),id:t.id,onMouseDown:d,onMouseMove:n,onMouseUp:r,onMouseLeave:r,children:t.children})},I=()=>{const[t]=o.useState(l.rand(65,85));return e.jsxs("span",{className:"weather",children:[e.jsx("i",{className:"weather-type fa-duotone fa-sun"}),e.jsx("span",{className:"weather-temperature-value",children:t}),e.jsx("span",{className:"weather-temperature-unit",children:"°F"})]})},T=()=>e.jsxs("div",{className:"reminder",children:[e.jsx("div",{className:"reminder-icon",children:e.jsx("i",{className:"fa-regular fa-bell"})}),e.jsxs("span",{className:"reminder-text",children:["Extra cool people meeting",e.jsx("span",{className:"reminder-time",children:"10AM"})]})]}),Z=()=>{const t=C();return e.jsx("span",{className:"time",children:g.format(t)})},w=t=>e.jsxs("div",{id:t.id,className:"info",children:[e.jsx(Z,{}),e.jsx(I,{})]}),u=t=>{const[a,s]=o.useState(!1);return o.useEffect(()=>{if(t.value){const i=setTimeout(()=>{s(!0)},500);return()=>{s(!1),clearTimeout(i)}}},[t.value]),e.jsx("div",{className:m("app-pin-digit",{focused:t.focused,hidden:a}),children:e.jsx("span",{className:"app-pin-digit-value",children:t.value||""})})},k=()=>{const{userStatus:t,setUserStatusTo:a}=o.useContext(h),[s,i]=o.useState(""),d=o.useRef(null);o.useEffect(()=>{t==="Logging In"||t==="Log In Error"?d.current.focus():i("")},[t]),o.useEffect(()=>{s.length===4&&(async()=>{try{a("Verifying Log In"),await W.verify(s)&&a("Logged In")}catch(y){console.error(y),a("Log In Error")}})(),t==="Log In Error"&&a("Logging In")},[s]);const n=()=>{d.current.focus()},r=()=>{a("Logged Out")},c=p=>{p.target.value.length<=4&&i(p.target.value.toString())},x=()=>e.jsx("span",{id:"app-pin-cancel-text",onClick:r,children:"Cancel"}),v=()=>{if(t==="Log In Error")return e.jsx("span",{id:"app-pin-error-text",children:"Invalid"})};return e.jsxs("div",{id:"app-pin-wrapper",children:[e.jsx("input",{disabled:t!=="Logging In"&&t!=="Log In Error",id:"app-pin-hidden-input",maxLength:4,ref:d,type:"number",value:s,onChange:c}),e.jsxs("div",{id:"app-pin",onClick:n,children:[e.jsx(u,{focused:s.length===0,value:s[0]}),e.jsx(u,{focused:s.length===1,value:s[1]}),e.jsx(u,{focused:s.length===2,value:s[2]}),e.jsx(u,{focused:s.length===3,value:s[3]})]}),e.jsxs("h3",{id:"app-pin-label",children:["Enter PIN (1234) ",v()," ",x()]})]})},f=t=>{const a=()=>t.scrollable?e.jsx(j,{className:"menu-section-content",children:t.children}):e.jsx("div",{className:"menu-section-content",children:t.children});return e.jsxs("div",{id:t.id,className:"menu-section",children:[e.jsxs("div",{className:"menu-section-title",children:[e.jsx("i",{className:t.icon}),e.jsx("span",{className:"menu-section-title-text",children:t.title})]}),a()]})},A=()=>{const t=()=>[{id:1,label:"Weather"},{id:2,label:"Food"},{id:3,label:"Apps"},{id:4,label:"Movies"}].map(a=>e.jsx("div",{className:"quick-nav-item clear-button",children:e.jsx("span",{className:"quick-nav-item-label",children:a.label})},a.id));return e.jsx(j,{id:"quick-nav",children:t()})},B=()=>{const t=()=>[{id:1,name:"Mon",temperature:l.rand(60,80),weather:"Sunny"},{id:2,name:"Tues",temperature:l.rand(60,80),weather:"Sunny"},{id:3,name:"Wed",temperature:l.rand(60,80),weather:"Cloudy"},{id:4,name:"Thurs",temperature:l.rand(60,80),weather:"Rainy"},{id:5,name:"Fri",temperature:l.rand(60,80),weather:"Stormy"},{id:6,name:"Sat",temperature:l.rand(60,80),weather:"Sunny"},{id:7,name:"Sun",temperature:l.rand(60,80),weather:"Cloudy"}].map(a=>{const s=()=>{switch(a.weather){case"Cloudy":return"fa-duotone fa-clouds";case"Rainy":return"fa-duotone fa-cloud-drizzle";case"Stormy":return"fa-duotone fa-cloud-bolt";case"Sunny":return"fa-duotone fa-sun"}};return e.jsx("div",{className:"day-card",children:e.jsxs("div",{className:"day-card-content",children:[e.jsxs("span",{className:"day-weather-temperature",children:[a.temperature,e.jsx("span",{className:"day-weather-temperature-unit",children:"°F"})]}),e.jsx("i",{className:m("day-weather-icon",s(),a.weather.toLowerCase())}),e.jsx("span",{className:"day-name",children:a.name})]})},a.id)});return e.jsx(f,{icon:"fa-solid fa-sun",id:"weather-section",scrollable:!0,title:"How's it look out there?",children:t()})},Y=()=>{const t=()=>[{icon:"fa-solid fa-cloud-sun",id:1,image:"https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",label:"Weather",name:"Cloudly"},{icon:"fa-solid fa-calculator-simple",id:2,image:"https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FsY3VsYXRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",label:"Calc",name:"Mathio"},{icon:"fa-solid fa-piggy-bank",id:3,image:"https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",label:"Bank",name:"Cashy"},{icon:"fa-solid fa-plane",id:4,image:"https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycGxhbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",label:"Travel",name:"Fly-er-io-ly"},{icon:"fa-solid fa-gamepad-modern",id:5,image:"https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmlkZW8lMjBnYW1lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",label:"Games",name:"Gamey"},{icon:"fa-solid fa-video",id:6,image:"https://images.unsplash.com/photo-1578022761797-b8636ac1773c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpZGVvJTIwY2hhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",label:"Video Chat",name:"Chatty"}].map(a=>{const s={backgroundImage:`url(${a.image})`};return e.jsxs("div",{className:"tool-card",children:[e.jsx("div",{className:"tool-card-background background-image",style:s}),e.jsxs("div",{className:"tool-card-content",children:[e.jsxs("div",{className:"tool-card-content-header",children:[e.jsx("span",{className:"tool-card-label",children:a.label}),e.jsx("span",{className:"tool-card-name",children:a.name})]}),e.jsx("i",{className:m(a.icon,"tool-card-icon")})]})]},a.id)});return e.jsx(f,{icon:"fa-solid fa-toolbox",id:"tools-section",title:"What's Appening?",children:t()})},F=()=>{const t=()=>[{desc:"The best burgers in town",id:1,image:"https://images.unsplash.com/photo-1606131731446-5568d87113aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",title:"Burgers"},{desc:"The worst ice-cream around",id:2,image:"https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aWNlJTIwY3JlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",title:"Ice Cream"},{desc:"This 'Za be gettin down",id:3,image:"https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",title:"Pizza"},{desc:"BBQ ain't need no rhyme",id:4,image:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFyYmVxdWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",title:"BBQ"}].map(a=>{const s={backgroundImage:`url(${a.image})`};return e.jsx("div",{className:"restaurant-card background-image",style:s,children:e.jsx("div",{className:"restaurant-card-content",children:e.jsxs("div",{className:"restaurant-card-content-items",children:[e.jsx("span",{className:"restaurant-card-title",children:a.title}),e.jsx("span",{className:"restaurant-card-desc",children:a.desc})]})})},a.id)});return e.jsx(f,{icon:"fa-regular fa-pot-food",id:"restaurants-section",title:"Get it delivered!",children:t()})},L=()=>{const t=()=>[{desc:"A tale of some people watching over a large portion of space.",id:1,icon:"fa-solid fa-galaxy",image:"https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFydmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",title:"Protectors of the Milky Way"},{desc:"Some people leave their holes to disrupt some things.",id:2,icon:"fa-solid fa-hat-wizard",image:"https://images.unsplash.com/photo-1535666669445-e8c15cd2e7d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9yZCUyMG9mJTIwdGhlJTIwcmluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",title:"Hole People"},{desc:"A boy with a dent in his head tries to stop a bad guy. And by bad I mean bad at winning.",id:3,icon:"fa-solid fa-broom-ball",image:"https://images.unsplash.com/photo-1632266484284-a11d9e3a460a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",title:"Pot of Hair"},{desc:"A long drawn out story of some people fighting over some space. Cuz there isn't enough of it.",id:4,icon:"fa-solid fa-starship-freighter",image:"https://images.unsplash.com/photo-1533613220915-609f661a6fe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhciUyMHdhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",title:"Area Fights"}].map(a=>{const s={backgroundImage:`url(${a.image})`},i=`movie-card-${a.id}`;return e.jsxs("div",{id:i,className:"movie-card",children:[e.jsx("div",{className:"movie-card-background background-image",style:s}),e.jsxs("div",{className:"movie-card-content",children:[e.jsxs("div",{className:"movie-card-info",children:[e.jsx("span",{className:"movie-card-title",children:a.title}),e.jsx("span",{className:"movie-card-desc",children:a.desc})]}),e.jsx("i",{className:a.icon})]})]},a.id)});return e.jsx(f,{icon:"fa-solid fa-camera-movie",id:"movies-section",scrollable:!0,title:"Popcorn time!",children:t()})},M=t=>{const{userStatus:a,setUserStatusTo:s}=o.useContext(h),i=()=>{s(t.userStatus)};return e.jsx("button",{id:t.id,className:"user-status-button clear-button",disabled:a===t.userStatus,type:"button",onClick:i,children:e.jsx("i",{className:t.icon})})},z=()=>e.jsx("div",{id:"app-menu",children:e.jsx("div",{id:"app-menu-content-wrapper",children:e.jsxs("div",{id:"app-menu-content",children:[e.jsxs("div",{id:"app-menu-content-header",children:[e.jsxs("div",{className:"app-menu-content-header-section",children:[e.jsx(w,{id:"app-menu-info"}),e.jsx(T,{})]}),e.jsx("div",{className:"app-menu-content-header-section",children:e.jsx(M,{icon:"fa-solid fa-arrow-right-from-arc",id:"sign-out-button",userStatus:"Logged Out"})})]}),e.jsx(A,{}),e.jsxs("a",{id:"youtube-link",className:"clear-button",href:"https://www.youtube.com/c/Hyperplexed",target:"_blank",children:[e.jsx("i",{className:"fa-brands fa-youtube"}),e.jsx("span",{children:"Hyperplexed"})]}),e.jsx(B,{}),e.jsx(F,{}),e.jsx(Y,{}),e.jsx(L,{})]})})}),q=()=>{const{userStatus:t,setUserStatusTo:a}=o.useContext(h),s=()=>{t==="Logged Out"&&a("Logging In")};return e.jsx("div",{id:"app-background",onClick:s,children:e.jsx("div",{id:"app-background-image",className:"background-image"})})},E=()=>e.jsx("div",{id:"app-loading-icon",children:e.jsx("i",{className:"fa-solid fa-spinner-third"})}),h=N.createContext(null),P=()=>{const[t,a]=o.useState("Logged Out"),s=()=>t.replace(/\s+/g,"-").toLowerCase();return e.jsx(h.Provider,{value:{userStatus:t,setUserStatusTo:a},children:e.jsxs("div",{id:"app",className:s(),children:[e.jsx(w,{id:"app-info"}),e.jsx(k,{}),e.jsx(z,{}),e.jsx(q,{}),e.jsx("div",{id:"sign-in-button-wrapper",children:e.jsx(M,{icon:"fa-solid fa-arrow-right-to-arc",id:"sign-in-button",userStatus:"Logging In"})}),e.jsx(E,{})]})})};export{P as default};
