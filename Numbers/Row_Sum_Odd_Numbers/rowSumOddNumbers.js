function rowSumOddNumbers(n) {
    let firstRowValue = n * (n - 1) + 1;
    let sum = firstRowValue;
    for (let i = 1; i < n; i++) {
        firstRowValue += 2;
        sum += firstRowValue;
    }
    return sum;
}

console.log(rowSumOddNumbers(3));
console.log(rowSumOddNumbers(4));
console.log(rowSumOddNumbers(5));