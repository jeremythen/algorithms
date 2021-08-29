function arrayChunks(arr, n) {
    const midLength = arr.length / n;
    const chunks = [];
    for (let i = 0; i < midLength; i++) {
        chunks.push(arr.splice(0, n));
    }
    return chunks;
}

console.log(arrayChunks([1, 2, 3, 4], 2)); // [[1,2], [3,4]]
console.log(arrayChunks([1, 2, 3, 4], 3)); // [ [ 1, 2, 3 ], [ 4 ] ]
console.log(arrayChunks([1, 2, 3, 4, 5], 2)); // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
console.log(arrayChunks([1, 2, 3, 4, 5], 3)); // [ [ 1, 2, 3 ], [ 4, 5 ] ]
console.log(arrayChunks([1, 2, 3, 4, 5, 6], 3)); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]