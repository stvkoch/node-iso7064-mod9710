const MOD = 97;
const REMAINDER = 98;
const ASCII_LIMIT_NUMBER = 48;
const NUMBER_SYSTEM = 10;

export default class Mod9710 {
  /**
     * Encode number to mod9710 appending check digit in the end
     * @param {*} number
     */
  static encode(number) {
    const codeDigit = Mod9710.checkCode(number);
    if (codeDigit === 0) {
      return `${number}00`;
    }

    if (codeDigit < 10) {
      return `${number}0${codeDigit}`;
    }

    return `${number}${codeDigit}`;
  }

  /**
     * Verify if number is a Iso7064 Mod 97 10 valid number.
     *
     * @param {*} number
     */
  static verify(number) {
    return Mod9710.computeCheck(number) % MOD === 1;
  }

  static checkCode(number) {
    return (REMAINDER - (Mod9710.computeCheck(`${number}00`) % MOD));
  }


  static computeCheck(number) {
    if (number === null || typeof number === 'undefined' || number === '') return 0;

    const numberStr = String(number);
    let ai = 1;
    let charToCheck = numberStr[numberStr.length - 1].charCodeAt(0) - ASCII_LIMIT_NUMBER;
    if (charToCheck < 0 || charToCheck > 9) return 0;
    let check = charToCheck;
    for (let i = numberStr.length - 2; i >= 0; i -= 1) {
      charToCheck = numberStr[i].charCodeAt(0) - ASCII_LIMIT_NUMBER;
      if (charToCheck < 0 || charToCheck > 9) return 0;
      ai = (ai * NUMBER_SYSTEM) % MOD;
      check += (ai * charToCheck);
    }

    return check;
  }

  /**
     * Get only the check digit of number
     *
     * @param {*} number
     */
  static getCheck(number) {
    return String(number).substr(-2);
  }

  /**
     * Get only the data part without check digit
     *
     * @param {*} number
     */
  static getData(number) {
    const numberStr = String(number);
    return numberStr.substr(0, numberStr.length - 2);
  }
}
