/**
 * Parameter Context Matching
 * Intuitive and flexible destructuring of Arrays and Objects into individual parameters during function calls.
 * 
 */

/**
 * ES2015
 */

function foo([a,b]){
  console.log(a,b);
}

function baz({name:n, val:v}){
  console.log(n,v);
}

function bar({name,val}){
  console.log(name,val);
}

foo(['a','b']);
baz({name:"n", val:"v"});
bar({name:"n", val:"v"});

/**
 * ES5
 */

function f (arg) {
    var name = arg[0];
    var val  = arg[1];
    console.log(name, val);
};
function g (arg) {
    var n = arg.name;
    var v = arg.val;
    console.log(n, v);
};
function h (arg) {
    var name = arg.name;
    var val  = arg.val;
    console.log(name, val);
};
f([ "bar", 42 ]);
g({ name: "foo", val:  7 });
h({ name: "bar", val: 42 });