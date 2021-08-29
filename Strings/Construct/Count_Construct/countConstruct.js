
function countConstruct(target, wordBank, cache = new Map()) {
    if (target === '') {
        return 1;
    }
    if (cache.has(target)) {
        return cache.get(target);
    }
    let sum = 0;
    for (let i = 0; i < wordBank.length; i++) {
        const word = wordBank[i];
        if (target.indexOf(word) === 0) {
            const subStr = target.slice(word.length);
            sum += countConstruct(subStr, wordBank, cache);
            cache.set(subStr, sum);
        }
    }
    return sum;
}

countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']); // 1
countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']); // 0
countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']); // 4
countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']); // 2
countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']); // 0