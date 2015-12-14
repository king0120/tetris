//@codekit-prepend 'rectangle.js';

//Function CanvasState draws a new canvas ehen the function is initiated

var movement = tHeight/10;

function CanvasState(canvas1) {
  this.canvas = document.getElementById('canvas');

  //A normal Tetris board is 20 grids tall and 10 grids wide.  I set the size
  //in percents to help responsiveness
  canvas1.height = window.innerHeight;
  canvas1.width = window.innerWidth;
  canvas1.style.width = '45%';
  canvas1.style.height = '90%';
  this.ctx = ctx;

  //Falling shapes are in the this.shapes array.  Each time the canvas draws,
  //it moves this array closer to the this.fallen array.
  this.shapes = [];
  this.fallen = [new Rectangle(0, canvas1.height, canvas1.width, tHeight)];

  //this.clear allows the canvas to animate.  Each time the canvas is wiped
  //it redraws the elements in the fallen array.
  this.clear = function() {
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (var i = 0; i < this.fallen.length; i++) {
      this.fallen[i].color = 'purple';
      this.fallen[i].draw(ctx); //If I remove this line, the bricks become invisible. Challenge mode?
    }
  };

  //Sets key bindings for controlling the tetrinos.
  this.keyControls = function(block){
    document.onkeydown = function(e) {
      window.console.log(this.shapes);
          e = e || window.event;
          switch (e.which || e.keyCode) {
            case 65: //the letter A
              window.console.log("left");
              block.moveLeft();
              break;
            case 37: //left arrow key
            window.console.log("left");
              block.moveLeft();
              break;
            case 87: //the letter W
              window.console.log("Up");
              break;
            case 38: //up arrow key
              window.console.log("Up");
              break;
            case 68: //the letter D
              window.console.log("Right");
              block.moveRight();
              break;
            case 39: //right arrow key
              window.console.log("Reft");
              block.moveRight();
              break;
            case 82: //the letter S
              window.console.log("Down");
              block.y += tHeight;
              break;
            case 40: //down arrow key
              window.console.log("Down");
              block.y += tHeight;
              break;
            default:
              window.console.log(e.which);
              window.console.log(e.keyCode);
          }
        };
  };


  //Set interval causes the app to run through every x milliseconds depending on this.interval.
  //Not 100% sure why I needed to make this a variable to get this to work?
  var myState = this;
  myState.interval = 33;
  setInterval(function() {
    myState.draw();
  }, myState.interval);
}


  //I can call on .addShape to create a new block.
CanvasState.prototype.addShape = function(shape) {
  this.shapes.push(shape);
};

  //For dev testing
  // var ycount = 0;
//This is the core function.  It draws the game out each time setInterval is called
CanvasState.prototype.draw = function() {
  //vars declared for readability.
  var shapes = this.shapes;
  var fallen = this.fallen;


  //First step of the function is to delete the canvas and redraw using
  //the fallen array
  this.clear();





  //I needed to created a nested for loop for hit detection purposes.
  for (var j = 0; j < shapes.length; j++) {

    for (var i = fallen.length - 1; i >= 0; i--) {

      //Each time the falling block approaches the floor, the function checks
      //to see if the intersection function is true at any point.
      if (shapes[j].intersects(fallen[i])) {
        //THIS IS WHERE MY BUG WAS!!!! Now how do I reset the speed?
        //I think I need to set it near this.clear
        shapes[j].y = fallen[i].y - fallen[i].h;

        //Once a shape intersects, this pushes it into the fallen array and
        //out of the shapes array.
        fallen.push(shapes[j]);
        shapes.splice(0, 1);


      } else {

        // console.log(ycount);
        // ycount++;

        //If the shape does not intersect, this adjusts the y position 1/20
        //of the way down the board. This also gives the incremental falling
        //visuals common for tetris.
        shapes[j].drop();
        window.console.log(movement/10);
        this.keyControls(this.shapes[0]);

        //finally, this function draws the rectangle.
        shapes[j].draw(ctx);
      }
    }
  }

};



//this is for the create rectangle button being used for testing
var counter = -1;
CanvasState.prototype.newRect = function() {
  window.console.log("Alive!");
  if (counter < 9) {
    counter++;
  } else {
    counter = 0;
  }
  var positionX = window.innerWidth;
  this.addShape(new Rectangle(positionX * (counter / 10)));
};
