

const GridField = function(x, y, canvas) {
	this.x = x;
	this.y = y;
	this.canvas = canvas;
	this.status = 'empty';
};
GridField.prototype.extend = function(obj) {
	let properties = Object.keys(obj);
	properties.forEach( prop => {
		let value = obj[prop];
		this[prop] = value;
	});
};
GridField.prototype.outline = function(lineWidth) {
	let ctx = this.canvas.ctx;
	let mod = this.canvas.modularUnit;
	this.position_x = this.x * mod;
	this.position_y = this.y * mod;
	ctx.lineWidth = lineWidth;
	ctx.rect(this.position_x - mod, this.position_y - mod, mod, mod);
	ctx.stroke();
};
GridField.prototype.highlighted = function(lineWidth, fillColor) {
	this.canvas.ctx.beginPath();
	this.outline(lineWidth * 2);
	this.canvas.ctx.fillStyle = fillColor;
	this.status = 'highlighted';
};
GridField.prototype.drawCross = function(lineWidth) {

	this.highlighted(lineWidth);
	let ctx = this.canvas.ctx;
	let mod = this.canvas.modularUnit;
	ctx.beginPath();
	ctx.lineWidth = lineWidth;
	ctx.moveTo(this.position_x, this.position_y);
	ctx.lineTo(this.position_x - mod, this.position_y - mod);
	ctx.moveTo(this.position_x - mod, this.position_y);
	ctx.lineTo(this.position_x, this.position_y - mod);
	ctx.stroke();
	this.status = 'crossed';
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
	this.status = 'dotted';
};
GridField.prototype.filled = function(lineWidth, color) {	
	this.highlighted(lineWidth, color);
	this.canvas.ctx.fill();
	this.status = 'filled';
};