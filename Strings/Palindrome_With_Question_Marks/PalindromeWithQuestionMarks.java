package Strings.Palindrome_With_Question_Marks;

import static java.lang.Character.isAlphabetic;

public class PalindromeWithQuestionMarks {
    public static void main(String... args) {
        System.out.println(palindromeWithQuestionMarks("?ab??a").equals("aabbaa"));
        System.out.println(palindromeWithQuestionMarks("bab??a").equals("NO"));
        System.out.println(palindromeWithQuestionMarks("?a?").equals("aaa"));
        System.out.println(palindromeWithQuestionMarks("a?a").equals("aaa"));
        System.out.println(palindromeWithQuestionMarks("?ab???a").equals("aababaa"));
    }

    public static String palindromeWithQuestionMarks(String S) {
        StringBuilder sb = new StringBuilder(S);
        int stringLength = sb.length();
        for (int i = 0, j = stringLength - 1; i <= j; i++, j--) {
            char leftChar = sb.charAt(i);
            char rightChar = sb.charAt(j);
            if (isAlphabetic(leftChar) && isAlphabetic(rightChar)) {
                if (leftChar != rightChar) {
                    return "NO";
                }
            } else if (isAlphabetic(leftChar) && rightChar == '?') {
                sb.setCharAt(j, leftChar);
            } else if (leftChar == '?' && isAlphabetic(rightChar)) {
                sb.setCharAt(i, rightChar);
            } else if (leftChar == '?' && rightChar == '?') {
                sb.setCharAt(i, 'a');
                sb.setCharAt(j, 'a');
            }
        }
        return sb.toString();
    }

}
