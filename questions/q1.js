//const mockData = require("../mockData.json");

/* 
1) If the person's portfolio is profitable, log out the person's full name + the sector name
if a person has 5 profitable portfolios, it is expected that his/her name will be printed 5 times, each time with a different portfolio sector
i.e. 
// [LOG]: Trevor Fortman - Health Care
// [LOG]: Trevor Fortman - Technology
// [LOG]: Yorker Hogbin - Transportation
*/
const mockData = [
  {
    id: 1,
    firstName: "Calvin",
    lastName: "Dadswell",
    portfolio: [
      {
        sector: "Health Care",
        sectorIsProfitable: false,
        holdings: [
          { ticker: "GDV", position: 61, isProfitable: true },
          { ticker: "MIE", position: 95, isProfitable: false },
          { ticker: "NVGN", position: 87, isProfitable: true },
          { ticker: "TCPC", position: 48, isProfitable: true },
          { ticker: "INSE", position: 27, isProfitable: false },
          { ticker: "CFMS", position: 29, isProfitable: false },
        ],
      },
      {
        sector: "Basic Industries",
        sectorIsProfitable: true,
        holdings: [
          { ticker: "PEB^C", position: 96, isProfitable: true },
          { ticker: "MTB.WS", position: 7, isProfitable: true },
          { ticker: "HCAP", position: 15, isProfitable: false },
          { ticker: "MGF", position: 51, isProfitable: true },
          { ticker: "TWOU", position: 37, isProfitable: true },
        ],
      },
      {
        sector: "n/a",
        sectorIsProfitable: false,
        holdings: [
          { ticker: "QLYS", position: 50, isProfitable: false },
          { ticker: "XENT", position: 56, isProfitable: true },
          { ticker: "PSCD", position: 70, isProfitable: true },
          { ticker: "JNP", position: 65, isProfitable: false },
          { ticker: "TFX", position: 4, isProfitable: true },
          { ticker: "CFR", position: 86, isProfitable: false },
        ],
      },
      {
        sector: "Miscellaneous",
        sectorIsProfitable: true,
        holdings: [
          { ticker: "TRNO^A.CL", position: 78, isProfitable: true },
          { ticker: "LGI", position: 69, isProfitable: false },
          { ticker: "ACM", position: 15, isProfitable: true },
        ],
      },
      {
        sector: "n/a",
        sectorIsProfitable: true,
        holdings: [
          { ticker: "NVTR", position: 62, isProfitable: false },
          { ticker: "HUM", position: 42, isProfitable: true },
          { ticker: "WCC", position: 82, isProfitable: false },
        ],
      },
    ],
  },
  {
    id: 2,
    firstName: "Beatrice",
    lastName: "Blakeden",
    portfolio: [
      {
        sector: "n/a",
        sectorIsProfitable: true,
        holdings: [
          { ticker: "TRNO", position: 92, isProfitable: false },
          { ticker: "JUNO", position: 17, isProfitable: true },
          { ticker: "ODC", position: 19, isProfitable: true },
          { ticker: "AMOV", position: 11, isProfitable: false },
        ],
      },
      {
        sector: "Public Utilities",
        sectorIsProfitable: false,
        holdings: [
          { ticker: "ARCH", position: 68, isProfitable: true },
          { ticker: "CERCW", position: 76, isProfitable: true },
          { ticker: "GMED", position: 81, isProfitable: true },
          { ticker: "WAFD", position: 22, isProfitable: false },
          { ticker: "VEEV", position: 83, isProfitable: false },
        ],
      },
      {
        sector: "Technology",
        sectorIsProfitable: false,
        holdings: [
          { ticker: "NUAN", position: 60, isProfitable: false },
          { ticker: "UTHR", position: 34, isProfitable: false },
          { ticker: "RPT", position: 58, isProfitable: true },
          { ticker: "FIVE", position: 75, isProfitable: true },
          { ticker: "APA", position: 60, isProfitable: true },
          { ticker: "PNNT", position: 71, isProfitable: true },
          { ticker: "DRIOW", position: 91, isProfitable: true },
        ],
      },
    ],
  },
  {
    id: 3,
    firstName: "Dyna",
    lastName: "Drowsfield",
    portfolio: [
      {
        sector: "Public Utilities",
        sectorIsProfitable: false,
        holdings: [
          { ticker: "LTRX", position: 4, isProfitable: false },
          { ticker: "MLI", position: 61, isProfitable: false },
          { ticker: "GWW", position: 10, isProfitable: false },
          { ticker: "UNXL", position: 40, isProfitable: false },
        ],
      },
      {
        sector: "Finance",
        sectorIsProfitable: false,
        holdings: [
          { ticker: "LAMR", position: 10, isProfitable: false },
          { ticker: "SSRI", position: 86, isProfitable: true },
          { ticker: "NAO", position: 90, isProfitable: false },
          { ticker: "DSX^B", position: 57, isProfitable: false },
          { ticker: "LXFR", position: 82, isProfitable: false },
          { ticker: "FTHI", position: 24, isProfitable: true },
          { ticker: "IPKW", position: 24, isProfitable: false },
        ],
      },
    ],
  },
  {
    id: 4,
    firstName: "Brunhilde",
    lastName: "Anscott",
    portfolio: [
      {
        sector: "Finance",
        sectorIsProfitable: false,
        holdings: [
          { ticker: "RFP", position: 60, isProfitable: false },
          { ticker: "WBS^E", position: 100, isProfitable: false },
          { ticker: "RILY", position: 67, isProfitable: true },
          { ticker: "VTN", position: 12, isProfitable: false },
          { ticker: "FAB", position: 87, isProfitable: true },
          { ticker: "IBB", position: 67, isProfitable: false },
          { ticker: "IPGP", position: 43, isProfitable: true },
        ],
      },
      {
        sector: "Capital Goods",
        sectorIsProfitable: true,
        holdings: [
          { ticker: "SMCI", position: 97, isProfitable: false },
          { ticker: "CCJ", position: 12, isProfitable: true },
          { ticker: "CPAAU", position: 71, isProfitable: false },
          { ticker: "TSS", position: 81, isProfitable: true },
        ],
      },
      {
        sector: "Capital Goods",
        sectorIsProfitable: false,
        holdings: [
          { ticker: "SNOA", position: 60, isProfitable: false },
          { ticker: "CWST", position: 76, isProfitable: false },
          { ticker: "GS^C", position: 66, isProfitable: true },
          { ticker: "CASI", position: 59, isProfitable: true },
          { ticker: "FFWM", position: 13, isProfitable: false },
        ],
      },
      {
        sector: "Consumer Services",
        sectorIsProfitable: true,
        holdings: [
          { ticker: "EGT", position: 91, isProfitable: false },
          { ticker: "MRVL", position: 66, isProfitable: false },
          { ticker: "OMC", position: 23, isProfitable: false },
          { ticker: "DTF", position: 97, isProfitable: false },
        ],
      },
      {
        sector: "Consumer Services",
        sectorIsProfitable: false,
        holdings: [
          { ticker: "TSS", position: 48, isProfitable: false },
          { ticker: "JBR", position: 22, isProfitable: false },
          { ticker: "ALJJ", position: 5, isProfitable: true },
          { ticker: "HRC", position: 66, isProfitable: true },
        ],
      },
    ],
  },
  {
    id: 5,
    firstName: "Waldo",
    lastName: "Clemo",
    portfolio: [
      {
        sector: "Finance",
        sectorIsProfitable: true,
        holdings: [
          { ticker: "RAS", position: 14, isProfitable: true },
          { ticker: "NNN^F", position: 56, isProfitable: false },
          { ticker: "PAACU", position: 7, isProfitable: true },
        ],
      },
      {
        sector: "n/a",
        sectorIsProfitable: true,
        holdings: [
          { ticker: "ASR", position: 98, isProfitable: true },
          { ticker: "TMK^B", position: 26, isProfitable: true },
          { ticker: "SMLP", position: 63, isProfitable: true },
          { ticker: "LEA", position: 45, isProfitable: true },
          { ticker: "GDOT", position: 87, isProfitable: false },
        ],
      },
      {
        sector: "Health Care",
        sectorIsProfitable: false,
        holdings: [
          { ticker: "ESV", position: 15, isProfitable: false },
          { ticker: "ARH^C", position: 81, isProfitable: false },
          { ticker: "OHGI", position: 6, isProfitable: true },
        ],
      },
    ],
  },
];

const questionOne = () => {
  for (let i = 0; i < mockData.length; i++) {
    const person = mockData[i];

    for (let j = 0; j < person.portfolio.length; j++) {
      if (person.portfolio[j].sectorIsProfitable) {
        const profitablePerson =
          `${person.firstName}` + " " + `${person.lastName}`;
        const profitableSector = `${person.portfolio[j].sector}`;

        return `${profitablePerson}` + " - " + `${profitableSector}`;
      }
      return "-";
    }
  }
};

module.exports = { questionOne };
