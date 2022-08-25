// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.16;

// Author: Jeremy Then

contract Digit {
    // Getting any digit of a number `n` by calculating 10 to the power of `index`
    // to divide the number by that result to remove the digits to the right of the
    // digit that we want. And then using % 10 to get the last digit (from left to right)
    // (that should be our desired number since we removed the digits to the right of it.
    function getDigitAtIndex(uint256 n, uint index)
        public
        pure
        returns (uint256)
    {
        // If n is 123456 and we want the digit at index 2, it means we want the number `4`
        // counting from right to left.
        // If we do 10 ** 2 = its 100.
        // 123456 / 100 = 1234
        // now we do 1234 % 10 = 4, our desired digit.

        return (n / (10**index)) % 10;
    }

    // To get the first digit, we need to know how many digit the number has
    // to be able to create a big base 10 number - 1 to then divide our number by the result
    // and get our answer. It's similar to the getDigitAtIndex() function,
    // but since we want the first digit (from left to right) then we just
    // to divide it by the bit number so we get rid of all the numbers to the right of it.
    function getFirstDigit(uint256 n) public pure returns (uint256) {
        // If n = 654321, then we see it has 6 digits, which log10(123456) = 6
        // 10 ** (6 - 1) = 100000
        // 654321 / 100000 = 6

        uint256 countOfDigits = log10(n);
        return n / (10**(countOfDigits - 1));
    }

    // Getting the last digit is easy. Just 'divide' by 10 and get the remainder (using the modulo % operator)
    function getLastDigit(uint256 n) public pure returns (uint256) {
        return n % 10;
    }

    // Inefficient log10 implementation, just to show how to get the first digit of a number
    // This function is used to know how many digits a number has
    function log10(uint256 n) public pure returns (uint256) {
        uint256 count;
        while (n != 0) {
            count++;
            n /= 10;
        }
        return count;
    }
}
