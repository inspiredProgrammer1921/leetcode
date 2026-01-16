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
var deleteDuplicates = function(head) {
    // Handle empty list
    if (!head) return head;
    
    // Start from the head
    let current = head;
    
    // Traverse the list
    while (current && current.next) {
        // If current value equals next value, skip the next node
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            // Otherwise, move to the next node
            current = current.next;
        }
    }
    
    return head;
};