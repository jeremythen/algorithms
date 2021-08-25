package Strings.Max_Chars;

import java.util.Map;
import java.util.HashMap;

public class MaxChars {
    public static void main(String... args) {
        System.out.println(maxChars("abcdadsfadgadsssssssa").equals("s"));
    }

    public static String maxChars(String s) {

        Map<Character, Integer> charsCounter = new HashMap<>();
        String maxChar = "";
        int maxCharCount = 0;

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (!charsCounter.containsKey(c)) {
                charsCounter.put(c, 1);
            }

            charsCounter.compute(c, (k, v) -> v + 1);

            if (charsCounter.get(c) > maxCharCount) {
                maxChar = "" + c;
                maxCharCount = charsCounter.get(c);
            }

        }

        return maxChar;

    }

}