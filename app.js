const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){

    let valueInYen = (valueInDollar * 1.2) * 127.9;
    return parseFloat(valueInYen.toFixed(2));
}

const fromYenToPound = function(valueInYen){

    let valueInPound = (1 / 127.9) * valueInYen * 0.8;
    return parseFloat(valueInPound.toFixed(2));
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };