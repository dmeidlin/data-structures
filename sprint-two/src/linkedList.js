/*jslint browser: true, devel: true, windows: true,
forin: true, vars: true, nomen: true, plusplus: true, bitwise: true,
regexp: true, indent: 2, maxerr: 50 */

var Node = function (value) {
  'use strict';
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


var LinkedList = function () {
  'use strict';
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    //Check if the list is empty before the add.
    if (list.head === null) {
      //if empty, set the head and tail to a new instance of Node with value.
      list.head = Node(value);
      list.tail = list.head;
    } else {
      //else make the old tail node point to a new instance of Node with value.
      list.tail.next = Node(value);
      //and set the new node as the new list tail. 
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function () {
    //Find the Target node the Head is pointing to and assign it to a placeholder.
    var target = list.head.next;
    //Assign the value of the current Head to a placeholder to return.
    var headValue = list.head.value;
    //Cut off the head by setting the pointer to null.
    list.head.next = null;
    //Designate the Target as the new Head.
    list.head = target;
    //Return the chopped-off Head value.
    return headValue;
  };

  list.contains = function (target) {
    var currentNode;
    
    //Start the search at the Head.
    currentNode = list.head;

    //Jump sequentially to each node in the list until at the Tail.
    while (currentNode !== undefined) {
    //Is it true that target is here?
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};


/*
 * Complexity: What is the time complexity of the above functions?
   addToTail = constant time complexity,
   removeHead = constant time complexity,
   contains() = linear time complexity.
 */
