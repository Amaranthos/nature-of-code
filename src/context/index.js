import { clear } from "./clear";

const ctx = (() => {
  /**
   * @type CanvasRenderingContext2D
   */
  const context = document.getElementById("render").getContext("2d");

  const height = context.canvas.height;
  const width = context.canvas.width;

  return {
    context,
    clear: clear(context),
    height,
    width
  };
})();

export { ctx };
