const mockData = require("./mockData.json");

/* 
1) If the person's portfolio is profitable, log out the person's full name + the sector name
if a person has 5 profitable portfolios, it is expected that his/her name will be printed 5 times, each time with a different portfolio sector
i.e. 
// [LOG]: Trevor Fortman - Health Care
// [LOG]: Trevor Fortman - Technology
// [LOG]: Yorker Hogbin - Transportation
*/

const questionOneSolution = (mockData) => {
  for (let i = 0; i < mockData.length; i++) {
    const person = mockData[i];

    for (let j = 0; j < person.portfolio.length; j++) {
      if (person.portfolio[j].sectorIsProfitable) {
        const profitablePerson =
          `${person.firstName}` + " " + `${person.lastName}`;
        const profitableSector = `${person.portfolio[j].sector}`;

        console.log(profitablePerson + " - " + profitableSector);
      }
    }
  }
};

module.exports = { questionOneSolution };
