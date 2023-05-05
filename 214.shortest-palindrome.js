/*
 * @lc app=leetcode id=214 lang=javascript
 *
 * [214] Shortest Palindrome
 *
 * https://leetcode.com/problems/shortest-palindrome/description/
 *
 * algorithms
 * Hard (32.36%)
 * Likes:    3132
 * Dislikes: 219
 * Total Accepted:    155.7K
 * Total Submissions: 481.2K
 * Testcase Example:  '"aacecaaa"'
 *
 * You are given a string s. You can convert s to a palindrome by adding
 * characters in front of it.
 * 
 * Return the shortest palindrome you can find by performing this
 * transformation.
 * 
 * 
 * Example 1:
 * Input: s = "aacecaaa"
 * Output: "aaacecaaa"
 * Example 2:
 * Input: s = "abcd"
 * Output: "dcbabcd"
 * 
 * 
 * Constraints:
 * 
 * 
 * 0 <= s.length <= 5 * 10^4
 * s consists of lowercase English letters only.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

/*
First of all, we create buildPrefixTable() function to construct the prefix table for the pattern string.

Then we initialize the pointer 'i' and 'j'. Both point to the beginning of the longer string and the pattern, respectively. 

The function then loops through each character of the given string, comparing it with the character at index 'j' in the pattern.

If they match, both 'i' and 'j' are incremented.

If 'j' reaches the end of the pattern, a match has been found and the index of the start of the match in the given string is returned.

If the characters do not match, the prefix table is consulted to determine where to restart the comparison of the pattern with the given string.

If 'j' is greater than 0, 'j' is updated to the value at index 'j-1' in the prefix table.

Otherwise, 'i' is incremented

If the end of the given string is reached and no match has been found, the function returns -1.
*/

const buildPrefixTable = (s) => {
   const prefixTable = [0];
   let j = 0;
   
   for (let i = 1; i < s.length; i++) {
       while (j > 0 && s[i] !== s[j]) {
           j = prefixTable[j - 1];
       }
       if (s[i] === s[j]) {
           j++;
       }
       prefixTable[i] = j;
   }
   return prefixTable;
};

/*
Now we reverse the given string to get 'revStr'.
Then we need to concatenate the original string with 'revStr' with '#' character in between to get 'concatStr'.

Then we call the created earlier 'buildPrefixTable' function to construct the prefix table for 'concatStr'.

Then it retrieves the value at the last index of the prefix table, which corresponds to the length of the reverse of the shortest palindrome that can be formed from a given string 's'.

Finally, the function extracts the remaining characters of revStr (excluding the length of the longest prefix/suffix) and appends them to the front of str to obtain the shortest palindrome.
*/

const shortestPalindrome = (s) => {
   const revStr = s.split('').reverse().join(''); // At first we need to reverse given string.
   const concatStr = s + '#' + revStr; // Then we concatinate it with '#' character in between.
   const prefixTable = buildPrefixTable(concatStr); 
   const longestPrefix = prefixTable[prefixTable.length - 1];
   const remainingChars = revStr.slice(0, revStr.length - longestPrefix);
   return remainingChars + s;
}