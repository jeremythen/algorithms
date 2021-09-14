function solution(numbers) {
    let i = 0;
    for (let j = 1; j < numbers.length; j++) {
        if (numbers[i] === numbers[j]) {
            numbers[j] = "";
        } else {
            numbers[++i] = numbers[j];
            numbers[j] = "";
        }
    }
    console.log("numbers: ", numbers);
    console.log("k: ", ++i);
    return i;
}


// Most efficient solution.
function solution2(numbers) {
    let i = 0;
    for (let j = 1; j < numbers.length; j++) {
        if (numbers[i] === numbers[j]) {
        } else {
            numbers[++i] = numbers[j];
        }
    }
    return ++i;
}

solution([1, 1, 2]);
solution([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

