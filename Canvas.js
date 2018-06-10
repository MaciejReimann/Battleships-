

function createCanvas(width, height, className) {
  const canvas = document.createElement("CANVAS");
  canvas.width = width;
  canvas.height = height;
  canvas.className= className;
  return canvas;
}

const CanvasConfig = function(mod, wInMod, hInMod, className) { 
  this.modularUnit = mod;
  this.width = this.modularUnit * wInMod;
  this.height = this.modularUnit * hInMod;
  this.className = className;
};

const Canvas = function(config) {
  this.modularUnit = config.modularUnit;
  this.DOMElement = createCanvas(config.width, config.height, config.className);  
  this.ctx = this.DOMElement.getContext('2d');
  this.eventListeners = [];
};

Canvas.prototype.append = function(parentElement) {
  this.parentElement = parentElement;
  this.parentElement.appendChild(this.DOMElement);
  return this;
};

Canvas.prototype.addListener = function(listener) { // array
  if (!this.eventListeners.some(item => haveEqualContent(item, listener))) {
    this.eventListeners.push(listener);
    this.eventListeners.forEach( listener => 
      this.DOMElement.addEventListener(listener[0], listener[1])
    );
  }  
  return this.eventListeners
};

Canvas.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
};
// Canvas.prototype.render = function(shape) {
//   this.clear();
//   this.renderContent();
// };

Canvas.prototype.getRelativeMousePositionInMods = function(mouseX, mouseY) {
  return [
    Math.ceil( (mouseX - this.DOMElement.offsetLeft) / this.modularUnit ), 
    Math.ceil( (mouseY - this.DOMElement.offsetTop) / this.modularUnit )
  ];
};

Canvas.prototype.crossHorizontalLine = function(y) {
  this.ctx.beginPath();
  this.ctx.moveTo(0,y);
  this.ctx.lineTo(this.DOMElement.width, y);
  this.ctx.stroke();
};

Canvas.prototype.crossVerticalLine = function(x) {
  this.ctx.beginPath();
  this.ctx.moveTo(x,0);
  this.ctx.lineTo(x, this.DOMElement.height);
  this.ctx.stroke();
};

Canvas.prototype.drawRectGrid = function() {
  let width = this.DOMElement.width;
  let height = this.DOMElement.height;
  let mod_W = this.modularUnit;
  let mod_H = this.modularUnit;
  while (mod_W < this.DOMElement.width && mod_H < this.DOMElement.height) {
    this.crossHorizontalLine(mod_W);
    this.crossVerticalLine(mod_H);
    mod_W += this.modularUnit;
    mod_H += this.modularUnit;
  };
};

Canvas.prototype.fillGridField = function(x) {
  this.ctx.beginPath();
  this.ctx.moveTo(x,0);
  this.ctx.lineTo(x, this.DOMElement.height);
  this.ctx.stroke();
};
