import * as p5 from "p5";
import { Walker } from "./walker";

const doorWidth = 0.5 * 100;

new p5((s) => {
  s.windowResized = function () {
    s.resizeCanvas(window.innerWidth, window.innerHeight);
  };

  s.setup = function () {
    s.createCanvas(window.innerWidth, window.innerHeight);
    s.pixelDensity(1);
    s.background(0);
  };

  s.draw = function () {
    s.translate(s.width / 2, s.height / 2);

    // let pos = s.createVector(s.width / 2, s.height / 2);
    // let mouse = s.createVector(s.mouseX, s.mouseY);

    // let v = p5.Vector.sub(mouse, pos);
    // v.normalize();

    const from = s.createVector(-2, -1.5).mult(200);
    const to = s.createVector(2, -1.5).mult(200);
    const wallVec = p5.Vector.sub(to, from);

    s.strokeWeight(2);
    s.stroke(255, 50);
    s.line(from.x, from.y, to.x, to.y);
    // s.line(0, 0, wallVec.x, wallVec.y);

    const point = s.createVector(1.7, -1.5).mult(200);
    // const point = s.createVector(-1.4, -1.5).mult(200);
    s.stroke("red");
    s.line(0, 0, point.x, point.y);
    s.line(point.x - doorWidth, point.y, point.x + doorWidth, point.y);

    const leftBounds = wallVec.copy().setMag(doorWidth).add(from);
    const rightBounds = wallVec.copy().setMag(-doorWidth).add(to);

    s.stroke("blue");
    // s.line(0, 0, rightBounds.x, rightBounds.y);
    s.line(to.x, to.y, rightBounds.x, rightBounds.y);
    // s.line(0, 0, leftBounds.x, leftBounds.y);
    s.line(from.x, from.y, leftBounds.x, leftBounds.y);

    const a = p5.Vector.sub(point, leftBounds);
    const b = p5.Vector.sub(rightBounds, leftBounds);
    s.stroke("pink");
    s.line(
      leftBounds.x,
      leftBounds.y - 13,
      a.x + leftBounds.x,
      a.y + leftBounds.y - 13
    );
    s.stroke("magenta");
    s.line(
      leftBounds.x,
      leftBounds.y - 10,
      b.x + leftBounds.x,
      b.y + leftBounds.y - 10
    );

    const projectPoint = p5.Vector.add(leftBounds, projectUV(a, b));
    s.stroke("cyan");
    // s.line(leftBounds.x, leftBounds.y + 5, projectPoint.x, projectPoint.y + 5);
    s.line(0, 0, projectPoint.x, projectPoint.y);

    const distToStart = distanceToSquared(projectPoint, leftBounds);
    const distToEnd = distanceToSquared(projectPoint, rightBounds);
    const dist = distanceToSquared(leftBounds, rightBounds);

    s.stroke("#FFC300");
    s.line(
      leftBounds.x,
      projectPoint.y - 20,
      projectPoint.x,
      projectPoint.y - 20
    );
    s.stroke("#FFCC99");
    s.line(
      projectPoint.x,
      projectPoint.y - 23,
      rightBounds.x,
      projectPoint.y - 23
    );

    const clampedPoint = clampedProjection(
      projectPoint,
      leftBounds,
      rightBounds
    );
    s.stroke("lime");
    // s.line(leftBounds.x, leftBounds.y + 5, projectPoint.x, projectPoint.y + 5);
    s.line(0, 0, clampedPoint.x, clampedPoint.y);
    s.line(
      clampedPoint.x - doorWidth,
      clampedPoint.y - 5,
      clampedPoint.x + doorWidth,
      clampedPoint.y - 5
    );

    s.stroke(55);
    s.line(0, -s.height, 0, s.height);
    s.line(-s.width, 0, s.width, 0);
  };
});

const distanceToSquared = (a, b) => {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const dz = a.z - b.z;
  return dx * dx + dy * dy + dz * dz;
};

const projectUV = (u, v) => {
  return p5.Vector.mult(u, u.dot(v) / v.magSq());
};
const clampedProjection = (p, l, r) => {
  const distToStart = distanceToSquared(p, l);
  const distToEnd = distanceToSquared(p, r);
  const dist = distanceToSquared(l, r);

  if (distToStart > dist || distToEnd > dist) {
    if (distToStart > distToEnd) {
      return r;
    } else {
      return l;
    }
  } else {
    return p;
  }
};
