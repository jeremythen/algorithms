function fib(n) {
    let v1 = 0;
    let v2 = 1;
    for (let i = 0; i < n - 1; i++) {
        v2 = v1 + v2;
        v1 = v2 - v1;
    }
    return v2;
}

console.log(fib(6) === 8);
console.log(fib(7) === 13);
console.log(fib(8) === 21);
