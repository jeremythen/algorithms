package Numbers.Fibonacci_With_Two_Variables;

public class Fib {
    public static void main(String... args) {

        System.out.println(fib(6) == 8);
        System.out.println(fib(7) == 13);
        System.out.println(fib(8) == 21);

    }

    public static int fib(int n) {
        int v1 = 0;
        int v2 = 1;
        for (int i = 1; i < n; i++) {
            v2 = v1 + v2;
            v1 = v2 - v1;
        }
        return v2;
    }
}
