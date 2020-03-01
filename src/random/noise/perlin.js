import { hash, hashMask } from "./hash";
import { smooth } from "./smooth";
import { math } from "../../math";

const dot = ([vx, vy], x, y) => vx * x + vy * y;

const normalize = v => {
  const length = Math.sqrt(v.reduce((s, e) => (s += e * e)));
  return length === 0 ? [0, 0, 0] : v.map(e => e / length);
};

const gradients1D = [1, -1];
const gradientsMask1D = 1;

const gradients2D = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  normalize([1, 1]),
  normalize([-1, 1]),
  normalize([1, -1]),
  normalize([-1, -1])
];
const gradientsMask2D = 7;

const oneD = (px, frequency = 1) => {
  const fx = px * frequency;
  let i0 = Math.floor(fx);
  const t0 = fx - i0;
  const t1 = t0 - 1;
  i0 &= hashMask;

  const i1 = i0 + 1;

  const g0 = gradients1D[hash[i0] & gradientsMask1D];
  const g1 = gradients1D[hash[i1] & gradientsMask1D];

  const value = math.lerp(g0 * t0, g1 * t1, smooth(t0));
  return value + 0.5;
};

const twoD = (px, py, frequency = 1) => {
  const [fx, fy] = [px, py].map(v => v * frequency);
  let [ix0, iy0] = [fx, fy].map(v => Math.floor(v));

  const [tx0, ty0] = [fx - ix0, fy - iy0];
  const [tx1, ty1] = [tx0 - 1, ty0 - 1];

  ix0 &= hashMask;
  iy0 &= hashMask;

  const [ix1, iy1] = [ix0 + 1, iy0 + 1];

  const [h0, h1] = [hash[ix0], hash[ix1]];

  const g00 = gradients2D[hash[h0 + iy0] & gradientsMask2D];
  const g10 = gradients2D[hash[h1 + iy0] & gradientsMask2D];
  const g01 = gradients2D[hash[h0 + iy1] & gradientsMask2D];
  const g11 = gradients2D[hash[h1 + iy1] & gradientsMask2D];

  const v00 = dot(g00, tx0, ty0);
  const v10 = dot(g10, tx1, ty0);
  const v01 = dot(g01, tx0, ty1);
  const v11 = dot(g11, tx1, ty1);

  const tx = smooth(tx0);
  const ty = smooth(ty0);
  const value =
    math.lerp(math.lerp(v00, v10, tx), math.lerp(v01, v11, tx), ty) *
    Math.SQRT2;
  return value * 0.5 + 0.5;
};

const threeD = (px, py, pz, frequency = 1) => {};

export const perlin = { oneD, twoD, threeD };
