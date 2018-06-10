

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
