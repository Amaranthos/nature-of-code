import { ctx } from "./context";
import { Walker } from "./walker";
import { Random } from "./random";

const walker = new Walker(ctx.width, ctx.height);

const drawFrame = () => {
  const { context, clear, resize } = ctx;
  resize();
  // clear();

  walker.step();
  walker.draw(context);

  requestAnimationFrame(drawFrame);
};
requestAnimationFrame(drawFrame);
