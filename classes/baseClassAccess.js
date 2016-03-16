"use strict";
/**
 * Base Class Access
 */


/** */
class Shape {
  constructor(id, x, y){
    this.id = id;
    this.x = x;
    this.y = y;
  }
  toString(){
    return `Shape (${this.id})`
  }  
}

class Rectangle extends Shape{
  constructor(id, x, y, width, height ){
    super(id, x, y)
    }
  toString(){
    return `Rectangle > ${super.toString()}`;
  }
}
class Circle extends Shape{
  constructor(id, x, y, radius ){
    super(id, x, y  )
    }
  toString () {
    return `Circle > ${super.toString()}`
  }
}

console.log(new Circle(1, 2, 4, 50).toString());
console.log(new Circle(2, 6, 5, 100).toString());
console.log(new Rectangle(3, 76, 54, 30, 30).toString());
console.log(new Rectangle(5, 76, 54, 30, 30).toString());


/**
 * ES15
 */

/*function Shape (id, x, y){
  this.id = id
 }
Shape.prototype.toString = function(){
  return "Shape ("+ this.id +")"
}

function Rectangle(id, x, y, width, height) {
  this.width = width
  this.height = height
  Shape.call(this, id, x, y);
}

Rectangle.prototype.toString = function () {
  return "Rectangle > "+Shape.prototype.toString.call(this);
}

function Circle (id, x, y, radius){
  this.radius = radius;
  Shape.call(this, id, x, y)
}

Circle.prototype.toString = function () {
  return "Circle > "+Shape.prototype.toString.call(this);
} 

console.log(new Circle(3,44,55,10).toString())
console.log(new Rectangle(10,44,55,40,40).toString())*/
