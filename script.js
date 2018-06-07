console.log("Hi there!")

const view = {};
view.boardPlayer_1 = document.querySelector('.player-1.board')
view.boardPlayer_2 = document.querySelector('.player-2.board')
// view.canvasPlayer_2 = new Canvas(canvasConfig);

const battlefieldCanvasConfig_1 = new CanvasConfig(40, 10, 10, view.boardPlayer_1, 'battlefield');
const battlefieldCanvas_1 = new Canvas(battlefieldCanvasConfig_1);

const battlefieldCanvasConfig_2 = new CanvasConfig(40, 10, 10, view.boardPlayer_2, 'battlefield');
const battlefieldCanvas_2 = new Canvas(battlefieldCanvasConfig_2);

// console.log(battlefieldCanvas)