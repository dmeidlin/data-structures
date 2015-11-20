/*jslint browser: true, devel: true, windows: true,
forin: true, vars: true, nomen: true, plusplus: true, bitwise: true,
regexp: true, indent: 2, maxerr: 50 */

var Stack = function () {
  'use strict';
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.storage = {};
  // Implement the methods below
  someInstance.push = function (value) {
    someInstance.storage[Object.keys(someInstance.storage).length + 1] = value;
  };

  someInstance.pop = function () {
    var lastValueIn = someInstance.storage[Object.keys(someInstance.storage).length];
    delete someInstance.storage[Object.keys(someInstance.storage).length];
    return lastValueIn;
  };

  someInstance.size = function () {
    return Object.keys(someInstance.storage).length;
  };

  return someInstance;
};
