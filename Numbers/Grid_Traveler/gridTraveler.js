function gridTraveler(n, m) {
    const cache = new Map();
    function gridTravelerClosure(n, m) {
        if (n === 0 || m === 0) {
            return 0;
        }
        if (n === 1 && m === 1) {
            return 1;
        }
        const key = `${n}_${m}`;
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = gridTravelerClosure(n - 1, m) + gridTravelerClosure(n, m - 1);
        cache.set(key, result);
        cache.set(`${m}_${n}`, result);
        return result;
    }
    return gridTravelerClosure(n, m);
}

const result = gridTraveler(20, 20);

console.log("result: ", result);