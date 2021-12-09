class Pufferfish extends MoveableObject {
  height = 60;
  width = 60;
  img;
  imagesSwim = [];
  constructor() {
    super().loadImage(
      'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'
    );
    this.loadSwimImg();
    this.loadImages(this.imagesSwim);

    this.x = 200 + Math.random() * 500; // Zahl zwischen 200 und 700
    this.speed = 0.15 + Math.random() * 0.25;
    this.animate();
  }

  loadSwimImg() {
    for (let i = 1; i <= 5; i++) {
      this.imagesSwim.push(
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim' + i + '.png'
      );
    }
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
    setInterval(() => {
      this.playAnimation(this.imagesSwim);
    }, 200);
  }
}
