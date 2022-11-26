// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract Bitwise {
    // 1
    function getBitAtIndex(uint32 number, uint8 bitIndex)
        public
        pure
        returns (uint8)
    {
        uint32 bIndex = uint32(1) << bitIndex;
        return uint8((number & bIndex) >> bitIndex);
    }

    // 2
    function getFirstByte(uint32 number) public pure returns (uint8) {
        uint8 firstByteMask = 0xFF;
        return uint8(number & firstByteMask);
    }

    // 3
    function resetFirst8Bits(uint32 number) public pure returns (uint32) {
        uint8 firstByteMask = 0xFF;
        return number & firstByteMask;
    }

    // 4
    function toggleBitAt(uint32 number, uint8 bitIndex)
        public
        pure
        returns (uint32)
    {
        uint32 bIndex = uint32(1) << bitIndex;
        return number ^ bIndex;
    }

    // 5
    function isBitOnAtIndex(uint32 number, uint8 bitIndex)
        public
        pure
        returns (bool)
    {
        uint32 bIndex = uint32(1) << bitIndex;
        return (number & bIndex) > 0;
    }

    // 6
    function mergeNumbers(uint32 number1, uint32 number2)
        public
        pure
        returns (uint32)
    {
        return number1 | number2;
    }

    // 7
    function turnOnBitAtIndex(uint32 number, uint8 bitIndex)
        public
        pure
        returns (uint32)
    {
        uint32 bIndex = uint32(1) << bitIndex;
        uint32 nagated = ~bIndex;
        return number & nagated;
    }

    // 8
    function getNumberBitSize(uint32 number) public pure returns (uint8) {
        uint8 bitLength = 0;
        while (number != 0) {
            bitLength++;
            number >>= 1;
        }
        uint8 byteLength = bitLength / 8 + 1;
        return byteLength;
    }

    // 9
    function getCountOfOnBits2(uint32 number) public pure returns (uint8) {
        uint8 _count = 0;
        while (number != 0) {
            if (number & 1 == 1) {
                _count++;
            }
            number >>= 1;
        }
        return _count;
    }

    // 10
    function isEven(uint32 number) public pure returns (bool) {
        return (number & 1) == 0;
    }

    // 11
    function isOdd(uint32 number) public pure returns (bool) {
        return (number & 1) == 1;
    }

    // Possible overflow if number is too big
    // 12
    function multiplyBy2(uint32 number) public pure returns (uint32) {
        return number << 1;
    }

    // 13
    function divideBy2(uint32 number) public pure returns (uint32) {
        return number >> 1;
    }

    // 14
    function isPowerOfTwo(uint32 number) public pure returns (bool) {
        return (number & (number - 1)) == 0;
    }
}
