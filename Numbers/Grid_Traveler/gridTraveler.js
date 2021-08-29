function grid(n, m) {
    if (n === 0 || m === 0) {
        return 0;
    }
    if (n === 1 && m === 1) {
        return 1;
    }
    return grid(n - 1, m) + grid(n, m - 1);
}

const result = grid(3, 3);

console.log("result: ", result);