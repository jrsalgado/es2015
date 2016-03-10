'use strict';
/*
 * String interpolation
*/

// on ES2015  
let customer = {name:'Jayro'};
let card = {amount: 5, product: "panditas", unitPrice: 10};
let message = `Hello ${customer.name}, wants to buy a ${card.amount} ${card.product} for a total of ${ card.amount * card.unitPrice } baros`;// easy and clean rigth?
console.log(message);

/* 
 *
 * the ES5 way
 * 
  var customer = { name: "Foo" };
  var card = { amount: 7, product: "Bar", unitprice: 42 };
  message = "Hello " + customer.name + ",\n" +
  "want to buy " + card.amount + " " + card.product + " for\n" +
  "a total of " + (card.amount * card.unitprice) + " bucks?";
 *
*/