var searchBST = function(root, val) {
    if(root) {
        if(root.val && root.val === val) {
            return root
        }
        if(root.val && root.val > val) return searchBST(root.left, val)
        if(root.val && root.val < val) return searchBST(root.right, val)
    } else {
        return root
    }
};