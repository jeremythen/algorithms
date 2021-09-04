function reverseInt(n) {
    let n2 = Math.abs(n);
    let result = 0;
    while(n2 > 0) {
        result = result * 10 + n2 % 10;
        n2 = Math.floor(n2 / 10);
    }
    return n < 0 ? -result : result;
}

console.log(reverseInt(123) === 321);
console.log(reverseInt(500) === 5);
console.log(reverseInt(503) === 305);