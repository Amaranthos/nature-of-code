import { Random } from "./random";
import { switchcase } from "./utility";
import { ctx } from "./context";

/**
 *
 * @param {number} width
 * @param {number} height
 */
export class Walker {
  constructor(width, height) {
    this.x = width / 2;
    this.y = height / 2;
  }

  draw() {
    ctx.draw.point(this.x, this.y, 2);
  }

  /**
   * Makes a step in a random direction
   */
  step() {
    const choice = Random.int(4);
    switchcase({
      0: () => {
        this.x += 1;
      },
      1: () => {
        this.x -= 1;
      },
      2: () => {
        this.y += 1;
      },
      3: () => {
        this.y -= 1;
      }
    })()(choice);
  }
}
