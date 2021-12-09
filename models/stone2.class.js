class Stone2 extends MoveableObject {
  y = 200;
  height = 150;
  width = 60;

  constructor() {
    super().loadImage('img/3. Background/Barrier/3.png');

    this.x = Math.random() * 500;
    this.y = 300;
  }
}
