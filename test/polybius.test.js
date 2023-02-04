// Write your tests here! 
const expect = require("chai").expect;
const {polybius} = require("../src/polybius.js");

describe("Checking if Polybius works properly", () => {
  it("Should, when encoding, translate the letters i and j to 42", () => {
    const actual = polybius("ij");
    const expected = "4242"
    expect(actual).to.eql(expected);
  });
});

describe("Checking if Polybius works properly", () => {
  it("Should, when decoding, translate 42 the letters (i,j)", () => {
    const actual = polybius("42", false);
    const expected = "(i/j)"
    expect(actual).to.eql(expected);
  });
});

describe("Checking if Polybius works properly", () => {
  it("Should, when encoding, ignore capital letters", () => {
    const actual = polybius("A Message");
    const expected = "11 23513434112251"
    expect(actual).to.eql(expected);
  });
});

describe("Checking if Polybius works properly", () => {
  it("Should, when encoding, maintain spaces in the message, before and after encoding", () => {
    const actual = polybius("A Message");
    const expected = "11 23513434112251"
    expect(actual).to.eql(expected);
  });
});

describe("Checking if Polybius works properly", () => {
  it("Should, when decoding, maintain spaces in the message, before and after encoding", () => {
    const actual = polybius("11 23513434112251", false);
    const expected = "a message"
    expect(actual).to.eql(expected);
  });
});