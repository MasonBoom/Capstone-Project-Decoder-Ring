// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
   if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
   const inputLowerCase = input.toLowerCase()
    if (!encode) shift = 26 - shift
  const message =  [...inputLowerCase].reduce( (acc, char) => {
      if ("a" <= char && char <= "z") { 
        let ch
        if (shift < 0)
          ch = String.fromCharCode(
            ((char.charCodeAt(0) + shift - 122) % 26) + 122
          );
        else
          ch = String.fromCharCode(
            ((char.charCodeAt(0) + shift - 97) % 26) + 97
          );

      return  acc += ch
      } else {
       return acc += char
      }
    } , "")

    return message
  }

  return {
    caesar,
  }
})()

module.exports = { caesar: caesarModule.caesar }
