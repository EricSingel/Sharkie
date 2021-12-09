class Level {
  enemies;
  barriers;
  backgroundObjects;
  levelBgLength = 8;
  levelEndX;

  constructor(enemies, barriers, backgroundObjects, levelBgLength) {
    this.enemies = enemies;
    this.barriers = barriers;
    this.backgroundObjects = backgroundObjects;
    this.levelBgLength = levelBgLength;
    this.levelEndX = 719 * this.levelBgLength;
    this.loadBackgroundObjects();
  }

  loadBackgroundObjects() {
    for (let i = 1; i <= this.levelBgLength; i += 2) {
      this.backgroundObjects.push(
        new BackgroundObject(
          'img/3. Background/Layers/5. Water/L2.png',
          719 * i
        ),
        new BackgroundObject(
          'img/3. Background/Layers/1. Light/2.png',
          719 * i
        ),
        new BackgroundObject(
          'img/3. Background/Layers/4.Fondo 2/L2.png',
          719 * i
        ),
        new BackgroundObject(
          'img/3. Background/Layers/3.Fondo 1/L2.png',
          719 * i
        ),
        new BackgroundObject(
          'img/3. Background/Layers/2. Floor/L2.png',
          719 * i
        )
      );
    }
    for (let i = 2; i <= this.levelBgLength; i += 2) {
      this.backgroundObjects.push(
        new BackgroundObject(
          'img/3. Background/Layers/5. Water/L1.png',
          719 * i
        ),
        new BackgroundObject(
          'img/3. Background/Layers/1. Light/1.png',
          719 * i
        ),
        new BackgroundObject(
          'img/3. Background/Layers/4.Fondo 2/L1.png',
          719 * i
        ),
        new BackgroundObject(
          'img/3. Background/Layers/3.Fondo 1/L1.png',
          719 * i
        ),
        new BackgroundObject(
          'img/3. Background/Layers/2. Floor/L1.png',
          719 * i
        )
      );
    }
  }
}
