import 'phaser';

import Preload from './preload';

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: Preload
};

const game = new Phaser.Game(config);