'use strict';

/**
 * Array Matching
 * intuitive and flexible destructing of Arrays into individual variables during assingment
 */

/**
 * ES2015
 */
var list = [1,2,3];
let [a,,b] = list;
console.log(a,b); 

/**
 * ES5
 */
var list = [ 1, 2, 3 ];
var a = list[0], b = list[2];
var tmp = a; a = b; b = tmp;