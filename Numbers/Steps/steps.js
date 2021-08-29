function steps(n) {
    const arr = Array(n).fill(' ');
    for (let i = 0; i < n; i++) {
        arr[i] = '#';
        console.log(`'${arr.join('')}'`);
    }
}

console.log(steps(2));
console.log(steps(3));
console.log(steps(4));