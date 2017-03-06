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

        it("should return 'IV' when given a 4", () => {
            expect(arabicToRoman(4)).to.equal("IV");
        });

        it("should return 'V' when given a 5", () => {
            expect(arabicToRoman(5)).to.equal("V");
        });
        
        it("should return 'VI' when given a 6", () => {
            expect(arabicToRoman(6)).to.equal("VI");
        });

        it("should return 'IX' when given a 9", () => {
            expect(arabicToRoman(9)).to.equal("IX");
        });

        it("should return 'X' when given a 10", () => {
            expect(arabicToRoman(10)).to.equal("X");
        });
    });

    describe("translates 40 - 100", () => {
        it("should return 'XL' when given a 40", () => {
            expect(arabicToRoman(40)).to.equal("XL");
        });

        it("should return 'L' when given a 50", () => {
            expect(arabicToRoman(50)).to.equal("L");
        });

    });
});