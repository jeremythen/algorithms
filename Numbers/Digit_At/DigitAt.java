package Numbers.Digit_At;

public class DigitAt {

    public static void main(String... args) {
        System.out.println(getDigitAt(7865, 1) == 5);
        System.out.println(getDigitAt(7865, 2) == 6);
        System.out.println(getDigitAt(7865, 3) == 8);
        System.out.println(getDigitAt(7865, 4) == 7);
    }

    public static int getDigitAt(int num, int position) {
        double result = num / Math.pow(10, position - 1) % 10;
        return (int) result;
    }

}
