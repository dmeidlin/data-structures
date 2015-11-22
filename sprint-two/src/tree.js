/*jslint browser: true, devel: true, windows: true,
forin: true, vars: true, nomen: true, plusplus: true, bitwise: true,
regexp: true, indent: 2, maxerr: 50 */

var Tree = function (value) {
  'use strict';
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function (value) {
  'use strict';
  this.children.push(Tree(value));
};

treeMethods.contains = function (target) {
  'use strict';
  var searchTree = function (treeNode, targetValue) {

    //Check if the parent node has the target value
    if (treeNode.value === targetValue) {
    //if it does then set is Here to true
      return true;
    } else {
    //else search the children for the target
      for (var i = 0; i < treeNode.children.length; i++) {
        if (searchTree(treeNode.children[i], targetValue)) {
          return true;
        }
      }
    }
  
    return false;
  };

  return searchTree(this, target);
};

/*
 * Complexity: What is the time complexity of the above functions?
 contains: linear
 addchild: contant
 */

