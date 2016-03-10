'use strict';
exports = rest;
// Rest parameters
// Aggregation of remaining arguments into single parameter of variable functions.
function rest (first, ...a) {
  // logs first argument in the function
  console.log('first', first); 
  // logs an array
  console.log('a',a);
  // logs all arguments
  console.log('arguments', arguments);
}

rest("hello", true, 7)