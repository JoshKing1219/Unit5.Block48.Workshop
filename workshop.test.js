const { isStringValid } = require("./question1");
const { timeToBuyTickets } = require("./question2");
const { heightChecker } = require("./question3");
const { queueManager } = require("./question4");

describe("isStringValid", () => {
  it("passes test 1", () => {
    expect(isStringValid("()")).toBe(true);
  });

  it("passes test 2", () => {
    expect(isStringValid("[][(){}")).toBe(false);
  });

  it("passes test 3", () => {
    expect(isStringValid("({)}")).toBe(false);
  });

  it("passes test 4", () => {
    expect(isStringValid("({[]})")).toBe(true);
  });
});

describe("  timeToBuyTickets,", () => {
  it("passes test 1", () => {
    expect(timeToBuyTickets([2, 3, 2], 2)).toBe(6);
  });

  it("passes test 2", () => {
    expect(timeToBuyTickets([2, 3, 1, 4, 5], 2)).toBe(3);
  });
});

describe("heightChecker", () => {
  it("passes test 1", () => {
    expect(heightChecker([1, 1, 4, 2, 1, 3])).toBe(3);
  });
});

describe("queueManager", () => {
  it("passes test 1", () => {
    expect(
      queueManager([
        [8, 0],
        [5, 5],
        [9, 0],
        [5, 0],
        [6, 2],
        [5, 2],
      ])
    ).toEqual([
      [5, 0],
      [8, 0],
      [5, 2],
      [9, 0],
      [6, 2],
      [5, 5],
    ]);
  });
});
