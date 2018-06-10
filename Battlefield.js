

const Battlefield = function(ID, canvasConfig, parentEl) {
	this.ID = ID;
	this.gridOnCanvas = new GridOnCanvas(10, 10, canvasConfig).append(parentEl);
}

// Battlefield.prototype = Object.create(Grid.prototype);
// Battlefield.prototype.constructor = Battlefield;

Battlefield.prototype.drawGrid = function() {
	for(let i = 1; i <= 10; i ++) {
		for(let j = 1; j <= 10; j ++) {
			this.gridOnCanvas.highlightField(i,j);
		};
	};	
};

// Battlefield.prototype.highlightField = function(x, y) {
// 	this.canvas.drawRectGrid();
// };
