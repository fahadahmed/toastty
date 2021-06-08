import {formatTime } from '../helper';
describe("unit: helper.ts file", () => {
  it("should return a formated value", () => {
    expect(formatTime(0)).toBe('00 : 00');
  });
});