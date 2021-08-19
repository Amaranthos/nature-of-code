import * as p5 from "p5";

new p5((sketch) => {
  sketch.setup = function () {
    sketch.createCanvas(400, 400);
  };

  sketch.draw = function () {
    sketch.background(0);
  };
});
