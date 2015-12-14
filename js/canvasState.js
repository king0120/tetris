//@codekit-prepend 'rectangle.js';

function CanvasState(canvas1) {
  this.canvas = document.getElementById('canvas');
  canvas1.height = window.innerHeight;
  canvas1.width = window.innerWidth;
  // this.height = window.innerHeight;
  // this.width = window.innerWidth;
  this.canvas.style.width = '41.7%';
  this.canvas.style.height = '90%';
  this.ctx = ctx;
  this.shapes = [];
  this.fallen = [new Rectangle(0, canvas1.height - 10, canvas1.width, 20)];

  this.clear = function() {
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (var i = 0; i < this.fallen.length; i++) {
      this.fallen[i].draw(ctx); //If I remove this line, the bricks become invisible. Challenge mode?
    }
  };

  var myState = this;
  this.interval = 33;
  setInterval(function() {
    myState.draw();
  }, myState.interval);
}

CanvasState.prototype.addShape = function(shape) {
  this.shapes.push(shape);
  this.valid = false;
};



CanvasState.prototype.draw = function() {
  var shapes = this.shapes;
  var fallen = this.fallen;

  this.clear();

  for (var j = 0; j < shapes.length; j++) {
    var movement = 3;
    for (var i = fallen.length - 1; i >= 0; i--) {
      if (shapes[j].intersects(fallen[i])) {
        shapes[j].y = fallen[i].y - fallen[i].h;
        fallen.push(shapes[j]);
        shapes.splice(0, 1);
        window.console.log("fallen: " + fallen);
        window.console.log("shapes: " + shapes);
        this.hit = true;
      } else if (shapes[j].hit !== true) {
        shapes[j].y += movement;
        window.console.log(movement);

        document.onkeydown = function(e) {
          e = e || window.event;
          switch (e.which || e.keyCode) {
            case 37:
              shapes[0].moveLeft();
              break;
            case 39:
              shapes[0].moveRight();
              break;
            default:
              window.console.log(e.which);
              window.console.log(e.keyCode);
          }
        };

        shapes[j].draw(ctx);
      }
    }
  }

};

// fallen.draw(ctx);
// shapes[0].draw(ctx);
// for (var z = 0; z < shapes.length; z++) {
//      if (shapes[0].intersects(fallen)) {
//         //fallen.push(shapes[0]);

//         fallen.y -= shapes[0].y;

//         fallen.h += shapes[0].h;
//         shapes.splice(0, 1);
//         window.console.log(fallen);
//         window.console.log(shapes);
//         return;
//       } else {
//         shapes[0].y+=movement;
//       }
//     }


//       fallen.push(shapes[z]);
//       this.valid = true;
//     } else {
//       shapes[z].y += movement;
//       shapes[z].draw(ctx);
//     }
//   }
// }



var counter = -1;
CanvasState.prototype.newRect = function() {
  window.console.log("Alive!");
  if (counter < 9) {
    counter++;
  } else {
    counter = 0;
  }
  var positionX = window.innerWidth;
  var positionY = window.innerWidth / 24;
  this.addShape(new Rectangle(positionX * (counter / 10), positionY));
};
