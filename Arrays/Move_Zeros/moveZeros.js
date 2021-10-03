function moveZeros(numbers) {
    for(let j = 0, i = 0; j < numbers.length; j++) {
    	const iValue = numbers[i];
    	const jValue = numbers[j];
        if(iValue === 0 && jValue) {
            numbers[i++] = jValue;
            numbers[j] = 0;
        } else if(iValue) {
            i++;
        }
    }
    return numbers;
}

const equal = (arr1, arr2) => {
    if(arr1.length !== arr2.length) {
        return false;
    }
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};

console.log(
    equal(
        moveZeros([1,0,4,0,0,10,20,100]),
        [1, 4, 10, 20, 100, 0, 0, 0]
        )
    );

console.log(
    equal(
        moveZeros([0,1,0,3,12]),
        [1, 3, 12, 0, 0]
        )
    );

console.log(
    equal(
        moveZeros([0]),
        [0]
        )
    );