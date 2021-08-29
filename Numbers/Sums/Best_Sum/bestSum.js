function bestSum(originalTarget, numbers) {
    const cache = new Map();
    const combinations = [];
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
        for (let i = 0; i < numbers.length; i++) {
            const num = numbers[i];
            const newTarget = target - num;
            const result = bestSumClosure(newTarget, numbers);
            cache.set(newTarget, result);
            if (result) {
                const midSolution = [...result, num];
                const sum = midSolution.reduce((a, b) => a + b, 0);
                if (sum !== originalTarget) {
                    return midSolution;
                }
                combinations.push(midSolution);
            }
        }
        return null;
    };
    bestSumClosure(originalTarget);
    const leastCombination = combinations.reduce((a, b) => a.length < b.length ? a : b);
    return leastCombination;
}

console.log(bestSum(7, [2, 4]));
console.log(bestSum(7, [2, 4, 3, 7]));