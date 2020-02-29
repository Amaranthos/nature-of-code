/**
 *
 * @param {HTMLCanvasElement} canvas
 */
export const resize = canvas => () => {
  const { clientWidth, clientHeight } = canvas;
  if (canvas.width !== clientWidth || canvas.height !== clientHeight) {
    canvas.width = clientWidth;
    canvas.height = clientHeight;
  }
};
