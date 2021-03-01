import Tree from './Tree.js'
import TreeNode from './TreeNode.js'

/**
 * Binary Tree Functions :
 * ---------------------
 * insertValue
 * findValue
 * deleteValue
 */
export default {
    /**
     * hint : this version need to be balanced
     * @param {Tree} tree
     */
    insertValue: (tree ,value) => {
        const inserted_node = new TreeNode(value)
        if (!tree.getRoot())
            tree.setRoot(inserted_node)
        else {
            let current_node = tree.getRoot() ,node = undefined
            while(current_node) {
                node = current_node
                if (current_node.value > value) {
                    current_node = current_node.left_tree
                } else {
                    current_node = current_node.right_tree
                }
            }
            if (node.value > value) node.left_tree = inserted_node
            else node.right_tree = inserted_node
        }
    }
}