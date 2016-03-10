'use strict';
/**
 * Property short hand
 * shorter syntax for common object property definition idiom
 */
console.log(typeof asObject(1,2,3) === 'object');
function asObject(x,y,z) {
  return {x,y,z}
}


/*
  {
    x:1,
    y:2,
    z:3
  }
*/
