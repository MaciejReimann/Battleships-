

const Battlefield = function(ID, canvasConfig, parentEl) {
	this.ID = ID;
	this.gridLineWidth = 2;
	this.shipColor = 'lightgrey';
	this.gridOnCanvas = new GridOnCanvas(10, 10, canvasConfig, this.gridLineWidth, this.shipColor).append(parentEl);	
};

Battlefield.prototype.addListener = function(listener) {
	this.gridOnCanvas.canvas.addListener(listener);
};

Battlefield.prototype.drawGrid = function() {
	this.gridOnCanvas.drawGrid(this.gridLineWidth);
};

Battlefield.prototype.markAs = function(x, y, option) {
	if(option === 'active') {
		this.gridOnCanvas.highlighted(x, y);
	} else if(option === 'hit') {
		this.gridOnCanvas.drawCross(x, y);
	} else if(option === 'missed') {
		this.gridOnCanvas.drawDot(x, y);
	} else if(option === 'ship') {
		this.gridOnCanvas.filled(x, y);
	}
};
	
// Battlefield.prototype.highlightField = function(x, y) {
// 	this.canvas.drawRectGrid();
// };
