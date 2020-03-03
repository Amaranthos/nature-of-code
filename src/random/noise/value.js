import { math } from "../../math";
import { hash, hashMask } from "./hash";
import { smooth } from "./smooth";

const oneD = (px, frequency = 1) => {
  const fx = px * frequency;
  let i0 = Math.floor(fx);
  const t = fx - i0;
  i0 &= hashMask;

  const i1 = i0 + 1;

  const h0 = hash[i0];
  const h1 = hash[i1];
  return math.lerp(h0, h1, smooth(t)) * (1 / hashMask);
};

const twoD = (px, py, frequency = 1) => {
  const [fx, fy] = [px, py].map(v => v * frequency);

  let [ix0, iy0] = [fx, fy].map(v => Math.floor(v));

  const [tx, ty] = [fx - ix0, fy - iy0].map(v => smooth(v));

  ix0 &= hashMask;
  iy0 &= hashMask;

  const [ix1, iy1] = [ix0 + 1, iy0 + 1];

  const h0 = hash[ix0];
  const h1 = hash[ix1];
  const h00 = hash[h0 + iy0];
  const h10 = hash[h1 + iy0];
  const h01 = hash[h0 + iy1];
  const h11 = hash[h1 + iy1];

  return (
    math.lerp(math.lerp(h00, h10, tx), math.lerp(h01, h11, tx), ty) *
    (1 / hashMask)
  );
};

const threeD = (px, py, pz, frequency = 1) => {
  const [fx, fy, fz] = [px, py, pz].map(v => v * frequency);

  let [ix0, iy0, iz0] = [fx, fy, fz].map(v => Math.floor(v));

  const [tx, ty, tz] = [fx - ix0, fy - iy0, fz - iz0].map(v => smooth(v));

  ix0 &= hashMask;
  iy0 &= hashMask;
  iz0 &= hashMask;

  const [ix1, iy1, iz1] = [ix0 + 1, iy0 + 1, iz0 + 1];

  const h0 = hash[ix0];
  const h1 = hash[ix1];
  const h00 = hash[h0 + iy0];
  const h10 = hash[h1 + iy0];
  const h01 = hash[h0 + iy1];
  const h11 = hash[h1 + iy1];
  const h000 = hash[h00 + iz0];
  const h100 = hash[h10 + iz0];
  const h010 = hash[h01 + iz0];
  const h110 = hash[h11 + iz0];
  const h001 = hash[h00 + iz1];
  const h101 = hash[h10 + iz1];
  const h011 = hash[h01 + iz1];
  const h111 = hash[h11 + iz1];

  return (
    math.lerp(
      math.lerp(math.lerp(h000, h100, tx), math.lerp(h010, h110, tx), ty),
      math.lerp(math.lerp(h001, h101, tx), math.lerp(h011, h111, tx), ty),
      tz
    ) *
    (1 / hashMask)
  );
};

export const value = { oneD, twoD, threeD };
