/*jslint browser: true, devel: true, windows: true,
forin: true, vars: true, nomen: true, plusplus: true, bitwise: true,
regexp: true, indent: 2, maxerr: 50 */

// ###Graph Solution

// Instantiate a new graph
var Graph = function () {
  'use strict';
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  'use strict';
  this[node] = {};
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  'use strict';
  return this.hasOwnProperty(node);
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  'use strict';
  delete this[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  'use strict';
  if (this[fromNode][toNode] || this[toNode][fromNode]) {
    return true;
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  'use strict';
  this[fromNode][toNode] = true;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  'use strict';
  delete this[fromNode][toNode];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (iterator) {
  'use strict';
  var i, nodes;

  nodes = Object.keys(this);
  for (i = 0; i < nodes.length; i++) {
    iterator(nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
             Time Complexity
             ---------------
addNode        constant        
contains       constant
removeNode     constant
addEdge        constant
hasEdge        constant
removeEdge     constant
forEachNode    linear
 */



