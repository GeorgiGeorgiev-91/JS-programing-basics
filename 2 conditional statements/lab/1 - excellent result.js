function excellentResult(input) {
    let grade = Number(input[0]);

    if (grade >= 5.5) {
        console.log("Excellent!");
    }
}

//tests
// excellentResult(["6"]);
// excellentResult(["5"]);
// excellentResult(["5.50"]);
// excellentResult(["5.49"]);