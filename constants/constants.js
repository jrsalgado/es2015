
// constants are included as default since node v4
const PI = 3.141593;
console.log(PI);

/*
 * on ES2015 this is how was done
 * 
Object.defineProperty( typeof global === 'object'?global:window, "PI",{
  value: 3.141593,
  enumerable: true,
  writable: false,
  configurable: false
});
 * this properties means that this element hosted in the global 
 * object if in node and window if js is running in the browser
 * have a value but can not be modified and can not be reconfigured  * to be writable 
*/