

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