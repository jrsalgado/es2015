'use strict';
/*
* Lexical This
*  more intuitive handling of current object context
*/

// THIS object in ES2015
function FooCtrl(BazService){
  this.foo = 'Hello';
  console.log(this.foo);
  
  BazService.doSomething((result)=>{
    this.foo = result; 
    console.log(this.foo);
  }); // see? magic!!... well not really but its cool because arrow functions can hold the sintactical scope where the arrow function is defined
  console.log(this.foo);
}
let serviceObj = {
  doSomething : function(cb){
    let result = 'good bye';
    cb(result);
  }
};
new FooCtrl(serviceObj);

// this how we do in ES5
/*
 function FooCtrl(BazService){
  // var self = this;
  this.foo = 'Hello';
  console.log(this.foo);
  
  BazService.doSomething(function(result){
    // self.foo = result;
    this.foo = result;
    console.log(this.foo);
  }.bind(this)); // Do i need to bind THIS every time??
  // not really, yo can define a variable self to help you to point to THIS value, like in the comments :P
  console.log(this.foo);
}

var serviceObj = {
  doSomething: function(cb){
    var result = "Good Bye!"
    cb(result);
  }
};

new FooCtrl(serviceObj);
*/

 function FooCtrl(BazService){
  // var self = this;
  this.foo = 'Hello';
  console.log(this.foo);
  
  BazService.doSomething(function(result){
    // self.foo = result;
    this.foo = result;
    console.log(this.foo);
  }.bind(this)); // Do i need to bind THIS every time??
  // not really, yo can define a variable self to help you to point to THIS value, like in the comments :P
  console.log(this.foo);
}

var serviceObj = {
  doSomething: function(cb){
    var result = "Good Bye!"
    cb(result);
  }
};

new FooCtrl(serviceObj);