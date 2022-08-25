// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.16;

// Author: Jeremy Then

contract CountBits {
    uint256 public boolsUint;

    bool[255] public bools;

    uint8 public bitCounts;
    uint8 public boolsCount;

    function toggleBoolUintAtIndex(uint8 index) public {
        uint256 bIndex = 1 << index;
        boolsUint = boolsUint ^ bIndex;
    }

    function getBitAtIndex(uint8 index) public view returns (uint8) {
        uint256 bIndex = 1 << index;
        uint8 result = uint8((boolsUint & bIndex) >> index);
        return result;
    }

    // It's a view function, it will not cost gas unless you modify the state.
    function getCountOfOnBits() public view returns (uint256) {
        uint256 boolsUintCopy = boolsUint;
        uint8 _count = 0;
        for (uint8 i = 0; i < 255; i++) {
            if (boolsUintCopy & 1 == 1) {
                _count++;
            }
            boolsUintCopy >>= 1;
        }
        return _count;
    }

    // This is the same as getCountOfOnBits, but modifies the state, thus costs gas
    // Spends about 102813 gas
    function getCountOfOnBits_gasSpender() public {
        uint256 boolsUintCopy = boolsUint;
        uint8 _count = 0;
        for (uint8 i = 0; i < 255; i++) {
            if (boolsUintCopy & 1 == 1) {
                _count++;
            }
            boolsUintCopy >>= 1;
        }
        bitCounts = _count;
    }

    // Bools array impl

    function toggleBoolAtIndex(uint8 index) public {
        bools[index] = !bools[index];
    }

    function getBoolAtIndex(uint8 index) public view returns (bool) {
        return bools[index];
    }

    // It's a view function, it will not cost gas unless you modify the state.
    function getCountOfTrueBools() public view returns (uint256) {
        bool[255] memory boolsCopy = bools;
        uint8 _count = 0;
        for (uint8 i = 0; i < 255; i++) {
            if (boolsCopy[i]) {
                _count++;
            }
        }

        return _count;
    }

    // This is the same as getCountOfTrueBools, but modifies the state, thus costs gas
    // Spends about 345157 gas
    function getCountOfTrueBools_gasSpender() public {
        bool[255] memory boolsCopy = bools;
        uint8 _count = 0;
        for (uint8 i = 0; i < 255; i++) {
            if (boolsCopy[i]) {
                _count++;
            }
        }
        boolsCount = _count;
    }

    function getBools() public view returns (bool[255] memory) {
        return bools;
    }
}
