import java.util.*;

public class PalindromicSubstring {

    public static void main(String... args) {
        System.out.println(palindromicSubstring("hellosannasmith").equals("sannas"));
        System.out.println(palindromicSubstring("abcdefgg").equals("none"));
    }

        public static boolean isPalindrome(String s) {
        for(int i = 0, j = s.length() - 1; i <= j; i++, j--) {
            if(s.charAt(i) != s.charAt(j)) {
                return false;
            }
        }
        return true;
    }

    public static String palindromicSubstring(String str) {
        SortedMap<Integer, String> palindromicSubstringCounter = new TreeMap<>();
        for(int i = 0; i < str.length(); i++) {
            char c1 = str.charAt(i);
            for(int j = str.length() - 1; j >= i; j--) {
                char c2 = str.charAt(j);
                if(c1 == c2) {
                    String subStr = str.substring(i, j + 1);
                    if(subStr.length() > 2 && isPalindrome(subStr)) {
                        palindromicSubstringCounter.put(subStr.length(), subStr);
                    }
                }
            }
        }
        if(palindromicSubstringCounter.isEmpty()) {
            return "none";
        }
        return palindromicSubstringCounter.get(palindromicSubstringCounter.lastKey());
    }

}