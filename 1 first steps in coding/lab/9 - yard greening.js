function yardGreening(input) {
    let area = Number(input[0]);
    let result = Number(area * 7.61);
    let discount = Number(result * 0.18);
    let finalPrice = Number(result - discount);

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

//tests
// yardGreening(["550"]);
// yardGreening(["150"]);