import { noise } from "./noise";

/**
 * Returns an integer in the range [0, max)
 * @param {number} max
 * @returns {number}
 */
const int = max => Math.floor(Math.random() * max);

/**
 * Returns a float in the range [min, max)
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const range = (min, max) => Math.random() * (max - min) + min;

/**
 * Returns an integer in the range [min, max]
 * @param {number} min
 * @param {number} max
 */
const inclusive_range = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Returns a float with a gaussian distribution with mean and stdDev
 * @param {number} mean
 * @param {number} stdDev
 */
const distribution = (mean = 0, stdDev = 1) => Math.random() * stdDev + mean;

const monte_carlo = () => {
  while (true) {
    const rand = Math.random();
    if (Math.random() < rand) return rand;
  }
};

export const random = {
  int,
  range,
  inclusive_range,
  distribution,
  monte_carlo,
  noise
};
