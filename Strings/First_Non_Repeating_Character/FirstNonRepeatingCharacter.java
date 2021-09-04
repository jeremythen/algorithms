import java.util.*;

public class FirstNonRepeatingCharacter {

    public static void main(String... args) {

        System.out.println("firstNonRepeatingChar: " + firstNonRepeatingChar("abcdefacbdfh").equals("e"));
        System.out.println("firstNonRepeatingChar: " + firstNonRepeatingChar("abcd").equals("a"));
        System.out.println("firstNonRepeatingChar: " + firstNonRepeatingChar("abcda").equals("b"));

    }

    public static String firstNonRepeatingChar(String s) {
        Map<Character, Integer> charCount = new LinkedHashMap<>();
        for(int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if(!charCount.containsKey(c)) {
                charCount.put(c, 0);
            }
            charCount.put(c, charCount.get(c) + 1);
        }
        for(Map.Entry<Character, Integer> entry: charCount.entrySet()) {
            if(entry.getValue() == 1) {
                return entry.getKey().toString();
            }
        }
        return "";
    }

}