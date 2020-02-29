/**
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} diameter
 * @param {string} colour
 */
const point = ctx => (x, y, diameter, colour = "black") => {
  const radius = diameter / 2;
  ctx.fillStyle = colour;
  ctx.fillRect(x - radius, y - radius, diameter, diameter);
};

export { point };
