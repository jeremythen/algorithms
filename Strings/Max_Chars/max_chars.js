function maxChar(s) {
    const charCounter = {};
    let mostUsedChar = '';
    let mostUsedCharCount = 0;
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        if (!charCounter[c]) {
            charCounter[c] = 0;
        }
        charCounter[c]++;
        if (charCounter[c] > mostUsedCharCount) {
            mostUsedChar = c;
            mostUsedCharCount = charCounter[c];
        }
    }
    return mostUsedChar;
}

console.log(maxChar("abcdadsfadgadsssssssa") === 's');

