import{j as n}from"./jsx-runtime.bkUup59_.js";import a from"./index.8PTsr6DN.js";import"./index.yqZja8WZ.js";import"./_commonjsHelpers.4gQjN7DL.js";import"./preload-helper.xfflGrcd.js";const c=()=>{const o=t=>{let s;t.setup=()=>{t.createCanvas(t.windowWidth/2,240),s=new i,t.background(255)},t.draw=()=>{s.step(),s.show()},t.windowResized=()=>{t.setup()};class i{x;y;constructor(){this.x=t.width/2,this.y=t.height/2}show(){t.stroke(0),t.point(this.x,this.y)}step(){let e=t.random(1),r=t.mouseX/t.width,h=t.mouseY/t.height;e<r?this.x++:this.x--,e<h?this.y++:this.y--}}};return n.jsx(a,{sketch:o,showControls:!0})};export{c as default};
