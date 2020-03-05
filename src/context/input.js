import { Vec } from "../vec";

const input = { mouse: Vec.zero(2) };

export const initialise = canvas => {
  canvas.addEventListener("mousemove", evt => {
    const rect = canvas.getBoundingClientRect();
    input.mouse = new Vec(evt.clientX - rect.x, evt.clientY - rect.y);
  });
  return input;
};
