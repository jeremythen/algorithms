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
        uint8 oneByteMask = 0xFF;
        return uint8(number & oneByteMask);
    }

    // 3
    function resetFirst8Bits(uint32 number) public pure returns (uint32) {
        uint8 oneByteMask = 0xFF;
        return number & oneByteMask;
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
    function getCountOfOnBits(uint32 number) public pure returns (uint8) {
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

    // 10.1
    function isOdd(uint32 number) public pure returns (bool) {
        return (number & 1) == 1;
    }

    // Possible overflow if number is too big
    // 11
    function multiplyBy2(uint32 number) public pure returns (uint32) {
        return number << 1;
    }

    // 12
    function divideBy2(uint32 number) public pure returns (uint32) {
        return number >> 1;
    }

    // 13
    function isPowerOfTwo(uint32 number) public pure returns (bool) {
        return (number & (number - 1)) == 0;
    }

    // 14
    function swapVariables(uint32 _number1, uint32 _number2)
        public
        pure
        returns (uint32 number1, uint32 number2)
    {
        _number1 = _number1 ^ _number2;
        _number2 = _number1 ^ _number2;
        _number1 = _number1 ^ _number2;

        return (_number1, _number2);
    }

    // 15
    // If you know that 'number' is in Little Endian, then you'll get the result in Big Endian
    // If you know that 'number' is in Big Endian, then you'll get the result in Little Endian
    function toggleLittleToBigEndian(uint32 number)
        public
        pure
        returns (uint32)
    {
        uint32 oneByteMask = 0xFF;

        // & operator, shifting, masking, | operator to merge results.
        uint32 numberInLE = ((number & (oneByteMask << 24)) >> 24) |
            ((number & (oneByteMask << 16)) >> 8) |
            ((number & (oneByteMask << 8)) << 8) |
            ((number & oneByteMask) << 24);

        return numberInLE;
    }

    // 00111101 10100011 11110001 01011111
    // 01011111 11110001 10100011 00111101

    // Bit Field

    // In this example, a maximum of 32 boolean values can be stored in this 32-bit integer.
    uint32 public checkList;

    function check(uint8 itemIndex) public returns (uint32) {
        require(itemIndex < 32, "Index value should be less than 32.");

        checkList = checkList | (uint32(1) << itemIndex);

        return checkList;
    }

    function isComplete(uint8 itemIndex) public view returns (bool) {
        require(itemIndex < 32, "Index value should be less than 32.");

        bool complete = (checkList & (uint32(1) << itemIndex)) > 0;

        return complete;
    }

    function unCheck(uint8 itemIndex) public returns (uint32) {
        require(itemIndex < 32, "Index value should be less than 32.");

        uint32 reversedBits = ~(uint32(1) << itemIndex);

        checkList = checkList & reversedBits;

        return checkList;
    }

    function toggleCheck(uint8 itemIndex) public returns (uint32) {
        require(itemIndex < 32, "Index value should be less than 32.");

        checkList = checkList ^ (uint32(1) << itemIndex);

        return checkList;
    }

    function getCountOfChecked() public view returns (uint8) {
        return getCountOfOnBits(checkList);
    }
}
