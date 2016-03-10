'use strict';
/**
 * Method properties
 * suport for method notiation in object property definitions, for both regular functions and generator functions
 */

/**
 * ES2015
 */
let obj = {
  foo(a,b){
   console.log(`${a} ${b}`); 
  },
  bar(a,b){
   console.log(`${a} ${b}`);
  },
  *quux(){
    
  }
};
obj.foo("bar", "baz");

/**
 * ECMAScript 5
 */
// var o = {
//   foo: function(a,b){
//     console.log(a + " " + b );
//   },
//   bar: function(a,b){
//     console.lgo(a + " " + b);
//   }
//   // quux: not equivalent in ES5
// };
// o.foo("bar","baz");