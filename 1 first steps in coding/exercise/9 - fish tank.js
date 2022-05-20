function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let heigth = Number(input[2]);
    let percentage = Number(input[3]);

    let volume = length * width * heigth;
    let volumeInLitres = volume / 1000;

    let litresOfWater = volumeInLitres - (volumeInLitres * percentage / 100)

    console.log(litresOfWater);
}

//tests
// fishTank(["85 ",
//     "75 ",
//     "47 ",
//     "17 "
// ]);
// fishTank(["105 ",
//     "77 ",
//     "89 ",
//     "18.5 "
// ]);