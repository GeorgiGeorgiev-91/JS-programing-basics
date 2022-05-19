function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let period = Number(input[1]);
    let percentage = Number(input[2]);

    let sum = depositSum + period * ((depositSum * percentage / 100) / 12);

    console.log(sum);
}

//tests
// depositCalculator(["200 ",
//     "3 ",
//     "5.7 "
// ]);
// depositCalculator(["2350",
//     "6 ",
//     "7 "
// ])