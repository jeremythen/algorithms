package Numbers.Row_Sum_Odd_Numbers;

public class RowSumOddNumbers {

    public static void main(String... args) {
        System.out.println(rowSumOddNumbers(3) == 27);
        System.out.println(rowSumOddNumbers(4) == 64);
        System.out.println(rowSumOddNumbers(5) == 125);
    }

    public static int rowSumOddNumbers(int n) {
        return (int) Math.pow(n, 3);
    }

}