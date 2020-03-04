import { Vec } from "./vec";
import { ctx } from "./context";

const {
  context: {
    canvas: { clientWidth: width, clientHeight: height }
  }
} = ctx;

export class Mover {
  constructor() {
    this.position = new Vec(width / 2, height / 2);
    this.velocity = Vec.zero(2);
    this.acceleration = Vec.zero(2);
  }

  update = () => {
    this.acceleration = Vec.random();
    this.velocity = this.velocity.add(this.acceleration);
    this.velocity = this.velocity.limit(10);
    this.position = this.position.add(this.velocity);

    if (this.position.x > width) this.position.x = 0;
    else if (this.position.x < 0) this.position.x = width;

    if (this.position.y > height) this.position.y = 0;
    else if (this.position.y < 0) this.position.y = height;
  };

  display = () => {
    const { context } = ctx;
    context.beginPath();
    context.arc(this.position.x, this.position.y, 25, 0, 2 * Math.PI);
    context.fillStyle = "#494949";
    context.fill();
    context.lineWidth = 2;
    context.stroke();
  };
}
