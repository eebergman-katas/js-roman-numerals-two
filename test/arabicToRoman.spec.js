const expect = require("chai").expect;
let arabicToRoman = require("../src/arabicToRoman");

describe("Does arabicToRoman exist", () => {
    it("should return true if arabicToRoman.js exists", () => {
        expect(arabicToRoman).to.exist;
    });
});

describe("arabicToRoman.js translates arabic to roman numerals", () => {

    beforeEach( () => {
        arabicToRoman = require("../src/arabicToRoman").translator;
    });
    

    describe("translates 1 - 10", () => {
        it("should return 'I' when given a 1", () => {
            expect(arabicToRoman(1)).to.equal("I");
        });

        it("should return 'II' when given a 2", () => {
            expect(arabicToRoman(2)).to.equal("II");
        });
    });
});