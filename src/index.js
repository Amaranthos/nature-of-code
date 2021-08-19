import * as p5 from "p5";

const inc = 0.01;

new p5((s) => {
  s.setup = function () {
    s.createCanvas(400, 400);
    s.pixelDensity(1);
  };

  s.draw = function () {
    s.loadPixels();

    let yOff = 0;
    for (let y = 0; y < s.width; y++) {
      let xOff = 0;
      for (let x = 0; x < s.width; x++) {
        const idx = (x + y * s.width) * 4;
        const r = s.noise(xOff, yOff) * 255;
        s.pixels[idx + 0] = r;
        s.pixels[idx + 1] = r;
        s.pixels[idx + 2] = r;
        s.pixels[idx + 3] = 255;

        xOff += inc;
      }
      yOff += inc;
    }
    s.updatePixels();
    // s.noLoop();
  };
});
