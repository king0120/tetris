//@codekit-prepend 'rotate.js';


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

var fallen = [new Rectangle(0, tHeight * 27, 'black', canvas.width, tHeight)];
var floor = [new Rectangle(0, tHeight * 20, 'black', canvas.width, tHeight)];


//this.clear allows the canvas to animate.  Each time the canvas is wiped
//it redraws the elements in the fallen array.

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  floor[0].drawFallen(ctx);
  for (var i = 0; i < fallen.length; i++) {

    fallen[i].drawFallen(ctx);
  }
}

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
var keyControls = function(toMove) {
  document.onkeydown = function(e) {
    e = e || window.event;
    switch (e.which || e.keyCode) {
      case 65: //the letter A
        moveLeft(toMove);
        break;
      case 37: //left arrow key
        moveLeft(toMove);
        break;
      case 87: //the letter W
        rotate(toMove);
        break;
      case 38: //up arrow key
        rotate(toMove);
        break;
      case 68: //the letter D
        moveRight(toMove);
        break;
      case 39: //right arrow key
        moveRight(toMove);
        break;
      case 82: //the letter S
        moveDown(toMove);
        break;
      case 40: //down arrow key
        moveDown(toMove);
        break;
      default:
        window.console.log(e.which);
        window.console.log(e.keyCode);
    }
  };
};




function randomTetrino() {
  var num = Math.floor(Math.random() * 7);
  var shape;
  switch (true) {
    case num === 0:
      shape = tBlock;
      return shape;
    case num === 1:
      shape = jBlock;
      return shape;
    case num === 2:
      shape = sBlock;
      return shape;
    case num === 3:
      shape = iBlock;
      return shape;
    case num === 4:
      shape = oBlock;
      return shape;
    case num === 5:
      shape = zBlock;
      return shape;
    case num === 6:
      shape = lBlock;
      return shape;
  }
}

//I can call on .addShape to create a new block.
var addShape = function(shape) {
  shapes.push(shape[0]);
};
var randomRotate;
var tetrino = randomTetrino();

//this is for the create rectangle button being used for testing
function next() {
  randomRotate = Math.floor(Math.random() * 3);
  tetrino = randomTetrino();
  var nextPic = document.getElementById('next');
  nextPic.innerHTML = "<img src='images/" + tetrino.name + ".png' alt='" + tetrino.name + "'>";
}

function stats(tet) {
  if (tet) {
    tet.number++;
    var stats1 = document.getElementById(tet.name);
    stats1.innerHTML = tet.number;
  }
}

function newRect() {
  var start = document.getElementById('start');
  start.addEventListener("click", function(event) {
    event.preventDefault();
  });
  start.innerHTML = " ";
  for (var i = 0; i < tetrino.shape[0].length; i++) {
    addShape([tetrino.shape[0][i], tetrino.name]);
  }
  stats(tetrino);
  next();
}

var score = 0;
var count = 0;
var index = -1;
var lines = 0;
var deleteArray = [];

function checkLine(low, high) {
  fallen = fallen.sort(function(a, b) {
    return b.y - a.y;
  });
  count = 0;
  index = 0;
  for (var i = 0; i < fallen.length; i++) {
    if (fallen[i].y <= high && fallen[i].y > low && fallen[i].x > 0 && fallen[i].name !== 'floor') {
      deleteArray.push(fallen[i]);
      count++;
      if (count === 10){
        return count;
      }
    } else {
      index++;
      deleteArray.length = 0;
    }
  }
}

function checkWin() {
  window.console.log("Fallen Length: " + fallen.length);
  for (var i = 0; i < 20; i++) {
    var checked = checkLine(tHeight * i, tHeight * (i + 1));
    if (checked >= 10) {
      window.console.log(deleteArray);
      var toSplice = i;
      window.console.log("toSplice: " + toSplice);
      for (var d = fallen.indexOf(deleteArray[9]); d < fallen.length; d++){
        fallen[d].y += tHeight;
      }
      for (var w = 0; w < deleteArray.length; w++) {
          fallen.splice(fallen.indexOf(deleteArray[w]), 1);
          window.console.log("Spliced at " + w);
      }
      deleteArray.length = 0;
      score += 200;
      lines++;
      //var spliced = fallen.splice(parseInt(index)-10, 10);
      window.console.log("Spliced these values: " + parseInt(index - 10) + " to " + index);
      document.getElementById('lines').innerHTML = lines;
      document.getElementById('score').innerHTML = score;

    }
    //window.console.log(i + " count: " + count);
  }
}





var draw = function() {

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
        if (shapes[j].intersects(fallen[i]) || shapes[j].intersects(floor[0])) {
          if (shapes[j].intersects(fallen[i])) {
            shapes[j].y = Math.floor(fallen[i].y) - Math.floor(fallen[i].h);
            //Once a shape intersects, this pushes it into the fallen array and
            //out of the shapes array.
          } else {
            shapes[j].y = Math.floor(floor[0].y) - Math.floor(tHeight);
          }
          shapes[j].hit = true;
          shapes[0].y = Math.ceil(shapes[0].y);
          shapes[1].y = Math.ceil(shapes[1].y);
          shapes[2].y = Math.ceil(shapes[2].y);
          shapes[3].y = Math.ceil(shapes[3].y);
          fallen.push(shapes[0]);
          fallen.push(shapes[1]);
          fallen.push(shapes[2]);
          fallen.push(shapes[3]);
          shapes.splice(0, 4);
          checkWin();
          if (fallen[i].y < 60) {
            window.alert('Game Over');
            fallen.length = 0;
            return fallen.length;
          }

          //The code below is for a future feature.  Currently the random falling tetrino
          //is only one configuration
          tBlock.shape = [
            [new Rectangle(positionX * 0.4, tHeight, "#9013FE"), //upside down T
              new Rectangle(positionX * 0.3, tHeight * 2, "#9013FE"),
              new Rectangle(positionX * 0.4, tHeight * 2, "#9013FE"),
              new Rectangle(positionX * 0.5, tHeight * 2, "#9013FE")
            ],

            // [new Rectangle(positionX*0.5, tHeight*2, "#9013FE"), // left T
            // new Rectangle(positionX*0.4, tHeight, "#9013FE"),
            // new Rectangle(positionX*0.4, tHeight*2, "#9013FE"),
            // new Rectangle(positionX*0.4, tHeight*3, "#9013FE")],

            // [new Rectangle(positionX*0.4, tHeight*3, "#9013FE"), // right side up T
            // new Rectangle(positionX*0.5, tHeight*2, "#9013FE"),
            // new Rectangle(positionX*0.4, tHeight*2, "#9013FE"),
            // new Rectangle(positionX*0.3, tHeight*2, "#9013FE")],

            // [new Rectangle(positionX*0.3, tHeight*2, "#9013FE"), // right T
            // new Rectangle(positionX*0.4, tHeight*3, "#9013FE"),
            // new Rectangle(positionX*0.4, tHeight*2, "#9013FE"),
            // new Rectangle(positionX*0.4, tHeight, "#9013FE")]
          ];

          jBlock.shape = [
            [new Rectangle(positionX * 0.3, tHeight, '#4A6EE2'),
              new Rectangle(positionX * 0.3, tHeight * 2, '#4A6EE2'),
              new Rectangle(positionX * 0.4, tHeight * 2, '#4A6EE2'),
              new Rectangle(positionX * 0.5, tHeight * 2, '#4A6EE2')
            ],

            // [new Rectangle(positionX * 0.5, tHeight, '#4A6EE2'),
            //   new Rectangle(positionX * 0.4, tHeight * 1, '#4A6EE2'),
            //   new Rectangle(positionX * 0.4, tHeight * 2, '#4A6EE2'),
            //   new Rectangle(positionX * 0.4, tHeight * 3, '#4A6EE2')
            // ],

            // [new Rectangle(positionX * 0.5, tHeight * 3, '#4A6EE2'),
            //   new Rectangle(positionX * 0.3, tHeight * 2, '#4A6EE2'),
            //   new Rectangle(positionX * 0.4, tHeight * 2, '#4A6EE2'),
            //   new Rectangle(positionX * 0.5, tHeight * 2, '#4A6EE2')
            // ],

            // [new Rectangle(positionX * 0.4, tHeight, '#4A6EE2'),
            //   new Rectangle(positionX * 0.4, tHeight * 2, '#4A6EE2'),
            //   new Rectangle(positionX * 0.4, tHeight * 3, '#4A6EE2'),
            //   new Rectangle(positionX * 0.3, tHeight * 3, '#4A6EE2')
            // ]
          ];

          sBlock.shape = [
            [new Rectangle(positionX * 0.3, tHeight * 2, '#7ED321'),
              new Rectangle(positionX * 0.4, tHeight * 2, '#7ED321'),
              new Rectangle(positionX * 0.4, tHeight, '#7ED321'),
              new Rectangle(positionX * 0.5, tHeight * 1, '#7ED321')
            ],

            // [new Rectangle(positionX * 0.4, tHeight, '#7ED321'),
            //   new Rectangle(positionX * 0.4, tHeight * 2, '#7ED321'),
            //   new Rectangle(positionX * 0.5, tHeight * 2, '#7ED321'),
            //   new Rectangle(positionX * 0.5, tHeight * 3, '#7ED321')
            // ],

            // [new Rectangle(positionX * 0.3, tHeight * 2, '#7ED321'),
            //   new Rectangle(positionX * 0.4, tHeight * 2, '#7ED321'),
            //   new Rectangle(positionX * 0.4, tHeight, '#7ED321'),
            //   new Rectangle(positionX * 0.5, tHeight * 1, '#7ED321')
            // ],

            // [new Rectangle(positionX * 0.4, tHeight, '#7ED321'),
            //   new Rectangle(positionX * 0.4, tHeight * 2, '#7ED321'),
            //   new Rectangle(positionX * 0.5, tHeight * 2, '#7ED321'),
            //   new Rectangle(positionX * 0.5, tHeight * 3, '#7ED321')
            // ]
          ];

          iBlock.shape = [
            [new Rectangle(positionX * 0.3, tHeight, '#50E3C2', tWidth - 5, tHeight),
              new Rectangle(positionX * 0.4, tHeight, '#50E3C2', tWidth - 5, tHeight),
              new Rectangle(positionX * 0.5, tHeight, '#50E3C2', tWidth - 5, tHeight),
              new Rectangle(positionX * 0.6, tHeight, '#50E3C2', tWidth - 5, tHeight)
            ],

            // [new Rectangle(positionX * 0.5, tHeight, '#50E3C2'),
            //   new Rectangle(positionX * 0.5, tHeight * 0, '#50E3C2'),
            //   new Rectangle(positionX * 0.5, tHeight * 2, '#50E3C2'),
            //   new Rectangle(positionX * 0.5, tHeight * 3, '#50E3C2')
            // ],

            // [new Rectangle(positionX * 0.3, tHeight, '#50E3C2'),
            //   new Rectangle(positionX * 0.4, tHeight, '#50E3C2'),
            //   new Rectangle(positionX * 0.5, tHeight, '#50E3C2'),
            //   new Rectangle(positionX * 0.6, tHeight, '#50E3C2')
            // ],

            // [new Rectangle(positionX * 0.5, tHeight, '#50E3C2'),
            //   new Rectangle(positionX * 0.5, tHeight * 0, '#50E3C2'),
            //   new Rectangle(positionX * 0.5, tHeight * 2, '#50E3C2'),
            //   new Rectangle(positionX * 0.5, tHeight * 3, '#50E3C2')
            // ]
          ];

          oBlock.shape = [
            [new Rectangle(positionX * 0.4, tHeight, '#F8E71C'),
              new Rectangle(positionX * 0.5, tHeight, '#F8E71C'),
              new Rectangle(positionX * 0.4, tHeight * 2, '#F8E71C'),
              new Rectangle(positionX * 0.5, tHeight * 2, '#F8E71C')
            ],

            // [new Rectangle(positionX * 0.4, tHeight, '#F8E71C'),
            //   new Rectangle(positionX * 0.5, tHeight, '#F8E71C'),
            //   new Rectangle(positionX * 0.4, tHeight * 2, '#F8E71C'),
            //   new Rectangle(positionX * 0.5, tHeight * 2, '#F8E71C')
            // ],

            // [new Rectangle(positionX * 0.4, tHeight, '#F8E71C'),
            //   new Rectangle(positionX * 0.5, tHeight, '#F8E71C'),
            //   new Rectangle(positionX * 0.4, tHeight * 2, '#F8E71C'),
            //   new Rectangle(positionX * 0.5, tHeight * 2, '#F8E71C')
            // ],

            // [new Rectangle(positionX * 0.4, tHeight, '#F8E71C'),
            //   new Rectangle(positionX * 0.5, tHeight, '#F8E71C'),
            //   new Rectangle(positionX * 0.4, tHeight * 2, '#F8E71C'),
            //   new Rectangle(positionX * 0.5, tHeight * 2, '#F8E71C')
            // ]
          ];

          zBlock.shape = [
            [new Rectangle(positionX * 0.3, tHeight, '#D0021B'),
              new Rectangle(positionX * 0.4, tHeight, '#D0021B'),
              new Rectangle(positionX * 0.4, tHeight * 2, '#D0021B'),
              new Rectangle(positionX * 0.5, tHeight * 2, '#D0021B')
            ],

            // [new Rectangle(positionX * 0.4, tHeight, '#D0021B'),
            //   new Rectangle(positionX * 0.4, tHeight * 2, '#D0021B'),
            //   new Rectangle(positionX * 0.3, tHeight * 2, '#D0021B'),
            //   new Rectangle(positionX * 0.3, tHeight * 3, '#D0021B')
            // ],

            // [new Rectangle(positionX * 0.3, tHeight, '#D0021B'),
            //   new Rectangle(positionX * 0.4, tHeight, '#D0021B'),
            //   new Rectangle(positionX * 0.4, tHeight * 2, '#D0021B'),
            //   new Rectangle(positionX * 0.5, tHeight * 2, '#D0021B')
            // ],

            // [new Rectangle(positionX * 0.4, tHeight, '#D0021B'),
            //   new Rectangle(positionX * 0.4, tHeight * 2, '#D0021B'),
            //   new Rectangle(positionX * 0.3, tHeight * 2, '#D0021B'),
            //   new Rectangle(positionX * 0.3, tHeight * 3, '#D0021B')
            // ]
          ];

          lBlock.shape = [
            [new Rectangle(positionX * 0.5, tHeight, '#E59512'),
              new Rectangle(positionX * 0.3, tHeight * 2, '#E59512'),
              new Rectangle(positionX * 0.4, tHeight * 2, '#E59512'),
              new Rectangle(positionX * 0.5, tHeight * 2, '#E59512')
            ],

            // [new Rectangle(positionX*0.5, tHeight*0, '#50E3C2'),
            // new Rectangle(positionX*0.5, tHeight*1, '#50E3C2'),
            // new Rectangle(positionX*0.5, tHeight*2, '#50E3C2'),
            // new Rectangle(positionX*0.5, tHeight*3, '#50E3C2')],

            // [new Rectangle(positionX*0.3, tHeight, '#50E3C2'),
            // new Rectangle(positionX*0.4, tHeight, '#50E3C2'),
            // new Rectangle(positionX*0.5, tHeight, '#50E3C2'),
            // new Rectangle(positionX*0.6, tHeight, '#50E3C2')],

            // [new Rectangle(positionX*0.5, tHeight*0, '#50E3C2'),
            // new Rectangle(positionX*0.5, tHeight*1, '#50E3C2'),
            // new Rectangle(positionX*0.5, tHeight*2, '#50E3C2'),
            // new Rectangle(positionX*0.5, tHeight*3, '#50E3C2')]
          ];

          setInterval(newRect(), 400);
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

}; //end Draw

//Set interval causes the app to run through every x milliseconds depending on this.interval.

var myState = canvas;
myState.interval = 33 / 2;

function drawing() {
  draw(canvas);
}

setInterval(drawing, myState.interval);
