/*jslint browser: true, devel: true, windows: true,
forin: true, vars: true, nomen: true, plusplus: true, bitwise: true,
regexp: true, indent: 2, maxerr: 50 */

//Return a new instance of a binary tree node called 'Node'.
var Node = function (value) {
  'use strict';
  var node = {};

  node.value = value;
  node.left = null;
  node.right = null;

  //Make a new child node which stores the  value 'value'.
  node.insert = function (value) {
    //Compare value to the value stored in node...
    if (node.value > value) {
      //...if value is less than the value stored in node,
      //   then check if there is already a left child node...
      if (!node.left) {
        //...if there is no left child, make a new node which stores 
        //   value and assign it to the left child of node. 
        node.left = Node(value);
      } else {
        //else make a call to the current left child node to insert 
        //value into the sub-tree that has the left child as the top node.
        node.left.insert(value);
      }
    } else {
      //...if value is greater than the value stored in node,
      //   then check if there is already a right child node...
      if (!node.right) {
        //...if there is no right child, make a new node which stores 
        //   value and assign it to the right child of node. 
        node.right = Node(value);
      } else {
        //else make a call to the current right child node to insert 
        //value into the sub-tree that has the right child as the top node.
        node.right.insert(value);
      }
    }
  };

  //Return whether or whether not the tree or sub-tree which has node as the top node 
  //contains the value called 'value'
  node.contains = function (value) {
    //Compare the input value called 'value' to the node's value...
    if (node.value === value) {
      //...if node's value equals value then return that node does contain value.
      return true;
      //else, check if there is a right child node.
    } else if (node.right && node.value < value) {
      //If there is a right child node, check if the right child sub-tree contains value...
      if (node.right.contains(value)) {
        //...and if the right child sub-tree contains value return that the tree contains value
        return true;
      }
      //Otherwise, check if there is a left child node.
    } else if (node.left && node.value > value) {
      //if there is a left child node, check if the left child sub-tree contains value...
      if (node.left.contains(value)) {
        //...and if the left child sub-tree contains value return that the tree contains value 
        return true;
      }
    }
    //Otherwise, return that the tree does not contain value.
    return false;
  };

  //Accept a callback function and execute it on every value contained in the tree.
  node.depthFirstLog = function (iterator) {
    //Call the iterator and execute it on the node value
    iterator(node.value);
    //Check if there is a right child node...
    if (node.right) {
      //...if there is a right child, then call the iterator 
      //   and execute it on the right child.
      node.right.depthFirstLog(iterator);
    }
    //Check if there is a left child node...
    if (node.left) {
      //...if there is a left child, then call the iterator
      //   and execute it on the left child.
      node.left.depthFirstLog(iterator);
    }
  };

  return node;
};

//Return a new instance of a binary search tree called 'BinarySearchTree'.
var BinarySearchTree = function (topValue) {
  'use strict';
  //Given the top node called 'tree' in an empty binary tree...
  var tree;

  //...store the value 'topValue' in tree.
  tree = Node(topValue);

  return tree;
};

/*
 * Complexity: What is the time complexity of the above functions?
                Time Complexity
                ---------------
insert          logarithmic
contains        logarithmic
depthFirstLog   linear
 */
