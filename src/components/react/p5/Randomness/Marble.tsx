import type p5 from "p5";
import Basic from "@components/react/p5/index.tsx";

export default () => {
  const sketch = (p: p5) => {
    let w = p.windowWidth / 2;
    let h = (w * 4) / 7;
    let rows,
      cols,
      scl = 20;
    const setup = () => {
      p.createCanvas(w, h);
      cols = p.floor(p.width / 20);
      rows = p.floor(p.height / 20);
    };
    function colorizeMarble(noiseVal) {
      // 根据噪声值生成大理石颜色
      let marbleColor = p.map(noiseVal, 0, 1, 150, 255);
      return p.color(marbleColor);
    }
    const draw = () => {
      p.background(255);
      for (let y = 0; y <= rows; y++) {
        for (let x = 0; x <= cols; x++) {
          let noiseVal = p.noise(x * 0.1, y * 0.1); // 调整噪声的频率
          let marbleColor = colorizeMarble(noiseVal);

          p.fill(marbleColor);
          p.noStroke();
          p.rect(x * scl, y * scl, scl, scl);
        }
      }
    };
    const resize = () => p.setup();
    p.setup = setup;
    p.draw = draw;
    p.windowResized = resize;
  };
  return <Basic sketch={sketch} showControls></Basic>;
};
