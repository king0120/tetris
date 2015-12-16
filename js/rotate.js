//@codekit-prepend 'tetrinos.js';
window.console.log('hello from rotate.js');

var up = -tHeight;
var down = tHeight;
var left = -positionX * 0.1;
var right = positionX * 0.1;

var difference;
var height;

function rotate(tetrino) {

  height = Math.floor(tHeight);
  switch (tetrino[0].color) {
    case "#9013FE": //tBlock
      switch (true) {
        case (Math.ceil(tetrino[0].x - tetrino[2].x) === 1 || Math.ceil(tetrino[0].x - tetrino[2].x) === 0) && Math.ceil(tetrino[0].y - tetrino[2].y) === Math.ceil(tHeight): //tBlock.shape[2]  THIS IS SO HACKY. Come back to fix this
          window.console.log('tBlock.shape[2]');
          tetrino[0].x += left;
          tetrino[0].y += up;
          tetrino[1].x += left;
          tetrino[1].y += down;
          tetrino[3].x += right;
          tetrino[3].y += up;
          break;
         case Math.ceil(tetrino[0].x - tetrino[2].x) === Math.ceil(positionX/10*-1) && (Math.ceil(tetrino[0].y - tetrino[2].y) === 1 || Math.ceil(tetrino[0].y - tetrino[2].y) === 0): //tBlock.shape[3]
          window.console.log('tBlock.shape[3]');
          tetrino[0].x += right;
          tetrino[0].y += up;
          tetrino[1].x += left;
          tetrino[1].y += up;
          tetrino[3].x += right;
          tetrino[3].y += down;
          break;
        case (Math.ceil(tetrino[0].x - tetrino[2].x) === 1 || Math.ceil(tetrino[0].x - tetrino[2].x) === 0) && Math.ceil(tetrino[0].y - tetrino[2].y) === Math.ceil(-1* tHeight): //tBlock.shape[0]
          window.console.log('tBlock.shape[0]');
          tetrino[0].x += right;
          tetrino[0].y += down;
          tetrino[1].x += right;
          tetrino[1].y += up;
          tetrino[3].x += left;
          tetrino[3].y += down;
          window.console.log('finished');
          break;
        case tetrino[2].y === tetrino[2].y: //tBlock.shape[1]
          window.console.log('tBlock.shape[1]');
          tetrino[0].x += left;
          tetrino[0].y += down;
          tetrino[1].x += right;
          tetrino[1].y += down;
          tetrino[3].x += left;
          tetrino[3].y += up;
          break;

        default:
          window.console.log('tBlock error');
          break;
      }
      break;
    case '#4A6EE2': //jBlock
          window.console.log(Math.ceil(tetrino[0].x - tetrino[2].x));
          window.console.log(Math.ceil(tetrino[0].y - tetrino[2].y));
      switch (true) {

         case Math.ceil(tetrino[0].x - tetrino[2].x) === Math.ceil(positionX*-0.1) && Math.ceil(tetrino[0].y - tetrino[2].y) === Math.ceil(tHeight):
          window.console.log('jBlock.shape[3]');
          tetrino[0].x += 0;
          tetrino[0].y += up * 2;
          tetrino[1].x += left;
          tetrino[1].y += up;
          tetrino[3].x += right;
          tetrino[3].y += down;
          break;

         case Math.ceil(tetrino[0].x - tetrino[2].x) === Math.ceil(positionX*0.1) && Math.ceil(tetrino[0].y - tetrino[2].y) === Math.ceil(tHeight): //jBlock.shape[2]  THIS IS SO HACKY. Come back to fix this
          window.console.log('jBlock.shape[2]');
          tetrino[0].x += left * 2;
          tetrino[0].y += 0;
          tetrino[1].x += left;
          tetrino[1].y += down;
          tetrino[3].x += right;
          tetrino[3].y += up;
          break;
        case Math.floor(Math.floor(tetrino[0].x)) === Math.floor(Math.floor(tetrino[1].x)): //jBlock.shape[0]
          window.console.log('jBlock.shape[0]');
          tetrino[0].x += right * 2;
          tetrino[0].y += 0;
          tetrino[1].x += right;
          tetrino[1].y += up;
          tetrino[3].x += left;
          tetrino[3].y += down;
          window.console.log('finished');
          break;
        case Math.ceil(tetrino[0].y - tetrino[2].y) === Math.ceil(tHeight*-1) && Math.ceil(tetrino[0].x - tetrino[2].x) === Math.ceil(positionX*0.1): //jBlock.shape[1]
          window.console.log('jBlock.shape[1]');
          tetrino[0].x += 0;
          tetrino[0].y += down * 2;
          tetrino[1].x += right;
          tetrino[1].y += down;
          tetrino[3].x += left;
          tetrino[3].y += up;
          break;



        default:
          window.console.log('jBlock error');
          break;
      }
      break;
    case '#7ED321': //sBlock


      switch (true) {
        case Math.floor(tetrino[2].y) === Math.floor(tetrino[1].y): //jBlock.shape[3]
          window.console.log('sBlock.shape[3]');
          tetrino[0].x += 0;
          tetrino[0].y += down * 2;
          tetrino[1].x += right;
          tetrino[1].y += down;
          tetrino[3].x += right;
          tetrino[3].y += up;
          break;
        case Math.floor(tetrino[0].y) === Math.floor(tetrino[1].y): //jBlock.shape[1]
          window.console.log('sBlock.shape[1]');
          tetrino[0].x += 0;
          tetrino[0].y += up * 2;
          tetrino[1].x += left;
          tetrino[1].y += up;
          tetrino[3].x += left;
          tetrino[3].y += down;
          break;
        default:
          window.console.log('sBlock error');
          break;
      }
      break;
    case '#50E3C2': //iBlock

      switch (true) {
        case Math.floor(tetrino[0].y) !== Math.floor(tetrino[1].y): //jBlock.shape[3]
          window.console.log('iBlock.shape[2]');
          tetrino[0].x += left * 2;
          tetrino[0].y += down * 2;
          tetrino[1].x += left;
          tetrino[1].y += down;
          tetrino[3].x += right;
          tetrino[3].y += up;
          break;
        case Math.floor(tetrino[0].y) === Math.floor(tetrino[1].y): //jBlock.shape[1]
          window.console.log('iBlock.shape[1]');
          tetrino[0].x += right * 2;
          tetrino[0].y += up * 2;
          tetrino[1].x += right;
          tetrino[1].y += up;
          tetrino[3].x += left;
          tetrino[3].y += down;
          break;
        default:
          window.console.log('iBlock error');
          break;
      }
      break;
    case '#F8E71C': //oBlock
      break;
    case '#D0021B': //zBlock
      switch (true) {
        case Math.floor(tetrino[2].y) !== Math.floor(tetrino[1].y): //jBlock.shape[3]
          window.console.log('zBlock.shape[2]');
          tetrino[0].x += right * 2;
          tetrino[0].y += 0;
          tetrino[1].x += right;
          tetrino[1].y += down;
          tetrino[3].x += left;
          tetrino[3].y += down;
          break;
        case Math.floor(tetrino[0].y) !== Math.floor(tetrino[1].y): //jBlock.shape[1]
          window.console.log('zBlock.shape[1]');
          tetrino[0].x += left * 2;
          tetrino[0].y += 0;
          tetrino[1].x += left;
          tetrino[1].y += up;
          tetrino[3].x += right;
          tetrino[3].y += up;
          break;
        default:
          window.console.log('zBlock error');
          break;
      }
      break;
    case '#E59512': //lBlock
      window.console.log(tetrino[0].x - tetrino[2].x);
      window.console.log(tetrino[0].y - tetrino[2].y);
      switch (true) {
        case Math.ceil(tetrino[0].x - tetrino[2].x) === Math.ceil(-1*positionX/10) && Math.ceil(tetrino[0].y - tetrino[2].y)===Math.ceil(-1*tHeight): //lBlock.shape[3]
          window.console.log('lBlock.shape[3]');
          tetrino[0].x += right*2;
          tetrino[0].y += 0;
          tetrino[1].x += left;
          tetrino[1].y += up;
          tetrino[3].x += right;
          tetrino[3].y += down;
          break;
        case Math.ceil(tetrino[0].x - tetrino[2].x) === Math.ceil(positionX/10) && Math.ceil(tetrino[0].y - tetrino[2].y)===Math.ceil(tHeight): //lBlock.shape[1]
          window.console.log('lBlock.shape[1]');
          tetrino[0].x += left*2;
          tetrino[0].y += 0;
          tetrino[1].x += right;
          tetrino[1].y += down;
          tetrino[3].x += left;
          tetrino[3].y += up;
          break;
        case Math.ceil(tetrino[0].x - tetrino[2].x) === Math.ceil(positionX/10) && Math.ceil(tetrino[0].y - tetrino[2].y)===Math.ceil(-1* tHeight): //lBlock.shape[0]
          window.console.log('jBlock.shape[0]');
          tetrino[0].x += 0;
          tetrino[0].y += down*2;
          tetrino[1].x += right;
          tetrino[1].y += up;
          tetrino[3].x += left;
          tetrino[3].y += down;
          window.console.log('finished');
          break;
        case Math.ceil(tetrino[0].x - tetrino[2].x) === Math.ceil(-1*positionX/10) && Math.ceil(tetrino[0].y - tetrino[2].y)===Math.ceil(tHeight):
          window.console.log('jBlock.shape[2]');
          tetrino[0].x += 0;
          tetrino[0].y += up*2;
          tetrino[1].x += left;
          tetrino[1].y += down;
          tetrino[3].x += right;
          tetrino[3].y += up;
          break;
        default:
          window.console.log('lBlock error');
          break;
      }
      break;
    default:
      window.console.log('something went wrong');
      break;
  }

}
