import { ctx } from "./context";
import { Walker } from "./walker";

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
