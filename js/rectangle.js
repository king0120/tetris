
//@codekit-prepend 'generator.js';

//declared these useful globals since this is the very beginning of the app.
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//This sets the global size for an individual block.  the tWidth is set
//slightly smaller to avoid collision detection bugs.
var tWidth= window.innerWidth / 10.1;
var tHeight= window.innerHeight / 20.9;

var Rectangle = function(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.hit = false;

  //the floor and walls of the game board need custom widths and height, so I
  //made those perimeters available, but I created these default values to
  //make it easier to declare new rectangles
  if (y=== undefined || w === undefined || h === undefined) {
    this.y = 0;
    this.w = tWidth;
    this.h = tHeight;
  }

  //this will be changed later when tetrinos have their own objects
  this.color = randomColor();
};

//This is the canvas draw function.  It is used at the end of CanvasState.draw
Rectangle.prototype.draw = function() {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.w, this.h);

};

//For use in the key controls
Rectangle.prototype.moveRight = function(){
  return this.x += tWidth;
};

//for use in key controls
Rectangle.prototype.moveLeft = function(){
  return this.x -= tWidth;
};

Rectangle.prototype.drop = function(){
  this.y += tHeight/10;
};

//This detects if either this or the declared function intersects on any
//one side

Rectangle.prototype.contains = function(x, y) {
  if (x >= this.x &&
      x <= this.x + this.w &&
      y >= this.y &&
      y <= this.y + this.h) {
    return true;
  } else {
    return false;
  }
};



Rectangle.prototype.intersects = function(shape) {
  if (this.contains(shape.x, shape.y) ||
      this.contains(shape.x + shape.w, shape.y) ||
      this.contains(shape.x, shape.y + shape.h) ||
      this.contains(shape.x + shape.w, shape.y + shape.h)) {
    return true;
  } else if (
      shape.contains(this.x, this.y) ||
      shape.contains(this.x + this.w, this.y) ||
      shape.contains(this.x, this.y + this.h) ||
      shape.contains(this.x + this.w, this.y + this.h)) {
    return true;
  } else {
    return false;
  }
};
