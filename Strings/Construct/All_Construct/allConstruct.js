
function allConstruct(target, wordBank) {
    if (target === '') {
        return [[]];
    }
    let arr = [];
    for (let i = 0; i < wordBank.length; i++) {
        const word = wordBank[i];
        if (target.indexOf(word) === 0) {
            const subStr = target.slice(word.length);
            const result = allConstruct(subStr, wordBank);
            const resultMapped = result.map(values => [word, ...values]);
            arr.push(...resultMapped);
        }
    }
    return arr;
}

allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']);
allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']);
allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']);
allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']);
allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']);