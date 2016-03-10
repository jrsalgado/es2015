'use strict';
// Block-scoped function definitions
{
 function foo(){ return 1;}
 foo() === 1;
 console.log('foo()', foo()); // 1
 {
   function foo(){ return 2 }
   foo() === 2;
    console.log('foo()', foo()); //2
 } 
 foo() === 1;
  console.log('foo()', foo()); // 1
}

/*
 * This is how its done in es2015
 *    
 Declare an IFI function
  (
    var foo = function(){return 1;}
    foo() === 1;
    
    Declare another IFI
    (function(){
       var foo = function(){return 2;}
       foo() === 2;
    })()
    
    foo() === 1;
  )()
 * in es2015 this blocks acts like an efi function where your variales can be isolated
*/