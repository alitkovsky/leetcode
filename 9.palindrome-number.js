/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 *
 * https://leetcode.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (53.53%)
 * Likes:    9230
 * Dislikes: 2468
 * Total Accepted:    3.1M
 * Total Submissions: 5.7M
 * Testcase Example:  '121'
 *
 * Given an integer x, return true if x is a palindrome, and false
 * otherwise.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it
 * becomes 121-. Therefore it is not a palindrome.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: x = 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a
 * palindrome.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * -2^31 <= x <= 2^31 - 1
 * 
 * 
 * 
 * Follow up: Could you solve it without converting the integer to a string?
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   if (x < 0 || (x !== 0 && x % 10 === 0)) {
      return false;
   };
   let reversed = 0;
   while (x > reversed) {
      reversed = (reversed * 10) + (x % 10);
      x = Math.floor(x / 10);
   }
   return x === reversed || x === Math.floor(reversed / 10);
};

let x = 121;
let isPalindromeNumber = isPalindrome(x);
console.log(isPalindromeNumber);
// @lc code=end

