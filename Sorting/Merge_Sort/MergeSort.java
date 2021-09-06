package Sorting.Merge_Sort;

import java.util.*;

public class MergeSort {

    public static void main(String... args) {
        int[] numbers = new int[] { 55, 3, 56, 7, 2, 8, 5, 23, 421, 73, 942, 732, 173 };
        System.out.println(Arrays.toString(mergeSort(numbers)));
    }

    static int[] mergeSort(int[] numbers) {
        if (numbers.length < 2)
            return numbers;
        int[] arr1 = Arrays.copyOfRange(numbers, 0, numbers.length / 2);
        int[] arr2 = Arrays.copyOfRange(numbers, numbers.length / 2, numbers.length);
        int[] arr3 = mergeSort(arr1);
        int[] arr4 = mergeSort(arr2);
        int[] newArray = new int[numbers.length];
        int i = 0, j = 0, k = -1;
        while (i < arr3.length && j < arr4.length) {
            if (arr3[i] < arr4[j]) {
                newArray[++k] = arr3[i++];
            } else {
                newArray[++k] = arr4[j++];
            }
        }
        while (i < arr3.length) {
            newArray[++k] = arr3[i++];
        }
        while (j < arr4.length) {
            newArray[++k] = arr4[j++];
        }
        return newArray;
    }

}
