type MockData = {
  id: number,
  firstName: string,
  lastName: string,
  portfolio: Portfolio[],
};

type Portfolio = {
  sector: string,
  sectorIsProfitable: boolean,
  holdings: Holdings[],
};

type Holdings = {
  ticker: string,
  position: number,
  isProfitable: boolean,
};
