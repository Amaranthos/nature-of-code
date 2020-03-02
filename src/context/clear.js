/**
 * @param {CanvasRenderingContext2D} ctx
 */
export const clear = ctx => () => {
  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
};
