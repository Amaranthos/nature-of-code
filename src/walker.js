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
    ctx.draw.point(this.x, this.y, 1);
  }

  /**
   * Makes a step in a random direction
   */
  step() {
    this.x += Random.range(-1, 1);
    this.y += Random.range(-1, 1);
  }
}
