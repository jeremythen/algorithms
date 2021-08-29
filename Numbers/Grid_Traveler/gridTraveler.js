function grid(n1, n2) {
    if (n1 === 0) {
        return n1;
    }
    if (n2 === 0) {
        return n2;
    }
    if (n1 === 1 && n2 === 1) {
        return n1;
    }
    return grid(n1 - 1, n2) + grid(n1, n2 - 1);
}

const result = grid(3, 3);

console.log("result: ", result);