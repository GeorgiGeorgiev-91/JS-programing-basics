function basketballEquipment(input) {
    let chargeForYear = Number(input[0]);
    let sneakersPrice = chargeForYear - chargeForYear * 0.4;
    let chothesPrice = sneakersPrice - sneakersPrice * 0.2;
    let ballPrice = chothesPrice * (1 / 4);
    let accessoriesPrice = ballPrice * (1 / 5);

    let fullPrice = chargeForYear + sneakersPrice + chothesPrice + ballPrice + accessoriesPrice;

    console.log(fullPrice);
}

//test
// basketballEquipment(["365 "]);
// basketballEquipment(["550 "]);