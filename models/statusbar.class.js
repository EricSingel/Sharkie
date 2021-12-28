class StatusBar extends DrawableObject {
  imagesLife = [];
  x;
  percentage = 100;
  character;

  constructor(imgArray, x, y, startPercentage) {
    super().imagesLife = imgArray;
    this.loadImages(this.imagesLife);
    this.x = x;
    this.y = y;
    this.width = 150;
    this.height = 50;
    this.setPercentage(startPercentage);
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.imagesLife[this.resolveImgIndex()];
    this.img = this.imageCache[path];
  }

  resolveImgIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
