function pascalTriangle(rowNum) {
    if(rowNum === 1) {
        return [[1]];
    }
    const arr = Array(rowNum);
    for (let i = 1; i <= rowNum; i++) {
        arr[i - 1] = Array(i);
    }
    arr[0][0] = 1;
    for(let i = 0; i < arr.length - 1; i++) {
        const arr2 = arr[i];
        const arr3 = arr[i + 1];
        for(let j = -1, k = 0; j < arr2.length; j++, k++) {
            const value1 = arr2[j];
            const value2 = arr2[k];
            if(value1 && value2) {
                arr3[k] = value1 + value2;
            } else {
                arr3[k] = value1 || value2;
            }
        }
    }
    return arr;
}

pascalTriangle(5); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

pascalTriangle(1); // [[1]]