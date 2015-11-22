/*jslint browser: true, devel: true, windows: true,
forin: true, vars: true, nomen: true, plusplus: true, bitwise: true,
regexp: true, indent: 2, maxerr: 50 */

var Set = function () {
  'use strict';
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function (item) {
  'use strict';
  this._storage[item] = item;
};

setPrototype.contains = function (item) {
  'use strict';
  if (Object.keys(this._storage).indexOf(item) === -1) {
    return false;
  }
  return true;
};

setPrototype.remove = function (item) {
  'use strict';
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
           Time Complexity
           ---------------

add        constant
contains   linear
remove     constant
 */
