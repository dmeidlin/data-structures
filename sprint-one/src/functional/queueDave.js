/*jslint browser: true, devel: true, windows: true,
forin: true, vars: true, nomen: true, plusplus: true, bitwise: true,
regexp: true, indent: 2, maxerr: 50 */

var Queue = function () {
  'use strict';
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage.back = 1;
  storage.front = 1;

  // Implement the methods below
  someInstance.enqueue = function (value) {
    storage[storage.back++] = value;
  };

  someInstance.dequeue = function () {
    var firstValueIn = storage[storage.front++];

    delete storage[storage.front - 1];
    return firstValueIn;
  };

  someInstance.size = function () {
    return Object.keys(storage).length - 2;
  };

  return someInstance;
};
