/**
 * Returns random integer between 0 and max
 * @param {number} max
 * @returns {number}
 */
const int = max => Math.floor(Math.random() * max);

/**
 * Returns random float between min and max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const range = (min, max) => Math.random() * (max - min) + min;

const inclusive_range = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const Random = {
  int,
  range,
  inclusive_range
};
