function palindromeWithQuestionMarks(S) {
    const chars = S.split('');
    for (let i = 0, j = chars.length - 1; i <= j; i++, j--) {
        const leftChar = chars[i]
        const rightChar = chars[j];
        if (leftChar !== '?' && rightChar !== '?') {
            if (leftChar !== rightChar) {
                return 'NO';
            }
        } else if (leftChar === '?' && rightChar === '?') {
            chars[i] = 'a';
            chars[j] = 'a';
        } else if (leftChar === '?') {
            chars[i] = rightChar;
        } else if (rightChar === '?') {
            chars[j] = leftChar;
        }
    }
    return chars.join('');
}

console.log(palindromeWithQuestionMarks("?ab??a") === "aabbaa");
console.log(palindromeWithQuestionMarks("bab??a") === "NO");
console.log(palindromeWithQuestionMarks("?a?") === "aaa");
console.log(palindromeWithQuestionMarks("a?a") === "aaa");
console.log(palindromeWithQuestionMarks("?ab???a") === "aababaa");