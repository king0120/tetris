//@codekit-prepend 'rectBuilder.js';

var rect = new Rectangle(canvas.width * 0.2 , canvas.height * 0.5);

var rect2 = new Rectangle(canvas.width * 0.2, canvas.height * 0.2);
var canvasFloor = new Rectangle(0, canvas.height * 1, canvas.width, canvas.height/24);
window.console.log(rect.w);
window.console.log(rect.h);
var movement = 0;

setInterval(function(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  rect.draw();
  rect2.draw();
  canvasFloor.draw();

  // window.console.log("Rect " + "X: " + rect.x + "  Y: " + rect.y);
  // window.console.log("Rect2 " + "X: " + rect2.x + "  Y: " + rect2.y);
 window.console.log(rect2.intersects(canvasFloor));
  rect2.y += movement;

  if (rect2.intersects(canvasFloor)){
    movement = 0;
  } else {
    movement = 5;
  }

  // if (rect.Intersects(canvasFloor)===false){
  //   rect.y +=2;
  // } else if (rect.Intersects(canvasFloor)){
  //   rect.y = canvasFloor.y + 40;
  // }


}, 33);

$('canvas').on('click', function(event) {
  var locX = event.pageX - 10;
  var locY = event.pageY - 100;
  window.console.log("X: " + locX + "  Y: " + locY);

});
