import type p5 from "p5";
import Basic from "./index";

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
        const choice = p.floor(p.random(4));
        switch (choice) {
          case 0:
            this.x++;
            break;
          case 1:
            this.x--;
            break;
          case 2:
            this.y++;
            break;
          case 3:
            this.y--;
            break;
          default:
            break;
        }
      }
    }
  };
  return <Basic sketch={sketch}></Basic>;
};