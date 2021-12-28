class pickableObject extends DrawableObject {
  constructor(levelEndX, image) {
    super();
    this.loadImage(image);
    this.x = Math.random() * levelEndX + 719;
    this.y = Math.random() * 480;
  }
}
