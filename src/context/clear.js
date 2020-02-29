/**
 * @param {CanvasRenderingContext2D} ctx
 */
const clear = ctx => () => {
  resize(ctx.canvas)();
  ctx.clearRect(0, 0, ctx.canvas.height, ctx.canvas.width);
};

/**
 *
 * @param {HTMLCanvasElement} canvas
 */
const resize = canvas => () => {
  const { clientWidth, clientHeight } = canvas;
  if (canvas.width !== clientWidth || canvas.height !== clientHeight) {
    canvas.width = clientWidth;
    canvas.height = clientHeight;
  }
};

export { clear, resize };
