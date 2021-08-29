
function canSum(target, numbers) {
    if (target < 1) {
        return target === 0;
    }
    for (let i = 0; i < numbers.length; i++) {
        const newTarget = target - numbers[i];
        const result = canSum(newTarget, numbers);
        if (result) {
            return result;
        }
    }
    return false;
}

console.log(canSum(7, [2, 4]) === false); // true
console.log(canSum(7, [2, 4, 3, 7]) === true); // true
