//@codekit-prepend 'tetrinos.js';
window.console.log('hello from rotate.js');

var up = -tHeight;
var down = tHeight;
var left = -positionX * 0.1;
var right = positionX * 0.1;

var difference;
var height;

function rotate(tetrino) {
  difference = tetrino[2].y - tetrino[0].y;
  difference = Math.floor(difference);
  height = Math.floor(tHeight);
  switch (tetrino[0].color) {
    case "#9013FE": //tBlock
      switch (true) {
        case Math.floor(tetrino[0].x) - Math.floor(tetrino[2].x) === Math.floor(left): //tBlock.shape[3]
          window.console.log('tBlock.shape[3]');
          tetrino[0].x += right;
          tetrino[0].y += up;
          tetrino[1].x += left;
          tetrino[1].y += up;
          tetrino[3].x += right;
          tetrino[3].y += down;
          break;
        case difference === height: //tBlock.shape[0]
          window.console.log('tBlock.shape[0]');
          tetrino[0].x += right;
          tetrino[0].y += down;
          tetrino[1].x += right;
          tetrino[1].y += up;
          tetrino[3].x += left;
          tetrino[3].y += down;
          window.console.log('finished');
          break;
        case difference === 0: //tBlock.shape[1]
          window.console.log('tBlock.shape[1]');
          tetrino[0].x += left;
          tetrino[0].y += down;
          tetrino[1].x += right;
          tetrino[1].y += down;
          tetrino[3].x += left;
          tetrino[3].y += up;
          break;
        case difference === -1 + height * -1: //tBlock.shape[2]  THIS IS SO HACKY. Come back to fix this
          window.console.log('tBlock.shape[2]');
          tetrino[0].x += left;
          tetrino[0].y += up;
          tetrino[1].x += left;
          tetrino[1].y += down;
          tetrino[3].x += right;
          tetrino[3].y += up;
          break;
        default:
          window.console.log('tBlock error');
          break;
      }
      break;
    case '#4A6EE2': //jBlock

      switch (true) {
        case Math.floor(tetrino[3].y) - Math.floor(tetrino[1].y) === (height + 1) * -2: //jBlock.shape[3]
          window.console.log('jBlock.shape[3]');
          tetrino[0].x += 0;
          tetrino[0].y += up * 2;
          tetrino[1].x += left;
          tetrino[1].y += up;
          tetrino[3].x += right;
          tetrino[3].y += down;
          break;
        case Math.floor(tetrino[0].y) === Math.floor(tetrino[1].y): //jBlock.shape[1]
          window.console.log('jBlock.shape[1]');
          tetrino[0].x += 0;
          tetrino[0].y += down * 2;
          tetrino[1].x += right;
          tetrino[1].y += down;
          tetrino[3].x += left;
          tetrino[3].y += up;
          break;
        case difference === height: //jBlock.shape[0]
          window.console.log('jBlock.shape[0]');
          tetrino[0].x += right * 2;
          tetrino[0].y += 0;
          tetrino[1].x += right;
          tetrino[1].y += up;
          tetrino[3].x += left;
          tetrino[3].y += down;
          window.console.log('finished');
          break;
        case difference === -1 + height * -1: //jBlock.shape[2]  THIS IS SO HACKY. Come back to fix this
          window.console.log('jBlock.shape[2]');
          tetrino[0].x += left * 2;
          tetrino[0].y += 0;
          tetrino[1].x += left;
          tetrino[1].y += down;
          tetrino[3].x += right;
          tetrino[3].y += up;
          break;
        default:
          window.console.log('jBlock error');
          break;
      }
      break;
    case '#7ED321': //sBlock
      window.console.log(Math.floor(tetrino[0].x) - Math.floor(tetrino[2].x));
      window.console.log(left);

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
      switch (true) {
        case Math.floor(tetrino[3].y) - Math.floor(tetrino[1].y) === (height + 1) * -2: //lBlock.shape[3]
          window.console.log('lBlock.shape[3]');
          tetrino[0].x += 0;
          tetrino[0].y += up * 2;
          tetrino[1].x += left;
          tetrino[1].y += up;
          tetrino[3].x += right;
          tetrino[3].y += down;
          break;
        case Math.floor(tetrino[0].y) === Math.floor(tetrino[1].y): //lBlock.shape[1]
          window.console.log('lBlock.shape[1]');
          tetrino[0].x += 0;
          tetrino[0].y += down * 2;
          tetrino[1].x += right;
          tetrino[1].y += down;
          tetrino[3].x += left;
          tetrino[3].y += up;
          break;
        case difference === height: //lBlock.shape[0]
          window.console.log('jBlock.shape[0]');
          tetrino[0].x += right * 2;
          tetrino[0].y += 0;
          tetrino[1].x += right;
          tetrino[1].y += up;
          tetrino[3].x += left;
          tetrino[3].y += down;
          window.console.log('finished');
          break;
        case difference === -1 + height * -1: //lBlock.shape[2]  THIS IS SO HACKY. Come back to fix this
          window.console.log('jBlock.shape[2]');
          tetrino[0].x += left * 2;
          tetrino[0].y += 0;
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
      console.log('something went wrong');
      break;
  }

}
