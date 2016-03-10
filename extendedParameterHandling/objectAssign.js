'use strict';
/**
 * Object.assign()
 * used to copy and merge diferent objects
 */

// you need to activate  node --harmony_default_parameters
function say(options={}){
  let defaults = {
    greeting : "hi",
    who: "jayro",
    message: "have a beautiful day"
  };
  let settings = Object.assign({}, defaults, options);
  console.log(`${settings.greeting} ${settings.who}, ${settings.message}`);
}

let englishMessage = {};

let spanishMessage = {
  greeting: "hola",
  message: "que tengas un hermoso dia"
};

let frenchMessage = {
  greeting: "bonjour",
  message: "bonne journée"
}
say(spanishMessage);
say(frenchMessage);
say();
