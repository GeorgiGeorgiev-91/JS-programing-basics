function projectsCreation(input) {
    let firstName = input[0];
    let projects = Number(input[1]);
    let hours = projects * 3;

    console.log(`The architect ${firstName} will need ${hours} hours to complete ${projects} project/s.`);
}

//tests
// projectsCreation(["George ",
//     "4 "
// ]);

// projectsCreation(["Sanya ",
//     "9 "
// ])