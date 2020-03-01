/**
 * Returns the linear interpolation in the range [start, end]
 * @param {number} start
 * @param {number} end
 * @param {number} step between [0,1]
 * @returns {number}
 */
const lerp = (start, end, step) => (1.0 - step) * start + step * end;

export const math = {
  lerp
};
