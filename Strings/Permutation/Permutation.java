package Strings.Permutation;

import java.util.List;
import java.util.ArrayList;

public class Permutation {
    public static void main(String... args) {
        System.out.println(permutation("abcd"));
    }

    public static List<String> permutation(String s) {
        List<String> list = new ArrayList<>();
        permutation(s, "", list);
        return list;
    }

    public static void permutation(String s1, String s2, List<String> permutations) {
        if (s1.isEmpty()) {
            permutations.add(s2);
        }
        for (int i = 0; i < s1.length(); i++) {
            char excludedChar = s1.charAt(i);
            String subString1 = s1.substring(0, i) + s1.substring(i + 1);
            permutation(subString1, s2 + excludedChar, permutations);
        }
    }

}
