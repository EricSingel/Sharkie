class Endboss extends MoveableObject {
  height = 400;
  width = 400;
  x;
  y = 40;
  imagesIntro = [];
  imagesFloating = [];

  constructor(levelEndX) {
    super().loadImage('img/2.Enemy/3 Final Enemy/2.floating/1.png');
    this.loadIntroImg();
    this.loadFloatingImg();
    this.loadImages(this.imagesFloating);
    this.x = levelEndX - 300;
    this.animate();
  }

  loadIntroImg() {
    for (let i = 1; i <= 6; i++) {
      this.imagesIntro.push(
        'img/2.Enemy/3 Final Enemy/1.Introduce/' + i + '.png'
      );
    }
  }
  loadFloatingImg() {
    for (let i = 1; i <= 6; i++) {
      this.imagesFloating.push(
        'img/2.Enemy/3 Final Enemy/2.floating/' + i + '.png'
      );
    }
  }
  animate() {
    setInterval(() => {
      this.playAnimation(this.imagesFloating);
    }, 200);
  }
}
