


const Battlefield = function(ID) {
	Grid.call(this,10,10);
	this.ID = ID;	
}
Battlefield.prototype = Object.create(Grid.prototype)
Battlefield.prototype.constructor = Battlefield;







const battlefieldOne = new Battlefield('One');

