/**
 *  Object Matching Deep Matching
 * Intuitive and flexible destructuring of Objects into individual variables during assignment.
 */

/**
 * ES2015
 */

function getNode(){
  return {
    ext1: "ext1",
    node: {
      int1: "int1"
    },
    ext2: "ext2"
  }
}
var {ext1:x,node:{int1:y},ext2:z} = getNode();
console.log(x);
console.log(y);
console.log(z);

/**
 * ES5
 */

function getTheNodes(){
  return {
    ext1: "ext1",
    node: {
      int1: "int1"
    },
    ext2: "ext2"
  }
}

var temp = getTheNodes();
var a = temp.ext1;
var b = temp.node.int1;
var c = temp.ext2;

console.log('a',a);
console.log('b',b);
console.log('c',c);

