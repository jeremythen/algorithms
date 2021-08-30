function pyramid(n) {
    const arr = Array(n * 2 - 1).fill(' ');
    const midLength = Math.floor(arr.length / 2);
    for (let i = midLength, j = midLength; i >= 0; i--, j++) {
        arr[i] = '#';
        arr[j] = '#';
        console.log(`'${arr.join('')}'`);
    }
}

console.log(pyramid(2));
console.log(pyramid(3));
console.log(pyramid(4));
console.log(pyramid(5));
console.log(pyramid(6));