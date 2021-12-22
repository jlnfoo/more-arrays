/* If the person has a falsely reported portfolio, log out his full name
// [LOG]: John Doe

A falsely reported portfolio means "sectorIsProfitable" is reported as TRUE, but ALL of the holdings have "isProfitable" reported as FALSE.

Similarly, if the "sectorIsProfitable" is reported as FALSE, but ALL of the holdings are reported as TRUE, it is also considered a falsely reported portfolio
*/
