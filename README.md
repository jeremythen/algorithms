# algorithms
Repository to hold algorithms descriptions and solutions in multiple programing languages, as practice.

- [algorithms](#algorithms)
  - [List of algorithms to implement:](#list-of-algorithms-to-implement)
    - [1 Max Chars](#1-max-chars)
    - [2 Palindrome with question marks](#2-palindrome-with-question-marks)
    - [3 Fibonacci with 2 variables](#3-fibonacci-with-2-variables)
    - [4 Matrix Spiral](#4-matrix-spiral)
    - [Revert a number](#revert-a-number)
    - [5 Array Chunk](#5-array-chunk)
    - [6 Capitalize a string](#6-capitalize-a-string)
    - [7 Steps](#7-steps)
    - [8 Pyramid](#8-pyramid)
    - [9 Weave](#9-weave)
    - [10 Queue From Stacks](#10-queue-from-stacks)
    - [11 Permutation](#11-permutation)
    - [12 Row Sum Of Triangle Of Odd Numbers](#12-row-sum-of-triangle-of-odd-numbers)
    - [13 Sums](#13-sums)
    - [14 Construct](#14-construct)
    - [15 First Non Repeating Character](#15-first-non-repeating-character)
    - [16 Palindromic Substring](#16-palindromic-substring)
    - [17 Digit At](#17-digit-at)
    - [18 Remove Duplicates](#18-remove-duplicates)
    - [19 Remove target occurrences](#19-remove-target-occurrences)
    - [20 Implement indexOf](#20-implement-indexof)
    - [21 Length of last word](#21-length-of-last-word)
    - [22 Sum in Array](#22-sum-in-array)
    - [23 Max 1 Bits Sequence](#23-max-1-bits-sequence)
    - [24 Move Zeros](#24-move-zeros)
    - [25 What Letter Was Added](#25-what-letter-was-added)
    - [26 Concatenate integers](#26-concatenate-integers)
    - [27 Sum Zero](#27-sum-zero)
    - [28 Longest Unique Chars Sequence](#28-longest-unique-chars-sequence)
    - [29 Same Squared](#29-same-squared)
    - [30 Pascal Triangle](#30-pascal-triangle)
    - [31 Can Construct Palindrome](#31-can-construct-palindrome)
    - [32 Implement a basic solution for the Merkle Tree/Root/Proof](#32-implement-a-basic-solution-for-the-merkle-treerootproof)
    - [Shortest Euclidian Distance](#shortest-euclidian-distance)
    - [[Numbers] Min Cost of Adjacent Tower Height modification](#numbers-min-cost-of-adjacent-tower-height-modification)
    - [nth Sorting](#nth-sorting)

## List of algorithms to implement:

### 1 Max Chars
Receive a strings and return the most repeated character.
Given "abcdefacasdfaaaa" should return "a", because the "a" is the most repeated character in that string.

### 2 Palindrome with question marks
Write a function `toPalindrome(String s)` that returns any palindrome which can be obtained by replacing all of the question marks in that string by the lowercase letter "a". If no palindrome can be obtained, the function should return the string "NO".

1) Given "?ab??a", the function should return "aabbaa"
2) Given "bab??a", the function should return "NO".

### 3 Fibonacci with 2 variables
Return the value of the fibonacci number at the fibonacci position of n, where n is a positive number.
Given 6, return 8. Given 7, return 13, etc.
Only use a loop and 2 integers to hold the fibonacci values to solve the problem.

### 4 Matrix Spiral
### Revert a number
Given an integer, return an integer with the digits reversed. For example:
123 -> 321
500 -> 5
503 -> 305

Use only arithmetics.

### 5 Array Chunk

Given an array and chunk size, divide the array into many subarrays where each subarray is of the provided size.

Examples:

```js
chunk([1,2,3,4], 2) // -> [[1,2], [3,4]]
chunk([1,2,3,4,5], 2) // -> [[1,2], [3,4], [5]]

```

### 6 Capitalize a string

Give a string, capitalize the first letter of all the words in it.

Examples:
```js
capitalize("a short sentence") // -> "A Short Sentence"
```

### 7 Steps

Write a function that accepts a positive number n. The function should console.log a step shape with N levels using the # character. Make sure the step has spaces on the right hand side.

Examples:
```js
step(2);

// '# '
// '##'

step(3);

// '#  '
// '## '
// '###'

```

### 8 Pyramid

Write a function that accepts an integer n and returns a n*n spiral matrix.

Examples:

```js

matrix(2);

// [[1,2]
// [4,3]]

matrix(3);

// [[1,2,3],
// [8, 9, 4],
// [7, 6, 5]]

```

### 9 Weave

Weave receives two queues as arguments and combines the contents of each into a new, third queue.
The third queue should contain the alternating content of the two queues.
The function should handle queues of different lengths, without inserting 'undefined' or 'null' into the new one. If it doesn't have more values, it should try to add any.

### 10 Queue From Stacks

Implement a Queue data structure using two stacks.
Create another abstraction that holds the tow stacks and provide queue methods to access this abstraction. Only use the `pop` and `push` methods of the stacks to simulate the queue.

### 11 Permutation

Given a string S, return a list with all the permutation of that string.

Given S = "abc", return [abc, acb, bac, bca, cab, cba]

### 12 Row Sum Of Triangle Of Odd Numbers

Given a triangle of consecutive odd numbers.

If given 1, return 1.
If given 2, return the sum of the numbers in the second row, of 3 + 5 => 8.
If given 3, return the sum of the numbers in the third row, of 7 + 9 + 11 => 27.

Check the dedicated folder for this problem, for more details.

### 13 Sums

Given a number `N`, and an array of numbers `numbers`, verify if you can recreate the target number `N` summing numbers from the `numbers` array.
Return true if it's possible to create the target number `N` summing numbers from the `numbers` array. Return false otherwise.

1) Can Sum
2) How Sum
3) Best Sum

Check the dedicated folder for this problem, for more details.
### 14 Construct

Check whether a string can be recreated from a bank or words (array of strings), how it can be created and how many times it can be created from that word bank. Use as many words from the word bank as you want.

1) Can Construct
2) How Construct
3) All Construct

Check the dedicated folder for this problem, for more details.

### 15 First Non Repeating Character

Find the first character that doesn't repeat in a string.

Examples:

Given "abcde", return "a" because "a" is the first character that doesn't repeat.
Given "abcda", return "b" because "b" is the first character that doesn't repeat.
Given "abcdeabcdf", return "e", because although "f" doesn't repeat in the string, "e" is the first that doesn't repeat.

Assume a non empty string is given.

### 16 Palindromic Substring

Find the largest sub palindrome in a string.

Given hellosannasmith, return sannas.
Given abcdefgg, return none

### 17 Digit At

Implement function that receives an int number `num` and an int number `position`, where the `position` is represent the ith digit of `num` to return, counting from the back of the number.

Given `num` = 7895, `position` = 2, return 9, because 9 is the 2nd digit of `num` from the back.

### 18 Remove Duplicates

Given a sorted array of integers in ascending order, modify the given array removing the duplicates. I.e, each element should appear only once. And print the resulting array and k, where k is the number of unique numbers in the array.

Examples:

Given numbers = [1,1,2]
Return: numbers = [1,2,] and k = 2, because there are 2 unique numbers.

Given numbers =  [0,0,1,1,1,2,2,3,3,4]
Return: numbers =  [0,1,2,3,4,,,,,] and k = 5, because there are 5 unique numbers.

### 19 Remove target occurrences

Given an array only containing integers and a value called target which is also an integer, Modify the input array to delete all the elements that are equal to target, shifting all the other elements to the left and print the count of the remaining elements on that array that were not removed.

Given: numbers = [3,2,2,3], val = 3
Print: [2,2,,], 2, because the target is 3, and all it's occurrences were removed from the original array, shifting the other elements to the left. And 2 because that was the amount of elements remaining.

Given: numbers = [0,1,2,2,3,0,4,2], val = 2
Print: numbers = [0,1,4,0,3,,,_], 5.

### 20 Implement indexOf

Given a string and a substring, return the index first occurrence of the substring in the string. Return -1 if no occurrence was found.

Given: str = "Hello world", substr = "ll"
Return: 2, because the first occurrence of "ll" is in the index 2 of the string.

### 21 Length of last word

Given a string containing words separated by one or more spaces, return the length of the last word.

Given: "   hello      world  "
Return: 5, because the last word is "world" and it's length is 5.

### 22 Sum in Array

Given a number represented in an array where each index in the array holds a digit for that number, increment the last digit in the array by 1. The whole array values should change if needed.

Given: digits = [1,2,3]
Return: digits = [1,2,4]

Given: digits = [9,9,9]
Return: digits = [1,0,0,0]

Given: digits = [1,2,3,4,5,6]
Return: digits = [1,2,3,4,5,7]

### 23 Max 1 Bits Sequence

Given a binary number, write a function findMax1BitsSequence(n) that receives a number (or binary) and returns the longest subsequence of 1s.


```javascript
console.log(findMax1BitsSequence(0b1111111110010111011) === 9); // 9 because the longest subsequence of 1s is 9 1s one next to the other.
console.log(findMax1BitsSequence(0b10011110010111011) === 4);
console.log(findMax1BitsSequence(0b1111001) === 4);
console.log(findMax1BitsSequence(0b101) === 1);
```

### 24 Move Zeros

Given an integer array numbers, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

 
Example 1:

Input: numbers = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: numbers = [0]
Output: [0]

Input: numbers = [1,0,4,0,0,10,20,100]
Output: [1,4,10,20,100,0,0,0]

### 25 What Letter Was Added

You are given two strings s and t.
String t is generated by random shuffling string s and then add one more letter at a random position.
write a function that returns the letter that was added to t.


Example 1:

Input: s = "abcd", t = "abcde"
Output: "e"
Explanation: 'e' is the letter that was added.
Example 2:

Input: s = "", t = "y"
Output: "y"
Example 3:

Input: s = "a", t = "aa"
Output: "a"
Example 4:

Input: s = "ae", t = "aea"
Output: "a"

### 26 Concatenate integers

Given 2 integers, write a function that concatenates them into one.

Given: n1 = 234, n2 = 567
Return: 234567

Given: n1 = 6234, n2 = 723
Return: 6234723

We are expecting an efficient solution using arithmetics.

### 27 Sum Zero

Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair doesn't exist.

sumZero([-3-2-1,0,1,2,3]) // [-3,3]
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined

### 28 Longest Unique Chars Sequence

Given a string, return the first longest unique chars sequence.

Examples:

Given: "subsequence"
return: "ubseq"

Given: "hellothere"
return: "lother"

Given: "abbacdcbd"
return: "bacd"

### 29 Same Squared

Write a function called same, which accepts two arrays. The function should return true if every valu in the array has it's corresponding value squared in the second array. The frequency of values must be the same

sameSquared([1,2,3], [4,1,9]) === true; // true
sameSquared([1,2,3], [1,9]) === false) // true
sameSquared([1,2,1], [4,4,1]) === false; // true
sameSquared([1,2,5,3,4,5,6,6], [1,4,9,16,25,36,36,25]) === true; // true

### 30 Pascal Triangle

Given an integer numRows, return the first numRows of Pascal's triangle.

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Input: numRows = 1
Output: [[1]]

### 31 Can Construct Palindrome

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Example 3:

Input: s = "bb"
Output: 2

### 32 Implement a basic solution for the Merkle Tree/Root/Proof

### Shortest Euclidian Distance

You have an array `points` on a Cartesian plane. Find and return the minimum possible Euclidian distance between two points with different indices in `points`.

Example:

For points = [[0, 11], [-7, 1], [-5, -3]]

output should be about, rounded to 2 decimals:

```js
shortestPointLineLength(points); // 4.47
```

Every inner array `points[i]` contains exactly 2 integers: the `x` and `y` coordinates of the `ith` point.

### [Numbers] Min Cost of Adjacent Tower Height modification

You are given an array `H` containing the height of towers. The idea is that there should not be 2 adjacent towers with the same height. If that is the case, then you need to increment the size of one of the towers so they are not the same height.
There can be many towers with the same height, but non of them should be the same height.

You have given an array `M` which indicates the cost of increasing the height by 1 on each tower at index `i`.

The idea is to provide a solution that avoids 2 adjacent towers with the same height in the least cost.

For example, given:

```js
const H = [2, 2, 2];
const M = [3, 10, 6];
```

We could try to modify the element of `H` at index 1: `[2, 3, 2]`, so towers with the same height are not next to each other, but increasing `H[1]` would cost `M[1]` which is 10.
And if we instead modified `0` and `2` then `H` would be: `[3, 2, 3]` and that would cost `M[0]` + `M[2]` which is 9, less than 10. So, this is the solution in this case.

The function will have the following signature:

```js
function minCost(H, M)
```

And should return the minimum cost it would need to modify the towers height so that no towers with the same height are adjacent.


### nth Sorting

1) Bubble Sort
2) Selection Sort
3) Insertion Sort
4) Merge Sort
5) Quick Sort
6) Heap Sort
7) Radix Sort
8) Bucket Sort
9) Counting Sort
10) Pigeonhole Sort