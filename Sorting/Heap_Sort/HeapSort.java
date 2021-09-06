package Sorting.Heap_Sort;

import java.util.*;

public class HeapSort {
    public static void main(String... args) {
        int[] numbers = new int[] { 55, 3, 56, 7, 2, 8, 5, 23, 421, 73, 942, 732, 173 };

        MinHeap heap = new MinHeap();
        for (int i : numbers) {
            heap.add(i);
        }
        System.out.println("Sorted: " + Arrays.toString(heap.sort()));
    }
}

class MinHeap {

    private int[] values = new int[16];
    private int currentIndex = 0;

    public void printHeap() {
        System.out.println(Arrays.toString(values));
    }

    public int[] sort() {
        int copyIndex = currentIndex;
        int[] numbers = new int[copyIndex];
        for (int i = 0; i < copyIndex; i++) {
            numbers[i] = remove();
        }
        return numbers;
    }

    public void add(int value) {

        values[currentIndex] = value;
        int index = currentIndex;

        while (values[index] < values[index / 2]) {
            values[index] = values[index / 2];
            values[index / 2] = value;
            index = index / 2;
        }

        currentIndex++;

    }

    public int remove() {

        int head = values[0];

        int last = values[currentIndex - 1];
        int parentIndex = 0;
        values[parentIndex] = last;
        values[currentIndex--] = 0;

        while (true) {

            int leftChildIndex = (parentIndex * 2) + 1;
            int rightChildIndex = (parentIndex * 2) + 2;

            int tempIndex = parentIndex;

            if (leftChildIndex < currentIndex && values[leftChildIndex] < values[rightChildIndex]) {
                if (values[leftChildIndex] < values[parentIndex]) {
                    int temp = values[parentIndex];
                    values[parentIndex] = values[leftChildIndex];
                    values[leftChildIndex] = temp;
                    parentIndex = leftChildIndex;
                }
            } else {
                if (rightChildIndex < currentIndex && values[rightChildIndex] < values[parentIndex]) {
                    int temp = values[parentIndex];
                    values[parentIndex] = values[rightChildIndex];
                    values[rightChildIndex] = temp;
                    parentIndex = rightChildIndex;
                }
            }

            if (tempIndex == parentIndex) {
                break;
            }

        }

        return head;
    }

}