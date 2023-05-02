/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Find the Index of the First Occurrence in a String
 *
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
 *
 * algorithms
 * Easy (39.19%)
 * Likes:    3335
 * Dislikes: 171
 * Total Accepted:    1.7M
 * Total Submissions: 4.3M
 * Testcase Example:  '"sadbutsad"\n"sad"'
 *
 * Given two strings needle and haystack, return the index of the first
 * occurrence of needle in haystack, or -1 if needle is not part of
 * haystack.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: haystack = "sadbutsad", needle = "sad"
 * Output: 0
 * Explanation: "sad" occurs at index 0 and 6.
 * The first occurrence is at index 0, so we return 0.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: haystack = "leetcode", needle = "leeto"
 * Output: -1
 * Explanation: "leeto" did not occur in "leetcode", so we return -1.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= haystack.length, needle.length <= 10^4
 * haystack and needle consist of only lowercase English characters.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
   if (needle === '') {
      return 0;
   };
   for (let i = 0; i < haystack.length; i++) {
      let j = 0;
      while (j < needle.length && i + j < haystack.length && haystack[i + j] === needle[j]) {
         j++;
      }
      if (j === needle.length) {
         return i;
      }
   };

   return -1;
};
// @lc code=end

