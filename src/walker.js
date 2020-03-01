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
    const dist = Random.distribution(0, 1);
    this.x += Random.inclusive_range(-1, 1) * dist;
    this.y += Random.inclusive_range(-1, 1) * dist;
  }
}
