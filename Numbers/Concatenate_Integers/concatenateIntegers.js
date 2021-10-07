function concatenateIntegers(n1, n2) {
    return n1 * Math.floor(10 ** Math.floor(Math.log10(n2) + 1)) + n2;
}

console.log(concatenateIntegers(234, 567) === 234567);
console.log(concatenateIntegers(6234, 723) === 6234723);
console.log(concatenateIntegers(5767, 892) === 5767892);
