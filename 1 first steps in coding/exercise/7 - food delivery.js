function foodDelivery(input) {
    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let vegetables = Number(input[2]);

    let delivery = 2.5;

    let chickenPrice = chicken * 10.35;
    let fishPrice = fish * 12.4;
    let vegetablesPrice = vegetables * 8.15;

    let sumFood = chickenPrice + fishPrice + vegetablesPrice;

    let dessertPrice = sumFood * 0.2;

    let fullPrice = sumFood + dessertPrice + delivery;

    console.log(fullPrice);
}

//tests
// foodDelivery(["2 ",
//     "4 ",
//     "3 "
// ]);
// foodDelivery(["9 ",
//     "2 ",
//     "6 "
// ]);