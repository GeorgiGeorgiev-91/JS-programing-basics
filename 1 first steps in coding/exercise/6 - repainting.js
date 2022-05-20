function repainting(input) {
    let nylonNeeded = Number(input[0]);
    let paintNeeded = Number(input[1]);
    let thinnerNeeded = Number(input[2]);
    let workHours = Number(input[3]);

    let extraPaint = paintNeeded * 0.1;
    let extraNylon = Number(2);
    let bagsPrice = Number(0.4);

    let workersPrice = Number(0.3);

    let sumOfNylon = (nylonNeeded + extraNylon) * 1.5;
    let sumOfPaint = (paintNeeded + extraPaint) * 14.5;
    let sumOfThinner = thinnerNeeded * 5;

    let sumOfMaterials = sumOfNylon + sumOfPaint + sumOfThinner + bagsPrice

    let sumOfWorkersPrice = sumOfMaterials * workersPrice * workHours;

    let fullPrice = sumOfMaterials + sumOfWorkersPrice;

    console.log(fullPrice);
}

//tests
// repainting(["10 ",
//     "11 ",
//     "4 ",
//     "8 "
// ]);
// repainting(["5 ",
//     "10 ",
//     "10 ",
//     "1 "
// ]);