
//This sets the global size for an individual block.  the tWidth is set
//slightly smaller to avoid collision detection bugs.
var tWidth= Math.floor((window.innerWidth-1) / 10);
var tHeight= (window.innerHeight) / 20;

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
    this.w = tWidth-4;
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
    this.ctx.fillStyle = this.color;
    this.ctx.lineWidth= "3";
    this.ctx.strokeStyle = 'black';
    this.ctx.strokeRect(this.x, fall, this.w, this.h);
    this.ctx.fillRect(this.x, fall, this.w, this.h);
  };

  this.drop = function(){
    var fall = this.y;
    switch(level){
      case 1:
        fall+= tHeight/30;
        break;
      case 2:
        fall+= tHeight/27.5;
        break;
      case 3:
        fall+= tHeight/25;
        break;
      case 4:
        fall+= tHeight/22.5;
        break;
      case 5:
        fall+= tHeight/20;
        break;
      case 6:
        fall+= tHeight/17.5;
        break;
      case 7:
        fall+= tHeight/15;
        break;
      case 8:
        fall+= tHeight/12.5;
        break;
      case 9:
        fall+= tHeight/10;
        break;
      case 10:
        fall+= tHeight/7.5;
        break;
      case 11:
        fall+= tHeight/5;
        break;
      case 12:
        fall+= tHeight/2.5;
        break;
      case 13:
        fall+= tHeight;
        break;
      case 14:
        fall+= tHeight*1.25;
        break;
      case 15:
        fall+= tHeight*1.5;
        break;
      case 16:
        fall+= tHeight*1.75;
        break;
      case 17:
        fall+= tHeight*2;
        break;
      case 18:
        fall+= tHeight*2.25;
        break;
      case 19:
        fall+= tHeight*2.5;
        break;
      case 20:
        fall+= tHeight*2.75;
        break;
      case 30:
        level = 0;
        window.alert('Game Over');
        fallen.length = 0;
        return fallen.length;

    }

    this.y = fall;
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
