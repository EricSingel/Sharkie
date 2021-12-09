class DrawableObject {
  img;
  currentImage = 0;
  imageCache = [];
  x = 120;
  y = 0;
  height = 100;
  width = 100;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(array) {
    array.forEach((path) => {
      let image = new Image();
      image.src = path;
      this.imageCache[path] = image;
    });
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawRect(ctx) {
    if (
      this instanceof Character ||
      this instanceof Pufferfish ||
      this instanceof Endboss ||
      this instanceof Stone1 ||
      this instanceof Stone2
    ) {
      ctx.beginPath();
      ctx.lineWidth = '4';
      ctx.strokeStyle = 'green';
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }
}
