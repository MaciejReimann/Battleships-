

const GridOnCanvas = function(x, y, canvasConfig) {
	this.canvas = new Canvas(canvasConfig);
	Grid.call(this, x, y, this.canvas);
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
	flatten(this.getAllFields()).forEach(field => field.outline());
};

GridOnCanvas.prototype.highlighted = function(x,y) {
	this.getField(x,y).highlighted();
};
GridOnCanvas.prototype.drawCross = function(x,y) {
	this.getField(x,y).drawCross();
};
GridOnCanvas.prototype.drawDot = function(x,y) {
	this.getField(x,y).drawDot(this.canvas.modularUnit / 10);
};
GridOnCanvas.prototype.filled = function(x,y) {
	this.getField(x,y).filled();
};


GridOnCanvas.prototype.highlightField = function(x,y) {
	// let ctx = this.getField(x,y).canvas.ctx
	// ctx.rect(20,20,150,100);
	// ctx.stroke();

	// console.log( this.getField(x,y) )
	this.getField(x,y).highlight("");
	this.getField(x,y).drawDot();

	// console.log(ctx)

	// console.log( this.getField(1,1).canvas.ctx )
	console.log(" ~~Empty Grid~~ ")
};

// GridOnCanvas.prototype.highlightField = function(x,y) {
// 	// let ctx = this.getField(x,y).canvas.ctx
// 	// ctx.rect(20,20,150,100);
// 	// ctx.stroke();

// 	// console.log( this.getField(x,y) )
// 	this.getField(x,y).highlight("");
// 	this.getField(x,y).drawDot();

// 	// console.log(ctx)

// 	// console.log( this.getField(1,1).canvas.ctx )
// 	console.log(" ~~Empty Grid~~ ")
// };

