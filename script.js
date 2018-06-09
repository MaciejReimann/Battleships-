console.log("Hi there!")

const view = {};
view.boardPlayer_1 = document.querySelector('.player-1.board')
view.boardPlayer_2 = document.querySelector('.player-2.board')

const battlefieldCanvasConfig_1 = new CanvasConfig(40, 10, 10, view.boardPlayer_1, 'battlefield-1');
const battlefieldCanvas_1 = new Canvas(battlefieldCanvasConfig_1);

const battlefieldCanvasConfig_2 = new CanvasConfig(40, 10, 10, view.boardPlayer_2, 'battlefield-2');
const battlefieldCanvas_2 = new Canvas(battlefieldCanvasConfig_2);



// battlefieldCanvas_1.canvas.addEventListener("mousemove", mouseHandler);
// battlefieldCanvas_2.canvas.addEventListener("mousemove", mouseHandler);


function mouseHandler(event){
	let canvas;
	if (this.className === 'battlefield-1') {
		canvas = battlefieldCanvas_1;
	} else if (this.className === 'battlefield-2') {
		canvas = battlefieldCanvas_2;
	}
	console.log(
		canvas.getRelativeMousePositionInMods(event.clientX, event.clientY)
		);
}

