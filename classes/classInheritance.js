/**
 * Class Inheritance
 * more intuitive OPP-style and boilerplate-free classes
 */

/**
 * ES2015
 */
class Shape{
  constructor(id,x,y){
    this.id = id;
    this.move(x,y);
  }
  
  move(x,y){
    this.x = x;
    this.y = y;
  }
}

class Rectangle extends Shape{
  constructor(id,x,y,w,h){
    super(id,x,y);
    this.width = w;
    this.height = h;
  }
}

/**
 * ES5
 */
/*
var Rectangle = function (id, x, y, width, height) {
    Shape.call(this, id, x, y);
    this.width  = width;
    this.height = height;
};
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
var Circle = function (id, x, y, radius) {
    Shape.call(this, id, x, y);
    this.radius = radius;
};
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

*/

var g = "hola";

function say(g){
  // arguments $scope
  console.log(g);
}
say(g)

var $scope
angular.module('app',['tables'])
.constant('myJquery', window.jquery)
.controller('say',['$scope', 'myJquery',function(s,mj){
    // arguments [$scope
    
}]);

function controller(name, callback){
  /*
['$scope', 'myJquery',function(s,mj){
    // arguments [$scope
    
}]
  */
  depRegisterList=[$scope, myJqery,router, $provider ]
  var dep = [$scope, myJquery]
  callback(dep[0], dep[1]);
}

say(g);

div n-grcontroller="say"


