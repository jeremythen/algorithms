function getDigitAt(number, index) {
    return Math.floor(number / 10 ** (index - 1)) % 10;
}

console.log(getDigitAt(123456, 2) === 5);
console.log(getDigitAt(123456, 1) === 6);
console.log(getDigitAt(123456, 3) === 4);