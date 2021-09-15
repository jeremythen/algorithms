function sumInArray(numbers) {
    let i = numbers.length - 1;
    while (numbers[i] === 9) {
        numbers[i] = 0;
        i--;
    }
    if (i !== -1) {
        numbers[i] += 1;

    } else {
        numbers.unshift(1);
    }
    return numbers;
}

sumInArray([1, 2, 3, 4, 5, 6, 7, 8, 9]); // [1, 2, 3, 4, 5, 6, 7, 9, 0]

sumInArray([1, 2, 3]); // [1, 2, 4]

sumInArray([9, 9, 9]); // [1,0,0,0]