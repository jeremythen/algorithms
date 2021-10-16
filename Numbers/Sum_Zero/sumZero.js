function sumZero(arr) {
    const len = arr.length - 1;
    for(let i = 0, j = len; i < j;) {
        const n1 = arr[i];
        const n2 = arr[j];
        if(n1 === 0 || n2 === 0) {
            return;
        }
        const sum = n1 + n2;
        if(sum === 0) {
            return [n1, n2];
        }
        if(sum > 0) {
            j--;
        } else {
            i++;
        }
    }
    return;
}


console.log(sumZero([-3,-2,-1,0,1,2,3])); // [-3, 3]
console.log(sumZero([-2,0,1,3])); // undefined
console.log(sumZero([1,2,3])); // undefined