// Initial setup for the game
const Game = new Phaser.Game(640, 360, Phaser.AUTO);

let GameState = {
  // Loads the game assets before the game starts
  preload: function() {
    this.load.image('bird', '../images/bird.png');
    this.load.image('background', '../images/bg.png');
    this.load.image('ground', '../images/ground.png');
    this.load.image('tube1', '../images/tube1.png');
    this.load.image('tube2', '../images/tube2.png');
  },

  create: function() {

  },

  update: function() {

  }
};
