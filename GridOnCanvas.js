

const GridOnCanvas = function(x, y, canvasConfig, lineWidth, fillColor) {
	this.canvas = new Canvas(canvasConfig);
	Grid.call(this, x, y, this.canvas);
	this.lineWidth = lineWidth;
	this.fillColor = fillColor;
}

GridOnCanvas.prototype = Object.create(Grid.prototype);
GridOnCanvas.prototype.constructor = GridOnCanvas;

GridOnCanvas.prototype.append = function(parentElement) {
	this.canvas.append(parentElement);
	return this;
};

GridOnCanvas.prototype.getAllFields = function() {
	return this.getField();
};

GridOnCanvas.prototype.drawGrid = function() {
	flatten(this.getAllFields()).forEach(field => field.outline(this.lineWidth));
};
GridOnCanvas.prototype.highlighted = function(x, y) {
	this.getField(x,y).highlighted(this.lineWidth);
};
GridOnCanvas.prototype.drawCross = function(x,y) {
	this.getField(x,y).drawCross(this.lineWidth);
};
GridOnCanvas.prototype.drawDot = function(x,y) {
	this.getField(x,y).drawDot(this.canvas.modularUnit / 10);
};
GridOnCanvas.prototype.filled = function(x,y) {
	this.getField(x,y).filled(this.lineWidth, this.fillColor);
};


