var bg = function (game) {
  this.game = game;
  this.image = null;
  this.loaded = false;

  var self = this;

  this.init = function () {
    this.loadImage();
  };

  this.loadImage = function () {
    this.image = new Image();
    this.image.onload = function () {
      self.loaded = true;
      console.log("image loaded");
    };
    this.image.src = "images/bgdark.png";
  };
  this.update = function () {};

  this.draw = function () {
    if (self.loaded === false) {
      return;
    }
    console.log(this.game.context)
    this.game.context.drawImage(this.image, 0, 0);
  };

};
