package Sorting.Radix_Sort;

import java.util.*;

public class RadixSort {
    public static void main(String... args) {
        List<Integer> list = new ArrayList<>(List.of(55, 3, 56, 7, 2, 8, 5, 23, 421, 73, 942, 732, 173));
        System.out.println(radixSort(list));
    }

    private static List<Integer> radixSort(List<Integer> list) {
        List<Queue<Integer>> buckets = getBuckets();
        List<Integer> list2 = list.subList(0, list.size());
        int m = 10;
        int d = 1;
        boolean loop = false;
        while (!loop) {
            for (int n : list2) {
                int i = n % m;
                int i2 = i / d;
                int v = m == 10 ? i : i2;
                buckets.get(v).add(n);
            }
            loop = buckets.get(0).size() == list2.size();
            for (int i = 0, j = 0; i < 10; i++) {
                Queue<Integer> bucket = buckets.get(i);
                while (!bucket.isEmpty()) {
                    list2.set(j++, bucket.remove());
                }
            }
            m *= 10;
            d *= 10;
        }
        return list2;
    }

    private static List<Queue<Integer>> getBuckets() {
        List<Queue<Integer>> buckets = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            buckets.add(new LinkedList<>());
        }
        return buckets;
    }

}
