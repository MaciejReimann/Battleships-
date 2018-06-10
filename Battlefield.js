

const Battlefield = function(ID, canvasConfig, parentEl) {
	Grid.call(this,10,10);
	this.ID = ID;
	this.canvas = new Canvas(canvasConfig).append(parentEl);
}

Battlefield.prototype = Object.create(Grid.prototype);
Battlefield.prototype.constructor = Battlefield;

