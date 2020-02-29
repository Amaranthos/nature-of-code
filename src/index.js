import { ctx } from "./context";
import { Walker } from "./walker";
import { Random } from "./random";

const walker = new Walker(ctx.height, ctx.width);

const drawFrame = () => {
  const { context, clear, resize } = ctx;
  resize();
  // clear();

  walker.step();
  walker.draw(context);

  requestAnimationFrame(drawFrame);
};
requestAnimationFrame(drawFrame);
