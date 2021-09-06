package Sorting.Counting_Sort;

import java.util.*;
import java.util.function.Function;

public class CountingSort {
    public static void main(String... args) {
        int[] numbers = new int[] { 55, 3, 56, 7, 2, 8, 5, 23, 421, 73, 942, 732, 173 };
        System.out.println(Arrays.toString(countingSort(numbers)));
    }

    public static int[] countingSort(int[] ints) {
        int max = getMax.apply(ints);
        int[] count = new int[max + 1];
        for (int i : ints) {
            count[i]++;
        }
        int[] modifiedCount = Arrays.copyOfRange(count, 0, count.length);
        for (int i = 1; i < modifiedCount.length; i++) {
            modifiedCount[i] = modifiedCount[i] + modifiedCount[i - 1];
        }
        int[] result = new int[ints.length];
        for (int j = ints.length - 1; j >= 0; j--) {
            int index = modifiedCount[ints[j]]--;
            result[index - 1] = ints[j];
        }
        return result;
    }

    private static Function<int[], Integer> getMax = arr -> {
        int max = arr[0];
        for (int i : arr) {
            max = Math.max(max, i);
        }
        return max;
    };

}
