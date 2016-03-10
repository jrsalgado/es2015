'use strict';

// let allow to declare Block-scoped variables
// without scoping the variables

for(let i = 1; i < 10; i++){
  setTimeout(function() {
    console.log(i)
  }, 1000*i);
}

/*
 * here is where all begins
 * 
 * 
  for(var i=1; i < 10; i++){
  setTimeout(function(){
    console.log(i); // Oops this is not what i ordered sir
  },1000*i);
 }
 
  In fact this is how you ordered sir... a varibale i not closured
  and also was scoped to the global-window object
  
  this is how you do the right way
  for(var i=1; i<10; i++){
    setTimeout(function(clrd_i) {
      return function(){ 
        console.log(clrd_i);
      };
    }(i),1000*i);
  }
 *
*/