
function canSum(target, numbers) {
    const cache = new Map();
    const canSumClosure = (target) => {
        if (cache.has(target)) {
            return cache.get(target);
        }
        if (target < 1) {
            return target === 0;
        }
        for (let i = 0; i < numbers.length; i++) {
            const newTarget = target - numbers[i];
            const result = canSumClosure(newTarget, numbers);
            cache.set(newTarget, result);
            if (result) {
                return result;
            }
        }
        return false;
    }
    return canSumClosure(target);
}

console.log(canSum(7, [2, 4]) === false); // true
console.log(canSum(7, [2, 4, 3, 7]) === true); // true
