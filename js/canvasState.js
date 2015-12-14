
//@codekit-prepend 'tetrinos.js';

//Function CanvasState draws a new canvas ehen the function is initiated

//var movement = tHeight / 10;



function CanvasState(canvas1) {
  this.canvas = document.getElementById('canvas');

  //A normal Tetris board is 20 grids tall and 10 grids wide.  I set the size
  //in percents to help responsiveness
  canvas1.height = window.innerHeight;
  canvas1.width = window.innerWidth;
  canvas1.style.width = '45%';
  canvas1.style.height = '90%';
  this.ctx = this.canvas.getContext('2d');

  //Falling shapes are in the this.shapes array.  Each time the canvas draws,
  //it moves this array closer to the this.fallen array.
  this.shapes = [];
  this.fallen = [new Rectangle(0, canvas1.height, 'black', canvas1.width, tHeight)];



  //this.clear allows the canvas to animate.  Each time the canvas is wiped
  //it redraws the elements in the fallen array.
  this.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.fallen[0].draw(this.ctx);
    for (var i = 0; i < this.fallen.length; i++) {
      this.fallen[i].color = 'purple';
      this.fallen[i].draw(this.ctx);
    }
  };

  //for use in key controls
  var moveLeft = function(b) {
    for (var i = 0; i < b.length; i++) {
      b[i].x -= tWidth;
    }
  };
  var moveRight = function(b) {
    for (var i = 0; i < b.length; i++) {
      b[i].x += tWidth;
    }
  };
  var moveDown = function(b) {
    for (var i = 0; i < b.length; i++) {
      b[i].y += tHeight;
    }
  };

  //Sets key bindings for controlling the tetrinos.
  this.keyControls = function(toMove) {
    document.onkeydown = function(e) {
      e = e || window.event;
      switch (e.which || e.keyCode) {
        case 65: //the letter A
          window.console.log("left");
          moveLeft(toMove);
          break;
        case 37: //left arrow key
          window.console.log("left");
          moveLeft(toMove);
          break;
        case 87: //the letter W
          window.console.log("Up");
          break;
        case 38: //up arrow key
          window.console.log("Up");
          break;
        case 68: //the letter D
          window.console.log("Right");
          moveRight(toMove);
          break;
        case 39: //right arrow key
          window.console.log("Right");
          window.console.log("tWidth " + tWidth);
          moveRight(toMove);
          break;
        case 82: //the letter S
          window.console.log("Down");
          moveDown(toMove);
          // this.y += tHeight;
          break;
        case 40: //down arrow key
          window.console.log("Down");
          moveDown(toMove);
          //   this.y += tHeight;
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

  function drawing() {
    myState.draw();
  }
  setInterval(drawing, myState.interval);

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
  this.clear();
  //First step of the function is to delete the canvas and redraw using
  //the fallen arrays

  if (shapes.length > 0) {
    //I needed to created a nested for loop for hit detection purposes.
    for (var i = 0; i<fallen.length; i++) {
      for (var j = 0; j < shapes.length; j++) {
        //Each time the falling block approaches the floor, the function checks
        //to see if the intersection function is true at any point.
        if (shapes[j].intersects(fallen[i])) {
          //THIS IS WHERE MY BUG WAS!!!! Now how do I reset the speed?
          //I think I need to set it near this.clear
          shapes[j].y = fallen[i].y - fallen[i].h;
          //Once a shape intersects, this pushes it into the fallen array and
          //out of the shapes array.

          fallen.push(shapes[0]);
          fallen.push(shapes[1]);
          fallen.push(shapes[2]);
          fallen.push(shapes[3]);
          shapes.splice(0, 4);


          tBlock.shape = [new Rectangle(positionX * 0.4, tHeight, '#9013FE'),
            new Rectangle(positionX * 0.3, tHeight * 2, '#9013FE'),
            new Rectangle(positionX * 0.4, tHeight * 2, '#9013FE'), new Rectangle(positionX * 0.5, tHeight * 2, '#9013FE')
          ];
          jBlock.shape = [new Rectangle(positionX * 0.5, tHeight, '#4A6EE2'),
            new Rectangle(positionX * 0.3, tHeight * 2, '#4A6EE2'),
            new Rectangle(positionX * 0.4, tHeight * 2, '#4A6EE2'),
            new Rectangle(positionX * 0.5, tHeight * 2, '#4A6EE2')
          ];
          sBlock.shape = [new Rectangle(positionX * 0.4, tHeight, '#7ED321'),
            new Rectangle(positionX * 0.4, tHeight * 2, '#7ED321'),
            new Rectangle(positionX * 0.3, tHeight, '#7ED321'),
            new Rectangle(positionX * 0.5, tHeight * 2, '#7ED321')
          ];
          iBlock.shape = [new Rectangle(positionX * 0.4, tHeight, '#50E3C2'),
            new Rectangle(positionX * 0.6, tHeight, '#50E3C2'),
            new Rectangle(positionX * 0.3, tHeight, '#50E3C2'),
            new Rectangle(positionX * 0.5, tHeight, '#50E3C2')
          ];
          oBlock.shape = [new Rectangle(positionX * 0.4, tHeight, '#F8E71C'),
            new Rectangle(positionX * 0.5, tHeight, '#F8E71C'),
            new Rectangle(positionX * 0.4, tHeight * 2, '#F8E71C'),
            new Rectangle(positionX * 0.5, tHeight * 2, '#F8E71C')
          ];
          zBlock.shape = [new Rectangle(positionX * 0.4, tHeight, '#D0021B'),
            new Rectangle(positionX * 0.3, tHeight * 2, '#D0021B'),
            new Rectangle(positionX * 0.4, tHeight * 2, '#D0021B'),
            new Rectangle(positionX * 0.5, tHeight, '#D0021B')
          ];
          lBlock.shape = [new Rectangle(positionX * 0.3, tHeight, '#E59512'),
            new Rectangle(positionX * 0.3, tHeight * 2, '#E59512'),
            new Rectangle(positionX * 0.4, tHeight * 2, '#E59512'),
            new Rectangle(positionX * 0.5, tHeight * 2, '#E59512')
          ];
          return;
        } else {
          //If the shape does not intersect, this adjusts the y position 1/20
          //of the way down the board. This also gives the incremental falling
          //visuals common for tetris.


          this.keyControls(shapes);
          //finally, this function draws the rectangle.
          shapes[j].draw(this.ctx);
          shapes[j].drop();
        }
      }
    }
  }
};

function randomTetrino() {
  var num = Math.floor(Math.random() * 7);
  switch (true) {
    case num === 0:
      return tBlock.shape;
    case num === 1:
      return jBlock.shape;
    case num === 2:
      return sBlock.shape;
    case num === 3:
      return iBlock.shape;
    case num === 4:
      return oBlock.shape;
    case num === 5:
      return zBlock.shape;
    case num === 6:
      return lBlock.shape;
  }
}


//this is for the create rectangle button being used for testing

CanvasState.prototype.newRect = function() {
  var tetrino = randomTetrino();
  for (var i = 0; i < tetrino.length; i++) {
    this.addShape(tetrino[i]);
  }
};

// setInterval(
//   function(){
//     canva.newRect();
//   }, 5000);
