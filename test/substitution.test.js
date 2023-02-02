const expect = require("chai").expect
const {substitution} = require("../src/substitution")

describe("Substitution Cipher", () => {
    
    it("should return false if alphabet is not exactly 26 characters long", () => {
        const expected = false
        const actual = substitution("message", "plmoknijbuhvygctfxrdzeswa")
        expect(actual).to.equal(expected)
    })

    it("should correctly translate the given phrase based on the alphabet given", () => {
        const expected = "message"
        const actual = substitution("ykrrpik", "plmoknijbuhvygctfxrdzeswaq", false)
        expect(actual).to.equal(expected)
    })

    it("should return false if duplicate values found in the given alphabet", () => {
        const expected = false
        const actual = substitution("message", "abcdefghijklmnopqrrtuvwxyz")
        expect(actual).to.equal(expected)
    })

    it("should maintain spaces in the message when encoding", () => {
        const expected = "elp xhm xf mbymwwmfj dne"
        const actual = substitution("you are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        expect(actual).to.equal(expected)
    });

    it("should maintain spaces in the message when decoding", () => {
        const expected = "you are an excellent spy"
        const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false)
        expect(actual).to.equal(expected)
    });

    it("should ignore capital letters", () => {
        const expected = "elp xhm xf mbymwwmfj dne"
        const actual = substitution("YOU ARE AN EXCELLENT SPY", "xoyqmcgrukswaflnthdjpzibev")
        expect(actual).to.equal(expected)
    });
 });
