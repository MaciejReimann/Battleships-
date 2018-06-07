


const CanvasConfig = function(mod, wInMod, hInMod, parentEl, className) { 
  this.modularUnit = mod;
  this.width = this.modularUnit * wInMod;
  this.height = this.modularUnit * hInMod;
  this.parentElement = parentEl;
  this.className = className;
};

const Canvas = function(config) {
  this.config = config;
  this.modularUnit = this.config.modularUnit;
  this.canvas = document.createElement('canvas');
  this.config.parentElement.appendChild(this.canvas);
  this.canvas.className = this.config.className;
  this.canvas.width = this.config.width;
  this.canvas.height = this.config.height;  
  this.ctx = this.canvas.getContext('2d');
  this.content = [];
};

Canvas.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
};
Canvas.prototype.render = function(shape) {
  this.clear();
  this.renderContent();
};

Canvas.prototype.renderContent = function(tetris) {

};

