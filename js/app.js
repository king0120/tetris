//@codekit-prepend 'rectBuilder.js';

var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth * 0.4;
canvas.height = window.innerHeight* 0.93;
canvas.style.width = canvas.width + 'px';
canvas.style.height = canvas.height + 'px';

var ctx= canvas.getContext('2d');

var rect = new Rectangle(155,150,40,40);
var rect2 = new Rectangle(85,35,40,40);
var canvasFloor = new Rectangle(0, canvas.height, canvas.width, 1);



setInterval(function(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  rect.Draw(ctx, 'black');
  rect2.Draw(ctx, 'blue');
  canvasFloor.Draw(ctx, 'red');
  window.console.log("Rect " + "X: " + rect.x + "  Y: " + rect.y);
  window.console.log("Rect2 " + "X: " + rect2.x + "  Y: " + rect2.y);
  window.console.log(rect2.Intersects(rect));

  if (rect2.Intersects(canvasFloor)===false){
    rect2.y +=1;
  } else if (rect2.Intersects(canvasFloor)){
    rect2.y = canvasFloor.y - 40;
  }

  if (rect.Intersects(canvasFloor)===false){
    rect.y +=2;
  } else if (rect.Intersects(canvasFloor)){
    rect.y = canvasFloor.y - 40;
  }


}, 33);

$('canvas').on('click', function(event) {
  var locX = event.pageX - 10;
  var locY = event.pageY - 100;
  window.console.log("X: " + locX + "  Y: " + locY);

});
