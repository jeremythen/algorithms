function howSum(target, numbers) {
    const cache = new Map();
    const howSumClosure = (target) => {
        if (target === 0) {
            return [];
        }
        if (target < 0) {
            return null;
        }
        if (cache.has(target)) {
            return cache.get(target);
        }
        for (let i = 0; i < numbers.length; i++) {
            const num = numbers[i];
            const newTarget = target - num;
            const result = howSum(newTarget, numbers);
            cache.set(newTarget, result);
            if (result) {
                return [...result, num];
            }
        }
        return null;
    };
    return howSumClosure(target);
}

console.log(howSum(7, [2, 4]));
console.log(howSum(7, [2, 4, 3, 7]));