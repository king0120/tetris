
//@codekit-prepend 'generator.js';
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


var Rectangle = function(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.hit = false;

  if (w === undefined || h === undefined) {
    this.w = window.innerWidth / 10;
    this.h = window.innerHeight / 24;
  }


  this.color = randomColor();
};

Rectangle.prototype.draw = function() {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.w, this.h);

};

Rectangle.prototype.contains = function(x, y) {
  if (x >= this.x && x <= this.x + this.w &&
    y >= this.y && y <= this.y + this.h) {
    return true;
  } else {
    return false;
  }
};

Rectangle.prototype.moveRight = function(){
  return this.x += 40;
};

Rectangle.prototype.moveLeft = function(){
  return this.x -= 40;
};


Rectangle.prototype.intersects = function(shape) {
  if (this.contains(shape.x, shape.y) || this.contains(shape.x + shape.w, shape.y) ||
    this.contains(shape.x, shape.y + shape.h) || this.contains(shape.x + shape.w, shape.y + shape.h)) {
    return true;
  } else if ((shape.contains(this.x, this.y) || shape.contains(this.x + this.w, this.y) ||
      shape.contains(this.x, this.y + this.h) || shape.contains(this.x + this.w, this.y + this.h))) {
    return true;
  } else {
    return false;
  }
};
