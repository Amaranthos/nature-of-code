import { Vec } from "./index";

describe("Vec", () => {
  it("can be constructed from an array", () => {
    const vec = new Vec([1, 2]);
    expect(vec.x).toEqual(1);
    expect(vec.y).toEqual(2);
  });

  it("can be constructed from values", () => {
    const vec = new Vec(1, 2);
    expect(vec.x).toEqual(1);
    expect(vec.y).toEqual(2);
  });

  describe("equals", () => {
    it.each([[new Vec(0, 0), new Vec(0, 0)]])("%s should equal %s", (a, b) => {
      expect(a.equals(b)).toBeTruthy();
    });
  });

  describe("add", () => {
    it.each([
      [new Vec(0, 0), new Vec(0, 0), new Vec(0, 0)],
      [new Vec(1, 1), new Vec(0, 0), new Vec(1, 1)],
      [new Vec(1, 1), new Vec(1, 1), new Vec(2, 2)]
    ])("%s + %s should be %s", (a, b, r) => {
      expect(a.add(b).equals(r)).toBeTruthy();
    });
  });

  describe("minus", () => {
    it.each([
      [new Vec(0, 0), new Vec(0, 0), new Vec(0, 0)],
      [new Vec(1, 1), new Vec(0, 0), new Vec(1, 1)],
      [new Vec(1, 1), new Vec(1, 1), new Vec(0, 0)]
    ])("%s - %s should be %s", (a, b, r) => {
      expect(a.minus(b).equals(r)).toBeTruthy();
    });
  });

  describe("multiply", () => {
    it.each([
      [new Vec(0, 0), 1, new Vec(0, 0)],
      [new Vec(1, 1), 1, new Vec(1, 1)],
      [new Vec(1, 1), 2, new Vec(2, 2)]
    ])("%s * %s should be %s", (v, s, r) => {
      expect(v.multiply(s).equals(r)).toBeTruthy();
    });
  });

  describe("magnitude", () => {
    it.each([
      [new Vec(0, 0), 0],
      [new Vec(3, 4), 5],
      [new Vec(0, 4), 4]
    ])("the magnitude of %s should be %s", (v, r) => {
      expect(v.magnitude()).toEqual(r);
    });
  });

  describe("normalization", () => {
    it.each([
      [new Vec(0, 0), new Vec(0, 0)],
      [new Vec(3, 4), new Vec(0.6, 0.8)],
      [new Vec(0, 4), new Vec(0, 1)]
    ])("the magnitude of %s should be %s", (v, r) => {
      expect(v.normalized().equals(r)).toBeTruthy();
    });
  });
});
