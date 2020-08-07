var game = function () {
  this.canvas = null;
  this.context = null;
  this.width = 288;
  this.height = 505;

  this.bird = null;
  this.bg = null;

  var self = this;

  this.init = function () {
    this.canvas = document.createElement("canvas");
    this.context = this.canvas;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    document.body.appendChild(this.canvas);

    // create new bird
    this.bird = new bird(this);
    this.bird.init();

    //create background
    this.bg = new bg(this);
    this.bg.init();

    this.loop();
  };

  this.loop = function () {
    self.update();
    self.draw();
    setTimeout(self.loop, 33);
  };

  this.update = function () {
    this.bird.update();
    this.bg.update();
  };

  this.draw = function () {
    this.bird.draw();
    this.bg.draw();
  };
};

var g = new game();
g.init();
