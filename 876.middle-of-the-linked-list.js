/*
 * @lc app=leetcode id=876 lang=javascript
 *
 * [876] Middle of the Linked List
 *
 * https://leetcode.com/problems/middle-of-the-linked-list/description/
 *
 * algorithms
 * Easy (75.74%)
 * Likes:    9301
 * Dislikes: 274
 * Total Accepted:    1.3M
 * Total Submissions: 1.7M
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Given the head of a singly linked list, return the middle node of the linked
 * list.
 * 
 * If there are two middle nodes, return the second middle node.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: head = [1,2,3,4,5]
 * Output: [3,4,5]
 * Explanation: The middle node of the list is node 3.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: head = [1,2,3,4,5,6]
 * Output: [4,5,6]
 * Explanation: Since the list has two middle nodes with values 3 and 4, we
 * return the second one.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the list is in the range [1, 100].
 * 1 <= Node.val <= 100
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
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = (head) => {
    let middlePoint = head,
        endPoint = head;

   while (endPoint && endPoint.next){
      middlePoint = middlePoint.next;
      endPoint = endPoint.next.next;
   }

   return middlePoint;
};
// @lc code=end

