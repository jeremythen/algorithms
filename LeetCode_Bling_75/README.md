# LeetCode

This directory will contain descriptions and solutions for "Blind 75 Must Do LeetCode" problems found at https://leetcode.com/list/xi4ci4ig/

## 1 [Two Sum](https://leetcode.com/problems/two-sum/)

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Examples:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]

Input: nums = [3,3], target = 6
Output: [0,1]

## 2 [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

Given a string s, find the length of the longest substring without repeating characters.

longestUniqueCharsSubsequence("subsequence") === "ubseq";
longestUniqueCharsSubsequence("hellothere") === "lother";
longestUniqueCharsSubsequence("abbacdcbd") === "bacd";
longestUniqueCharsSubsequence("abcabcbb") === "abc";
longestUniqueCharsSubsequence("au") === "au";

## 3 Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.

palindromicSubstring("hellosannasmith") === "sannas";
palindromicSubstring("abcdefgg") === "gg";
palindromicSubstring("cbbd") === "cbbd";

## 4 [Container With Most Water](https://leetcode.com/problems/container-with-most-water/)

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

