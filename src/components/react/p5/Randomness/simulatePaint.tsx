import type p5 from "p5";
import Basic from "@components/react/p5/index.tsx";
import { useCallback, useRef, useState } from "react";

export default () => {
  let [sd, setSd] = useState(60);
  const slider = useRef(null);
  const sketch = useCallback(
    (p: p5) => {
      const setup = () => {
        p.createCanvas(p.windowWidth / 2, 240);
        p.background("aliceblue");
      };
      const draw = () => {
        let x = p.randomGaussian(p.width / 2, sd);
        let y = p.randomGaussian(p.height / 2, sd);
        p.noStroke();
        p.fill(0, 100);
        p.circle(x, y, p.random(16));
      };
      const resize = () => p.setup();
      p.setup = setup;
      p.draw = draw;
      p.windowResized = resize;
    },
    [sd]
  );
  const handleSliderChange = e => {
    setSd(Number(e.target.value));
  };
  return (
    <>
      <input
        type="range"
        className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
        ref={slider}
        value={sd}
        onChange={handleSliderChange}
      />
      <Basic sketch={sketch} showControls></Basic>
    </>
  );
};
