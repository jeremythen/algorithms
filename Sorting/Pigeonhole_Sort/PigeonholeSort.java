import java.util.function.Function;
import java.util.*;

public class PigeonholeSort {

    public static void main(String... args) {
        int[] numbers = new int[] { 55, 3, 55, 7, 2, 8, 5, 23, 421, 73, 942, 732, 173 };
        System.out.println(Arrays.toString(pigeonholeSort(numbers)));
    }

    public static int[] pigeonholeSort(int[] ints) {
        int min = getMin.apply(ints);
        int max = getMax.apply(ints);
        int counterLength = max - min + 1;
        int[] arr2 = new int[counterLength];
        for (int value : ints) {
            arr2[value - min]++;
        }
        for (int i = 0, j = 0; i < counterLength; i++) {
            int value = arr2[i];
            if (value >= 1) {
                ints[j++] = min + i;
            }
        }
        return ints;
    }

    private static Function<int[], Integer> getMin = arr -> {
        int min = arr[0];
        for (int i : arr) {
            min = Math.min(min, i);
        }
        return min;
    };

    private static Function<int[], Integer> getMax = arr -> {
        int max = arr[0];
        for (int i : arr) {
            max = Math.max(max, i);
        }
        return max;
    };

}