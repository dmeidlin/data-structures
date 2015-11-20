/*jslint browser: true, devel: true, windows: true,
forin: true, vars: true, nomen: true, plusplus: true, bitwise: true,
regexp: true, indent: 2, maxerr: 50 */

var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  'use strict';
  this.storage = {};
  this.storage.front = 1;
  this.storage.back = 1;
};

Queue.prototype.enqueue = function (value) {
  'use strict';
  this.storage[this.storage.back++] = value;
};

Queue.prototype.dequeue = function () {
  'use strict';
  var firstValueIn = this.storage[this.storage.front++];

  delete this.storage[this.storage.front - 1];
  return firstValueIn;
};

Queue.prototype.size = function () {
  'use strict';
  return Object.keys(this.storage).length - 2;
};


