// Spread Operator
// Spreading elements of an iterable collection into both literal elements and individual function parameters

var defPar = require('./defaultParameters').defaultParameters;

// this feture can be used as a concatenator of arrays
var params = ['hello', true];
var other = [1,2, ...params];
console.log(other);

// or can also be used on strings to split them out
var str = 'foo';
var chars = [...str];
console.log('chars', chars);

// can also be used set parameters on function calls
var resutl =  defPar(...str);

/*
 * this is how it is done in ecma script 5
 *
var params = [ "hello", true, 7 ];
var other = [ 1, 2 ].concat(params); // [ 1, 2, "hello", true, 7 ]
f.apply(undefined, [ 1, 2 ].concat(params)) === 9;

var str = "foo";
var chars = str.split(""); // [ "f", "o", "o" ]
 */
