class Stone1 extends MoveableObject {
  y = 300;
  height = 60;
  width = 140;

  constructor() {
    super().loadImage('img/3. Background/Barrier/2.png');

    this.x = Math.random() * 500;
    this.animate();
  }

  animate() {
    this.moveLeft();
  }
}
