function canConstructPalindrome(s) {
    const isEven = v => v % 2 === 0;
    const map = {};
    for(let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        if(!map[c]) {
            map[c] = 0;
        }
        map[c]++;
    }
    const values = Object.values(map);
    const evenValues = values.filter(value => isEven(value));
    const oddValues = values.filter(value => !isEven(value));
    const evenValuesSum = evenValues.reduce((v1, v2) => v1 + v2, 0);
    const oddValuesSum = oddValues.map(value => value - 1).reduce((v1, v2) => v1 + v2, 0);
    const finalOddValuesSum = oddValues.length > 0 ? oddValuesSum + 1 : 0;
    return evenValuesSum + finalOddValuesSum;
}

canConstructPalindrome("bb"); // 2
canConstructPalindrome("a"); // 1
canConstructPalindrome("abccccdd"); // 7