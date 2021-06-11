import Phaser from 'phaser';
import PlayScene from './scenes/Play';
import PreloadScene from './scenes/Preload';



const WIDTH = 1280;
const HEIGHT = 600;

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
}

const Scenes = [PreloadScene, PlayScene];

const createScene = Scene => new Scene(SHARED_CONFIG);
const initScenes = () => Scenes.map(createScene);

// canvas width and height in px
const config = {
  type: Phaser.AUTO,  // default interpreter is WebGL (web graphics library)
  ...SHARED_CONFIG,
  pixelArt: true,
  physics: {
    default: 'arcade',    // arcade physics plugin, manages physics simulation like gravity
    arcade: {
     debug: true,
    }
  },
  scene: initScenes() 
}

new Phaser.Game(config);
