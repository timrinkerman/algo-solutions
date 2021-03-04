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
//call function + 2 
// swap head with head.next
// 
var swapPairs = function(head) {
    if(head == null || head.next == null){
            return head
        }
    const swapPairsForReal = (start, end) =>{   
    if (start){   
    let temp = start.val
    start.val = end.val
    end.val = temp
        if(end.next && end.next.next){
            swapPairsForReal(start.next.next, end.next.next)
        }
    }
    }    
    swapPairsForReal(head, head.next)
      return head
};