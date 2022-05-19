function vacationBooksList(input) {
    let bookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let timeNeeded = bookPages / pagesPerHour;
    let hoursPerDay = timeNeeded / days;
    console.log(hoursPerDay);
}

//tests
// vacationBooksList(["212 ",
//     "20 ",
//     "2 "
// ]);
// vacationBooksList(["432 ",
//     "15 ",
//     "4 "
// ])