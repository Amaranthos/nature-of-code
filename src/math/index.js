/**
 * Returns the linear interpolation in the range [start, end]
 * @param {number} start
 * @param {number} end
 * @param {number} step between [0,1]
 * @returns {number}
 */
const lerp = (start, end, step) => (1.0 - step) * start + step * end;

/**
 *
 * @param {number} x
 * @param {number} min
 * @param {number} max
 */
const map_range = (x, [a, b], [c, d]) => ((x - a) / (b - a)) * (d - c) + c;

export const math = {
  lerp,
  map_range
};
