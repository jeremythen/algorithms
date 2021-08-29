function howSum(target, numbers) {
    if (target === 0) {
        return [];
    }
    if (target < 0) {
        return null;
    }
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        const newTarget = target - num;
        const result = howSum(newTarget, numbers);
        if (result) {
            return [...result, num];
        }
    }
    return null;
}

console.log(howSum(7, [2, 4]));
console.log(howSum(7, [2, 4, 3, 7]));