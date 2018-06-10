

console.log("Hi there!")

const view = {};
view.boardPlayer_1 = document.querySelector('.player-1.board')
view.boardPlayer_2 = document.querySelector('.player-2.board')

const battlefieldCanvasConfig_1 = new CanvasConfig(40, 10, 10, 'battlefield-1');
const battlefieldCanvasConfig_2 = new CanvasConfig(40, 10, 10, 'battlefield-2');

const battlefield_1 = new Battlefield('One', battlefieldCanvasConfig_1, view.boardPlayer_1);
const battlefield_2 = new Battlefield('Two', battlefieldCanvasConfig_2, view.boardPlayer_2);

const c = battlefield_1.canvas;


const listener_1 = ['mousemove', mouseHandler];

const listener_2 = ['mousemove', mouseHandler];
	
battlefield_1.drawGrid()

// battlefield_1.DOMElement.canvas.addEventListener("mousemove", mouseHandler);
// battlefield_1.DOMElement.canvas.addEventListener("click", mouseHandler);
// // battlefieldCanvas_2.canvas.addEventListener("mousemove", mouseHandler);


function mouseHandler(event) {
	// let activeBattlefield;
	// let position;
	// if (this.className === 'battlefield-1') {
	// activeBattlefield = battlefield_1;
	// } else if (this.className === 'battlefield-2') {
	// activeBattlefield = battlefield_2;
	// }
	// position = 
	// 	activeBattlefield.DOMElement.getRelativeMousePositionInMods(event.clientX, event.clientY);
	// if(event.type === "click") {
	// 	console.log(
	// 	activeBattlefield.get(position[0], position[1])
	// 	);
	// }
	
	console.log(
		"I am handling mousemove"
		// activeBattlefield.get(position[0], position[1]),

		);
}



