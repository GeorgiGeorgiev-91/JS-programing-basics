function suppliesForSchool(input) {
    let penPacks = Number(input[0]);
    let markerPacks = Number(input[1]);
    let cleanerInLitres = Number(input[2]);
    let discountPercentage = Number(input[3]);

    let price = penPacks * 5.8 + markerPacks * 7.2 + cleanerInLitres * 1.2;
    let priceWithDiscount = price - price * discountPercentage / 100;

    console.log(priceWithDiscount);
}

//tests
// suppliesForSchool(["2 ",
//     "3 ",
//     "4 ",
//     "25 "
// ]);
// suppliesForSchool(["4 ",
//     "2 ",
//     "5 ",
//     "13 "
// ])