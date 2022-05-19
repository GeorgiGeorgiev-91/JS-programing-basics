function convertorUsdToBgn(input) {
    let usd = Number(input[0]);
    let bgn = usd * 1.79549;

    console.log(bgn);
}

//tests
// convertorUsdToBgn(["22"]);
// convertorUsdToBgn(["12.5"]);