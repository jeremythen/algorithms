function getLongestUniqueCharsSubsequence(str) {

    const START_OF_ALPHABET_IN_ASCII = 65;
    const strLength = str.length;
    
    let longestUniqueCharsSubsequenceCount = 0;
    let currentUniqueCharsSubsequenceCount = 0;
    let bitMap = 0;
    let startIndex = 0;
    let endIndex = 0;

    for (let i = 0, j = 0; j < strLength;) {

        const remainingCharacters = strLength - i;

        const remainingCharsAreNotLongerThanCurrentLongest = remainingCharacters <= longestUniqueCharsSubsequenceCount;

        if(remainingCharsAreNotLongerThanCurrentLongest) {
            break;
        }

        let offsetCharCode = str.charCodeAt(j) - START_OF_ALPHABET_IN_ASCII;

        const charPositionInBitMap = 1 << offsetCharCode;
        const charBit = bitMap & charPositionInBitMap;
        const bitMapContainsChar = charBit > 0;

        if (bitMapContainsChar) {
            if (currentUniqueCharsSubsequenceCount > longestUniqueCharsSubsequenceCount) {
                longestUniqueCharsSubsequenceCount = currentUniqueCharsSubsequenceCount;
                startIndex = i;
                endIndex = j;
            }
            currentUniqueCharsSubsequenceCount = 0;
            bitMap = 0;
            i++;
            j = i;
            offsetCharCode = str.charCodeAt(j) - START_OF_ALPHABET_IN_ASCII;
        }

        const nextCharPositionInBitMap = bitMapContainsChar ? 1 << offsetCharCode : charPositionInBitMap;

        bitMap |= nextCharPositionInBitMap;

        currentUniqueCharsSubsequenceCount++;
        
        j++;

    }

    const strHasNoDuplicateChar = endIndex === 0;

    const endIndexExclusive = strHasNoDuplicateChar ? str.length : endIndex;
    const length = strHasNoDuplicateChar ? endIndexExclusive : longestUniqueCharsSubsequenceCount;

    return length;

}

console.log(getLongestUniqueCharsSubsequence("subsequence"));
console.log(getLongestUniqueCharsSubsequence("hellothere"));
console.log(getLongestUniqueCharsSubsequence("abbacdcbd"));
console.log(getLongestUniqueCharsSubsequence("abcabcbb"));
console.log(getLongestUniqueCharsSubsequence("au"));
console.log(getLongestUniqueCharsSubsequence("subsequence"));
console.log(getLongestUniqueCharsSubsequence("openai"));
console.log(getLongestUniqueCharsSubsequence("machinelearning"));
console.log(getLongestUniqueCharsSubsequence("ArtificialIntelligence"));
console.log(getLongestUniqueCharsSubsequence("gpt"));
console.log(getLongestUniqueCharsSubsequence("NeuralNetworks"));
console.log(getLongestUniqueCharsSubsequence("PythonProgramming"));
console.log(getLongestUniqueCharsSubsequence("NLP"));
console.log(getLongestUniqueCharsSubsequence("RecurrentNeuralNetworks"));
console.log(getLongestUniqueCharsSubsequence("AI"));
