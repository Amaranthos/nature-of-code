import { clear } from "./clear";
import { resize } from "./resize";
import { point } from "./draw";
import { initialise } from "./input";

const ctx = (() => {
  /**
   * @type CanvasRenderingContext2D
   */
  const context = document.getElementById("render").getContext("2d");

  return {
    context,
    clear: clear(context),
    resize: resize(context.canvas),
    draw: { point: point(context) },
    input: initialise(context.canvas)
  };
})();

export { ctx };
