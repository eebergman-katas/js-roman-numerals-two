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

        it("should return 'XC' when given a 90", () => {
            expect(arabicToRoman(90)).to.equal("XC");
        });

        it("should return 'C' when given a 100", () => {
            expect(arabicToRoman(100)).to.equal("C");
        });
    });

    describe("translates 400 - 3999", () => {
        it("should return 'CD' when given a 400", () => {
            expect(arabicToRoman(400)).to.equal("CD");
        });

        it("should return 'D' when given a 500", () => {
            expect(arabicToRoman(500)).to.equal("D");
        });

        it("should return 'CM' when given a 900", () => {
            expect(arabicToRoman(900)).to.equal("CM");
        });

        it("should return 'M' when given a 1000", () => {
            expect(arabicToRoman(1000)).to.equal("M");
        });

        it("should return 'MMMCMXCIX' when given a 3999", () => {
            expect(arabicToRoman(3999)).to.equal("MMMCMXCIX");
        });
    });

    describe("boundary tests", () => {
        it("should return an error when passed a 0", () => {
            expect(() => {
                arabicToRoman(0);
            }).to.throw("Input has no Roman equivalent.")
        })

        it("should return an error when passed a number less than 0", () => {
            expect(() => {
                arabicToRoman(-1);
            }).to.throw("Input has no Roman equivalent.")
        })

        it("should return an error when passed a 4000", () => {
            expect(() => {
                arabicToRoman(4000);
            }).to.throw("Input has no Roman equivalent.")
        })

        it("should return an error when passed a number greater than 4000", () => {
            expect(() => {
                arabicToRoman(4001);
            }).to.throw("Input has no Roman equivalent.")
        })

    })
});