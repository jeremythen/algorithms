function whatLetterWasAdded(s, t) {
    for(let i = 0; i < t.length; i++) {
        const c = s.charAt(i);
        const c2 = t.charAt(i);
        if(c !== c2) {
            return c2;
        }
    }
}

console.log(whatLetterWasAdded("abcd", "abcde") === 'e')
console.log(whatLetterWasAdded("", "t") === 't')
console.log(whatLetterWasAdded("a", "aa") === 'a')
console.log(whatLetterWasAdded("ae", "aea") === 'a')
console.log(whatLetterWasAdded("abcdef", "aabcdef") === 'a')
console.log(whatLetterWasAdded("abcdef", "abcdzef") === 'z')