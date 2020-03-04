import { ctx } from "./context";
import { Mover } from "./mover";

ctx.resize();

const mover = new Mover();

const drawFrame = () => {
  const { clear, resize } = ctx;
  resize();
  clear();

  mover.update();
  mover.display();

  requestAnimationFrame(drawFrame);
};
requestAnimationFrame(drawFrame);
