/*jslint browser: true, devel: true, windows: true,
forin: true, vars: true, nomen: true, plusplus: true, bitwise: true,
regexp: true, indent: 2, maxerr: 50 */

var HashTable = function () {
  'use strict';
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.retrieve = function (k) {
  'use strict';
  var i, index, collisions;

  //Get the collisions at the index.
  index = getIndexBelowMaxForKey(k, this._limit);
  collisions = this._storage.get(index);

  //Iterate over all tuples in the collisions and..
  for (i = 0; i < collisions.length; i++) {
    //if the key for a tuple equals k...
    if (collisions[i][0] === k) {
      //return the value of the tuple.
      return collisions[i][1];
    }
  }
};

HashTable.prototype.insert = function (k, v) {
  'use strict';
  var i, keyPresent, index, collisions;

  keyPresent = false;
  //Get the collisions at the index.
  index = getIndexBelowMaxForKey(k, this._limit);
  collisions = this._storage.get(index);

  //Check if there is a tuple already present in the collisions.
  if (collisions) {
    //If tuples are present, iterate through the collisions...
    for (i = 0; i < collisions.length; i++) {
      //and if a tuple already has the same key k, overide the value with v...
      if (collisions[i][0] === k) {
        collisions[i][1] = v;
        keyPresent = true;
      }
    }
    //otherwise, push a new tuple with key k and value v to the collisions.
    if (!keyPresent) {
      collisions.push([k, v]);
    }
    //Then put the updated collisions in the hash table at index,
    this._storage.set(index, collisions);
  } else {
    //or else there are no tuples at index, and the collisions 
    //collection is initiated with k and v as the first tuple...
    collisions = [];
    collisions.push([k, v]);
    //and the new collection is inserted in the hash table at index.
    this._storage.set(index, collisions);
  }
};

HashTable.prototype.remove = function (k) {
  'use strict';
  var i, index, collisions;

  //Get the collisions at index...
  index = getIndexBelowMaxForKey(k, this._limit);
  collisions = this._storage.get(index);

  //Check if there is a tuple already present in the collisions.
  if (collisions) {
    //If tuples are present, iterate through the collisions...
    for (i = 0; i < collisions.length; i++) {
      //and if a tuple already has the same key k, overide the value with null...
      if (collisions[i][0] === k) {
        collisions[i][1] = null;
      }
    }
  }
  //and insert the new collection in the hash table at index.
  this._storage.set(index, collisions);
};



/*
 * Complexity: What is the time complexity of the above functions?

         Time Complexity
         -----------
insert   constant
remove   constant
retrieve constant
 */
