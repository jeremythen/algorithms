function bestSum(target, numbers) {
    const cache = new Map();
    const bestSumClosure = (target) => {
        if (target === 0) {
            return [];
        }
        if (target < 0) {
            return null;
        }
        if (cache.has(target)) {
            return cache.get(target);
        }
        let shortestCombination = null;
        for (let i = 0; i < numbers.length; i++) {
            const num = numbers[i];
            const newTarget = target - num;
            const result = bestSumClosure(newTarget, numbers);
            cache.set(newTarget, result);
            if (result) {
                const midSolution = [...result, num];
                if (!shortestCombination || midSolution.length < shortestCombination.length) {
                    shortestCombination = midSolution;
                }
            }
        }
        return shortestCombination;
    };
    return bestSumClosure(target);
}

console.log(bestSum(7, [2, 4]));
console.log(bestSum(7, [2, 4, 3, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));