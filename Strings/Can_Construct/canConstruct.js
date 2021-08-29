
function canConstruct(target, wordBank) {
    const wordBankCache = new Set();
    wordBank.forEach(word => wordBankCache.add(word));
    const canConstructClosure = (str) => {
        if (str === '') {
            return true;
        }
        if (wordBankCache.has(str)) {
            return true;
        }
        for (let i = 1; i < str.length; i++) {
            const subStr1 = str.substr(0, i);
            const subStr2 = str.substr(i, str.length - 1);
            const result1 = canConstructClosure(subStr1);
            const result2 = canConstructClosure(subStr2);
            if (result1 && result2) {
                return true;
            }
        }
        return false;
    };
    return canConstructClosure(target);
}

canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']); // true
canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']); // false
canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']); // true
canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']); // false