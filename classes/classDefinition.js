/**
 * Class definition
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

/**
 * ES5
 */

function Shape(id, x, y){
  this.x = x;
  this.y = y;
  this.move(x,y);
}
Shape.prototype.move = function(x,y){
  this.x = x;
  this.y = y;
}