import {formatTime } from '../helper';
describe("unit: helper.ts file", () => {
  it("should return a formated value", () => {
    expect(formatTime(0)).toBe('00 : 00');
    expect(formatTime(60)).toBe('01 : 00');
    expect(formatTime(3600)).toBe('01 : 00 : 00');
  });
});