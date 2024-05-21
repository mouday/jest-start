import { sum } from "../src/math.js";

test("sum(2 + 2) 等于 4", () => {
  expect(sum(2, 2)).toBe(4);
});
