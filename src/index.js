import { ctx } from "./context";
import { Walker } from "./walker";
import { random } from "./random";

const { context } = ctx;
ctx.resize();

const walker = new Walker(context.canvas.width, context.canvas.height);

const drawFrame = () => {
  const { clear, resize } = ctx;
  resize();
  // clear();

  walker.step();
  walker.draw(context);

  requestAnimationFrame(drawFrame);
};
requestAnimationFrame(drawFrame);
