import type p5 from "p5";
import Basic from "../index";

export default () => {
  const sketch = (p: p5) => {
    let walker;
    p.setup = () => {
      p.createCanvas(640, 240);
      walker = new Walker();
      p.background(255);
    };
    p.draw = () => {
      walker.step();
      walker.show();
    };
    class Walker {
      x: number;
      y: number;
      constructor() {
        this.x = p.width / 2;
        this.y = p.height / 2;
      }
      show() {
        p.stroke(0);
        p.point(this.x, this.y);
      }
      step() {
        let r = p.random(1);
        let xStep = p.mouseX / p.width;
        let yStep = p.mouseY / p.height;
        if (r < xStep) {
          this.x++;
        } else {
          this.x--;
        }
        if (r < yStep) {
          this.y++;
        } else {
          this.y--;
        }
      }
    }
  };
  return <Basic sketch={sketch} showControls></Basic>;
};
