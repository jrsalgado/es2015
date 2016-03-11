/**
 * Object matching shorthand
 * 
 * to run this code --harmony-destructuring flag is required
 */

/**
 * ES2015
 */

function getObject(){
  return{
    a:1,
    b:2,
    c:3
  }
}

var {a,b,c} = getObject();
console.log(a);
console.log(b);
console.log(c);

/**
 * ES5
 */

function getObj(){
  return {
    a:1,
    b:2,
    c:3
  }
}
var o = getObj();
var a = o.a;
var b = o.b;
var c = o.c;

console.log(a);
console.log(b);
console.log(c);