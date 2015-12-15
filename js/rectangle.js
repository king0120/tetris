


//declared these useful globals since this is the very beginning of the app.

//This sets the global size for an individual block.  the tWidth is set
//slightly smaller to avoid collision detection bugs.
var tWidth= (window.innerWidth-1) / 10;
var tHeight= (window.innerHeight-1) / 20;

var Rectangle = function(x, y, color, w, h) {
  this.name = 0;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.ctx = document.getElementById('canvas').getContext('2d');

  this.hit = false;

  //the floor and walls of the game board need custom widths and height, so I
  //made those perimeters available, but I created these default values to
  //make it easier to declare new rectangles
  if (w === undefined || h === undefined) {
    this.w = tWidth-2;
    this.h = tHeight;
  }

  //this will be changed later when tetrinos have their own objects
  this.color = color;

  //This is the canvas draw function.  It is used at the end of CanvasState.draw
  this.drawFallen = function() {
    this.ctx.fillStyle = this.color;
    this.ctx.lineWidth= "3";
    this.ctx.strokeStyle = 'black';
    this.ctx.strokeRect(this.x, this.y, this.w, this.h);
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
  };

  this.draw = function() {
    var fall = this.y;
    fall+= tHeight/18;
    this.ctx.fillStyle = this.color;
    this.ctx.lineWidth= "3";
    this.ctx.strokeStyle = 'black';
    this.ctx.strokeRect(this.x, fall, this.w, this.h);
    this.ctx.fillRect(this.x, fall, this.w, this.h);
  };

  this.drop = function(){
    //var test=this;
    var fall = this.y;
    fall+= tHeight/18;
    this.y = fall;
    //window.console.log(test.y);
   // test.y += tHeight/18;
  };
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
