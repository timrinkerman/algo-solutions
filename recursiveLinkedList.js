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
//once head.next == null that value becomes head  
var reverseList = function(head, prev=null) {
    if(!head) return prev;
    let temp = head.next;
    head.next = prev;
    return reverseList(temp, head);
};
