class World {
  character = new Character();
  statusbar = new StatusBar(
    [
      'img/4. Marcadores/green/Life/0_  copia 3.png',
      'img/4. Marcadores/green/Life/20_ copia 4.png',
      'img/4. Marcadores/green/Life/40_  copia 3.png',
      'img/4. Marcadores/green/Life/60_  copia 3.png',
      'img/4. Marcadores/green/Life/80_  copia 3.png',
      'img/4. Marcadores/green/Life/100_  copia 2.png',
    ],
    0,
    0,
    100
  );
  coinbar = new StatusBar(
    [
      'img/4. Marcadores/green/Coin/0_  copia 4.png',
      'img/4. Marcadores/green/Coin/20_  copia 2.png',
      'img/4. Marcadores/green/Coin/40_  copia 4.png',
      'img/4. Marcadores/green/Coin/60_  copia 4.png',
      'img/4. Marcadores/green/Coin/80_  copia 4.png',
      'img/4. Marcadores/green/Coin/100_ copia 4.png',
    ],
    0,
    40,
    0
  );
  bubblebar = new StatusBar(
    [
      'img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png',
      'img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png',
      'img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png',
      'img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png',
      'img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png',
      'img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png',
    ],
    0,
    80,
    0
  );
  throwableObjects = [];
  level = level1;
  ctx;
  canvas;
  keyboard;
  cameraX = 0;
  coinCounter = 0;

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
      this.checkCollisions();
      this.checkThrowObjects();
    }, 500);
  }

  checkThrowObjects() {
    if (this.keyboard.d) {
      let bubble = new ThrowableObject(this.character.x, this.character.y);
      this.throwableObjects.push(bubble);
    }
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy) && !this.character.isDead()) {
        this.character.hit();
        this.statusbar.setPercentage(this.character.energy);
      }
    });
    this.level.coins.forEach((coin) => {
      if (this.character.isColliding(coin)) {
        this.level.coins.pop(coin);
        this.coinCounter++;
        this.coinbar.setPercentage(this.coinCounter * 10);
      }
    });
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
    this.addObjectsToMap(this.level.coins);
    this.addToMap(this.character);
    this.addObjectsToMap(this.throwableObjects);
    this.ctx.translate(-this.cameraX, 0);

    //---------Space for fixed Objects----------
    this.addToMap(this.statusbar);
    this.addToMap(this.coinbar);
    this.addToMap(this.bubblebar);
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
