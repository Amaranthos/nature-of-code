// @ts-check
const canvas = document.getElementById("render");
/**
 * @type CanvasRenderingContext2D
 */
const ctx = canvas.getContext("2d");

const drawFrame = () => {
  clear(ctx, canvas);

  ctx.lineWidth = 10;
  ctx.strokeRect(75, 140, 150, 110);

  ctx.fillRect(130, 190, 40, 60);
  ctx.moveTo(50, 140);
  ctx.lineTo(150, 60);
  ctx.lineTo(250, 140);
  ctx.closePath();
  ctx.stroke();

  requestAnimationFrame(drawFrame);
};
requestAnimationFrame(drawFrame);

/**
 * @param {CanvasRenderingContext2D} ctx
 */
const clear = ctx => {
  resizeCanvas(ctx.canvas);
  ctx.clearRect(0, 0, ctx.canvas.height, ctx.canvas.width);
};

/**
 *
 * @param {HTMLCanvasElement} canvas
 */
const resizeCanvas = canvas => {
  const { clientWidth, clientHeight } = canvas;
  if (canvas.width !== clientWidth || canvas.height !== clientHeight) {
    canvas.width = clientWidth;
    canvas.height = clientHeight;
  }
};
