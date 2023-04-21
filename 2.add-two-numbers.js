/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (40.35%)
 * Likes:    25252
 * Dislikes: 4886
 * Total Accepted:    3.5M
 * Total Submissions: 8.8M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order, and each of their nodes
 * contains a single digit. Add the two numbers and return the sum as a linked
 * list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in each linked list is in the range [1, 100].
 * 0 <= Node.val <= 9
 * It is guaranteed that the list represents a number that does not have
 * leading zeros.
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let p1 = l1,
      p2 = l2,
      number1 = 0,
      number2 = 0,
      carry = 0,
      solution = new ListNode(0),
      current = solution;

  while(p1 || p2){
    number1 = (p1) ? p1.val : 0;
    number2 = (p2) ? p2.val : 0;

    if(number1 + number2 + carry > 9){
      current.next = new ListNode(number1 + number2 + carry - 10);
      current = current.next;
      carry = 1;
    }else{
      current.next = new ListNode(number1 + number2 + carry);
      current = current.next;
      carry = 0;
    }

    if(p1) p1 = p1.next;
    if(p2) p2 = p2.next; 
  }

  if(carry) current.next = new ListNode(carry);
  return solution.next;
};
// @lc code=end

