import { ctx } from "./context";

import { Vec } from "./vec";

const {
  context: {
    canvas: { clientWidth: width, clientHeight: height }
  }
} = ctx;
ctx.resize();

const radius = 18;

const position = new Vec(width / 2, height / 2);
const velocity = new Vec(1, 3.3);

const drawFrame = () => {
  const { clear, resize, context } = ctx;
  resize();
  clear();

  position.x += velocity.x;
  position.y += velocity.y;

  if (position.x + radius > width || position.x - radius < 0) velocity.x *= -1;
  if (position.y + radius > height || position.y - radius < 0) velocity.y *= -1;

  context.beginPath();
  context.arc(position.x, position.y, radius, 0, 2 * Math.PI);
  context.fillStyle = "#494949";
  context.fill();
  context.lineWidth = 2;
  context.stroke();

  requestAnimationFrame(drawFrame);
};
requestAnimationFrame(drawFrame);
