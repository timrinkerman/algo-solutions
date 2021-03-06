/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

//create a function that traverses the tree and sums the node vals

//search through our bin tree and add values = or between low and high

//
var rangeSumBST = function(root, low, high) {
    let sum = 0  
   
    const nameIt = (node) => {
         if(!node){
             return
          }
          if (node.val >= low && node.val <= high){ 
              sum += node.val
          }
              nameIt(node.left) 
              nameIt(node.right)
      }
   nameIt(root)
   return sum
   };
   