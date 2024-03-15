function getFirstLongestUniqueCharsSubsequenceInformation(str) {

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
    const subString = str.substring(startIndex, endIndex);
    const firstLongestUniqueCharsSubsequence = subString === '' ? str : subString;
    const length = strHasNoDuplicateChar ? endIndexExclusive : longestUniqueCharsSubsequenceCount;

    const firtstLongestUniqueCharsSubsequenceInformation = {
        originalString: str,
        startIndexInclusive: startIndex,
        endIndexExclusive,
        firstLongestUniqueCharsSubsequence,
        length,
    };

    return firtstLongestUniqueCharsSubsequenceInformation;

}

console.log(getFirstLongestUniqueCharsSubsequenceInformation("subsequence"));
console.log(getFirstLongestUniqueCharsSubsequenceInformation("hellothere"));
console.log(getFirstLongestUniqueCharsSubsequenceInformation("abbacdcbd"));
console.log(getFirstLongestUniqueCharsSubsequenceInformation("abcabcbb"));
console.log(getFirstLongestUniqueCharsSubsequenceInformation("au"));
console.log(getFirstLongestUniqueCharsSubsequenceInformation("subsequence"));
console.log(getFirstLongestUniqueCharsSubsequenceInformation("openai"));
console.log(getFirstLongestUniqueCharsSubsequenceInformation("machinelearning"));
console.log(getFirstLongestUniqueCharsSubsequenceInformation("ArtificialIntelligence"));
console.log(getFirstLongestUniqueCharsSubsequenceInformation("gpt"));
console.log(getFirstLongestUniqueCharsSubsequenceInformation("NeuralNetworks"));
console.log(getFirstLongestUniqueCharsSubsequenceInformation("PythonProgramming"));
console.log(getFirstLongestUniqueCharsSubsequenceInformation("NLP"));
console.log(getFirstLongestUniqueCharsSubsequenceInformation("RecurrentNeuralNetworks"));
console.log(getFirstLongestUniqueCharsSubsequenceInformation("AI"));
