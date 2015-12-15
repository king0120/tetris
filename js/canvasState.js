//@codekit-prepend 'tetrinos.js';


var canvas = document.getElementById('canvas');

//A normal Tetris board is 20 grids tall and 10 grids wide.  I set the size
//in percents to help responsiveness
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
canvas.style.width = '45%';
canvas.style.height = '90%';
var ctx = canvas.getContext('2d');

//Falling shapes are in the this.shapes array.  Each time the canvas draws,
//it moves this array closer to the this.fallen array.
var shapes = [];

var fallen = [new Rectangle(0, canvas.height, 'black', canvas.width, tHeight)];



//this.clear allows the canvas to animate.  Each time the canvas is wiped
//it redraws the elements in the fallen array.

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fallen[0].drawFallen(ctx);
  for (var i = 0; i < fallen.length; i++) {
    fallen[i].color = 'purple';
    fallen[i].drawFallen(ctx);
  }
}

//for use in key controls
var moveLeft = function(b) {
  if (tWidth>0){
    for (var i = 0; i < b.length; i++) {
      b[i].x -= tWidth;
    }
  } else {
    console.log('TOO FAR!');
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
var keyControls = function(toMove) {
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

//I can call on .addShape to create a new block.
var addShape = function(shape) {
  shapes.push(shape);
};

//this is for the create rectangle button being used for testing

function newRect() {
  var tetrino = randomTetrino();
  for (var i = 0; i < tetrino.length; i++) {
    addShape(tetrino[i]);
  }
}
newRect();

//For dev testing
// var ycount = 0;
//This is the core function.  It draws the game out each time setInterval is called

var draw = function(canvas) {

  //vars declared for readability.
  clear();
  //First step of the function is to delete the canvas and redraw using
  //the fallen arrays

  if (shapes.length > 0) {
    //I needed to created a nested for loop for hit detection purposes.
    for (var j = 0; j < shapes.length; j++) {
      for (var i = 0; i < fallen.length; i++) {
        //Each time the falling block approaches the floor, the function checks
        //to see if the intersection function is true at any point.
        if (shapes[j].intersects(fallen[i])) {
          //THIS IS WHERE MY BUG WAS!!!! Now how do I reset the speed?
          //I think I need to set it near this.clear
          shapes[j].y = fallen[i].y - fallen[i].h;
          //Once a shape intersects, this pushes it into the fallen array and
          //out of the shapes array.
          shapes[j].hit = true;
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
        }
      } //end for i loop
      if (!this.hit) {
          //If the shape does not intersect, this adjusts the y position 1/20
          //of the way down the board. This also gives the incremental falling
          //visuals common for tetris.


          keyControls(shapes);
          //finally, this function draws the rectangle.

          shapes[j].draw();
          shapes[j].drop();
        }
    } //end for j loop
  } //end if statement

};//end Draw

//Set interval causes the app to run through every x milliseconds depending on this.interval.
//Not 100% sure why I needed to make this a variable to get this to work?

var myState = canvas;
myState.interval = 33/2;

function drawing() {
  draw(canvas);
}

setInterval(drawing, myState.interval);
