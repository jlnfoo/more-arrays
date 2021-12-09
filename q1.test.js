const { questionOneSolution } = require("./q1");

//can you reference to actual mockData.json file to get the data or is it recommended to declare new mock data as below?
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

describe("#questionOneSolution", () => {
  it("- gives me the full name", () => {
    const output = questionOneSolution(data);
    expect(output).toBe("Evelin Kintzel");
  });

  it("- gives me the full name if sector profitable is true", () => {
    const output1 = questionOneSolution(data);
    expect(output1).toBe("Evelin Kintzel");
  });

  it("- gives me the sector name if sector profitable is true", () => {
    const output2 = questionOneSolution(data);
    expect(output2).toBe("Healthcare");
  });
});

// what if it's not required to return anything if false, how to test?
//   it("- does not give me full name if sector profitable is false"),
//     () => {
//       const output3 = questionOneSolution(falseydata);
//   expect(output3).toBe;
//     });

//   it("- does not give me sector name if sector profitable is false"), () => {};
// });
