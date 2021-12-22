/* 
2) For each profitable portfolio, look for the largest position, and log out the full name + sector name + ticker size + position size
if a person has 5 profitable portfolios, it is expected that his/her name will be printed 5 times, each time with a different portfolio sector + the largest position & ticker name

i.e. 
// [LOG]: Trevor Fortman - Health Care - NMFC - 70
// [LOG]: Trevor Fortman - Technology - EGRX - 95
// [LOG]: Yorker Hogbin - Transportation - VTWG - 86

*/
// loops each person object
for (let i = 0; i < mockData.length; i++) {
  // loops each person's portfolio
  for (let j = 0; j < mockData[i].portfolio.length; j++) {
    //loops through each holdings/stocks
    for (let k = 0; k < mockData[i].portfolio[j].holdings.length; k++) {
      if (!mockData[i].portfolio[j].sectorIsProfitable) {
        break;
      } else if (
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
