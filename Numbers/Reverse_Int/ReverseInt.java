public class ReverseInt {
    public static void main(String... args) {
        System.out.println(reverseInt(123) == 321);
        System.out.println(reverseInt(503) == 305);
        System.out.println(reverseInt(500) == 5);
    }

    private static int reverseInt(int x) {
        int n2 = Math.abs(x);
        int r = 0;
        while (n2 > 0) {
            r = r * 10 + n2 % 10;
            n2 /= 10;
        }
        return x < 0 ? -r : r;
    }

}
