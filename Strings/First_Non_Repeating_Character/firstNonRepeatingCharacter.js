
function firstNonRepeatedCharacter(string) {
    const charCounter = {};
    for(let i = 0; i < string.length; i++) {
        const char = string.charAt(i);
        if(!(char in charCounter)) {
            charCounter[char] = 0;
        }
        charCounter[char]++;
    }
    for(const c in charCounter) {
        if(charCounter[c] === 1) {
            return c;
        }
    }
    return null;
}

console.log(firstNonRepeatedCharacter("abcdabcdef") === "e");
console.log(firstNonRepeatedCharacter("abcdacdef") === "b");
console.log(firstNonRepeatedCharacter("abcda") === "b");
console.log(firstNonRepeatedCharacter("abcd") === "a");
