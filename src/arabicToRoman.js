const err = new ReferenceError("Input has no Roman equivalent.");

let translator = function(inputNumber) {
    if(inputNumber <= 0 || inputNumber >= 4000) {
        throw err;
    }

    const romanAndArabicNumerals = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1
    };

    let romanAnswer = "";
    let key = null;

    for (key in romanAndArabicNumerals) {
        while(inputNumber >= romanAndArabicNumerals[key]){
            inputNumber -= romanAndArabicNumerals[key];
            romanAnswer += key;
        };
    };
    return romanAnswer;
};

module.exports = {
    translator: translator
};