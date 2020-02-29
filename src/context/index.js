import { clear } from "./clear";
import { resize } from "./resize";
import { point } from "./draw";

const ctx = (() => {
  /**
   * @type CanvasRenderingContext2D
   */
  const context = document.getElementById("render").getContext("2d");

  return {
    context,
    height: context.canvas.clientHeight,
    width: context.canvas.clientWidth,
    clear: clear(context),
    resize: resize(context.canvas),
    draw: { point: point(context) }
  };
})();

export { ctx };
