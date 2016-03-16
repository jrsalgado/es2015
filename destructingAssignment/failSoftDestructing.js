/**
 * Fail Soft destructing
 * fail soft destructing with optional default parameters
 */

/**
 * ES2015
 */

var list = [7,42];
var [a="3", b="4", c="45", d] = list;
console.log(a===7);
console.log(b===42);
console.log(c==="45");
console.log(d===undefined);

/**
 * ES5
 */
/*
var list = [ 7, 42 ];
var a = typeof list[0] !== "undefined" ? list[0] : 1;
var b = typeof list[1] !== "undefined" ? list[1] : 2;
var c = typeof list[2] !== "undefined" ? list[2] : 3;
var d = typeof list[3] !== "undefined" ? list[3] : undefined;
a === 7;
b === 42;
c === 3;
d === undefined;
*/