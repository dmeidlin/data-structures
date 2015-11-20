/*jslint browser: true, devel: true, windows: true,
forin: true, vars: true, nomen: true, plusplus: true, bitwise: true,
regexp: true, indent: 2, maxerr: 50 */

//Create a constructor using the functional-shared pattern
var Stack = function () {
  'use strict';
  this.storage = {};
};

Stack.prototype.push = function (value) {
  'use strict';
  this.storage[Object.keys(this.storage).length + 1] = value;
};

Stack.prototype.pop = function () {
  'use strict';
  var lastValueIn = this.storage[Object.keys(this.storage).length];
  delete this.storage[Object.keys(this.storage).length];
  return lastValueIn;
};

Stack.prototype.size = function () {
  'use strict';
  return Object.keys(this.storage).length;
};
