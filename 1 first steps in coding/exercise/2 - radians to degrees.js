function radiansToDegree(input) {
    let radians = Number(input[0]);
    let degrees = radians * 180 / Math.PI;

    console.log(degrees);
}

//tests
// radiansToDegree(["3.1416"]);
// radiansToDegree(["6.2832"]);