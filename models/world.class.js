class World {
  character = new Character();
  statusbar = new StatusBar();
  throwableObjects = [];
  level = level1;
  ctx;
  canvas;
  keyboard;
  cameraX = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.update();
  }

  update() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy) && !this.character.isDead()) {
          this.character.hit();
          this.statusbar.setPercentage(this.character.energy);
        }
      });
    }, 200);
  }

  setWorld() {
    this.character.world = this;
    this.statusbar.character = this.character;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.cameraX, 0);

    this.addObjectsToMap(this.level.backgroundObjects);

    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.barriers);
    this.addToMap(this.character);
    this.ctx.translate(-this.cameraX, 0);

    //---------Space for fixed Objects----------
    this.addToMap(this.statusbar);
    this.ctx.translate(this.cameraX, 0);

    this.ctx.translate(-this.cameraX, 0);

    let self = this;
    requestAnimationFrame(() => {
      // in this function no one knows "this"
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImg(mo);
    }
    mo.draw(this.ctx);
    mo.drawRect(this.ctx);
    if (mo.otherDirection) {
      this.flipImgBack(mo);
    }
  }

  flipImg(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImgBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}