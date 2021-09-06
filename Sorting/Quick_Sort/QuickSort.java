package Sorting.Quick_Sort;

import java.util.*;

public class QuickSort {

    public static void main(String... args) {
        int[] numbers = new int[] { 55, 3, 56, 7, 2, 8, 5, 23, 421, 73, 942, 732, 173 };
        quickSort(numbers);
        System.out.println(Arrays.toString(numbers));
    }

    public static void quickSort(int[] numbers) {
        quickSort(numbers, 0, numbers.length - 1);
    }

    private static void quickSort(int[] numbers, int first, int last) {
        if (last > first) {
            int pivotIndex = partition(numbers, first, last);
            quickSort(numbers, first, pivotIndex - 1);
            quickSort(numbers, pivotIndex + 1, last);
        }
    }

    private static int partition(int[] numbers, int first, int last) {

        int pivot = numbers[first];
        int lo = first + 1;
        int hi = last;

        while (hi > lo) {
            while (lo <= hi && numbers[lo] <= pivot) {
                lo++;
            }
            while (hi >= lo && numbers[hi] > pivot) {
                hi--;
            }
            if (hi >= lo) {
                int temp = numbers[hi];
                numbers[hi] = numbers[lo];
                numbers[lo] = temp;
            }
        }

        while (hi > first && numbers[hi] >= pivot)
            hi--;

        if (pivot > numbers[hi]) {
            numbers[first] = numbers[hi];
            numbers[hi] = pivot;
            return hi;
        }

        return first;

    }

}