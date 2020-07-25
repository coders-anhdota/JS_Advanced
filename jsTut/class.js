class Mouse {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log(`hello ${this.name}`);
  }
}

const mouse = new Mouse("Tele");
mouse.run();
