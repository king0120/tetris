//@codekit-prepend 'rotate.js';
var score = 0;
var count = 0;
var index = -1;
var lines = 0;

function checkLine(low, high){
    fallen = fallen.sort(function(a, b){return b.y-a.y;});
    count = 0;
    index = -1;
    for (var i = 3; i<fallen.length; i++){
      if (fallen[i].y <= high && fallen[i].y >= low){
        count ++;
      } else {
        index++;
      }
    }
    return count;
  }

function checkWin(){
  for (var i=1; i<20; i++){
    var checked = checkLine(tHeight*i, tHeight*(i+1));
    if (checked>=10){
      window.console.log("SCORE!");
      score += 200;
      lines ++;
      fallen.splice(index, 10);
      document.getElementById('lines').innerHTML = lines;
      document.getElementById('score').innerHTML = score;
      for (var d = index+10; d < fallen.length; d++){
        fallen[d].y -= tHeight;
      }
    }
    window.console.log("count: " + count);
    window.console.log('Working');
  }
}
