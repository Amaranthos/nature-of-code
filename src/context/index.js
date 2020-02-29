import { clear, resize } from "./clear";
import { point } from "./draw";

const ctx = (() => {
  /**
   * @type CanvasRenderingContext2D
   */
  const context = document.getElementById("render").getContext("2d");

  const height = context.canvas.height;
  const width = context.canvas.width;

  return {
    context,
    height,
    width,
    clear: clear(context),
    resize: resize(context.canvas),
    draw: { point: point(context) }
  };
})();

export { ctx };
