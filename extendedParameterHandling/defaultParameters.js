'use strict';
exports.defaultParameters = defaultParameters;
/* Note: only available in node v5
  At this point node has left behind the --harmony flag
  the default parameter values but you can test them with --harmony_default_parameters flag
  this feature will be anabled as default in version 6
*/

// Default parameter values
// simple and intuitive default values for function parameters
function defaultParameters (x, y = 7, z = 42) {
    console.log('x', x, 'ok we have the value');
    console.log('y', y, 'wow this is now defined!!');
    console.log('z', z, 'OMG this one too!!');
    return
}
var x = "later";
// calling fucntion with only one parameter
defaultParameters(1);

// As reference this is how we do today
/*
function defaultParameters (x, y, z) {
    if (y === undefined)
        y = 7;
    if (z === undefined)
        z = 42;
    return x + y + z;
};
defaultParameters(1) === 50;
*/
