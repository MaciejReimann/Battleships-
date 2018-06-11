

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
GridField.prototype.outline = function(mode) {
	this.isOutlined = true;
	let ctx = this.canvas.ctx;
	let mod = this.canvas.modularUnit;
	this.position_x = this.x * this.canvas.modularUnit;
	this.position_y = this.y * this.canvas.modularUnit;
	ctx.rect(this.position_x - mod, this.position_y - mod, mod, mod);
	if(mode === "crossed") {
		this.cross();
	}
	ctx.stroke();
};
GridField.prototype.highlighted = function() {
	console.log(this.x, this.y, "highlighted")
};
GridField.prototype.drawCross = function() {
	console.log(this.x, this.y, "crossed")
};
GridField.prototype.drawDot = function(r) {
	this.hasDot = true;
	let ctx = this.canvas.ctx;
	let mod = this.canvas.modularUnit;
	this.center_x = this.x * this.canvas.modularUnit - this.canvas.modularUnit / 2;
	this.center_y = this.y * this.canvas.modularUnit - this.canvas.modularUnit / 2;
	ctx.beginPath();
	ctx.arc(this.center_x, this.center_y, r, 0, 360);
	ctx.fill();
};
GridField.prototype.filled = function() {
	console.log(this.x, this.y, "filled")
};