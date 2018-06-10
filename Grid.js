

const GridField = function(x, y, canvas) {
	this.x = x;
	this.y = y;
	this.canvas = canvas;
};
GridField.prototype.extend = function(obj) {
	let properties = Object.keys(obj);
	properties.forEach( prop => {
		let value = obj[prop];
		this[prop] = value;
	});
};
GridField.prototype.highlight = function(mode) { // rename to outline
	this.isHighlighted = true;
	let ctx = this.canvas.ctx;
	let mod = this.canvas.modularUnit;
	this.position_x = this.x * this.canvas.modularUnit;
	this.position_y = this.y * this.canvas.modularUnit;
	ctx.rect(this.position_x - mod, this.position_y - mod, mod, mod);
	if(mode === "crossed") {
		ctx.fill();
	}
		
		ctx.stroke();
		
	return this.isHighlighted;
};

GridField.prototype.drawDot = function(mode) { // rename to outline
	this.hasDot = true;
	let ctx = this.canvas.ctx;
	let mod = this.canvas.modularUnit;
	this.center_x = this.x * this.canvas.modularUnit - this.canvas.modularUnit / 2;
	this.center_y = this.y * this.canvas.modularUnit - this.canvas.modularUnit / 2;
	ctx.beginPath();
	ctx.arc(this.center_x, this.center_y, mod / 10, 0, 360);
	ctx.fill();
};

GridField.prototype.drawcross = function(mode) { // rename to outline
	console.log("crossed")
};

const Grid = function(a,b, canvas) {
	this.a = a;
	this.b = b;
	this.canvas = canvas;
};
Grid.prototype.createFields = function() {
	this.grid = [];
	for (let i = 0; i <= this.a; i ++) {	
		this.grid[i] = [];	
		for (let j = 0; j <= this.b; j ++) {					
			this.grid[i][j] = new GridField(i, j, this.canvas);
		};
	};
	return this.grid;
};
Grid.prototype.getField = function(x,y) {
	if(!this.grid) {this.createFields()};
	if (!x && !y) {
		return this.grid;
	}
	return this.grid[x][y];
};
Grid.prototype.setField = function(x,y, obj) {
	this.getField(x,y).extend(obj);
};

let field = new GridField (2,3)

let extension1 = {
	isEmpty: false
}
let extension2 = {
	type: "one mast",
	sink: function() {
		console.log("has been sunk")
	},
}