'use strict';

/*
  Expression Bodies
  is just a more expresive closure sintax
  making the code shorter and meaningful
*/
let evens = [1,3,5,7,9,11,13];

let odds = evens.map(v => v + 1);
console.log('odds', odds);

let pairs = evens.map(v => ({even:v, odd:v+1}));
console.log('pairs', pairs);

let nums = evens.map((v,i)=> v+i);
console.log('nums', nums);

/*
 *
 * in es2015 this how it is done
  odds  = evens.map(function (v) { return v + 1; });
  pairs = evens.map(function (v) { return { even: v, odd: v + 1 }; });
  nums  = evens.map(function (v, i) { return v + i; });
*/