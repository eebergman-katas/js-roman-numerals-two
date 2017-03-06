let translator = function(inputNumber) {
    const romanAndArabicNumerals = {
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
        }
    }
    return romanAnswer;
};

module.exports = {
    translator: translator
};