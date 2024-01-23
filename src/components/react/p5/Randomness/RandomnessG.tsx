import type p5 from "p5";
import Basic from "@components/react/p5/index.tsx";
import { useState } from "react";

export default () => {
  const [xoffRate, setXoffRate] = useState(0.01);
  const sketch = (p: p5) => {
    const setup = () => {
      p.createCanvas(p.windowWidth / 2, 240);
    };
    const draw = () => {
      p.loadPixels();
      let xoff = 0.0;
      for (let x = 0; x < p.width; x++) {
        let yoff = 0.0;
        for (let y = 0; y < p.height; y++) {
          const bright = p.map(
            p.noise(xoff, yoff, p.frameCount * 0.009),
            0,
            1,
            0,
            255
          );
          const n = p.floor(bright);
          p.set(x, y, [n, n, n, n]);
          yoff += xoffRate;
        }
        xoff += 0.01;
      }
      p.updatePixels();
    };
    const resize = () => p.setup();
    p.setup = setup;
    p.draw = draw;
    p.windowResized = resize;
  };
  return (
    <>
      <div className=" grid-cols-1 grid-rows-1">
        <Basic sketch={sketch} showControls></Basic>
        {/* <input type="text" value={xoffRate} onChange={e=>setXoffRate(parseFloat(e.target.value))} /> */}
      </div>
    </>
  );
};
