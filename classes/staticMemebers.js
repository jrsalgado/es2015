/**
 * Static Members
 */

/**
 * ES2015
 */
class Rectangle{
  constructor(id, x, y, width, height){
    this.id = id;
    this.x  = x;
    this.y  = y;
    this.width = width;
    this.height = height; 
  }
  static default(){
    return new Rectangle("default", 0, 0, 100, 100)
  }
}
console.log( Rectangle.default() )

/**
 * ES15
 */

/*function Rectangle(id, x, y, width, height){
    this.id = id
    this.x  = x
    this.y  = y
    this.width = width
    this.height = height 
}

Rectangle.default = function(){
  return new Rectangle("default", 0, 0, 100, 1000)
}
console.log(Rectangle.default());*/