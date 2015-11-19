/*jslint browser: true, devel: true, windows: true,
forin: true, vars: true, nomen: true, plusplus: true, bitwise: true,
regexp: true, indent: 2, maxerr: 50 */

var Stack = function () {
  'use strict';
  var someInstance = {};
  
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function (value) {
    storage[Object.keys(storage).length + 1] = value;
  };

  someInstance.pop = function () {
    var lastValueIn = storage[Object.keys(storage).length];
    delete storage[Object.keys(storage).length];
    return lastValueIn;
  };

  someInstance.size = function () {
    return Object.keys(storage).length;
  };

  return someInstance;
};
