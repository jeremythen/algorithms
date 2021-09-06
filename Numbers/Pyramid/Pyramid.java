package Numbers.Pyramid;

import java.util.Arrays;

public class Pyramid {

    public static void main(String... args) {
        pyramid(1);
        pyramid(2);
        pyramid(3);
        pyramid(4);
        pyramid(5);
    }

    public static void pyramid(int n) {
        String[] arr = new String[n * 2 - 1];
        Arrays.fill(arr, " ");
        int midLength = arr.length / 2;
        for (int i = midLength, j = midLength; i >= 0; i--, j++) {
            arr[i] = "#";
            arr[j] = "#";
            String str = Arrays.stream(arr).reduce("", (a, b) -> a + b);
            System.out.println(str);
        }
    }

}