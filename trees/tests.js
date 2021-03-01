import BinaryTree from './BinaryTree.js'
import Tree from './Tree.js'

const tree = new Tree

BinaryTree.insertValue(tree ,8)
BinaryTree.insertValue(tree ,7)
BinaryTree.insertValue(tree ,10)
BinaryTree.insertValue(tree ,5)
BinaryTree.insertValue(tree ,6)
BinaryTree.insertValue(tree ,4)
BinaryTree.insertValue(tree ,3)
BinaryTree.insertValue(tree ,9)
BinaryTree.insertValue(tree ,11)
BinaryTree.insertValue(tree ,12)
BinaryTree.insertValue(tree ,2)
BinaryTree.insertValue(tree ,1)

console.log(tree.getRoot().left_tree.left_tree.left_tree)
/**
 * result most be like this to be balanced
 * 6
 * ** 4 , 10
 * **** 2 , 5 , 8 , 12
 * ****** 1 , 3 , 7 , 9 , 11
 */