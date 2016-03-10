'use strict';
/**
 * computed property names
*/

/**
 * ES2015
 */
function prefix(name) {
  return `${name}_`;
}

let obj = {
  foo : 'bar',
  [`${prefix("pre")}baz`] : "new name"
}
console.log('computed name', obj);


/**
 * ECMAscript 5
 */

/*
  function prefix(name){
    return name + "_";
  }
  var obj = {
    foo : 'bar'
  };

  obj[prefix('pre')+"baz"] = "new name";

  console.log('regular way', obj);
*/
