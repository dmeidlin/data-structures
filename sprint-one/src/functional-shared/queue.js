/*jslint browser: true, devel: true, windows: true,
forin: true, vars: true, nomen: true, plusplus: true, bitwise: true,
regexp: true, indent: 2, maxerr: 50 */

var queueMethods = {};

queueMethods.enqueue = function (value) {
  'use strict';
  this.storage[this.storage.back++] = value;
};

queueMethods.dequeue = function () {
  'use strict';
  var firstValueIn = this.storage[this.storage.front++];

  delete this.storage[this.storage.front - 1];
  return firstValueIn;
};

queueMethods.size = function () {
  'use strict';
  return Object.keys(this.storage).length - 2;
};


var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  'use strict';
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.storage.back = 1;
  someInstance.storage.front = 1;

  // Implement the methods below
  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;

  return someInstance;

};

