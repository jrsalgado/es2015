"use strict";
/*
  Binary and octal literals
  direct support for binary and octal literals
*/

var isEight = 0b1000 === 8;
console.log('isEight', isEight, 0b1000);

var isSixteen = 0o20 === 16;
console.log('isSixteen', isSixteen, 0o20);