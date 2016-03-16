'use strict';
/**
 * Class Inheritance For Expressions
 */


/**
 * ES2015
 */
var aggregation = (baseClass, ...mixins) => {
    let base = class _Combined extends baseClass {
        constructor (...args) {
            super(...args)
            mixins.forEach((mixin) => {
                mixin.prototype.initializer.call(this)
            })
        }
    }
    let copyProps = (target, source) => {
        Object.getOwnPropertyNames(source)
            .concat(Object.getOwnPropertySymbols(source))
            .forEach((prop) => {
            if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                return
            Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
        })
    }
    mixins.forEach((mixin) => {
        copyProps(base.prototype, mixin.prototype)
        copyProps(base, mixin)
    })
    return base
}

class Colored {
  initializer()  {this._color = "white" }
  get color()    {return this._color    }
  set color(v)   {this._color = v       }
}

class ZCoord {
  initializer()  { this._z = 0  }
  get z()        {return this._z }
  set z(z)       {this._z = z    }
}

class Shape {
  constructor(x,y) {this._x = x, this._y = y}
  get x()  {return this._x}
  set x(x) {this._x = x   }
  get y()  {return this._y}
  set y(y) {this._y = y   }
}

class Rectangle extends aggregation(Shape, Colored, ZCoord){}

var rect = new Rectangle(7,42)
rect.z = 1000; 
rect.color = "red";
console.log(rect.x, rect.y, rect.z, rect.color)



/**
 * ES15
 */

/**
 * 

var aggregation = function (baseClass, mixins) {
  var base = function(){
    baseClass.apply(this, arguments)
    mixins.forEach(function(mixin){
      mixin.prototype.initializer.call(this)
    }.bind(this))
  }
  
  base.prototype = Object.crate(baseClass.prototype)
  base.constructor = base
  
  var copyProps = function (target, source){
    Object.getOwnPropertyNames(source).forEach(function (prop) {
            if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                return
            Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
    })
  }
  
  mixins.forEach(function(mixin){
    copyProps(base.prototype, mixin.prototype)
    copyProps(base, mixin)
  })
  return base
}

var Colored = function(){}
Colored.prototype = {
  initializer : function ()  { this._color = "white" },
  getColor :    function ()  { this._color },
  setColor :    function (v) { return this._color }
}

var ZCoord = function(){}
ZCoord.prototype = {
  initializer : function ()  { this._z = 0 },
  getZ :    function ()  { return this._z },
  setZ :    function (v)  { this._z = v }
}

var Shape = function(x,y){
  this.x = x
  this.y = y
}

Shape.prototype = {
  getX : function()  { return this._x },
  setX : function(v) { this._x =  v   },
  getY : function()  { return this._y },
  setY : function(v) { this._y =  v   },
}

Rectangle.prototype = Object.create(_Combined.prototype)
Rectangle.prototype.constructor = Rectangle

var rect = new Rectangle(7, 42)
rect.setZ(1000)
rect.setColor("red")
console.log(rect.getX(), rect.getY(), rect.getZ(), rect.getColor())
 
 
 * 
 */
