
function palindromicSubstring(str) {
    function isPalindrome(str) {
        for(let i = 0, j = str.length - 1; i <= j; i++, j--) {
            if(str.charAt(i) != str.charAt(j)) {
                return false;
            }
        }
        return true;
    }    
    let palindromicSubstr = "";
    let maxPalindromicSubstrLength = 0;
    for(let i = 0; i < str.length; i++) {
        const char1 = str.charAt(i);
        for(let j = str.length - 1; j >= i; j--) {
            const char2 = str.charAt(j);
            if(char1 === char2) {
                const subStr = str.substring(i, j + 1);
                if(isPalindrome(subStr)) {
                    if(subStr.length > maxPalindromicSubstrLength) {
                        maxPalindromicSubstrLength = subStr.length;
                        palindromicSubstr = subStr;
                    }
                }
            }
        }
    }
    if(!palindromicSubstr) {
        return "none";
    }
    return palindromicSubstr;
}

console.log(palindromicSubstring("hellosannasmith") === "sannas");
console.log(palindromicSubstring("abcdefgg") === "none");