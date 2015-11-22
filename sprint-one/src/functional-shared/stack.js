/*jslint browser: true, devel: true, windows: true,
forin: true, vars: true, nomen: true, plusplus: true, bitwise: true,
regexp: true, indent: 2, maxerr: 50 */

//Create a global object to hold shared methods.
var stackMethods = {};

stackMethods.push = function (value) {
  'use strict';
  this.storage[Object.keys(this.storage).length + 1] = value;
};

stackMethods.pop = function () {
  'use strict';
  var lastValueIn = this.storage[Object.keys(this.storage).length];
  delete this.storage[Object.keys(this.storage).length];
  return lastValueIn;
};

stackMethods.size = function () {
  'use strict';
  return Object.keys(this.storage).length;
};

//Create a constructor using the functional-shared pattern
var Stack = function () {
  'use strict';
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};

  // Implement the methods below
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;

  return someInstance;
};





