class Character extends MoveableObject {
  x = 0;
  height = 250;
  width = 200;
  imagesIDLE = [];
  imagesSwim = [];
  imagesDeadPoisoned = [];
  imagesHurtPoisoned = [];
  world;
  speed = 5;
  constructor() {
    super().loadImage('img/1.Sharkie/1.IDLE/1.png');
    this.loadIDLE();
    this.loadSwim();
    this.loadDeadPoisoned();
    this.loadHurtPoisoned();
    this.loadImages(this.imagesDeadPoisoned);
    this.loadImages(this.imagesHurtPoisoned);
    this.loadImages(this.imagesSwim);
    this.animate();
  }

  loadIDLE() {
    for (let i = 1; i <= 18; i++) {
      this.imagesIDLE.push('img/1.Sharkie/1.IDLE/' + i + '.png');
    }
  }
  loadDeadPoisoned() {
    for (let i = 1; i <= 12; i++) {
      this.imagesDeadPoisoned.push(
        'img/1.Sharkie/6.dead/1.Poisoned/' + i + '.png'
      );
    }
  }
  loadHurtPoisoned() {
    for (let i = 1; i <= 4; i++) {
      this.imagesHurtPoisoned.push(
        'img/1.Sharkie/5.Hurt/1.Poisoned/' + i + '.png'
      );
    }
  }
  loadSwim() {
    for (let i = 1; i <= 6; i++) {
      this.imagesSwim.push('img/1.Sharkie/3.Swim/' + i + '.png');
    }
  }

  animate() {
    setInterval(() => {
      if (this.world.keyboard.right && this.x < this.world.level.levelEndX) {
        this.otherDirection = false;
        this.moveRight();
      }
      if (this.world.keyboard.left && this.x > 0) {
        this.moveLeft();
        this.otherDirection = true;
      }
      if (this.world.keyboard.up && this.y > -80) {
        this.moveUp();
      }
      if (this.world.keyboard.down && this.y < 520 - this.height) {
        this.moveDown();
      }
      this.world.cameraX = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      if (this.isDead()) {
        this.playAnimation(this.imagesDeadPoisoned);
      } else if (this.isHurt()) {
        this.playAnimation(this.imagesHurtPoisoned);
      } else if (
        this.world.keyboard.right ||
        this.world.keyboard.left ||
        this.world.keyboard.up ||
        this.world.keyboard.down
      ) {
        // Walk animation
        this.playAnimation(this.imagesSwim);
      }
    }, 50);
  }
}
