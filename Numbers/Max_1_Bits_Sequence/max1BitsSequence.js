
function findMax1BitsSequence(n) {
    let max1 = 0;
    let max2 = 0;
    while(n !== 0) {
        const b = n & 1;
        n >>= 1;
        if(b === 1) {
            max2++;
        }
        if(max2 !== 0 && (b === 0 || n === 0))  {
            max1 = Math.max(max1, max2);
            max2 = 0;
        }
    }
    return max1;
}

console.log(findMax1BitsSequence(0b1111111110010111011) === 9);
console.log(findMax1BitsSequence(0b10011110010111011) === 4);
console.log(findMax1BitsSequence(0b1111001) === 4);
console.log(findMax1BitsSequence(0b101) === 1);


