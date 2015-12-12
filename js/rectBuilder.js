//@codekit-prepend 'generator.js';

function CanvasState(canvas){
  this.canvas = canvas;
  this.width = canvas.height * 0.417;
  this.height = window.innerHeight * 0.9;
  canvas.style.width = canvas.width + 'px';
  canvas.style.height = canvas.height + 'px';
  this.ctx = canvas.getContext('2d');
  this.valid = false;
  this.shapes = [];
}

CanvasState.prototype.addShape = function(shape){
  this.shapes.push(shape);
  this.valid = false;
};




var Rectangle = function(x, y, w, h) {

  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  if (w === undefined || h === undefined) {
    this.w = canvas.width / 10;
    this.h = canvas.height / 24;
  }

  this.color = randomColor();
};

Rectangle.prototype.contains = function(x, y) {
  if (x >= this.x && x <= this.x + this.w &&
    y >= this.y && y <= this.y + this.h) {
    return true;
  } else {
    return false;
  }
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

Rectangle.prototype.draw = function() {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.w, this.h);
};
