

const Battlefield = function(ID, canvasConfig, parentEl) {
	this.ID = ID;
	this.gridOnCanvas = new GridOnCanvas(10, 10, canvasConfig).append(parentEl);
};

Battlefield.prototype.drawGrid = function() {
	this.gridOnCanvas.drawGrid();
};

Battlefield.prototype.markAs = function(x,y,option) {
	if(option === 'active') {
		this.gridOnCanvas.highlighted(x,y);
	} else if(option === 'hit') {
		this.gridOnCanvas.drawCross(x,y);
	} else if(option === 'missed') {
		this.gridOnCanvas.drawDot(x,y);
	} else if(option === 'ship') {
		this.gridOnCanvas.filled(x,y);
	}
};
	
// Battlefield.prototype.highlightField = function(x, y) {
// 	this.canvas.drawRectGrid();
// };
