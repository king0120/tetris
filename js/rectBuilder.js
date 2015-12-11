var Rectangle = function (x, y, w, h){

  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.Contains = function(x, y){
    if (x >= this.x && x <= this.x + this.w &&
        y >= this.y && y <= this.y + this.h){
        return true;
    } else {
      return false;
    }
  };

  this.Intersects = function(shape){
    if (this.Contains(shape.x, shape.y) || this.Contains(shape.x + shape.w, shape.y) ||
     this.Contains(shape.x, shape.y + shape.h) || this.Contains(shape.x + shape.w, shape.y + shape.h)){
      return true;
    }
    else if ((shape.Contains(this.x, this.y) || shape.Contains(this.x + this.w, this.y) ||
     shape.Contains(this.x, this.y + this.h) || shape.Contains(this.x + this.w, this.y + this.h))){
      return true;
    } else {
      return false;
    }
  };

  this.Draw= function(ctx, color){
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  };
};
