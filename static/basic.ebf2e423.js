import{_ as i}from"./preload-helper.844f5565.js";import{j as c}from"./jsx-runtime.b792ae09.js";import{r as t}from"./index.499fac84.js";import"./_commonjsHelpers.de833af9.js";const u=()=>{let[o]=t.useState(` @grid: 18 / 50vmin / #0a0c27;
      --hue: calc(180 + 1.5 * @x * @y);
      background: hsl(var(--hue), 50%, 70%);
      margin: -.5px;
      transition: @r(.5s) ease;
      clip-path: polygon(@pick(
        '0 0, 100% 0, 100% 100%',
        '0 0, 100% 0, 0 100%',
        '0 0, 100% 100%, 0 100%',
        '100% 0, 100% 100%, 0 100%'
      ));
   `),[r,e]=t.useState(!1);const s=()=>{e(a=>!a)};return t.useEffect(()=>{i(()=>import("./index.cc0b802a.js"),[]).then(()=>{e(!0)})}),r&&c.jsx("css-doodle",{onClick:s,children:o})};export{u as default};
