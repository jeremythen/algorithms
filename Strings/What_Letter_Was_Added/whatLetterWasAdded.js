function whatLetterWasAdded(s, t) {

    const toCharCountMap = (s) => {
        const countMap = new Map();
        for(let i = 0; i < s.length; i++) {
            const c = s.charAt(i);
            if(!countMap.has(c)) {
                countMap.set(c, 0);
            }
            countMap.set(c, countMap.get(c) + 1)
        }
        return countMap;
    }

    const sMap = toCharCountMap(s);
    const tMap = toCharCountMap(t)

    for(let i = 0; i < t.length; i++) {
        const c = t.charAt(i);
        if(sMap.get(c) !== tMap.get(c)) {
            return c;
        }
    }

}

console.log(whatLetterWasAdded("abcd", "abcde") === 'e')
console.log(whatLetterWasAdded("", "t") === 't')
console.log(whatLetterWasAdded("a", "aa") === 'a')
console.log(whatLetterWasAdded("ae", "aea") === 'a')