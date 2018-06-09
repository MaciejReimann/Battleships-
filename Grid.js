const Empty = function() {
	this.isEmpty = true;
}

const GridField = function(x,y) {
	this.x = x;
	this.y = y;
};
GridField.prototype.extend = function(obj) {
	let properties = Object.keys(obj);
	properties.forEach( prop => {
		let value = obj[prop];
		this[prop] = value;
	});
};

const Grid = function(a,b) {
	this.a = a;
	this.b = b;
};
Grid.prototype.create = function() {
	this.grid = [];
	for (let i = 0; i < this.a; i ++) {	
		this.grid[i] = [];	
		for (let j = 0; j < this.b; j ++) {					
			this.grid[i][j] = new GridField(i,j);
		};
	};
	return this.grid;
};
Grid.prototype.get = function(x,y) {
	if(!this.grid) {this.create()};
	return this.grid[x][y];
};
Grid.prototype.set = function(x,y, obj) {
	this.get(x,y) = obj;
	console.log( this.get(x,y) )
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