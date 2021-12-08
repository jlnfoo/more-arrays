const mockData = require("./mockData.json");

/* 
1) If the person's portfolio is profitable, log out the person's full name + the sector name
if a person has 5 profitable portfolios, it is expected that his/her name will be printed 5 times, each time with a different portfolio sector
i.e. 
// [LOG]: Trevor Fortman - Health Care
// [LOG]: Trevor Fortman - Technology
// [LOG]: Yorker Hogbin - Transportation
*/

// loops each person object
for (let i = 0; i < mockData.length; i++) {
  // loops each person's portfolio
  for (let j = 0; j < mockData[i].portfolio.length; j++) {
    //loops through each holdings/stocks
    for (let k = 0; k < mockData[i].portfolio[j].holdings.length; k++) {
      if (
        mockData[i].portfolio[j].sectorIsProfitable &&
        mockData[i].portfolio[j].holdings[k].isProfitable
      ) {
        const profitablePortfolioNames =
          `${mockData[i].firstName} ` + `${mockData[i].lastName}`;
        const profitablePortfolioSector = `${mockData[i].portfolio[j].sector}`;

        console.log(
          "Profitable portfolio : " +
            profitablePortfolioNames +
            " - " +
            profitablePortfolioSector
        );
      }
    }
  }
}
