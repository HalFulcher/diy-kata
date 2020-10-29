const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
it("returns returns array of human, cat and dog years when passed human years", () => {
    expect(humanCatDogYears(10)).toBe[10, 56, 64]
    expect(humanCatDogYears(1)).toBe[1, 15, 15];
    expect(humanCatDogYears(2)).toBe[2, 24, 24];
})
})
