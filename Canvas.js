

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

// Canvas.prototype.drawGrid = function() {
//   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
// };
