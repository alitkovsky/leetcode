/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 *
 * https://leetcode.com/problems/isomorphic-strings/description/
 *
 * algorithms
 * Easy (42.90%)
 * Likes:    6567
 * Dislikes: 1415
 * Total Accepted:    871.9K
 * Total Submissions: 2M
 * Testcase Example:  '"egg"\n"add"'
 *
 * Given two strings s and t, determine if they are isomorphic.
 * 
 * Two strings s and t are isomorphic if the characters in s can be replaced to
 * get t.
 * 
 * All occurrences of a character must be replaced with another character while
 * preserving the order of characters. No two characters may map to the same
 * character, but a character may map to itself.
 * 
 * 
 * Example 1:
 * Input: s = "egg", t = "add"
 * Output: true
 * Example 2:
 * Input: s = "foo", t = "bar"
 * Output: false
 * Example 3:
 * Input: s = "paper", t = "title"
 * Output: true
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= s.length <= 5 * 10^4
 * t.length == s.length
 * s and t consist of any valid ascii character.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
   if(s.length !== t.length){
      return false;
   };

   let sHasMap = {},
      tHasMap = {},
      current = 0;

   while(current <= s.length - 1){
      if(sHasMap[s[current]] !== tHasMap[t[current]]){
         return false;
      };

      sHasMap[s[current]] = current + 1;
      tHasMap[t[current]] = current + 1;
      current++;
   };

   return true;
};
// @lc code=end

