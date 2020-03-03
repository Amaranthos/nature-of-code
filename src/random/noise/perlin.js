import { hash, hashMask } from "./hash";
import { smooth } from "./smooth";

export const perlin = (x, y, z) => {
  const [ux, uy, uz] = [x, y, z].map(v => Math.floor(v) & hashMask);

  const [rx, ry, rz] = [
    x - Math.floor(x),
    y - Math.floor(y),
    z - Math.floor(z)
  ];

  const [fx, fy, fz] = [rx, ry, rz].map(smooth);

  const a = hash[ux] + uy;
  const aa = hash[a] + uz;
  const ab = hash[a + 1] + uz;
  const b = hash[ux + 1] + uy;
  const ba = hash[b] + uz;
  const bb = hash[b + 1] + uz;

  return scale(
    lerp(
      fz,
      lerp(
        fy,
        lerp(
          fx,
          gradient(hash[aa], rx, ry, rz),
          gradient(hash[ba], rx - 1, ry, rz)
        ),
        lerp(
          fx,
          gradient(hash[ab], rx, ry - 1, rz),
          gradient(hash[bb], rx - 1, ry - 1, rz)
        )
      ),
      lerp(
        fy,
        lerp(
          fx,
          gradient(hash[aa + 1], rx, ry, rz - 1),
          gradient(hash[ba + 1], rx - 1, ry, rz - 1)
        ),
        lerp(
          fx,
          gradient(hash[ab + 1], rx, ry - 1, rz - 1),
          gradient(hash[bb + 1], rx - 1, ry - 1, rz - 1)
        )
      )
    )
  );
};

const lerp = (t, a, b) => a + t * (b - a);
const scale = v => (1 + v) / 2;
const gradient = (h, x, y, z) => {
  const hh = h & 15;
  const u = hh < 8 ? x : y;
  const v = hh < 4 ? y : hh === 12 || hh === 14 ? x : z;
  return ((hh & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
};
