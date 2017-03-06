let translator = function(inputNumber) {
    const romanAndArabicNumerals = {
        "I": 1
    }

    let romanAnswer = "";
    let key = null;

    for (key in romanAndArabicNumerals) {
        while(inputNumber >= romanAndArabicNumerals[key]){
            inputNumber -= romanAndArabicNumerals[key];
            romanAnswer += key;
        }
    }
    return romanAnswer;
}

module.exports = {
    translator: translator
}