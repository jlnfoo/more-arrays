const { questionOne } = require("./q1");

const data = {
  id: 6,
  firstName: "Evelin",
  lastName: "Kintzel",
  portfolio: [
    {
      sector: "Healthcare",
      sectorIsProfitable: true,
      holdings: [
        { ticker: "MITT^B", position: 80, isProfitable: false },
        { ticker: "INTU", position: 19, isProfitable: true },
        { ticker: "MBCN", position: 31, isProfitable: false },
      ],
    },
  ],
};

const falseyData = {
  id: 6,
  firstName: "Thomas",
  lastName: "World",
  portfolio: [
    {
      sector: "Finance",
      sectorIsProfitable: false,
      holdings: [
        { ticker: "MITT^B", position: 80, isProfitable: false },
        { ticker: "INTU", position: 19, isProfitable: true },
        { ticker: "MBCN", position: 31, isProfitable: false },
      ],
    },
  ],
};

describe("#questionOne", () => {
  it("- gives me the full name", () => {
    expect(questionOne(data)).toEqual("Evelin Kintzel");
  });

  it("- gives me the full name if sector profitable is true", () => {
    const output1 = questionOne(data);
    expect(output1).toBe("Evelin Kintzel");
  });

  it("- gives me the sector name if sector profitable is true", () => {
    const output2 = questionOne(data);
    expect(output2).toBe("Healthcare");
  });

  it("- returns - if sector profitable is false", () => {
    const output3 = questionOne(falseyData);
    expect(output3).toBe("-");
  });
});
