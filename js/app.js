//@codekit-prepend 'tetrinos.js';


// document.querySelector('canvas').on('click', function(event) {
//   var locX = event.pageX - 438;
//   var locY = event.pageY - 44;
//   window.console.log("X: " + locX + "  Y: " + locY);

// });
var canva;

function init(){
  window.console.log("Started");
  canva = new CanvasState(document.getElementById('canvas'));

}




//canvas.width * 0.2, canvas.height * 0.2, canvas.width / 10, canvas.height/24
init();
