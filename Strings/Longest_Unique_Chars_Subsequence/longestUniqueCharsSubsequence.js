
function longestUniqueCharsSubsequence(s) {
    const seen = new Map();
    let i2 = 0;
    let j2 = 0;
    let i3 = 0;
    let j3 = 0;
    for(let i = 0, j = 0; j < s.length;) {
        const c = s.charAt(j);
        if(seen.has(c)) {
            const lastSeen = seen.get(c);
            seen.clear();
            if(j3 - i3 > j2 - i2) {
                j2 = j3;
                i2 = i3;
            }
            j = i = lastSeen + 1;
        } else {
            seen.set(c, j);
            i3 = i;
            j3 = j;
            j++;
        }
    }
    return s.substring(i2, j2 + 1);
}

console.log(longestUniqueCharsSubsequence("subsequence") === "ubseq");
console.log(longestUniqueCharsSubsequence("hellothere") === "lother");
console.log(longestUniqueCharsSubsequence("abbacdcbd") === "bacd");