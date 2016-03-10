'use strict';
/*
 * Raw string access
 * access the raw string content (slashes are not interpreted)
*/

function quux(strings, ...values){
  strings[0] === "foo\n";
  strings[1] === "bar";
  strings.raw[0] === "foo\\n";
  strings.raw[1] === "bar";
  values[0] === 42;
}

quux `foo\n${ 42 }bar`;
var str = String.raw `foo\n${ 42 }bar`;
console.log(str );